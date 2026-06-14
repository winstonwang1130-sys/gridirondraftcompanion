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
    "adp": 10.0
  },
  {
    "id": "fp_10",
    "name": "CeeDee Lamb",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 11.0
  },
  {
    "id": "fp_11",
    "name": "James Cook III",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 11.3
  },
  {
    "id": "fp_12",
    "name": "Ashton Jeanty",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 12.7
  },
  {
    "id": "fp_13",
    "name": "De'Von Achane",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 14.0
  },
  {
    "id": "fp_14",
    "name": "Saquon Barkley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 15.0
  },
  {
    "id": "fp_15",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 17.0
  },
  {
    "id": "fp_16",
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 17.3
  },
  {
    "id": "fp_17",
    "name": "Trey McBride",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 17.7
  },
  {
    "id": "fp_18",
    "name": "Drake London",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 17.7
  },
  {
    "id": "fp_19",
    "name": "Chase Brown",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 18.0
  },
  {
    "id": "fp_20",
    "name": "Kenneth Walker III",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 18.7
  },
  {
    "id": "fp_21",
    "name": "A.J. Brown",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 21.7
  },
  {
    "id": "fp_22",
    "name": "Derrick Henry",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 21.7
  },
  {
    "id": "fp_23",
    "name": "Nico Collins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 22.7
  },
  {
    "id": "fp_24",
    "name": "Josh Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 23.0
  },
  {
    "id": "fp_25",
    "name": "Jeremiyah Love",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 24.7
  },
  {
    "id": "fp_26",
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 24.7
  },
  {
    "id": "fp_27",
    "name": "Chris Olave",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 27.3
  },
  {
    "id": "fp_28",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 31.3
  },
  {
    "id": "fp_29",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 31.3
  },
  {
    "id": "fp_30",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 31.7
  },
  {
    "id": "fp_31",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 32.3
  },
  {
    "id": "fp_32",
    "name": "Malik Nabers",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 33.3
  },
  {
    "id": "fp_33",
    "name": "Javonte Williams",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 34.0
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
    "adp": 36.3
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
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 38.3
  },
  {
    "id": "fp_38",
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 38.7
  },
  {
    "id": "fp_39",
    "name": "Zay Flowers",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 39.0
  },
  {
    "id": "fp_40",
    "name": "Cam Skattebo",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 41.0
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
    "adp": 44.0
  },
  {
    "id": "fp_44",
    "name": "Ladd McConkey",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 44.0
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
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 47.3
  },
  {
    "id": "fp_47",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 47.7
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
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 52.3
  },
  {
    "id": "fp_50",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 52.7
  },
  {
    "id": "fp_51",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 53.0
  },
  {
    "id": "fp_52",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 53.3
  },
  {
    "id": "fp_53",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 53.7
  },
  {
    "id": "fp_54",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 53.7
  },
  {
    "id": "fp_55",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 54.3
  },
  {
    "id": "fp_56",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 54.7
  },
  {
    "id": "fp_57",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 55.0
  },
  {
    "id": "fp_58",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 55.3
  },
  {
    "id": "fp_59",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 56.0
  },
  {
    "id": "fp_60",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 56.7
  },
  {
    "id": "fp_61",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 59.3
  },
  {
    "id": "fp_62",
    "name": "Bhayshul Tuten",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 61.0
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
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 66.7
  },
  {
    "id": "fp_65",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 67.7
  },
  {
    "id": "fp_66",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 68.3
  },
  {
    "id": "fp_67",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 69.7
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
    "name": "Harold Fannin Jr.",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 71.7
  },
  {
    "id": "fp_70",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 71.7
  },
  {
    "id": "fp_71",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 72.3
  },
  {
    "id": "fp_72",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 72.7
  },
  {
    "id": "fp_73",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 74.0
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
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 79.3
  },
  {
    "id": "fp_76",
    "name": "Jaylen Warren",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 79.3
  },
  {
    "id": "fp_77",
    "name": "Parker Washington",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 79.7
  },
  {
    "id": "fp_78",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 79.7
  },
  {
    "id": "fp_79",
    "name": "Jordyn Tyson",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 80.0
  },
  {
    "id": "fp_80",
    "name": "Kyle Pitts Sr.",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 80.3
  },
  {
    "id": "fp_81",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 81.3
  },
  {
    "id": "fp_82",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 81.3
  },
  {
    "id": "fp_83",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 81.7
  },
  {
    "id": "fp_84",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 82.3
  },
  {
    "id": "fp_85",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 84.3
  },
  {
    "id": "fp_86",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 85.0
  },
  {
    "id": "fp_87",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 85.3
  },
  {
    "id": "fp_88",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 86.7
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
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 89.3
  },
  {
    "id": "fp_91",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 89.7
  },
  {
    "id": "fp_92",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 91.3
  },
  {
    "id": "fp_93",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 91.3
  },
  {
    "id": "fp_94",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 91.7
  },
  {
    "id": "fp_95",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 97.0
  },
  {
    "id": "fp_96",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 98.0
  },
  {
    "id": "fp_97",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 99.3
  },
  {
    "id": "fp_98",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 100.0
  },
  {
    "id": "fp_99",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 100.3
  },
  {
    "id": "fp_100",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 102.3
  },
  {
    "id": "fp_101",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 103.3
  },
  {
    "id": "fp_102",
    "name": "Kenneth Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 103.3
  },
  {
    "id": "fp_103",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 103.7
  },
  {
    "id": "fp_104",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 105.0
  },
  {
    "id": "fp_105",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 105.0
  },
  {
    "id": "fp_106",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 105.3
  },
  {
    "id": "fp_107",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 106.0
  },
  {
    "id": "fp_108",
    "name": "Wan'Dale Robinson",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 107.3
  },
  {
    "id": "fp_109",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 109.0
  },
  {
    "id": "fp_110",
    "name": "Ricky Pearsall",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 109.7
  },
  {
    "id": "fp_111",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 110.3
  },
  {
    "id": "fp_112",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 110.7
  },
  {
    "id": "fp_113",
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 111.0
  },
  {
    "id": "fp_114",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 111.0
  },
  {
    "id": "fp_115",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 113.3
  },
  {
    "id": "fp_116",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 114.0
  },
  {
    "id": "fp_117",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 115.3
  },
  {
    "id": "fp_118",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 115.7
  },
  {
    "id": "fp_119",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 116.3
  },
  {
    "id": "fp_120",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 116.7
  },
  {
    "id": "fp_121",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 118.0
  },
  {
    "id": "fp_122",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 118.3
  },
  {
    "id": "fp_123",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 120.0
  },
  {
    "id": "fp_124",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 120.3
  },
  {
    "id": "fp_125",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 122.0
  },
  {
    "id": "fp_126",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 123.0
  },
  {
    "id": "fp_127",
    "name": "KC Concepcion",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 124.0
  },
  {
    "id": "fp_128",
    "name": "Jacory Croskey-Merritt",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 125.0
  },
  {
    "id": "fp_129",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 129.0
  },
  {
    "id": "fp_130",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 131.0
  },
  {
    "id": "fp_131",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 132.7
  },
  {
    "id": "fp_132",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 133.0
  },
  {
    "id": "fp_133",
    "name": "Jayden Higgins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 136.3
  },
  {
    "id": "fp_134",
    "name": "Sam Darnold",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 136.3
  },
  {
    "id": "fp_135",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 138.3
  },
  {
    "id": "fp_136",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 139.3
  },
  {
    "id": "fp_137",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 139.7
  },
  {
    "id": "fp_138",
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 139.7
  },
  {
    "id": "fp_139",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 141.3
  },
  {
    "id": "fp_140",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 142.0
  },
  {
    "id": "fp_141",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 142.0
  },
  {
    "id": "fp_142",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 142.3
  },
  {
    "id": "fp_143",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 144.0
  },
  {
    "id": "fp_144",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 144.3
  },
  {
    "id": "fp_145",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 144.3
  },
  {
    "id": "fp_146",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 144.7
  },
  {
    "id": "fp_147",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 147.0
  },
  {
    "id": "fp_148",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 149.3
  },
  {
    "id": "fp_149",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 149.3
  },
  {
    "id": "fp_150",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 149.3
  },
  {
    "id": "fp_151",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 150.3
  },
  {
    "id": "fp_152",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 150.7
  },
  {
    "id": "fp_153",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 154.0
  },
  {
    "id": "fp_154",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 154.7
  },
  {
    "id": "fp_155",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 155.0
  },
  {
    "id": "fp_156",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 155.0
  },
  {
    "id": "fp_157",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 156.0
  },
  {
    "id": "fp_158",
    "name": "Tyjae Spears",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 157.3
  },
  {
    "id": "fp_159",
    "name": "Jalen Nailor",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 160.0
  },
  {
    "id": "fp_160",
    "name": "Alvin Kamara",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 161.0
  },
  {
    "id": "fp_161",
    "name": "Dalton Schultz",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 167.0
  },
  {
    "id": "fp_162",
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 167.3
  },
  {
    "id": "fp_163",
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 167.3
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
    "adp": 168.3
  },
  {
    "id": "fp_166",
    "name": "Antonio Williams",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 171.0
  },
  {
    "id": "fp_167",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 172.0
  },
  {
    "id": "fp_168",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 172.3
  },
  {
    "id": "fp_169",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.3
  },
  {
    "id": "fp_170",
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 173.7
  },
  {
    "id": "fp_171",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 174.3
  },
  {
    "id": "fp_172",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 177.3
  },
  {
    "id": "fp_173",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 177.3
  },
  {
    "id": "fp_174",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 179.0
  },
  {
    "id": "fp_175",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 179.3
  },
  {
    "id": "fp_176",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 179.3
  },
  {
    "id": "fp_177",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 179.3
  },
  {
    "id": "fp_178",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 179.7
  },
  {
    "id": "fp_179",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 181.0
  },
  {
    "id": "fp_180",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 182.0
  },
  {
    "id": "fp_181",
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 183.0
  },
  {
    "id": "fp_182",
    "name": "Sean Tucker",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 183.7
  },
  {
    "id": "fp_183",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 184.0
  },
  {
    "id": "fp_184",
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 185.7
  },
  {
    "id": "fp_185",
    "name": "Isaac TeSlaa",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 186.3
  },
  {
    "id": "fp_186",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 187.0
  },
  {
    "id": "fp_187",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 188.3
  },
  {
    "id": "fp_188",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 191.0
  },
  {
    "id": "fp_189",
    "name": "Kaytron Allen",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 191.7
  },
  {
    "id": "fp_190",
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 194.0
  },
  {
    "id": "fp_191",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 194.7
  },
  {
    "id": "fp_192",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 194.7
  },
  {
    "id": "fp_193",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 195.3
  },
  {
    "id": "fp_194",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 196.0
  },
  {
    "id": "fp_195",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 197.0
  },
  {
    "id": "fp_196",
    "name": "Zachariah Branch",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 197.0
  },
  {
    "id": "fp_197",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 199.0
  },
  {
    "id": "fp_198",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 200.7
  },
  {
    "id": "fp_199",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 202.7
  },
  {
    "id": "fp_200",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 176.5
  },
  {
    "id": "fp_201",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 204.7
  },
  {
    "id": "fp_202",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 206.0
  },
  {
    "id": "fp_203",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 207.0
  },
  {
    "id": "fp_204",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 207.3
  },
  {
    "id": "fp_205",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 208.3
  },
  {
    "id": "fp_206",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 208.7
  },
  {
    "id": "fp_207",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 208.7
  },
  {
    "id": "fp_208",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 210.0
  },
  {
    "id": "fp_209",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 211.3
  },
  {
    "id": "fp_210",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 215.0
  },
  {
    "id": "fp_211",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 215.3
  },
  {
    "id": "fp_212",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 215.3
  },
  {
    "id": "fp_213",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 215.7
  },
  {
    "id": "fp_214",
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 217.7
  },
  {
    "id": "fp_215",
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 218.7
  },
  {
    "id": "fp_216",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 219.0
  },
  {
    "id": "fp_217",
    "name": "Demond Claiborne",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 219.7
  },
  {
    "id": "fp_218",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 219.7
  },
  {
    "id": "fp_219",
    "name": "Keon Coleman",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 221.0
  },
  {
    "id": "fp_220",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 221.7
  },
  {
    "id": "fp_221",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 221.7
  },
  {
    "id": "fp_222",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 222.7
  },
  {
    "id": "fp_223",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 223.0
  },
  {
    "id": "fp_224",
    "name": "Chris Brazzell II",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 224.0
  },
  {
    "id": "fp_225",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 224.3
  },
  {
    "id": "fp_226",
    "name": "Justin Fields",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 223.5
  },
  {
    "id": "fp_227",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 214.5
  },
  {
    "id": "fp_228",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 230.0
  },
  {
    "id": "fp_229",
    "name": "Chris Brooks",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 230.3
  },
  {
    "id": "fp_230",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 232.0
  },
  {
    "id": "fp_231",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 232.3
  },
  {
    "id": "fp_232",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 232.3
  },
  {
    "id": "fp_233",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 233.3
  },
  {
    "id": "fp_234",
    "name": "Austin Ekeler",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 269.5
  },
  {
    "id": "fp_235",
    "name": "Joe Mixon",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 261.0
  },
  {
    "id": "fp_236",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 223.0
  },
  {
    "id": "fp_237",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 225.0
  },
  {
    "id": "fp_238",
    "name": "Kaleb Johnson",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 240.5
  },
  {
    "id": "fp_239",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 228.0
  },
  {
    "id": "fp_240",
    "name": "Elijah Sarratt",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 228.5
  },
  {
    "id": "fp_241",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 238.3
  },
  {
    "id": "fp_242",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 252.0
  },
  {
    "id": "fp_243",
    "name": "Rashod Bateman",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 239.0
  },
  {
    "id": "fp_244",
    "name": "Najee Harris",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 243.0
  },
  {
    "id": "fp_245",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 242.0
  },
  {
    "id": "fp_246",
    "name": "Tyquan Thornton",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 235.5
  },
  {
    "id": "fp_247",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 243.7
  },
  {
    "id": "fp_248",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 245.3
  },
  {
    "id": "fp_249",
    "name": "Carson Beck",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 238.0
  },
  {
    "id": "fp_250",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 241.5
  },
  {
    "id": "fp_251",
    "name": "Darnell Washington",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 223.0
  },
  {
    "id": "fp_252",
    "name": "Mason Taylor",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 251.0
  },
  {
    "id": "fp_253",
    "name": "Chimere Dike",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 247.7
  },
  {
    "id": "fp_254",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 243.0
  },
  {
    "id": "fp_255",
    "name": "Skyler Bell",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 243.0
  },
  {
    "id": "fp_256",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 245.5
  },
  {
    "id": "fp_257",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 243.5
  },
  {
    "id": "fp_258",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 244.0
  },
  {
    "id": "fp_259",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 245.0
  },
  {
    "id": "fp_260",
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 233.0
  },
  {
    "id": "fp_261",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 283.0
  },
  {
    "id": "fp_262",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 246.5
  },
  {
    "id": "fp_263",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 250.5
  },
  {
    "id": "fp_264",
    "name": "Michael Mayer",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 251.3
  },
  {
    "id": "fp_265",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 281.0
  },
  {
    "id": "fp_266",
    "name": "Andrei Iosivas",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 243.0
  },
  {
    "id": "fp_267",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 261.5
  },
  {
    "id": "fp_268",
    "name": "Zavion Thomas",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 245.0
  },
  {
    "id": "fp_269",
    "name": "Hollywood Brown",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 259.0
  },
  {
    "id": "fp_270",
    "name": "Devin Neal",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 280.0
  },
  {
    "id": "fp_271",
    "name": "Elijah Arroyo",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 258.5
  },
  {
    "id": "fp_272",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 253.5
  },
  {
    "id": "fp_273",
    "name": "Mack Hollins",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 276.0
  },
  {
    "id": "fp_274",
    "name": "Ja'Tavion Sanders",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 252.0
  },
  {
    "id": "fp_275",
    "name": "Eli Raridon",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 253.0
  },
  {
    "id": "fp_276",
    "name": "Eli Heidenreich",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 275.0
  },
  {
    "id": "fp_277",
    "name": "Darius Slayton",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 256.0
  },
  {
    "id": "fp_278",
    "name": "Brenen Thompson",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 260.5
  },
  {
    "id": "fp_279",
    "name": "Elic Ayomanor",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 257.0
  },
  {
    "id": "fp_280",
    "name": "DJ Giddens",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 258.0
  },
  {
    "id": "fp_281",
    "name": "Dawson Knox",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 262.0
  },
  {
    "id": "fp_282",
    "name": "Odell Beckham Jr.",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 267.0
  },
  {
    "id": "fp_283",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 268.0
  },
  {
    "id": "fp_284",
    "name": "J.J. McCarthy",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 270.0
  },
  {
    "id": "fp_285",
    "name": "Kyle Williams",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 272.0
  },
  {
    "id": "fp_286",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 274.0
  },
  {
    "id": "fp_287",
    "name": "Tez Johnson",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 275.0
  },
  {
    "id": "fp_288",
    "name": "Oscar Delp",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 276.0
  },
  {
    "id": "fp_289",
    "name": "Kevin Coleman Jr.",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 277.0
  },
  {
    "id": "fp_290",
    "name": "Savion Williams",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 278.0
  },
  {
    "id": "fp_291",
    "name": "Kalif Raymond",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 280.0
  },
  {
    "id": "fp_292",
    "name": "Jalen Royals",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 282.0
  },
  {
    "id": "fp_293",
    "name": "Cole Kmet",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 284.0
  },
  {
    "id": "fp_294",
    "name": "Xavier Legette",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 285.0
  },
  {
    "id": "fp_295",
    "name": "Treylon Burks",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 287.0
  },
  {
    "id": "fp_296",
    "name": "Devontez Walker",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 288.0
  },
  {
    "id": "fp_297",
    "name": "Erick All Jr.",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 289.0
  },
  {
    "id": "fp_298",
    "name": "Kendrick Bourne",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 290.0
  },
  {
    "id": "fp_299",
    "name": "Justin Joly",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 291.0
  },
  {
    "id": "fp_300",
    "name": "Isaiah Bond",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 292.0
  },
  {
    "id": "fp_301",
    "name": "KaVontae Turpin",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 293.0
  },
  {
    "id": "fp_302",
    "name": "Anthony Richardson Sr.",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 294.0
  },
  {
    "id": "fp_303",
    "name": "Jordan Whittington",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 295.0
  },
  {
    "id": "fp_304",
    "name": "Marvin Mims Jr.",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 297.0
  },
  {
    "id": "fp_305",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 298.0
  },
  {
    "id": "fp_306",
    "name": "Mac Jones",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 299.0
  },
  {
    "id": "fp_307",
    "name": "Cade Klubnik",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 300.0
  },
  {
    "id": "fp_308",
    "name": "Nick Westbrook-Ikhine",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 301.0
  },
  {
    "id": "fp_309",
    "name": "Max Klare",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 302.0
  },
  {
    "id": "fp_310",
    "name": "Tahj Brooks",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 304.0
  },
  {
    "id": "fp_311",
    "name": "Olamide Zaccheaus",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 306.0
  },
  {
    "id": "fp_312",
    "name": "Isaiah Davis",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 307.0
  },
  {
    "id": "fp_313",
    "name": "Joe Flacco",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 308.0
  },
  {
    "id": "fp_314",
    "name": "Deion Burks",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 309.0
  },
  {
    "id": "fp_315",
    "name": "Ashton Dulin",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 310.0
  },
  {
    "id": "fp_316",
    "name": "Jaylin Lane",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 311.0
  },
  {
    "id": "fp_317",
    "name": "DeMario Douglas",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 312.0
  },
  {
    "id": "fp_318",
    "name": "Noah Gray",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 313.0
  },
  {
    "id": "fp_319",
    "name": "Joshua Palmer",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 315.0
  },
  {
    "id": "fp_320",
    "name": "Greg Dortch",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 316.0
  },
  {
    "id": "fp_321",
    "name": "Roman Wilson",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 317.0
  },
  {
    "id": "fp_322",
    "name": "Luke McCaffrey",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 318.0
  },
  {
    "id": "fp_323",
    "name": "Dyami Brown",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 319.0
  },
  {
    "id": "fp_324",
    "name": "Jerome Ford",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 320.0
  },
  {
    "id": "fp_325",
    "name": "CJ Daniels",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 321.0
  },
  {
    "id": "fp_326",
    "name": "Charlie Kolar",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 322.0
  },
  {
    "id": "fp_327",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 323.0
  },
  {
    "id": "fp_328",
    "name": "Tanner Koziol",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 325.0
  },
  {
    "id": "fp_329",
    "name": "Colbie Young",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 326.0
  },
  {
    "id": "fp_330",
    "name": "Dont'e Thornton Jr.",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 327.0
  },
  {
    "id": "fp_331",
    "name": "Nate Boerkircher",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 328.0
  },
  {
    "id": "fp_332",
    "name": "Jahdae Walker",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 329.0
  },
  {
    "id": "fp_333",
    "name": "Brashard Smith",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 330.0
  },
  {
    "id": "fp_334",
    "name": "Jameis Winston",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 331.0
  },
  {
    "id": "fp_335",
    "name": "Phil Mafah",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 333.0
  },
  {
    "id": "fp_336",
    "name": "Jacob Cowing",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 334.0
  },
  {
    "id": "fp_337",
    "name": "Jack Endries",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 336.0
  },
  {
    "id": "fp_338",
    "name": "Elijah Higgins",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 337.0
  },
  {
    "id": "fp_339",
    "name": "Luke Musgrave",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 338.0
  },
  {
    "id": "fp_340",
    "name": "Daniel Bellinger",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 339.0
  },
  {
    "id": "fp_341",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 340.0
  },
  {
    "id": "fp_342",
    "name": "Noah Fant",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 341.0
  },
  {
    "id": "fp_343",
    "name": "Michael Trigg",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 342.0
  },
  {
    "id": "fp_344",
    "name": "Tyler Higbee",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 343.0
  },
  {
    "id": "fp_345",
    "name": "Tommy Tremble",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 344.0
  },
  {
    "id": "fp_346",
    "name": "Ben Sinnott",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 345.0
  },
  {
    "id": "fp_347",
    "name": "Tai Felton",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 346.0
  },
  {
    "id": "fp_348",
    "name": "Jimmy Horn Jr.",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 347.0
  },
  {
    "id": "fp_349",
    "name": "Jam Miller",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 348.0
  },
  {
    "id": "fp_350",
    "name": "Jalen Milroe",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 349.0
  },
  {
    "id": "fp_351",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 350.0
  },
  {
    "id": "fp_352",
    "name": "Marcus Mariota",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 351.0
  },
  {
    "id": "fp_353",
    "name": "Cedric Tillman",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 352.0
  },
  {
    "id": "fp_354",
    "name": "Malik Benson",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 354.0
  },
  {
    "id": "fp_355",
    "name": "CJ Williams",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 355.0
  },
  {
    "id": "fp_356",
    "name": "Robert Henry Jr.",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 356.0
  },
  {
    "id": "fp_357",
    "name": "Taylen Green",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 357.0
  },
  {
    "id": "fp_358",
    "name": "Will Kacmarek",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 358.0
  },
  {
    "id": "fp_359",
    "name": "Josh Cameron",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 359.0
  },
  {
    "id": "fp_360",
    "name": "Calvin Austin III",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 360.0
  },
  {
    "id": "fp_361",
    "name": "Xavier Hutchinson",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 361.0
  },
  {
    "id": "fp_362",
    "name": "John Metchie III",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 362.0
  },
  {
    "id": "fp_363",
    "name": "Trevor Etienne",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 363.0
  },
  {
    "id": "fp_364",
    "name": "J'Mari Taylor",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 364.0
  },
  {
    "id": "fp_365",
    "name": "Gardner Minshew II",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 365.0
  },
  {
    "id": "fp_366",
    "name": "Isaiah Williams",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 366.0
  },
  {
    "id": "fp_367",
    "name": "Van Jefferson",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 367.0
  },
  {
    "id": "fp_368",
    "name": "Sam Roush",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 368.0
  },
  {
    "id": "fp_369",
    "name": "Cade Stover",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 369.0
  },
  {
    "id": "fp_370",
    "name": "Austin Hooper",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 370.0
  },
  {
    "id": "fp_371",
    "name": "JuJu Smith-Schuster",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 371.0
  },
  {
    "id": "fp_372",
    "name": "Mitchell Evans",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 372.0
  },
  {
    "id": "fp_373",
    "name": "John Bates",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 373.0
  },
  {
    "id": "fp_374",
    "name": "Matt Hibner",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 374.0
  },
  {
    "id": "fp_375",
    "name": "Luke Schoonmaker",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 375.0
  },
  {
    "id": "fp_376",
    "name": "Barion Brown",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 376.0
  },
  {
    "id": "fp_377",
    "name": "Will Howard",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 377.0
  },
  {
    "id": "fp_378",
    "name": "Tyrell Shavers",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 378.0
  },
  {
    "id": "fp_379",
    "name": "Brevyn Spann-Ford",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 379.0
  },
  {
    "id": "fp_380",
    "name": "Audric Estime",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 380.0
  },
  {
    "id": "fp_381",
    "name": "Xavier Smith",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 381.0
  },
  {
    "id": "fp_382",
    "name": "Trey Lance",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 382.0
  },
  {
    "id": "fp_383",
    "name": "Tyrod Taylor",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 383.0
  },
  {
    "id": "fp_384",
    "name": "Will Levis",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 384.0
  },
  {
    "id": "fp_385",
    "name": "Tyler Huntley",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 385.0
  },
  {
    "id": "fp_386",
    "name": "Tommy DeVito",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 386.0
  },
  {
    "id": "fp_387",
    "name": "Kyle Allen",
    "position": "QB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 387.0
  },
  {
    "id": "fp_388",
    "name": "Tim Patrick",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 388.0
  },
  {
    "id": "fp_389",
    "name": "Jaydn Ott",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 389.0
  },
  {
    "id": "fp_390",
    "name": "Jarquez Hunter",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 390.0
  },
  {
    "id": "fp_391",
    "name": "Pierre Strong Jr.",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 391.0
  },
  {
    "id": "fp_392",
    "name": "Damien Martinez",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 392.0
  },
  {
    "id": "fp_393",
    "name": "Xavier Weaver",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 393.0
  },
  {
    "id": "fp_394",
    "name": "Reggie Virgil",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 394.0
  },
  {
    "id": "fp_395",
    "name": "Tyler Conklin",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 395.0
  },
  {
    "id": "fp_396",
    "name": "Darren Waller",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 396.0
  },
  {
    "id": "fp_397",
    "name": "Cedrick Wilson Jr.",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 397.0
  },
  {
    "id": "fp_398",
    "name": "Nick Chubb",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 398.0
  },
  {
    "id": "fp_399",
    "name": "Jeff Caldwell",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 399.0
  },
  {
    "id": "fp_400",
    "name": "Mitch Tinsley",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 400.0
  }
];