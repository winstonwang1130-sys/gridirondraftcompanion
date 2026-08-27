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
    "adp": 11.0
  },
  {
    "id": "fp_19236",
    "name": "Justin Jefferson",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 11.7
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
    "id": "fp_23136",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 12.7
  },
  {
    "id": "fp_25989",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 13.3
  },
  {
    "id": "fp_25324",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 15.0
  },
  {
    "id": "fp_23021",
    "name": "Kenneth Walker III",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 16.7
  },
  {
    "id": "fp_25395",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 16.7
  },
  {
    "id": "fp_15514",
    "name": "Derrick Henry",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 17.0
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
    "adp": 22.0
  },
  {
    "id": "fp_22936",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 23.0
  },
  {
    "id": "fp_20130",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 23.7
  },
  {
    "id": "fp_22963",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 24.3
  },
  {
    "id": "fp_25403",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 27.3
  },
  {
    "id": "fp_23059",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 27.7
  },
  {
    "id": "fp_20111",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 28.3
  },
  {
    "id": "fp_25409",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 29.0
  },
  {
    "id": "fp_18269",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 30.0
  },
  {
    "id": "fp_22739",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 31.0
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
    "id": "fp_23113",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 32.3
  },
  {
    "id": "fp_22982",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 33.3
  },
  {
    "id": "fp_22916",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 38.0
  },
  {
    "id": "fp_17233",
    "name": "Lamar Jackson",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 39.7
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
    "adp": 40.0
  },
  {
    "id": "fp_19231",
    "name": "Travis Etienne Jr.",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 40.0
  },
  {
    "id": "fp_23062",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 40.7
  },
  {
    "id": "fp_26006",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
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
    "adp": 44.0
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
    "id": "fp_19790",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 46.3
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
    "id": "fp_19210",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 47.7
  },
  {
    "id": "fp_18239",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 48.3
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
    "adp": 53.7
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
    "id": "fp_23065",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 55.3
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
    "id": "fp_27329",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 58.3
  },
  {
    "id": "fp_23677",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 60.0
  },
  {
    "id": "fp_22902",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 60.3
  },
  {
    "id": "fp_19275",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 60.3
  },
  {
    "id": "fp_25411",
    "name": "Rome Odunze",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 63.0
  },
  {
    "id": "fp_12119",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 63.3
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
    "id": "fp_23886",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 69.0
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
    "adp": 71.7
  },
  {
    "id": "fp_22726",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 73.0
  },
  {
    "id": "fp_22978",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 73.7
  },
  {
    "id": "fp_23084",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 74.0
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
    "adp": 75.7
  },
  {
    "id": "fp_23064",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 77.3
  },
  {
    "id": "fp_18635",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 78.3
  },
  {
    "id": "fp_23000",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 78.7
  },
  {
    "id": "fp_19647",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 79.0
  },
  {
    "id": "fp_18705",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 79.0
  },
  {
    "id": "fp_15600",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 79.3
  },
  {
    "id": "fp_19792",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 82.3
  },
  {
    "id": "fp_18219",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 83.0
  },
  {
    "id": "fp_26148",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 84.7
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
    "id": "fp_19780",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 85.7
  },
  {
    "id": "fp_17253",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 87.3
  },
  {
    "id": "fp_25333",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 88.7
  },
  {
    "id": "fp_16406",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 88.7
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
    "id": "fp_16499",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 89.3
  },
  {
    "id": "fp_23013",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 93.7
  },
  {
    "id": "fp_23160",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 96.0
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
    "id": "fp_27131",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 96.3
  },
  {
    "id": "fp_23791",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 96.7
  },
  {
    "id": "fp_22969",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 99.3
  },
  {
    "id": "fp_27316",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 100.7
  },
  {
    "id": "fp_25247",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 103.3
  },
  {
    "id": "fp_25420",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 105.3
  },
  {
    "id": "fp_23781",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 105.3
  },
  {
    "id": "fp_22910",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 105.3
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
    "id": "fp_24706",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 107.0
  },
  {
    "id": "fp_16413",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 108.3
  },
  {
    "id": "fp_23123",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 108.7
  },
  {
    "id": "fp_26035",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 109.0
  },
  {
    "id": "fp_23310",
    "name": "Kenny Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 109.0
  },
  {
    "id": "fp_23107",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 109.7
  },
  {
    "id": "fp_19797",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 110.3
  },
  {
    "id": "fp_19278",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 111.0
  },
  {
    "id": "fp_13981",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 111.7
  },
  {
    "id": "fp_23020",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 112.0
  },
  {
    "id": "fp_28138",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 113.0
  },
  {
    "id": "fp_22718",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 116.3
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
    "id": "fp_16673",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 121.7
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
    "id": "fp_17270",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 123.0
  },
  {
    "id": "fp_17269",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 123.0
  },
  {
    "id": "fp_22985",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 125.0
  },
  {
    "id": "fp_18600",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 127.7
  },
  {
    "id": "fp_27331",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 130.7
  },
  {
    "id": "fp_28108",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 132.7
  },
  {
    "id": "fp_18598",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 136.7
  },
  {
    "id": "fp_26024",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 141.7
  },
  {
    "id": "fp_17237",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 143.0
  },
  {
    "id": "fp_18244",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 145.0
  },
  {
    "id": "fp_24172",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 145.3
  },
  {
    "id": "fp_27520",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 146.3
  },
  {
    "id": "fp_23019",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 147.3
  },
  {
    "id": "fp_23152",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 148.0
  },
  {
    "id": "fp_19246",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 148.3
  },
  {
    "id": "fp_24687",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 148.7
  },
  {
    "id": "fp_17236",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 150.0
  },
  {
    "id": "fp_22986",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 151.0
  },
  {
    "id": "fp_23794",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 151.7
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
    "id": "fp_20094",
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 152.3
  },
  {
    "id": "fp_27337",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 153.7
  },
  {
    "id": "fp_22980",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 154.3
  },
  {
    "id": "fp_16421",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 156.0
  },
  {
    "id": "fp_24333",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 157.0
  },
  {
    "id": "fp_19562",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 158.0
  },
  {
    "id": "fp_15561",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 158.3
  },
  {
    "id": "fp_23499",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 159.3
  },
  {
    "id": "fp_23748",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 163.0
  },
  {
    "id": "fp_28013",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 164.7
  },
  {
    "id": "fp_25323",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 165.0
  },
  {
    "id": "fp_26403",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 165.0
  },
  {
    "id": "fp_25360",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 165.3
  },
  {
    "id": "fp_25345",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 165.7
  },
  {
    "id": "fp_22908",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 167.3
  },
  {
    "id": "fp_24177",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 167.7
  },
  {
    "id": "fp_23071",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 168.0
  },
  {
    "id": "fp_23118",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 168.7
  },
  {
    "id": "fp_23096",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 169.0
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
    "id": "fp_24755",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 172.0
  },
  {
    "id": "fp_25997",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 172.3
  },
  {
    "id": "fp_22900",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 173.3
  },
  {
    "id": "fp_27339",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 175.7
  },
  {
    "id": "fp_18290",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 176.7
  },
  {
    "id": "fp_9001",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 177.3
  },
  {
    "id": "fp_18232",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 178.0
  },
  {
    "id": "fp_11616",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 178.3
  },
  {
    "id": "fp_26055",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 178.7
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
    "id": "fp_19590",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 182.3
  },
  {
    "id": "fp_23091",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 186.0
  },
  {
    "id": "fp_17349",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 187.3
  },
  {
    "id": "fp_24344",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 188.0
  },
  {
    "id": "fp_26034",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 189.0
  },
  {
    "id": "fp_23179",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 189.7
  },
  {
    "id": "fp_26335",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 194.7
  },
  {
    "id": "fp_16447",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 197.7
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
    "id": "fp_16433",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 204.3
  },
  {
    "id": "fp_27446",
    "name": "Isaac TeSlaa",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 211.3
  },
  {
    "id": "fp_15802",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 215.7
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
    "id": "fp_24346",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 180.0
  },
  {
    "id": "fp_28401",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 180.0
  },
  {
    "id": "fp_23153",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 219.7
  },
  {
    "id": "fp_28424",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 182.0
  },
  {
    "id": "fp_26314",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 184.0
  },
  {
    "id": "fp_25361",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 186.0
  },
  {
    "id": "fp_28107",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 194.0
  },
  {
    "id": "fp_25337",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 195.5
  },
  {
    "id": "fp_22989",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 196.5
  },
  {
    "id": "fp_28127",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 196.5
  },
  {
    "id": "fp_19201",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 196.5
  },
  {
    "id": "fp_28135",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 200.0
  },
  {
    "id": "fp_26215",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 200.5
  },
  {
    "id": "fp_24354",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 203.5
  },
  {
    "id": "fp_17258",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 205.5
  },
  {
    "id": "fp_26191",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 208.0
  },
  {
    "id": "fp_24343",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 208.5
  },
  {
    "id": "fp_15642",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 210.5
  },
  {
    "id": "fp_27994",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 211.0
  },
  {
    "id": "fp_24357",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 217.0
  },
  {
    "id": "fp_18256",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 218.5
  },
  {
    "id": "fp_11687",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 219.5
  },
  {
    "id": "fp_24362",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 222.5
  },
  {
    "id": "fp_25419",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 223.5
  },
  {
    "id": "fp_19198",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 228.0
  },
  {
    "id": "fp_27211",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 228.0
  },
  {
    "id": "fp_25987",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 233.0
  },
  {
    "id": "fp_23679",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 234.5
  },
  {
    "id": "fp_26355",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 235.0
  },
  {
    "id": "fp_26038",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 236.5
  },
  {
    "id": "fp_23181",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 241.0
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
    "id": "fp_28084",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 242.5
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
    "id": "fp_27310",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 246.0
  },
  {
    "id": "fp_11177",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 198.0
  },
  {
    "id": "fp_22973",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 199.0
  },
  {
    "id": "fp_16398",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 200.0
  },
  {
    "id": "fp_25418",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 250.0
  },
  {
    "id": "fp_25968",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 206.0
  },
  {
    "id": "fp_19372",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 252.5
  },
  {
    "id": "fp_19302",
    "name": "Najee Harris",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 211.0
  },
  {
    "id": "fp_26398",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 253.5
  },
  {
    "id": "fp_23144",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 256.5
  },
  {
    "id": "fp_16443",
    "name": "Noah Brown",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 218.0
  },
  {
    "id": "fp_26039",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 257.5
  },
  {
    "id": "fp_18280",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 224.0
  },
  {
    "id": "fp_22915",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 226.0
  },
  {
    "id": "fp_28130",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 261.0
  },
  {
    "id": "fp_26409",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 234.0
  },
  {
    "id": "fp_26019",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 265.0
  },
  {
    "id": "fp_17272",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 243.0
  },
  {
    "id": "fp_14104",
    "name": "Darren Waller",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 248.0
  },
  {
    "id": "fp_22953",
    "name": "Carson Beck",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 249.0
  },
  {
    "id": "fp_24778",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 273.0
  },
  {
    "id": "fp_17268",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 251.0
  },
  {
    "id": "fp_23166",
    "name": "Kedon Slovis",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 251.0
  },
  {
    "id": "fp_16425",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 252.0
  },
  {
    "id": "fp_26394",
    "name": "Austin Jones",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 253.0
  },
  {
    "id": "fp_16411",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 255.0
  },
  {
    "id": "fp_26597",
    "name": "Chris Collier",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 256.0
  },
  {
    "id": "fp_19810",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 276.0
  },
  {
    "id": "fp_18406",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 257.0
  },
  {
    "id": "fp_25559",
    "name": "Terrell Bynum",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 258.0
  },
  {
    "id": "fp_25885",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 277.0
  },
  {
    "id": "fp_16412",
    "name": "Temuchin Hodges",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 259.0
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
    "id": "fp_20026",
    "name": "Josh Love",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 260.0
  },
  {
    "id": "fp_23056",
    "name": "Michael Mayer",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 260.0
  },
  {
    "id": "fp_23770",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 261.0
  },
  {
    "id": "fp_25952",
    "name": "Lucky Jackson",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 261.0
  },
  {
    "id": "fp_12153",
    "name": "Trey Burton",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 263.0
  },
  {
    "id": "fp_27165",
    "name": "Kaleb Johnson",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 264.0
  },
  {
    "id": "fp_25552",
    "name": "Jordan Byrd",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 265.0
  },
  {
    "id": "fp_25341",
    "name": "Jaray Jenkins",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 267.0
  },
  {
    "id": "fp_26022",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 268.0
  },
  {
    "id": "fp_27285",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 268.0
  },
  {
    "id": "fp_22961",
    "name": "Kearis Jackson",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 269.0
  },
  {
    "id": "fp_25346",
    "name": "Payne Durham",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 271.0
  },
  {
    "id": "fp_23104",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 272.0
  },
  {
    "id": "fp_25332",
    "name": "Xavier Hutchinson",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 273.0
  },
  {
    "id": "fp_25388",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 274.0
  },
  {
    "id": "fp_27122",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 274.0
  },
  {
    "id": "fp_23092",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 275.0
  },
  {
    "id": "fp_25681",
    "name": "Griffin Hebert",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 276.0
  },
  {
    "id": "fp_26421",
    "name": "Xavier White",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 277.0
  },
  {
    "id": "fp_27224",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 278.0
  },
  {
    "id": "fp_26789",
    "name": "David White Jr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 279.0
  },
  {
    "id": "fp_28129",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 279.0
  },
  {
    "id": "fp_18397",
    "name": "Foster Moreau",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 280.0
  },
  {
    "id": "fp_19252",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 281.0
  },
  {
    "id": "fp_24212",
    "name": "Josh Johnson",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 282.0
  },
  {
    "id": "fp_23120",
    "name": "EJ Smith",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 283.0
  },
  {
    "id": "fp_15581",
    "name": "Austin Hooper",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 284.0
  },
  {
    "id": "fp_24367",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 285.0
  },
  {
    "id": "fp_15831",
    "name": "Jerell Adams",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 286.0
  },
  {
    "id": "fp_17687",
    "name": "Gus Edwards",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 287.0
  },
  {
    "id": "fp_25531",
    "name": "Shaquan Davis",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 288.0
  },
  {
    "id": "fp_23119",
    "name": "Elijah Higgins",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 289.0
  },
  {
    "id": "fp_25538",
    "name": "Sy Barnett",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 290.0
  },
  {
    "id": "fp_25984",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 290.0
  },
  {
    "id": "fp_24205",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 291.0
  },
  {
    "id": "fp_25725",
    "name": "Robert Burns",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 291.0
  },
  {
    "id": "fp_23101",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 292.0
  },
  {
    "id": "fp_23079",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 293.0
  },
  {
    "id": "fp_26043",
    "name": "Octavian Smith Jr.",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 293.0
  },
  {
    "id": "fp_23506",
    "name": "Donte Sylencieux",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 294.0
  },
  {
    "id": "fp_18621",
    "name": "Alexander Mattison",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 295.0
  },
  {
    "id": "fp_19438",
    "name": "J.J. Taylor",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 295.0
  },
  {
    "id": "fp_26076",
    "name": "La'Michael Pettway",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 298.0
  },
  {
    "id": "fp_28500",
    "name": "Anthony Smith",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 299.0
  },
  {
    "id": "fp_9111",
    "name": "Chase Daniel",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 302.0
  },
  {
    "id": "fp_18292",
    "name": "Elijah Holyfield",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 303.0
  },
  {
    "id": "fp_16457",
    "name": "Adam Shaheen",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 306.0
  },
  {
    "id": "fp_24073",
    "name": "Jaren Hall",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 307.0
  },
  {
    "id": "fp_23162",
    "name": "Keaontay Ingram",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 308.0
  },
  {
    "id": "fp_19852",
    "name": "J'mar Smith",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 309.0
  },
  {
    "id": "fp_24816",
    "name": "Tyreik McAllister",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 310.0
  },
  {
    "id": "fp_11613",
    "name": "Cordarrelle Patterson",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 311.0
  },
  {
    "id": "fp_19624",
    "name": "Antonio Gibson",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 312.0
  },
  {
    "id": "fp_25519",
    "name": "Malik Knowles",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 313.0
  },
  {
    "id": "fp_16743",
    "name": "Johnny Mundt",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 314.0
  }
];