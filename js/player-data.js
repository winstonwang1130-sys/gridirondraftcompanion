const PLAYERS_DATA = [
  {
    "id": "fp_22968",
    "name": "Jahmyr Gibbs",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 1.0
  },
  {
    "id": "fp_23133",
    "name": "Bijan Robinson",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 2.0
  },
  {
    "id": "fp_19788",
    "name": "Ja'Marr Chase",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 3.0
  },
  {
    "id": "fp_23180",
    "name": "Puka Nacua",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 4.7
  },
  {
    "id": "fp_16393",
    "name": "Christian McCaffrey",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 4.7
  },
  {
    "id": "fp_19217",
    "name": "Jonathan Taylor",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 6.0
  },
  {
    "id": "fp_23070",
    "name": "Jaxon Smith-Njigba",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 7.0
  },
  {
    "id": "fp_19799",
    "name": "Amon-Ra St. Brown",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 7.7
  },
  {
    "id": "fp_22958",
    "name": "James Cook III",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 9.0
  },
  {
    "id": "fp_19202",
    "name": "CeeDee Lamb",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 11.3
  },
  {
    "id": "fp_17240",
    "name": "Saquon Barkley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 12.0
  },
  {
    "id": "fp_23136",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 12.0
  },
  {
    "id": "fp_19236",
    "name": "Justin Jefferson",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 12.0
  },
  {
    "id": "fp_25324",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 14.3
  },
  {
    "id": "fp_25395",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 15.7
  },
  {
    "id": "fp_25989",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 15.7
  },
  {
    "id": "fp_23021",
    "name": "Kenneth Walker III",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 16.0
  },
  {
    "id": "fp_15514",
    "name": "Derrick Henry",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 17.3
  },
  {
    "id": "fp_18218",
    "name": "A.J. Brown",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 20.3
  },
  {
    "id": "fp_23163",
    "name": "Drake London",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 20.3
  },
  {
    "id": "fp_17298",
    "name": "Josh Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 20.7
  },
  {
    "id": "fp_22955",
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 22.3
  },
  {
    "id": "fp_20130",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 23.3
  },
  {
    "id": "fp_22963",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 24.0
  },
  {
    "id": "fp_22936",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 26.0
  },
  {
    "id": "fp_20111",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 26.7
  },
  {
    "id": "fp_23059",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 26.7
  },
  {
    "id": "fp_25403",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 28.0
  },
  {
    "id": "fp_25409",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 28.3
  },
  {
    "id": "fp_22739",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 29.3
  },
  {
    "id": "fp_19222",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 31.7
  },
  {
    "id": "fp_22982",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 32.0
  },
  {
    "id": "fp_23113",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 33.0
  },
  {
    "id": "fp_22916",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 37.0
  },
  {
    "id": "fp_19231",
    "name": "Travis Etienne Jr.",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 37.3
  },
  {
    "id": "fp_17233",
    "name": "Lamar Jackson",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 39.0
  },
  {
    "id": "fp_25417",
    "name": "Tetairoa McMillan",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 39.7
  },
  {
    "id": "fp_27166",
    "name": "Cam Skattebo",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 39.7
  },
  {
    "id": "fp_19211",
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 40.3
  },
  {
    "id": "fp_26122",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 40.7
  },
  {
    "id": "fp_26006",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 41.0
  },
  {
    "id": "fp_19210",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 43.3
  },
  {
    "id": "fp_23062",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 43.7
  },
  {
    "id": "fp_23072",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 44.0
  },
  {
    "id": "fp_19790",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 44.7
  },
  {
    "id": "fp_25391",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 46.0
  },
  {
    "id": "fp_25981",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 47.3
  },
  {
    "id": "fp_18239",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 47.3
  },
  {
    "id": "fp_17265",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 47.7
  },
  {
    "id": "fp_26434",
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 50.0
  },
  {
    "id": "fp_23046",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 51.7
  },
  {
    "id": "fp_19196",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 53.0
  },
  {
    "id": "fp_27016",
    "name": "Luther Burden III",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 54.0
  },
  {
    "id": "fp_18466",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 54.7
  },
  {
    "id": "fp_18269",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 56.0
  },
  {
    "id": "fp_27329",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 56.0
  },
  {
    "id": "fp_12123",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 56.3
  },
  {
    "id": "fp_27297",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 57.0
  },
  {
    "id": "fp_23065",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 57.3
  },
  {
    "id": "fp_23677",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 58.7
  },
  {
    "id": "fp_19275",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 61.7
  },
  {
    "id": "fp_22902",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 62.7
  },
  {
    "id": "fp_25411",
    "name": "Rome Odunze",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 62.7
  },
  {
    "id": "fp_23886",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 65.3
  },
  {
    "id": "fp_25298",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 66.0
  },
  {
    "id": "fp_12119",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 67.3
  },
  {
    "id": "fp_23106",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 68.7
  },
  {
    "id": "fp_24209",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 68.7
  },
  {
    "id": "fp_22726",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 69.3
  },
  {
    "id": "fp_27050",
    "name": "Harold Fannin Jr.",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 69.7
  },
  {
    "id": "fp_22978",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 72.7
  },
  {
    "id": "fp_23084",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 73.3
  },
  {
    "id": "fp_20164",
    "name": "Kyle Pitts Sr.",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 74.7
  },
  {
    "id": "fp_26009",
    "name": "Carnell Tate",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 76.3
  },
  {
    "id": "fp_23064",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 76.7
  },
  {
    "id": "fp_19647",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 78.0
  },
  {
    "id": "fp_18635",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 78.0
  },
  {
    "id": "fp_18705",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 78.3
  },
  {
    "id": "fp_15600",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 80.3
  },
  {
    "id": "fp_23000",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 81.0
  },
  {
    "id": "fp_26148",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 81.7
  },
  {
    "id": "fp_18219",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 82.0
  },
  {
    "id": "fp_19780",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 86.3
  },
  {
    "id": "fp_16406",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 86.7
  },
  {
    "id": "fp_27142",
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 87.0
  },
  {
    "id": "fp_25333",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 87.7
  },
  {
    "id": "fp_16499",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 87.7
  },
  {
    "id": "fp_19792",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 87.7
  },
  {
    "id": "fp_17253",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 88.3
  },
  {
    "id": "fp_19245",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 88.7
  },
  {
    "id": "fp_23013",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 93.0
  },
  {
    "id": "fp_23791",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 94.7
  },
  {
    "id": "fp_11594",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 95.7
  },
  {
    "id": "fp_22969",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 96.7
  },
  {
    "id": "fp_23160",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 97.3
  },
  {
    "id": "fp_27131",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 99.0
  },
  {
    "id": "fp_27316",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 101.0
  },
  {
    "id": "fp_25247",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 102.3
  },
  {
    "id": "fp_23118",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 103.7
  },
  {
    "id": "fp_23781",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 105.0
  },
  {
    "id": "fp_22910",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 105.7
  },
  {
    "id": "fp_9451",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 105.7
  },
  {
    "id": "fp_23123",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 106.0
  },
  {
    "id": "fp_13981",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 108.0
  },
  {
    "id": "fp_23107",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 108.7
  },
  {
    "id": "fp_28138",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 109.3
  },
  {
    "id": "fp_25420",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 109.7
  },
  {
    "id": "fp_23310",
    "name": "Kenny Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 110.0
  },
  {
    "id": "fp_23020",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 110.7
  },
  {
    "id": "fp_24706",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 110.7
  },
  {
    "id": "fp_19797",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 111.0
  },
  {
    "id": "fp_16413",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 111.0
  },
  {
    "id": "fp_19278",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 113.7
  },
  {
    "id": "fp_26035",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 118.0
  },
  {
    "id": "fp_22718",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 119.7
  },
  {
    "id": "fp_23891",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 122.3
  },
  {
    "id": "fp_17270",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 122.3
  },
  {
    "id": "fp_17269",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 122.7
  },
  {
    "id": "fp_27331",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 123.3
  },
  {
    "id": "fp_15501",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 124.0
  },
  {
    "id": "fp_16673",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 124.3
  },
  {
    "id": "fp_28108",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 129.0
  },
  {
    "id": "fp_22985",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 129.3
  },
  {
    "id": "fp_18600",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 132.7
  },
  {
    "id": "fp_26024",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 136.3
  },
  {
    "id": "fp_19562",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 142.3
  },
  {
    "id": "fp_19246",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 145.7
  },
  {
    "id": "fp_18598",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 146.0
  },
  {
    "id": "fp_24172",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 146.3
  },
  {
    "id": "fp_17237",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 146.7
  },
  {
    "id": "fp_27520",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 148.0
  },
  {
    "id": "fp_22986",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 148.3
  },
  {
    "id": "fp_18244",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 148.3
  },
  {
    "id": "fp_23019",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 148.7
  },
  {
    "id": "fp_24687",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 149.7
  },
  {
    "id": "fp_27320",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 152.0
  },
  {
    "id": "fp_23794",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 153.7
  },
  {
    "id": "fp_20094",
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 154.0
  },
  {
    "id": "fp_27337",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 154.3
  },
  {
    "id": "fp_17236",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 155.7
  },
  {
    "id": "fp_23152",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 156.0
  },
  {
    "id": "fp_15561",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 156.7
  },
  {
    "id": "fp_16421",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 158.7
  },
  {
    "id": "fp_24333",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 160.7
  },
  {
    "id": "fp_23499",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 161.0
  },
  {
    "id": "fp_22980",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 163.7
  },
  {
    "id": "fp_26403",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 164.3
  },
  {
    "id": "fp_22908",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 164.7
  },
  {
    "id": "fp_25323",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 167.0
  },
  {
    "id": "fp_23748",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 167.3
  },
  {
    "id": "fp_28013",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 168.0
  },
  {
    "id": "fp_25360",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 169.7
  },
  {
    "id": "fp_28401",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 170.0
  },
  {
    "id": "fp_23071",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 170.3
  },
  {
    "id": "fp_23096",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 170.7
  },
  {
    "id": "fp_28107",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 171.3
  },
  {
    "id": "fp_11616",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 172.7
  },
  {
    "id": "fp_25337",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.7
  },
  {
    "id": "fp_24177",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 174.3
  },
  {
    "id": "fp_23982",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 174.7
  },
  {
    "id": "fp_24346",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 175.7
  },
  {
    "id": "fp_25345",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 176.3
  },
  {
    "id": "fp_18290",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 177.0
  },
  {
    "id": "fp_22900",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 178.0
  },
  {
    "id": "fp_9001",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 180.3
  },
  {
    "id": "fp_16399",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 180.3
  },
  {
    "id": "fp_26191",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 180.7
  },
  {
    "id": "fp_24755",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 180.7
  },
  {
    "id": "fp_18232",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 183.0
  },
  {
    "id": "fp_23091",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 183.7
  },
  {
    "id": "fp_17349",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 184.7
  },
  {
    "id": "fp_19590",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 187.0
  },
  {
    "id": "fp_27339",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 187.0
  },
  {
    "id": "fp_25997",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 189.7
  },
  {
    "id": "fp_26055",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 192.3
  },
  {
    "id": "fp_26034",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 193.7
  },
  {
    "id": "fp_26335",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 196.7
  },
  {
    "id": "fp_16433",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 200.7
  },
  {
    "id": "fp_20163",
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 205.3
  },
  {
    "id": "fp_22989",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 162.5
  },
  {
    "id": "fp_16447",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 216.0
  },
  {
    "id": "fp_27102",
    "name": "Dylan Sampson",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 177.5
  },
  {
    "id": "fp_27446",
    "name": "Isaac TeSlaa",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 219.0
  },
  {
    "id": "fp_24354",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 182.5
  },
  {
    "id": "fp_15802",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 223.3
  },
  {
    "id": "fp_23153",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 223.3
  },
  {
    "id": "fp_26314",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 188.5
  },
  {
    "id": "fp_28424",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 192.0
  },
  {
    "id": "fp_27994",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 193.5
  },
  {
    "id": "fp_19201",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 202.0
  },
  {
    "id": "fp_18256",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 207.0
  },
  {
    "id": "fp_28135",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 208.0
  },
  {
    "id": "fp_28127",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 210.5
  },
  {
    "id": "fp_26038",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 210.5
  },
  {
    "id": "fp_23179",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 210.5
  },
  {
    "id": "fp_17258",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 215.0
  },
  {
    "id": "fp_24357",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 215.5
  },
  {
    "id": "fp_26215",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 218.5
  },
  {
    "id": "fp_15642",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 220.0
  },
  {
    "id": "fp_24343",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 220.5
  },
  {
    "id": "fp_25361",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 225.5
  },
  {
    "id": "fp_26355",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 227.0
  },
  {
    "id": "fp_11687",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 227.5
  },
  {
    "id": "fp_26398",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 227.5
  },
  {
    "id": "fp_25987",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 228.5
  },
  {
    "id": "fp_19198",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 235.0
  },
  {
    "id": "fp_27211",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 236.5
  },
  {
    "id": "fp_24362",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 237.0
  },
  {
    "id": "fp_27310",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 238.5
  },
  {
    "id": "fp_25419",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 239.0
  },
  {
    "id": "fp_22973",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 183.0
  },
  {
    "id": "fp_11177",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 185.0
  },
  {
    "id": "fp_16483",
    "name": "Austin Ekeler",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 191.0
  },
  {
    "id": "fp_23181",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 245.0
  },
  {
    "id": "fp_27109",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 246.0
  },
  {
    "id": "fp_24344",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 247.5
  },
  {
    "id": "fp_27165",
    "name": "Kaleb Johnson",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 200.0
  },
  {
    "id": "fp_23679",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 248.0
  },
  {
    "id": "fp_16398",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 202.0
  },
  {
    "id": "fp_28130",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 250.5
  },
  {
    "id": "fp_19302",
    "name": "Najee Harris",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 209.0
  },
  {
    "id": "fp_25968",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 210.0
  },
  {
    "id": "fp_22915",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 215.0
  },
  {
    "id": "fp_18280",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 217.0
  },
  {
    "id": "fp_26409",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 219.0
  },
  {
    "id": "fp_28084",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 259.0
  },
  {
    "id": "fp_24205",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 225.0
  },
  {
    "id": "fp_17272",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 226.0
  },
  {
    "id": "fp_26039",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 263.5
  },
  {
    "id": "fp_12127",
    "name": "Odell Beckham Jr.",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 232.0
  },
  {
    "id": "fp_26019",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 264.0
  },
  {
    "id": "fp_25823",
    "name": "Chris Brooks",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 240.0
  },
  {
    "id": "fp_25418",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 268.0
  },
  {
    "id": "fp_17719",
    "name": "James Williams",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 241.0
  },
  {
    "id": "fp_18406",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 241.0
  },
  {
    "id": "fp_23099",
    "name": "Devon Williams",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 243.0
  },
  {
    "id": "fp_13957",
    "name": "Nick O'Leary",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 246.0
  },
  {
    "id": "fp_26443",
    "name": "Louis Rees-Zammit",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 248.0
  },
  {
    "id": "fp_19372",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 272.0
  },
  {
    "id": "fp_20156",
    "name": "Mac Jones",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 249.0
  },
  {
    "id": "fp_28684",
    "name": "Kyle Dixon",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 251.0
  },
  {
    "id": "fp_19603",
    "name": "Darrell Stewart Jr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 253.0
  },
  {
    "id": "fp_24778",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 275.0
  },
  {
    "id": "fp_19810",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 276.5
  },
  {
    "id": "fp_16411",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 258.0
  },
  {
    "id": "fp_19325",
    "name": "Clyde Edwards-Helaire",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 258.0
  },
  {
    "id": "fp_23079",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 260.0
  },
  {
    "id": "fp_23144",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 260.0
  },
  {
    "id": "fp_25885",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 278.0
  },
  {
    "id": "fp_26985",
    "name": "Kairee Robinson",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 261.0
  },
  {
    "id": "fp_18720",
    "name": "Bruce Anderson III",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 263.0
  },
  {
    "id": "fp_28715",
    "name": "Treyvhon Saunders",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 268.0
  },
  {
    "id": "fp_16423",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 270.0
  },
  {
    "id": "fp_18921",
    "name": "Matt Sokol",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 270.0
  },
  {
    "id": "fp_14104",
    "name": "Darren Waller",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 271.0
  },
  {
    "id": "fp_25344",
    "name": "Jesse Matthews",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 272.0
  },
  {
    "id": "fp_19896",
    "name": "Cameron Scarlett",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 274.0
  },
  {
    "id": "fp_17916",
    "name": "Steven Mitchell Jr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 275.0
  },
  {
    "id": "fp_23101",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 276.0
  },
  {
    "id": "fp_23770",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 277.0
  },
  {
    "id": "fp_20126",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 278.0
  },
  {
    "id": "fp_19544",
    "name": "Patrick Taylor Jr.",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 279.0
  },
  {
    "id": "fp_26022",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 280.0
  },
  {
    "id": "fp_24367",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 282.0
  },
  {
    "id": "fp_23423",
    "name": "DJ Turner",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 283.0
  },
  {
    "id": "fp_23104",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 284.0
  },
  {
    "id": "fp_25388",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 286.0
  },
  {
    "id": "fp_25693",
    "name": "Jacob Saylors",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 286.0
  },
  {
    "id": "fp_23092",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 287.0
  },
  {
    "id": "fp_19189",
    "name": "Tavonn Salter",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 288.0
  },
  {
    "id": "fp_25654",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 288.0
  },
  {
    "id": "fp_25304",
    "name": "DeMario Douglas",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 289.0
  },
  {
    "id": "fp_25984",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 291.0
  },
  {
    "id": "fp_27224",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 292.0
  },
  {
    "id": "fp_19252",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 293.0
  },
  {
    "id": "fp_27122",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 293.0
  },
  {
    "id": "fp_27552",
    "name": "Junior Bergen",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 294.0
  },
  {
    "id": "fp_17309",
    "name": "Sony Michel",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 295.0
  },
  {
    "id": "fp_27285",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 295.0
  },
  {
    "id": "fp_28096",
    "name": "Jake Retzlaff",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 297.0
  },
  {
    "id": "fp_28100",
    "name": "Mark Gronowski",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 299.0
  },
  {
    "id": "fp_26384",
    "name": "Carter Bradley",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 305.0
  },
  {
    "id": "fp_11872",
    "name": "Ryan Griffin",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 306.0
  },
  {
    "id": "fp_27504",
    "name": "Kaidon Salter",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 307.0
  },
  {
    "id": "fp_28911",
    "name": "Brandon Hayes",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 308.0
  },
  {
    "id": "fp_11667",
    "name": "Tyler Bray",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 309.0
  },
  {
    "id": "fp_17456",
    "name": "Kyle Lauletta",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 310.0
  },
  {
    "id": "fp_25802",
    "name": "Kody Case",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 311.0
  },
  {
    "id": "fp_24605",
    "name": "Derek Wright",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 313.0
  },
  {
    "id": "fp_28711",
    "name": "Daniel Sobkowicz",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 314.0
  },
  {
    "id": "fp_25960",
    "name": "Ed Lee",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 316.0
  },
  {
    "id": "fp_28640",
    "name": "Jaden Bradley",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 317.0
  },
  {
    "id": "fp_27583",
    "name": "Courtney Jackson",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 318.0
  },
  {
    "id": "fp_14142",
    "name": "Trevor Siemian",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 319.0
  },
  {
    "id": "fp_26578",
    "name": "JaQuae Jackson",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 320.0
  },
  {
    "id": "fp_26076",
    "name": "La'Michael Pettway",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 321.0
  },
  {
    "id": "fp_26892",
    "name": "Wiliam Thompson",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 322.0
  },
  {
    "id": "fp_26687",
    "name": "Jjay Mcafee",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 323.0
  },
  {
    "id": "fp_25319",
    "name": "Nathan Rourke",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 325.0
  },
  {
    "id": "fp_17541",
    "name": "Ryan Izzo",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 326.0
  },
  {
    "id": "fp_26430",
    "name": "Isaac Rex",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 328.0
  },
  {
    "id": "fp_28664",
    "name": "Ken Seals",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 332.0
  },
  {
    "id": "fp_26957",
    "name": "Michael Hiers",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 334.0
  }
];