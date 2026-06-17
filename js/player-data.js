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
    "name": "Brock Bowers",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 17.3
  },
  {
    "id": "fp_16",
    "name": "Omarion Hampton",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
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
    "adp": 22.3
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
    "name": "George Pickens",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 24.3
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
    "adp": 27.3
  },
  {
    "id": "fp_28",
    "name": "Kyren Williams",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 31.3
  },
  {
    "id": "fp_29",
    "name": "DeVonta Smith",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 31.7
  },
  {
    "id": "fp_30",
    "name": "Rashee Rice",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 32.0
  },
  {
    "id": "fp_31",
    "name": "Breece Hall",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
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
    "adp": 34.3
  },
  {
    "id": "fp_34",
    "name": "Travis Etienne Jr.",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 34.7
  },
  {
    "id": "fp_35",
    "name": "Colston Loveland",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 36.0
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
    "name": "Tee Higgins",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 38.7
  },
  {
    "id": "fp_38",
    "name": "Josh Jacobs",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 39.0
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
    "adp": 40.3
  },
  {
    "id": "fp_41",
    "name": "Tetairoa McMillan",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 42.0
  },
  {
    "id": "fp_42",
    "name": "Garrett Wilson",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 42.7
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
    "adp": 44.3
  },
  {
    "id": "fp_45",
    "name": "Luther Burden III",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 46.3
  },
  {
    "id": "fp_46",
    "name": "DJ Moore",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 47.7
  },
  {
    "id": "fp_47",
    "name": "Quinshon Judkins",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 48.0
  },
  {
    "id": "fp_48",
    "name": "Joe Burrow",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 50.0
  },
  {
    "id": "fp_49",
    "name": "Tyler Warren",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 51.7
  },
  {
    "id": "fp_50",
    "name": "David Montgomery",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 51.7
  },
  {
    "id": "fp_51",
    "name": "Mike Evans",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 53.3
  },
  {
    "id": "fp_52",
    "name": "TreVeyon Henderson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 54.0
  },
  {
    "id": "fp_53",
    "name": "Terry McLaurin",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 54.3
  },
  {
    "id": "fp_54",
    "name": "Davante Adams",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 54.3
  },
  {
    "id": "fp_55",
    "name": "Jameson Williams",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 54.7
  },
  {
    "id": "fp_56",
    "name": "Drake Maye",
    "position": "QB",
    "team": "NE",
    "bye_week": "11",
    "adp": 55.0
  },
  {
    "id": "fp_57",
    "name": "Bucky Irving",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 55.0
  },
  {
    "id": "fp_58",
    "name": "D'Andre Swift",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 55.0
  },
  {
    "id": "fp_59",
    "name": "Jaylen Waddle",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 55.7
  },
  {
    "id": "fp_60",
    "name": "Jadarian Price",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 58.0
  },
  {
    "id": "fp_61",
    "name": "Jayden Daniels",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 59.0
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
    "adp": 63.0
  },
  {
    "id": "fp_64",
    "name": "Caleb Williams",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 65.7
  },
  {
    "id": "fp_65",
    "name": "Christian Watson",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 66.7
  },
  {
    "id": "fp_66",
    "name": "Jalen Hurts",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 68.7
  },
  {
    "id": "fp_67",
    "name": "Brian Thomas Jr.",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 69.3
  },
  {
    "id": "fp_68",
    "name": "Dak Prescott",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 71.3
  },
  {
    "id": "fp_69",
    "name": "Carnell Tate",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 71.7
  },
  {
    "id": "fp_70",
    "name": "Harold Fannin Jr.",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 72.7
  },
  {
    "id": "fp_71",
    "name": "Tucker Kraft",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 73.0
  },
  {
    "id": "fp_72",
    "name": "Chuba Hubbard",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 73.3
  },
  {
    "id": "fp_73",
    "name": "Marvin Harrison Jr.",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 74.7
  },
  {
    "id": "fp_74",
    "name": "Rhamondre Stevenson",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 76.3
  },
  {
    "id": "fp_75",
    "name": "Kyle Pitts Sr.",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
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
    "name": "RJ Harvey",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 80.7
  },
  {
    "id": "fp_80",
    "name": "Sam LaPorta",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 81.0
  },
  {
    "id": "fp_81",
    "name": "Trevor Lawrence",
    "position": "QB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 81.3
  },
  {
    "id": "fp_82",
    "name": "Justin Herbert",
    "position": "QB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 81.3
  },
  {
    "id": "fp_83",
    "name": "Alec Pierce",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 81.3
  },
  {
    "id": "fp_84",
    "name": "Tony Pollard",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 81.7
  },
  {
    "id": "fp_85",
    "name": "Courtland Sutton",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 85.0
  },
  {
    "id": "fp_86",
    "name": "Jaxson Dart",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 85.3
  },
  {
    "id": "fp_87",
    "name": "Rico Dowdle",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 86.0
  },
  {
    "id": "fp_88",
    "name": "DK Metcalf",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 86.3
  },
  {
    "id": "fp_89",
    "name": "Matthew Stafford",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 89.7
  },
  {
    "id": "fp_90",
    "name": "Kyle Monangai",
    "position": "RB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 89.7
  },
  {
    "id": "fp_91",
    "name": "Michael Wilson",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 89.7
  },
  {
    "id": "fp_92",
    "name": "Chris Godwin Jr.",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 92.3
  },
  {
    "id": "fp_93",
    "name": "Makai Lemon",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 92.7
  },
  {
    "id": "fp_94",
    "name": "Patrick Mahomes II",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 92.7
  },
  {
    "id": "fp_95",
    "name": "Brock Purdy",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 95.7
  },
  {
    "id": "fp_96",
    "name": "George Kittle",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 96.3
  },
  {
    "id": "fp_97",
    "name": "Blake Corum",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 100.0
  },
  {
    "id": "fp_98",
    "name": "Jayden Reed",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 100.3
  },
  {
    "id": "fp_99",
    "name": "J.K. Dobbins",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 100.3
  },
  {
    "id": "fp_100",
    "name": "Bo Nix",
    "position": "QB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 101.3
  },
  {
    "id": "fp_101",
    "name": "Jared Goff",
    "position": "QB",
    "team": "DET",
    "bye_week": "6",
    "adp": 102.0
  },
  {
    "id": "fp_102",
    "name": "Kenneth Gainwell",
    "position": "RB",
    "team": "TB",
    "bye_week": "10",
    "adp": 103.7
  },
  {
    "id": "fp_103",
    "name": "Travis Kelce",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 104.3
  },
  {
    "id": "fp_104",
    "name": "Jakobi Meyers",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 104.3
  },
  {
    "id": "fp_105",
    "name": "Quentin Johnston",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 105.0
  },
  {
    "id": "fp_106",
    "name": "Jordan Addison",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 105.3
  },
  {
    "id": "fp_107",
    "name": "Michael Pittman Jr.",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 106.7
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
    "name": "Isaiah Likely",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 108.0
  },
  {
    "id": "fp_110",
    "name": "Dalton Kincaid",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 109.3
  },
  {
    "id": "fp_111",
    "name": "Jake Ferguson",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 109.3
  },
  {
    "id": "fp_112",
    "name": "Ricky Pearsall",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 109.3
  },
  {
    "id": "fp_113",
    "name": "Kyler Murray",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 110.0
  },
  {
    "id": "fp_114",
    "name": "Josh Downs",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 110.7
  },
  {
    "id": "fp_115",
    "name": "Jonathon Brooks",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 111.7
  },
  {
    "id": "fp_116",
    "name": "Rachaad White",
    "position": "RB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 112.7
  },
  {
    "id": "fp_117",
    "name": "Xavier Worthy",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 114.3
  },
  {
    "id": "fp_118",
    "name": "Dallas Goedert",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 115.0
  },
  {
    "id": "fp_119",
    "name": "Jordan Love",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 115.7
  },
  {
    "id": "fp_120",
    "name": "Jordan Mason",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 117.0
  },
  {
    "id": "fp_121",
    "name": "Tyler Shough",
    "position": "QB",
    "team": "NO",
    "bye_week": "8",
    "adp": 118.7
  },
  {
    "id": "fp_122",
    "name": "Mark Andrews",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 119.0
  },
  {
    "id": "fp_123",
    "name": "Aaron Jones Sr.",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 119.3
  },
  {
    "id": "fp_124",
    "name": "Baker Mayfield",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 120.0
  },
  {
    "id": "fp_125",
    "name": "Matthew Golden",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 122.7
  },
  {
    "id": "fp_126",
    "name": "Romeo Doubs",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 123.7
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
    "adp": 124.3
  },
  {
    "id": "fp_129",
    "name": "Chris Rodriguez Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 131.0
  },
  {
    "id": "fp_130",
    "name": "Malik Willis",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 131.7
  },
  {
    "id": "fp_131",
    "name": "Tyrone Tracy Jr.",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 132.3
  },
  {
    "id": "fp_132",
    "name": "Khalil Shakir",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 135.0
  },
  {
    "id": "fp_133",
    "name": "Jayden Higgins",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 136.0
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
    "name": "Chig Okonkwo",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 139.0
  },
  {
    "id": "fp_136",
    "name": "Woody Marks",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 139.7
  },
  {
    "id": "fp_137",
    "name": "Kenyon Sadiq",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 139.7
  },
  {
    "id": "fp_138",
    "name": "Oronde Gadsden II",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 141.0
  },
  {
    "id": "fp_139",
    "name": "Juwan Johnson",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 141.7
  },
  {
    "id": "fp_140",
    "name": "Jalen Coker",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 141.7
  },
  {
    "id": "fp_141",
    "name": "C.J. Stroud",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 142.3
  },
  {
    "id": "fp_142",
    "name": "T.J. Hockenson",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 143.7
  },
  {
    "id": "fp_143",
    "name": "Cam Ward",
    "position": "QB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 143.7
  },
  {
    "id": "fp_144",
    "name": "Stefon Diggs",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 144.0
  },
  {
    "id": "fp_145",
    "name": "Rashid Shaheed",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 144.0
  },
  {
    "id": "fp_146",
    "name": "Isiah Pacheco",
    "position": "RB",
    "team": "DET",
    "bye_week": "6",
    "adp": 144.3
  },
  {
    "id": "fp_147",
    "name": "Hunter Henry",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 144.7
  },
  {
    "id": "fp_148",
    "name": "Brenton Strange",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 147.0
  },
  {
    "id": "fp_149",
    "name": "Keaton Mitchell",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 148.7
  },
  {
    "id": "fp_150",
    "name": "Daniel Jones",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 150.0
  },
  {
    "id": "fp_151",
    "name": "Zach Charbonnet",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 150.7
  },
  {
    "id": "fp_152",
    "name": "Tyler Allgeier",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 151.7
  },
  {
    "id": "fp_153",
    "name": "Jonah Coleman",
    "position": "RB",
    "team": "DEN",
    "bye_week": "10",
    "adp": 152.0
  },
  {
    "id": "fp_154",
    "name": "Jauan Jennings",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 154.0
  },
  {
    "id": "fp_155",
    "name": "Jalen McMillan",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 154.7
  },
  {
    "id": "fp_156",
    "name": "Bryce Young",
    "position": "QB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 154.7
  },
  {
    "id": "fp_157",
    "name": "Omar Cooper Jr.",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 155.3
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
    "adp": 157.7
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
    "name": "Brian Robinson Jr.",
    "position": "RB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 166.0
  },
  {
    "id": "fp_162",
    "name": "Dylan Sampson",
    "position": "RB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 166.7
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
    "name": "Denzel Boston",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 168.3
  },
  {
    "id": "fp_165",
    "name": "Aaron Rodgers",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 169.3
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
    "name": "Tre Tucker",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.0
  },
  {
    "id": "fp_168",
    "name": "Fernando Mendoza",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 172.0
  },
  {
    "id": "fp_169",
    "name": "Nicholas Singleton",
    "position": "RB",
    "team": "TEN",
    "bye_week": "9",
    "adp": 172.7
  },
  {
    "id": "fp_170",
    "name": "Jacoby Brissett",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 173.3
  },
  {
    "id": "fp_171",
    "name": "Deebo Samuel Sr.",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 177.0
  },
  {
    "id": "fp_172",
    "name": "Geno Smith",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 177.0
  },
  {
    "id": "fp_173",
    "name": "Tank Bigsby",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 177.0
  },
  {
    "id": "fp_174",
    "name": "Jerry Jeudy",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 178.0
  },
  {
    "id": "fp_175",
    "name": "Gunnar Helm",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 178.3
  },
  {
    "id": "fp_176",
    "name": "Tyreek Hill",
    "position": "WR",
    "team": "FA",
    "bye_week": "-",
    "adp": 178.7
  },
  {
    "id": "fp_177",
    "name": "David Njoku",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 179.7
  },
  {
    "id": "fp_178",
    "name": "Emmett Johnson",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 180.7
  },
  {
    "id": "fp_179",
    "name": "AJ Barner",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 181.0
  },
  {
    "id": "fp_180",
    "name": "Calvin Ridley",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 182.3
  },
  {
    "id": "fp_181",
    "name": "Mike Washington Jr.",
    "position": "RB",
    "team": "LV",
    "bye_week": "13",
    "adp": 183.3
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
    "name": "Brandon Aiyuk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 184.0
  },
  {
    "id": "fp_184",
    "name": "Isaac TeSlaa",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 184.0
  },
  {
    "id": "fp_185",
    "name": "Cade Otton",
    "position": "TE",
    "team": "TB",
    "bye_week": "10",
    "adp": 187.3
  },
  {
    "id": "fp_186",
    "name": "Malik Washington",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 189.0
  },
  {
    "id": "fp_187",
    "name": "Eli Stowers",
    "position": "TE",
    "team": "PHI",
    "bye_week": "10",
    "adp": 190.3
  },
  {
    "id": "fp_188",
    "name": "Greg Dulcich",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 190.3
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
    "name": "Emanuel Wilson",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 192.0
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
    "name": "Pat Freiermuth",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 192.7
  },
  {
    "id": "fp_193",
    "name": "De'Zhaun Stribling",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 195.7
  },
  {
    "id": "fp_194",
    "name": "Braelon Allen",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 196.0
  },
  {
    "id": "fp_195",
    "name": "Ryan Flournoy",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 196.3
  },
  {
    "id": "fp_196",
    "name": "Tua Tagovailoa",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 196.7
  },
  {
    "id": "fp_197",
    "name": "Kayshon Boutte",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 200.0
  },
  {
    "id": "fp_198",
    "name": "Tre' Harris",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 200.3
  },
  {
    "id": "fp_199",
    "name": "Germie Bernard",
    "position": "WR",
    "team": "PIT",
    "bye_week": "9",
    "adp": 201.0
  },
  {
    "id": "fp_200",
    "name": "Tank Dell",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 202.3
  },
  {
    "id": "fp_201",
    "name": "Adonai Mitchell",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 202.7
  },
  {
    "id": "fp_202",
    "name": "Travis Hunter",
    "position": "WR",
    "team": "JAC",
    "bye_week": "7",
    "adp": 177.5
  },
  {
    "id": "fp_203",
    "name": "Chris Bell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 206.3
  },
  {
    "id": "fp_204",
    "name": "Darnell Mooney",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 207.3
  },
  {
    "id": "fp_205",
    "name": "Terrance Ferguson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 208.7
  },
  {
    "id": "fp_206",
    "name": "Jordan James",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 209.0
  },
  {
    "id": "fp_207",
    "name": "Cooper Kupp",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 209.7
  },
  {
    "id": "fp_208",
    "name": "MarShawn Lloyd",
    "position": "RB",
    "team": "GB",
    "bye_week": "11",
    "adp": 210.3
  },
  {
    "id": "fp_209",
    "name": "Malachi Fields",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 212.0
  },
  {
    "id": "fp_210",
    "name": "Deshaun Watson",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 212.3
  },
  {
    "id": "fp_211",
    "name": "Ray Davis",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 213.3
  },
  {
    "id": "fp_212",
    "name": "Kimani Vidal",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 213.7
  },
  {
    "id": "fp_213",
    "name": "James Conner",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 216.3
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
    "name": "Dontayvion Wicks",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 217.3
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
    "name": "Justice Hill",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 221.0
  },
  {
    "id": "fp_218",
    "name": "Colby Parkinson",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 222.0
  },
  {
    "id": "fp_219",
    "name": "Ted Hurst III",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 222.3
  },
  {
    "id": "fp_220",
    "name": "Christian Kirk",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 223.7
  },
  {
    "id": "fp_221",
    "name": "Chris Brazzell II",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 224.0
  },
  {
    "id": "fp_222",
    "name": "Kaelon Black",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 224.0
  },
  {
    "id": "fp_223",
    "name": "Michael Penix Jr.",
    "position": "QB",
    "team": "ATL",
    "bye_week": "11",
    "adp": 225.0
  },
  {
    "id": "fp_224",
    "name": "Justin Fields",
    "position": "QB",
    "team": "KC",
    "bye_week": "5",
    "adp": 231.7
  },
  {
    "id": "fp_225",
    "name": "Jake Tonges",
    "position": "TE",
    "team": "SF",
    "bye_week": "8",
    "adp": 225.3
  },
  {
    "id": "fp_226",
    "name": "Shedeur Sanders",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 225.7
  },
  {
    "id": "fp_227",
    "name": "Mike Gesicki",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 226.0
  },
  {
    "id": "fp_228",
    "name": "Jaydon Blue",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 228.7
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
    "name": "Jaylin Noel",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 230.3
  },
  {
    "id": "fp_231",
    "name": "Evan Engram",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 230.3
  },
  {
    "id": "fp_232",
    "name": "Troy Franklin",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 216.5
  },
  {
    "id": "fp_233",
    "name": "Jaylen Wright",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 231.3
  },
  {
    "id": "fp_234",
    "name": "George Holani",
    "position": "RB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 219.0
  },
  {
    "id": "fp_235",
    "name": "Pat Bryant",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 221.5
  },
  {
    "id": "fp_236",
    "name": "Austin Ekeler",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 292.0
  },
  {
    "id": "fp_237",
    "name": "Joe Mixon",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 261.5
  },
  {
    "id": "fp_238",
    "name": "Kirk Cousins",
    "position": "QB",
    "team": "LV",
    "bye_week": "13",
    "adp": 238.3
  },
  {
    "id": "fp_239",
    "name": "Kaleb Johnson",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 250.0
  },
  {
    "id": "fp_240",
    "name": "Tory Horton",
    "position": "WR",
    "team": "SEA",
    "bye_week": "11",
    "adp": 230.5
  },
  {
    "id": "fp_241",
    "name": "Elijah Sarratt",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 205.0
  },
  {
    "id": "fp_242",
    "name": "Rashod Bateman",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 241.7
  },
  {
    "id": "fp_243",
    "name": "Jack Bech",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 241.7
  },
  {
    "id": "fp_244",
    "name": "Najee Harris",
    "position": "RB",
    "team": "LAC",
    "bye_week": "7",
    "adp": 242.5
  },
  {
    "id": "fp_245",
    "name": "Ja'Kobi Lane",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 234.0
  },
  {
    "id": "fp_246",
    "name": "Samaje Perine",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 243.0
  },
  {
    "id": "fp_247",
    "name": "Mason Taylor",
    "position": "TE",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 246.0
  },
  {
    "id": "fp_248",
    "name": "Kareem Hunt",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 290.0
  },
  {
    "id": "fp_249",
    "name": "Darnell Washington",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 239.0
  },
  {
    "id": "fp_250",
    "name": "Chimere Dike",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 240.0
  },
  {
    "id": "fp_251",
    "name": "Michael Mayer",
    "position": "TE",
    "team": "LV",
    "bye_week": "13",
    "adp": 246.3
  },
  {
    "id": "fp_252",
    "name": "Adam Randall",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 241.0
  },
  {
    "id": "fp_253",
    "name": "Tyquan Thornton",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 241.0
  },
  {
    "id": "fp_254",
    "name": "Devaughn Vele",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 242.0
  },
  {
    "id": "fp_255",
    "name": "Keenan Allen",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 245.5
  },
  {
    "id": "fp_256",
    "name": "Devin Singletary",
    "position": "RB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 266.5
  },
  {
    "id": "fp_257",
    "name": "Malik Davis",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 244.5
  },
  {
    "id": "fp_258",
    "name": "Caleb Douglas",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 245.5
  },
  {
    "id": "fp_259",
    "name": "Carson Beck",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 245.5
  },
  {
    "id": "fp_260",
    "name": "Jalen Tolbert",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 251.0
  },
  {
    "id": "fp_261",
    "name": "Theo Johnson",
    "position": "TE",
    "team": "NYG",
    "bye_week": "8",
    "adp": 246.5
  },
  {
    "id": "fp_262",
    "name": "Ty Johnson",
    "position": "RB",
    "team": "BUF",
    "bye_week": "7",
    "adp": 251.0
  },
  {
    "id": "fp_263",
    "name": "Skyler Bell",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 240.0
  },
  {
    "id": "fp_264",
    "name": "Jahan Dotson",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 267.0
  },
  {
    "id": "fp_265",
    "name": "Zavion Thomas",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 244.0
  },
  {
    "id": "fp_266",
    "name": "Ollie Gordon II",
    "position": "RB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 260.0
  },
  {
    "id": "fp_267",
    "name": "Andrei Iosivas",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 245.0
  },
  {
    "id": "fp_268",
    "name": "Hollywood Brown",
    "position": "WR",
    "team": "PHI",
    "bye_week": "10",
    "adp": 260.5
  },
  {
    "id": "fp_269",
    "name": "Eli Heidenreich",
    "position": "RB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 272.5
  },
  {
    "id": "fp_270",
    "name": "Darius Slayton",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 249.0
  },
  {
    "id": "fp_271",
    "name": "LeQuint Allen Jr.",
    "position": "RB",
    "team": "JAC",
    "bye_week": "7",
    "adp": 254.5
  },
  {
    "id": "fp_272",
    "name": "Devin Neal",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 286.0
  },
  {
    "id": "fp_273",
    "name": "Ja'Tavion Sanders",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 251.0
  },
  {
    "id": "fp_274",
    "name": "Elijah Arroyo",
    "position": "TE",
    "team": "SEA",
    "bye_week": "11",
    "adp": 261.5
  },
  {
    "id": "fp_275",
    "name": "Dawson Knox",
    "position": "TE",
    "team": "BUF",
    "bye_week": "7",
    "adp": 256.0
  },
  {
    "id": "fp_276",
    "name": "Brenen Thompson",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 259.5
  },
  {
    "id": "fp_277",
    "name": "Eli Raridon",
    "position": "TE",
    "team": "NE",
    "bye_week": "11",
    "adp": 258.0
  },
  {
    "id": "fp_278",
    "name": "DJ Giddens",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 259.0
  },
  {
    "id": "fp_279",
    "name": "Elic Ayomanor",
    "position": "WR",
    "team": "TEN",
    "bye_week": "9",
    "adp": 261.0
  },
  {
    "id": "fp_280",
    "name": "Charlie Kolar",
    "position": "TE",
    "team": "LAC",
    "bye_week": "7",
    "adp": 263.0
  },
  {
    "id": "fp_281",
    "name": "Emari Demercado",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 267.0
  },
  {
    "id": "fp_282",
    "name": "Odell Beckham Jr.",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 268.0
  },
  {
    "id": "fp_283",
    "name": "Isaiah Bond",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 270.0
  },
  {
    "id": "fp_284",
    "name": "J.J. McCarthy",
    "position": "QB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 271.0
  },
  {
    "id": "fp_285",
    "name": "Savion Williams",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 274.0
  },
  {
    "id": "fp_286",
    "name": "Xavier Legette",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 275.0
  },
  {
    "id": "fp_287",
    "name": "Cole Kmet",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 278.0
  },
  {
    "id": "fp_288",
    "name": "Anthony Richardson Sr.",
    "position": "QB",
    "team": "IND",
    "bye_week": "13",
    "adp": 280.0
  },
  {
    "id": "fp_289",
    "name": "Nick Westbrook-Ikhine",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 281.0
  },
  {
    "id": "fp_290",
    "name": "Max Klare",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 282.0
  },
  {
    "id": "fp_291",
    "name": "Kendrick Bourne",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 283.0
  },
  {
    "id": "fp_292",
    "name": "KaVontae Turpin",
    "position": "WR",
    "team": "DAL",
    "bye_week": "14",
    "adp": 284.0
  },
  {
    "id": "fp_293",
    "name": "Tez Johnson",
    "position": "WR",
    "team": "TB",
    "bye_week": "10",
    "adp": 285.0
  },
  {
    "id": "fp_294",
    "name": "Oscar Delp",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 286.0
  },
  {
    "id": "fp_295",
    "name": "Kevin Coleman Jr.",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 287.0
  },
  {
    "id": "fp_296",
    "name": "Kyle Williams",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 288.0
  },
  {
    "id": "fp_297",
    "name": "Justin Joly",
    "position": "TE",
    "team": "DEN",
    "bye_week": "10",
    "adp": 289.0
  },
  {
    "id": "fp_298",
    "name": "Treylon Burks",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 290.0
  },
  {
    "id": "fp_299",
    "name": "Jalen Royals",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 292.0
  },
  {
    "id": "fp_300",
    "name": "Kalif Raymond",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 293.0
  },
  {
    "id": "fp_301",
    "name": "Devontez Walker",
    "position": "WR",
    "team": "BAL",
    "bye_week": "13",
    "adp": 294.0
  },
  {
    "id": "fp_302",
    "name": "Cyrus Allen",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 295.0
  },
  {
    "id": "fp_303",
    "name": "Erick All Jr.",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 296.0
  },
  {
    "id": "fp_304",
    "name": "Isaiah Davis",
    "position": "RB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 298.0
  },
  {
    "id": "fp_305",
    "name": "Bryce Lance",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 299.0
  },
  {
    "id": "fp_306",
    "name": "Joe Flacco",
    "position": "QB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 300.0
  },
  {
    "id": "fp_307",
    "name": "Olamide Zaccheaus",
    "position": "WR",
    "team": "ATL",
    "bye_week": "11",
    "adp": 301.0
  },
  {
    "id": "fp_308",
    "name": "Tahj Brooks",
    "position": "RB",
    "team": "CIN",
    "bye_week": "6",
    "adp": 303.0
  },
  {
    "id": "fp_309",
    "name": "Taylen Green",
    "position": "QB",
    "team": "CLE",
    "bye_week": "11",
    "adp": 305.0
  },
  {
    "id": "fp_310",
    "name": "Marvin Mims Jr.",
    "position": "WR",
    "team": "DEN",
    "bye_week": "10",
    "adp": 306.0
  },
  {
    "id": "fp_311",
    "name": "Mac Jones",
    "position": "QB",
    "team": "SF",
    "bye_week": "8",
    "adp": 307.0
  },
  {
    "id": "fp_312",
    "name": "Jordan Whittington",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 308.0
  },
  {
    "id": "fp_313",
    "name": "Phil Mafah",
    "position": "RB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 309.0
  },
  {
    "id": "fp_314",
    "name": "James Mitchell",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 310.0
  },
  {
    "id": "fp_315",
    "name": "Noah Gray",
    "position": "TE",
    "team": "KC",
    "bye_week": "5",
    "adp": 311.0
  },
  {
    "id": "fp_316",
    "name": "Seth McGowan",
    "position": "RB",
    "team": "IND",
    "bye_week": "13",
    "adp": 312.0
  },
  {
    "id": "fp_317",
    "name": "Tutu Atwell",
    "position": "WR",
    "team": "MIA",
    "bye_week": "6",
    "adp": 313.0
  },
  {
    "id": "fp_318",
    "name": "Trey Benson",
    "position": "RB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 314.0
  },
  {
    "id": "fp_319",
    "name": "Michael Trigg",
    "position": "TE",
    "team": "DAL",
    "bye_week": "14",
    "adp": 315.0
  },
  {
    "id": "fp_320",
    "name": "Dont'e Thornton Jr.",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
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
    "name": "Jaylin Lane",
    "position": "WR",
    "team": "WAS",
    "bye_week": "7",
    "adp": 320.0
  },
  {
    "id": "fp_325",
    "name": "DeMario Douglas",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 321.0
  },
  {
    "id": "fp_326",
    "name": "KeAndre Lambert-Smith",
    "position": "WR",
    "team": "LAC",
    "bye_week": "7",
    "adp": 323.0
  },
  {
    "id": "fp_327",
    "name": "Tanner Koziol",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 324.0
  },
  {
    "id": "fp_328",
    "name": "Colbie Young",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 325.0
  },
  {
    "id": "fp_329",
    "name": "Cade Klubnik",
    "position": "QB",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 326.0
  },
  {
    "id": "fp_330",
    "name": "Deion Burks",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 327.0
  },
  {
    "id": "fp_331",
    "name": "Jahdae Walker",
    "position": "WR",
    "team": "CHI",
    "bye_week": "10",
    "adp": 328.0
  },
  {
    "id": "fp_332",
    "name": "Brashard Smith",
    "position": "RB",
    "team": "KC",
    "bye_week": "5",
    "adp": 329.0
  },
  {
    "id": "fp_333",
    "name": "Jameis Winston",
    "position": "QB",
    "team": "NYG",
    "bye_week": "8",
    "adp": 330.0
  },
  {
    "id": "fp_334",
    "name": "Ashton Dulin",
    "position": "WR",
    "team": "IND",
    "bye_week": "13",
    "adp": 331.0
  },
  {
    "id": "fp_335",
    "name": "Malik Benson",
    "position": "WR",
    "team": "LV",
    "bye_week": "13",
    "adp": 333.0
  },
  {
    "id": "fp_336",
    "name": "Mack Hollins",
    "position": "WR",
    "team": "NE",
    "bye_week": "11",
    "adp": 334.0
  },
  {
    "id": "fp_337",
    "name": "Calvin Austin III",
    "position": "WR",
    "team": "NYG",
    "bye_week": "8",
    "adp": 335.0
  },
  {
    "id": "fp_338",
    "name": "Konata Mumpfield",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 336.0
  },
  {
    "id": "fp_339",
    "name": "Elijah Higgins",
    "position": "TE",
    "team": "ARI",
    "bye_week": "14",
    "adp": 337.0
  },
  {
    "id": "fp_340",
    "name": "Rasheen Ali",
    "position": "RB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 338.0
  },
  {
    "id": "fp_341",
    "name": "CJ Daniels",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 339.0
  },
  {
    "id": "fp_342",
    "name": "Xavier Hutchinson",
    "position": "WR",
    "team": "HOU",
    "bye_week": "8",
    "adp": 340.0
  },
  {
    "id": "fp_343",
    "name": "Trevor Etienne",
    "position": "RB",
    "team": "CAR",
    "bye_week": "5",
    "adp": 341.0
  },
  {
    "id": "fp_344",
    "name": "Gardner Minshew II",
    "position": "QB",
    "team": "ARI",
    "bye_week": "14",
    "adp": 342.0
  },
  {
    "id": "fp_345",
    "name": "Joshua Palmer",
    "position": "WR",
    "team": "BUF",
    "bye_week": "7",
    "adp": 343.0
  },
  {
    "id": "fp_346",
    "name": "Sam Roush",
    "position": "TE",
    "team": "CHI",
    "bye_week": "10",
    "adp": 344.0
  },
  {
    "id": "fp_347",
    "name": "Austin Hooper",
    "position": "TE",
    "team": "ATL",
    "bye_week": "11",
    "adp": 345.0
  },
  {
    "id": "fp_348",
    "name": "Tyler Higbee",
    "position": "TE",
    "team": "LAR",
    "bye_week": "11",
    "adp": 346.0
  },
  {
    "id": "fp_349",
    "name": "Mitchell Evans",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 347.0
  },
  {
    "id": "fp_350",
    "name": "Tommy Tremble",
    "position": "TE",
    "team": "CAR",
    "bye_week": "5",
    "adp": 348.0
  },
  {
    "id": "fp_351",
    "name": "Marlin Klein",
    "position": "TE",
    "team": "HOU",
    "bye_week": "8",
    "adp": 349.0
  },
  {
    "id": "fp_352",
    "name": "Greg Dortch",
    "position": "WR",
    "team": "DET",
    "bye_week": "6",
    "adp": 350.0
  },
  {
    "id": "fp_353",
    "name": "Xavier Smith",
    "position": "WR",
    "team": "LAR",
    "bye_week": "11",
    "adp": 351.0
  },
  {
    "id": "fp_354",
    "name": "Jalen Milroe",
    "position": "QB",
    "team": "SEA",
    "bye_week": "11",
    "adp": 352.0
  },
  {
    "id": "fp_355",
    "name": "Ty Simpson",
    "position": "QB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 353.0
  },
  {
    "id": "fp_356",
    "name": "Tyrod Taylor",
    "position": "QB",
    "team": "GB",
    "bye_week": "11",
    "adp": 354.0
  },
  {
    "id": "fp_357",
    "name": "Tyler Huntley",
    "position": "QB",
    "team": "BAL",
    "bye_week": "13",
    "adp": 355.0
  },
  {
    "id": "fp_358",
    "name": "Davis Mills",
    "position": "QB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 356.0
  },
  {
    "id": "fp_359",
    "name": "Jarquez Hunter",
    "position": "RB",
    "team": "LAR",
    "bye_week": "11",
    "adp": 357.0
  },
  {
    "id": "fp_360",
    "name": "Cedric Tillman",
    "position": "WR",
    "team": "CLE",
    "bye_week": "11",
    "adp": 358.0
  },
  {
    "id": "fp_361",
    "name": "Nick Chubb",
    "position": "RB",
    "team": "FA",
    "bye_week": "-",
    "adp": 359.0
  },
  {
    "id": "fp_362",
    "name": "Mitch Tinsley",
    "position": "WR",
    "team": "CIN",
    "bye_week": "6",
    "adp": 360.0
  },
  {
    "id": "fp_363",
    "name": "Jeff Caldwell",
    "position": "WR",
    "team": "KC",
    "bye_week": "5",
    "adp": 361.0
  },
  {
    "id": "fp_364",
    "name": "Will Kacmarek",
    "position": "TE",
    "team": "MIA",
    "bye_week": "6",
    "adp": 363.0
  },
  {
    "id": "fp_365",
    "name": "Joe Royer",
    "position": "TE",
    "team": "CLE",
    "bye_week": "11",
    "adp": 364.0
  },
  {
    "id": "fp_366",
    "name": "Jack Endries",
    "position": "TE",
    "team": "CIN",
    "bye_week": "6",
    "adp": 365.0
  },
  {
    "id": "fp_367",
    "name": "Luke Musgrave",
    "position": "TE",
    "team": "GB",
    "bye_week": "11",
    "adp": 366.0
  },
  {
    "id": "fp_368",
    "name": "Daniel Bellinger",
    "position": "TE",
    "team": "TEN",
    "bye_week": "9",
    "adp": 367.0
  },
  {
    "id": "fp_369",
    "name": "John Metchie III",
    "position": "WR",
    "team": "CAR",
    "bye_week": "5",
    "adp": 368.0
  },
  {
    "id": "fp_370",
    "name": "Noah Fant",
    "position": "TE",
    "team": "NO",
    "bye_week": "8",
    "adp": 369.0
  },
  {
    "id": "fp_371",
    "name": "Will Shipley",
    "position": "RB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 370.0
  },
  {
    "id": "fp_372",
    "name": "Isaiah Williams",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 371.0
  },
  {
    "id": "fp_373",
    "name": "Demarcus Robinson",
    "position": "WR",
    "team": "SF",
    "bye_week": "8",
    "adp": 372.0
  },
  {
    "id": "fp_374",
    "name": "Matt Hibner",
    "position": "TE",
    "team": "BAL",
    "bye_week": "13",
    "adp": 373.0
  },
  {
    "id": "fp_375",
    "name": "Ben Sinnott",
    "position": "TE",
    "team": "WAS",
    "bye_week": "7",
    "adp": 374.0
  },
  {
    "id": "fp_376",
    "name": "Josh Oliver",
    "position": "TE",
    "team": "MIN",
    "bye_week": "6",
    "adp": 375.0
  },
  {
    "id": "fp_377",
    "name": "Will Howard",
    "position": "QB",
    "team": "PIT",
    "bye_week": "9",
    "adp": 376.0
  },
  {
    "id": "fp_378",
    "name": "Jawhar Jordan",
    "position": "RB",
    "team": "HOU",
    "bye_week": "8",
    "adp": 377.0
  },
  {
    "id": "fp_379",
    "name": "Tai Felton",
    "position": "WR",
    "team": "MIN",
    "bye_week": "6",
    "adp": 378.0
  },
  {
    "id": "fp_380",
    "name": "Nate Boerkircher",
    "position": "TE",
    "team": "JAC",
    "bye_week": "7",
    "adp": 379.0
  },
  {
    "id": "fp_381",
    "name": "Audric Estime",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 380.0
  },
  {
    "id": "fp_382",
    "name": "Isaac Guerendo",
    "position": "RB",
    "team": "SF",
    "bye_week": "8",
    "adp": 381.0
  },
  {
    "id": "fp_383",
    "name": "Jam Miller",
    "position": "RB",
    "team": "NE",
    "bye_week": "11",
    "adp": 382.0
  },
  {
    "id": "fp_384",
    "name": "Marcus Mariota",
    "position": "QB",
    "team": "WAS",
    "bye_week": "7",
    "adp": 383.0
  },
  {
    "id": "fp_385",
    "name": "Tyson Bagent",
    "position": "QB",
    "team": "CHI",
    "bye_week": "10",
    "adp": 384.0
  },
  {
    "id": "fp_386",
    "name": "Tanner McKee",
    "position": "QB",
    "team": "PHI",
    "bye_week": "10",
    "adp": 385.0
  },
  {
    "id": "fp_387",
    "name": "Joe Milton III",
    "position": "QB",
    "team": "DAL",
    "bye_week": "14",
    "adp": 386.0
  },
  {
    "id": "fp_388",
    "name": "Quinn Ewers",
    "position": "QB",
    "team": "MIA",
    "bye_week": "6",
    "adp": 387.0
  },
  {
    "id": "fp_389",
    "name": "Tim Patrick",
    "position": "WR",
    "team": "NYJ",
    "bye_week": "13",
    "adp": 388.0
  },
  {
    "id": "fp_390",
    "name": "Zavier Scott",
    "position": "RB",
    "team": "MIN",
    "bye_week": "6",
    "adp": 389.0
  },
  {
    "id": "fp_391",
    "name": "Riley Nowakowski",
    "position": "TE",
    "team": "PIT",
    "bye_week": "9",
    "adp": 390.0
  },
  {
    "id": "fp_392",
    "name": "Reggie Virgil",
    "position": "WR",
    "team": "ARI",
    "bye_week": "14",
    "adp": 391.0
  },
  {
    "id": "fp_393",
    "name": "Kendre Miller",
    "position": "RB",
    "team": "NO",
    "bye_week": "8",
    "adp": 392.0
  },
  {
    "id": "fp_394",
    "name": "Drew Ogletree",
    "position": "TE",
    "team": "IND",
    "bye_week": "13",
    "adp": 393.0
  },
  {
    "id": "fp_395",
    "name": "Tyler Conklin",
    "position": "TE",
    "team": "DET",
    "bye_week": "6",
    "adp": 394.0
  },
  {
    "id": "fp_396",
    "name": "Isaiah Neyor",
    "position": "WR",
    "team": "GB",
    "bye_week": "11",
    "adp": 395.0
  },
  {
    "id": "fp_397",
    "name": "Zach Ertz",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 396.0
  },
  {
    "id": "fp_398",
    "name": "Jake Browning",
    "position": "QB",
    "team": "TB",
    "bye_week": "10",
    "adp": 398.0
  },
  {
    "id": "fp_399",
    "name": "Ja'Lynn Polk",
    "position": "WR",
    "team": "NO",
    "bye_week": "8",
    "adp": 399.0
  },
  {
    "id": "fp_400",
    "name": "Darren Waller",
    "position": "TE",
    "team": "FA",
    "bye_week": "-",
    "adp": 400.0
  }
];