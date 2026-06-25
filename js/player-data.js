const PLAYERS_DATA = [
  {
    "id": "fp_1",
    "name": "Jahmyr Gibbs",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 1.3
  },
  {
    "id": "fp_2",
    "name": "Bijan Robinson",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 1.7
  },
  {
    "id": "fp_3",
    "name": "Ja'Marr Chase",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 3.0
  },
  {
    "id": "fp_4",
    "name": "Puka Nacua",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 4.0
  },
  {
    "id": "fp_5",
    "name": "Jaxon Smith-Njigba",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 5.3
  },
  {
    "id": "fp_6",
    "name": "Christian McCaffrey",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 6.0
  },
  {
    "id": "fp_7",
    "name": "Jonathan Taylor",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 7.0
  },
  {
    "id": "fp_8",
    "name": "Amon-Ra St. Brown",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 7.7
  },
  {
    "id": "fp_9",
    "name": "Justin Jefferson",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 10.3
  },
  {
    "id": "fp_10",
    "name": "James Cook III",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 11.0
  },
  {
    "id": "fp_11",
    "name": "CeeDee Lamb",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 11.3
  },
  {
    "id": "fp_12",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 12.3
  },
  {
    "id": "fp_13",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 14.3
  },
  {
    "id": "fp_14",
    "name": "Saquon Barkley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 14.7
  },
  {
    "id": "fp_15",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 16.7
  },
  {
    "id": "fp_16",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 17.7
  },
  {
    "id": "fp_17",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 17.7
  },
  {
    "id": "fp_18",
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 17.7
  },
  {
    "id": "fp_19",
    "name": "Drake London",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 18.0
  },
  {
    "id": "fp_20",
    "name": "Kenneth Walker III",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 19.0
  },
  {
    "id": "fp_21",
    "name": "A.J. Brown",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 21.3
  },
  {
    "id": "fp_22",
    "name": "Derrick Henry",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 22.0
  },
  {
    "id": "fp_23",
    "name": "Josh Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 23.0
  },
  {
    "id": "fp_24",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 23.0
  },
  {
    "id": "fp_25",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 23.7
  },
  {
    "id": "fp_26",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 25.3
  },
  {
    "id": "fp_27",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 28.3
  },
  {
    "id": "fp_28",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 30.3
  },
  {
    "id": "fp_29",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 31.3
  },
  {
    "id": "fp_30",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 31.7
  },
  {
    "id": "fp_31",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 32.0
  },
  {
    "id": "fp_32",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 33.7
  },
  {
    "id": "fp_33",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 34.3
  },
  {
    "id": "fp_34",
    "name": "Travis Etienne Jr.",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 35.0
  },
  {
    "id": "fp_35",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 35.7
  },
  {
    "id": "fp_36",
    "name": "Emeka Egbuka",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 38.0
  },
  {
    "id": "fp_37",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 38.7
  },
  {
    "id": "fp_38",
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 39.0
  },
  {
    "id": "fp_39",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 39.3
  },
  {
    "id": "fp_40",
    "name": "Cam Skattebo",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 40.3
  },
  {
    "id": "fp_41",
    "name": "Tetairoa McMillan",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 41.7
  },
  {
    "id": "fp_42",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 42.3
  },
  {
    "id": "fp_43",
    "name": "Lamar Jackson",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 42.7
  },
  {
    "id": "fp_44",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 43.7
  },
  {
    "id": "fp_45",
    "name": "Luther Burden III",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 46.7
  },
  {
    "id": "fp_46",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 48.3
  },
  {
    "id": "fp_47",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 49.3
  },
  {
    "id": "fp_48",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 49.7
  },
  {
    "id": "fp_49",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 50.3
  },
  {
    "id": "fp_50",
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 51.3
  },
  {
    "id": "fp_51",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 53.0
  },
  {
    "id": "fp_52",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 53.3
  },
  {
    "id": "fp_53",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 54.3
  },
  {
    "id": "fp_54",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 54.7
  },
  {
    "id": "fp_55",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 54.7
  },
  {
    "id": "fp_56",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 54.7
  },
  {
    "id": "fp_57",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 55.3
  },
  {
    "id": "fp_58",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 55.3
  },
  {
    "id": "fp_59",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 55.7
  },
  {
    "id": "fp_60",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 58.3
  },
  {
    "id": "fp_61",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 60.0
  },
  {
    "id": "fp_62",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 60.3
  },
  {
    "id": "fp_63",
    "name": "Rome Odunze",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 63.3
  },
  {
    "id": "fp_64",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 66.0
  },
  {
    "id": "fp_65",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 66.3
  },
  {
    "id": "fp_66",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 67.3
  },
  {
    "id": "fp_67",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 68.7
  },
  {
    "id": "fp_68",
    "name": "Carnell Tate",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 71.3
  },
  {
    "id": "fp_69",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 72.3
  },
  {
    "id": "fp_70",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 72.7
  },
  {
    "id": "fp_71",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 74.0
  },
  {
    "id": "fp_72",
    "name": "Harold Fannin Jr.",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 75.0
  },
  {
    "id": "fp_73",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 75.3
  },
  {
    "id": "fp_74",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 76.0
  },
  {
    "id": "fp_75",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 78.7
  },
  {
    "id": "fp_76",
    "name": "Kyle Pitts Sr.",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 79.3
  },
  {
    "id": "fp_77",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 79.7
  },
  {
    "id": "fp_78",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 80.0
  },
  {
    "id": "fp_79",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 80.3
  },
  {
    "id": "fp_80",
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 80.7
  },
  {
    "id": "fp_81",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 80.7
  },
  {
    "id": "fp_82",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 81.7
  },
  {
    "id": "fp_83",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 82.3
  },
  {
    "id": "fp_84",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 83.7
  },
  {
    "id": "fp_85",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 84.7
  },
  {
    "id": "fp_86",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 85.7
  },
  {
    "id": "fp_87",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 86.0
  },
  {
    "id": "fp_88",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 88.0
  },
  {
    "id": "fp_89",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 89.0
  },
  {
    "id": "fp_90",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 89.7
  },
  {
    "id": "fp_91",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 89.7
  },
  {
    "id": "fp_92",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 92.3
  },
  {
    "id": "fp_93",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 92.7
  },
  {
    "id": "fp_94",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 92.7
  },
  {
    "id": "fp_95",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 97.3
  },
  {
    "id": "fp_96",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 97.7
  },
  {
    "id": "fp_97",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 97.7
  },
  {
    "id": "fp_98",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 99.7
  },
  {
    "id": "fp_99",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 100.0
  },
  {
    "id": "fp_100",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 102.0
  },
  {
    "id": "fp_101",
    "name": "Kenny Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 102.7
  },
  {
    "id": "fp_102",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 103.0
  },
  {
    "id": "fp_103",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 103.3
  },
  {
    "id": "fp_104",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 104.0
  },
  {
    "id": "fp_105",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 105.0
  },
  {
    "id": "fp_106",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 105.0
  },
  {
    "id": "fp_107",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 106.3
  },
  {
    "id": "fp_108",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 106.3
  },
  {
    "id": "fp_109",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 106.7
  },
  {
    "id": "fp_110",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 107.3
  },
  {
    "id": "fp_111",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 108.7
  },
  {
    "id": "fp_112",
    "name": "Ricky Pearsall",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 109.0
  },
  {
    "id": "fp_113",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 109.7
  },
  {
    "id": "fp_114",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 110.7
  },
  {
    "id": "fp_115",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 112.0
  },
  {
    "id": "fp_116",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 112.7
  },
  {
    "id": "fp_117",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 113.7
  },
  {
    "id": "fp_118",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 115.3
  },
  {
    "id": "fp_119",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 117.0
  },
  {
    "id": "fp_120",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 117.0
  },
  {
    "id": "fp_121",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 119.0
  },
  {
    "id": "fp_122",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 119.7
  },
  {
    "id": "fp_123",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 120.3
  },
  {
    "id": "fp_124",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 121.0
  },
  {
    "id": "fp_125",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 121.3
  },
  {
    "id": "fp_126",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 122.7
  },
  {
    "id": "fp_127",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 124.0
  },
  {
    "id": "fp_128",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 126.0
  },
  {
    "id": "fp_129",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 131.3
  },
  {
    "id": "fp_130",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 131.7
  },
  {
    "id": "fp_131",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 132.3
  },
  {
    "id": "fp_132",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 132.7
  },
  {
    "id": "fp_133",
    "name": "Jayden Higgins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 135.0
  },
  {
    "id": "fp_134",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 135.3
  },
  {
    "id": "fp_135",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 137.3
  },
  {
    "id": "fp_136",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 140.0
  },
  {
    "id": "fp_137",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 140.3
  },
  {
    "id": "fp_138",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 140.3
  },
  {
    "id": "fp_139",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 141.3
  },
  {
    "id": "fp_140",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 142.0
  },
  {
    "id": "fp_141",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 143.3
  },
  {
    "id": "fp_142",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 143.3
  },
  {
    "id": "fp_143",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 144.7
  },
  {
    "id": "fp_144",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 145.0
  },
  {
    "id": "fp_145",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 145.3
  },
  {
    "id": "fp_146",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 145.3
  },
  {
    "id": "fp_147",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 145.7
  },
  {
    "id": "fp_148",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 146.3
  },
  {
    "id": "fp_149",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 148.0
  },
  {
    "id": "fp_150",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 149.3
  },
  {
    "id": "fp_151",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 151.7
  },
  {
    "id": "fp_152",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 152.3
  },
  {
    "id": "fp_153",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 152.7
  },
  {
    "id": "fp_154",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 154.0
  },
  {
    "id": "fp_155",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 154.3
  },
  {
    "id": "fp_156",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 154.7
  },
  {
    "id": "fp_157",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 155.7
  },
  {
    "id": "fp_158",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 155.7
  },
  {
    "id": "fp_159",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 156.3
  },
  {
    "id": "fp_160",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 162.0
  },
  {
    "id": "fp_161",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 165.7
  },
  {
    "id": "fp_162",
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 165.7
  },
  {
    "id": "fp_163",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 166.7
  },
  {
    "id": "fp_164",
    "name": "Dylan Sampson",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 167.7
  },
  {
    "id": "fp_165",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 168.7
  },
  {
    "id": "fp_166",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 170.3
  },
  {
    "id": "fp_167",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 171.3
  },
  {
    "id": "fp_168",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 173.3
  },
  {
    "id": "fp_169",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 174.0
  },
  {
    "id": "fp_170",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 174.0
  },
  {
    "id": "fp_171",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 174.0
  },
  {
    "id": "fp_172",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 174.3
  },
  {
    "id": "fp_173",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 177.0
  },
  {
    "id": "fp_174",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 179.3
  },
  {
    "id": "fp_175",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 179.7
  },
  {
    "id": "fp_176",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 180.0
  },
  {
    "id": "fp_177",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 180.0
  },
  {
    "id": "fp_178",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 180.0
  },
  {
    "id": "fp_179",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 180.0
  },
  {
    "id": "fp_180",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 182.3
  },
  {
    "id": "fp_181",
    "name": "Isaac TeSlaa",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 182.3
  },
  {
    "id": "fp_182",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 183.3
  },
  {
    "id": "fp_183",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 184.3
  },
  {
    "id": "fp_184",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 184.7
  },
  {
    "id": "fp_185",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 184.7
  },
  {
    "id": "fp_186",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 186.0
  },
  {
    "id": "fp_187",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 187.0
  },
  {
    "id": "fp_188",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 188.7
  },
  {
    "id": "fp_189",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 191.7
  },
  {
    "id": "fp_190",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 192.3
  },
  {
    "id": "fp_191",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 192.7
  },
  {
    "id": "fp_192",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 193.3
  },
  {
    "id": "fp_193",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 194.0
  },
  {
    "id": "fp_194",
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 194.3
  },
  {
    "id": "fp_195",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 195.7
  },
  {
    "id": "fp_196",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 195.7
  },
  {
    "id": "fp_197",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 197.0
  },
  {
    "id": "fp_198",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 198.7
  },
  {
    "id": "fp_199",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 202.0
  },
  {
    "id": "fp_200",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 202.3
  },
  {
    "id": "fp_201",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 205.7
  },
  {
    "id": "fp_202",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 206.3
  },
  {
    "id": "fp_203",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 176.5
  },
  {
    "id": "fp_204",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 206.7
  },
  {
    "id": "fp_205",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 210.3
  },
  {
    "id": "fp_206",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 210.3
  },
  {
    "id": "fp_207",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 210.3
  },
  {
    "id": "fp_208",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 211.7
  },
  {
    "id": "fp_209",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 212.0
  },
  {
    "id": "fp_210",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 212.0
  },
  {
    "id": "fp_211",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 213.7
  },
  {
    "id": "fp_212",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 215.0
  },
  {
    "id": "fp_213",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 215.3
  },
  {
    "id": "fp_214",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 216.7
  },
  {
    "id": "fp_215",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 218.3
  },
  {
    "id": "fp_216",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 219.0
  },
  {
    "id": "fp_217",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 219.7
  },
  {
    "id": "fp_218",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 220.0
  },
  {
    "id": "fp_219",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 220.3
  },
  {
    "id": "fp_220",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 223.3
  },
  {
    "id": "fp_221",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 223.7
  },
  {
    "id": "fp_222",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 223.7
  },
  {
    "id": "fp_223",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 224.3
  },
  {
    "id": "fp_224",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 225.3
  },
  {
    "id": "fp_225",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 225.7
  },
  {
    "id": "fp_226",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 227.0
  },
  {
    "id": "fp_227",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 227.0
  },
  {
    "id": "fp_228",
    "name": "Chris Brazzell II",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 227.7
  },
  {
    "id": "fp_229",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 229.0
  },
  {
    "id": "fp_230",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 229.7
  },
  {
    "id": "fp_231",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 230.0
  },
  {
    "id": "fp_232",
    "name": "Elijah Sarratt",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 230.3
  },
  {
    "id": "fp_233",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 232.3
  },
  {
    "id": "fp_234",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 232.7
  },
  {
    "id": "fp_235",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 235.0
  },
  {
    "id": "fp_236",
    "name": "Austin Ekeler",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 288.0
  },
  {
    "id": "fp_237",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 239.3
  },
  {
    "id": "fp_238",
    "name": "Chris Brooks",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 239.7
  },
  {
    "id": "fp_239",
    "name": "Rashod Bateman",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 241.3
  },
  {
    "id": "fp_240",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 243.7
  },
  {
    "id": "fp_241",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 232.5
  },
  {
    "id": "fp_242",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 233.5
  },
  {
    "id": "fp_243",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 235.0
  },
  {
    "id": "fp_244",
    "name": "Tyquan Thornton",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 237.0
  },
  {
    "id": "fp_245",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 247.3
  },
  {
    "id": "fp_246",
    "name": "Joe Mixon",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 263.5
  },
  {
    "id": "fp_247",
    "name": "Carson Beck",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 239.5
  },
  {
    "id": "fp_248",
    "name": "Kaleb Johnson",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 249.0
  },
  {
    "id": "fp_249",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 242.0
  },
  {
    "id": "fp_250",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 242.5
  },
  {
    "id": "fp_251",
    "name": "DJ Giddens",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 242.5
  },
  {
    "id": "fp_252",
    "name": "Darnell Washington",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 243.5
  },
  {
    "id": "fp_253",
    "name": "Mason Taylor",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 251.3
  },
  {
    "id": "fp_254",
    "name": "Michael Mayer",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 252.3
  },
  {
    "id": "fp_255",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 225.0
  },
  {
    "id": "fp_256",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 246.5
  },
  {
    "id": "fp_257",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 253.3
  },
  {
    "id": "fp_258",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 248.0
  },
  {
    "id": "fp_259",
    "name": "Justin Fields",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 261.5
  },
  {
    "id": "fp_260",
    "name": "Najee Harris",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 254.0
  },
  {
    "id": "fp_261",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 253.0
  },
  {
    "id": "fp_262",
    "name": "Skyler Bell",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 238.0
  },
  {
    "id": "fp_263",
    "name": "Hollywood Brown",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 262.0
  },
  {
    "id": "fp_264",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 297.5
  },
  {
    "id": "fp_265",
    "name": "Andrei Iosivas",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 242.0
  },
  {
    "id": "fp_266",
    "name": "Zavion Thomas",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 243.0
  },
  {
    "id": "fp_267",
    "name": "Chimere Dike",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 245.0
  },
  {
    "id": "fp_268",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 256.0
  },
  {
    "id": "fp_269",
    "name": "Brenen Thompson",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 258.5
  },
  {
    "id": "fp_270",
    "name": "Darius Slayton",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 246.0
  },
  {
    "id": "fp_271",
    "name": "Ja'Tavion Sanders",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 247.0
  },
  {
    "id": "fp_272",
    "name": "J.J. McCarthy",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 257.5
  },
  {
    "id": "fp_273",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 259.5
  },
  {
    "id": "fp_274",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 267.5
  },
  {
    "id": "fp_275",
    "name": "Devontez Walker",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 255.0
  },
  {
    "id": "fp_276",
    "name": "Dawson Knox",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 258.0
  },
  {
    "id": "fp_277",
    "name": "Elijah Arroyo",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 269.0
  },
  {
    "id": "fp_278",
    "name": "Oscar Delp",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 261.0
  },
  {
    "id": "fp_279",
    "name": "Elic Ayomanor",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 263.0
  },
  {
    "id": "fp_280",
    "name": "Eli Raridon",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 265.0
  },
  {
    "id": "fp_281",
    "name": "Devin Neal",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 294.5
  },
  {
    "id": "fp_282",
    "name": "Charlie Kolar",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 267.0
  },
  {
    "id": "fp_283",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 270.0
  },
  {
    "id": "fp_284",
    "name": "Savion Williams",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 273.0
  },
  {
    "id": "fp_285",
    "name": "Xavier Legette",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 274.0
  },
  {
    "id": "fp_286",
    "name": "Isaiah Bond",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 276.0
  },
  {
    "id": "fp_287",
    "name": "Kyle Williams",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 277.0
  },
  {
    "id": "fp_288",
    "name": "Odell Beckham Jr.",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 279.0
  },
  {
    "id": "fp_289",
    "name": "Treylon Burks",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 281.0
  },
  {
    "id": "fp_290",
    "name": "Cole Kmet",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 282.0
  },
  {
    "id": "fp_291",
    "name": "KaVontae Turpin",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 285.0
  },
  {
    "id": "fp_292",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 286.0
  },
  {
    "id": "fp_293",
    "name": "Kevin Coleman Jr.",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 287.0
  },
  {
    "id": "fp_294",
    "name": "Erick All Jr.",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 288.0
  },
  {
    "id": "fp_295",
    "name": "Kendrick Bourne",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 289.0
  },
  {
    "id": "fp_296",
    "name": "Justin Joly",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 290.0
  },
  {
    "id": "fp_297",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 291.0
  },
  {
    "id": "fp_298",
    "name": "Phil Mafah",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 292.0
  },
  {
    "id": "fp_299",
    "name": "Eli Heidenreich",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 294.0
  },
  {
    "id": "fp_300",
    "name": "Jalen Royals",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 295.0
  },
  {
    "id": "fp_301",
    "name": "Tez Johnson",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 296.0
  },
  {
    "id": "fp_302",
    "name": "Kalif Raymond",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 297.0
  },
  {
    "id": "fp_303",
    "name": "Joe Flacco",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 298.0
  },
  {
    "id": "fp_304",
    "name": "Mac Jones",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 299.0
  },
  {
    "id": "fp_305",
    "name": "Cade Klubnik",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 300.0
  },
  {
    "id": "fp_306",
    "name": "Nick Westbrook-Ikhine",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 301.0
  },
  {
    "id": "fp_307",
    "name": "Jordan Whittington",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 302.0
  },
  {
    "id": "fp_308",
    "name": "Dyami Brown",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 303.0
  },
  {
    "id": "fp_309",
    "name": "Ashton Dulin",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 304.0
  },
  {
    "id": "fp_310",
    "name": "Skyy Moore",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 305.0
  },
  {
    "id": "fp_311",
    "name": "Luke Stocker",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 306.0
  },
  {
    "id": "fp_312",
    "name": "Mack Hollins",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 307.0
  },
  {
    "id": "fp_313",
    "name": "Max Klare",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 308.0
  },
  {
    "id": "fp_314",
    "name": "Anthony Richardson Sr.",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 309.0
  },
  {
    "id": "fp_315",
    "name": "Isaiah Davis",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 310.0
  },
  {
    "id": "fp_316",
    "name": "Luke Musgrave",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 311.0
  },
  {
    "id": "fp_317",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 312.0
  },
  {
    "id": "fp_318",
    "name": "Joshua Palmer",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 313.0
  },
  {
    "id": "fp_319",
    "name": "Colbie Young",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 314.0
  },
  {
    "id": "fp_320",
    "name": "Greg Dortch",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 315.0
  },
  {
    "id": "fp_321",
    "name": "Durham Smythe",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 316.0
  },
  {
    "id": "fp_322",
    "name": "Luke McCaffrey",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 317.0
  },
  {
    "id": "fp_323",
    "name": "Malik Benson",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 318.0
  },
  {
    "id": "fp_324",
    "name": "C.J. Uzomah",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 320.0
  },
  {
    "id": "fp_325",
    "name": "Marvin Mims Jr.",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 321.0
  },
  {
    "id": "fp_326",
    "name": "Calvin Austin III",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 322.0
  },
  {
    "id": "fp_327",
    "name": "Konata Mumpfield",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 323.0
  },
  {
    "id": "fp_328",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 325.0
  },
  {
    "id": "fp_329",
    "name": "Tyler Higbee",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 326.0
  },
  {
    "id": "fp_330",
    "name": "Matt Hibner",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 327.0
  },
  {
    "id": "fp_331",
    "name": "Ben Sinnott",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 328.0
  },
  {
    "id": "fp_332",
    "name": "Tahj Brooks",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 329.0
  },
  {
    "id": "fp_333",
    "name": "Tanner Hudson",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 330.0
  },
  {
    "id": "fp_334",
    "name": "Jacob Cowing",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 331.0
  },
  {
    "id": "fp_335",
    "name": "Antonio Gibson",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 332.0
  },
  {
    "id": "fp_336",
    "name": "Olamide Zaccheaus",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 333.0
  },
  {
    "id": "fp_337",
    "name": "Jaylin Lane",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 334.0
  },
  {
    "id": "fp_338",
    "name": "DeMario Douglas",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 335.0
  },
  {
    "id": "fp_339",
    "name": "Noah Gray",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 336.0
  },
  {
    "id": "fp_340",
    "name": "CJ Daniels",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 337.0
  },
  {
    "id": "fp_341",
    "name": "Xavier Hutchinson",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 338.0
  },
  {
    "id": "fp_342",
    "name": "John Metchie III",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 339.0
  },
  {
    "id": "fp_343",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 340.0
  },
  {
    "id": "fp_344",
    "name": "Trevor Etienne",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 341.0
  },
  {
    "id": "fp_345",
    "name": "J'Mari Taylor",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 342.0
  },
  {
    "id": "fp_346",
    "name": "Van Jefferson",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 343.0
  },
  {
    "id": "fp_347",
    "name": "Michael Trigg",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 344.0
  },
  {
    "id": "fp_348",
    "name": "Tanner Koziol",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 345.0
  },
  {
    "id": "fp_349",
    "name": "Mitchell Evans",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 346.0
  },
  {
    "id": "fp_350",
    "name": "Tommy Tremble",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 347.0
  },
  {
    "id": "fp_351",
    "name": "Luke Schoonmaker",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 348.0
  },
  {
    "id": "fp_352",
    "name": "Deion Burks",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 349.0
  },
  {
    "id": "fp_353",
    "name": "Roman Wilson",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 350.0
  },
  {
    "id": "fp_354",
    "name": "Jameis Winston",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 351.0
  },
  {
    "id": "fp_355",
    "name": "Tyson Bagent",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 352.0
  },
  {
    "id": "fp_356",
    "name": "Joe Milton III",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 353.0
  },
  {
    "id": "fp_357",
    "name": "Tim Patrick",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 354.0
  },
  {
    "id": "fp_358",
    "name": "Foster Moreau",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 356.0
  },
  {
    "id": "fp_359",
    "name": "Cedric Tillman",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 357.0
  },
  {
    "id": "fp_360",
    "name": "Darren Waller",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 358.0
  },
  {
    "id": "fp_361",
    "name": "Will Kacmarek",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 359.0
  },
  {
    "id": "fp_362",
    "name": "Jack Endries",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 360.0
  },
  {
    "id": "fp_363",
    "name": "Jerome Ford",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 361.0
  },
  {
    "id": "fp_364",
    "name": "Rasheen Ali",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 362.0
  },
  {
    "id": "fp_365",
    "name": "Taylen Green",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 363.0
  },
  {
    "id": "fp_366",
    "name": "Daniel Bellinger",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 364.0
  },
  {
    "id": "fp_367",
    "name": "Will Shipley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 365.0
  },
  {
    "id": "fp_368",
    "name": "Isaiah Williams",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 366.0
  },
  {
    "id": "fp_369",
    "name": "Sam Roush",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 367.0
  },
  {
    "id": "fp_370",
    "name": "JuJu Smith-Schuster",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 368.0
  },
  {
    "id": "fp_371",
    "name": "Efton Chism III",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 369.0
  },
  {
    "id": "fp_372",
    "name": "Josh Oliver",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 370.0
  },
  {
    "id": "fp_373",
    "name": "Will Howard",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 371.0
  },
  {
    "id": "fp_374",
    "name": "Dont'e Thornton Jr.",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 372.0
  },
  {
    "id": "fp_375",
    "name": "Tyrell Shavers",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 373.0
  },
  {
    "id": "fp_376",
    "name": "Brevyn Spann-Ford",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 374.0
  },
  {
    "id": "fp_377",
    "name": "Nate Boerkircher",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 375.0
  },
  {
    "id": "fp_378",
    "name": "Jahdae Walker",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 376.0
  },
  {
    "id": "fp_379",
    "name": "Audric Estime",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 377.0
  },
  {
    "id": "fp_380",
    "name": "Jam Miller",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 378.0
  },
  {
    "id": "fp_381",
    "name": "Brashard Smith",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 379.0
  },
  {
    "id": "fp_382",
    "name": "Jalen Milroe",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 380.0
  },
  {
    "id": "fp_383",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 381.0
  },
  {
    "id": "fp_384",
    "name": "Marcus Mariota",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 382.0
  },
  {
    "id": "fp_385",
    "name": "Davis Mills",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 383.0
  },
  {
    "id": "fp_386",
    "name": "Mitchell Trubisky",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 384.0
  },
  {
    "id": "fp_387",
    "name": "Jaydn Ott",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 385.0
  },
  {
    "id": "fp_388",
    "name": "Jarquez Hunter",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 386.0
  },
  {
    "id": "fp_389",
    "name": "Arian Smith",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 387.0
  },
  {
    "id": "fp_390",
    "name": "Reggie Virgil",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 388.0
  },
  {
    "id": "fp_391",
    "name": "Josh Whyle",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 389.0
  },
  {
    "id": "fp_392",
    "name": "Brevin Jordan",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 390.0
  },
  {
    "id": "fp_393",
    "name": "Caleb Lohner",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 391.0
  },
  {
    "id": "fp_394",
    "name": "Dillon Bell",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 392.0
  },
  {
    "id": "fp_395",
    "name": "Bauer Sharp",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 393.0
  },
  {
    "id": "fp_396",
    "name": "Robert Henry Jr.",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 394.0
  },
  {
    "id": "fp_397",
    "name": "Johnny Wilson",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 395.0
  },
  {
    "id": "fp_398",
    "name": "Jeff Caldwell",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 397.0
  },
  {
    "id": "fp_399",
    "name": "Jonnu Smith",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 398.0
  },
  {
    "id": "fp_400",
    "name": "Ja'Lynn Polk",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 399.0
  }
];