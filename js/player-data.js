const PLAYERS_DATA = [
  {
    "id": "9509",
    "name": "Bijan Robinson",
    "position": "RB",
    "team": "ATL",
    "bye_week": "N/A",
    "adp": 1,
    "rank": 1
  },
  {
    "id": "4984",
    "name": "Josh Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "N/A",
    "adp": 1,
    "rank": 2
  },
  {
    "id": "7564",
    "name": "Ja'Marr Chase",
    "position": "WR",
    "team": "CIN",
    "bye_week": "N/A",
    "adp": 3,
    "rank": 3
  },
  {
    "id": "9221",
    "name": "Jahmyr Gibbs",
    "position": "RB",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 3,
    "rank": 4
  },
  {
    "id": "11564",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "N/A",
    "adp": 3,
    "rank": 5
  },
  {
    "id": "6813",
    "name": "Jonathan Taylor",
    "position": "RB",
    "team": "IND",
    "bye_week": "N/A",
    "adp": 4,
    "rank": 6
  },
  {
    "id": "8138",
    "name": "James Cook",
    "position": "RB",
    "team": "BUF",
    "bye_week": "N/A",
    "adp": 5,
    "rank": 7
  },
  {
    "id": "9488",
    "name": "Jaxon Smith-Njigba",
    "position": "WR",
    "team": "SEA",
    "bye_week": "N/A",
    "adp": 5,
    "rank": 8
  },
  {
    "id": "9493",
    "name": "Puka Nacua",
    "position": "WR",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 5,
    "rank": 9
  },
  {
    "id": "4034",
    "name": "Christian McCaffrey",
    "position": "RB",
    "team": "SF",
    "bye_week": "N/A",
    "adp": 5,
    "rank": 10
  },
  {
    "id": "8151",
    "name": "Kenneth Walker",
    "position": "RB",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 7,
    "rank": 11
  },
  {
    "id": "11566",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 9,
    "rank": 12
  },
  {
    "id": "9226",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "N/A",
    "adp": 10,
    "rank": 13
  },
  {
    "id": "6786",
    "name": "CeeDee Lamb",
    "position": "WR",
    "team": "DAL",
    "bye_week": "N/A",
    "adp": 11,
    "rank": 14
  },
  {
    "id": "6770",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "N/A",
    "adp": 11,
    "rank": 15
  },
  {
    "id": "7547",
    "name": "Amon-Ra St. Brown",
    "position": "WR",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 11,
    "rank": 16
  },
  {
    "id": "12507",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 12,
    "rank": 17
  },
  {
    "id": "4881",
    "name": "Lamar Jackson",
    "position": "QB",
    "team": "BAL",
    "bye_week": "N/A",
    "adp": 12,
    "rank": 18
  },
  {
    "id": "12527",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "N/A",
    "adp": 12,
    "rank": 19
  },
  {
    "id": "6794",
    "name": "Justin Jefferson",
    "position": "WR",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 12,
    "rank": 20
  },
  {
    "id": "4866",
    "name": "Saquon Barkley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 13,
    "rank": 21
  },
  {
    "id": "8112",
    "name": "Drake London",
    "position": "WR",
    "team": "ATL",
    "bye_week": "N/A",
    "adp": 14,
    "rank": 22
  },
  {
    "id": "13287",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 15,
    "rank": 23
  },
  {
    "id": "11560",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 15,
    "rank": 24
  },
  {
    "id": "9224",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "N/A",
    "adp": 18,
    "rank": 25
  },
  {
    "id": "8130",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 19,
    "rank": 26
  },
  {
    "id": "11632",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 19,
    "rank": 27
  },
  {
    "id": "5850",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "N/A",
    "adp": 20,
    "rank": 28
  },
  {
    "id": "7569",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 21,
    "rank": 29
  },
  {
    "id": "11584",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 22,
    "rank": 30
  },
  {
    "id": "8137",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "N/A",
    "adp": 23,
    "rank": 31
  },
  {
    "id": "3198",
    "name": "Derrick Henry",
    "position": "RB",
    "team": "BAL",
    "bye_week": "N/A",
    "adp": 24,
    "rank": 32
  },
  {
    "id": "12508",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 24,
    "rank": 33
  },
  {
    "id": "6797",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 25,
    "rank": 34
  },
  {
    "id": "6904",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 26,
    "rank": 35
  },
  {
    "id": "4046",
    "name": "Patrick Mahomes",
    "position": "QB",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 26,
    "rank": 36
  },
  {
    "id": "8150",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 26,
    "rank": 37
  },
  {
    "id": "8144",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 26,
    "rank": 38
  },
  {
    "id": "11604",
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "N/A",
    "adp": 26,
    "rank": 39
  },
  {
    "id": "2315",
    "name": "Todd Gurley",
    "position": "RB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 27,
    "rank": 40
  },
  {
    "id": "8155",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 27,
    "rank": 41
  },
  {
    "id": "7543",
    "name": "Travis Etienne",
    "position": "RB",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 30,
    "rank": 42
  },
  {
    "id": "5859",
    "name": "A.J. Brown",
    "position": "WR",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 31,
    "rank": 43
  },
  {
    "id": "7523",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 31,
    "rank": 44
  },
  {
    "id": "7588",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "N/A",
    "adp": 32,
    "rank": 45
  },
  {
    "id": "10229",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 33,
    "rank": 46
  },
  {
    "id": "11563",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 34,
    "rank": 47
  },
  {
    "id": "6801",
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "N/A",
    "adp": 36,
    "rank": 48
  },
  {
    "id": "12529",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "N/A",
    "adp": 37,
    "rank": 49
  },
  {
    "id": "8183",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "N/A",
    "adp": 37,
    "rank": 50
  },
  {
    "id": "12526",
    "name": "Tetairoa McMillan",
    "position": "WR",
    "team": "CAR",
    "bye_week": "N/A",
    "adp": 37,
    "rank": 51
  },
  {
    "id": "8146",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 38,
    "rank": 52
  },
  {
    "id": "13269",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "N/A",
    "adp": 39,
    "rank": 53
  },
  {
    "id": "12519",
    "name": "Luther Burden",
    "position": "WR",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 40,
    "rank": 54
  },
  {
    "id": "12489",
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 40,
    "rank": 55
  },
  {
    "id": "12481",
    "name": "Cam Skattebo",
    "position": "RB",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 41,
    "rank": 56
  },
  {
    "id": "7526",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 42,
    "rank": 57
  },
  {
    "id": "12490",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 44,
    "rank": 58
  },
  {
    "id": "9499",
    "name": "Bryce Ford-Wheaton",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 44,
    "rank": 59
  },
  {
    "id": "3294",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "N/A",
    "adp": 45,
    "rank": 60
  },
  {
    "id": "12512",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "N/A",
    "adp": 45,
    "rank": 61
  },
  {
    "id": "2133",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 46,
    "rank": 62
  },
  {
    "id": "6790",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 47,
    "rank": 63
  },
  {
    "id": "11635",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 47,
    "rank": 64
  },
  {
    "id": "12517",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 48,
    "rank": 65
  },
  {
    "id": "5892",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 48,
    "rank": 66
  },
  {
    "id": "9997",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "N/A",
    "adp": 49,
    "rank": 67
  },
  {
    "id": "6804",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "N/A",
    "adp": 50,
    "rank": 68
  },
  {
    "id": "8148",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 52,
    "rank": 69
  },
  {
    "id": "8228",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "N/A",
    "adp": 52,
    "rank": 70
  },
  {
    "id": "7525",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 53,
    "rank": 71
  },
  {
    "id": "12514",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 54,
    "rank": 72
  },
  {
    "id": "5927",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 56,
    "rank": 73
  },
  {
    "id": "12518",
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "N/A",
    "adp": 57,
    "rank": 74
  },
  {
    "id": "7611",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "N/A",
    "adp": 58,
    "rank": 75
  },
  {
    "id": "4983",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "N/A",
    "adp": 59,
    "rank": 76
  },
  {
    "id": "2216",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "N/A",
    "adp": 60,
    "rank": 77
  },
  {
    "id": "13279",
    "name": "Carnell Tate",
    "position": "WR",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 61,
    "rank": 78
  },
  {
    "id": "12534",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 61,
    "rank": 79
  },
  {
    "id": "5967",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 63,
    "rank": 80
  },
  {
    "id": "12506",
    "name": "Harold Fannin",
    "position": "TE",
    "team": "CLE",
    "bye_week": "N/A",
    "adp": 63,
    "rank": 81
  },
  {
    "id": "4892",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 64,
    "rank": 82
  },
  {
    "id": "8167",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "N/A",
    "adp": 64,
    "rank": 83
  },
  {
    "id": "7021",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "N/A",
    "adp": 65,
    "rank": 84
  },
  {
    "id": "3163",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 66,
    "rank": 85
  },
  {
    "id": "7594",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "N/A",
    "adp": 66,
    "rank": 86
  },
  {
    "id": "11620",
    "name": "Rome Odunze",
    "position": "WR",
    "team": "CHI",
    "bye_week": "N/A",
    "adp": 68,
    "rank": 87
  },
  {
    "id": "11586",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 68,
    "rank": 88
  },
  {
    "id": "13281",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 70,
    "rank": 89
  },
  {
    "id": "9484",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "N/A",
    "adp": 71,
    "rank": 90
  },
  {
    "id": "5045",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 72,
    "rank": 91
  },
  {
    "id": "7553",
    "name": "Kyle Pitts",
    "position": "TE",
    "team": "ATL",
    "bye_week": "N/A",
    "adp": 73,
    "rank": 92
  },
  {
    "id": "5846",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "N/A",
    "adp": 73,
    "rank": 93
  },
  {
    "id": "167",
    "name": "Tom Brady",
    "position": "QB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 74,
    "rank": 94
  },
  {
    "id": "10232",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 75,
    "rank": 95
  },
  {
    "id": "12522",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 75,
    "rank": 96
  },
  {
    "id": "6806",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 75,
    "rank": 97
  },
  {
    "id": "289",
    "name": "Drew Brees",
    "position": "QB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 76,
    "rank": 98
  },
  {
    "id": "5947",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 77,
    "rank": 99
  },
  {
    "id": "13294",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 77,
    "rank": 100
  },
  {
    "id": "10859",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 79,
    "rank": 101
  },
  {
    "id": "5872",
    "name": "Deebo Samuel",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 79,
    "rank": 102
  },
  {
    "id": "11631",
    "name": "Brian Thomas",
    "position": "WR",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 79,
    "rank": 103
  },
  {
    "id": "8154",
    "name": "Brian Robinson",
    "position": "RB",
    "team": "ATL",
    "bye_week": "N/A",
    "adp": 80,
    "rank": 104
  },
  {
    "id": "9758",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 80,
    "rank": 105
  },
  {
    "id": "12545",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 81,
    "rank": 106
  },
  {
    "id": "10236",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "N/A",
    "adp": 81,
    "rank": 107
  },
  {
    "id": "12493",
    "name": "Oronde Gadsden",
    "position": "TE",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 83,
    "rank": 108
  },
  {
    "id": "11628",
    "name": "Marvin Harrison",
    "position": "WR",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 83,
    "rank": 109
  },
  {
    "id": "4943",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "N/A",
    "adp": 84,
    "rank": 110
  },
  {
    "id": "4199",
    "name": "Aaron Jones",
    "position": "RB",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 85,
    "rank": 111
  },
  {
    "id": "11638",
    "name": "Ricky Pearsall",
    "position": "WR",
    "team": "SF",
    "bye_week": "N/A",
    "adp": 86,
    "rank": 112
  },
  {
    "id": "7567",
    "name": "Kenneth Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 86,
    "rank": 113
  },
  {
    "id": "4037",
    "name": "Chris Godwin",
    "position": "WR",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 88,
    "rank": 114
  },
  {
    "id": "8142",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "N/A",
    "adp": 88,
    "rank": 115
  },
  {
    "id": "8132",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 89,
    "rank": 116
  },
  {
    "id": "536",
    "name": "Antonio Brown",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 89,
    "rank": 117
  },
  {
    "id": "9487",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 90,
    "rank": 118
  },
  {
    "id": "4137",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 92,
    "rank": 119
  },
  {
    "id": "3214",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "N/A",
    "adp": 92,
    "rank": 120
  },
  {
    "id": "344",
    "name": "Julian Edelman",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 92,
    "rank": 121
  },
  {
    "id": "5849",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 92,
    "rank": 122
  },
  {
    "id": "5022",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 94,
    "rank": 123
  },
  {
    "id": "12533",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 95,
    "rank": 124
  },
  {
    "id": "5012",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "N/A",
    "adp": 96,
    "rank": 125
  },
  {
    "id": "8110",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "N/A",
    "adp": 97,
    "rank": 126
  },
  {
    "id": "9228",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "N/A",
    "adp": 98,
    "rank": 127
  },
  {
    "id": "5001",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 98,
    "rank": 128
  },
  {
    "id": "4217",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "N/A",
    "adp": 99,
    "rank": 129
  },
  {
    "id": "9756",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 99,
    "rank": 130
  },
  {
    "id": "13286",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "N/A",
    "adp": 101,
    "rank": 131
  },
  {
    "id": "9753",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "N/A",
    "adp": 101,
    "rank": 132
  },
  {
    "id": "421",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 103,
    "rank": 133
  },
  {
    "id": "7002",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 103,
    "rank": 134
  },
  {
    "id": "9480",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 104,
    "rank": 135
  },
  {
    "id": "5248",
    "name": "Gus Edwards",
    "position": "RB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 104,
    "rank": 136
  },
  {
    "id": "8924",
    "name": "Thomas Odukoya",
    "position": "TE",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 104,
    "rank": 137
  },
  {
    "id": "12474",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 105,
    "rank": 138
  },
  {
    "id": "8126",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 105,
    "rank": 139
  },
  {
    "id": "1466",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 106,
    "rank": 140
  },
  {
    "id": "6819",
    "name": "Michael Pittman",
    "position": "WR",
    "team": "PIT",
    "bye_week": "N/A",
    "adp": 108,
    "rank": 141
  },
  {
    "id": "5870",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "N/A",
    "adp": 109,
    "rank": 142
  },
  {
    "id": "13330",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 109,
    "rank": 143
  },
  {
    "id": "8161",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "N/A",
    "adp": 109,
    "rank": 144
  },
  {
    "id": "11655",
    "name": "Tyrone Tracy",
    "position": "RB",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 110,
    "rank": 145
  },
  {
    "id": "9754",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 110,
    "rank": 146
  },
  {
    "id": "3164",
    "name": "Ezekiel Elliott",
    "position": "RB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 111,
    "rank": 147
  },
  {
    "id": "8408",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 112,
    "rank": 148
  },
  {
    "id": "8131",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 113,
    "rank": 149
  },
  {
    "id": "13337",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 113,
    "rank": 150
  },
  {
    "id": "11589",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "N/A",
    "adp": 114,
    "rank": 151
  },
  {
    "id": "1479",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 116,
    "rank": 152
  },
  {
    "id": "8121",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "N/A",
    "adp": 117,
    "rank": 153
  },
  {
    "id": "515",
    "name": "Rob Gronkowski",
    "position": "TE",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 118,
    "rank": 154
  },
  {
    "id": "13345",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "N/A",
    "adp": 118,
    "rank": 155
  },
  {
    "id": "10222",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "N/A",
    "adp": 119,
    "rank": 156
  },
  {
    "id": "3157",
    "name": "William Fuller",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 119,
    "rank": 157
  },
  {
    "id": "4035",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "N/A",
    "adp": 119,
    "rank": 158
  },
  {
    "id": "8134",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "N/A",
    "adp": 120,
    "rank": 159
  },
  {
    "id": "2449",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 121,
    "rank": 160
  },
  {
    "id": "11624",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "N/A",
    "adp": 122,
    "rank": 161
  },
  {
    "id": "9508",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 122,
    "rank": 162
  },
  {
    "id": "7049",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 123,
    "rank": 163
  },
  {
    "id": "6789",
    "name": "Henry Ruggs",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 124,
    "rank": 164
  },
  {
    "id": "8136",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 125,
    "rank": 165
  },
  {
    "id": "11603",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "N/A",
    "adp": 126,
    "rank": 166
  },
  {
    "id": "5890",
    "name": "Damien Harris",
    "position": "RB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 126,
    "rank": 167
  },
  {
    "id": "12484",
    "name": "Jayden Higgins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "N/A",
    "adp": 126,
    "rank": 168
  },
  {
    "id": "5889",
    "name": "Bryce Love",
    "position": "RB",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 127,
    "rank": 169
  },
  {
    "id": "5844",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "N/A",
    "adp": 128,
    "rank": 170
  },
  {
    "id": "12469",
    "name": "Dylan Sampson",
    "position": "RB",
    "team": "CLE",
    "bye_week": "N/A",
    "adp": 129,
    "rank": 171
  },
  {
    "id": "13298",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "N/A",
    "adp": 129,
    "rank": 172
  },
  {
    "id": "2374",
    "name": "Tyler Lockett",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 131,
    "rank": 173
  },
  {
    "id": "4033",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 131,
    "rank": 174
  },
  {
    "id": "11646",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "N/A",
    "adp": 132,
    "rank": 175
  },
  {
    "id": "9500",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "N/A",
    "adp": 133,
    "rank": 176
  },
  {
    "id": "11576",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 135,
    "rank": 177
  },
  {
    "id": "6865",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 136,
    "rank": 178
  },
  {
    "id": "8210",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 137,
    "rank": 179
  },
  {
    "id": "12498",
    "name": "Mason Taylor",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 138,
    "rank": 180
  },
  {
    "id": "13305",
    "name": "Mike Washington",
    "position": "RB",
    "team": "LV",
    "bye_week": "N/A",
    "adp": 139,
    "rank": 181
  },
  {
    "id": "13349",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 140,
    "rank": 182
  },
  {
    "id": "11647",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 141,
    "rank": 183
  },
  {
    "id": "12487",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 141,
    "rank": 184
  },
  {
    "id": "13275",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "N/A",
    "adp": 141,
    "rank": 185
  },
  {
    "id": "10219",
    "name": "Chris Rodriguez",
    "position": "RB",
    "team": "JAX",
    "bye_week": "N/A",
    "adp": 143,
    "rank": 186
  },
  {
    "id": "11597",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "N/A",
    "adp": 144,
    "rank": 187
  },
  {
    "id": "11583",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "N/A",
    "adp": 144,
    "rank": 188
  },
  {
    "id": "3321",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 145,
    "rank": 189
  },
  {
    "id": "9225",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "N/A",
    "adp": 147,
    "rank": 190
  },
  {
    "id": "8111",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 148,
    "rank": 191
  },
  {
    "id": "9511",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "N/A",
    "adp": 148,
    "rank": 192
  },
  {
    "id": "4234",
    "name": "Noah Brown",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 150,
    "rank": 193
  },
  {
    "id": "2197",
    "name": "Brandin Cooks",
    "position": "WR",
    "team": "FA",
    "bye_week": "N/A",
    "adp": 151,
    "rank": 194
  },
  {
    "id": "8205",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "N/A",
    "adp": 151,
    "rank": 195
  },
  {
    "id": "13276",
    "name": "Omar Cooper",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "N/A",
    "adp": 151,
    "rank": 196
  },
  {
    "id": "12502",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "N/A",
    "adp": 153,
    "rank": 197
  },
  {
    "id": "13346",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "N/A",
    "adp": 153,
    "rank": 198
  },
  {
    "id": "9506",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "N/A",
    "adp": 155,
    "rank": 199
  },
  {
    "id": "13301",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "N/A",
    "adp": 156,
    "rank": 200
  }
];