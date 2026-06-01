// Half-PPR consensus ADP is the 1.0 baseline from FantasyPros.
// Multiplier < 1.0 = drafted earlier; > 1.0 = drafted later.
const SCORING_MULTIPLIERS = {
  PPR:        { WR: 0.85, RB: 1.12, TE: 0.95, QB: 1.20 },
  'Half-PPR': { WR: 1.00, RB: 1.00, TE: 1.00, QB: 1.00 },
  Standard:   { WR: 1.15, RB: 0.88, TE: 1.05, QB: 0.95 },
};

const LEAGUE_SIZE_FACTOR = { 8: 0.90, 10: 1.0, 12: 1.05, 14: 1.12 };

function buildRankings(leagueSize, scoringType) {
  if (typeof PLAYERS_DATA === 'undefined' || !Array.isArray(PLAYERS_DATA)) {
    console.error('PLAYERS_DATA is not loaded. Ensure js/player-data.js is included before cheat-sheet.js.');
    return [];
  }

  const posMul = SCORING_MULTIPLIERS[scoringType] || SCORING_MULTIPLIERS['Half-PPR'];
  const factor = LEAGUE_SIZE_FACTOR[leagueSize] || 1.0;

  const adjusted = PLAYERS_DATA.map((p) => {
    const baseAdp = Number(p.adp) || 999;
    const multiplier = posMul[p.position] || 1.0;
    const finalMultiplier = 1 + (multiplier - 1) * factor;
    const adjustedAdp = Math.max(1, baseAdp * finalMultiplier);
    return { ...p, adjustedAdp };
  });

  adjusted.sort((a, b) => a.adjustedAdp - b.adjustedAdp);

  return adjusted.slice(0, 200).map((p, i) => ({
    rank: i + 1,
    name: p.name,
    position: p.position,
    team: p.team || 'FA',
    byeWeek: p.bye_week ?? 'N/A',
    adp: p.adjustedAdp.toFixed(1),
  }));
}

function renderRankings(rankings, tableBody) {
  if (!rankings.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;padding:2rem;color:#5a6270;">
          No player data available. Please check that js/player-data.js loaded correctly.
        </td>
      </tr>`;
    return;
  }

  tableBody.innerHTML = rankings.map((p) => `
    <tr>
      <td class="rank-num">${p.rank}</td>
      <td><strong>${p.name}</strong></td>
      <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
      <td>${p.team}</td>
      <td>${p.byeWeek}</td>
      <td>${p.adp}</td>
    </tr>
  `).join('');
}

function updateCheatSheet(form, tableBody, resultsMeta, resultsSection) {
  const leagueSize = parseInt(document.getElementById('league-size').value, 10);
  const scoringType = document.getElementById('scoring-type').value;

  const rankings = buildRankings(leagueSize, scoringType);
  renderRankings(rankings, tableBody);

  const updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  resultsMeta.textContent =
    `${leagueSize}-Team League · ${scoringType} Scoring · ${rankings.length} Players · Updated ${updated}`;

  resultsSection.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cheat-sheet-form');
  const resultsSection = document.getElementById('results-section');
  const tableBody = document.getElementById('rankings-body');
  const resultsMeta = document.getElementById('results-meta');
  const exportBtn = document.getElementById('export-btn');
  const leagueSizeSelect = document.getElementById('league-size');
  const scoringTypeSelect = document.getElementById('scoring-type');

  if (!form || !tableBody || !resultsSection || !resultsMeta) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateCheatSheet(form, tableBody, resultsMeta, resultsSection);
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const onOptionChange = () => {
    if (resultsSection.classList.contains('visible')) {
      updateCheatSheet(form, tableBody, resultsMeta, resultsSection);
    }
  };

  if (leagueSizeSelect) leagueSizeSelect.addEventListener('change', onOptionChange);
  if (scoringTypeSelect) scoringTypeSelect.addEventListener('change', onOptionChange);

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const leagueSize = document.getElementById('league-size').value;
      const scoringType = document.getElementById('scoring-type').value;
      const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        window.print();
        return;
      }

      const rows = tableBody.innerHTML;
      printWindow.document.write(`<!DOCTYPE html>
<html><head>
<title>Fantasy Football Cheat Sheet - ${leagueSize} Team ${scoringType}</title>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; color: #1a1a2e; }
  h1 { font-size: 18px; margin-bottom: 4px; }
  .meta { font-size: 12px; color: #666; margin-bottom: 16px; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; }
  th { background: #1a472a; color: #fff; padding: 6px 8px; text-align: left; }
  td { padding: 5px 8px; border-bottom: 1px solid #ddd; }
  tr:nth-child(even) { background: #f8f9fa; }
  .footer { margin-top: 20px; font-size: 10px; color: #999; }
</style></head><body>
<h1>2026 Fantasy Football Draft Cheat Sheet</h1>
<p class="meta">${leagueSize}-Team · ${scoringType} · Generated ${date} · gridiron-draft-companion.online</p>
<table>
<thead><tr><th>Rank</th><th>Player</th><th>Pos</th><th>Team</th><th>Bye</th><th>ADP</th></tr></thead>
<tbody>${rows}</tbody>
</table>
<p class="footer">© 2026 gridiron-draft-companion.online — Free Fantasy Football Draft Tools</p>
<script>window.onload=function(){window.print();}<\/script>
</body></html>`);
      printWindow.document.close();
    });
  }
});
