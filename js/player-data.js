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
    "adp": 4.3
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
    "id": "fp_17298",
    "name": "Josh Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 20.0
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
    "id": "fp_22963",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 23.7
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
    "id": "fp_22936",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 25.0
  },
  {
    "id": "fp_20111",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 27.3
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
    "adp": 28.3
  },
  {
    "id": "fp_22739",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 30.3
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
    "adp": 33.3
  },
  {
    "id": "fp_18269",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 35.7
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
    "adp": 38.3
  },
  {
    "id": "fp_27166",
    "name": "Cam Skattebo",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 39.0
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
    "id": "fp_23062",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 41.3
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
    "id": "fp_26122",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 43.0
  },
  {
    "id": "fp_23072",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 43.3
  },
  {
    "id": "fp_19210",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 44.3
  },
  {
    "id": "fp_25391",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 45.7
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
    "adp": 46.7
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
    "adp": 52.0
  },
  {
    "id": "fp_19196",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 53.3
  },
  {
    "id": "fp_27016",
    "name": "Luther Burden III",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 54.7
  },
  {
    "id": "fp_18466",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 55.3
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
    "id": "fp_12123",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 56.0
  },
  {
    "id": "fp_27329",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 57.0
  },
  {
    "id": "fp_27297",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 57.3
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
    "id": "fp_22902",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 62.0
  },
  {
    "id": "fp_19275",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 62.7
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
    "adp": 66.3
  },
  {
    "id": "fp_12119",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 67.0
  },
  {
    "id": "fp_24209",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 69.7
  },
  {
    "id": "fp_23106",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 70.0
  },
  {
    "id": "fp_27050",
    "name": "Harold Fannin Jr.",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 70.0
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
    "adp": 72.3
  },
  {
    "id": "fp_23084",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 73.0
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
    "adp": 76.0
  },
  {
    "id": "fp_23064",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 76.0
  },
  {
    "id": "fp_19647",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 78.3
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
    "id": "fp_18705",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 78.7
  },
  {
    "id": "fp_23000",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 79.0
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
    "adp": 81.7
  },
  {
    "id": "fp_18219",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 81.7
  },
  {
    "id": "fp_27142",
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 85.7
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
    "id": "fp_19792",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 86.7
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
    "id": "fp_16499",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
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
    "adp": 94.0
  },
  {
    "id": "fp_11594",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 96.3
  },
  {
    "id": "fp_23160",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 96.7
  },
  {
    "id": "fp_22969",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 97.0
  },
  {
    "id": "fp_27131",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 97.0
  },
  {
    "id": "fp_27316",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 101.3
  },
  {
    "id": "fp_25247",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 103.0
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
    "id": "fp_22910",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 106.0
  },
  {
    "id": "fp_23123",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 106.3
  },
  {
    "id": "fp_9451",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 107.0
  },
  {
    "id": "fp_25420",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 107.7
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
    "id": "fp_23107",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 108.7
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
    "id": "fp_19797",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
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
    "id": "fp_13981",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 110.3
  },
  {
    "id": "fp_24706",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 110.3
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
    "adp": 111.7
  },
  {
    "id": "fp_26035",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 112.0
  },
  {
    "id": "fp_22718",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 118.3
  },
  {
    "id": "fp_23891",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 119.3
  },
  {
    "id": "fp_17270",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 122.7
  },
  {
    "id": "fp_15501",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 123.3
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
    "id": "fp_17269",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 123.3
  },
  {
    "id": "fp_27331",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 127.0
  },
  {
    "id": "fp_28108",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 127.3
  },
  {
    "id": "fp_22985",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 127.7
  },
  {
    "id": "fp_18600",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 129.3
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
    "adp": 141.7
  },
  {
    "id": "fp_23118",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 142.0
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
    "id": "fp_23019",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 148.0
  },
  {
    "id": "fp_19246",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 148.0
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
    "id": "fp_22986",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 149.3
  },
  {
    "id": "fp_24172",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 149.3
  },
  {
    "id": "fp_19562",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 150.0
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
    "id": "fp_27320",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 151.7
  },
  {
    "id": "fp_27337",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 152.3
  },
  {
    "id": "fp_23152",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 153.0
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
    "id": "fp_24333",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 157.0
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
    "id": "fp_15561",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 158.0
  },
  {
    "id": "fp_16421",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 159.3
  },
  {
    "id": "fp_23499",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 160.0
  },
  {
    "id": "fp_11616",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 164.0
  },
  {
    "id": "fp_26403",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 164.7
  },
  {
    "id": "fp_23748",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 166.7
  },
  {
    "id": "fp_25323",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 167.3
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
    "id": "fp_25360",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 169.3
  },
  {
    "id": "fp_28013",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 170.3
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
    "id": "fp_23071",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 172.3
  },
  {
    "id": "fp_25345",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 172.3
  },
  {
    "id": "fp_23982",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 172.7
  },
  {
    "id": "fp_24177",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.7
  },
  {
    "id": "fp_22900",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 174.7
  },
  {
    "id": "fp_18232",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 176.3
  },
  {
    "id": "fp_24346",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 176.7
  },
  {
    "id": "fp_9001",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 178.0
  },
  {
    "id": "fp_18290",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 178.3
  },
  {
    "id": "fp_28107",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 179.7
  },
  {
    "id": "fp_16399",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 180.0
  },
  {
    "id": "fp_27339",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 180.0
  },
  {
    "id": "fp_28401",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 180.3
  },
  {
    "id": "fp_24755",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 181.0
  },
  {
    "id": "fp_25997",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 184.0
  },
  {
    "id": "fp_26055",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 185.3
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
    "adp": 188.0
  },
  {
    "id": "fp_19590",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 189.7
  },
  {
    "id": "fp_26034",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 190.0
  },
  {
    "id": "fp_24344",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 191.3
  },
  {
    "id": "fp_23179",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 193.3
  },
  {
    "id": "fp_26335",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 197.3
  },
  {
    "id": "fp_20163",
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 198.7
  },
  {
    "id": "fp_16433",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 199.0
  },
  {
    "id": "fp_16447",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 207.3
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
    "id": "fp_25337",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 174.0
  },
  {
    "id": "fp_22989",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 176.0
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
    "id": "fp_15802",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 221.0
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
    "id": "fp_24354",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 186.0
  },
  {
    "id": "fp_23153",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 223.0
  },
  {
    "id": "fp_27994",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 199.0
  },
  {
    "id": "fp_26191",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 204.5
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
    "adp": 205.5
  },
  {
    "id": "fp_28135",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 205.5
  },
  {
    "id": "fp_17258",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 208.5
  },
  {
    "id": "fp_18256",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 211.0
  },
  {
    "id": "fp_25361",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 211.5
  },
  {
    "id": "fp_24343",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 212.0
  },
  {
    "id": "fp_24357",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 214.5
  },
  {
    "id": "fp_26038",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 215.5
  },
  {
    "id": "fp_15642",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 217.5
  },
  {
    "id": "fp_26215",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 217.5
  },
  {
    "id": "fp_11687",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 223.0
  },
  {
    "id": "fp_25419",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 226.5
  },
  {
    "id": "fp_25987",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 227.5
  },
  {
    "id": "fp_24362",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 229.0
  },
  {
    "id": "fp_27211",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 233.0
  },
  {
    "id": "fp_26355",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 234.0
  },
  {
    "id": "fp_19198",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 234.5
  },
  {
    "id": "fp_27310",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 235.0
  },
  {
    "id": "fp_22973",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 178.0
  },
  {
    "id": "fp_23679",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 238.0
  },
  {
    "id": "fp_27109",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 239.5
  },
  {
    "id": "fp_11177",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 186.0
  },
  {
    "id": "fp_23181",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 242.5
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
    "id": "fp_25968",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 192.0
  },
  {
    "id": "fp_28084",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 246.5
  },
  {
    "id": "fp_19302",
    "name": "Najee Harris",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 201.0
  },
  {
    "id": "fp_26398",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 250.0
  },
  {
    "id": "fp_16398",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 206.0
  },
  {
    "id": "fp_26039",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 253.5
  },
  {
    "id": "fp_25885",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 255.5
  },
  {
    "id": "fp_18280",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 216.0
  },
  {
    "id": "fp_28130",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 257.5
  },
  {
    "id": "fp_26019",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 259.0
  },
  {
    "id": "fp_22915",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 223.0
  },
  {
    "id": "fp_19372",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 262.0
  },
  {
    "id": "fp_26409",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 229.0
  },
  {
    "id": "fp_16411",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 232.0
  },
  {
    "id": "fp_26005",
    "name": "Mason Taylor",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 235.0
  },
  {
    "id": "fp_24778",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 266.0
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
    "id": "fp_25368",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 242.0
  },
  {
    "id": "fp_11606",
    "name": "DeAndre Hopkins",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 248.0
  },
  {
    "id": "fp_22953",
    "name": "Carson Beck",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 250.0
  },
  {
    "id": "fp_25642",
    "name": "Shae Wyatt",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 251.0
  },
  {
    "id": "fp_23144",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 252.0
  },
  {
    "id": "fp_13974",
    "name": "Devin Smith",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 253.0
  },
  {
    "id": "fp_16423",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 257.0
  },
  {
    "id": "fp_23014",
    "name": "Donovan Edwards",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 257.0
  },
  {
    "id": "fp_16757",
    "name": "David Moore",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 259.0
  },
  {
    "id": "fp_19810",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 277.5
  },
  {
    "id": "fp_24568",
    "name": "Ko Kieft",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 260.0
  },
  {
    "id": "fp_25676",
    "name": "Marcus Cooper",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 262.0
  },
  {
    "id": "fp_24367",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 263.0
  },
  {
    "id": "fp_25632",
    "name": "Jalen Sample",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 263.0
  },
  {
    "id": "fp_25832",
    "name": "Brian Walker",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 265.0
  },
  {
    "id": "fp_23079",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 266.0
  },
  {
    "id": "fp_25350",
    "name": "Ryan Jones",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 268.0
  },
  {
    "id": "fp_28129",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 269.0
  },
  {
    "id": "fp_12108",
    "name": "Devonta Freeman",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 270.0
  },
  {
    "id": "fp_26022",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 271.0
  },
  {
    "id": "fp_17352",
    "name": "Godwin Igwebuike",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 272.0
  },
  {
    "id": "fp_25984",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 272.0
  },
  {
    "id": "fp_25682",
    "name": "Calvin Tyler Jr.",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 274.0
  },
  {
    "id": "fp_23104",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 275.0
  },
  {
    "id": "fp_14104",
    "name": "Darren Waller",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 276.0
  },
  {
    "id": "fp_25706",
    "name": "Chris Smith",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 276.0
  },
  {
    "id": "fp_18406",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 277.0
  },
  {
    "id": "fp_25388",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 277.0
  },
  {
    "id": "fp_23056",
    "name": "Michael Mayer",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 278.0
  },
  {
    "id": "fp_23092",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 278.0
  },
  {
    "id": "fp_27224",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 279.0
  },
  {
    "id": "fp_18460",
    "name": "Dexter Williams",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 280.0
  },
  {
    "id": "fp_25823",
    "name": "Chris Brooks",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 281.0
  },
  {
    "id": "fp_24205",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 282.0
  },
  {
    "id": "fp_25657",
    "name": "Blake Whiteheart",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 283.0
  },
  {
    "id": "fp_28126",
    "name": "Skyler Bell",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 283.0
  },
  {
    "id": "fp_16425",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 284.0
  },
  {
    "id": "fp_19252",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 284.0
  },
  {
    "id": "fp_17272",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 285.0
  },
  {
    "id": "fp_27552",
    "name": "Junior Bergen",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 285.0
  },
  {
    "id": "fp_27138",
    "name": "Mitchell Evans",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 286.0
  },
  {
    "id": "fp_19794",
    "name": "Rashod Bateman",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 287.0
  },
  {
    "id": "fp_9588",
    "name": "Ted Ginn Jr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 288.0
  },
  {
    "id": "fp_22997",
    "name": "Corey Kiner",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 289.0
  },
  {
    "id": "fp_12118",
    "name": "Sammy Watkins",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 290.0
  },
  {
    "id": "fp_17268",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
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
    "id": "fp_17387",
    "name": "Ian Thomas",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 292.0
  },
  {
    "id": "fp_20126",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 293.0
  },
  {
    "id": "fp_25881",
    "name": "Nate Adkins",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 293.0
  },
  {
    "id": "fp_25654",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 294.0
  },
  {
    "id": "fp_27066",
    "name": "Xavier Restrepo",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 294.0
  },
  {
    "id": "fp_26384",
    "name": "Carter Bradley",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 295.0
  },
  {
    "id": "fp_27122",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 295.0
  },
  {
    "id": "fp_26383",
    "name": "Austin Reed",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 297.0
  },
  {
    "id": "fp_25349",
    "name": "Ben Sims",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 301.0
  },
  {
    "id": "fp_19852",
    "name": "J'mar Smith",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 302.0
  },
  {
    "id": "fp_25960",
    "name": "Ed Lee",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 304.0
  },
  {
    "id": "fp_18241",
    "name": "Will Grier",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 305.0
  },
  {
    "id": "fp_28756",
    "name": "Jacob De Jesus",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 306.0
  },
  {
    "id": "fp_26076",
    "name": "La'Michael Pettway",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 307.0
  },
  {
    "id": "fp_25519",
    "name": "Malik Knowles",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 308.0
  },
  {
    "id": "fp_26389",
    "name": "John Rhys Plumlee",
    "position": "QB",
    "team": "FA",
    "bye_week": "-",
    "adp": 311.0
  },
  {
    "id": "fp_17541",
    "name": "Ryan Izzo",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 312.0
  },
  {
    "id": "fp_26430",
    "name": "Isaac Rex",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 313.0
  },
  {
    "id": "fp_12136",
    "name": "Martavis Bryant",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 314.0
  },
  {
    "id": "fp_22843",
    "name": "Ben Skowronek",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 316.0
  }
];