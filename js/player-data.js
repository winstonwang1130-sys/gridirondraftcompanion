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
    "adp": 4.0
  },
  {
    "id": "fp_16393",
    "name": "Christian McCaffrey",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 5.0
  },
  {
    "id": "fp_19217",
    "name": "Jonathan Taylor",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 6.3
  },
  {
    "id": "fp_23070",
    "name": "Jaxon Smith-Njigba",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 6.7
  },
  {
    "id": "fp_19799",
    "name": "Amon-Ra St. Brown",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 8.0
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
    "adp": 11.0
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
    "id": "fp_23136",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 12.3
  },
  {
    "id": "fp_17240",
    "name": "Saquon Barkley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 12.3
  },
  {
    "id": "fp_25324",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 14.7
  },
  {
    "id": "fp_25989",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 14.7
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
    "id": "fp_23021",
    "name": "Kenneth Walker III",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 16.3
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
    "adp": 21.0
  },
  {
    "id": "fp_22955",
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 21.7
  },
  {
    "id": "fp_20130",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 24.0
  },
  {
    "id": "fp_22963",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 24.7
  },
  {
    "id": "fp_22936",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 24.7
  },
  {
    "id": "fp_20111",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 27.0
  },
  {
    "id": "fp_23059",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 27.3
  },
  {
    "id": "fp_25403",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 27.7
  },
  {
    "id": "fp_25409",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 28.7
  },
  {
    "id": "fp_22739",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 29.7
  },
  {
    "id": "fp_19222",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 32.3
  },
  {
    "id": "fp_22982",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 32.7
  },
  {
    "id": "fp_18269",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 33.0
  },
  {
    "id": "fp_23113",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 33.3
  },
  {
    "id": "fp_22916",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 37.3
  },
  {
    "id": "fp_19231",
    "name": "Travis Etienne Jr.",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 38.7
  },
  {
    "id": "fp_19211",
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
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
    "id": "fp_17233",
    "name": "Lamar Jackson",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 40.0
  },
  {
    "id": "fp_25417",
    "name": "Tetairoa McMillan",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 40.7
  },
  {
    "id": "fp_26006",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 41.7
  },
  {
    "id": "fp_23062",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 42.0
  },
  {
    "id": "fp_26122",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 42.7
  },
  {
    "id": "fp_23072",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 43.7
  },
  {
    "id": "fp_25391",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 45.3
  },
  {
    "id": "fp_19210",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 45.3
  },
  {
    "id": "fp_19790",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 46.0
  },
  {
    "id": "fp_25981",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 46.7
  },
  {
    "id": "fp_18239",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 48.0
  },
  {
    "id": "fp_17265",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 49.0
  },
  {
    "id": "fp_26434",
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 50.3
  },
  {
    "id": "fp_23046",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 53.0
  },
  {
    "id": "fp_27016",
    "name": "Luther Burden III",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 54.3
  },
  {
    "id": "fp_19196",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 54.3
  },
  {
    "id": "fp_18466",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 54.3
  },
  {
    "id": "fp_12123",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 55.7
  },
  {
    "id": "fp_23065",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 56.0
  },
  {
    "id": "fp_27329",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 57.3
  },
  {
    "id": "fp_27297",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 57.7
  },
  {
    "id": "fp_23677",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 59.0
  },
  {
    "id": "fp_25411",
    "name": "Rome Odunze",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 62.0
  },
  {
    "id": "fp_22902",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 63.0
  },
  {
    "id": "fp_19275",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 63.7
  },
  {
    "id": "fp_25298",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 65.3
  },
  {
    "id": "fp_12119",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 66.0
  },
  {
    "id": "fp_23886",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 66.7
  },
  {
    "id": "fp_24209",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
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
    "id": "fp_23106",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 70.7
  },
  {
    "id": "fp_22726",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 71.0
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
    "adp": 73.7
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
    "adp": 75.0
  },
  {
    "id": "fp_23064",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 75.7
  },
  {
    "id": "fp_18705",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 78.0
  },
  {
    "id": "fp_23000",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 78.3
  },
  {
    "id": "fp_19647",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 78.7
  },
  {
    "id": "fp_18635",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 79.3
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
    "id": "fp_26148",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 82.0
  },
  {
    "id": "fp_18219",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 82.3
  },
  {
    "id": "fp_27142",
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 85.3
  },
  {
    "id": "fp_19792",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 85.7
  },
  {
    "id": "fp_19780",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 87.0
  },
  {
    "id": "fp_16406",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 88.0
  },
  {
    "id": "fp_17253",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 88.0
  },
  {
    "id": "fp_19245",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 88.3
  },
  {
    "id": "fp_16499",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 88.7
  },
  {
    "id": "fp_25333",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 89.0
  },
  {
    "id": "fp_23013",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 93.3
  },
  {
    "id": "fp_23791",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 94.3
  },
  {
    "id": "fp_11594",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 96.0
  },
  {
    "id": "fp_23160",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 97.0
  },
  {
    "id": "fp_22969",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 97.7
  },
  {
    "id": "fp_27131",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 97.7
  },
  {
    "id": "fp_27316",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 100.3
  },
  {
    "id": "fp_25247",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 102.0
  },
  {
    "id": "fp_23781",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 104.7
  },
  {
    "id": "fp_25420",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 105.7
  },
  {
    "id": "fp_9451",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 106.0
  },
  {
    "id": "fp_23123",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 106.7
  },
  {
    "id": "fp_22910",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 107.0
  },
  {
    "id": "fp_23310",
    "name": "Kenny Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 107.7
  },
  {
    "id": "fp_23107",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 109.0
  },
  {
    "id": "fp_16413",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 109.0
  },
  {
    "id": "fp_13981",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 109.7
  },
  {
    "id": "fp_24706",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 109.7
  },
  {
    "id": "fp_28138",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 110.0
  },
  {
    "id": "fp_26035",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
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
    "id": "fp_23020",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 111.0
  },
  {
    "id": "fp_19278",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 111.3
  },
  {
    "id": "fp_23891",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 117.7
  },
  {
    "id": "fp_22718",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 118.0
  },
  {
    "id": "fp_15501",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 122.7
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
    "id": "fp_17270",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 123.0
  },
  {
    "id": "fp_16673",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 123.3
  },
  {
    "id": "fp_22985",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 128.3
  },
  {
    "id": "fp_27331",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 130.3
  },
  {
    "id": "fp_18600",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 130.7
  },
  {
    "id": "fp_28108",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 135.3
  },
  {
    "id": "fp_26024",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 138.3
  },
  {
    "id": "fp_18598",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 141.0
  },
  {
    "id": "fp_17237",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 144.7
  },
  {
    "id": "fp_18244",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 145.3
  },
  {
    "id": "fp_23118",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 146.7
  },
  {
    "id": "fp_24172",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 147.0
  },
  {
    "id": "fp_27520",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 147.7
  },
  {
    "id": "fp_23019",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 147.7
  },
  {
    "id": "fp_24687",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 148.3
  },
  {
    "id": "fp_19246",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 148.7
  },
  {
    "id": "fp_22986",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 149.0
  },
  {
    "id": "fp_27320",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 151.3
  },
  {
    "id": "fp_19562",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 151.7
  },
  {
    "id": "fp_20094",
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 151.7
  },
  {
    "id": "fp_23152",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 152.3
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
    "id": "fp_17236",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 156.0
  },
  {
    "id": "fp_16421",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 156.3
  },
  {
    "id": "fp_27337",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 156.3
  },
  {
    "id": "fp_24333",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 156.7
  },
  {
    "id": "fp_15561",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 157.7
  },
  {
    "id": "fp_22980",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 158.0
  },
  {
    "id": "fp_23499",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 160.7
  },
  {
    "id": "fp_11616",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 161.7
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
    "id": "fp_23748",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
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
    "id": "fp_22908",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 167.7
  },
  {
    "id": "fp_25360",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 168.3
  },
  {
    "id": "fp_23071",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 171.3
  },
  {
    "id": "fp_23982",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 171.3
  },
  {
    "id": "fp_24177",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 171.3
  },
  {
    "id": "fp_23096",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 171.7
  },
  {
    "id": "fp_25345",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 171.7
  },
  {
    "id": "fp_28013",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.3
  },
  {
    "id": "fp_18232",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 176.7
  },
  {
    "id": "fp_27339",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 177.0
  },
  {
    "id": "fp_25997",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 177.3
  },
  {
    "id": "fp_18290",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 178.7
  },
  {
    "id": "fp_22900",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 179.0
  },
  {
    "id": "fp_24346",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 179.0
  },
  {
    "id": "fp_9001",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 180.0
  },
  {
    "id": "fp_24755",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 180.0
  },
  {
    "id": "fp_16399",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 182.0
  },
  {
    "id": "fp_28107",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 182.0
  },
  {
    "id": "fp_28401",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 182.0
  },
  {
    "id": "fp_23091",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 184.3
  },
  {
    "id": "fp_26055",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 185.0
  },
  {
    "id": "fp_17349",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 186.0
  },
  {
    "id": "fp_19590",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 187.7
  },
  {
    "id": "fp_23179",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 191.3
  },
  {
    "id": "fp_24344",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 191.7
  },
  {
    "id": "fp_26034",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 192.0
  },
  {
    "id": "fp_16433",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 193.3
  },
  {
    "id": "fp_26335",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 195.3
  },
  {
    "id": "fp_20163",
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 201.0
  },
  {
    "id": "fp_16447",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 205.3
  },
  {
    "id": "fp_27102",
    "name": "Dylan Sampson",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 174.0
  },
  {
    "id": "fp_22989",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 174.5
  },
  {
    "id": "fp_25337",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 177.0
  },
  {
    "id": "fp_15802",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 216.3
  },
  {
    "id": "fp_26314",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 181.5
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
    "id": "fp_28424",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 183.5
  },
  {
    "id": "fp_23153",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 221.3
  },
  {
    "id": "fp_24354",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 186.5
  },
  {
    "id": "fp_26191",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 202.0
  },
  {
    "id": "fp_28135",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 202.0
  },
  {
    "id": "fp_25361",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 204.0
  },
  {
    "id": "fp_19201",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 205.5
  },
  {
    "id": "fp_28127",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 206.0
  },
  {
    "id": "fp_17258",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 207.0
  },
  {
    "id": "fp_24343",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 207.0
  },
  {
    "id": "fp_27994",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 210.0
  },
  {
    "id": "fp_26215",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 211.5
  },
  {
    "id": "fp_18256",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 212.5
  },
  {
    "id": "fp_24357",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 216.0
  },
  {
    "id": "fp_15642",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 217.0
  },
  {
    "id": "fp_26038",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 217.0
  },
  {
    "id": "fp_25419",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 221.5
  },
  {
    "id": "fp_27211",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 224.5
  },
  {
    "id": "fp_19198",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 225.0
  },
  {
    "id": "fp_11687",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 225.5
  },
  {
    "id": "fp_25987",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 228.0
  },
  {
    "id": "fp_24362",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 230.5
  },
  {
    "id": "fp_26355",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 233.5
  },
  {
    "id": "fp_22973",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 181.0
  },
  {
    "id": "fp_27310",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 237.5
  },
  {
    "id": "fp_23679",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 239.5
  },
  {
    "id": "fp_23181",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 239.5
  },
  {
    "id": "fp_28130",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 240.5
  },
  {
    "id": "fp_16483",
    "name": "Austin Ekeler",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 190.0
  },
  {
    "id": "fp_27109",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 242.5
  },
  {
    "id": "fp_11177",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 195.0
  },
  {
    "id": "fp_28084",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 247.0
  },
  {
    "id": "fp_19302",
    "name": "Najee Harris",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 206.0
  },
  {
    "id": "fp_25968",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 207.0
  },
  {
    "id": "fp_16398",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 210.0
  },
  {
    "id": "fp_26398",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 251.5
  },
  {
    "id": "fp_18280",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 218.0
  },
  {
    "id": "fp_26019",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 256.0
  },
  {
    "id": "fp_22915",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 224.0
  },
  {
    "id": "fp_26039",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 260.0
  },
  {
    "id": "fp_16411",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 231.0
  },
  {
    "id": "fp_19372",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 263.5
  },
  {
    "id": "fp_24778",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 263.5
  },
  {
    "id": "fp_26409",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 236.0
  },
  {
    "id": "fp_25368",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 237.0
  },
  {
    "id": "fp_25418",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 267.5
  },
  {
    "id": "fp_23144",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 249.0
  },
  {
    "id": "fp_26012",
    "name": "Malik Benson",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 250.0
  },
  {
    "id": "fp_27672",
    "name": "Patrick Herbert",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 250.0
  },
  {
    "id": "fp_25885",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 271.0
  },
  {
    "id": "fp_26862",
    "name": "Daniel George",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 252.0
  },
  {
    "id": "fp_25639",
    "name": "Ronald Awatt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 254.0
  },
  {
    "id": "fp_28129",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 254.0
  },
  {
    "id": "fp_13926",
    "name": "Tevin Coleman",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 256.0
  },
  {
    "id": "fp_26041",
    "name": "Omari Evans",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 257.0
  },
  {
    "id": "fp_17268",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 258.0
  },
  {
    "id": "fp_19810",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 275.0
  },
  {
    "id": "fp_16423",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 259.0
  },
  {
    "id": "fp_25695",
    "name": "Patrick Murtagh",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 260.0
  },
  {
    "id": "fp_27285",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 260.0
  },
  {
    "id": "fp_18292",
    "name": "Elijah Holyfield",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 261.0
  },
  {
    "id": "fp_24852",
    "name": "Felix Harper",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 263.0
  },
  {
    "id": "fp_25731",
    "name": "Brady Russell",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 264.0
  },
  {
    "id": "fp_25350",
    "name": "Ryan Jones",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 266.0
  },
  {
    "id": "fp_23079",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 267.0
  },
  {
    "id": "fp_26022",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 269.0
  },
  {
    "id": "fp_12091",
    "name": "AJ McCarron",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 270.0
  },
  {
    "id": "fp_18406",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 272.0
  },
  {
    "id": "fp_23104",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 273.0
  },
  {
    "id": "fp_27224",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 273.0
  },
  {
    "id": "fp_12092",
    "name": "Derek Carr",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 274.0
  },
  {
    "id": "fp_17272",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 274.0
  },
  {
    "id": "fp_25388",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 275.0
  },
  {
    "id": "fp_23092",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 276.0
  },
  {
    "id": "fp_25756",
    "name": "E.J. Jenkins",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 277.0
  },
  {
    "id": "fp_25823",
    "name": "Chris Brooks",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 277.0
  },
  {
    "id": "fp_24367",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 278.0
  },
  {
    "id": "fp_19794",
    "name": "Rashod Bateman",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 279.0
  },
  {
    "id": "fp_25593",
    "name": "Charles McClelland",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 281.0
  },
  {
    "id": "fp_16425",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 282.0
  },
  {
    "id": "fp_19252",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 282.0
  },
  {
    "id": "fp_19852",
    "name": "J'mar Smith",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 283.0
  },
  {
    "id": "fp_19847",
    "name": "George Campbell",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 284.0
  },
  {
    "id": "fp_24205",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 284.0
  },
  {
    "id": "fp_24816",
    "name": "Tyreik McAllister",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 285.0
  },
  {
    "id": "fp_25654",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 285.0
  },
  {
    "id": "fp_27122",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 286.0
  },
  {
    "id": "fp_19624",
    "name": "Antonio Gibson",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 287.0
  },
  {
    "id": "fp_23770",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 288.0
  },
  {
    "id": "fp_26076",
    "name": "La'Michael Pettway",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 288.0
  },
  {
    "id": "fp_25519",
    "name": "Malik Knowles",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 289.0
  },
  {
    "id": "fp_20126",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 290.0
  },
  {
    "id": "fp_23101",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 291.0
  },
  {
    "id": "fp_27138",
    "name": "Mitchell Evans",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 291.0
  },
  {
    "id": "fp_25657",
    "name": "Blake Whiteheart",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 292.0
  },
  {
    "id": "fp_17541",
    "name": "Ryan Izzo",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 293.0
  },
  {
    "id": "fp_26430",
    "name": "Isaac Rex",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 294.0
  },
  {
    "id": "fp_12208",
    "name": "Jimmy Garoppolo",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 297.0
  },
  {
    "id": "fp_12136",
    "name": "Martavis Bryant",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 298.0
  },
  {
    "id": "fp_9992",
    "name": "Lee Smith",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 300.0
  },
  {
    "id": "fp_25541",
    "name": "Joel Wilson",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 302.0
  },
  {
    "id": "fp_24603",
    "name": "John Lovett",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 303.0
  },
  {
    "id": "fp_18350",
    "name": "Daniel Helm",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 305.0
  },
  {
    "id": "fp_23829",
    "name": "Jelani Woods",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 306.0
  },
  {
    "id": "fp_17387",
    "name": "Ian Thomas",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 308.0
  },
  {
    "id": "fp_9111",
    "name": "Chase Daniel",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 309.0
  },
  {
    "id": "fp_17307",
    "name": "Equanimeous St. Brown",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 310.0
  },
  {
    "id": "fp_18634",
    "name": "Bryan Edwards",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 311.0
  },
  {
    "id": "fp_22961",
    "name": "Kearis Jackson",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 312.0
  },
  {
    "id": "fp_28510",
    "name": "Gregory Desrosiers",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 313.0
  },
  {
    "id": "fp_18222",
    "name": "N'Keal Harry",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 314.0
  }
];