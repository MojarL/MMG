/*let bands = [
    {
        "id": 0,
        "nombre": "Ratones paranoicos"
    },
    {
        "id": 1,
        "nombre": "Saratoga"
    },
    {
        "id": 2,
        "nombre": "Saúl Hernández"
    },
    {
        "id": 3,
        "nombre": "Scott Stapp"
    },
    {
        "id": 4,
        "nombre": "Sepultura"
    },
    {
        "id": 5,
        "nombre": "Skillet"
    },
    {
        "id": 6,
        "nombre": "Stravaganzza"
    },
    {
        "id": 7,
        "nombre": "The Academy Is"
    },
    {
        "id": 8,
        "nombre": "The Fall"
    },
    {
        "id": 9,
        "nombre": "The Sisters of Mercy"
    },
    {
        "id": 10,
        "nombre": "Turf"
    },
    {
        "id": 11,
        "nombre": "Ulcerate"
    },
    {
        "id": 12,
        "nombre": "Vilma Palma e Vampiros"
    },
    {
        "id": 13,
        "nombre": "Korkiplaani"
    },
    {
        "id": 14,
        "nombre": "La 5ta estación"
    },
    {
        "id": 15,
        "nombre": "Los Caligaris"
    },
    {
        "id": 16,
        "nombre": "Mayhem"
    },
    {
        "id": 17,
        "nombre": "Napalm Death"
    },
    {
        "id": 18,
        "nombre": "NTVG (No Te Va Gustar)"
    },
    {
        "id": 19,
        "nombre": "Overkill"
    },
    {
        "id": 20,
        "nombre": "Paulina Rubio"
    },
    {
        "id": 21,
        "nombre": "Pibes Chorros"
    },
    {
        "id": 22,
        "nombre": "Emigrate"
    },
    {
        "id": 23,
        "nombre": "Estados alterados"
    },
    {
        "id": 24,
        "nombre": "Exodus"
    },
    {
        "id": 25,
        "nombre": "Fabiana Cantilo"
    },
    {
        "id": 26,
        "nombre": "Fear Factory"
    },
    {
        "id": 27,
        "nombre": "Gegga"
    },
    {
        "id": 28,
        "nombre": "Gloria Trevi"
    },
    {
        "id": 29,
        "nombre": "Gothminister"
    },
    {
        "id": 30,
        "nombre": "In Flames"
    },
    {
        "id": 31,
        "nombre": "Inmolation"
    },
    {
        "id": 32,
        "nombre": "Jaguares"
    },
    {
        "id": 33,
        "nombre": "Jovenes pordioseros"
    },
    {
        "id": 34,
        "nombre": "Joy Division"
    },
    {
        "id": 35,
        "nombre": "Kings Of Leon"
    },
    {
        "id": 36,
        "nombre": "Bersuit Vergarabat"
    },
    {
        "id": 37,
        "nombre": "Blake"
    },
    {
        "id": 38,
        "nombre": "Calle 13"
    },
    {
        "id": 39,
        "nombre": "Callejeros"
    },
    {
        "id": 40,
        "nombre": "La 25"
    },
    {
        "id": 41,
        "nombre": "La beriso"
    },
    {
        "id": 42,
        "nombre": "La Vela Puerca"
    },
    {
        "id": 43,
        "nombre": "Las Pelotas"
    },
    {
        "id": 44,
        "nombre": "Los Gardelitos"
    },
    {
        "id": 45,
        "nombre": "Salta La Banca"
    },
    {
        "id": 46,
        "nombre": "Sui Generis"
    },
    {
        "id": 47,
        "nombre": "Coal Chamber"
    },
    {
        "id": 48,
        "nombre": "Crazytown"
    },
    {
        "id": 49,
        "nombre": "Cypress Hill"
    },
    {
        "id": 50,
        "nombre": "Damas Gratis"
    },
    {
        "id": 51,
        "nombre": "Dark funeral"
    },
    {
        "id": 52,
        "nombre": "DarkThrone"
    },
    {
        "id": 53,
        "nombre": "Dead by april"
    },
    {
        "id": 54,
        "nombre": "Dokken"
    },
    {
        "id": 55,
        "nombre": "Echo & the bunnymen"
    },
    {
        "id": 56,
        "nombre": "2 Minutos"
    },
    {
        "id": 57,
        "nombre": "Accept"
    },
    {
        "id": 58,
        "nombre": "Alejandra Guzmán"
    },
    {
        "id": 59,
        "nombre": "Attila"
    },
    {
        "id": 60,
        "nombre": "Audio Adrenaline"
    },
    {
        "id": 61,
        "nombre": "Beret"
    },
    {
        "id": 62,
        "nombre": "David Bowie"
    },
    {
        "id": 63,
        "nombre": "Burzum"
    },
    {
        "id": 64,
        "nombre": "Cannibal Corpse"
    },
    {
        "id": 65,
        "nombre": "Carcass"
    },
    {
        "id": 66,
        "nombre": "Ski Mask the Slump God"
    },
    {
        "id": 67,
        "nombre": "Kim Jong-hyun (Jonghyun) "
    },
    {
        "id": 68,
        "nombre": "KEY"
    },
    {
        "id": 69,
        "nombre": "Lay (Zhang Yixing)"
    },
    {
        "id": 70,
        "nombre": "Minho (Choi Min-ho)"
    },
    {
        "id": 71,
        "nombre": "Onew (Lee Jin-ki)"
    },
    {
        "id": 72,
        "nombre": "RYEOWOOK (Kim Ryeo Wook)"
    },
    {
        "id": 73,
        "nombre": "Soundtracks"
    },
    {
        "id": 74,
        "nombre": "SUPER JUNIOR"
    },
    {
        "id": 75,
        "nombre": "Taeyeon (Kim Tae-yeon)"
    },
    {
        "id": 76,
        "nombre": "the GazettE"
    },
    {
        "id": 77,
        "nombre": "The Rasmus"
    },
    {
        "id": 78,
        "nombre": "세븐틴 (SEVENTEEN o SVT)"
    },
    {
        "id": 79,
        "nombre": "태민 (TAEMIN)"
    },
    {
        "id": 80,
        "nombre": "헤이즈 (Jang Da-hye o Heize)"
    },
    {
        "id": 81,
        "nombre": "Lali"
    },
    {
        "id": 82,
        "nombre": "LiSA"
    },
    {
        "id": 83,
        "nombre": "Little Mix"
    },
    {
        "id": 84,
        "nombre": "Mamamoo"
    },
    {
        "id": 85,
        "nombre": "Melanie Martinez"
    },
    {
        "id": 86,
        "nombre": "Monsta X"
    },
    {
        "id": 87,
        "nombre": "NCT"
    },
    {
        "id": 88,
        "nombre": "NU EST"
    },
    {
        "id": 89,
        "nombre": "Red Velvet"
    },
    {
        "id": 90,
        "nombre": "RM"
    },
    {
        "id": 91,
        "nombre": "Scandal"
    },
    {
        "id": 92,
        "nombre": "Stray Kids"
    },
    {
        "id": 93,
        "nombre": "Stromae"
    },
    {
        "id": 94,
        "nombre": "Suga"
    },
    {
        "id": 95,
        "nombre": "Troye Sivan"
    },
    {
        "id": 96,
        "nombre": "WayV"
    },
    {
        "id": 97,
        "nombre": "Years And Years"
    },
    {
        "id": 98,
        "nombre": "Yousei Teikoku"
    },
    {
        "id": 99,
        "nombre": "Zayn"
    },
    {
        "id": 100,
        "nombre": "SuperM"
    },
    {
        "id": 101,
        "nombre": "Sunmi"
    },
    {
        "id": 102,
        "nombre": "Selena Gomez"
    },
    {
        "id": 103,
        "nombre": "(G)I-DLE (GIDLE)"
    },
    {
        "id": 104,
        "nombre": "A.C.E (ACE)"
    },
    {
        "id": 105,
        "nombre": "Amber Liu"
    },
    {
        "id": 106,
        "nombre": "Andrés Cepeda"
    },
    {
        "id": 107,
        "nombre": "ATEEZ"
    },
    {
        "id": 108,
        "nombre": "Big Time Rush"
    },
    {
        "id": 109,
        "nombre": "BIGBANG (Big Bang)"
    },
    {
        "id": 110,
        "nombre": "BLACKPINK"
    },
    {
        "id": 111,
        "nombre": "BoA"
    },
    {
        "id": 112,
        "nombre": "Camila Cabello"
    },
    {
        "id": 113,
        "nombre": "CHUNG HA"
    },
    {
        "id": 114,
        "nombre": "CLC"
    },
    {
        "id": 115,
        "nombre": "Day6"
    },
    {
        "id": 116,
        "nombre": "Dreamcatcher"
    },
    {
        "id": 117,
        "nombre": "EVERGLOW"
    },
    {
        "id": 118,
        "nombre": "BAEKHYUN"
    },
    {
        "id": 119,
        "nombre": "EXO-CBX"
    },
    {
        "id": 120,
        "nombre": "EXO-SC"
    },
    {
        "id": 121,
        "nombre": "GOT7"
    },
    {
        "id": 122,
        "nombre": "Harry Styles"
    },
    {
        "id": 123,
        "nombre": "HOLLAND"
    },
    {
        "id": 124,
        "nombre": "iKON"
    },
    {
        "id": 125,
        "nombre": "J-Hope"
    },
    {
        "id": 126,
        "nombre": "Jackson Wang"
    },
    {
        "id": 127,
        "nombre": "Jade Bird"
    },
    {
        "id": 128,
        "nombre": "KARD"
    },
    {
        "id": 129,
        "nombre": "Kim Dong Han"
    },
    {
        "id": 130,
        "nombre": "Thee Oh Sees"
    },
    {
        "id": 131,
        "nombre": "Thievery Corporation"
    },
    {
        "id": 132,
        "nombre": "Thieves Like Us"
    },
    {
        "id": 133,
        "nombre": "Toy"
    },
    {
        "id": 134,
        "nombre": "Trans-Siberian Orchestra"
    },
    {
        "id": 135,
        "nombre": "Twice"
    },
    {
        "id": 136,
        "nombre": "Unknown Mortal Orchestra"
    },
    {
        "id": 137,
        "nombre": "Vampire Weekend"
    },
    {
        "id": 138,
        "nombre": "Vök"
    },
    {
        "id": 139,
        "nombre": "Vulfpeck"
    },
    {
        "id": 140,
        "nombre": "Wagakkiband"
    },
    {
        "id": 141,
        "nombre": "Weyes Blood"
    },
    {
        "id": 142,
        "nombre": "White Hills"
    },
    {
        "id": 143,
        "nombre": "XXXTentacion"
    },
    {
        "id": 144,
        "nombre": "Young the Giant"
    },
    {
        "id": 145,
        "nombre": "Zablujena generacija"
    },
    {
        "id": 146,
        "nombre": "Röyksopp"
    },
    {
        "id": 147,
        "nombre": "Sexwitch"
    },
    {
        "id": 148,
        "nombre": "Simon Fuga"
    },
    {
        "id": 149,
        "nombre": "Skinshape"
    },
    {
        "id": 150,
        "nombre": "Sleep Party People"
    },
    {
        "id": 151,
        "nombre": "Slift"
    },
    {
        "id": 152,
        "nombre": "Smallpools"
    },
    {
        "id": 153,
        "nombre": "Soft Hair"
    },
    {
        "id": 154,
        "nombre": "Sticky Fingers"
    },
    {
        "id": 155,
        "nombre": "Stonefield"
    },
    {
        "id": 156,
        "nombre": "Summer Walker"
    },
    {
        "id": 157,
        "nombre": "Taco Hemingway"
    },
    {
        "id": 158,
        "nombre": "The Avett Brothers"
    },
    {
        "id": 159,
        "nombre": "The Babe Rainbow (AUS)"
    },
    {
        "id": 160,
        "nombre": "The Chainsmokers"
    },
    {
        "id": 161,
        "nombre": "The Claypool Lennon Delirium"
    },
    {
        "id": 162,
        "nombre": "The Darts - US"
    },
    {
        "id": 163,
        "nombre": "The Fearless Flyers"
    },
    {
        "id": 164,
        "nombre": "The Holydrug Couple"
    },
    {
        "id": 165,
        "nombre": "The Horrors"
    },
    {
        "id": 166,
        "nombre": "The ILYs"
    },
    {
        "id": 167,
        "nombre": "The Murlocs"
    },
    {
        "id": 168,
        "nombre": "The Soft Moon"
    },
    {
        "id": 169,
        "nombre": "nothing nowhere"
    },
    {
        "id": 170,
        "nombre": "Of Mice & Men"
    },
    {
        "id": 171,
        "nombre": "Oh Sees"
    },
    {
        "id": 172,
        "nombre": "Opeth"
    },
    {
        "id": 173,
        "nombre": "ORB"
    },
    {
        "id": 174,
        "nombre": "Placebo"
    },
    {
        "id": 175,
        "nombre": "Post Animal"
    },
    {
        "id": 176,
        "nombre": "Post Malone"
    },
    {
        "id": 177,
        "nombre": "Professor Soap"
    },
    {
        "id": 178,
        "nombre": "Psychedelic Porn Crumpets"
    },
    {
        "id": 179,
        "nombre": "Psychotic Waltz"
    },
    {
        "id": 180,
        "nombre": "Nick Cave & The Bad Seeds"
    },
    {
        "id": 181,
        "nombre": "Air"
    },
    {
        "id": 182,
        "nombre": "Alas"
    },
    {
        "id": 183,
        "nombre": "Allah-Las"
    },
    {
        "id": 184,
        "nombre": "Andy Shauf"
    },
    {
        "id": 185,
        "nombre": "Aurora"
    },
    {
        "id": 186,
        "nombre": "Babe Rainbow"
    },
    {
        "id": 187,
        "nombre": "Bedroom"
    },
    {
        "id": 188,
        "nombre": "Beggars Opera"
    },
    {
        "id": 189,
        "nombre": "Boy Pablo"
    },
    {
        "id": 190,
        "nombre": "Cabaret Nocturne"
    },
    {
        "id": 191,
        "nombre": "Car Bomb"
    },
    {
        "id": 192,
        "nombre": "Car Seat Headrest"
    },
    {
        "id": 193,
        "nombre": "Cave"
    },
    {
        "id": 194,
        "nombre": "Com Truise"
    },
    {
        "id": 195,
        "nombre": "Connan Mockasin"
    },
    {
        "id": 196,
        "nombre": "Coroner"
    },
    {
        "id": 197,
        "nombre": "Crucis"
    },
    {
        "id": 198,
        "nombre": "Crystal Castles"
    },
    {
        "id": 199,
        "nombre": "Dayseeker"
    },
    {
        "id": 200,
        "nombre": "Deep Winter"
    },
    {
        "id": 201,
        "nombre": "Djo"
    },
    {
        "id": 202,
        "nombre": "El Ten Eleven"
    },
    {
        "id": 203,
        "nombre": "Emily Wells"
    },
    {
        "id": 204,
        "nombre": "Equinoxious"
    },
    {
        "id": 205,
        "nombre": "Estas Tonne"
    },
    {
        "id": 206,
        "nombre": "Fonez"
    },
    {
        "id": 207,
        "nombre": "FUR"
    },
    {
        "id": 208,
        "nombre": "Future Shuttle"
    },
    {
        "id": 209,
        "nombre": "Gus Dapperton"
    },
    {
        "id": 210,
        "nombre": "Hatfield and the North"
    },
    {
        "id": 211,
        "nombre": "Heilung"
    },
    {
        "id": 212,
        "nombre": "Homeshake"
    },
    {
        "id": 213,
        "nombre": "Issues"
    },
    {
        "id": 214,
        "nombre": "Jack Stauber"
    },
    {
        "id": 215,
        "nombre": "Jam n Slate"
    },
    {
        "id": 216,
        "nombre": "Jordan Rudess"
    },
    {
        "id": 217,
        "nombre": "Kane Strang"
    },
    {
        "id": 218,
        "nombre": "Kevin Gates"
    },
    {
        "id": 219,
        "nombre": "Khruangbin"
    },
    {
        "id": 220,
        "nombre": "King Gizzard & the Lizard Wizard"
    },
    {
        "id": 221,
        "nombre": "Kraftwerk"
    },
    {
        "id": 222,
        "nombre": "La Luz"
    },
    {
        "id": 223,
        "nombre": "La Maquina de Hacer Pajaros"
    },
    {
        "id": 224,
        "nombre": "Lacuna Coil"
    },
    {
        "id": 225,
        "nombre": "Lax n Busto"
    },
    {
        "id": 226,
        "nombre": "Leah Senior"
    },
    {
        "id": 227,
        "nombre": "LSD"
    },
    {
        "id": 228,
        "nombre": "Lucie  Too"
    },
    {
        "id": 229,
        "nombre": "m83"
    },
    {
        "id": 230,
        "nombre": "Mac DeMarco"
    },
    {
        "id": 231,
        "nombre": "Metronomy"
    },
    {
        "id": 232,
        "nombre": "Morphine"
    },
    {
        "id": 233,
        "nombre": "Motorama"
    },
    {
        "id": 234,
        "nombre": "Taylor Swift"
    },
    {
        "id": 235,
        "nombre": "Trivium"
    },
    {
        "id": 236,
        "nombre": "X Ambassadors"
    },
    {
        "id": 237,
        "nombre": "YBN Cordae"
    },
    {
        "id": 238,
        "nombre": "Maluma"
    },
    {
        "id": 239,
        "nombre": "Migos"
    },
    {
        "id": 240,
        "nombre": "NF"
    },
    {
        "id": 241,
        "nombre": "Ozuna"
    },
    {
        "id": 242,
        "nombre": "Paulo Londra"
    },
    {
        "id": 243,
        "nombre": "Reik"
    },
    {
        "id": 244,
        "nombre": "Rico Nasty and Kenny Beats"
    },
    {
        "id": 245,
        "nombre": "Sabrina Carpenter"
    },
    {
        "id": 246,
        "nombre": "Snoop Dogg"
    },
    {
        "id": 247,
        "nombre": "Solange"
    },
    {
        "id": 248,
        "nombre": "Justin Bieber"
    },
    {
        "id": 249,
        "nombre": "Katy Perry"
    },
    {
        "id": 250,
        "nombre": "Khalid"
    },
    {
        "id": 251,
        "nombre": "Killswitch Engage"
    },
    {
        "id": 252,
        "nombre": "Lil Durk"
    },
    {
        "id": 253,
        "nombre": "Limp Bizkit"
    },
    {
        "id": 254,
        "nombre": "Little Brother"
    },
    {
        "id": 255,
        "nombre": "Madonna"
    },
    {
        "id": 256,
        "nombre": "Maggie Rogers"
    },
    {
        "id": 257,
        "nombre": "Denzel Curry"
    },
    {
        "id": 258,
        "nombre": "Drake"
    },
    {
        "id": 259,
        "nombre": "Flying Lotus"
    },
    {
        "id": 260,
        "nombre": "Frank Turner"
    },
    {
        "id": 261,
        "nombre": "Half Alive"
    },
    {
        "id": 262,
        "nombre": "Helloween"
    },
    {
        "id": 263,
        "nombre": "Iggy Azalea"
    },
    {
        "id": 264,
        "nombre": "Interpol"
    },
    {
        "id": 265,
        "nombre": "James Blake"
    },
    {
        "id": 266,
        "nombre": "James Morrison"
    },
    {
        "id": 267,
        "nombre": "5 Seconds of Summer (5SOS)"
    },
    {
        "id": 268,
        "nombre": "Bandana"
    },
    {
        "id": 269,
        "nombre": "Banks"
    },
    {
        "id": 270,
        "nombre": "Bebe Rexha"
    },
    {
        "id": 271,
        "nombre": "Better Oblivion Community Center"
    },
    {
        "id": 272,
        "nombre": "Big Thief"
    },
    {
        "id": 273,
        "nombre": "Billy Woods & Kenny Segal"
    },
    {
        "id": 274,
        "nombre": "Capture"
    },
    {
        "id": 275,
        "nombre": "Cardi B"
    },
    {
        "id": 276,
        "nombre": "Carly Rae Jepsen"
    },
    {
        "id": 277,
        "nombre": "Clairo"
    },
    {
        "id": 278,
        "nombre": "Alice In Chains"
    },
    {
        "id": 279,
        "nombre": "alt-J"
    },
    {
        "id": 280,
        "nombre": "Audiomachine"
    },
    {
        "id": 281,
        "nombre": "Billy Ray Cyrus"
    },
    {
        "id": 282,
        "nombre": "Bon Iver"
    },
    {
        "id": 283,
        "nombre": "Children Of Bodom"
    },
    {
        "id": 284,
        "nombre": "DaBaby"
    },
    {
        "id": 285,
        "nombre": "Ed Sheeran"
    },
    {
        "id": 286,
        "nombre": "Ella Mai"
    },
    {
        "id": 287,
        "nombre": "Flo Rida"
    },
    {
        "id": 288,
        "nombre": "Gucci Mane"
    },
    {
        "id": 289,
        "nombre": "Gunna"
    },
    {
        "id": 290,
        "nombre": "Halsey"
    },
    {
        "id": 291,
        "nombre": "Joyner Lucas"
    },
    {
        "id": 292,
        "nombre": "Lewis Capaldi"
    },
    {
        "id": 293,
        "nombre": "Lil Uzi Vert"
    },
    {
        "id": 294,
        "nombre": "Lizzo"
    },
    {
        "id": 295,
        "nombre": "Logic"
    },
    {
        "id": 296,
        "nombre": "Macklemore"
    },
    {
        "id": 297,
        "nombre": "Mark Ronson"
    },
    {
        "id": 298,
        "nombre": "Meek Mill"
    },
    {
        "id": 299,
        "nombre": "Michl"
    },
    {
        "id": 300,
        "nombre": "Nav/Attack"
    },
    {
        "id": 301,
        "nombre": "PnB Rock"
    },
    {
        "id": 302,
        "nombre": "Powerwolf"
    },
    {
        "id": 303,
        "nombre": "Ruelle"
    },
    {
        "id": 304,
        "nombre": "Still Corners"
    },
    {
        "id": 305,
        "nombre": "Travis Scott"
    },
    {
        "id": 306,
        "nombre": "Tyga"
    },
    {
        "id": 307,
        "nombre": "Tyler  The Creator"
    },
    {
        "id": 308,
        "nombre": "Young Thug"
    },
    {
        "id": 309,
        "nombre": "Alice Merton"
    },
    {
        "id": 310,
        "nombre": "Andy Black"
    },
    {
        "id": 311,
        "nombre": "AnnenMayKantereit"
    },
    {
        "id": 312,
        "nombre": "Cigarettes After Sex"
    },
    {
        "id": 313,
        "nombre": "Death"
    },
    {
        "id": 314,
        "nombre": "Disturbed"
    },
    {
        "id": 315,
        "nombre": "Eagulls"
    },
    {
        "id": 316,
        "nombre": "Fall Out Boy"
    },
    {
        "id": 317,
        "nombre": "Glass Animals"
    },
    {
        "id": 318,
        "nombre": "Godsmack"
    },
    {
        "id": 319,
        "nombre": "Incubus"
    },
    {
        "id": 320,
        "nombre": "Joywave"
    },
    {
        "id": 321,
        "nombre": "Lorde"
    },
    {
        "id": 322,
        "nombre": "Melendi"
    },
    {
        "id": 323,
        "nombre": "Motionless in White"
    },
    {
        "id": 324,
        "nombre": "Natalie Merchant"
    },
    {
        "id": 325,
        "nombre": "NeedtoBreathe"
    },
    {
        "id": 326,
        "nombre": "Orchestral Manoeuvres in the Dark (OMD)"
    },
    {
        "id": 327,
        "nombre": "Papa Roach"
    },
    {
        "id": 328,
        "nombre": "Paramore"
    },
    {
        "id": 329,
        "nombre": "Payable On Death (P.O.D.)"
    },
    {
        "id": 330,
        "nombre": "Rise Against"
    },
    {
        "id": 331,
        "nombre": "Russ"
    },
    {
        "id": 332,
        "nombre": "Sean Paul"
    },
    {
        "id": 333,
        "nombre": "Suicideboys"
    },
    {
        "id": 334,
        "nombre": "Tash Sultana"
    },
    {
        "id": 335,
        "nombre": "The Cranberries"
    },
    {
        "id": 336,
        "nombre": "The Offspring"
    },
    {
        "id": 337,
        "nombre": "The Vaccines"
    },
    {
        "id": 338,
        "nombre": "Velvet Revolver"
    },
    {
        "id": 339,
        "nombre": "A Day to  Remember"
    },
    {
        "id": 340,
        "nombre": "Adele"
    },
    {
        "id": 341,
        "nombre": "Ariana Grande"
    },
    {
        "id": 342,
        "nombre": "Blink-182"
    },
    {
        "id": 343,
        "nombre": "Fergie"
    },
    {
        "id": 344,
        "nombre": "Miley Cyrus"
    },
    {
        "id": 345,
        "nombre": "The 1975"
    },
    {
        "id": 346,
        "nombre": "AJR"
    },
    {
        "id": 347,
        "nombre": "Avicii"
    },
    {
        "id": 348,
        "nombre": "Caravan Palace"
    },
    {
        "id": 349,
        "nombre": "Cazzette"
    },
    {
        "id": 350,
        "nombre": "Eden"
    },
    {
        "id": 351,
        "nombre": "Greta Van Fleet"
    },
    {
        "id": 352,
        "nombre": "Illenium"
    },
    {
        "id": 353,
        "nombre": "James Blunt"
    },
    {
        "id": 354,
        "nombre": "Jonas Brothers"
    },
    {
        "id": 355,
        "nombre": "Kodaline"
    },
    {
        "id": 356,
        "nombre": "Nightwish"
    },
    {
        "id": 357,
        "nombre": "Of Monsters and Men"
    },
    {
        "id": 358,
        "nombre": "One Direction"
    },
    {
        "id": 359,
        "nombre": "OneRepublic"
    },
    {
        "id": 360,
        "nombre": "Owl City"
    },
    {
        "id": 361,
        "nombre": "Rosalía"
    },
    {
        "id": 362,
        "nombre": "Warmen"
    },
    {
        "id": 363,
        "nombre": "BTS"
    },
    {
        "id": 364,
        "nombre": "EXO"
    },
    {
        "id": 365,
        "nombre": "Ghost"
    },
    {
        "id": 366,
        "nombre": "Joan Jett & The Blackhearts"
    },
    {
        "id": 367,
        "nombre": "Los Prisioneros"
    },
    {
        "id": 368,
        "nombre": "Simple Plan"
    },
    {
        "id": 369,
        "nombre": "The Weeknd"
    },
    {
        "id": 370,
        "nombre": "Blackbear"
    },
    {
        "id": 371,
        "nombre": "Breaking Benjamin"
    },
    {
        "id": 372,
        "nombre": "Caifanes"
    },
    {
        "id": 373,
        "nombre": "Pantera"
    },
    {
        "id": 374,
        "nombre": "Phoenix"
    },
    {
        "id": 375,
        "nombre": "Three Days Grace"
    },
    {
        "id": 376,
        "nombre": "Zoé"
    },
    {
        "id": 377,
        "nombre": "Pierce the Veil"
    },
    {
        "id": 378,
        "nombre": "Our Last Night"
    },
    {
        "id": 379,
        "nombre": "Royal Blood"
    },
    {
        "id": 380,
        "nombre": "Zaz"
    },
    {
        "id": 381,
        "nombre": "Bastille"
    },
    {
        "id": 382,
        "nombre": "Kaleo"
    },
    {
        "id": 383,
        "nombre": "El Tri"
    },
    {
        "id": 384,
        "nombre": "Panda (PXNDX)"
    },
    {
        "id": 385,
        "nombre": "Sleeping With Sirens"
    },
    {
        "id": 386,
        "nombre": "Phil Collins"
    },
    {
        "id": 387,
        "nombre": "Los Ramones"
    },
    {
        "id": 388,
        "nombre": "Elvis Presley"
    },
    {
        "id": 389,
        "nombre": "Cultura Profetica"
    },
    {
        "id": 390,
        "nombre": "Fito Paez"
    },
    {
        "id": 391,
        "nombre": "Thousand foot krutch"
    },
    {
        "id": 392,
        "nombre": "KISS"
    },
    {
        "id": 393,
        "nombre": "Ozzy Osbourne"
    },
    {
        "id": 394,
        "nombre": "Deep Purple"
    },
    {
        "id": 395,
        "nombre": "los fabulosos cadillacs"
    },
    {
        "id": 396,
        "nombre": "Tyler Joseph"
    },
    {
        "id": 397,
        "nombre": "Tricky"
    },
    {
        "id": 398,
        "nombre": "Hozier"
    },
    {
        "id": 399,
        "nombre": "Arctic Monkeys"
    },
    {
        "id": 400,
        "nombre": "Modest Mouse"
    },
    {
        "id": 401,
        "nombre": "Creed"
    },
    {
        "id": 402,
        "nombre": "Sia"
    },
    {
        "id": 403,
        "nombre": "The Sex Pistols"
    },
    {
        "id": 404,
        "nombre": "Daft Punk"
    },
    {
        "id": 405,
        "nombre": "Bullet for my Valentine"
    },
    {
        "id": 406,
        "nombre": "Ill Niño"
    },
    {
        "id": 407,
        "nombre": "The All American Rejects"
    },
    {
        "id": 408,
        "nombre": "Vitamin X"
    },
    {
        "id": 409,
        "nombre": "Talking Heads"
    },
    {
        "id": 410,
        "nombre": "The War On Drugs"
    },
    {
        "id": 411,
        "nombre": "Bring Me the Horizon"
    },
    {
        "id": 412,
        "nombre": "Shriekback"
    },
    {
        "id": 413,
        "nombre": "Imagine Dragons"
    },
    {
        "id": 414,
        "nombre": "The White Stripes"
    },
    {
        "id": 415,
        "nombre": "Christina Perri"
    },
    {
        "id": 416,
        "nombre": "The Red Jumpsuit Apparatus"
    },
    {
        "id": 417,
        "nombre": "GIT"
    },
    {
        "id": 418,
        "nombre": "Enjambre"
    },
    {
        "id": 419,
        "nombre": "Dio"
    },
    {
        "id": 420,
        "nombre": "Bazzi"
    },
    {
        "id": 421,
        "nombre": "Astrix"
    },
    {
        "id": 422,
        "nombre": "Avril Lavigne"
    },
    {
        "id": 423,
        "nombre": "Bars and Melody"
    },
    {
        "id": 424,
        "nombre": "blur"
    },
    {
        "id": 425,
        "nombre": "sodom"
    },
    {
        "id": 426,
        "nombre": "Jarabe de palo"
    },
    {
        "id": 427,
        "nombre": "Sopor Aeternus and the Ensemble of Shadows"
    },
    {
        "id": 428,
        "nombre": "Panteón Rococó"
    },
    {
        "id": 429,
        "nombre": "Scarlxrd"
    },
    {
        "id": 430,
        "nombre": "Falling Up"
    },
    {
        "id": 431,
        "nombre": "Nattramn"
    },
    {
        "id": 432,
        "nombre": "Primus"
    },
    {
        "id": 433,
        "nombre": "Ruel"
    },
    {
        "id": 434,
        "nombre": "pillar"
    },
    {
        "id": 435,
        "nombre": "Gian Marco Zignago"
    },
    {
        "id": 436,
        "nombre": "Charlotte de witte"
    },
    {
        "id": 437,
        "nombre": "Armin van Buuren"
    },
    {
        "id": 438,
        "nombre": "Anabantha"
    },
    {
        "id": 439,
        "nombre": "Avenged Sevenfold"
    },
    {
        "id": 440,
        "nombre": "jimi hendrix"
    },
    {
        "id": 441,
        "nombre": "Panic at the disco"
    },
    {
        "id": 442,
        "nombre": "Pedro suarez"
    },
    {
        "id": 443,
        "nombre": "Nacho Vegas"
    },
    {
        "id": 444,
        "nombre": "Fobia"
    },
    {
        "id": 445,
        "nombre": "Stone Sour"
    },
    {
        "id": 446,
        "nombre": "Shawn Mendes"
    },
    {
        "id": 447,
        "nombre": "Deftones"
    },
    {
        "id": 448,
        "nombre": "Billie Eilish"
    },
    {
        "id": 449,
        "nombre": "Ice Cube"
    },
    {
        "id": 450,
        "nombre": "aurora aksnes"
    },
    {
        "id": 451,
        "nombre": "Graham Coxon"
    },
    {
        "id": 452,
        "nombre": "Indio Solari"
    },
    {
        "id": 453,
        "nombre": "Mushroomhead"
    },
    {
        "id": 454,
        "nombre": "Ghostemane"
    },
    {
        "id": 455,
        "nombre": "Passenger"
    },
    {
        "id": 456,
        "nombre": "The Neighbourhood"
    },
    {
        "id": 457,
        "nombre": "Grandson"
    },
    {
        "id": 458,
        "nombre": "Porta"
    },
    {
        "id": 459,
        "nombre": "Marilyn Manson"
    },
    {
        "id": 460,
        "nombre": "My Chemical Romance"
    },
    {
        "id": 461,
        "nombre": "Charly Garcia"
    },
    {
        "id": 462,
        "nombre": "The Smiths"
    },
    {
        "id": 463,
        "nombre": "john Legend"
    },
    {
        "id": 464,
        "nombre": "U2"
    },
    {
        "id": 465,
        "nombre": "Slipknot"
    },
    {
        "id": 466,
        "nombre": "Two Feet"
    },
    {
        "id": 467,
        "nombre": "Spinetta"
    },
    {
        "id": 468,
        "nombre": "Tame Impala"
    },
    {
        "id": 469,
        "nombre": "Judas Priest"
    },
    {
        "id": 470,
        "nombre": "Seafret"
    },
    {
        "id": 471,
        "nombre": "Estelares"
    },
    {
        "id": 472,
        "nombre": "The Doors"
    },
    {
        "id": 473,
        "nombre": "keane"
    },
    {
        "id": 474,
        "nombre": "the verve"
    },
    {
        "id": 475,
        "nombre": "Seru giran"
    },
    {
        "id": 476,
        "nombre": "Laura Pergolizzi"
    },
    {
        "id": 477,
        "nombre": "Viejas Locas"
    },
    {
        "id": 478,
        "nombre": "Eruca Sativa"
    },
    {
        "id": 479,
        "nombre": "Los abuelos de la Nada"
    },
    {
        "id": 480,
        "nombre": "Intoxicados"
    },
    {
        "id": 481,
        "nombre": "Motorhead"
    },
    {
        "id": 482,
        "nombre": "Harry Nilsson"
    },
    {
        "id": 483,
        "nombre": "Two door cinema club"
    },
    {
        "id": 484,
        "nombre": "The Strokes"
    },
    {
        "id": 485,
        "nombre": "The killers"
    },
    {
        "id": 486,
        "nombre": "Slash"
    },
    {
        "id": 487,
        "nombre": "Paul Simon"
    },
    {
        "id": 488,
        "nombre": "Foster The People"
    },
    {
        "id": 489,
        "nombre": "Genesis"
    },
    {
        "id": 490,
        "nombre": "Lana del rey"
    },
    {
        "id": 491,
        "nombre": "Arcade Fire"
    },
    {
        "id": 492,
        "nombre": "Eminem"
    },
    {
        "id": 493,
        "nombre": "Megadeth"
    },
    {
        "id": 494,
        "nombre": "Rage Against the Machine"
    },
    {
        "id": 495,
        "nombre": "mumford & sons"
    },
    {
        "id": 496,
        "nombre": "Queens of the Stone Age"
    },
    {
        "id": 497,
        "nombre": "Enrique bunbury"
    },
    {
        "id": 498,
        "nombre": "Enya"
    },
    {
        "id": 499,
        "nombre": "Enanitos Verdes"
    },
    {
        "id": 500,
        "nombre": "Hombres G"
    },
    {
        "id": 501,
        "nombre": "LPDA"
    },
    {
        "id": 502,
        "nombre": "Los redondos"
    },
    {
        "id": 503,
        "nombre": "divididos"
    },
    {
        "id": 504,
        "nombre": "Cafe tacvba"
    },
    {
        "id": 505,
        "nombre": "Laura Pausini"
    },
    {
        "id": 506,
        "nombre": "Kapanga"
    },
    {
        "id": 507,
        "nombre": "Coldplay"
    },
    {
        "id": 508,
        "nombre": "Oasis"
    },
    {
        "id": 509,
        "nombre": "Temple of the dog"
    },
    {
        "id": 510,
        "nombre": "Soundgarden"
    },
    {
        "id": 511,
        "nombre": "Audioslave"
    },
    {
        "id": 512,
        "nombre": "Chris Cornell"
    },
    {
        "id": 513,
        "nombre": "serj tankian"
    },
    {
        "id": 514,
        "nombre": "Queen"
    },
    {
        "id": 515,
        "nombre": "Twenty One Pilots"
    },
    {
        "id": 516,
        "nombre": "Black Sabbath"
    },
    {
        "id": 517,
        "nombre": "The Beatles"
    },
    {
        "id": 518,
        "nombre": "Jeff Buckley"
    },
    {
        "id": 519,
        "nombre": "Muse"
    },
    {
        "id": 520,
        "nombre": "Scorpions"
    },
    {
        "id": 521,
        "nombre": "Rata Blanca"
    },
    {
        "id": 522,
        "nombre": "Linkin Park"
    },
    {
        "id": 523,
        "nombre": "The Fray"
    },
    {
        "id": 524,
        "nombre": "System of a Down"
    },
    {
        "id": 525,
        "nombre": "Green Day"
    },
    {
        "id": 526,
        "nombre": "The rolling stones"
    },
    {
        "id": 527,
        "nombre": "Oreja de Van Gogh"
    },
    {
        "id": 528,
        "nombre": "Pearl Jam"
    },
    {
        "id": 529,
        "nombre": "Los Tipitos"
    },
    {
        "id": 530,
        "nombre": "Pink Floyd"
    },
    {
        "id": 531,
        "nombre": "Radiohead"
    },
    {
        "id": 532,
        "nombre": "The who?"
    },
    {
        "id": 533,
        "nombre": "Natalia Lafourcade"
    },
    {
        "id": 534,
        "nombre": "Nickelback"
    },
    {
        "id": 535,
        "nombre": "korn"
    },
    {
        "id": 536,
        "nombre": "Heroes del silencio"
    },
    {
        "id": 537,
        "nombre": "Bon Jovi"
    },
    {
        "id": 538,
        "nombre": "Franz Ferdinand"
    },
    {
        "id": 539,
        "nombre": "Justin Timberlake"
    },
    {
        "id": 540,
        "nombre": "Ryhe"
    },
    {
        "id": 541,
        "nombre": "MGMT"
    },
    {
        "id": 542,
        "nombre": "AC/DC"
    },
    {
        "id": 543,
        "nombre": "Rammstein"
    },
    {
        "id": 544,
        "nombre": "Guns"
    },
    {
        "id": 545,
        "nombre": "Nirvana"
    },
    {
        "id": 546,
        "nombre": "A77aque"
    },
    {
        "id": 547,
        "nombre": "Cruachan"
    },
    {
        "id": 548,
        "nombre": "Cuarteto"
    },
    {
        "id": 549,
        "nombre": "Led Zeppelin"
    },
    {
        "id": 550,
        "nombre": "Cerati"
    },
    {
        "id": 551,
        "nombre": "catupecu"
    },
    {
        "id": 552,
        "nombre": "ciro"
    },
    {
        "id": 553,
        "nombre": "La renga"
    },
    {
        "id": 554,
        "nombre": "Metallica"
    },
    {
        "id": 555,
        "nombre": "Foo fighters"
    },
    {
        "id": 556,
        "nombre": "Red Hot"
    },
    {
        "id": 557,
        "nombre": "Los piojos"
    },
    {
        "id": 558,
        "nombre": "Artic Monkeys"
    },
    {
        "id": 559,
        "nombre": "Arbol"
    },
    {
        "id": 560,
        "nombre": "Soda Stereo"
    },
    {
        "id": 561,
        "nombre": "Gorillaz"
    },
    {
        "id": 562,
        "nombre": "Mago de oz"
    },
    {
        "id": 563,
        "nombre": "Babasonicos"
    }
];

let discs = [
    {
        "id_disco": 1,
        "id": 0,
        "nombre_disco": "1986 - Ratones Paranoicos",
        "link": "http://raboninco.com/DiQ1"
    },
    {
        "id_disco": 2,
        "id": 0,
        "nombre_disco": "1988 - Los Chicos Quieren Rock",
        "link": "http://raboninco.com/DiQi"
    },
    {
        "id_disco": 3,
        "id": 0,
        "nombre_disco": "1989 - Furtivos",
        "link": "http://raboninco.com/DiRC"
    },
    {
        "id_disco": 4,
        "id": 0,
        "nombre_disco": "1990 - Tómalo o Déjalo",
        "link": "http://raboninco.com/DiRc"
    },
    {
        "id_disco": 5,
        "id": 0,
        "nombre_disco": "1991 - Fieras Lunaticas",
        "link": "http://raboninco.com/DiS7"
    },
    {
        "id_disco": 6,
        "id": 0,
        "nombre_disco": "1996 - Planeta Paranoico",
        "link": "http://raboninco.com/DiSM"
    },
    {
        "id_disco": 7,
        "id": 0,
        "nombre_disco": "1999 - Electroshock",
        "link": "http://raboninco.com/DiSm"
    },
    {
        "id_disco": 8,
        "id": 0,
        "nombre_disco": "2001 - Los Chicos Quieren Más",
        "link": "http://raboninco.com/DiTG"
    },
    {
        "id_disco": 9,
        "id": 0,
        "nombre_disco": "2004 - Girando",
        "link": "http://raboninco.com/DiU5"
    },
    {
        "id_disco": 10,
        "id": 0,
        "nombre_disco": "2009 - Ratones Paranoicos",
        "link": "http://raboninco.com/DiUJ"
    },
    {
        "id_disco": 11,
        "id": 1,
        "nombre_disco": "1995 - Saratoga",
        "link": "http://raboninco.com/DiV5"
    },
    {
        "id_disco": 12,
        "id": 1,
        "nombre_disco": "1996 - Tributo",
        "link": "http://raboninco.com/DiVV"
    },
    {
        "id_disco": 13,
        "id": 1,
        "nombre_disco": "1997 - Mi Ciudad",
        "link": "http://raboninco.com/DiWj"
    },
    {
        "id_disco": 14,
        "id": 1,
        "nombre_disco": "1998 - Vientos De Guerra",
        "link": "http://raboninco.com/DiXA"
    },
    {
        "id_disco": 15,
        "id": 1,
        "nombre_disco": "2000 - Tiempos De Directo (Live)",
        "link": "http://raboninco.com/DiXf"
    },
    {
        "id_disco": 16,
        "id": 1,
        "nombre_disco": "2002 - Agotaras",
        "link": "http://raboninco.com/DiY9"
    },
    {
        "id_disco": 17,
        "id": 1,
        "nombre_disco": "2003 - A Morir (Live)",
        "link": "http://raboninco.com/DiYj"
    },
    {
        "id_disco": 18,
        "id": 1,
        "nombre_disco": "2003 - Heavens Gate (EP)",
        "link": "http://raboninco.com/DiZh"
    },
    {
        "id_disco": 19,
        "id": 1,
        "nombre_disco": "2004 - 1992 - 2004",
        "link": "http://raboninco.com/DiaD"
    },
    {
        "id_disco": 20,
        "id": 1,
        "nombre_disco": "2004 - El Clan De La Lucha",
        "link": "http://raboninco.com/Diaw"
    },
    {
        "id_disco": 21,
        "id": 1,
        "nombre_disco": "2005 - Tierra De Lobos",
        "link": "http://raboninco.com/DibI"
    },
    {
        "id_disco": 22,
        "id": 1,
        "nombre_disco": "2006 - The Fighting Clan",
        "link": "http://raboninco.com/Dibg"
    },
    {
        "id_disco": 23,
        "id": 1,
        "nombre_disco": "2007 - VII",
        "link": "http://raboninco.com/Dibt"
    },
    {
        "id_disco": 24,
        "id": 1,
        "nombre_disco": "2009 - Secretos Y Revelaciones",
        "link": "http://raboninco.com/DicB"
    },
    {
        "id_disco": 25,
        "id": 1,
        "nombre_disco": "2010 - Revelaciones De Una Noche",
        "link": "http://raboninco.com/DigB"
    },
    {
        "id_disco": 26,
        "id": 1,
        "nombre_disco": "2011 - Si No Amaneciera. (Baladas) (Compilacion)",
        "link": "http://raboninco.com/DigW"
    },
    {
        "id_disco": 27,
        "id": 1,
        "nombre_disco": "2012 - Nemesis",
        "link": "http://raboninco.com/Dih6"
    },
    {
        "id_disco": 28,
        "id": 1,
        "nombre_disco": "2016 - Grandes Éxitos",
        "link": "http://raboninco.com/Diha"
    },
    {
        "id_disco": 29,
        "id": 1,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/Dii0"
    },
    {
        "id_disco": 30,
        "id": 2,
        "nombre_disco": "2011 - Remando",
        "link": "http://raboninco.com/Diio"
    },
    {
        "id_disco": 31,
        "id": 2,
        "nombre_disco": "2014 - Mortal",
        "link": "http://raboninco.com/DijJ"
    },
    {
        "id_disco": 32,
        "id": 3,
        "nombre_disco": "2005 - The Great Divide",
        "link": "http://raboninco.com/Dios"
    },
    {
        "id_disco": 33,
        "id": 3,
        "nombre_disco": "2013 - Proof Of Life",
        "link": "http://raboninco.com/DipJ"
    },
    {
        "id_disco": 34,
        "id": 4,
        "nombre_disco": "1986 - Morbid Visions - Bestial Devastation",
        "link": "http://raboninco.com/DiqW"
    },
    {
        "id_disco": 35,
        "id": 4,
        "nombre_disco": "1987 - Schizophrenia",
        "link": "http://raboninco.com/DirA"
    },
    {
        "id_disco": 36,
        "id": 4,
        "nombre_disco": "1989 - Beneath The Remains",
        "link": "http://raboninco.com/Dirc"
    },
    {
        "id_disco": 37,
        "id": 4,
        "nombre_disco": "1991 - Arise (Expanded Edition 2CD  Remastered 2018)",
        "link": "http://raboninco.com/Disl"
    },
    {
        "id_disco": 38,
        "id": 4,
        "nombre_disco": "1992 - Third World Posse",
        "link": "http://raboninco.com/DitB"
    },
    {
        "id_disco": 39,
        "id": 4,
        "nombre_disco": "1992 - Under Siege",
        "link": "http://raboninco.com/DitQ"
    },
    {
        "id_disco": 40,
        "id": 4,
        "nombre_disco": "1993 - Chaos A.D. (2017 Expanded Edition 2CD)",
        "link": "http://raboninco.com/Dits"
    },
    {
        "id_disco": 41,
        "id": 4,
        "nombre_disco": "1996 - Roots (2017 Expanded Edition 2CD)",
        "link": "http://raboninco.com/DiuH"
    },
    {
        "id_disco": 42,
        "id": 4,
        "nombre_disco": "1997 - B-Sides",
        "link": "http://raboninco.com/DiuZ"
    },
    {
        "id_disco": 43,
        "id": 4,
        "nombre_disco": "1997 - Blood-Rooted",
        "link": "http://raboninco.com/Diuv"
    },
    {
        "id_disco": 44,
        "id": 4,
        "nombre_disco": "1997 - The Best Of Sepultura - Chaos In The Jungle",
        "link": "http://raboninco.com/DivJ"
    },
    {
        "id_disco": 45,
        "id": 4,
        "nombre_disco": "1998 - Against",
        "link": "http://raboninco.com/Divx"
    },
    {
        "id_disco": 46,
        "id": 4,
        "nombre_disco": "2001 - Nation",
        "link": "http://raboninco.com/DiwV"
    },
    {
        "id_disco": 47,
        "id": 4,
        "nombre_disco": "2002 - Under A Pale Grey Sky",
        "link": "http://raboninco.com/Diwq"
    },
    {
        "id_disco": 48,
        "id": 4,
        "nombre_disco": "2003 - Roorback + Revolusongs",
        "link": "http://raboninco.com/Dix6"
    },
    {
        "id_disco": 49,
        "id": 4,
        "nombre_disco": "2005 - Live In Sao Paulo",
        "link": "http://raboninco.com/DixP"
    },
    {
        "id_disco": 50,
        "id": 4,
        "nombre_disco": "2006 - DanteXXI",
        "link": "http://raboninco.com/Dixl"
    },
    {
        "id_disco": 51,
        "id": 4,
        "nombre_disco": "2006 - The Best Of Sepultura",
        "link": "http://raboninco.com/Dixx"
    },
    {
        "id_disco": 52,
        "id": 4,
        "nombre_disco": "2009 - A-Lex",
        "link": "http://raboninco.com/DiyM"
    },
    {
        "id_disco": 53,
        "id": 4,
        "nombre_disco": "2011 - Kairos (Deluxe Edition)",
        "link": "http://raboninco.com/Diyv"
    },
    {
        "id_disco": 54,
        "id": 4,
        "nombre_disco": "2013 - The Age Of The Atheist",
        "link": "http://raboninco.com/Diz8"
    },
    {
        "id_disco": 55,
        "id": 4,
        "nombre_disco": "2013 - The Mediator Between Head And Hands Must Be The Heart",
        "link": "http://raboninco.com/DizR"
    },
    {
        "id_disco": 56,
        "id": 4,
        "nombre_disco": "2014 - Metal Veins - Alive At Rock In Rio",
        "link": "http://raboninco.com/Dizu"
    },
    {
        "id_disco": 57,
        "id": 4,
        "nombre_disco": "2017 - Machine Messiah",
        "link": "http://raboninco.com/Dj0J"
    },
    {
        "id_disco": 58,
        "id": 5,
        "nombre_disco": "1996 - Skillet",
        "link": "http://raboninco.com/Dj32"
    },
    {
        "id_disco": 59,
        "id": 5,
        "nombre_disco": "1998 - Hey You  I Love Your Soul",
        "link": "http://raboninco.com/Dj3O"
    },
    {
        "id_disco": 60,
        "id": 5,
        "nombre_disco": "2000 - Ardent Worship (Live)",
        "link": "http://raboninco.com/Dj3k"
    },
    {
        "id_disco": 61,
        "id": 5,
        "nombre_disco": "2000 - Invincible",
        "link": "http://raboninco.com/Dj49"
    },
    {
        "id_disco": 62,
        "id": 5,
        "nombre_disco": "2001 - Alien Youth (Rare Cuts Limited Edition)",
        "link": "http://raboninco.com/Dj4T"
    },
    {
        "id_disco": 63,
        "id": 5,
        "nombre_disco": "2002 - Alien Youth (The Unplugged Invasion)",
        "link": "http://raboninco.com/Dj4g"
    },
    {
        "id_disco": 64,
        "id": 5,
        "nombre_disco": "2003 - Collide",
        "link": "http://raboninco.com/Dj4w"
    },
    {
        "id_disco": 65,
        "id": 5,
        "nombre_disco": "2006 - Comatose (Deluxe Edition)",
        "link": "http://raboninco.com/Dj5C"
    },
    {
        "id_disco": 66,
        "id": 5,
        "nombre_disco": "2006 - Comatose Comes Alive (Live)",
        "link": "http://raboninco.com/Dj5a"
    },
    {
        "id_disco": 67,
        "id": 5,
        "nombre_disco": "2009 - Awake (Deluxe Edition)",
        "link": "http://raboninco.com/Dj67"
    },
    {
        "id_disco": 68,
        "id": 5,
        "nombre_disco": "2010 - Itunes Session",
        "link": "http://raboninco.com/Dj6Z"
    },
    {
        "id_disco": 69,
        "id": 5,
        "nombre_disco": "2013 - Rise",
        "link": "http://raboninco.com/Dj8g"
    },
    {
        "id_disco": 70,
        "id": 5,
        "nombre_disco": "2014 - Vital Sings",
        "link": "http://raboninco.com/Dj94"
    },
    {
        "id_disco": 71,
        "id": 5,
        "nombre_disco": "2016 - Unleashed",
        "link": "http://raboninco.com/Dj9V"
    },
    {
        "id_disco": 72,
        "id": 6,
        "nombre_disco": "2004 - Primer Acto",
        "link": "http://raboninco.com/DjCA"
    },
    {
        "id_disco": 73,
        "id": 6,
        "nombre_disco": "2005 - Sentimientos",
        "link": "http://raboninco.com/DjCX"
    },
    {
        "id_disco": 74,
        "id": 6,
        "nombre_disco": "2006 - Hijo del Miedo (EP)",
        "link": "http://raboninco.com/DjCv"
    },
    {
        "id_disco": 75,
        "id": 6,
        "nombre_disco": "2007 - Requiem",
        "link": "http://raboninco.com/DjDK"
    },
    {
        "id_disco": 76,
        "id": 6,
        "nombre_disco": "2010 - Raíces",
        "link": "http://raboninco.com/DjDq"
    },
    {
        "id_disco": 77,
        "id": 6,
        "nombre_disco": "2010 - The Best Of",
        "link": "http://raboninco.com/DjED"
    },
    {
        "id_disco": 78,
        "id": 7,
        "nombre_disco": "2004 - The Academy Is (EP)",
        "link": "http://raboninco.com/DjGw"
    },
    {
        "id_disco": 79,
        "id": 7,
        "nombre_disco": "2005 - Almost Here",
        "link": "http://raboninco.com/DjHA"
    },
    {
        "id_disco": 80,
        "id": 7,
        "nombre_disco": "2006 - From the Carpet (Itunes EP)",
        "link": "http://raboninco.com/DjHL"
    },
    {
        "id_disco": 81,
        "id": 8,
        "nombre_disco": "1979 - Dragnet [CD  album  reissue  remastered 2004]",
        "link": "http://raboninco.com/DjI0"
    },
    {
        "id_disco": 82,
        "id": 8,
        "nombre_disco": "1979 - Live At The Witch Trials",
        "link": "http://raboninco.com/DjIG"
    },
    {
        "id_disco": 83,
        "id": 8,
        "nombre_disco": "1980 - Grotesque [CD  album  reissue  remastered 2004]",
        "link": "http://raboninco.com/DjIY"
    },
    {
        "id_disco": 84,
        "id": 8,
        "nombre_disco": "1980 - Totales Turns (Its Now or Never) [CD  album  reissue 2004]",
        "link": "http://raboninco.com/DjJ3"
    },
    {
        "id_disco": 85,
        "id": 8,
        "nombre_disco": "1981 - Early Fall",
        "link": "http://raboninco.com/DjJM"
    },
    {
        "id_disco": 86,
        "id": 8,
        "nombre_disco": "1981 - Slates [CD  album  reissue  remastered 2004]",
        "link": "http://raboninco.com/DjJf"
    },
    {
        "id_disco": 87,
        "id": 8,
        "nombre_disco": "1982 - A Part Of America Therein  1981 [LP  live album]",
        "link": "http://raboninco.com/DjJo"
    },
    {
        "id_disco": 88,
        "id": 8,
        "nombre_disco": "1982 - Hex Enduction Hour",
        "link": "http://raboninco.com/DjKB"
    },
    {
        "id_disco": 89,
        "id": 8,
        "nombre_disco": "1982 - Room to Live (Undilutable Slang Truth!) [CD  album  reissue  remastered 2002]",
        "link": "http://raboninco.com/DjKa"
    },
    {
        "id_disco": 90,
        "id": 8,
        "nombre_disco": "1982 - The Legendary Chaos Tape [CD  live album  reissue 1995]",
        "link": "http://raboninco.com/DjKq"
    },
    {
        "id_disco": 91,
        "id": 8,
        "nombre_disco": "1983 - In a Hole",
        "link": "http://raboninco.com/DjLA"
    },
    {
        "id_disco": 92,
        "id": 8,
        "nombre_disco": "1983 - Perverted by Language",
        "link": "http://raboninco.com/DjLX"
    },
    {
        "id_disco": 93,
        "id": 8,
        "nombre_disco": "1984 - The Wonderful and FRIGHTENING World 0f. The Fall",
        "link": "http://raboninco.com/DjLl"
    },
    {
        "id_disco": 94,
        "id": 8,
        "nombre_disco": "1985 - This Nation’s Saving Grace",
        "link": "http://raboninco.com/DjM1"
    },
    {
        "id_disco": 95,
        "id": 8,
        "nombre_disco": "1986 - Bend Sinister [CD  album  reissue 1988]",
        "link": "http://raboninco.com/DjMH"
    },
    {
        "id_disco": 96,
        "id": 8,
        "nombre_disco": "1986 - Living Too Late [12  EP]",
        "link": "http://raboninco.com/DjMh"
    },
    {
        "id_disco": 97,
        "id": 8,
        "nombre_disco": "1987 - Palace of Swords Reversed",
        "link": "http://raboninco.com/DjN6"
    },
    {
        "id_disco": 98,
        "id": 8,
        "nombre_disco": "1988 - I am Kurious Oranj [CD  album  reissue 1997]",
        "link": "http://raboninco.com/DjNJ"
    },
    {
        "id_disco": 99,
        "id": 8,
        "nombre_disco": "1988 - The Frenz Experiment [CD  album  reissue 1997]",
        "link": "http://raboninco.com/DjNd"
    },
    {
        "id_disco": 100,
        "id": 8,
        "nombre_disco": "1989 - Seminal Live [CD  album]",
        "link": "http://raboninco.com/EH6k"
    },
    {
        "id_disco": 101,
        "id": 8,
        "nombre_disco": "1990 - 458489",
        "link": "http://raboninco.com/EH8B"
    },
    {
        "id_disco": 102,
        "id": 8,
        "nombre_disco": "1990 - Extricate",
        "link": "http://raboninco.com/EH8e"
    },
    {
        "id_disco": 103,
        "id": 8,
        "nombre_disco": "1990 - The Dredger E.P. [CD  EP]",
        "link": "http://raboninco.com/EH99"
    },
    {
        "id_disco": 104,
        "id": 8,
        "nombre_disco": "1991 - Shift-Work",
        "link": "http://raboninco.com/EHAR"
    },
    {
        "id_disco": 105,
        "id": 8,
        "nombre_disco": "1992 - Code- Selfish",
        "link": "http://raboninco.com/EHAl"
    },
    {
        "id_disco": 106,
        "id": 8,
        "nombre_disco": "1992 - Eds Babe [CD  EP]",
        "link": "http://raboninco.com/EHBA"
    },
    {
        "id_disco": 107,
        "id": 8,
        "nombre_disco": "1992 - Free Range [CD  EP]",
        "link": "http://raboninco.com/EHBN"
    },
    {
        "id_disco": 108,
        "id": 8,
        "nombre_disco": "1993 - The Collection",
        "link": "http://raboninco.com/EHBb"
    },
    {
        "id_disco": 109,
        "id": 8,
        "nombre_disco": "1993 - The Infotainment Scan [CD  album]",
        "link": "http://raboninco.com/EHBw"
    },
    {
        "id_disco": 110,
        "id": 8,
        "nombre_disco": "1994 - Middle Class Revolt",
        "link": "http://raboninco.com/EHCE"
    },
    {
        "id_disco": 111,
        "id": 8,
        "nombre_disco": "1995 - Cerebral Caustic",
        "link": "http://raboninco.com/EHCR"
    },
    {
        "id_disco": 112,
        "id": 8,
        "nombre_disco": "1995 - The Twenty-Seven Points",
        "link": "http://raboninco.com/EHCf"
    },
    {
        "id_disco": 113,
        "id": 8,
        "nombre_disco": "1996 - Fiend With A Violin",
        "link": "http://raboninco.com/EHCn"
    },
    {
        "id_disco": 114,
        "id": 8,
        "nombre_disco": "1996 - Oswald Defense Lawyer",
        "link": "http://raboninco.com/EHD0"
    },
    {
        "id_disco": 115,
        "id": 8,
        "nombre_disco": "1996 - Sinister Waltz",
        "link": "http://raboninco.com/EHDE"
    },
    {
        "id_disco": 116,
        "id": 8,
        "nombre_disco": "1996 - The Light User Syndrome [CD  album]",
        "link": "http://raboninco.com/EHDY"
    },
    {
        "id_disco": 117,
        "id": 8,
        "nombre_disco": "1997 - 15 Ways To Leave Your Man [CD  live album]",
        "link": "http://raboninco.com/EHDr"
    },
    {
        "id_disco": 118,
        "id": 8,
        "nombre_disco": "1997 - Archive Series",
        "link": "http://raboninco.com/EHED"
    },
    {
        "id_disco": 119,
        "id": 8,
        "nombre_disco": "1997 - In The City. [CD  live album]",
        "link": "http://raboninco.com/EHEN"
    },
    {
        "id_disco": 120,
        "id": 8,
        "nombre_disco": "1997 - Levitate [CD  album]",
        "link": "http://raboninco.com/EHEf"
    },
    {
        "id_disco": 121,
        "id": 8,
        "nombre_disco": "1997 - Oxymoron",
        "link": "http://raboninco.com/EHEy"
    },
    {
        "id_disco": 122,
        "id": 8,
        "nombre_disco": "1998 - Live Various Years [CD  compilation]",
        "link": "http://raboninco.com/EHF8"
    },
    {
        "id_disco": 123,
        "id": 8,
        "nombre_disco": "1999 - The Marshall Suite [CD  album]",
        "link": "http://raboninco.com/EHFU"
    },
    {
        "id_disco": 124,
        "id": 8,
        "nombre_disco": "2000 - A Past Gone Mad",
        "link": "http://raboninco.com/EHFj"
    },
    {
        "id_disco": 125,
        "id": 8,
        "nombre_disco": "2000 - I Am as Pure as Oranj [CD  live album]",
        "link": "http://raboninco.com/EHG1"
    },
    {
        "id_disco": 126,
        "id": 8,
        "nombre_disco": "2000 - Live in Cambridge 1988 [CD  live album]",
        "link": "http://raboninco.com/EHGQ"
    },
    {
        "id_disco": 127,
        "id": 8,
        "nombre_disco": "2000 - Psykick Dance Hall",
        "link": "http://raboninco.com/EHGj"
    },
    {
        "id_disco": 128,
        "id": 8,
        "nombre_disco": "2000 - The Unutterable",
        "link": "http://raboninco.com/EHGv"
    },
    {
        "id_disco": 129,
        "id": 8,
        "nombre_disco": "2001 - A World Bewitched",
        "link": "http://raboninco.com/EHHf"
    },
    {
        "id_disco": 130,
        "id": 8,
        "nombre_disco": "2001 - Are You Are Missing Winner [CD  album  reissue 2006]",
        "link": "http://raboninco.com/EHHy"
    },
    {
        "id_disco": 131,
        "id": 8,
        "nombre_disco": "2001 - Backdrop",
        "link": "http://raboninco.com/EHIV"
    },
    {
        "id_disco": 132,
        "id": 8,
        "nombre_disco": "2001 - Reykjavík live 1983 may 6 [CD  live album]",
        "link": "http://raboninco.com/EHIq"
    },
    {
        "id_disco": 133,
        "id": 8,
        "nombre_disco": "2001 - Rude (All TheTime) [CD  EP  ltd. 2005]",
        "link": "http://raboninco.com/EHJD"
    },
    {
        "id_disco": 134,
        "id": 8,
        "nombre_disco": "2002 - 2G + 2 [CD  album]",
        "link": "http://raboninco.com/EHJa"
    },
    {
        "id_disco": 135,
        "id": 8,
        "nombre_disco": "2002 - Listening In",
        "link": "http://raboninco.com/EHJp"
    },
    {
        "id_disco": 136,
        "id": 8,
        "nombre_disco": "2002 - Totally Wired",
        "link": "http://raboninco.com/EHK9"
    },
    {
        "id_disco": 137,
        "id": 8,
        "nombre_disco": "2003 - Live At The Phoenix Festival [CD  live album]",
        "link": "http://raboninco.com/EHKN"
    },
    {
        "id_disco": 138,
        "id": 8,
        "nombre_disco": "2003 - Rebellious Jukebox",
        "link": "http://raboninco.com/EHLP"
    },
    {
        "id_disco": 139,
        "id": 8,
        "nombre_disco": "2003 - The Real New Fall LP (Formerly Country on the Click) [CD  album  rem. 2004]",
        "link": "http://raboninco.com/EHLh"
    },
    {
        "id_disco": 140,
        "id": 8,
        "nombre_disco": "2003 - Time Enough At Last",
        "link": "http://raboninco.com/EHM7"
    },
    {
        "id_disco": 141,
        "id": 8,
        "nombre_disco": "2004 - 50 000 Fall Fans Cant Be Wrong",
        "link": "http://raboninco.com/EHMR"
    },
    {
        "id_disco": 142,
        "id": 8,
        "nombre_disco": "2004 - Interim [CD  album]",
        "link": "http://raboninco.com/EHMi"
    },
    {
        "id_disco": 143,
        "id": 8,
        "nombre_disco": "2005 - Fall Heads Roll [CD  album]",
        "link": "http://raboninco.com/EHyl"
    },
    {
        "id_disco": 144,
        "id": 8,
        "nombre_disco": "2005 - The Complete Peel Sessions 1978-2004",
        "link": "http://raboninco.com/EHz6"
    },
    {
        "id_disco": 145,
        "id": 8,
        "nombre_disco": "2007 - Box Set 1976-2007",
        "link": "http://raboninco.com/EHzR"
    },
    {
        "id_disco": 146,
        "id": 8,
        "nombre_disco": "2007 - Reformation Post TLC [CD  album]",
        "link": "http://raboninco.com/EHzk"
    },
    {
        "id_disco": 147,
        "id": 8,
        "nombre_disco": "2008 - Imperial Wax Solvent [CD  album]",
        "link": "http://raboninco.com/EHzy"
    },
    {
        "id_disco": 148,
        "id": 8,
        "nombre_disco": "2009 - Last Night at The Palais [CD  live album]",
        "link": "http://raboninco.com/EI0Q"
    },
    {
        "id_disco": 149,
        "id": 8,
        "nombre_disco": "2010 - Your Future Our Clutter [CD  album]",
        "link": "http://raboninco.com/EI1D"
    },
    {
        "id_disco": 150,
        "id": 8,
        "nombre_disco": "2011 - Ersatz G.B",
        "link": "http://raboninco.com/EI1T"
    },
    {
        "id_disco": 151,
        "id": 8,
        "nombre_disco": "2013 - Re-Mit",
        "link": "http://raboninco.com/EI1v"
    },
    {
        "id_disco": 152,
        "id": 8,
        "nombre_disco": "Singles and vinyls",
        "link": "http://raboninco.com/EI21"
    },
    {
        "id_disco": 153,
        "id": 9,
        "nombre_disco": "1983 - Alice (EP)",
        "link": "http://raboninco.com/EI3W"
    },
    {
        "id_disco": 154,
        "id": 9,
        "nombre_disco": "1983 - The Reptile House (EP)",
        "link": "http://raboninco.com/EI3q"
    },
    {
        "id_disco": 155,
        "id": 9,
        "nombre_disco": "1984 - Body And Soul (EP)",
        "link": "http://raboninco.com/EI40"
    },
    {
        "id_disco": 156,
        "id": 9,
        "nombre_disco": "1985 - First and Last and Always",
        "link": "http://raboninco.com/EI4C"
    },
    {
        "id_disco": 157,
        "id": 9,
        "nombre_disco": "1987 - Floodland",
        "link": "http://raboninco.com/EI4T"
    },
    {
        "id_disco": 158,
        "id": 9,
        "nombre_disco": "1990 - Vision Thing",
        "link": "http://raboninco.com/EI5O"
    },
    {
        "id_disco": 159,
        "id": 9,
        "nombre_disco": "1991 - I Was Wrong (Promo)",
        "link": "http://raboninco.com/EI5Z"
    },
    {
        "id_disco": 160,
        "id": 9,
        "nombre_disco": "1991 - Tour Thing 91 (Promo)",
        "link": "http://raboninco.com/EI5n"
    },
    {
        "id_disco": 161,
        "id": 9,
        "nombre_disco": "1992 - Some Girls Wander by Mistake",
        "link": "http://raboninco.com/EI67"
    },
    {
        "id_disco": 162,
        "id": 9,
        "nombre_disco": "1993 - A Slight Case of Overbombing",
        "link": "http://raboninco.com/EI6K"
    },
    {
        "id_disco": 163,
        "id": 9,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/EI6T"
    },
    {
        "id_disco": 164,
        "id": 10,
        "nombre_disco": "(1997)Una Pila De Vida",
        "link": "http://raboninco.com/EI9H"
    },
    {
        "id_disco": 165,
        "id": 10,
        "nombre_disco": "(1999)Siempre Libre",
        "link": "http://raboninco.com/EI9X"
    },
    {
        "id_disco": 166,
        "id": 10,
        "nombre_disco": "(2001)Turfshow",
        "link": "http://raboninco.com/EI9r"
    },
    {
        "id_disco": 167,
        "id": 10,
        "nombre_disco": "(2004)Para Vos Para Mi",
        "link": "http://raboninco.com/EIA9"
    },
    {
        "id_disco": 168,
        "id": 10,
        "nombre_disco": "(2005)Para Mi Para Vos (Reversiones)",
        "link": "http://raboninco.com/EIAL"
    },
    {
        "id_disco": 169,
        "id": 10,
        "nombre_disco": "(2006)Turf",
        "link": "http://raboninco.com/EIAe"
    },
    {
        "id_disco": 170,
        "id": 10,
        "nombre_disco": "(2010)El Recorrido 1997-2007",
        "link": "http://raboninco.com/EIAx"
    },
    {
        "id_disco": 171,
        "id": 11,
        "nombre_disco": "2006 - The Coming Of Genocide",
        "link": "http://raboninco.com/EICh"
    },
    {
        "id_disco": 172,
        "id": 11,
        "nombre_disco": "2007 - Of Fracture And Failure",
        "link": "http://raboninco.com/EID2"
    },
    {
        "id_disco": 173,
        "id": 11,
        "nombre_disco": "2009 - Everything Is Fire",
        "link": "http://raboninco.com/EIDE"
    },
    {
        "id_disco": 174,
        "id": 11,
        "nombre_disco": "2011- The Destroyers Of All",
        "link": "http://raboninco.com/FiI5"
    },
    {
        "id_disco": 175,
        "id": 11,
        "nombre_disco": "2013 - Vermis",
        "link": "http://raboninco.com/FiIU"
    },
    {
        "id_disco": 176,
        "id": 12,
        "nombre_disco": "1992 - Vilma Palma e Vampiros",
        "link": "http://raboninco.com/FiMM"
    },
    {
        "id_disco": 177,
        "id": 12,
        "nombre_disco": "1993 - 3980",
        "link": "http://raboninco.com/FiMW"
    },
    {
        "id_disco": 178,
        "id": 12,
        "nombre_disco": "1994 - Fondo Profundo",
        "link": "http://raboninco.com/FiMn"
    },
    {
        "id_disco": 179,
        "id": 12,
        "nombre_disco": "1995 - Sepia  Blanco & Negro",
        "link": "http://raboninco.com/FiMw"
    },
    {
        "id_disco": 180,
        "id": 12,
        "nombre_disco": "1998 - Hecatombe Disco",
        "link": "http://raboninco.com/FiN8"
    },
    {
        "id_disco": 181,
        "id": 12,
        "nombre_disco": "2000 - 7",
        "link": "http://raboninco.com/FiuU"
    },
    {
        "id_disco": 182,
        "id": 12,
        "nombre_disco": "2005 - Histeria",
        "link": "http://raboninco.com/FivC"
    },
    {
        "id_disco": 183,
        "id": 12,
        "nombre_disco": "2010 - 2010",
        "link": "http://raboninco.com/Fivh"
    },
    {
        "id_disco": 184,
        "id": 12,
        "nombre_disco": "2012 - Agarrate Fuerte",
        "link": "http://raboninco.com/Fiw2"
    },
    {
        "id_disco": 185,
        "id": 12,
        "nombre_disco": "Grandes Exitos",
        "link": "http://raboninco.com/FiwR"
    },
    {
        "id_disco": 186,
        "id": 13,
        "nombre_disco": "2003 - Spirit of the Forest",
        "link": "http://raboninco.com/AHDN"
    },
    {
        "id_disco": 187,
        "id": 13,
        "nombre_disco": "2005 - Voice Of Wilderness",
        "link": "http://raboninco.com/AHDo"
    },
    {
        "id_disco": 188,
        "id": 13,
        "nombre_disco": "2006 - Tales Along This Road",
        "link": "http://raboninco.com/AHEP"
    },
    {
        "id_disco": 189,
        "id": 13,
        "nombre_disco": "2007 - Tervaskanto",
        "link": "http://raboninco.com/AHEn"
    },
    {
        "id_disco": 190,
        "id": 13,
        "nombre_disco": "2008 - Korven Kuningas",
        "link": "http://raboninco.com/AHF7"
    },
    {
        "id_disco": 191,
        "id": 13,
        "nombre_disco": "2009 - Karkelo",
        "link": "http://raboninco.com/AHFS"
    },
    {
        "id_disco": 192,
        "id": 13,
        "nombre_disco": "2011 - Ukon Wacka",
        "link": "http://raboninco.com/AHFj"
    },
    {
        "id_disco": 193,
        "id": 13,
        "nombre_disco": "2012 - Manala",
        "link": "http://raboninco.com/AHG7"
    },
    {
        "id_disco": 194,
        "id": 13,
        "nombre_disco": "2015 - Noita",
        "link": "http://raboninco.com/AHGl"
    },
    {
        "id_disco": 195,
        "id": 14,
        "nombre_disco": "2002 - Primera toma",
        "link": "http://raboninco.com/AHHz"
    },
    {
        "id_disco": 196,
        "id": 14,
        "nombre_disco": "2004 - Flores de alquiler",
        "link": "http://raboninco.com/AHIC"
    },
    {
        "id_disco": 197,
        "id": 14,
        "nombre_disco": "2005 - Acustico",
        "link": "http://raboninco.com/AHIV"
    },
    {
        "id_disco": 198,
        "id": 14,
        "nombre_disco": "2006 - El mundo se equivoca",
        "link": "http://raboninco.com/AHIw"
    },
    {
        "id_disco": 199,
        "id": 14,
        "nombre_disco": "2007 - 3 almas un camino",
        "link": "http://raboninco.com/AHJT"
    },
    {
        "id_disco": 200,
        "id": 14,
        "nombre_disco": "2008 - Directo desde Madrid",
        "link": "http://raboninco.com/AHJr"
    },
    {
        "id_disco": 201,
        "id": 14,
        "nombre_disco": "2009 - Sin frenos",
        "link": "http://raboninco.com/AHKB"
    },
    {
        "id_disco": 202,
        "id": 14,
        "nombre_disco": "2011 - Natalia Jimenez",
        "link": "http://raboninco.com/AHKW"
    },
    {
        "id_disco": 203,
        "id": 14,
        "nombre_disco": "2012 - Recuerdame con cartas y algo mas",
        "link": "http://raboninco.com/AHKn"
    },
    {
        "id_disco": 204,
        "id": 14,
        "nombre_disco": "Grandes exitos",
        "link": "http://raboninco.com/AHLL"
    },
    {
        "id_disco": 205,
        "id": 15,
        "nombre_disco": "2002 - Yernos Perfectos",
        "link": "http://raboninco.com/AHYN"
    },
    {
        "id_disco": 206,
        "id": 15,
        "nombre_disco": "2004 - Grasas Totales",
        "link": "http://raboninco.com/AHYv"
    },
    {
        "id_disco": 207,
        "id": 15,
        "nombre_disco": "2005 - Chanchos Amigos",
        "link": "http://raboninco.com/AHZM"
    },
    {
        "id_disco": 208,
        "id": 15,
        "nombre_disco": "2007 - No Es Lo Que Parece",
        "link": "http://raboninco.com/AHZf"
    },
    {
        "id_disco": 209,
        "id": 15,
        "nombre_disco": "2009 - Transpirando Alegría",
        "link": "http://raboninco.com/AHZx"
    },
    {
        "id_disco": 210,
        "id": 15,
        "nombre_disco": "2011 - Bailarín Apocalíptico",
        "link": "http://raboninco.com/AHaN"
    },
    {
        "id_disco": 211,
        "id": 15,
        "nombre_disco": "2015 - Circología",
        "link": "http://raboninco.com/AHap"
    },
    {
        "id_disco": 212,
        "id": 15,
        "nombre_disco": "2016 - Somos Todos Vivos",
        "link": "http://raboninco.com/AHbL"
    },
    {
        "id_disco": 213,
        "id": 15,
        "nombre_disco": "2018 - El Show Más Feliz Del Mundo 20 Años",
        "link": "http://raboninco.com/AHbk"
    },
    {
        "id_disco": 214,
        "id": 16,
        "nombre_disco": "1986 - Pure Fucking Armageddon (EP)",
        "link": "http://raboninco.com/AHd1"
    },
    {
        "id_disco": 215,
        "id": 16,
        "nombre_disco": "1987 - Deathcrush (EP)",
        "link": "http://raboninco.com/AHdH"
    },
    {
        "id_disco": 216,
        "id": 16,
        "nombre_disco": "1993 - Live in Leipzig",
        "link": "http://raboninco.com/AHeI"
    },
    {
        "id_disco": 217,
        "id": 16,
        "nombre_disco": "1994 - De Mysteriis Dom Sathanas",
        "link": "http://raboninco.com/AHek"
    },
    {
        "id_disco": 218,
        "id": 16,
        "nombre_disco": "1995 - Dawn Of The Black Hearts",
        "link": "http://raboninco.com/AHfD"
    },
    {
        "id_disco": 219,
        "id": 16,
        "nombre_disco": "1995 - Out From The Dark (Demo)",
        "link": "http://raboninco.com/AHfo"
    },
    {
        "id_disco": 220,
        "id": 16,
        "nombre_disco": "1997 - Wolfs Lair Abyss (EP)",
        "link": "http://raboninco.com/AHgC"
    },
    {
        "id_disco": 221,
        "id": 16,
        "nombre_disco": "1999 - Mediolanum Capta Est",
        "link": "http://raboninco.com/AHgf"
    },
    {
        "id_disco": 222,
        "id": 16,
        "nombre_disco": "2000 - Grand Declaration Of War",
        "link": "http://raboninco.com/AHh3"
    },
    {
        "id_disco": 223,
        "id": 16,
        "nombre_disco": "2001 - Live in Marseille",
        "link": "http://raboninco.com/AHhM"
    },
    {
        "id_disco": 224,
        "id": 16,
        "nombre_disco": "2004 - Chimera",
        "link": "http://raboninco.com/AHho"
    },
    {
        "id_disco": 225,
        "id": 16,
        "nombre_disco": "2007 - Ordo Ad Chao",
        "link": "http://raboninco.com/AHiD"
    },
    {
        "id_disco": 226,
        "id": 16,
        "nombre_disco": "2009 - Life Eternal (EP)",
        "link": "http://raboninco.com/AHiY"
    },
    {
        "id_disco": 227,
        "id": 16,
        "nombre_disco": "2014 - Esoteric Warfare",
        "link": "http://raboninco.com/AHit"
    },
    {
        "id_disco": 228,
        "id": 16,
        "nombre_disco": "2014 - Grand Declaration Of War (Reissue)",
        "link": "http://raboninco.com/AHjI"
    },
    {
        "id_disco": 229,
        "id": 17,
        "nombre_disco": "1982 - Punk Is A Rotting Corpse (Demo)",
        "link": "http://raboninco.com/AHkF"
    },
    {
        "id_disco": 230,
        "id": 17,
        "nombre_disco": "1985 - Hatred Surge (Demo)",
        "link": "http://raboninco.com/AHkY"
    },
    {
        "id_disco": 231,
        "id": 17,
        "nombre_disco": "1986 - From Enslavement To Obliteration (Demo)",
        "link": "http://raboninco.com/AHlI"
    },
    {
        "id_disco": 232,
        "id": 17,
        "nombre_disco": "1987 - Scum",
        "link": "http://raboninco.com/AHla"
    },
    {
        "id_disco": 233,
        "id": 17,
        "nombre_disco": "1988 - From Enslavement To Obliteration",
        "link": "http://raboninco.com/AHlu"
    },
    {
        "id_disco": 234,
        "id": 17,
        "nombre_disco": "1989 - Live (EP)",
        "link": "http://raboninco.com/AHmD"
    },
    {
        "id_disco": 235,
        "id": 17,
        "nombre_disco": "1989 - Mentally Murdered (EP)",
        "link": "http://raboninco.com/AHmc"
    },
    {
        "id_disco": 236,
        "id": 17,
        "nombre_disco": "1990 - Harmony Corruption",
        "link": "http://raboninco.com/AHmq"
    },
    {
        "id_disco": 237,
        "id": 17,
        "nombre_disco": "1990 - Live Corruption",
        "link": "http://raboninco.com/AHnD"
    },
    {
        "id_disco": 238,
        "id": 17,
        "nombre_disco": "1990 - Suffer The Children (EP)",
        "link": "http://raboninco.com/AHnZ"
    },
    {
        "id_disco": 239,
        "id": 17,
        "nombre_disco": "1991 - Mass Appeal Madness (EP)",
        "link": "http://raboninco.com/AHoE"
    },
    {
        "id_disco": 240,
        "id": 17,
        "nombre_disco": "1992 - Death By Manipulation",
        "link": "http://raboninco.com/AHoc"
    },
    {
        "id_disco": 241,
        "id": 17,
        "nombre_disco": "1992 - Malignant Trait (EP)",
        "link": "http://raboninco.com/AHp9"
    },
    {
        "id_disco": 242,
        "id": 17,
        "nombre_disco": "1992 - The World Keeps Turning (EP)",
        "link": "http://raboninco.com/AHpR"
    },
    {
        "id_disco": 243,
        "id": 17,
        "nombre_disco": "1992 - Utopia Banished",
        "link": "http://raboninco.com/AHq6"
    },
    {
        "id_disco": 244,
        "id": 17,
        "nombre_disco": "1993 - Nazi Punks Fuck Off (EP)",
        "link": "http://raboninco.com/AHqW"
    },
    {
        "id_disco": 245,
        "id": 17,
        "nombre_disco": "1993 - The Peel Sessions",
        "link": "http://raboninco.com/AHqo"
    },
    {
        "id_disco": 246,
        "id": 17,
        "nombre_disco": "1994 - Fear  Emptiness  Despair",
        "link": "http://raboninco.com/AHrG"
    },
    {
        "id_disco": 247,
        "id": 17,
        "nombre_disco": "1995 - Greed Killing (EP)",
        "link": "http://raboninco.com/AHrl"
    },
    {
        "id_disco": 248,
        "id": 17,
        "nombre_disco": "1996 - Diatribes",
        "link": "http://raboninco.com/AHsA"
    },
    {
        "id_disco": 249,
        "id": 17,
        "nombre_disco": "1996 - Napalm Death & At The Gates Cursed To Tour",
        "link": "http://raboninco.com/AHsY"
    },
    {
        "id_disco": 250,
        "id": 17,
        "nombre_disco": "1997 - Breed To Breathe (EP)",
        "link": "http://raboninco.com/AHt0"
    },
    {
        "id_disco": 251,
        "id": 17,
        "nombre_disco": "1997 - Inside The Torn Apart",
        "link": "http://raboninco.com/AHtO"
    },
    {
        "id_disco": 252,
        "id": 17,
        "nombre_disco": "1997 - Napalm Death & Coalesce In Tongues We Speak",
        "link": "http://raboninco.com/AHty"
    },
    {
        "id_disco": 253,
        "id": 17,
        "nombre_disco": "1998 - Bootlegged in Japan",
        "link": "http://raboninco.com/AHuY"
    },
    {
        "id_disco": 254,
        "id": 17,
        "nombre_disco": "1998 - Words from the Exit Wound",
        "link": "http://raboninco.com/AHuv"
    },
    {
        "id_disco": 255,
        "id": 17,
        "nombre_disco": "1999 - Leaders Not Followers (EP)",
        "link": "http://raboninco.com/AHvh"
    },
    {
        "id_disco": 256,
        "id": 17,
        "nombre_disco": "2000 - Enemy Of The Music Business",
        "link": "http://raboninco.com/D1Af"
    },
    {
        "id_disco": 257,
        "id": 17,
        "nombre_disco": "2000 - The Complete Radio One Sessions",
        "link": "http://raboninco.com/D1B2"
    },
    {
        "id_disco": 258,
        "id": 17,
        "nombre_disco": "2002 - Order Of The Leech",
        "link": "http://raboninco.com/D1BI"
    },
    {
        "id_disco": 259,
        "id": 17,
        "nombre_disco": "2002 - Punishment In Capitals",
        "link": "http://raboninco.com/D1C1"
    },
    {
        "id_disco": 260,
        "id": 17,
        "nombre_disco": "2003 - Noise for Musics Sake",
        "link": "http://raboninco.com/D1CK"
    },
    {
        "id_disco": 261,
        "id": 17,
        "nombre_disco": "2004 - Leaders Not Followers  Pt. 2",
        "link": "http://raboninco.com/D1Cj"
    },
    {
        "id_disco": 262,
        "id": 17,
        "nombre_disco": "2005 - The Code Is Red.Long Live the Code",
        "link": "http://raboninco.com/D1DB"
    },
    {
        "id_disco": 263,
        "id": 17,
        "nombre_disco": "2006 - Smear Campaign",
        "link": "http://raboninco.com/D1DW"
    },
    {
        "id_disco": 264,
        "id": 17,
        "nombre_disco": "2009 - Time Waits For No Slave",
        "link": "http://raboninco.com/D1Dr"
    },
    {
        "id_disco": 265,
        "id": 17,
        "nombre_disco": "2012 - Utilitarian",
        "link": "http://raboninco.com/D1E3"
    },
    {
        "id_disco": 266,
        "id": 17,
        "nombre_disco": "2015 - Apex Predator - Easy Meat",
        "link": "http://raboninco.com/D1EH"
    },
    {
        "id_disco": 267,
        "id": 17,
        "nombre_disco": "Singles and split",
        "link": "http://raboninco.com/D1Ew"
    },
    {
        "id_disco": 268,
        "id": 18,
        "nombre_disco": "1999 -NTVG- Sólo de noche",
        "link": "http://raboninco.com/D1GE"
    },
    {
        "id_disco": 269,
        "id": 18,
        "nombre_disco": "2002 -NTVG- Este fuerte viento que sopla",
        "link": "http://raboninco.com/D1GX"
    },
    {
        "id_disco": 270,
        "id": 18,
        "nombre_disco": "2004 -NTVG- Aunque cueste ver el sol",
        "link": "http://raboninco.com/D1Gl"
    },
    {
        "id_disco": 271,
        "id": 18,
        "nombre_disco": "2006 -NTVG- Todo es tan inflamable",
        "link": "http://raboninco.com/D1Gv"
    },
    {
        "id_disco": 272,
        "id": 18,
        "nombre_disco": "2008 -NTVG- El Camino Mas Largo",
        "link": "http://raboninco.com/D1H3"
    },
    {
        "id_disco": 273,
        "id": 18,
        "nombre_disco": "2010 -NTVG- Por Lo Menos Hoy",
        "link": "http://raboninco.com/D1HP"
    },
    {
        "id_disco": 274,
        "id": 18,
        "nombre_disco": "2012 -NTVG- El Calor Del Pleno Invierno",
        "link": "http://raboninco.com/D1Hi"
    },
    {
        "id_disco": 275,
        "id": 18,
        "nombre_disco": "2014 -NTVG- El Tiempo Otra Vez Avanza",
        "link": "http://raboninco.com/D1Ht"
    },
    {
        "id_disco": 276,
        "id": 19,
        "nombre_disco": "1983 - Power In Black (Demo)",
        "link": "http://raboninco.com/D1ID"
    },
    {
        "id_disco": 277,
        "id": 19,
        "nombre_disco": "1984 - Overkill (EP)",
        "link": "http://raboninco.com/D1IV"
    },
    {
        "id_disco": 278,
        "id": 19,
        "nombre_disco": "1985 - Feel The Fire",
        "link": "http://raboninco.com/D1Ik"
    },
    {
        "id_disco": 279,
        "id": 19,
        "nombre_disco": "1987 - !!!Fuck You!!! (EP)",
        "link": "http://raboninco.com/D1J9"
    },
    {
        "id_disco": 280,
        "id": 19,
        "nombre_disco": "1987 - Taking Over",
        "link": "http://raboninco.com/D1Jc"
    },
    {
        "id_disco": 281,
        "id": 19,
        "nombre_disco": "1988 - Under The Influence",
        "link": "http://raboninco.com/D1K2"
    },
    {
        "id_disco": 282,
        "id": 19,
        "nombre_disco": "1989 - The Years Of Decay",
        "link": "http://raboninco.com/D1KL"
    },
    {
        "id_disco": 283,
        "id": 19,
        "nombre_disco": "1990 - Hello From The Gutter",
        "link": "http://raboninco.com/D1L8"
    },
    {
        "id_disco": 284,
        "id": 19,
        "nombre_disco": "1991 - Horrorscope",
        "link": "http://raboninco.com/D1LQ"
    },
    {
        "id_disco": 285,
        "id": 19,
        "nombre_disco": "1993 - I Hear Black",
        "link": "http://raboninco.com/D1Ld"
    },
    {
        "id_disco": 286,
        "id": 19,
        "nombre_disco": "1994 - W.F.O",
        "link": "http://raboninco.com/D1Ls"
    },
    {
        "id_disco": 287,
        "id": 19,
        "nombre_disco": "1995 - Wrecking Your Neck",
        "link": "http://raboninco.com/D1M5"
    },
    {
        "id_disco": 288,
        "id": 19,
        "nombre_disco": "1996 - !!!Fuck You!!! and Then Some",
        "link": "http://raboninco.com/D1MS"
    },
    {
        "id_disco": 289,
        "id": 19,
        "nombre_disco": "1996 - The Killing Kind",
        "link": "http://raboninco.com/D1Mw"
    },
    {
        "id_disco": 290,
        "id": 19,
        "nombre_disco": "1997 - From The Underground And Below",
        "link": "http://raboninco.com/D1NA"
    },
    {
        "id_disco": 291,
        "id": 19,
        "nombre_disco": "1999 - Coverkill",
        "link": "http://raboninco.com/D1NT"
    },
    {
        "id_disco": 292,
        "id": 19,
        "nombre_disco": "1999 - Necroshine",
        "link": "http://raboninco.com/D1No"
    },
    {
        "id_disco": 293,
        "id": 19,
        "nombre_disco": "2000 - Bloodletting",
        "link": "http://raboninco.com/D1O7"
    },
    {
        "id_disco": 294,
        "id": 19,
        "nombre_disco": "2002 - Extended Versions",
        "link": "http://raboninco.com/D1OT"
    },
    {
        "id_disco": 295,
        "id": 19,
        "nombre_disco": "2002 - Wrecking Everything",
        "link": "http://raboninco.com/D1Oe"
    },
    {
        "id_disco": 296,
        "id": 19,
        "nombre_disco": "2003 - Killbox 13",
        "link": "http://raboninco.com/D1P0"
    },
    {
        "id_disco": 297,
        "id": 19,
        "nombre_disco": "2005 - ReliXIV",
        "link": "http://raboninco.com/D1PM"
    },
    {
        "id_disco": 298,
        "id": 19,
        "nombre_disco": "2007 - Immortalis",
        "link": "http://raboninco.com/D1Pa"
    },
    {
        "id_disco": 299,
        "id": 19,
        "nombre_disco": "2010 - Ironbound",
        "link": "http://raboninco.com/D1Ps"
    },
    {
        "id_disco": 300,
        "id": 19,
        "nombre_disco": "2012 - 6 Songs (EP)",
        "link": "http://raboninco.com/D1Q4"
    },
    {
        "id_disco": 301,
        "id": 19,
        "nombre_disco": "2012 - The Electric Age",
        "link": "http://raboninco.com/D1QP"
    },
    {
        "id_disco": 302,
        "id": 19,
        "nombre_disco": "2014 - White Devil Armory [Limited Edition]",
        "link": "http://raboninco.com/D1Qx"
    },
    {
        "id_disco": 303,
        "id": 19,
        "nombre_disco": "2015 - Historikill 1995 - 2007",
        "link": "http://raboninco.com/D1Ru"
    },
    {
        "id_disco": 304,
        "id": 19,
        "nombre_disco": "2017 - The Grinding Wheel",
        "link": "http://raboninco.com/D1SE"
    },
    {
        "id_disco": 305,
        "id": 19,
        "nombre_disco": "2019 - The Wings of War",
        "link": "http://raboninco.com/D1Sj"
    },
    {
        "id_disco": 306,
        "id": 20,
        "nombre_disco": "1992 - La Chica Dorada",
        "link": "http://raboninco.com/D1Ta"
    },
    {
        "id_disco": 307,
        "id": 20,
        "nombre_disco": "1993 - 24 Kilates",
        "link": "http://raboninco.com/D1U2"
    },
    {
        "id_disco": 308,
        "id": 20,
        "nombre_disco": "1995 - El Tiempo Es Oro",
        "link": "http://raboninco.com/D1UQ"
    },
    {
        "id_disco": 309,
        "id": 20,
        "nombre_disco": "1996 - Planeta Paulina",
        "link": "http://raboninco.com/D1Ud"
    },
    {
        "id_disco": 310,
        "id": 20,
        "nombre_disco": "2000 - Paulina",
        "link": "http://raboninco.com/D1V4"
    },
    {
        "id_disco": 311,
        "id": 20,
        "nombre_disco": "2002 - Border Girl",
        "link": "http://raboninco.com/D1VW"
    },
    {
        "id_disco": 312,
        "id": 20,
        "nombre_disco": "2004 - Pau-Latina",
        "link": "http://raboninco.com/D1Vr"
    },
    {
        "id_disco": 313,
        "id": 20,
        "nombre_disco": "2005 - Las Número 1",
        "link": "http://raboninco.com/D1Wg"
    },
    {
        "id_disco": 314,
        "id": 20,
        "nombre_disco": "2005 - Maxi-Single",
        "link": "http://raboninco.com/D1Wu"
    },
    {
        "id_disco": 315,
        "id": 20,
        "nombre_disco": "2005 - Siempre Tuya Desde La Raiz",
        "link": "http://raboninco.com/D1XA"
    },
    {
        "id_disco": 316,
        "id": 20,
        "nombre_disco": "2006 - Ananda",
        "link": "http://raboninco.com/D1XP"
    },
    {
        "id_disco": 317,
        "id": 20,
        "nombre_disco": "2006 - Paulina Remixes",
        "link": "http://raboninco.com/D1Xj"
    },
    {
        "id_disco": 318,
        "id": 20,
        "nombre_disco": "2007 - Serie Verde - Paulina Rubio",
        "link": "http://raboninco.com/D1Y7"
    },
    {
        "id_disco": 319,
        "id": 20,
        "nombre_disco": "2008 - Celebridades",
        "link": "http://raboninco.com/D1YP"
    },
    {
        "id_disco": 320,
        "id": 20,
        "nombre_disco": "2009 - Gran City Pop",
        "link": "http://raboninco.com/D1Yq"
    },
    {
        "id_disco": 321,
        "id": 20,
        "nombre_disco": "2009 - Gran Pop Hits",
        "link": "http://raboninco.com/D1ZB"
    },
    {
        "id_disco": 322,
        "id": 20,
        "nombre_disco": "2010 - Gran City Pop_ The Remixes",
        "link": "http://raboninco.com/D1ZY"
    },
    {
        "id_disco": 323,
        "id": 20,
        "nombre_disco": "2011 - Brava!",
        "link": "http://raboninco.com/D1Zn"
    },
    {
        "id_disco": 324,
        "id": 20,
        "nombre_disco": "2012 - Bravísima!",
        "link": "http://raboninco.com/D1a8"
    },
    {
        "id_disco": 325,
        "id": 20,
        "nombre_disco": "2019 - Deseo (Edición Especial)",
        "link": "http://raboninco.com/D1aY"
    },
    {
        "id_disco": 326,
        "id": 21,
        "nombre_disco": "2001 - Arriba las manos",
        "link": "http://raboninco.com/D1bg"
    },
    {
        "id_disco": 327,
        "id": 21,
        "nombre_disco": "2002 - En Vivo Hasta la Muerte",
        "link": "http://raboninco.com/D1bx"
    },
    {
        "id_disco": 328,
        "id": 21,
        "nombre_disco": "2002 - Solo le pido a Dios",
        "link": "http://raboninco.com/D1cI"
    },
    {
        "id_disco": 329,
        "id": 21,
        "nombre_disco": "2003 - Criando Cuervos",
        "link": "http://raboninco.com/D1ca"
    },
    {
        "id_disco": 330,
        "id": 21,
        "nombre_disco": "2004 - El poder de la guadaña",
        "link": "http://raboninco.com/D1cs"
    },
    {
        "id_disco": 331,
        "id": 21,
        "nombre_disco": "2007 - Perdonalos  no saben lo que hacen",
        "link": "http://raboninco.com/D1dF"
    },
    {
        "id_disco": 332,
        "id": 21,
        "nombre_disco": "2009 - Difusión 2009",
        "link": "http://raboninco.com/D1db"
    },
    {
        "id_disco": 333,
        "id": 22,
        "nombre_disco": "2007 - Emigrate",
        "link": "http://raboninco.com/9SJX"
    },
    {
        "id_disco": 334,
        "id": 22,
        "nombre_disco": "2014 - Silent So Long",
        "link": "http://raboninco.com/9SKZ"
    },
    {
        "id_disco": 335,
        "id": 22,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9SKp"
    },
    {
        "id_disco": 336,
        "id": 23,
        "nombre_disco": "2010 - Romances científicos",
        "link": "http://raboninco.com/9SQj"
    },
    {
        "id_disco": 337,
        "id": 23,
        "nombre_disco": "2014 - Intruso Armónico",
        "link": "http://raboninco.com/9SR8"
    },
    {
        "id_disco": 338,
        "id": 24,
        "nombre_disco": "1983 - Rehearsal (Demo)",
        "link": "http://raboninco.com/9SUE"
    },
    {
        "id_disco": 339,
        "id": 24,
        "nombre_disco": "1984 - A Lesson in Violence (Demo)",
        "link": "http://raboninco.com/9SUM"
    },
    {
        "id_disco": 340,
        "id": 24,
        "nombre_disco": "1985 - Bonded by Blood",
        "link": "http://raboninco.com/9SUl"
    },
    {
        "id_disco": 341,
        "id": 24,
        "nombre_disco": "1985 - The Ultimate Revenge Combat Tour Live (04-03-85)",
        "link": "http://raboninco.com/9SV4"
    },
    {
        "id_disco": 342,
        "id": 24,
        "nombre_disco": "1986 - Pleasures of the Flesh (Demo)",
        "link": "http://raboninco.com/9SVK"
    },
    {
        "id_disco": 343,
        "id": 24,
        "nombre_disco": "1987 - Pleasures of the Flesh",
        "link": "http://raboninco.com/9SVe"
    },
    {
        "id_disco": 344,
        "id": 24,
        "nombre_disco": "1989 - Fabulous Disaster",
        "link": "http://raboninco.com/9SVw"
    },
    {
        "id_disco": 345,
        "id": 24,
        "nombre_disco": "1990 - Impact is Imminent",
        "link": "http://raboninco.com/9SWS"
    },
    {
        "id_disco": 346,
        "id": 24,
        "nombre_disco": "1990 - Objection Overruled (EP)",
        "link": "http://raboninco.com/9SWn"
    },
    {
        "id_disco": 347,
        "id": 24,
        "nombre_disco": "1991 - Good Violent Friendly Fun",
        "link": "http://raboninco.com/9SX3"
    },
    {
        "id_disco": 348,
        "id": 24,
        "nombre_disco": "1992 - Force of Habit",
        "link": "http://raboninco.com/9T9A"
    },
    {
        "id_disco": 349,
        "id": 24,
        "nombre_disco": "1992 - Lessons In Violence (The Best Of. Exodus)",
        "link": "http://raboninco.com/9TBN"
    },
    {
        "id_disco": 350,
        "id": 24,
        "nombre_disco": "1997 - Another Lesson In Violence",
        "link": "http://raboninco.com/9TBZ"
    },
    {
        "id_disco": 351,
        "id": 24,
        "nombre_disco": "2004 - Tempo Of The Damned",
        "link": "http://raboninco.com/9TC3"
    },
    {
        "id_disco": 352,
        "id": 24,
        "nombre_disco": "2005 - Live at the DNA",
        "link": "http://raboninco.com/9TCL"
    },
    {
        "id_disco": 353,
        "id": 24,
        "nombre_disco": "2005 - Shovel Head Kill Machine",
        "link": "http://raboninco.com/9TCc"
    },
    {
        "id_disco": 354,
        "id": 24,
        "nombre_disco": "2007 - The Atrocity Exhibition. Exhibit A",
        "link": "http://raboninco.com/9TDG"
    },
    {
        "id_disco": 355,
        "id": 24,
        "nombre_disco": "2008 - Let There Be Blood",
        "link": "http://raboninco.com/9TED"
    },
    {
        "id_disco": 356,
        "id": 24,
        "nombre_disco": "2010 - Exhibit B The Human Condition",
        "link": "http://raboninco.com/9TEy"
    },
    {
        "id_disco": 357,
        "id": 24,
        "nombre_disco": "2010 - Shovel Headed Tour Machine",
        "link": "http://raboninco.com/9TFa"
    },
    {
        "id_disco": 358,
        "id": 24,
        "nombre_disco": "2014 - Blood In  Blood Out",
        "link": "http://raboninco.com/9TGD"
    },
    {
        "id_disco": 359,
        "id": 24,
        "nombre_disco": "2015 - Demo 82 + Turk Street (Demo) 84",
        "link": "http://raboninco.com/9THu"
    },
    {
        "id_disco": 360,
        "id": 24,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9TMZ"
    },
    {
        "id_disco": 361,
        "id": 25,
        "nombre_disco": "1985-1998 - Fabiana Cantilo compilado",
        "link": "http://raboninco.com/9TOr"
    },
    {
        "id_disco": 362,
        "id": 25,
        "nombre_disco": "2002-2015 - Fabiana Cantilo compilado",
        "link": "http://raboninco.com/9TOu"
    },
    {
        "id_disco": 363,
        "id": 25,
        "nombre_disco": "2005 - Inconsciente Colectivo",
        "link": "http://raboninco.com/9TPD"
    },
    {
        "id_disco": 364,
        "id": 25,
        "nombre_disco": "2009 - En la Vereda del Sol",
        "link": "http://raboninco.com/9TPd"
    },
    {
        "id_disco": 365,
        "id": 26,
        "nombre_disco": "1991 - Demo 91",
        "link": "http://raboninco.com/9TQc"
    },
    {
        "id_disco": 366,
        "id": 26,
        "nombre_disco": "1991 - Demo 1 (Lost Souls)",
        "link": "http://raboninco.com/9TR6"
    },
    {
        "id_disco": 367,
        "id": 26,
        "nombre_disco": "1992 - Soul Of A New Machine",
        "link": "http://raboninco.com/9TRX"
    },
    {
        "id_disco": 368,
        "id": 26,
        "nombre_disco": "1993 - Fear Is The Mindkiller (EP)",
        "link": "http://raboninco.com/9TRe"
    },
    {
        "id_disco": 369,
        "id": 26,
        "nombre_disco": "1995 - Demanufacture",
        "link": "http://raboninco.com/9TRv"
    },
    {
        "id_disco": 370,
        "id": 26,
        "nombre_disco": "1997 - Burn",
        "link": "http://raboninco.com/9TSJ"
    },
    {
        "id_disco": 371,
        "id": 26,
        "nombre_disco": "1997 - Carmageddon (feat Lee Groves)",
        "link": "http://raboninco.com/9TuT"
    },
    {
        "id_disco": 372,
        "id": 26,
        "nombre_disco": "1997 - Remanufacture (Cloning Technology)",
        "link": "http://raboninco.com/9Tul"
    },
    {
        "id_disco": 373,
        "id": 26,
        "nombre_disco": "1997 - The Gabber Mixes (EP)",
        "link": "http://raboninco.com/9TvD"
    },
    {
        "id_disco": 374,
        "id": 26,
        "nombre_disco": "1998 - Obsolete",
        "link": "http://raboninco.com/9TvW"
    },
    {
        "id_disco": 375,
        "id": 26,
        "nombre_disco": "1998 - Revolution (EP)",
        "link": "http://raboninco.com/9TwW"
    },
    {
        "id_disco": 376,
        "id": 26,
        "nombre_disco": "1999 - Messiah",
        "link": "http://raboninco.com/9Twx"
    },
    {
        "id_disco": 377,
        "id": 26,
        "nombre_disco": "2001 - Digimortal (Digipak)",
        "link": "http://raboninco.com/9TxN"
    },
    {
        "id_disco": 378,
        "id": 26,
        "nombre_disco": "2001 - Digital Connectivity (Compilation)",
        "link": "http://raboninco.com/9Txp"
    },
    {
        "id_disco": 379,
        "id": 26,
        "nombre_disco": "2001 - Linchpin (Special Australian Tour EP)",
        "link": "http://raboninco.com/9TyK"
    },
    {
        "id_disco": 380,
        "id": 26,
        "nombre_disco": "2002 - Concrete",
        "link": "http://raboninco.com/9Tyv"
    },
    {
        "id_disco": 381,
        "id": 26,
        "nombre_disco": "2003 - Hatefiles",
        "link": "http://raboninco.com/9TzN"
    },
    {
        "id_disco": 382,
        "id": 26,
        "nombre_disco": "2004 - Archetype",
        "link": "http://raboninco.com/9Tza"
    },
    {
        "id_disco": 383,
        "id": 26,
        "nombre_disco": "2004 - Mischief Invasion",
        "link": "http://raboninco.com/9U0L"
    },
    {
        "id_disco": 384,
        "id": 26,
        "nombre_disco": "2005 - Live On The Sunset Strip (EP)",
        "link": "http://raboninco.com/9UM3"
    },
    {
        "id_disco": 385,
        "id": 26,
        "nombre_disco": "2005 - Transgression",
        "link": "http://raboninco.com/9UMP"
    },
    {
        "id_disco": 386,
        "id": 26,
        "nombre_disco": "2006 - 15 Years Of Fear Tour (EP)",
        "link": "http://raboninco.com/9UMn"
    },
    {
        "id_disco": 387,
        "id": 26,
        "nombre_disco": "2006 - The Best Of Fear Factory (Compilation)",
        "link": "http://raboninco.com/9UN4"
    },
    {
        "id_disco": 388,
        "id": 27,
        "nombre_disco": "2011 - Ultimos Dias",
        "link": "http://raboninco.com/9UOL"
    },
    {
        "id_disco": 389,
        "id": 27,
        "nombre_disco": "2017 - Fin",
        "link": "http://raboninco.com/9UOl"
    },
    {
        "id_disco": 390,
        "id": 27,
        "nombre_disco": "2017 - The Rainmaker",
        "link": "http://raboninco.com/9UOy"
    },
    {
        "id_disco": 391,
        "id": 28,
        "nombre_disco": "1985 - Boquitas Pintadas",
        "link": "http://raboninco.com/9URj"
    },
    {
        "id_disco": 392,
        "id": 28,
        "nombre_disco": "1989 - Qué Hago Aquí",
        "link": "http://raboninco.com/9US9"
    },
    {
        "id_disco": 393,
        "id": 28,
        "nombre_disco": "1991 - Tú Ángel de la Guarda",
        "link": "http://raboninco.com/9USP"
    },
    {
        "id_disco": 394,
        "id": 28,
        "nombre_disco": "1992 - Me Siento Tan Sola",
        "link": "http://raboninco.com/9USs"
    },
    {
        "id_disco": 395,
        "id": 28,
        "nombre_disco": "1994 - Mas Turbada Que Nunca",
        "link": "http://raboninco.com/9UT7"
    },
    {
        "id_disco": 396,
        "id": 28,
        "nombre_disco": "1995 - Si Me Llevas Contigo",
        "link": "http://raboninco.com/9UTM"
    },
    {
        "id_disco": 397,
        "id": 28,
        "nombre_disco": "1999 - No Soy Monedita de Oro",
        "link": "http://raboninco.com/9UTg"
    },
    {
        "id_disco": 398,
        "id": 28,
        "nombre_disco": "2004 - Como Nace el Universo",
        "link": "http://raboninco.com/9UUI"
    },
    {
        "id_disco": 399,
        "id": 28,
        "nombre_disco": "2006 - La Trayectoria",
        "link": "http://raboninco.com/9UUc"
    },
    {
        "id_disco": 400,
        "id": 28,
        "nombre_disco": "2007 - Una Rosa Blu",
        "link": "http://raboninco.com/9UUs"
    },
    {
        "id_disco": 401,
        "id": 28,
        "nombre_disco": "2009 - Lo Esencial de Gloria Trevi",
        "link": "http://raboninco.com/9UV1"
    },
    {
        "id_disco": 402,
        "id": 28,
        "nombre_disco": "2011 - Gloria [Deluxe Edition]",
        "link": "http://raboninco.com/9UVR"
    },
    {
        "id_disco": 403,
        "id": 28,
        "nombre_disco": "2012 - Gloria en Vivo (Deluxe Edition)",
        "link": "http://raboninco.com/9Ufz"
    },
    {
        "id_disco": 404,
        "id": 28,
        "nombre_disco": "2013 - De Película",
        "link": "http://raboninco.com/9UgB"
    },
    {
        "id_disco": 405,
        "id": 28,
        "nombre_disco": "2014 - Soy Mujer",
        "link": "http://raboninco.com/9UgP"
    },
    {
        "id_disco": 406,
        "id": 28,
        "nombre_disco": "2015 - El Amor [Deluxe]",
        "link": "http://raboninco.com/9Ugi"
    },
    {
        "id_disco": 407,
        "id": 28,
        "nombre_disco": "2016 - Inmortal (En Vivo) [Deluxe]",
        "link": "http://raboninco.com/9UhH"
    },
    {
        "id_disco": 408,
        "id": 28,
        "nombre_disco": "2017 - Versus",
        "link": "http://raboninco.com/9UhZ"
    },
    {
        "id_disco": 409,
        "id": 28,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9Uhn"
    },
    {
        "id_disco": 410,
        "id": 29,
        "nombre_disco": "2003 - Gothic Electronic Anthems",
        "link": "http://raboninco.com/9UiY"
    },
    {
        "id_disco": 411,
        "id": 29,
        "nombre_disco": "2005 - Empire Of Dark Salvation",
        "link": "http://raboninco.com/9Uit"
    },
    {
        "id_disco": 412,
        "id": 29,
        "nombre_disco": "2008 - Happiness In Darkness",
        "link": "http://raboninco.com/9UjH"
    },
    {
        "id_disco": 413,
        "id": 29,
        "nombre_disco": "2011 - Anima Inferna",
        "link": "http://raboninco.com/9Uje"
    },
    {
        "id_disco": 414,
        "id": 29,
        "nombre_disco": "2013 - Utopia",
        "link": "http://raboninco.com/9Uk2"
    },
    {
        "id_disco": 415,
        "id": 30,
        "nombre_disco": "1993 - Demo Tape (Demo)",
        "link": "http://raboninco.com/9Ukx"
    },
    {
        "id_disco": 416,
        "id": 30,
        "nombre_disco": "1994 - Lunar Strain (2005 Reissue)",
        "link": "http://raboninco.com/9UlN"
    },
    {
        "id_disco": 417,
        "id": 30,
        "nombre_disco": "1994 - Subterranean (EP) (2005 Reissue)",
        "link": "http://raboninco.com/9Ulr"
    },
    {
        "id_disco": 418,
        "id": 30,
        "nombre_disco": "1996 - The Jester Race (2008 Re-Releases)",
        "link": "http://raboninco.com/9UmH"
    },
    {
        "id_disco": 419,
        "id": 30,
        "nombre_disco": "1997 - Whoracle (Deluxe Edition)",
        "link": "http://raboninco.com/9Umd"
    },
    {
        "id_disco": 420,
        "id": 30,
        "nombre_disco": "1999 - Colony (Japanese Edition)",
        "link": "http://raboninco.com/9Un0"
    },
    {
        "id_disco": 421,
        "id": 30,
        "nombre_disco": "2000 - Clayman (Reloaded Edition)",
        "link": "http://raboninco.com/9UnG"
    },
    {
        "id_disco": 422,
        "id": 30,
        "nombre_disco": "2001 - The Tokyo Showdown (Live)",
        "link": "http://raboninco.com/9Uwc"
    },
    {
        "id_disco": 423,
        "id": 30,
        "nombre_disco": "2002 - Cloud Connnected",
        "link": "http://raboninco.com/9UxL"
    },
    {
        "id_disco": 424,
        "id": 30,
        "nombre_disco": "2002 - Reroute To Remain",
        "link": "http://raboninco.com/9UxY"
    },
    {
        "id_disco": 425,
        "id": 30,
        "nombre_disco": "2003 - Trigger (EP)",
        "link": "http://raboninco.com/9UyE"
    },
    {
        "id_disco": 426,
        "id": 30,
        "nombre_disco": "2004 - Soundtrack To Your Escape (Korean Edition)",
        "link": "http://raboninco.com/9UyT"
    },
    {
        "id_disco": 427,
        "id": 30,
        "nombre_disco": "2005 - Used & Abused. In Live We Trust (Bonus) (Live)",
        "link": "http://raboninco.com/9Uyw"
    },
    {
        "id_disco": 428,
        "id": 30,
        "nombre_disco": "2006 - Come Clarity (Limited Edition)",
        "link": "http://raboninco.com/9UzC"
    },
    {
        "id_disco": 429,
        "id": 30,
        "nombre_disco": "2006 - Live at Rock am Ring (Live)",
        "link": "http://raboninco.com/9UzO"
    },
    {
        "id_disco": 430,
        "id": 30,
        "nombre_disco": "2007 - Abnegation (EP)",
        "link": "http://raboninco.com/9V0B"
    },
    {
        "id_disco": 431,
        "id": 30,
        "nombre_disco": "2008 - A Sense Of Purpose",
        "link": "http://raboninco.com/9V1X"
    },
    {
        "id_disco": 432,
        "id": 30,
        "nombre_disco": "2008 - The Mirrors Truth (EP)",
        "link": "http://raboninco.com/9V1r"
    },
    {
        "id_disco": 433,
        "id": 30,
        "nombre_disco": "2011 - 8 songs (EP)",
        "link": "http://raboninco.com/9V2K"
    },
    {
        "id_disco": 434,
        "id": 30,
        "nombre_disco": "2011 - Sounds Of A Playground Fading (Japan Edition)",
        "link": "http://raboninco.com/9V2c"
    },
    {
        "id_disco": 435,
        "id": 30,
        "nombre_disco": "2014 - Siren Charms (Limited Edition)",
        "link": "http://raboninco.com/9V2r"
    },
    {
        "id_disco": 436,
        "id": 30,
        "nombre_disco": "2016 - Battles",
        "link": "http://raboninco.com/9V32"
    },
    {
        "id_disco": 437,
        "id": 30,
        "nombre_disco": "2016 - Sounds from the Heart of Gothenburg",
        "link": "http://raboninco.com/9V3S"
    },
    {
        "id_disco": 438,
        "id": 30,
        "nombre_disco": "2019 - I  the Mask (Limited Edition)",
        "link": "http://raboninco.com/9V3u"
    },
    {
        "id_disco": 439,
        "id": 30,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9V47"
    },
    {
        "id_disco": 440,
        "id": 31,
        "nombre_disco": "1988 - 88 Demo (Demo)",
        "link": "http://raboninco.com/9V4h"
    },
    {
        "id_disco": 441,
        "id": 31,
        "nombre_disco": "1989 - Immolation (Demo)",
        "link": "http://raboninco.com/9V4z"
    },
    {
        "id_disco": 442,
        "id": 31,
        "nombre_disco": "1991 - Dawn of Possession",
        "link": "http://raboninco.com/9V5I"
    },
    {
        "id_disco": 443,
        "id": 31,
        "nombre_disco": "1994 - 1994 Promotional Demo (Demo)",
        "link": "http://raboninco.com/9V5a"
    },
    {
        "id_disco": 444,
        "id": 31,
        "nombre_disco": "1995 - Stepping on Angels. Before Dawn",
        "link": "http://raboninco.com/9VXR"
    },
    {
        "id_disco": 445,
        "id": 31,
        "nombre_disco": "1996 - Here In After",
        "link": "http://raboninco.com/9VXh"
    },
    {
        "id_disco": 446,
        "id": 31,
        "nombre_disco": "1999 - Failures for Gods",
        "link": "http://raboninco.com/9VXx"
    },
    {
        "id_disco": 447,
        "id": 31,
        "nombre_disco": "2000 - Close To A World Below",
        "link": "http://raboninco.com/9VYW"
    },
    {
        "id_disco": 448,
        "id": 31,
        "nombre_disco": "2002 - Unholy Cult",
        "link": "http://raboninco.com/9VZ0"
    },
    {
        "id_disco": 449,
        "id": 31,
        "nombre_disco": "2005 - Harnessing Ruin",
        "link": "http://raboninco.com/9VZL"
    },
    {
        "id_disco": 450,
        "id": 31,
        "nombre_disco": "2007 - Hope And Horror (EP)",
        "link": "http://raboninco.com/9VZn"
    },
    {
        "id_disco": 451,
        "id": 31,
        "nombre_disco": "2007 - Shadows In The Light",
        "link": "http://raboninco.com/9Va7"
    },
    {
        "id_disco": 452,
        "id": 31,
        "nombre_disco": "2010 - Majesty And Decay",
        "link": "http://raboninco.com/9Vaa"
    },
    {
        "id_disco": 453,
        "id": 31,
        "nombre_disco": "2011 - Providence (EP)",
        "link": "http://raboninco.com/9Vap"
    },
    {
        "id_disco": 454,
        "id": 31,
        "nombre_disco": "2013 - Kingdom Of Conspiracy",
        "link": "http://raboninco.com/9VbI"
    },
    {
        "id_disco": 455,
        "id": 31,
        "nombre_disco": "2017 - Atonement",
        "link": "http://raboninco.com/9Vbf"
    },
    {
        "id_disco": 456,
        "id": 32,
        "nombre_disco": "1996 - El Equilibrio De Los Jaguares",
        "link": "http://raboninco.com/9Vcm"
    },
    {
        "id_disco": 457,
        "id": 32,
        "nombre_disco": "1999 - Bajo El Azul De Tu Misterio",
        "link": "http://raboninco.com/9Vd0"
    },
    {
        "id_disco": 458,
        "id": 32,
        "nombre_disco": "1999 - Bajo El Azul De Tu Misterio (En Vivo)",
        "link": "http://raboninco.com/9VdI"
    },
    {
        "id_disco": 459,
        "id": 32,
        "nombre_disco": "2001 - Cuando La Sangre Galopa",
        "link": "http://raboninco.com/9VdZ"
    },
    {
        "id_disco": 460,
        "id": 32,
        "nombre_disco": "2002 - El Primer Instinto",
        "link": "http://raboninco.com/9Vdn"
    },
    {
        "id_disco": 461,
        "id": 32,
        "nombre_disco": "2005 - Crónicas De Un Laberinto",
        "link": "http://raboninco.com/9W95"
    },
    {
        "id_disco": 462,
        "id": 32,
        "nombre_disco": "2008 - 45",
        "link": "http://raboninco.com/9W9l"
    },
    {
        "id_disco": 463,
        "id": 33,
        "nombre_disco": "2001 - Probame",
        "link": "http://raboninco.com/9WAk"
    },
    {
        "id_disco": 464,
        "id": 33,
        "nombre_disco": "2004 - Vicio",
        "link": "http://raboninco.com/9WB4"
    },
    {
        "id_disco": 465,
        "id": 33,
        "nombre_disco": "2006 - Sangre",
        "link": "http://raboninco.com/9WBR"
    },
    {
        "id_disco": 466,
        "id": 33,
        "nombre_disco": "2011 - Abstinencia",
        "link": "http://raboninco.com/9WBe"
    },
    {
        "id_disco": 467,
        "id": 33,
        "nombre_disco": "2014 - Pánico",
        "link": "http://raboninco.com/9WBu"
    },
    {
        "id_disco": 468,
        "id": 34,
        "nombre_disco": "1979 - An Ideal For Living (EP)",
        "link": "http://raboninco.com/9WCu"
    },
    {
        "id_disco": 469,
        "id": 34,
        "nombre_disco": "1979 - Unknown Pleasures",
        "link": "http://raboninco.com/9WD8"
    },
    {
        "id_disco": 470,
        "id": 34,
        "nombre_disco": "1980 - Closer",
        "link": "http://raboninco.com/9WDM"
    },
    {
        "id_disco": 471,
        "id": 34,
        "nombre_disco": "1981 - Still",
        "link": "http://raboninco.com/9WE0"
    },
    {
        "id_disco": 472,
        "id": 34,
        "nombre_disco": "1986 - The Peel Sessions (EP)",
        "link": "http://raboninco.com/9WEC"
    },
    {
        "id_disco": 473,
        "id": 34,
        "nombre_disco": "1988 - Substance",
        "link": "http://raboninco.com/9WEV"
    },
    {
        "id_disco": 474,
        "id": 34,
        "nombre_disco": "1990 - The Peel Sessions",
        "link": "http://raboninco.com/9WEn"
    },
    {
        "id_disco": 475,
        "id": 34,
        "nombre_disco": "1994 - Warsaw",
        "link": "http://raboninco.com/9WF3"
    },
    {
        "id_disco": 476,
        "id": 34,
        "nombre_disco": "1995 - Permanent Joy Division 1995",
        "link": "http://raboninco.com/9WFI"
    },
    {
        "id_disco": 477,
        "id": 34,
        "nombre_disco": "1997 - Heart and Soul",
        "link": "http://raboninco.com/9WFW"
    },
    {
        "id_disco": 478,
        "id": 34,
        "nombre_disco": "1999 - Preston 28 February 1980",
        "link": "http://raboninco.com/9WFj"
    },
    {
        "id_disco": 479,
        "id": 34,
        "nombre_disco": "2000 - The Complete BBC Recordings",
        "link": "http://raboninco.com/9WFw"
    },
    {
        "id_disco": 480,
        "id": 34,
        "nombre_disco": "2001 - Les Bains Douches 18 December 1979",
        "link": "http://raboninco.com/9WGN"
    },
    {
        "id_disco": 481,
        "id": 34,
        "nombre_disco": "2007 - Let The Movie Begin",
        "link": "http://raboninco.com/9WGc"
    },
    {
        "id_disco": 482,
        "id": 34,
        "nombre_disco": "2007 - Martin Hannetts Personal Mixes",
        "link": "http://raboninco.com/9WH2"
    },
    {
        "id_disco": 483,
        "id": 34,
        "nombre_disco": "2008 - The Best Of Joy Division",
        "link": "http://raboninco.com/9WHJ"
    },
    {
        "id_disco": 484,
        "id": 34,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9WHj"
    },
    {
        "id_disco": 485,
        "id": 35,
        "nombre_disco": "2003 - Holy Roller Novocaine",
        "link": "http://raboninco.com/9WoQ"
    },
    {
        "id_disco": 486,
        "id": 35,
        "nombre_disco": "2003 - What I Saw (EP)",
        "link": "http://raboninco.com/9WpA"
    },
    {
        "id_disco": 487,
        "id": 35,
        "nombre_disco": "2003 - Youth and Young Manhood",
        "link": "http://raboninco.com/9WpX"
    },
    {
        "id_disco": 488,
        "id": 35,
        "nombre_disco": "2004 - Aha Shake Heartbreak",
        "link": "http://raboninco.com/9Wpu"
    },
    {
        "id_disco": 489,
        "id": 35,
        "nombre_disco": "2006 - Day Old Belgian Blues (EP)",
        "link": "http://raboninco.com/9WqF"
    },
    {
        "id_disco": 490,
        "id": 35,
        "nombre_disco": "2007 - Because of the times",
        "link": "http://raboninco.com/9WqT"
    },
    {
        "id_disco": 491,
        "id": 35,
        "nombre_disco": "2008 - Only By The Night",
        "link": "http://raboninco.com/9Wqk"
    },
    {
        "id_disco": 492,
        "id": 35,
        "nombre_disco": "2009 - Notion (EP)",
        "link": "http://raboninco.com/9Wr0"
    },
    {
        "id_disco": 493,
        "id": 35,
        "nombre_disco": "2010 - Come Around Sundown",
        "link": "http://raboninco.com/9WrQ"
    },
    {
        "id_disco": 494,
        "id": 35,
        "nombre_disco": "2013 - Mechanical Bull (Deluxe Edition)",
        "link": "http://raboninco.com/9Wrd"
    },
    {
        "id_disco": 495,
        "id": 35,
        "nombre_disco": "2016 - Walls",
        "link": "http://raboninco.com/9Wrz"
    },
    {
        "id_disco": 496,
        "id": 35,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/9WsF"
    },
    {
        "id_disco": 497,
        "id": 36,
        "nombre_disco": "1992 - Y Punto",
        "link": "http://raboninco.com/8odS"
    },
    {
        "id_disco": 498,
        "id": 36,
        "nombre_disco": "1993 - Asquerosa Alegria",
        "link": "http://raboninco.com/8odn"
    },
    {
        "id_disco": 499,
        "id": 36,
        "nombre_disco": "1996 - Don Leopardo",
        "link": "http://raboninco.com/8oeA"
    },
    {
        "id_disco": 500,
        "id": 36,
        "nombre_disco": "1998 - Libertinaje",
        "link": "http://raboninco.com/8oeM"
    },
    {
        "id_disco": 501,
        "id": 36,
        "nombre_disco": "2000 - Hijos Del Culo",
        "link": "http://raboninco.com/8ofD"
    },
    {
        "id_disco": 502,
        "id": 36,
        "nombre_disco": "2002 - De La Cabeza Con Bersuit Vergarabat",
        "link": "http://raboninco.com/8off"
    },
    {
        "id_disco": 503,
        "id": 36,
        "nombre_disco": "2004 - La Argentinidad Al Palo (Lo Que Se Es)",
        "link": "http://raboninco.com/8ofv"
    },
    {
        "id_disco": 504,
        "id": 36,
        "nombre_disco": "2004 - La Argentinidad Al Palo (Se Es)",
        "link": "http://raboninco.com/8ogL"
    },
    {
        "id_disco": 505,
        "id": 36,
        "nombre_disco": "2005 - Testosterona",
        "link": "http://raboninco.com/8ogY"
    },
    {
        "id_disco": 506,
        "id": 36,
        "nombre_disco": "2007 - (Signo De Pregunta)",
        "link": "http://raboninco.com/8oh4"
    },
    {
        "id_disco": 507,
        "id": 36,
        "nombre_disco": "2007 - Lados BV",
        "link": "http://raboninco.com/8ohM"
    },
    {
        "id_disco": 508,
        "id": 36,
        "nombre_disco": "2012 - La Revuelta",
        "link": "http://raboninco.com/8oha"
    },
    {
        "id_disco": 509,
        "id": 36,
        "nombre_disco": "2014 - El Baile Interior",
        "link": "http://raboninco.com/8oi6"
    },
    {
        "id_disco": 510,
        "id": 37,
        "nombre_disco": "2012-POR FIN SOLOS",
        "link": "http://raboninco.com/8ors"
    },
    {
        "id_disco": 511,
        "id": 38,
        "nombre_disco": "2005 - Calle 13",
        "link": "http://raboninco.com/8osY"
    },
    {
        "id_disco": 512,
        "id": 38,
        "nombre_disco": "2007 - Residente o Visitante",
        "link": "http://raboninco.com/8otz"
    },
    {
        "id_disco": 513,
        "id": 38,
        "nombre_disco": "2007 - Unplugged",
        "link": "http://raboninco.com/8ouk"
    },
    {
        "id_disco": 514,
        "id": 38,
        "nombre_disco": "2008 - Los de atras vienen conmigo",
        "link": "http://raboninco.com/8ov9"
    },
    {
        "id_disco": 515,
        "id": 38,
        "nombre_disco": "2009 - Feats Del Pecado",
        "link": "http://raboninco.com/8ovN"
    },
    {
        "id_disco": 516,
        "id": 38,
        "nombre_disco": "2010 - Entren Los Que Quieran",
        "link": "http://raboninco.com/8ovj"
    },
    {
        "id_disco": 517,
        "id": 38,
        "nombre_disco": "2014 - MultiViral",
        "link": "http://raboninco.com/8ow4"
    },
    {
        "id_disco": 518,
        "id": 39,
        "nombre_disco": "1997 - Solo X Hoy",
        "link": "http://raboninco.com/8owo"
    },
    {
        "id_disco": 519,
        "id": 39,
        "nombre_disco": "1998 - Callejeros",
        "link": "http://raboninco.com/8owz"
    },
    {
        "id_disco": 520,
        "id": 39,
        "nombre_disco": "2000 Adelantos",
        "link": "http://raboninco.com/8oxK"
    },
    {
        "id_disco": 521,
        "id": 39,
        "nombre_disco": "2001 - Sed",
        "link": "http://raboninco.com/8oxX"
    },
    {
        "id_disco": 522,
        "id": 39,
        "nombre_disco": "2003 - Presion",
        "link": "http://raboninco.com/8oxr"
    },
    {
        "id_disco": 523,
        "id": 39,
        "nombre_disco": "2004 - Rocanroles sin destino",
        "link": "http://raboninco.com/8oy1"
    },
    {
        "id_disco": 524,
        "id": 39,
        "nombre_disco": "2004- Obras",
        "link": "http://raboninco.com/8oyC"
    },
    {
        "id_disco": 525,
        "id": 39,
        "nombre_disco": "2006 - Señales",
        "link": "http://raboninco.com/8oyR"
    },
    {
        "id_disco": 526,
        "id": 39,
        "nombre_disco": "2008 - Disco Escultura",
        "link": "http://raboninco.com/8oyh"
    },
    {
        "id_disco": 527,
        "id": 39,
        "nombre_disco": "2011 - Casi Justicia social",
        "link": "http://raboninco.com/8ozB"
    },
    {
        "id_disco": 528,
        "id": 39,
        "nombre_disco": "2012- Incompleto 20 Rocanroles 20",
        "link": "http://raboninco.com/8ozY"
    },
    {
        "id_disco": 529,
        "id": 40,
        "nombre_disco": "2001 - Rock and roll",
        "link": "http://raboninco.com/8pJx"
    },
    {
        "id_disco": 530,
        "id": 40,
        "nombre_disco": "2002 - Así es el Rock and roll",
        "link": "http://raboninco.com/8pKI"
    },
    {
        "id_disco": 531,
        "id": 40,
        "nombre_disco": "2004 - Con El Rock En Las Venas",
        "link": "http://raboninco.com/8pKh"
    },
    {
        "id_disco": 532,
        "id": 40,
        "nombre_disco": "2005 - Ruta 25 (en VIVO)",
        "link": "http://raboninco.com/8pL9"
    },
    {
        "id_disco": 533,
        "id": 40,
        "nombre_disco": "2006 - Mundo Perfecto",
        "link": "http://raboninco.com/8pLX"
    },
    {
        "id_disco": 534,
        "id": 40,
        "nombre_disco": "2008 - Mundo Imperfecto",
        "link": "http://raboninco.com/8pM9"
    },
    {
        "id_disco": 535,
        "id": 40,
        "nombre_disco": "2009 - Shock",
        "link": "http://raboninco.com/8pMc"
    },
    {
        "id_disco": 536,
        "id": 40,
        "nombre_disco": "2013 - El Origen",
        "link": "http://raboninco.com/8pP6"
    },
    {
        "id_disco": 537,
        "id": 41,
        "nombre_disco": "2005 - Solo Canciones",
        "link": "http://raboninco.com/8pRQ"
    },
    {
        "id_disco": 538,
        "id": 41,
        "nombre_disco": "2007 - Descartando Miserias",
        "link": "http://raboninco.com/8pTC"
    },
    {
        "id_disco": 539,
        "id": 41,
        "nombre_disco": "2009 - Culpable",
        "link": "http://raboninco.com/8pTS"
    },
    {
        "id_disco": 540,
        "id": 41,
        "nombre_disco": "2011 - Atrapando Sueños",
        "link": "http://raboninco.com/8pTZ"
    },
    {
        "id_disco": 541,
        "id": 41,
        "nombre_disco": "2013 - Descartando Miserias",
        "link": "http://raboninco.com/AHN0"
    },
    {
        "id_disco": 542,
        "id": 41,
        "nombre_disco": "2014 - Historias",
        "link": "http://raboninco.com/8pU0"
    },
    {
        "id_disco": 543,
        "id": 41,
        "nombre_disco": "2014 - Vivo Por La Gloria",
        "link": "http://raboninco.com/8pqm"
    },
    {
        "id_disco": 544,
        "id": 41,
        "nombre_disco": "2016 - Pecado Capital",
        "link": "http://raboninco.com/8pro"
    },
    {
        "id_disco": 545,
        "id": 41,
        "nombre_disco": "2016 - En Vivo en el Estadio Unico",
        "link": "http://raboninco.com/AHO3"
    },
    {
        "id_disco": 546,
        "id": 42,
        "nombre_disco": "1999-Deskarados",
        "link": "http://raboninco.com/8psr"
    },
    {
        "id_disco": 547,
        "id": 42,
        "nombre_disco": "2001-De Bichos y Flores",
        "link": "http://raboninco.com/8ptK"
    },
    {
        "id_disco": 548,
        "id": 42,
        "nombre_disco": "2004-A Contraluz",
        "link": "http://raboninco.com/8pti"
    },
    {
        "id_disco": 549,
        "id": 42,
        "nombre_disco": "2007 El Impulso",
        "link": "http://raboninco.com/8pu7"
    },
    {
        "id_disco": 550,
        "id": 42,
        "nombre_disco": "2009-Normalmente anormal",
        "link": "http://raboninco.com/8puZ"
    },
    {
        "id_disco": 551,
        "id": 42,
        "nombre_disco": "2011 - Piel Y Hueso",
        "link": "http://raboninco.com/AHS6"
    },
    {
        "id_disco": 552,
        "id": 42,
        "nombre_disco": "2013 Pasaje Salvo",
        "link": "http://raboninco.com/8pus"
    },
    {
        "id_disco": 553,
        "id": 42,
        "nombre_disco": "2014 Érase",
        "link": "http://raboninco.com/8pvA"
    },
    {
        "id_disco": 554,
        "id": 42,
        "nombre_disco": "2014 - Uno Para Todos",
        "link": "http://raboninco.com/AHTN"
    },
    {
        "id_disco": 555,
        "id": 42,
        "nombre_disco": "2018 - Destilar",
        "link": "http://raboninco.com/8pvo"
    },
    {
        "id_disco": 556,
        "id": 43,
        "nombre_disco": "1991 - Corderos En La Noche",
        "link": "http://raboninco.com/8pxK"
    },
    {
        "id_disco": 557,
        "id": 43,
        "nombre_disco": "1994 - Mascaras De Sal",
        "link": "http://raboninco.com/8pxl"
    },
    {
        "id_disco": 558,
        "id": 43,
        "nombre_disco": "1996 - Amor Seco",
        "link": "http://raboninco.com/8pyL"
    },
    {
        "id_disco": 559,
        "id": 43,
        "nombre_disco": "1996 - La Clave Del Exito",
        "link": "http://raboninco.com/8pyb"
    },
    {
        "id_disco": 560,
        "id": 43,
        "nombre_disco": "1998 - Para Que",
        "link": "http://raboninco.com/8pzO"
    },
    {
        "id_disco": 561,
        "id": 43,
        "nombre_disco": "1998 - Todo Por Un Polvo",
        "link": "http://raboninco.com/8pze"
    },
    {
        "id_disco": 562,
        "id": 43,
        "nombre_disco": "2001 - Seleccion",
        "link": "http://raboninco.com/8q0w"
    },
    {
        "id_disco": 563,
        "id": 43,
        "nombre_disco": "2002 - Maxisimple",
        "link": "http://raboninco.com/8q1I"
    },
    {
        "id_disco": 564,
        "id": 43,
        "nombre_disco": "2003 - Esperando El Milagro",
        "link": "http://raboninco.com/8q1v"
    },
    {
        "id_disco": 565,
        "id": 43,
        "nombre_disco": "2005 - Show",
        "link": "http://raboninco.com/8q2T"
    },
    {
        "id_disco": 566,
        "id": 43,
        "nombre_disco": "2007 - Basta",
        "link": "http://raboninco.com/8q3R"
    },
    {
        "id_disco": 567,
        "id": 43,
        "nombre_disco": "2009 - Despierta",
        "link": "http://raboninco.com/8q3p"
    },
    {
        "id_disco": 568,
        "id": 43,
        "nombre_disco": "2012 - Cerca De Las Nubes",
        "link": "http://raboninco.com/8q4S"
    },
    {
        "id_disco": 569,
        "id": 44,
        "nombre_disco": "1996 - Los Gardelitos",
        "link": "http://raboninco.com/8q5m"
    },
    {
        "id_disco": 570,
        "id": 44,
        "nombre_disco": "1998 - Gardeliando",
        "link": "http://raboninco.com/8q6G"
    },
    {
        "id_disco": 571,
        "id": 44,
        "nombre_disco": "1999 - Fiesta Sudaka",
        "link": "http://raboninco.com/8q6V"
    },
    {
        "id_disco": 572,
        "id": 44,
        "nombre_disco": "2003 - La Calle Es Un Espejo",
        "link": "http://raboninco.com/8q87"
    },
    {
        "id_disco": 573,
        "id": 44,
        "nombre_disco": "2004 - En Tierra de Sueños",
        "link": "http://raboninco.com/8q8U"
    },
    {
        "id_disco": 574,
        "id": 44,
        "nombre_disco": "2006 - Ahora Es Nuestra La Ciudad",
        "link": "http://raboninco.com/8q90"
    },
    {
        "id_disco": 575,
        "id": 44,
        "nombre_disco": "2008 - Oxigeno",
        "link": "http://raboninco.com/8q9I"
    },
    {
        "id_disco": 576,
        "id": 44,
        "nombre_disco": "2011 - Cine Teatro",
        "link": "http://raboninco.com/8q9j"
    },
    {
        "id_disco": 577,
        "id": 44,
        "nombre_disco": "2014 - Ciudad Oculta",
        "link": "http://raboninco.com/8qAM"
    },
    {
        "id_disco": 578,
        "id": 45,
        "nombre_disco": "2007 - Increible (Demo)",
        "link": "http://raboninco.com/8qBH"
    },
    {
        "id_disco": 579,
        "id": 45,
        "nombre_disco": "2009 - Ya no somos 2 ahora",
        "link": "http://raboninco.com/8qCB"
    },
    {
        "id_disco": 580,
        "id": 45,
        "nombre_disco": "2011 - Seremos",
        "link": "http://raboninco.com/8qCr"
    },
    {
        "id_disco": 581,
        "id": 45,
        "nombre_disco": "2012 - Copla",
        "link": "http://raboninco.com/8qDO"
    },
    {
        "id_disco": 582,
        "id": 45,
        "nombre_disco": "2013 - Visceral",
        "link": "http://raboninco.com/8qDk"
    },
    {
        "id_disco": 583,
        "id": 45,
        "nombre_disco": "2015 - ¡Eureka!",
        "link": "http://raboninco.com/8qEG"
    },
    {
        "id_disco": 584,
        "id": 46,
        "nombre_disco": "1972 - Vida",
        "link": "http://raboninco.com/8qFU"
    },
    {
        "id_disco": 585,
        "id": 46,
        "nombre_disco": "1973 - Confesiones de invierno",
        "link": "http://raboninco.com/8qFn"
    },
    {
        "id_disco": 586,
        "id": 46,
        "nombre_disco": "1974 Pequeñas anécdotas sobre las instituciones",
        "link": "http://raboninco.com/8qGH"
    },
    {
        "id_disco": 587,
        "id": 46,
        "nombre_disco": "1975 - Adiós Sui Géneris  Parte I [Vivo]",
        "link": "http://raboninco.com/8qGk"
    },
    {
        "id_disco": 588,
        "id": 46,
        "nombre_disco": "1975 - Adiós Sui Géneris  Parte II [Vivo]",
        "link": "http://raboninco.com/8qH4"
    },
    {
        "id_disco": 589,
        "id": 46,
        "nombre_disco": "1995 - Adiós Sui Géneris  Parte III (1975) [Vivo]",
        "link": "http://raboninco.com/8qHO"
    },
    {
        "id_disco": 590,
        "id": 46,
        "nombre_disco": "1995 - Antologia",
        "link": "http://raboninco.com/8qHz"
    },
    {
        "id_disco": 591,
        "id": 46,
        "nombre_disco": "2000 - Sinfonías para adolescentes",
        "link": "http://raboninco.com/8qIK"
    },
    {
        "id_disco": 592,
        "id": 46,
        "nombre_disco": "2001 - Si (Detrás De Las Paredes) [Vivo]",
        "link": "http://raboninco.com/8qIj"
    },
    {
        "id_disco": 593,
        "id": 46,
        "nombre_disco": "2002 - Obras Cumbres [Recopilacion]",
        "link": "http://raboninco.com/8qJF"
    },
    {
        "id_disco": 594,
        "id": 46,
        "nombre_disco": "2003 - 20 Grandes Éxitos [Recopilacion]",
        "link": "http://raboninco.com/8qJY"
    },
    {
        "id_disco": 595,
        "id": 47,
        "nombre_disco": "1996 - Demo",
        "link": "http://raboninco.com/8qgc"
    },
    {
        "id_disco": 596,
        "id": 47,
        "nombre_disco": "1997 - Coal Chamber",
        "link": "http://raboninco.com/8qhF"
    },
    {
        "id_disco": 597,
        "id": 47,
        "nombre_disco": "1998 - Live at Ozzfest",
        "link": "http://raboninco.com/8qho"
    },
    {
        "id_disco": 598,
        "id": 47,
        "nombre_disco": "1999 - Chamber Music",
        "link": "http://raboninco.com/8qiN"
    },
    {
        "id_disco": 599,
        "id": 47,
        "nombre_disco": "2002 - Dark Days",
        "link": "http://raboninco.com/8qip"
    },
    {
        "id_disco": 600,
        "id": 47,
        "nombre_disco": "2003 - Giving the Devils His Due",
        "link": "http://raboninco.com/8qjx"
    },
    {
        "id_disco": 601,
        "id": 47,
        "nombre_disco": "2003 - Giving the Devils His Due",
        "link": "http://raboninco.com/8qjx"
    },
    {
        "id_disco": 602,
        "id": 47,
        "nombre_disco": "2015 - Rivals",
        "link": "http://raboninco.com/8qlr"
    },
    {
        "id_disco": 603,
        "id": 48,
        "nombre_disco": "1999 - The Gift of Game",
        "link": "http://raboninco.com/8qnK"
    },
    {
        "id_disco": 604,
        "id": 48,
        "nombre_disco": "2002 - Darkhorse",
        "link": "http://raboninco.com/8qnq"
    },
    {
        "id_disco": 605,
        "id": 48,
        "nombre_disco": "2015 - The Brimstone Sluggers",
        "link": "http://raboninco.com/8qoR"
    },
    {
        "id_disco": 606,
        "id": 49,
        "nombre_disco": "1991 - Cypress Hill",
        "link": "http://raboninco.com/8qvz"
    },
    {
        "id_disco": 607,
        "id": 49,
        "nombre_disco": "1993 - Black Sunday",
        "link": "http://raboninco.com/8qwf"
    },
    {
        "id_disco": 608,
        "id": 49,
        "nombre_disco": "1995 - III - Temple Of Boom",
        "link": "http://raboninco.com/8qxd"
    },
    {
        "id_disco": 609,
        "id": 49,
        "nombre_disco": "1996 - Unreleased & Revamped",
        "link": "http://raboninco.com/8qyO"
    },
    {
        "id_disco": 610,
        "id": 49,
        "nombre_disco": "1998 - IV",
        "link": "http://raboninco.com/8qyr"
    },
    {
        "id_disco": 611,
        "id": 49,
        "nombre_disco": "1998 - Tequila Sunrise",
        "link": "http://raboninco.com/8qzC"
    },
    {
        "id_disco": 612,
        "id": 49,
        "nombre_disco": "1999 - Insane In The Brain (The Mixes)",
        "link": "http://raboninco.com/8qzV"
    },
    {
        "id_disco": 613,
        "id": 49,
        "nombre_disco": "1999 - Los Grandes Éxitos En Español",
        "link": "http://raboninco.com/8qzx"
    },
    {
        "id_disco": 614,
        "id": 49,
        "nombre_disco": "2000 - Live At The Fillmore",
        "link": "http://raboninco.com/8rHg"
    },
    {
        "id_disco": 615,
        "id": 49,
        "nombre_disco": "2000 - Skull And Bones",
        "link": "http://raboninco.com/8rIF"
    },
    {
        "id_disco": 616,
        "id": 49,
        "nombre_disco": "2001 - Stoned Raiders",
        "link": "http://raboninco.com/8rIt"
    },
    {
        "id_disco": 617,
        "id": 49,
        "nombre_disco": "2002 - Stash (EP)",
        "link": "http://raboninco.com/8rJN"
    },
    {
        "id_disco": 618,
        "id": 49,
        "nombre_disco": "2004 - Till Death Do Us Part",
        "link": "http://raboninco.com/8rK0"
    },
    {
        "id_disco": 619,
        "id": 49,
        "nombre_disco": "2005 - Greatest Hits From The Bong",
        "link": "http://raboninco.com/8rKl"
    },
    {
        "id_disco": 620,
        "id": 49,
        "nombre_disco": "2008 - Collections",
        "link": "http://raboninco.com/8rR0"
    },
    {
        "id_disco": 621,
        "id": 49,
        "nombre_disco": "2010 - Rise Up",
        "link": "http://raboninco.com/8rS2"
    },
    {
        "id_disco": 622,
        "id": 49,
        "nombre_disco": "2010 - Strictly Hip-Hop. The Best Of",
        "link": "http://raboninco.com/8rSp"
    },
    {
        "id_disco": 623,
        "id": 49,
        "nombre_disco": "2012 - Cypress x Rusko EP",
        "link": "http://raboninco.com/8rTY"
    },
    {
        "id_disco": 624,
        "id": 49,
        "nombre_disco": "Singles",
        "link": "http://raboninco.com/8rUc"
    },
    {
        "id_disco": 625,
        "id": 50,
        "nombre_disco": "2001 - Para los pibes",
        "link": "http://raboninco.com/8rWN"
    },
    {
        "id_disco": 626,
        "id": 50,
        "nombre_disco": "2003 - El Bonaerense",
        "link": "http://raboninco.com/8rWl"
    },
    {
        "id_disco": 627,
        "id": 50,
        "nombre_disco": "2004 - 100% Negro Cumbiero",
        "link": "http://raboninco.com/8rXa"
    },
    {
        "id_disco": 628,
        "id": 50,
        "nombre_disco": "2004 - Hasta las Manos",
        "link": "http://raboninco.com/8rXw"
    },
    {
        "id_disco": 629,
        "id": 50,
        "nombre_disco": "2004 - Operación",
        "link": "http://raboninco.com/8rYP"
    },
    {
        "id_disco": 630,
        "id": 50,
        "nombre_disco": "2005 - Sin Remedio",
        "link": "http://raboninco.com/8rYx"
    },
    {
        "id_disco": 631,
        "id": 50,
        "nombre_disco": "2007 - Solo Para Entendidos",
        "link": "http://raboninco.com/8rZO"
    },
    {
        "id_disco": 632,
        "id": 50,
        "nombre_disco": "2008 - La Gota Que Rebasó el Vaso",
        "link": "http://raboninco.com/8rZr"
    },
    {
        "id_disco": 633,
        "id": 50,
        "nombre_disco": "2008 - Remix 2008",
        "link": "http://raboninco.com/8raG"
    },
    {
        "id_disco": 634,
        "id": 50,
        "nombre_disco": "2011 - Esquivando el Exito",
        "link": "http://raboninco.com/8rcO"
    },
    {
        "id_disco": 635,
        "id": 50,
        "nombre_disco": "2015 - 20 Grandes Exitos",
        "link": "http://raboninco.com/8rch"
    },
    {
        "id_disco": 636,
        "id": 50,
        "nombre_disco": "2015 - En Vivo",
        "link": "http://raboninco.com/8rd7"
    },
    {
        "id_disco": 637,
        "id": 50,
        "nombre_disco": "2016 - Somos Nosotros los Buenos",
        "link": "http://raboninco.com/8rdj"
    },
    {
        "id_disco": 638,
        "id": 50,
        "nombre_disco": "2018 - 40 Minutos ATR (En Vivo)",
        "link": "http://raboninco.com/8reL"
    },
    {
        "id_disco": 639,
        "id": 51,
        "nombre_disco": "1994 - Dark Funeral",
        "link": "http://raboninco.com/8rg0"
    },
    {
        "id_disco": 640,
        "id": 51,
        "nombre_disco": "1996 - The Secrets Of The Black Arts",
        "link": "http://raboninco.com/8rgN"
    },
    {
        "id_disco": 641,
        "id": 51,
        "nombre_disco": "1998 - Vobiscum Satanas",
        "link": "http://raboninco.com/8rgy"
    },
    {
        "id_disco": 642,
        "id": 51,
        "nombre_disco": "2000 - Teach Children To Worship Satan",
        "link": "http://raboninco.com/8rhS"
    },
    {
        "id_disco": 643,
        "id": 51,
        "nombre_disco": "2001 - Diabolis Interium",
        "link": "http://raboninco.com/8rhi"
    },
    {
        "id_disco": 644,
        "id": 51,
        "nombre_disco": "2004 - De Profundis Clamavi Ad Te Domine (Live Album)",
        "link": "http://raboninco.com/8ri6"
    },
    {
        "id_disco": 645,
        "id": 51,
        "nombre_disco": "2005 - Attera Totus Sanctus",
        "link": "http://raboninco.com/8riZ"
    },
    {
        "id_disco": 646,
        "id": 51,
        "nombre_disco": "2009 - Angelus Exuro Pro Eternus",
        "link": "http://raboninco.com/8rit"
    },
    {
        "id_disco": 647,
        "id": 51,
        "nombre_disco": "2016 - Where Shadows Forever Reign",
        "link": "http://raboninco.com/8rjr"
    },
    {
        "id_disco": 648,
        "id": 52,
        "nombre_disco": "1991 - Soulside Journey",
        "link": "http://raboninco.com/8rlU"
    },
    {
        "id_disco": 649,
        "id": 52,
        "nombre_disco": "1992 - A Blaze In the Northern Sky",
        "link": "http://raboninco.com/8rm3"
    },
    {
        "id_disco": 650,
        "id": 52,
        "nombre_disco": "1992 - Crossing The Triangle Of Flame (EP)",
        "link": "http://raboninco.com/8rmT"
    },
    {
        "id_disco": 651,
        "id": 52,
        "nombre_disco": "1993 - Under a Funeral Moon",
        "link": "http://raboninco.com/8rn1"
    },
    {
        "id_disco": 652,
        "id": 52,
        "nombre_disco": "1994 - Transilvanian Hunger",
        "link": "http://raboninco.com/8rnV"
    },
    {
        "id_disco": 653,
        "id": 52,
        "nombre_disco": "1995 - Panzerfaust",
        "link": "http://raboninco.com/8rnr"
    },
    {
        "id_disco": 654,
        "id": 52,
        "nombre_disco": "1996 - Goatlord",
        "link": "http://raboninco.com/8roI"
    },
    {
        "id_disco": 655,
        "id": 52,
        "nombre_disco": "1996 - Total Death",
        "link": "http://raboninco.com/8rpY"
    },
    {
        "id_disco": 656,
        "id": 52,
        "nombre_disco": "1997 - The Roots of Evilness",
        "link": "http://raboninco.com/8rps"
    },
    {
        "id_disco": 657,
        "id": 52,
        "nombre_disco": "1998 - A Night Of Unholy Black Metal",
        "link": "http://raboninco.com/8rqB"
    },
    {
        "id_disco": 658,
        "id": 52,
        "nombre_disco": "1999 - Ravishing Grimness",
        "link": "http://raboninco.com/8rqR"
    },
    {
        "id_disco": 659,
        "id": 52,
        "nombre_disco": "2000 - Preparing For War",
        "link": "http://raboninco.com/8rrA"
    },
    {
        "id_disco": 660,
        "id": 52,
        "nombre_disco": "2000 - The True Legends In Black (Split) (Bootleg)",
        "link": "http://raboninco.com/8rrV"
    },
    {
        "id_disco": 661,
        "id": 52,
        "nombre_disco": "2001 - Plaguewielder",
        "link": "http://raboninco.com/8rs4"
    },
    {
        "id_disco": 662,
        "id": 52,
        "nombre_disco": "2003 - Hate Them",
        "link": "http://raboninco.com/8rsR"
    },
    {
        "id_disco": 663,
        "id": 52,
        "nombre_disco": "2004 - Sardonic Wrath",
        "link": "http://raboninco.com/8rt3"
    },
    {
        "id_disco": 664,
        "id": 52,
        "nombre_disco": "2005 - Under Beskyttelse av Mørke (EP)",
        "link": "http://raboninco.com/8rtM"
    },
    {
        "id_disco": 665,
        "id": 52,
        "nombre_disco": "2006 - The Cult Is Alive",
        "link": "http://raboninco.com/8ru4"
    },
    {
        "id_disco": 666,
        "id": 52,
        "nombre_disco": "2006 - Too Old  Too Cold (EP)",
        "link": "http://raboninco.com/8ruM"
    },
    {
        "id_disco": 667,
        "id": 52,
        "nombre_disco": "2007 - F.O.A.D",
        "link": "http://raboninco.com/8rv1"
    },
    {
        "id_disco": 668,
        "id": 52,
        "nombre_disco": "2007 - NWOBHM (EP)",
        "link": "http://raboninco.com/8rvT"
    },
    {
        "id_disco": 669,
        "id": 52,
        "nombre_disco": "2008 - Dark Thrones & Black Flags",
        "link": "http://raboninco.com/8rvw"
    },
    {
        "id_disco": 670,
        "id": 52,
        "nombre_disco": "2008 - Frostland Tapes",
        "link": "http://raboninco.com/8rwL"
    },
    {
        "id_disco": 671,
        "id": 52,
        "nombre_disco": "2010 - Circle The Wagons",
        "link": "http://raboninco.com/8rwl"
    },
    {
        "id_disco": 672,
        "id": 52,
        "nombre_disco": "2012 - Sempiternal Past The Darkthrone Demos",
        "link": "http://raboninco.com/8rxX"
    },
    {
        "id_disco": 673,
        "id": 52,
        "nombre_disco": "2013 - Introducing Darkthrone",
        "link": "http://raboninco.com/8rxw"
    },
    {
        "id_disco": 674,
        "id": 52,
        "nombre_disco": "2013 - The Underground Resistance",
        "link": "http://raboninco.com/8ryI"
    },
    {
        "id_disco": 675,
        "id": 52,
        "nombre_disco": "2016 - Arctic Thunder",
        "link": "http://raboninco.com/8rys"
    },
    {
        "id_disco": 676,
        "id": 52,
        "nombre_disco": "Singles and demos",
        "link": "http://raboninco.com/8rzI"
    },
    {
        "id_disco": 677,
        "id": 53,
        "nombre_disco": "2009 - Dead By April",
        "link": "http://raboninco.com/8s0X"
    },
    {
        "id_disco": 678,
        "id": 53,
        "nombre_disco": "2011 - Incomparable",
        "link": "http://raboninco.com/8s0s"
    },
    {
        "id_disco": 679,
        "id": 53,
        "nombre_disco": "2011 - Stronger",
        "link": "http://raboninco.com/8s11"
    },
    {
        "id_disco": 680,
        "id": 53,
        "nombre_disco": "2014 - Let the World Know",
        "link": "http://raboninco.com/8s1d"
    },
    {
        "id_disco": 681,
        "id": 53,
        "nombre_disco": "2017 - Worlds Collide",
        "link": "http://raboninco.com/8s28"
    },
    {
        "id_disco": 682,
        "id": 54,
        "nombre_disco": "1979 - Back In The Streets (EP)",
        "link": "http://raboninco.com/8s3U"
    },
    {
        "id_disco": 683,
        "id": 54,
        "nombre_disco": "1983 - Breaking The Chains",
        "link": "http://raboninco.com/8s3l"
    },
    {
        "id_disco": 684,
        "id": 54,
        "nombre_disco": "1984 - Tooth And Nail",
        "link": "http://raboninco.com/8s44"
    },
    {
        "id_disco": 685,
        "id": 54,
        "nombre_disco": "1985 - Under Lock And Key",
        "link": "http://raboninco.com/8s4R"
    },
    {
        "id_disco": 686,
        "id": 54,
        "nombre_disco": "1987 - Back For The Attack",
        "link": "http://raboninco.com/8s4j"
    },
    {
        "id_disco": 687,
        "id": 54,
        "nombre_disco": "1987 - Dream Warriors (EP)",
        "link": "http://raboninco.com/8sCz"
    },
    {
        "id_disco": 688,
        "id": 54,
        "nombre_disco": "1988 - Beast From The East",
        "link": "http://raboninco.com/8sDX"
    },
    {
        "id_disco": 689,
        "id": 54,
        "nombre_disco": "1994 - Dokken",
        "link": "http://raboninco.com/8sDt"
    },
    {
        "id_disco": 690,
        "id": 54,
        "nombre_disco": "1994 - The Best Of",
        "link": "http://raboninco.com/8sIJ"
    },
    {
        "id_disco": 691,
        "id": 54,
        "nombre_disco": "1995 - Dysfunctional",
        "link": "http://raboninco.com/8sIe"
    },
    {
        "id_disco": 692,
        "id": 54,
        "nombre_disco": "1995 - One Live Night",
        "link": "http://raboninco.com/8sIv"
    },
    {
        "id_disco": 693,
        "id": 54,
        "nombre_disco": "1997 - Shadowlife",
        "link": "http://raboninco.com/8sJM"
    },
    {
        "id_disco": 694,
        "id": 54,
        "nombre_disco": "1999 - Erase The Slate",
        "link": "http://raboninco.com/8sJv"
    },
    {
        "id_disco": 695,
        "id": 54,
        "nombre_disco": "1999 - The Very Best Of",
        "link": "http://raboninco.com/8sKd"
    },
    {
        "id_disco": 696,
        "id": 54,
        "nombre_disco": "2000 - Live From The Sun",
        "link": "http://raboninco.com/8sLr"
    },
    {
        "id_disco": 697,
        "id": 54,
        "nombre_disco": "2001 - Rare & Imported Vol. 1",
        "link": "http://raboninco.com/8sMS"
    },
    {
        "id_disco": 698,
        "id": 54,
        "nombre_disco": "2001 - Rare & Imported Vol. 2",
        "link": "http://raboninco.com/8sN3"
    },
    {
        "id_disco": 699,
        "id": 54,
        "nombre_disco": "2001 - Yesterday & Today",
        "link": "http://raboninco.com/8sNa"
    },
    {
        "id_disco": 700,
        "id": 54,
        "nombre_disco": "2002 - Long Way Home",
        "link": "http://raboninco.com/8sOC"
    },
    {
        "id_disco": 701,
        "id": 54,
        "nombre_disco": "2003 - Japan Live 95",
        "link": "http://raboninco.com/8sOa"
    },
    {
        "id_disco": 702,
        "id": 54,
        "nombre_disco": "2003 - Rare & Imported Vol. 3",
        "link": "http://raboninco.com/8sPE"
    },
    {
        "id_disco": 703,
        "id": 54,
        "nombre_disco": "2004 - Hell To Pay",
        "link": "http://raboninco.com/8sQv"
    },
    {
        "id_disco": 704,
        "id": 54,
        "nombre_disco": "2007 - From Conception - Live 1981",
        "link": "http://raboninco.com/8sSw"
    },
    {
        "id_disco": 705,
        "id": 54,
        "nombre_disco": "2008 - Lightning Strikes Again",
        "link": "http://raboninco.com/8sTX"
    },
    {
        "id_disco": 706,
        "id": 54,
        "nombre_disco": "2009 - Alone Again and Other Hits",
        "link": "http://raboninco.com/8sTs"
    },
    {
        "id_disco": 707,
        "id": 54,
        "nombre_disco": "2011 - The Anthems",
        "link": "http://raboninco.com/8sVU"
    },
    {
        "id_disco": 708,
        "id": 54,
        "nombre_disco": "2012 - Broken Bones",
        "link": "http://raboninco.com/8sWq"
    },
    {
        "id_disco": 709,
        "id": 55,
        "nombre_disco": "1979 - The Peel Session",
        "link": "http://raboninco.com/8sZ4"
    },
    {
        "id_disco": 710,
        "id": 55,
        "nombre_disco": "1980 - Crocodiles",
        "link": "http://raboninco.com/8sZa"
    },
    {
        "id_disco": 711,
        "id": 55,
        "nombre_disco": "1981 - Heaven Up Here",
        "link": "http://raboninco.com/8sZs"
    },
    {
        "id_disco": 712,
        "id": 55,
        "nombre_disco": "1983 - Porcupine",
        "link": "http://raboninco.com/8saI"
    },
    {
        "id_disco": 713,
        "id": 55,
        "nombre_disco": "1983 - The Cutter (EP)",
        "link": "http://raboninco.com/8saf"
    },
    {
        "id_disco": 714,
        "id": 55,
        "nombre_disco": "1984 - Ocean Rain",
        "link": "http://raboninco.com/8sas"
    },
    {
        "id_disco": 715,
        "id": 55,
        "nombre_disco": "1984 - Seven Seas (EP)",
        "link": "http://raboninco.com/8sbB"
    },
    {
        "id_disco": 716,
        "id": 55,
        "nombre_disco": "1984 - The Savoy NYC",
        "link": "http://raboninco.com/8sbj"
    },
    {
        "id_disco": 717,
        "id": 55,
        "nombre_disco": "1985 - Bring On The Dancing Horses (EP)",
        "link": "http://raboninco.com/8sc9"
    },
    {
        "id_disco": 718,
        "id": 55,
        "nombre_disco": "1985 - Songs To Learn & Sing",
        "link": "http://raboninco.com/8scS"
    },
    {
        "id_disco": 719,
        "id": 55,
        "nombre_disco": "1987 - Echo & The Bunnymen",
        "link": "http://raboninco.com/8sdH"
    },
    {
        "id_disco": 720,
        "id": 55,
        "nombre_disco": "1988 - New Live And Rare",
        "link": "http://raboninco.com/8se7"
    },
    {
        "id_disco": 721,
        "id": 55,
        "nombre_disco": "1990 - Reverberation",
        "link": "http://raboninco.com/8sf6"
    },
    {
        "id_disco": 722,
        "id": 55,
        "nombre_disco": "1992 - BBC Radio 1 Live In Concert",
        "link": "http://raboninco.com/8sfe"
    },
    {
        "id_disco": 723,
        "id": 55,
        "nombre_disco": "1997 - Ballyhoo",
        "link": "http://raboninco.com/8sfu"
    },
    {
        "id_disco": 724,
        "id": 55,
        "nombre_disco": "1997 - Evergreen",
        "link": "http://raboninco.com/8sgR"
    },
    {
        "id_disco": 725,
        "id": 55,
        "nombre_disco": "1997 - Nothing Last Forever (BSides)",
        "link": "http://raboninco.com/8sgu"
    },
    {
        "id_disco": 726,
        "id": 55,
        "nombre_disco": "1999 - What Are You Going To Do With Your Life",
        "link": "http://raboninco.com/8sh6"
    },
    {
        "id_disco": 727,
        "id": 55,
        "nombre_disco": "2001 - Flowers",
        "link": "http://raboninco.com/8shi"
    },
    {
        "id_disco": 728,
        "id": 55,
        "nombre_disco": "2002 - Live In Liverpool",
        "link": "http://raboninco.com/8siC"
    },
    {
        "id_disco": 729,
        "id": 55,
        "nombre_disco": "2005 - Siberia",
        "link": "http://raboninco.com/8sin"
    },
    {
        "id_disco": 730,
        "id": 55,
        "nombre_disco": "2006 - More Songs To Learn And Sing",
        "link": "http://raboninco.com/8sjc"
    },
    {
        "id_disco": 731,
        "id": 55,
        "nombre_disco": "2009 - The Fountain",
        "link": "http://raboninco.com/8sjt"
    },
    {
        "id_disco": 732,
        "id": 55,
        "nombre_disco": "2011 - Do It Clean",
        "link": "http://raboninco.com/8skA"
    },
    {
        "id_disco": 733,
        "id": 55,
        "nombre_disco": "2014 - Live in London",
        "link": "http://raboninco.com/8skT"
    },
    {
        "id_disco": 734,
        "id": 55,
        "nombre_disco": "2014 - Meteorites",
        "link": "http://raboninco.com/8slK"
    },
    {
        "id_disco": 735,
        "id": 56,
        "nombre_disco": "1994 - Valentín Alsina",
        "link": "http://hinafinea.com/3ts5"
    },
    {
        "id_disco": 736,
        "id": 56,
        "nombre_disco": "1995 - Volvio la alegria  vieja!!!",
        "link": "http://hinafinea.com/3tsV"
    },
    {
        "id_disco": 737,
        "id": 56,
        "nombre_disco": "1997 - Postal ´97",
        "link": "http://hinafinea.com/3tsn"
    },
    {
        "id_disco": 738,
        "id": 56,
        "nombre_disco": "1999 - Dos Minutos de Advertencia",
        "link": "http://hinafinea.com/3ttC"
    },
    {
        "id_disco": 739,
        "id": 56,
        "nombre_disco": "1999 - Novedades",
        "link": "http://hinafinea.com/3ttX"
    },
    {
        "id_disco": 740,
        "id": 56,
        "nombre_disco": "2000 - Antorchas",
        "link": "http://hinafinea.com/3tuG"
    },
    {
        "id_disco": 741,
        "id": 56,
        "nombre_disco": "2003 - Vida Monótona",
        "link": "http://hinafinea.com/3tuu"
    },
    {
        "id_disco": 742,
        "id": 56,
        "nombre_disco": "2004 - Superocho",
        "link": "http://hinafinea.com/3tvm"
    },
    {
        "id_disco": 743,
        "id": 56,
        "nombre_disco": "2006 - Un Mundo de Sensaciones",
        "link": "http://hinafinea.com/3twO"
    },
    {
        "id_disco": 744,
        "id": 56,
        "nombre_disco": "2007 - 20 Años No Es Nada",
        "link": "http://hinafinea.com/3twi"
    },
    {
        "id_disco": 745,
        "id": 56,
        "nombre_disco": "2010 - Vamos a la Granja Directo al Infierno",
        "link": "http://hinafinea.com/3txA"
    },
    {
        "id_disco": 746,
        "id": 56,
        "nombre_disco": "2013 - Valentin Alzheimer",
        "link": "http://hinafinea.com/3txa"
    },
    {
        "id_disco": 747,
        "id": 57,
        "nombre_disco": "1979 - Accept",
        "link": "http://hinafinea.com/3tyS"
    },
    {
        "id_disco": 748,
        "id": 57,
        "nombre_disco": "1980 - Im a Rebel",
        "link": "http://hinafinea.com/3tz3"
    },
    {
        "id_disco": 749,
        "id": 57,
        "nombre_disco": "1981 - Breaker",
        "link": "http://hinafinea.com/3tzY"
    },
    {
        "id_disco": 750,
        "id": 57,
        "nombre_disco": "1981 - Metal Masters",
        "link": "http://hinafinea.com/3tzs"
    },
    {
        "id_disco": 751,
        "id": 57,
        "nombre_disco": "1982 - Restless and Wild",
        "link": "http://hinafinea.com/3u0O"
    },
    {
        "id_disco": 752,
        "id": 57,
        "nombre_disco": "1982 - Restless and Wild (Demo)",
        "link": "http://hinafinea.com/3u0w"
    },
    {
        "id_disco": 753,
        "id": 57,
        "nombre_disco": "1982 - Restless the Best",
        "link": "http://hinafinea.com/3u1H"
    },
    {
        "id_disco": 754,
        "id": 57,
        "nombre_disco": "1983 - Balls to the Wall",
        "link": "http://hinafinea.com/3u1g"
    },
    {
        "id_disco": 755,
        "id": 57,
        "nombre_disco": "1983 - Midnight Highway",
        "link": "http://hinafinea.com/3u1v"
    },
    {
        "id_disco": 756,
        "id": 57,
        "nombre_disco": "1985 - Kaizoku-Ban (EP)",
        "link": "http://hinafinea.com/3u2F"
    },
    {
        "id_disco": 757,
        "id": 57,
        "nombre_disco": "1985 - Metal Heart",
        "link": "http://hinafinea.com/3u2Q"
    },
    {
        "id_disco": 758,
        "id": 57,
        "nombre_disco": "1986 - Russian Roulette",
        "link": "http://hinafinea.com/3u2w"
    },
    {
        "id_disco": 759,
        "id": 57,
        "nombre_disco": "1987 - Hungry Years",
        "link": "http://hinafinea.com/3u3X"
    },
    {
        "id_disco": 760,
        "id": 57,
        "nombre_disco": "1988 - The Final Chapter",
        "link": "http://hinafinea.com/3u3q"
    },
    {
        "id_disco": 761,
        "id": 57,
        "nombre_disco": "1990 - Staying A Life",
        "link": "http://hinafinea.com/3u4H"
    },
    {
        "id_disco": 762,
        "id": 57,
        "nombre_disco": "1991 - The Collection",
        "link": "http://hinafinea.com/3u4X"
    },
    {
        "id_disco": 763,
        "id": 57,
        "nombre_disco": "1992 - Live In Japan",
        "link": "http://hinafinea.com/3u4q"
    },
    {
        "id_disco": 764,
        "id": 57,
        "nombre_disco": "1992 - No Substitutes",
        "link": "http://hinafinea.com/3u5V"
    },
    {
        "id_disco": 765,
        "id": 57,
        "nombre_disco": "1993 - Objection Overruled",
        "link": "http://hinafinea.com/3u5u"
    },
    {
        "id_disco": 766,
        "id": 57,
        "nombre_disco": "1994 - Death Row",
        "link": "http://hinafinea.com/3u6d"
    },
    {
        "id_disco": 767,
        "id": 57,
        "nombre_disco": "1995 - Steel Glove",
        "link": "http://hinafinea.com/3u6s"
    },
    {
        "id_disco": 768,
        "id": 57,
        "nombre_disco": "1996 - Predator",
        "link": "http://hinafinea.com/3u7H"
    },
    {
        "id_disco": 769,
        "id": 57,
        "nombre_disco": "1997 - All areas wolrdwide",
        "link": "http://hinafinea.com/3u7m"
    },
    {
        "id_disco": 770,
        "id": 57,
        "nombre_disco": "1998 - Breakers On Stage (EP)",
        "link": "http://hinafinea.com/3u8H"
    },
    {
        "id_disco": 771,
        "id": 57,
        "nombre_disco": "2000 - Bestseller",
        "link": "http://hinafinea.com/3u8d"
    },
    {
        "id_disco": 772,
        "id": 57,
        "nombre_disco": "2000 - Classics  Rocks n Ballads (Hot and Slow)",
        "link": "http://hinafinea.com/3u90"
    },
    {
        "id_disco": 773,
        "id": 57,
        "nombre_disco": "2002 - Love Ballads",
        "link": "http://hinafinea.com/3u9H"
    },
    {
        "id_disco": 774,
        "id": 57,
        "nombre_disco": "2002 - Metal Blast From The Past",
        "link": "http://hinafinea.com/3u9Y"
    },
    {
        "id_disco": 775,
        "id": 57,
        "nombre_disco": "2002 - Rich & Famous (EP)",
        "link": "http://hinafinea.com/3uA2"
    },
    {
        "id_disco": 776,
        "id": 57,
        "nombre_disco": "2010 - Blood Of The Nations",
        "link": "http://hinafinea.com/3uAH"
    },
    {
        "id_disco": 777,
        "id": 57,
        "nombre_disco": "2010 - The Abyss (EP)",
        "link": "http://hinafinea.com/3uAf"
    },
    {
        "id_disco": 778,
        "id": 57,
        "nombre_disco": "2010 - The Accept Collection",
        "link": "http://hinafinea.com/3uAx"
    },
    {
        "id_disco": 779,
        "id": 57,
        "nombre_disco": "2010 - The Key Club Hollywood (19-10-10)",
        "link": "http://hinafinea.com/3uBH"
    },
    {
        "id_disco": 780,
        "id": 57,
        "nombre_disco": "2012 - Stalingrad",
        "link": "http://hinafinea.com/3uBp"
    },
    {
        "id_disco": 781,
        "id": 57,
        "nombre_disco": "2014 - Blind Rage",
        "link": "http://hinafinea.com/3uCA"
    },
    {
        "id_disco": 782,
        "id": 57,
        "nombre_disco": "2017 - Restless And Live",
        "link": "http://hinafinea.com/3uCX"
    },
    {
        "id_disco": 783,
        "id": 57,
        "nombre_disco": "The Best Of",
        "link": "http://hinafinea.com/3uCr"
    },
    {
        "id_disco": 784,
        "id": 58,
        "nombre_disco": "1988 - Bye Mamá",
        "link": "http://hinafinea.com/3uEg"
    },
    {
        "id_disco": 785,
        "id": 58,
        "nombre_disco": "1989 - Dame Tu amor",
        "link": "http://hinafinea.com/3uEy"
    },
    {
        "id_disco": 786,
        "id": 58,
        "nombre_disco": "1990 - Eternamente Bella",
        "link": "http://hinafinea.com/3uFE"
    },
    {
        "id_disco": 787,
        "id": 58,
        "nombre_disco": "1991 - Flor De Papel",
        "link": "http://hinafinea.com/3uFX"
    },
    {
        "id_disco": 788,
        "id": 58,
        "nombre_disco": "1993 - Libre",
        "link": "http://hinafinea.com/3uFy"
    },
    {
        "id_disco": 789,
        "id": 58,
        "nombre_disco": "1994 - 12 Grandes Éxitos",
        "link": "http://hinafinea.com/3uGK"
    },
    {
        "id_disco": 790,
        "id": 58,
        "nombre_disco": "1994 - Al Borde De La Locura",
        "link": "http://hinafinea.com/3uGk"
    },
    {
        "id_disco": 791,
        "id": 58,
        "nombre_disco": "1994 - Enorme",
        "link": "http://hinafinea.com/3uH1"
    },
    {
        "id_disco": 792,
        "id": 58,
        "nombre_disco": "1996 - Cambio De Piel",
        "link": "http://hinafinea.com/3uHH"
    },
    {
        "id_disco": 793,
        "id": 58,
        "nombre_disco": "1996 - De Piel Negra",
        "link": "http://hinafinea.com/3uHU"
    },
    {
        "id_disco": 794,
        "id": 58,
        "nombre_disco": "1997 - La Guzmán",
        "link": "http://hinafinea.com/3uHs"
    },
    {
        "id_disco": 795,
        "id": 58,
        "nombre_disco": "1999 - Algo Natural",
        "link": "http://hinafinea.com/3uIC"
    },
    {
        "id_disco": 796,
        "id": 58,
        "nombre_disco": "2000 - Serie Platino",
        "link": "http://hinafinea.com/3uIQ"
    },
    {
        "id_disco": 797,
        "id": 58,
        "nombre_disco": "2001 - Soy",
        "link": "http://hinafinea.com/3uIh"
    },
    {
        "id_disco": 798,
        "id": 58,
        "nombre_disco": "2002 - Agresivamente Tuya",
        "link": "http://hinafinea.com/3uJ2"
    },
    {
        "id_disco": 799,
        "id": 58,
        "nombre_disco": "2003 - De Colección",
        "link": "http://hinafinea.com/3uJJ"
    },
    {
        "id_disco": 800,
        "id": 58,
        "nombre_disco": "2003 - En Vivo",
        "link": "http://hinafinea.com/3uJc"
    },
    {
        "id_disco": 801,
        "id": 58,
        "nombre_disco": "2004 - Lipstick",
        "link": "http://hinafinea.com/3uJm"
    },
    {
        "id_disco": 802,
        "id": 58,
        "nombre_disco": "2006 - Canciones De Amor",
        "link": "http://hinafinea.com/3uK9"
    },
    {
        "id_disco": 803,
        "id": 58,
        "nombre_disco": "2006 - Indeleble",
        "link": "http://hinafinea.com/3uKe"
    },
    {
        "id_disco": 804,
        "id": 58,
        "nombre_disco": "2007 - Fuerza",
        "link": "http://hinafinea.com/3uKu"
    },
    {
        "id_disco": 805,
        "id": 58,
        "nombre_disco": "2007 - Las Número 1",
        "link": "http://hinafinea.com/3uLD"
    },
    {
        "id_disco": 806,
        "id": 58,
        "nombre_disco": "2008 - Fuerza (Edición Especial)",
        "link": "http://hinafinea.com/3uLk"
    },
    {
        "id_disco": 807,
        "id": 58,
        "nombre_disco": "2009 - Único",
        "link": "http://hinafinea.com/3uM5"
    },
    {
        "id_disco": 808,
        "id": 58,
        "nombre_disco": "2010 - Mis Favoritas",
        "link": "http://hinafinea.com/3uMi"
    },
    {
        "id_disco": 809,
        "id": 58,
        "nombre_disco": "2011 - 20 Años De Éxitos En Vivo (Con Moderatto)",
        "link": "http://hinafinea.com/3uND"
    },
    {
        "id_disco": 810,
        "id": 58,
        "nombre_disco": "2011 - Día De Suerte (Dance Remixes)",
        "link": "http://hinafinea.com/3uNc"
    },
    {
        "id_disco": 811,
        "id": 58,
        "nombre_disco": "2013 - La Guzmán Primera Fila",
        "link": "http://hinafinea.com/3uO3"
    },
    {
        "id_disco": 812,
        "id": 58,
        "nombre_disco": "2013 - La Guzmán Primera Fila (Deluxe Edition)",
        "link": "http://hinafinea.com/3uOg"
    },
    {
        "id_disco": 813,
        "id": 58,
        "nombre_disco": "2014 - Imprescindibles",
        "link": "http://hinafinea.com/3uPE"
    },
    {
        "id_disco": 814,
        "id": 58,
        "nombre_disco": "2015 - A + No Poder",
        "link": "http://hinafinea.com/3uPn"
    },
    {
        "id_disco": 815,
        "id": 59,
        "nombre_disco": "2007 - Fallacy",
        "link": "http://hinafinea.com/3uQa"
    },
    {
        "id_disco": 816,
        "id": 59,
        "nombre_disco": "2008 - Soundtrack To A Party",
        "link": "http://hinafinea.com/3uR5"
    },
    {
        "id_disco": 817,
        "id": 59,
        "nombre_disco": "2010 - Rage",
        "link": "http://hinafinea.com/3uRW"
    },
    {
        "id_disco": 818,
        "id": 59,
        "nombre_disco": "2011 - Outlawed",
        "link": "http://hinafinea.com/3uS1"
    },
    {
        "id_disco": 819,
        "id": 59,
        "nombre_disco": "2013 - About That Life",
        "link": "http://hinafinea.com/3uSN"
    },
    {
        "id_disco": 820,
        "id": 59,
        "nombre_disco": "2014 - Guilty Pleasure",
        "link": "http://hinafinea.com/3uT0"
    },
    {
        "id_disco": 821,
        "id": 59,
        "nombre_disco": "2016 - Chaos",
        "link": "http://hinafinea.com/3uTN"
    },
    {
        "id_disco": 822,
        "id": 60,
        "nombre_disco": "1993 - Audio Adrenaline",
        "link": "http://hinafinea.com/3uUo"
    },
    {
        "id_disco": 823,
        "id": 60,
        "nombre_disco": "1994 - Dont Censor Me Extended Play Remixes",
        "link": "http://hinafinea.com/3uVW"
    },
    {
        "id_disco": 824,
        "id": 60,
        "nombre_disco": "1995 - Dont Censor Me",
        "link": "http://hinafinea.com/3uVr"
    },
    {
        "id_disco": 825,
        "id": 60,
        "nombre_disco": "1995 - Live Bootleg",
        "link": "http://hinafinea.com/3uWK"
    },
    {
        "id_disco": 826,
        "id": 60,
        "nombre_disco": "1996 - Bloom",
        "link": "http://hinafinea.com/3uWe"
    },
    {
        "id_disco": 827,
        "id": 60,
        "nombre_disco": "1997 - Some Kind Of Zombie",
        "link": "http://hinafinea.com/3uWr"
    },
    {
        "id_disco": 828,
        "id": 60,
        "nombre_disco": "1999 - Underdog",
        "link": "http://hinafinea.com/3uXC"
    },
    {
        "id_disco": 829,
        "id": 60,
        "nombre_disco": "2001 - Hit Parade",
        "link": "http://hinafinea.com/3uXV"
    },
    {
        "id_disco": 830,
        "id": 60,
        "nombre_disco": "2001 - Lift",
        "link": "http://hinafinea.com/3uXs"
    },
    {
        "id_disco": 831,
        "id": 60,
        "nombre_disco": "2003 - Worldwide",
        "link": "http://hinafinea.com/3uYG"
    },
    {
        "id_disco": 832,
        "id": 60,
        "nombre_disco": "2005 - Until My Heart Caves In",
        "link": "http://hinafinea.com/3uYe"
    },
    {
        "id_disco": 833,
        "id": 60,
        "nombre_disco": "2006 - Adios",
        "link": "http://hinafinea.com/3uZB"
    },
    {
        "id_disco": 834,
        "id": 60,
        "nombre_disco": "2007 - Farewell Concert - Live",
        "link": "http://hinafinea.com/3uZl"
    },
    {
        "id_disco": 835,
        "id": 60,
        "nombre_disco": "2008 - Greatest Hits",
        "link": "http://hinafinea.com/3ua2"
    },
    {
        "id_disco": 836,
        "id": 60,
        "nombre_disco": "2009 - The Ultimate Collection",
        "link": "http://hinafinea.com/3uai"
    },
    {
        "id_disco": 837,
        "id": 60,
        "nombre_disco": "2013 - Big House To Ocean Floor",
        "link": "http://cesinthi.com/WQS"
    },
    {
        "id_disco": 838,
        "id": 60,
        "nombre_disco": "2013 - King And Queens",
        "link": "http://hinafinea.com/3ucg"
    },
    {
        "id_disco": 839,
        "id": 60,
        "nombre_disco": "Singles",
        "link": "http://hinafinea.com/3ud0"
    },
    {
        "id_disco": 840,
        "id": 61,
        "nombre_disco": "2016 - Inéditos",
        "link": "http://hinafinea.com/3ugI"
    },
    {
        "id_disco": 841,
        "id": 61,
        "nombre_disco": "2016 - Temas Inéditos 2",
        "link": "http://hinafinea.com/3ugc"
    },
    {
        "id_disco": 842,
        "id": 61,
        "nombre_disco": "2017 - Ápices",
        "link": "http://hinafinea.com/3uhF"
    },
    {
        "id_disco": 843,
        "id": 61,
        "nombre_disco": "2018 - Nuevas Canciones Pack 1",
        "link": "http://hinafinea.com/3uhb"
    },
    {
        "id_disco": 844,
        "id": 62,
        "nombre_disco": "1966 - 1966",
        "link": "http://hinafinea.com/3ukz"
    },
    {
        "id_disco": 845,
        "id": 62,
        "nombre_disco": "1967 - David Bowie (Deluxe Edition)",
        "link": "http://hinafinea.com/3ulG"
    },
    {
        "id_disco": 846,
        "id": 62,
        "nombre_disco": "1969 - Space Oddity (40th Anniversary Edition)",
        "link": "http://hinafinea.com/3ulh"
    },
    {
        "id_disco": 847,
        "id": 62,
        "nombre_disco": "1970 - The Man Who Sold the World",
        "link": "http://hinafinea.com/3umO"
    },
    {
        "id_disco": 848,
        "id": 62,
        "nombre_disco": "1971 - Hunky Dory",
        "link": "http://hinafinea.com/3umi"
    },
    {
        "id_disco": 849,
        "id": 62,
        "nombre_disco": "1972 - The Rise And Fall Of Ziggy Stardust And The Spiders From Mars",
        "link": "http://hinafinea.com/3un2"
    },
    {
        "id_disco": 850,
        "id": 62,
        "nombre_disco": "1973 - Aladdin Sane",
        "link": "http://hinafinea.com/3unM"
    },
    {
        "id_disco": 851,
        "id": 62,
        "nombre_disco": "1973 - Pin Ups",
        "link": "http://hinafinea.com/3uni"
    },
    {
        "id_disco": 852,
        "id": 62,
        "nombre_disco": "1974 - David Live (Live Album)",
        "link": "http://hinafinea.com/3uo6"
    },
    {
        "id_disco": 853,
        "id": 62,
        "nombre_disco": "1974 - Diamond Dogs",
        "link": "http://hinafinea.com/3uoR"
    },
    {
        "id_disco": 854,
        "id": 62,
        "nombre_disco": "1975 - Young Americans",
        "link": "http://hinafinea.com/3upI"
    },
    {
        "id_disco": 855,
        "id": 62,
        "nombre_disco": "1976 - Station To Station",
        "link": "http://hinafinea.com/3upc"
    },
    {
        "id_disco": 856,
        "id": 62,
        "nombre_disco": "1977 - Heroes",
        "link": "http://hinafinea.com/3urc"
    },
    {
        "id_disco": 857,
        "id": 62,
        "nombre_disco": "1977 - Low",
        "link": "http://hinafinea.com/3usA"
    },
    {
        "id_disco": 858,
        "id": 62,
        "nombre_disco": "1978 - Stage (Live Album)",
        "link": "http://hinafinea.com/3usX"
    },
    {
        "id_disco": 859,
        "id": 62,
        "nombre_disco": "1979 - Lodger",
        "link": "http://hinafinea.com/3usx"
    },
    {
        "id_disco": 860,
        "id": 62,
        "nombre_disco": "1980 - Scary Monsters",
        "link": "http://hinafinea.com/3utR"
    },
    {
        "id_disco": 861,
        "id": 62,
        "nombre_disco": "1981 - Christiane F. - Wir Kinder Vom Bahnhof Zoo (O.S.T)",
        "link": "http://hinafinea.com/3uuD"
    },
    {
        "id_disco": 862,
        "id": 62,
        "nombre_disco": "1982 - Baal (EP)",
        "link": "http://hinafinea.com/3uui"
    },
    {
        "id_disco": 863,
        "id": 62,
        "nombre_disco": "1983 - Lets Dance",
        "link": "http://hinafinea.com/3uvN"
    },
    {
        "id_disco": 864,
        "id": 62,
        "nombre_disco": "1984 - Tonight",
        "link": "http://hinafinea.com/3uvq"
    },
    {
        "id_disco": 865,
        "id": 62,
        "nombre_disco": "1986 - Labyrinth (O.S.T.)",
        "link": "http://hinafinea.com/3uwn"
    },
    {
        "id_disco": 866,
        "id": 62,
        "nombre_disco": "1987 - Never Let Me Down",
        "link": "http://hinafinea.com/3uxD"
    },
    {
        "id_disco": 867,
        "id": 62,
        "nombre_disco": "1989 - Shadow Man (Outtakes)",
        "link": "http://hinafinea.com/3uxe"
    },
    {
        "id_disco": 868,
        "id": 62,
        "nombre_disco": "1993 - Black Tie White Noise",
        "link": "http://hinafinea.com/3uy0"
    },
    {
        "id_disco": 869,
        "id": 62,
        "nombre_disco": "1993 - The Buddha Of Suburbia (2007 Remastered) (O.S.T)",
        "link": "http://hinafinea.com/3uyP"
    },
    {
        "id_disco": 870,
        "id": 62,
        "nombre_disco": "1995 - 1. Outside",
        "link": "http://hinafinea.com/3uyw"
    },
    {
        "id_disco": 871,
        "id": 62,
        "nombre_disco": "1995 - London Boy (Compilación)",
        "link": "http://hinafinea.com/3uzV"
    },
    {
        "id_disco": 872,
        "id": 62,
        "nombre_disco": "1997 - Earthling",
        "link": "http://hinafinea.com/3v03"
    },
    {
        "id_disco": 873,
        "id": 62,
        "nombre_disco": "1997 - Earthling In The City",
        "link": "http://hinafinea.com/3v0R"
    },
    {
        "id_disco": 874,
        "id": 62,
        "nombre_disco": "1997 - Perfect Day (VA) (BBC)",
        "link": "http://hinafinea.com/3v0o"
    },
    {
        "id_disco": 875,
        "id": 62,
        "nombre_disco": "1997 - The Deram Anthology 1966-1968 (Compilación)",
        "link": "http://hinafinea.com/3v1V"
    },
    {
        "id_disco": 876,
        "id": 62,
        "nombre_disco": "1999 - Hours",
        "link": "http://hinafinea.com/3v3g"
    },
    {
        "id_disco": 877,
        "id": 62,
        "nombre_disco": "1999 - Under Pressure (Queen + David Bowie) (EU)",
        "link": "http://hinafinea.com/3v3y"
    },
    {
        "id_disco": 878,
        "id": 62,
        "nombre_disco": "1999 - Without You Im Nothing (Placebo ft. David Bowie)",
        "link": "http://hinafinea.com/3v4J"
    },
    {
        "id_disco": 879,
        "id": 62,
        "nombre_disco": "2000 - Bowie At The Beeb (Live Album)",
        "link": "http://hinafinea.com/3v4i"
    },
    {
        "id_disco": 880,
        "id": 62,
        "nombre_disco": "2001 - All Saints. Collected Instrumentals 1977-1999 (Compilación)",
        "link": "http://hinafinea.com/3v5e"
    },
    {
        "id_disco": 881,
        "id": 62,
        "nombre_disco": "2002 - Best Of Bowie (Compilación)",
        "link": "http://hinafinea.com/3v67"
    },
    {
        "id_disco": 882,
        "id": 62,
        "nombre_disco": "2002 - Heathen",
        "link": "http://hinafinea.com/3v6l"
    },
    {
        "id_disco": 883,
        "id": 62,
        "nombre_disco": "2003 - Reality",
        "link": "http://hinafinea.com/3v73"
    },
    {
        "id_disco": 884,
        "id": 62,
        "nombre_disco": "2003 - Ziggy Stardust And The Spiders From Mars - The Motion Picture Soundtrack (O.S.T)",
        "link": "http://hinafinea.com/3v7S"
    },
    {
        "id_disco": 885,
        "id": 62,
        "nombre_disco": "2006 - Arnold Layne (David Gilmour feat. David Bowie  Richard Wright)",
        "link": "http://hinafinea.com/3v7x"
    },
    {
        "id_disco": 886,
        "id": 62,
        "nombre_disco": "2007 - Glass Spider (Live Album)",
        "link": "http://hinafinea.com/3v8J"
    },
    {
        "id_disco": 887,
        "id": 62,
        "nombre_disco": "2007 - Strangers When We Meet (Limited Edition) (EP)",
        "link": "http://hinafinea.com/3v8y"
    },
    {
        "id_disco": 888,
        "id": 62,
        "nombre_disco": "2007 - The Secret Songs (Compilación)",
        "link": "http://hinafinea.com/3v9f"
    },
    {
        "id_disco": 889,
        "id": 62,
        "nombre_disco": "2008 - iSelect (Compilación)",
        "link": "http://hinafinea.com/3vAK"
    },
    {
        "id_disco": 890,
        "id": 62,
        "nombre_disco": "2008 - Live Santa Monica 72 (Live Album)",
        "link": "http://hinafinea.com/3vAi"
    },
    {
        "id_disco": 891,
        "id": 62,
        "nombre_disco": "2010 - A Reality Tour (Live Album)",
        "link": "http://hinafinea.com/3vBx"
    },
    {
        "id_disco": 892,
        "id": 62,
        "nombre_disco": "2013 - The Next Day (Deluxe Version)",
        "link": "http://hinafinea.com/3vCd"
    },
    {
        "id_disco": 893,
        "id": 62,
        "nombre_disco": "2014 - Nothing Has Changed (Compilation)",
        "link": "http://hinafinea.com/3vD7"
    },
    {
        "id_disco": 894,
        "id": 62,
        "nombre_disco": "2016 - Blackstar",
        "link": "http://hinafinea.com/3vDf"
    },
    {
        "id_disco": 895,
        "id": 62,
        "nombre_disco": "2016 - Lazarus (Original Cast Recording)",
        "link": "http://hinafinea.com/3vEI"
    },
    {
        "id_disco": 896,
        "id": 62,
        "nombre_disco": "2017 - Cracked Actor (Live Los Angeles 74)",
        "link": "http://hinafinea.com/3vEd"
    },
    {
        "id_disco": 897,
        "id": 62,
        "nombre_disco": "2017 - Live Nassau Coliseum 76",
        "link": "http://hinafinea.com/3vEv"
    },
    {
        "id_disco": 898,
        "id": 62,
        "nombre_disco": "2017 - No Plan (EP)",
        "link": "http://hinafinea.com/3vFC"
    },
    {
        "id_disco": 899,
        "id": 62,
        "nombre_disco": "Singles",
        "link": "http://hinafinea.com/3vFm"
    },
    {
        "id_disco": 900,
        "id": 63,
        "nombre_disco": "1991 - Demo",
        "link": "http://hinafinea.com/3wm3"
    },
    {
        "id_disco": 901,
        "id": 63,
        "nombre_disco": "1991 - Demo II",
        "link": "http://hinafinea.com/3wmP"
    },
    {
        "id_disco": 902,
        "id": 63,
        "nombre_disco": "1992 - 03 LP Bootleg (Vinyl Maniac Rec 001) (Flac)",
        "link": "http://hinafinea.com/3wmg"
    },
    {
        "id_disco": 903,
        "id": 63,
        "nombre_disco": "1992 - Burzum",
        "link": "http://hinafinea.com/3wmz"
    },
    {
        "id_disco": 904,
        "id": 63,
        "nombre_disco": "1992 - Svarte Dauen",
        "link": "http://hinafinea.com/3wnO"
    },
    {
        "id_disco": 905,
        "id": 63,
        "nombre_disco": "1993 - Aske (EP)",
        "link": "http://hinafinea.com/3wnk"
    },
    {
        "id_disco": 906,
        "id": 63,
        "nombre_disco": "1993 - Burzum l Aske",
        "link": "http://hinafinea.com/3wo3"
    },
    {
        "id_disco": 907,
        "id": 63,
        "nombre_disco": "1994 - Det Som Engang Var",
        "link": "http://hinafinea.com/3woM"
    },
    {
        "id_disco": 908,
        "id": 63,
        "nombre_disco": "1994 - Hvis lyset tar oss",
        "link": "http://hinafinea.com/3wok"
    },
    {
        "id_disco": 909,
        "id": 63,
        "nombre_disco": "1996 - Filosofem",
        "link": "http://hinafinea.com/3wp4"
    },
    {
        "id_disco": 910,
        "id": 63,
        "nombre_disco": "1997 - Dauði Baldrs",
        "link": "http://hinafinea.com/3wpO"
    },
    {
        "id_disco": 911,
        "id": 63,
        "nombre_disco": "1998 - Gummo (OST compilation)",
        "link": "http://hinafinea.com/3wpt"
    },
    {
        "id_disco": 912,
        "id": 63,
        "nombre_disco": "1998 - Presumed Guilty",
        "link": "http://hinafinea.com/3wqO"
    },
    {
        "id_disco": 913,
        "id": 63,
        "nombre_disco": "1999 - Hliðskjálf",
        "link": "http://hinafinea.com/3wqh"
    },
    {
        "id_disco": 914,
        "id": 64,
        "nombre_disco": "1989 - Cannibal Corpse (Demo)",
        "link": "http://hinafinea.com/3wrr"
    },
    {
        "id_disco": 915,
        "id": 64,
        "nombre_disco": "1990 - Eaten Back To Life",
        "link": "http://hinafinea.com/3ws9"
    },
    {
        "id_disco": 916,
        "id": 64,
        "nombre_disco": "1991 - Butchered At Birth",
        "link": "http://hinafinea.com/3wsv"
    },
    {
        "id_disco": 917,
        "id": 64,
        "nombre_disco": "1992 - Tomb of the Mutilated",
        "link": "http://hinafinea.com/3wtI"
    },
    {
        "id_disco": 918,
        "id": 64,
        "nombre_disco": "1993 - Hammer Smashed Face (EP)",
        "link": "http://hinafinea.com/3wtk"
    },
    {
        "id_disco": 919,
        "id": 64,
        "nombre_disco": "1994 - The Bleeding",
        "link": "http://hinafinea.com/3wuN"
    },
    {
        "id_disco": 920,
        "id": 64,
        "nombre_disco": "1995 - Created to Kill (Demo)",
        "link": "http://hinafinea.com/3wue"
    },
    {
        "id_disco": 921,
        "id": 64,
        "nombre_disco": "1996 - Vile",
        "link": "http://hinafinea.com/3wv3"
    },
    {
        "id_disco": 922,
        "id": 64,
        "nombre_disco": "1998 - Gallery Of Suicide",
        "link": "http://hinafinea.com/3wvU"
    },
    {
        "id_disco": 923,
        "id": 64,
        "nombre_disco": "1999 - Bloodthirst",
        "link": "http://hinafinea.com/3wvr"
    },
    {
        "id_disco": 924,
        "id": 64,
        "nombre_disco": "2000 - Live Cannibalism",
        "link": "http://hinafinea.com/3wwU"
    },
    {
        "id_disco": 925,
        "id": 64,
        "nombre_disco": "2002 - Gore Obsessed",
        "link": "http://hinafinea.com/3wx3"
    },
    {
        "id_disco": 926,
        "id": 64,
        "nombre_disco": "2003 - Worm Infested (EP)",
        "link": "http://hinafinea.com/3wxM"
    },
    {
        "id_disco": 927,
        "id": 64,
        "nombre_disco": "2004 - The Wretched Spawn",
        "link": "http://hinafinea.com/3wzc"
    },
    {
        "id_disco": 928,
        "id": 64,
        "nombre_disco": "2006 - Kill",
        "link": "http://hinafinea.com/3wzx"
    },
    {
        "id_disco": 929,
        "id": 64,
        "nombre_disco": "2009 - Evisceration Plague",
        "link": "http://hinafinea.com/3x0F"
    },
    {
        "id_disco": 930,
        "id": 64,
        "nombre_disco": "2012 - Torture",
        "link": "http://hinafinea.com/3x0h"
    },
    {
        "id_disco": 931,
        "id": 64,
        "nombre_disco": "2013 - Torturing and Eviscerating Live",
        "link": "http://hinafinea.com/3x17"
    },
    {
        "id_disco": 932,
        "id": 64,
        "nombre_disco": "2014 - A Skeletal Domain",
        "link": "http://hinafinea.com/3x1e"
    },
    {
        "id_disco": 933,
        "id": 65,
        "nombre_disco": "1987 - Flesh Ripping Sonic Torment (Demo)",
        "link": "http://hinafinea.com/3x2Y"
    },
    {
        "id_disco": 934,
        "id": 65,
        "nombre_disco": "1988 - Carcass & Napalm Death Split Live",
        "link": "http://hinafinea.com/3x31"
    },
    {
        "id_disco": 935,
        "id": 65,
        "nombre_disco": "1988 - Reek Of Putrefaction",
        "link": "http://hinafinea.com/3x3H"
    },
    {
        "id_disco": 936,
        "id": 65,
        "nombre_disco": "1988 - Symphonies of Sickness (Demo)",
        "link": "http://hinafinea.com/3x3a"
    },
    {
        "id_disco": 937,
        "id": 65,
        "nombre_disco": "1989 - Live  Planet X  Liverpool (Bootleg)",
        "link": "http://hinafinea.com/3x3p"
    },
    {
        "id_disco": 938,
        "id": 65,
        "nombre_disco": "1989 - Pathologic (EP)",
        "link": "http://hinafinea.com/3x4E"
    },
    {
        "id_disco": 939,
        "id": 65,
        "nombre_disco": "1989 - Symphonies Of Sickness",
        "link": "http://hinafinea.com/3x4b"
    },
    {
        "id_disco": 940,
        "id": 65,
        "nombre_disco": "1989 - The Peel Sessions (EP)",
        "link": "http://hinafinea.com/3x5B"
    },
    {
        "id_disco": 941,
        "id": 65,
        "nombre_disco": "1990 - Live at St. Georges Hall (EP)",
        "link": "http://hinafinea.com/3x5T"
    },
    {
        "id_disco": 942,
        "id": 65,
        "nombre_disco": "1990 - Live Dismemberment (Bootleg)",
        "link": "http://hinafinea.com/3x6C"
    },
    {
        "id_disco": 943,
        "id": 65,
        "nombre_disco": "1991 - Necroticism - Descanting The Insalubrious",
        "link": "http://hinafinea.com/3x6k"
    },
    {
        "id_disco": 944,
        "id": 65,
        "nombre_disco": "1992 - Carcass & Cathedral Gods Of Grind Tour",
        "link": "http://hinafinea.com/3x6z"
    },
    {
        "id_disco": 945,
        "id": 65,
        "nombre_disco": "1992 - Carcass  Entombed  Cathedral & Confessor Gods Of Grind",
        "link": "http://hinafinea.com/3x7K"
    },
    {
        "id_disco": 946,
        "id": 65,
        "nombre_disco": "1992 - Tools Of The Trade (EP)",
        "link": "http://hinafinea.com/3x7Y"
    },
    {
        "id_disco": 947,
        "id": 65,
        "nombre_disco": "1993 - Heartwork",
        "link": "http://hinafinea.com/3x7w"
    },
    {
        "id_disco": 948,
        "id": 65,
        "nombre_disco": "1993 - Pre-Heartwork Parr Street Demos (Demo)",
        "link": "http://hinafinea.com/3x8T"
    },
    {
        "id_disco": 949,
        "id": 65,
        "nombre_disco": "1993 - The Heartwork (EP)",
        "link": "http://hinafinea.com/3x97"
    },
    {
        "id_disco": 950,
        "id": 65,
        "nombre_disco": "1994 - Buried Dreams (Bootleg)",
        "link": "http://hinafinea.com/3x9t"
    },
    {
        "id_disco": 951,
        "id": 65,
        "nombre_disco": "1996 - Swansong",
        "link": "http://hinafinea.com/3xAJ"
    },
    {
        "id_disco": 952,
        "id": 65,
        "nombre_disco": "1996 - Wake Up And Smell the. Carcass",
        "link": "http://hinafinea.com/3xAr"
    },
    {
        "id_disco": 953,
        "id": 65,
        "nombre_disco": "2003 - Flesh Ripping Symphony",
        "link": "http://hinafinea.com/3xBA"
    },
    {
        "id_disco": 954,
        "id": 65,
        "nombre_disco": "2008 - Live In Montreal (Bootleg)",
        "link": "http://hinafinea.com/3xBX"
    },
    {
        "id_disco": 955,
        "id": 65,
        "nombre_disco": "2009 - Live At Maiden Fest (Bootleg)",
        "link": "http://hinafinea.com/3xBt"
    },
    {
        "id_disco": 956,
        "id": 65,
        "nombre_disco": "2013 - Surgical Steel",
        "link": "http://hinafinea.com/3xCC"
    },
    {
        "id_disco": 957,
        "id": 65,
        "nombre_disco": "2014 - Surgical Remission-Surplus Steel (EP)",
        "link": "http://hinafinea.com/3xCb"
    },
    {
        "id_disco": 958,
        "id": 65,
        "nombre_disco": "Best Of Carcass",
        "link": "http://hinafinea.com/3xD3"
    },
    {
        "id_disco": 959,
        "id": 66,
        "nombre_disco": "[2016] DROWN IN DESIGNER",
        "link": "http://hinafinea.com/3xE1"
    },
    {
        "id_disco": 960,
        "id": 66,
        "nombre_disco": "[2016] Slaps For My Drop-Top Mini-Van",
        "link": "http://hinafinea.com/3xEP"
    },
    {
        "id_disco": 961,
        "id": 66,
        "nombre_disco": "[2016] VERY RARE LOST FILES",
        "link": "http://hinafinea.com/3xEj"
    },
    {
        "id_disco": 962,
        "id": 66,
        "nombre_disco": "[2017] YOUWILLREGRET",
        "link": "http://hinafinea.com/3xF0"
    },
    {
        "id_disco": 963,
        "id": 66,
        "nombre_disco": "[2018] Beware the Book of Eli",
        "link": "http://hinafinea.com/3xFJ"
    },
    {
        "id_disco": 964,
        "id": 66,
        "nombre_disco": "[2018] STOKELEY",
        "link": "http://hinafinea.com/3xFa"
    },
    {
        "id_disco": 965,
        "id": 66,
        "nombre_disco": "Singles & Features",
        "link": "http://hinafinea.com/3xG7"
    },
    {
        "id_disco": 966,
        "id": 67,
        "nombre_disco": "2015 - JONGHYUN The Collection Story Op.1",
        "link": "http://homoluath.com/1YeR"
    },
    {
        "id_disco": 967,
        "id": 67,
        "nombre_disco": "2015 - The 1st Mini Album BASE",
        "link": "http://homoluath.com/1Yeg"
    },
    {
        "id_disco": 968,
        "id": 67,
        "nombre_disco": "2016 - She is - The 1st Album",
        "link": "http://homoluath.com/1Yew"
    },
    {
        "id_disco": 969,
        "id": 67,
        "nombre_disco": "2018 - Poet Artist",
        "link": "http://homoluath.com/1YfP"
    },
    {
        "id_disco": 970,
        "id": 67,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1YgA"
    },
    {
        "id_disco": 971,
        "id": 68,
        "nombre_disco": "2018 - FACE - The 1st Album",
        "link": "http://homoluath.com/1YhW"
    },
    {
        "id_disco": 972,
        "id": 68,
        "nombre_disco": "2018 - Hologram",
        "link": "http://homoluath.com/1Yi1"
    },
    {
        "id_disco": 973,
        "id": 68,
        "nombre_disco": "2019 - I Wanna Be - The 1st Album Repackage",
        "link": "http://homoluath.com/1YiT"
    },
    {
        "id_disco": 974,
        "id": 68,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1Yit"
    },
    {
        "id_disco": 975,
        "id": 69,
        "nombre_disco": "2017 - Winter Special Gift",
        "link": "http://homoluath.com/1Yjf"
    },
    {
        "id_disco": 976,
        "id": 69,
        "nombre_disco": "2018 - NAMANANA - The 3rd Album",
        "link": "http://homoluath.com/1YkN"
    },
    {
        "id_disco": 977,
        "id": 69,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1Ykd"
    },
    {
        "id_disco": 978,
        "id": 70,
        "nombre_disco": "2019 - I`m Home - SM STATION",
        "link": "http://homoluath.com/1YmM"
    },
    {
        "id_disco": 979,
        "id": 71,
        "nombre_disco": "2018 - VOICE - The 1st Mini Album",
        "link": "http://homoluath.com/1Ynb"
    },
    {
        "id_disco": 980,
        "id": 72,
        "nombre_disco": "2018 - Drunk on love - The 2nd Mini Album",
        "link": "http://homoluath.com/1YpW"
    },
    {
        "id_disco": 981,
        "id": 73,
        "nombre_disco": "2018 - A Star Is Born Soundtrack",
        "link": "http://homoluath.com/1Yrc"
    },
    {
        "id_disco": 982,
        "id": 73,
        "nombre_disco": "2018 - Love  Simon (Original Motion Picture Soundtrack)",
        "link": "http://homoluath.com/1Yrv"
    },
    {
        "id_disco": 983,
        "id": 73,
        "nombre_disco": "2019 - For the Throne (Music Inspired by the HBO Series Game of Thrones)",
        "link": "http://homoluath.com/1YsD"
    },
    {
        "id_disco": 984,
        "id": 73,
        "nombre_disco": "2019 - Game of Thrones Season 8 (Music from the HBO Series)",
        "link": "http://homoluath.com/1YsT"
    },
    {
        "id_disco": 985,
        "id": 73,
        "nombre_disco": "2019 - The Greatest Showman (Original Motion Picture Soundtrack)",
        "link": "http://homoluath.com/1Ysv"
    },
    {
        "id_disco": 986,
        "id": 74,
        "nombre_disco": "2014 - The 7th Album MAMACITA",
        "link": "http://homoluath.com/1Yu6"
    },
    {
        "id_disco": 987,
        "id": 74,
        "nombre_disco": "2015 - DEVIL (SPECIAL ALBUM)",
        "link": "http://homoluath.com/1YuL"
    },
    {
        "id_disco": 988,
        "id": 74,
        "nombre_disco": "2017 - PLAY - The 8th Album",
        "link": "http://homoluath.com/1Yub"
    },
    {
        "id_disco": 989,
        "id": 74,
        "nombre_disco": "2019 - One More Time - Special Mini Album",
        "link": "http://homoluath.com/1YvL"
    },
    {
        "id_disco": 990,
        "id": 74,
        "nombre_disco": "2019 - Time_Slip - The 9th Album",
        "link": "http://homoluath.com/1Yvj"
    },
    {
        "id_disco": 991,
        "id": 74,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1Yw0"
    },
    {
        "id_disco": 992,
        "id": 75,
        "nombre_disco": "2018 - Something New - The 3rd Mini Album",
        "link": "http://homoluath.com/1Yy4"
    },
    {
        "id_disco": 993,
        "id": 75,
        "nombre_disco": "2019 - Purpose - The 2nd Album",
        "link": "http://homoluath.com/1YyI"
    },
    {
        "id_disco": 994,
        "id": 75,
        "nombre_disco": "2019 - VOICE",
        "link": "http://homoluath.com/1YzV"
    },
    {
        "id_disco": 995,
        "id": 75,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1Yzg"
    },
    {
        "id_disco": 996,
        "id": 76,
        "nombre_disco": "2011 - TOXIC",
        "link": "http://homoluath.com/1Z1M"
    },
    {
        "id_disco": 997,
        "id": 77,
        "nombre_disco": "2004 - Dead Letters",
        "link": "http://homoluath.com/1Z2J"
    },
    {
        "id_disco": 998,
        "id": 78,
        "nombre_disco": "2015 - 1st Mini Album - 17 CARAT",
        "link": "http://homoluath.com/1Z4G"
    },
    {
        "id_disco": 999,
        "id": 78,
        "nombre_disco": "2015 - 2nd Mini Album BOYS BE",
        "link": "http://homoluath.com/1Z4S"
    },
    {
        "id_disco": 1000,
        "id": 78,
        "nombre_disco": "2016 - 1st Album First LOVE&LETTER",
        "link": "http://homoluath.com/1Z4p"
    },
    {
        "id_disco": 1001,
        "id": 78,
        "nombre_disco": "2016 - Going Seventeen",
        "link": "http://homoluath.com/1Z5L"
    },
    {
        "id_disco": 1002,
        "id": 78,
        "nombre_disco": "2016 - Love&Letter Repackage Album edit",
        "link": "http://homoluath.com/1Z5a"
    },
    {
        "id_disco": 1003,
        "id": 78,
        "nombre_disco": "2017 - 2ND ALBUM `TEEN  AGE`",
        "link": "http://homoluath.com/1Z5u"
    },
    {
        "id_disco": 1004,
        "id": 78,
        "nombre_disco": "2017 - 4th Mini Album `Al1`",
        "link": "http://homoluath.com/1Z6T"
    },
    {
        "id_disco": 1005,
        "id": 78,
        "nombre_disco": "2018 - 5TH MINI ALBUM `YOU MAKE MY DAY`",
        "link": "http://homoluath.com/1Z6n"
    },
    {
        "id_disco": 1006,
        "id": 78,
        "nombre_disco": "2018 - SPECIAL ALBUM `DIRECTOR`S CUT` full",
        "link": "http://homoluath.com/1Z79"
    },
    {
        "id_disco": 1007,
        "id": 78,
        "nombre_disco": "2018 - WE MAKE YOU - EP",
        "link": "http://homoluath.com/1Z7e"
    },
    {
        "id_disco": 1008,
        "id": 78,
        "nombre_disco": "2019 - 3RD ALBUM ‘An Ode’",
        "link": "http://homoluath.com/1Z7x"
    },
    {
        "id_disco": 1009,
        "id": 78,
        "nombre_disco": "2019 - 6TH MINI ALBUM `YOU MADE MY DAWN`",
        "link": "http://homoluath.com/1Z8C"
    },
    {
        "id_disco": 1010,
        "id": 78,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1Z8L"
    },
    {
        "id_disco": 1011,
        "id": 79,
        "nombre_disco": "2014 - The 1st Mini Album ´ACE´",
        "link": "http://homoluath.com/1Z8t"
    },
    {
        "id_disco": 1012,
        "id": 79,
        "nombre_disco": "2016 -さよならひとり (sayonara hitori)",
        "link": "http://homoluath.com/1Z9P"
    },
    {
        "id_disco": 1013,
        "id": 79,
        "nombre_disco": "2017 - Flame of Love",
        "link": "http://homoluath.com/1Z9b"
    },
    {
        "id_disco": 1014,
        "id": 79,
        "nombre_disco": "2017 - MOVE The 2nd Album",
        "link": "http://homoluath.com/1Z9w"
    },
    {
        "id_disco": 1015,
        "id": 79,
        "nombre_disco": "2017 - MOVE-ing - The 2nd Album Repackage",
        "link": "http://homoluath.com/1ZAY"
    },
    {
        "id_disco": 1016,
        "id": 79,
        "nombre_disco": "2017 - Press It - The 1st Album",
        "link": "http://homoluath.com/1ZAr"
    },
    {
        "id_disco": 1017,
        "id": 79,
        "nombre_disco": "2018 - TAEMIN",
        "link": "http://homoluath.com/1ZBp"
    },
    {
        "id_disco": 1018,
        "id": 79,
        "nombre_disco": "2019 - 「Famous」",
        "link": "http://homoluath.com/1ZC8"
    },
    {
        "id_disco": 1019,
        "id": 79,
        "nombre_disco": "2019 - WANT - The 2nd Mini Album",
        "link": "http://homoluath.com/1ZCI"
    },
    {
        "id_disco": 1020,
        "id": 79,
        "nombre_disco": "Ost  Fts  Singles y Otros",
        "link": "http://homoluath.com/1ZCV"
    },
    {
        "id_disco": 1021,
        "id": 80,
        "nombre_disco": "2014 - HEIZE",
        "link": "http://homoluath.com/1ZFE"
    },
    {
        "id_disco": 1022,
        "id": 80,
        "nombre_disco": "2016 - And July",
        "link": "http://homoluath.com/1ZFQ"
    },
    {
        "id_disco": 1023,
        "id": 80,
        "nombre_disco": "2017 - (You  Dark Clouds  Rain)",
        "link": "http://homoluath.com/1ZFk"
    },
    {
        "id_disco": 1024,
        "id": 80,
        "nombre_disco": "2018 - 바람 (Wish & Wind)",
        "link": "http://homoluath.com/1ZFz"
    },
    {
        "id_disco": 1025,
        "id": 80,
        "nombre_disco": "2019 - Shes Fine",
        "link": "http://homoluath.com/1ZGJ"
    },
    {
        "id_disco": 1026,
        "id": 80,
        "nombre_disco": "2019 - 만추 (Late Autumn )",
        "link": "http://homoluath.com/1ZGd"
    },
    {
        "id_disco": 1027,
        "id": 80,
        "nombre_disco": "Singles",
        "link": "http://homoluath.com/1ZGu"
    },
    {
        "id_disco": 1028,
        "id": 80,
        "nombre_disco": "Song FT",
        "link": "http://homoluath.com/1ZHK"
    },
    {
        "id_disco": 1029,
        "id": 80,
        "nombre_disco": "Songs Ost",
        "link": "http://homoluath.com/1ZHf"
    },
    {
        "id_disco": 1030,
        "id": 81,
        "nombre_disco": "2018 - Brava",
        "link": "http://ellevolaw.com/19Al"
    },
    {
        "id_disco": 1031,
        "id": 82,
        "nombre_disco": "2015 - Launcher",
        "link": "http://ellevolaw.com/19Bw"
    },
    {
        "id_disco": 1032,
        "id": 82,
        "nombre_disco": "2016 - LUCKY Hi FiVE!",
        "link": "http://ellevolaw.com/19CS"
    },
    {
        "id_disco": 1033,
        "id": 82,
        "nombre_disco": "2017 - LiTTLE DEViL PARADE",
        "link": "http://ellevolaw.com/19Cn"
    },
    {
        "id_disco": 1034,
        "id": 82,
        "nombre_disco": "LiSA Singles",
        "link": "http://ellevolaw.com/19DT"
    },
    {
        "id_disco": 1035,
        "id": 83,
        "nombre_disco": "2018 - LM5 (Deluxe)",
        "link": "http://ellevolaw.com/19F3"
    },
    {
        "id_disco": 1036,
        "id": 84,
        "nombre_disco": "2018 - BLUES",
        "link": "http://ellevolaw.com/19JD"
    },
    {
        "id_disco": 1037,
        "id": 84,
        "nombre_disco": "2018 - RED MOON",
        "link": "http://ellevolaw.com/19Jj"
    },
    {
        "id_disco": 1038,
        "id": 84,
        "nombre_disco": "2018 - YELLOW FLOWER",
        "link": "http://ellevolaw.com/19KU"
    },
    {
        "id_disco": 1039,
        "id": 84,
        "nombre_disco": "2019 - reality in BLACK",
        "link": "http://ellevolaw.com/19L3"
    },
    {
        "id_disco": 1040,
        "id": 84,
        "nombre_disco": "2019 - WHITE WIND",
        "link": "http://ellevolaw.com/19Lq"
    },
    {
        "id_disco": 1041,
        "id": 84,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/19MM"
    },
    {
        "id_disco": 1042,
        "id": 85,
        "nombre_disco": "2015 - Cry Baby (Deluxe Edition)",
        "link": "http://ellevolaw.com/19Ni"
    },
    {
        "id_disco": 1043,
        "id": 85,
        "nombre_disco": "2019 - K12",
        "link": "http://ellevolaw.com/19OD"
    },
    {
        "id_disco": 1044,
        "id": 85,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/19Ow"
    },
    {
        "id_disco": 1045,
        "id": 86,
        "nombre_disco": "2018 - ARE YOU THERE - The 2nd Album Take.1",
        "link": "http://ellevolaw.com/19Sy"
    },
    {
        "id_disco": 1046,
        "id": 86,
        "nombre_disco": "2019 - WE ARE HERE - The 2nd Album Take.2",
        "link": "http://ellevolaw.com/19Td"
    },
    {
        "id_disco": 1047,
        "id": 86,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/19UB"
    },
    {
        "id_disco": 1048,
        "id": 87,
        "nombre_disco": "2017 - NCT #127 CHERRY BOMB - The 3rd Mini Album",
        "link": "http://ellevolaw.com/19Vc"
    },
    {
        "id_disco": 1049,
        "id": 87,
        "nombre_disco": "2018 - CHAIN - EP",
        "link": "http://ellevolaw.com/19W6"
    },
    {
        "id_disco": 1050,
        "id": 87,
        "nombre_disco": "2018 - NCT #127 Regular-Irregular - The 1st Album",
        "link": "http://ellevolaw.com/19Wb"
    },
    {
        "id_disco": 1051,
        "id": 87,
        "nombre_disco": "2018 - NCT 2018 EMPATHY",
        "link": "http://ellevolaw.com/19XF"
    },
    {
        "id_disco": 1052,
        "id": 87,
        "nombre_disco": "2018 - Up Next Session",
        "link": "http://ellevolaw.com/19YU"
    },
    {
        "id_disco": 1053,
        "id": 87,
        "nombre_disco": "2018 - We Go Up - The 2nd Mini Album",
        "link": "http://ellevolaw.com/19ZK"
    },
    {
        "id_disco": 1054,
        "id": 87,
        "nombre_disco": "2019 - NCT #127 WE ARE SUPERHUMAN - The 4th Mini Album",
        "link": "http://ellevolaw.com/19a7"
    },
    {
        "id_disco": 1055,
        "id": 87,
        "nombre_disco": "2019 - NEO CITY SEOUL - The Origin - The 1st Live Album",
        "link": "http://ellevolaw.com/19bE"
    },
    {
        "id_disco": 1056,
        "id": 87,
        "nombre_disco": "2019 - We Boom - The 3rd Mini Album",
        "link": "http://ellevolaw.com/19c0"
    },
    {
        "id_disco": 1057,
        "id": 87,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/19cb"
    },
    {
        "id_disco": 1058,
        "id": 88,
        "nombre_disco": "2019 - The 7th Mini Album ‘The Table’",
        "link": "http://ellevolaw.com/19f3"
    },
    {
        "id_disco": 1059,
        "id": 89,
        "nombre_disco": "2019 - ‘The ReVe Festival’ Finale",
        "link": "http://ellevolaw.com/19j7"
    },
    {
        "id_disco": 1060,
        "id": 89,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/19k5"
    },
    {
        "id_disco": 1061,
        "id": 90,
        "nombre_disco": "2015 - RM (MIXTAPE)",
        "link": "http://ellevolaw.com/19l7"
    },
    {
        "id_disco": 1062,
        "id": 90,
        "nombre_disco": "2018 - mono",
        "link": "http://ellevolaw.com/19lZ"
    },
    {
        "id_disco": 1063,
        "id": 91,
        "nombre_disco": "2013 - STANDARD",
        "link": "http://ellevolaw.com/1AAs"
    },
    {
        "id_disco": 1064,
        "id": 91,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1ABo"
    },
    {
        "id_disco": 1065,
        "id": 92,
        "nombre_disco": "2019 - Clé _ LEVANTER",
        "link": "http://ellevolaw.com/1AHO"
    },
    {
        "id_disco": 1066,
        "id": 92,
        "nombre_disco": "2019 - Clé 1 MIROH",
        "link": "http://ellevolaw.com/1AHw"
    },
    {
        "id_disco": 1067,
        "id": 92,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1AJS"
    },
    {
        "id_disco": 1068,
        "id": 93,
        "nombre_disco": "2013 - Racine Carree",
        "link": "http://ellevolaw.com/1AL2"
    },
    {
        "id_disco": 1069,
        "id": 94,
        "nombre_disco": "2016 - Agust D",
        "link": "http://ellevolaw.com/1AMn"
    },
    {
        "id_disco": 1070,
        "id": 95,
        "nombre_disco": "2018 - Bloom",
        "link": "http://ellevolaw.com/1APO"
    },
    {
        "id_disco": 1071,
        "id": 95,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1APu"
    },
    {
        "id_disco": 1072,
        "id": 96,
        "nombre_disco": "2019 - Take Off - The 1st Mini Album",
        "link": "http://ellevolaw.com/1AYY"
    },
    {
        "id_disco": 1073,
        "id": 96,
        "nombre_disco": "2019 - Take Over The Moon – The 2nd Mini Album",
        "link": "http://ellevolaw.com/1AZ1"
    },
    {
        "id_disco": 1074,
        "id": 96,
        "nombre_disco": "2019 - The Vision - The 1st Digital EP",
        "link": "http://ellevolaw.com/1AZd"
    },
    {
        "id_disco": 1075,
        "id": 96,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1AaH"
    },
    {
        "id_disco": 1076,
        "id": 97,
        "nombre_disco": "2018 - Palo Santo (Deluxe)",
        "link": "http://ellevolaw.com/1Abw"
    },
    {
        "id_disco": 1077,
        "id": 97,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1AcT"
    },
    {
        "id_disco": 1078,
        "id": 98,
        "nombre_disco": "2007 - GOTHIC LOLITA PROPAGANDA",
        "link": "http://ellevolaw.com/1AfS"
    },
    {
        "id_disco": 1079,
        "id": 98,
        "nombre_disco": "2007 - metanoia",
        "link": "http://ellevolaw.com/1Ag5"
    },
    {
        "id_disco": 1080,
        "id": 98,
        "nombre_disco": "2009 - Gothic Lolita Doctrine",
        "link": "http://ellevolaw.com/1AhA"
    },
    {
        "id_disco": 1081,
        "id": 98,
        "nombre_disco": "2010 - gothic lolita agitator",
        "link": "http://ellevolaw.com/1Ahh"
    },
    {
        "id_disco": 1082,
        "id": 98,
        "nombre_disco": "2013 - PAX VESANIA",
        "link": "http://ellevolaw.com/1AiG"
    },
    {
        "id_disco": 1083,
        "id": 98,
        "nombre_disco": "2014 - Hades The other world",
        "link": "http://ellevolaw.com/1Aia"
    },
    {
        "id_disco": 1084,
        "id": 98,
        "nombre_disco": "2015 - SHADOW CORPS[e]",
        "link": "http://ellevolaw.com/1Aj6"
    },
    {
        "id_disco": 1085,
        "id": 98,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1Ajk"
    },
    {
        "id_disco": 1086,
        "id": 99,
        "nombre_disco": "2018 - Icarus Falls",
        "link": "http://ellevolaw.com/1Alc"
    },
    {
        "id_disco": 1087,
        "id": 100,
        "nombre_disco": "2019 - The 1st Mini Album",
        "link": "http://ellevolaw.com/1AoQ"
    },
    {
        "id_disco": 1088,
        "id": 100,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1Aot"
    },
    {
        "id_disco": 1089,
        "id": 101,
        "nombre_disco": "2018 - WARNING",
        "link": "http://ellevolaw.com/1Aqh"
    },
    {
        "id_disco": 1090,
        "id": 101,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1ArC"
    },
    {
        "id_disco": 1091,
        "id": 102,
        "nombre_disco": "2011 - When the Sun Goes Down",
        "link": "http://pladollmo.com/3oUa"
    },
    {
        "id_disco": 1092,
        "id": 102,
        "nombre_disco": "2015 - Revival (Deluxe)",
        "link": "http://pladollmo.com/3oV1"
    },
    {
        "id_disco": 1093,
        "id": 102,
        "nombre_disco": "2020 - Rare",
        "link": "http://pladollmo.com/3oVf"
    },
    {
        "id_disco": 1094,
        "id": 102,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/3oWF"
    },
    {
        "id_disco": 1095,
        "id": 103,
        "nombre_disco": "2018 - I am",
        "link": "http://pladollmo.com/4Vwx"
    },
    {
        "id_disco": 1096,
        "id": 103,
        "nombre_disco": "2019 - I made",
        "link": "http://pladollmo.com/4Vwy"
    },
    {
        "id_disco": 1097,
        "id": 103,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/4Vwz"
    },
    {
        "id_disco": 1098,
        "id": 104,
        "nombre_disco": "2019 - UNDER COVER THE MAD SQUAD",
        "link": "http://pladollmo.com/4W19"
    },
    {
        "id_disco": 1099,
        "id": 105,
        "nombre_disco": "Pack 2019",
        "link": "http://pladollmo.com/4W2c"
    },
    {
        "id_disco": 1100,
        "id": 106,
        "nombre_disco": "2000 - Se Morir",
        "link": "http://pladollmo.com/4W5L"
    },
    {
        "id_disco": 1101,
        "id": 106,
        "nombre_disco": "2001 - El Carpintero",
        "link": "http://pladollmo.com/4W5V"
    },
    {
        "id_disco": 1102,
        "id": 106,
        "nombre_disco": "2002 - Siempre queda una cancion - En Vivo",
        "link": "http://pladollmo.com/4W5k"
    },
    {
        "id_disco": 1103,
        "id": 106,
        "nombre_disco": "2003 - Cancion rota",
        "link": "http://pladollmo.com/4W5v"
    },
    {
        "id_disco": 1104,
        "id": 106,
        "nombre_disco": "2005 - Para Amarte Mejor",
        "link": "http://pladollmo.com/4W6C"
    },
    {
        "id_disco": 1105,
        "id": 106,
        "nombre_disco": "2009 - Dia Tras Dias",
        "link": "http://pladollmo.com/4W8H"
    },
    {
        "id_disco": 1106,
        "id": 106,
        "nombre_disco": "2012 - Banda Sonora",
        "link": "http://pladollmo.com/4W8S"
    },
    {
        "id_disco": 1107,
        "id": 106,
        "nombre_disco": "2014 - Basado en una Historia Real",
        "link": "http://pladollmo.com/4W8q"
    },
    {
        "id_disco": 1108,
        "id": 106,
        "nombre_disco": "2014 - En Directo Dos",
        "link": "http://pladollmo.com/4W9B"
    },
    {
        "id_disco": 1109,
        "id": 106,
        "nombre_disco": "2015 - Lo mejor que hay en mi vida",
        "link": "http://pladollmo.com/4W9Q"
    },
    {
        "id_disco": 1110,
        "id": 106,
        "nombre_disco": "2015 - Mil ciudades",
        "link": "http://pladollmo.com/4W9d"
    },
    {
        "id_disco": 1111,
        "id": 107,
        "nombre_disco": "2018 - TREASURE EP.1 All To Zero",
        "link": "http://pladollmo.com/4WBQ"
    },
    {
        "id_disco": 1112,
        "id": 107,
        "nombre_disco": "2019 - TREASURE EP.2 - Zero To One",
        "link": "http://pladollmo.com/4WBc"
    },
    {
        "id_disco": 1113,
        "id": 107,
        "nombre_disco": "2019 - TREASURE EP.3 One To All",
        "link": "http://pladollmo.com/4WBu"
    },
    {
        "id_disco": 1114,
        "id": 107,
        "nombre_disco": "2019 - TREASURE EP.EXTRA SHIFT THE MAP (Remixx!)",
        "link": "http://pladollmo.com/4WCG"
    },
    {
        "id_disco": 1115,
        "id": 107,
        "nombre_disco": "2019 - TREASURE EP.FIN All To Action",
        "link": "http://pladollmo.com/4WCU"
    },
    {
        "id_disco": 1116,
        "id": 107,
        "nombre_disco": "2020 - TREASURE EPILOGUE _ Action To Answer",
        "link": "http://pladollmo.com/4WCq"
    },
    {
        "id_disco": 1117,
        "id": 108,
        "nombre_disco": "2011 - Elevate",
        "link": "http://pladollmo.com/4WE6"
    },
    {
        "id_disco": 1118,
        "id": 108,
        "nombre_disco": "2012 - Big Time Rush Movie (Soundtrack) (EP)",
        "link": "http://pladollmo.com/4WEH"
    },
    {
        "id_disco": 1119,
        "id": 108,
        "nombre_disco": "2013 - 24-Seven",
        "link": "http://pladollmo.com/4WFD"
    },
    {
        "id_disco": 1120,
        "id": 109,
        "nombre_disco": "2016 - MADE",
        "link": "http://pladollmo.com/4WHG"
    },
    {
        "id_disco": 1121,
        "id": 109,
        "nombre_disco": "BIGBANG Singles",
        "link": "http://pladollmo.com/4WHV"
    },
    {
        "id_disco": 1122,
        "id": 110,
        "nombre_disco": "2016 - SQUARE ONE (EP)",
        "link": "http://pladollmo.com/4WI0"
    },
    {
        "id_disco": 1123,
        "id": 110,
        "nombre_disco": "2016 - SQUARE TWO (EP)",
        "link": "http://pladollmo.com/4WIJ"
    },
    {
        "id_disco": 1124,
        "id": 110,
        "nombre_disco": "2018 - SQUARE UP (Mini álbum)",
        "link": "http://pladollmo.com/4WIs"
    },
    {
        "id_disco": 1125,
        "id": 110,
        "nombre_disco": "2019 - Kill This Love (Mini álbum)",
        "link": "http://pladollmo.com/4WJ9"
    },
    {
        "id_disco": 1126,
        "id": 110,
        "nombre_disco": "BLACKPINK Singles",
        "link": "http://pladollmo.com/4WJQ"
    },
    {
        "id_disco": 1127,
        "id": 111,
        "nombre_disco": "2012 - Only One [7th Album]",
        "link": "http://pladollmo.com/4WPB"
    },
    {
        "id_disco": 1128,
        "id": 112,
        "nombre_disco": "2018 - Camila",
        "link": "http://ethobleo.com/2pgD"
    },
    {
        "id_disco": 1129,
        "id": 112,
        "nombre_disco": "2019 - Romance",
        "link": "http://pladollmo.com/4WX9"
    },
    {
        "id_disco": 1130,
        "id": 112,
        "nombre_disco": "Camila Cabello Singles",
        "link": "http://pladollmo.com/4Wgp"
    },
    {
        "id_disco": 1131,
        "id": 113,
        "nombre_disco": "2018 - Offset",
        "link": "http://pladollmo.com/4Wjd"
    },
    {
        "id_disco": 1132,
        "id": 113,
        "nombre_disco": "2019 - Flourishing (Mini Album)",
        "link": "http://pladollmo.com/4Wjq"
    },
    {
        "id_disco": 1133,
        "id": 114,
        "nombre_disco": "2015 - Question",
        "link": "http://pladollmo.com/4Wkk"
    },
    {
        "id_disco": 1134,
        "id": 114,
        "nombre_disco": "2015 - 첫사랑 (First Love)",
        "link": "http://pladollmo.com/4Wl9"
    },
    {
        "id_disco": 1135,
        "id": 114,
        "nombre_disco": "2016 - NU.CLEAR",
        "link": "http://pladollmo.com/4WlV"
    },
    {
        "id_disco": 1136,
        "id": 114,
        "nombre_disco": "2016 - REFRESH",
        "link": "http://pladollmo.com/4Wlv"
    },
    {
        "id_disco": 1137,
        "id": 114,
        "nombre_disco": "2016 - チャミスマ (Chamisma) - EP",
        "link": "http://pladollmo.com/4WmD"
    },
    {
        "id_disco": 1138,
        "id": 114,
        "nombre_disco": "2017 - CRYSTYLE",
        "link": "http://pladollmo.com/4Wmk"
    },
    {
        "id_disco": 1139,
        "id": 114,
        "nombre_disco": "2017 - FREE’SM",
        "link": "http://pladollmo.com/4Wn4"
    },
    {
        "id_disco": 1140,
        "id": 114,
        "nombre_disco": "2018 - BLACK DRESS",
        "link": "http://pladollmo.com/4WnJ"
    },
    {
        "id_disco": 1141,
        "id": 114,
        "nombre_disco": "2019 - No.1",
        "link": "http://pladollmo.com/4WnT"
    },
    {
        "id_disco": 1142,
        "id": 114,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/4Wnf"
    },
    {
        "id_disco": 1143,
        "id": 115,
        "nombre_disco": "2018 - Remember Us Youth Part 2",
        "link": "http://pladollmo.com/4WoH"
    },
    {
        "id_disco": 1144,
        "id": 115,
        "nombre_disco": "2018 - Shoot Me Youth Part.1",
        "link": "http://pladollmo.com/4WoT"
    },
    {
        "id_disco": 1145,
        "id": 115,
        "nombre_disco": "2019 - The Book of Us Entropy",
        "link": "http://pladollmo.com/4Wp6"
    },
    {
        "id_disco": 1146,
        "id": 115,
        "nombre_disco": "2019 - The Book of Us Gravity",
        "link": "http://pladollmo.com/4WpM"
    },
    {
        "id_disco": 1147,
        "id": 116,
        "nombre_disco": "2017 - Nightmare·Fall asleep in the mirror",
        "link": "http://pladollmo.com/4Wq0"
    },
    {
        "id_disco": 1148,
        "id": 116,
        "nombre_disco": "2017 - Prequel",
        "link": "http://pladollmo.com/4WqX"
    },
    {
        "id_disco": 1149,
        "id": 116,
        "nombre_disco": "2017 - 악몽 (惡夢) (Nightmare)",
        "link": "http://pladollmo.com/4Wqt"
    },
    {
        "id_disco": 1150,
        "id": 116,
        "nombre_disco": "2018 - Alone In The City",
        "link": "http://pladollmo.com/4WrA"
    },
    {
        "id_disco": 1151,
        "id": 116,
        "nombre_disco": "2018 - Nightmare·Escape the ERA",
        "link": "http://pladollmo.com/4WrO"
    },
    {
        "id_disco": 1152,
        "id": 116,
        "nombre_disco": "2019 - Raid of Dream",
        "link": "http://pladollmo.com/4Wre"
    },
    {
        "id_disco": 1153,
        "id": 116,
        "nombre_disco": "2019 - The End of Nightmare",
        "link": "http://pladollmo.com/4Wrl"
    },
    {
        "id_disco": 1154,
        "id": 116,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/4Wry"
    },
    {
        "id_disco": 1155,
        "id": 117,
        "nombre_disco": "2019 - ARRIVAL OF EVERGLOW",
        "link": "http://pladollmo.com/4WsT"
    },
    {
        "id_disco": 1156,
        "id": 117,
        "nombre_disco": "2019 - HUSH",
        "link": "http://pladollmo.com/4Wss"
    },
    {
        "id_disco": 1157,
        "id": 118,
        "nombre_disco": "2019 - City Lights - The 1st Mini Album",
        "link": "http://pladollmo.com/4X6H"
    },
    {
        "id_disco": 1158,
        "id": 119,
        "nombre_disco": "2016 - Hey Mama! - The 1st Mini Album",
        "link": "http://pladollmo.com/4X7n"
    },
    {
        "id_disco": 1159,
        "id": 119,
        "nombre_disco": "2018 - Blooming Days - The 2nd Mini Album",
        "link": "http://pladollmo.com/4X8C"
    },
    {
        "id_disco": 1160,
        "id": 119,
        "nombre_disco": "2018 - MAGIC",
        "link": "http://pladollmo.com/4X8d"
    },
    {
        "id_disco": 1161,
        "id": 119,
        "nombre_disco": "EXO-CBX - Paper Cuts",
        "link": "http://pladollmo.com/4X8v"
    },
    {
        "id_disco": 1162,
        "id": 120,
        "nombre_disco": "2019 - What a life - The 1st Mini Album",
        "link": "http://pladollmo.com/4XDB"
    },
    {
        "id_disco": 1163,
        "id": 121,
        "nombre_disco": "2017 - 7 for 7",
        "link": "http://pladollmo.com/4XEb"
    },
    {
        "id_disco": 1164,
        "id": 121,
        "nombre_disco": "2018 - Present YOU",
        "link": "http://pladollmo.com/4XHc"
    },
    {
        "id_disco": 1165,
        "id": 121,
        "nombre_disco": "2018 - Present YOU &ME Edition",
        "link": "http://pladollmo.com/4XHq"
    },
    {
        "id_disco": 1166,
        "id": 121,
        "nombre_disco": "2018 - Eyes On You",
        "link": "http://pladollmo.com/4XI2"
    },
    {
        "id_disco": 1167,
        "id": 121,
        "nombre_disco": "2019 - Call My Name - EP",
        "link": "http://pladollmo.com/4XII"
    },
    {
        "id_disco": 1168,
        "id": 121,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/4XKV"
    },
    {
        "id_disco": 1169,
        "id": 122,
        "nombre_disco": "2017 - Harry Styles",
        "link": "http://evassmat.com/9BIP"
    },
    {
        "id_disco": 1170,
        "id": 122,
        "nombre_disco": "2019 - Fine Line",
        "link": "http://ellevolaw.com/18pd"
    },
    {
        "id_disco": 1171,
        "id": 122,
        "nombre_disco": "Harry Styles Singles",
        "link": "http://ellevolaw.com/18q8"
    },
    {
        "id_disco": 1172,
        "id": 123,
        "nombre_disco": "2019 - HOLLAND",
        "link": "http://ellevolaw.com/18rQ"
    },
    {
        "id_disco": 1173,
        "id": 123,
        "nombre_disco": "2019 - LOVED YOU BETTER",
        "link": "http://ellevolaw.com/18ry"
    },
    {
        "id_disco": 1174,
        "id": 123,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/18sr"
    },
    {
        "id_disco": 1175,
        "id": 124,
        "nombre_disco": "2015 - WELCOME BACK (DEBUT FULL ALBUM)",
        "link": "http://ellevolaw.com/18v2"
    },
    {
        "id_disco": 1176,
        "id": 124,
        "nombre_disco": "2018 - NEW KIDS CONTINUE",
        "link": "http://ellevolaw.com/18vP"
    },
    {
        "id_disco": 1177,
        "id": 124,
        "nombre_disco": "2018 - Return",
        "link": "http://ellevolaw.com/18w9"
    },
    {
        "id_disco": 1178,
        "id": 124,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/18wl"
    },
    {
        "id_disco": 1179,
        "id": 125,
        "nombre_disco": "2018 - Hope World (MIXTAPE)",
        "link": "http://ellevolaw.com/190p"
    },
    {
        "id_disco": 1180,
        "id": 125,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/191L"
    },
    {
        "id_disco": 1181,
        "id": 126,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/192K"
    },
    {
        "id_disco": 1182,
        "id": 127,
        "nombre_disco": "2019 - Jade Bird",
        "link": "http://ellevolaw.com/194H"
    },
    {
        "id_disco": 1183,
        "id": 128,
        "nombre_disco": "2017 - 1st Mini Album Hola Hola",
        "link": "http://ellevolaw.com/195X"
    },
    {
        "id_disco": 1184,
        "id": 128,
        "nombre_disco": "2017 - You & Me (Full CD)",
        "link": "http://ellevolaw.com/1963"
    },
    {
        "id_disco": 1185,
        "id": 128,
        "nombre_disco": "2018 - KARD 3rd Mini Album `RIDE ON THE WIND`",
        "link": "http://ellevolaw.com/196T"
    },
    {
        "id_disco": 1186,
        "id": 128,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/196p"
    },
    {
        "id_disco": 1187,
        "id": 129,
        "nombre_disco": "2018 - D-DAY",
        "link": "http://ellevolaw.com/198D"
    },
    {
        "id_disco": 1188,
        "id": 129,
        "nombre_disco": "2018 - D-NIGHT",
        "link": "http://ellevolaw.com/198l"
    },
    {
        "id_disco": 1189,
        "id": 129,
        "nombre_disco": "2019 - D-HOURS AM 703",
        "link": "http://ellevolaw.com/199R"
    },
    {
        "id_disco": 1190,
        "id": 130,
        "nombre_disco": "2019 - Face Stabber",
        "link": "http://locinealy.com/4eWe"
    },
    {
        "id_disco": 1191,
        "id": 131,
        "nombre_disco": "[2000]The Mirror Conspiracy",
        "link": "http://locinealy.com/4eX3"
    },
    {
        "id_disco": 1192,
        "id": 131,
        "nombre_disco": "[2002]The Richest Man in Babylon",
        "link": "http://locinealy.com/4eXP"
    },
    {
        "id_disco": 1193,
        "id": 131,
        "nombre_disco": "[2005] The Cosmic Game",
        "link": "http://locinealy.com/4eXj"
    },
    {
        "id_disco": 1194,
        "id": 131,
        "nombre_disco": "[2006]Versions",
        "link": "http://locinealy.com/4eY5"
    },
    {
        "id_disco": 1195,
        "id": 131,
        "nombre_disco": "[2008]Radio Retaliation",
        "link": "http://locinealy.com/4eYJ"
    },
    {
        "id_disco": 1196,
        "id": 131,
        "nombre_disco": "[2011]Culture of Fear",
        "link": "http://locinealy.com/4eYX"
    },
    {
        "id_disco": 1197,
        "id": 131,
        "nombre_disco": "[2014]Saudade",
        "link": "http://locinealy.com/4eZ5"
    },
    {
        "id_disco": 1198,
        "id": 131,
        "nombre_disco": "[2017]The Temple Of I & I",
        "link": "http://locinealy.com/4eZK"
    },
    {
        "id_disco": 1199,
        "id": 131,
        "nombre_disco": "2018 - Treasures from the Temple",
        "link": "http://locinealy.com/4eZb"
    },
    {
        "id_disco": 1200,
        "id": 132,
        "nombre_disco": "2007 - Berlin Alex",
        "link": "http://locinealy.com/4eZu"
    },
    {
        "id_disco": 1201,
        "id": 132,
        "nombre_disco": "2008 - Play Music",
        "link": "http://locinealy.com/4ea8"
    },
    {
        "id_disco": 1202,
        "id": 132,
        "nombre_disco": "2010 - Again and Again",
        "link": "http://locinealy.com/4eaO"
    },
    {
        "id_disco": 1203,
        "id": 132,
        "nombre_disco": "2012 - Bleed Bleed Bleed",
        "link": "http://locinealy.com/4eab"
    },
    {
        "id_disco": 1204,
        "id": 132,
        "nombre_disco": "2017 - Thieves Like Us",
        "link": "http://locinealy.com/4ecr"
    },
    {
        "id_disco": 1205,
        "id": 133,
        "nombre_disco": "2012 - BBC Sessions",
        "link": "http://locinealy.com/4edA"
    },
    {
        "id_disco": 1206,
        "id": 133,
        "nombre_disco": "2012 - Toy",
        "link": "http://locinealy.com/4edP"
    },
    {
        "id_disco": 1207,
        "id": 133,
        "nombre_disco": "2013 - Join the Dots",
        "link": "http://locinealy.com/4edd"
    },
    {
        "id_disco": 1208,
        "id": 133,
        "nombre_disco": "2016 - Clear Shot",
        "link": "http://locinealy.com/4edr"
    },
    {
        "id_disco": 1209,
        "id": 133,
        "nombre_disco": "2019 - Happy in the Hollow",
        "link": "http://locinealy.com/4ee0"
    },
    {
        "id_disco": 1210,
        "id": 134,
        "nombre_disco": "2015 - Letters From The Labyrinth",
        "link": "http://locinealy.com/4ep9"
    },
    {
        "id_disco": 1211,
        "id": 135,
        "nombre_disco": "2018 - The year of YES",
        "link": "http://ellevolaw.com/1AWL"
    },
    {
        "id_disco": 1212,
        "id": 135,
        "nombre_disco": "2019 - &TWICE",
        "link": "http://ellevolaw.com/1AWq"
    },
    {
        "id_disco": 1213,
        "id": 135,
        "nombre_disco": "2019 - Feel Special",
        "link": "http://ellevolaw.com/1AXG"
    },
    {
        "id_disco": 1214,
        "id": 135,
        "nombre_disco": "2019 - Feel Special",
        "link": "http://locinealy.com/4epV"
    },
    {
        "id_disco": 1215,
        "id": 135,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1AXZ"
    },
    {
        "id_disco": 1216,
        "id": 136,
        "nombre_disco": "2018 - Sex & Food",
        "link": "http://locinealy.com/4euj"
    },
    {
        "id_disco": 1217,
        "id": 137,
        "nombre_disco": "2008 - Vampire Weekend",
        "link": "http://locinealy.com/4ewO"
    },
    {
        "id_disco": 1218,
        "id": 137,
        "nombre_disco": "2010 - Contra",
        "link": "http://locinealy.com/4ewc"
    },
    {
        "id_disco": 1219,
        "id": 137,
        "nombre_disco": "2013 - Modern Vampires of the City",
        "link": "http://locinealy.com/4ewq"
    },
    {
        "id_disco": 1220,
        "id": 137,
        "nombre_disco": "2019 - Father of the Bride",
        "link": "http://locinealy.com/4ex3"
    },
    {
        "id_disco": 1221,
        "id": 137,
        "nombre_disco": "Singles & EPs",
        "link": "http://locinealy.com/4exH"
    },
    {
        "id_disco": 1222,
        "id": 138,
        "nombre_disco": "2017 - Figure",
        "link": "http://locinealy.com/4exp"
    },
    {
        "id_disco": 1223,
        "id": 138,
        "nombre_disco": "2019 - In the Dark",
        "link": "http://locinealy.com/4ey4"
    },
    {
        "id_disco": 1224,
        "id": 139,
        "nombre_disco": "[2011]Mit Peck",
        "link": "http://locinealy.com/4eyT"
    },
    {
        "id_disco": 1225,
        "id": 139,
        "nombre_disco": "[2012] Vollmilch",
        "link": "http://locinealy.com/4ezt"
    },
    {
        "id_disco": 1226,
        "id": 139,
        "nombre_disco": "[2015]Thrill of the Arts",
        "link": "http://locinealy.com/4f0B"
    },
    {
        "id_disco": 1227,
        "id": 139,
        "nombre_disco": "[2016]The Beautiful Game",
        "link": "http://locinealy.com/4f0P"
    },
    {
        "id_disco": 1228,
        "id": 139,
        "nombre_disco": "[2017]Mr Finish Line",
        "link": "http://locinealy.com/4f0d"
    },
    {
        "id_disco": 1229,
        "id": 139,
        "nombre_disco": "[2018]Hill Climber",
        "link": "http://locinealy.com/4f1A"
    },
    {
        "id_disco": 1230,
        "id": 140,
        "nombre_disco": "2017 - Dai Shin Nen Kai",
        "link": "http://locinealy.com/4f1c"
    },
    {
        "id_disco": 1231,
        "id": 141,
        "nombre_disco": "2013 - The Outside Room",
        "link": "http://locinealy.com/4f25"
    },
    {
        "id_disco": 1232,
        "id": 141,
        "nombre_disco": "2014 - The Innocents",
        "link": "http://locinealy.com/4f2K"
    },
    {
        "id_disco": 1233,
        "id": 141,
        "nombre_disco": "2016 - Front Row Seat to Earth",
        "link": "http://locinealy.com/4f2Z"
    },
    {
        "id_disco": 1234,
        "id": 141,
        "nombre_disco": "2019 - Titanic Rising",
        "link": "http://locinealy.com/4f2t"
    },
    {
        "id_disco": 1235,
        "id": 142,
        "nombre_disco": "2005 - Theyve Got Blood Like Weve Got Blood",
        "link": "http://locinealy.com/4f3F"
    },
    {
        "id_disco": 1236,
        "id": 142,
        "nombre_disco": "2006 - Koko",
        "link": "http://locinealy.com/4f3g"
    },
    {
        "id_disco": 1237,
        "id": 142,
        "nombre_disco": "2007 - Abstractions and Mutilations",
        "link": "http://locinealy.com/4f3w"
    },
    {
        "id_disco": 1238,
        "id": 142,
        "nombre_disco": "2007 - Glitter Glamour Atrocity",
        "link": "http://locinealy.com/4f4C"
    },
    {
        "id_disco": 1239,
        "id": 142,
        "nombre_disco": "2007 - Heads on Fire",
        "link": "http://locinealy.com/4f4T"
    },
    {
        "id_disco": 1240,
        "id": 142,
        "nombre_disco": "2008 - A Little Bliss Forever",
        "link": "http://locinealy.com/4f4r"
    },
    {
        "id_disco": 1241,
        "id": 142,
        "nombre_disco": "2010 - Oddity II - Night Scene on Mill Mountain",
        "link": "http://locinealy.com/4f52"
    },
    {
        "id_disco": 1242,
        "id": 142,
        "nombre_disco": "2010 - Oddity... A Look at How the Collective Mind Works",
        "link": "http://locinealy.com/4f5M"
    },
    {
        "id_disco": 1243,
        "id": 142,
        "nombre_disco": "2010 - White Hills",
        "link": "http://locinealy.com/4f5k"
    },
    {
        "id_disco": 1244,
        "id": 142,
        "nombre_disco": "2011 - H-p1",
        "link": "http://locinealy.com/4f5z"
    },
    {
        "id_disco": 1245,
        "id": 142,
        "nombre_disco": "2011 - Live at Roadburn 2011",
        "link": "http://locinealy.com/4f6D"
    },
    {
        "id_disco": 1246,
        "id": 142,
        "nombre_disco": "2012 - Frying On This Rock",
        "link": "http://locinealy.com/4f6N"
    },
    {
        "id_disco": 1247,
        "id": 142,
        "nombre_disco": "2012 - Oddity III - Basic Information",
        "link": "http://locinealy.com/4f6q"
    },
    {
        "id_disco": 1248,
        "id": 142,
        "nombre_disco": "2013 - So you are  so you´ll be",
        "link": "http://locinealy.com/4f6z"
    },
    {
        "id_disco": 1249,
        "id": 142,
        "nombre_disco": "2015 - Walks For Motorists",
        "link": "http://locinealy.com/4f7F"
    },
    {
        "id_disco": 1250,
        "id": 142,
        "nombre_disco": "2017 - Stop Mute Defeat",
        "link": "http://locinealy.com/4f7O"
    },
    {
        "id_disco": 1251,
        "id": 143,
        "nombre_disco": "2017 - 17",
        "link": "http://locinealy.com/4f7k"
    },
    {
        "id_disco": 1252,
        "id": 143,
        "nombre_disco": "2017 - 21XXX",
        "link": "http://locinealy.com/4f85"
    },
    {
        "id_disco": 1253,
        "id": 143,
        "nombre_disco": "2017 - Revenge",
        "link": "http://locinealy.com/4f8N"
    },
    {
        "id_disco": 1254,
        "id": 143,
        "nombre_disco": "2018 - ¿",
        "link": "http://locinealy.com/4f8o"
    },
    {
        "id_disco": 1255,
        "id": 144,
        "nombre_disco": "2010 - Young The Giant",
        "link": "http://locinealy.com/4f9C"
    },
    {
        "id_disco": 1256,
        "id": 144,
        "nombre_disco": "2014 - Mind Over Matter",
        "link": "http://locinealy.com/4f9O"
    },
    {
        "id_disco": 1257,
        "id": 144,
        "nombre_disco": "2016 - Home of the Strange",
        "link": "http://locinealy.com/4f9X"
    },
    {
        "id_disco": 1258,
        "id": 144,
        "nombre_disco": "2018 - Mirror Master",
        "link": "http://locinealy.com/4f9y"
    },
    {
        "id_disco": 1259,
        "id": 145,
        "nombre_disco": "1997 - FAJHT",
        "link": "http://locinealy.com/4fAV"
    },
    {
        "id_disco": 1260,
        "id": 145,
        "nombre_disco": "1998 - PANK ZABLODA",
        "link": "http://locinealy.com/4fCS"
    },
    {
        "id_disco": 1261,
        "id": 145,
        "nombre_disco": "2000 - ULTRA LAHKO",
        "link": "http://locinealy.com/4fCi"
    },
    {
        "id_disco": 1262,
        "id": 145,
        "nombre_disco": "2001 - POZITIV VABREJŠAN",
        "link": "http://locinealy.com/4fCt"
    },
    {
        "id_disco": 1263,
        "id": 145,
        "nombre_disco": "2003 - POP IDOLI",
        "link": "http://locinealy.com/4fD2"
    },
    {
        "id_disco": 1264,
        "id": 145,
        "nombre_disco": "2008 - MI SMO STARE PIZDE",
        "link": "http://locinealy.com/4fDF"
    },
    {
        "id_disco": 1265,
        "id": 146,
        "nombre_disco": "2001 - Melody A.M",
        "link": "http://locinealy.com/2dcS"
    },
    {
        "id_disco": 1266,
        "id": 146,
        "nombre_disco": "2005 - The Understanding",
        "link": "http://locinealy.com/2dde"
    },
    {
        "id_disco": 1267,
        "id": 146,
        "nombre_disco": "2009 - Junior",
        "link": "http://locinealy.com/2ddz"
    },
    {
        "id_disco": 1268,
        "id": 146,
        "nombre_disco": "2010 - Senior",
        "link": "http://locinealy.com/2dev"
    },
    {
        "id_disco": 1269,
        "id": 146,
        "nombre_disco": "2014 - The Inevitable End",
        "link": "http://locinealy.com/2dfc"
    },
    {
        "id_disco": 1270,
        "id": 147,
        "nombre_disco": "[2015]Sexwitch",
        "link": "http://locinealy.com/2dh9"
    },
    {
        "id_disco": 1271,
        "id": 148,
        "nombre_disco": "2017 - Centro Cultural Una Verguenza",
        "link": "http://locinealy.com/2dhs"
    },
    {
        "id_disco": 1272,
        "id": 149,
        "nombre_disco": "2014 - Skinshape",
        "link": "http://locinealy.com/2dih"
    },
    {
        "id_disco": 1273,
        "id": 149,
        "nombre_disco": "2015 - Oracolo",
        "link": "http://locinealy.com/2djH"
    },
    {
        "id_disco": 1274,
        "id": 149,
        "nombre_disco": "2017 - Life & Love",
        "link": "http://locinealy.com/2dk9"
    },
    {
        "id_disco": 1275,
        "id": 149,
        "nombre_disco": "2018 - Filoxiny",
        "link": "http://locinealy.com/2dkt"
    },
    {
        "id_disco": 1276,
        "id": 150,
        "nombre_disco": "2018 - Lingering Pt. II",
        "link": "http://locinealy.com/2dlo"
    },
    {
        "id_disco": 1277,
        "id": 151,
        "nombre_disco": "[2017]Space Is The Key (EP)",
        "link": "http://locinealy.com/2dmy"
    },
    {
        "id_disco": 1278,
        "id": 152,
        "nombre_disco": "2015 - LOVETAP!",
        "link": "http://locinealy.com/2dns"
    },
    {
        "id_disco": 1279,
        "id": 153,
        "nombre_disco": "[2016]Soft Hair",
        "link": "http://locinealy.com/2duS"
    },
    {
        "id_disco": 1280,
        "id": 154,
        "nombre_disco": "2011 - Extended Play",
        "link": "http://locinealy.com/2dvC"
    },
    {
        "id_disco": 1281,
        "id": 154,
        "nombre_disco": "2013 - Caress Your Soul",
        "link": "http://locinealy.com/2dvr"
    },
    {
        "id_disco": 1282,
        "id": 154,
        "nombre_disco": "2014 - Land of Pleasure",
        "link": "http://locinealy.com/2dwI"
    },
    {
        "id_disco": 1283,
        "id": 154,
        "nombre_disco": "2016 - Westway (The Glitter & The Slums)",
        "link": "http://locinealy.com/2dwo"
    },
    {
        "id_disco": 1284,
        "id": 154,
        "nombre_disco": "2019 - Yours To Keep",
        "link": "http://locinealy.com/2dxC"
    },
    {
        "id_disco": 1285,
        "id": 155,
        "nombre_disco": "2018 - Far From Earth",
        "link": "http://locinealy.com/2e10"
    },
    {
        "id_disco": 1286,
        "id": 156,
        "nombre_disco": "2019 - Over It",
        "link": "http://locinealy.com/2e2A"
    },
    {
        "id_disco": 1287,
        "id": 157,
        "nombre_disco": "2016 - Marmur",
        "link": "http://locinealy.com/4eN5"
    },
    {
        "id_disco": 1288,
        "id": 157,
        "nombre_disco": "2018 - Café Belga",
        "link": "http://locinealy.com/4eNI"
    },
    {
        "id_disco": 1289,
        "id": 158,
        "nombre_disco": "2019 - Closer Than Together",
        "link": "http://locinealy.com/4eNj"
    },
    {
        "id_disco": 1290,
        "id": 159,
        "nombre_disco": "2018 - Double Rainbow",
        "link": "http://locinealy.com/4eOE"
    },
    {
        "id_disco": 1291,
        "id": 160,
        "nombre_disco": "2015 - Bouquet (EP)",
        "link": "http://locinealy.com/4eOc"
    },
    {
        "id_disco": 1292,
        "id": 160,
        "nombre_disco": "2016 - Collage (EP)",
        "link": "http://locinealy.com/4eOm"
    },
    {
        "id_disco": 1293,
        "id": 160,
        "nombre_disco": "2017 - Memories...Do Not Open",
        "link": "http://locinealy.com/4eP6"
    },
    {
        "id_disco": 1294,
        "id": 160,
        "nombre_disco": "2019 - World War Joy...Call You Mine",
        "link": "http://locinealy.com/4ePN"
    },
    {
        "id_disco": 1295,
        "id": 160,
        "nombre_disco": "Singles Pack",
        "link": "http://locinealy.com/4ePY"
    },
    {
        "id_disco": 1296,
        "id": 161,
        "nombre_disco": "2016 - Monolith of Phobos",
        "link": "http://locinealy.com/4ePx"
    },
    {
        "id_disco": 1297,
        "id": 161,
        "nombre_disco": "2019 - South of Reality",
        "link": "http://locinealy.com/4eQ5"
    },
    {
        "id_disco": 1298,
        "id": 162,
        "nombre_disco": "2017 - Me. Ow",
        "link": "http://locinealy.com/4eQb"
    },
    {
        "id_disco": 1299,
        "id": 162,
        "nombre_disco": "2017 - The Darts",
        "link": "http://locinealy.com/4eQn"
    },
    {
        "id_disco": 1300,
        "id": 162,
        "nombre_disco": "2019 - I Like You but Not Like That",
        "link": "http://locinealy.com/4eR5"
    },
    {
        "id_disco": 1301,
        "id": 163,
        "nombre_disco": "[2018]The Fearless Flyers (EP)",
        "link": "http://locinealy.com/4eRV"
    },
    {
        "id_disco": 1302,
        "id": 163,
        "nombre_disco": "[2019]The Fearless Flyers II (EP)",
        "link": "http://locinealy.com/4eRl"
    },
    {
        "id_disco": 1303,
        "id": 164,
        "nombre_disco": "2018 - Hyper Super Mega",
        "link": "http://locinealy.com/4eSB"
    },
    {
        "id_disco": 1304,
        "id": 165,
        "nombre_disco": "2017 - V",
        "link": "http://locinealy.com/4eTB"
    },
    {
        "id_disco": 1305,
        "id": 166,
        "nombre_disco": "2015 - Ive Always Been Good at True Love",
        "link": "http://locinealy.com/4eTl"
    },
    {
        "id_disco": 1306,
        "id": 166,
        "nombre_disco": "2016 - Scum With Boundaries",
        "link": "http://locinealy.com/4eTw"
    },
    {
        "id_disco": 1307,
        "id": 166,
        "nombre_disco": "2017 - Bodyguard",
        "link": "http://locinealy.com/4eUC"
    },
    {
        "id_disco": 1308,
        "id": 167,
        "nombre_disco": "2019 - Manic Candid Episode",
        "link": "http://locinealy.com/4eUb"
    },
    {
        "id_disco": 1309,
        "id": 168,
        "nombre_disco": "2010 - The Soft Moon",
        "link": "http://locinealy.com/4eUt"
    },
    {
        "id_disco": 1310,
        "id": 168,
        "nombre_disco": "2012 - Zeros",
        "link": "http://locinealy.com/4eVL"
    },
    {
        "id_disco": 1311,
        "id": 168,
        "nombre_disco": "2015 - Deeper",
        "link": "http://locinealy.com/4eVf"
    },
    {
        "id_disco": 1312,
        "id": 168,
        "nombre_disco": "2018 - Criminal",
        "link": "http://locinealy.com/4eVr"
    },
    {
        "id_disco": 1313,
        "id": 169,
        "nombre_disco": "2019 - Bloodlust",
        "link": "http://locinealy.com/2dDX"
    },
    {
        "id_disco": 1314,
        "id": 170,
        "nombre_disco": "2019 - EARTHANDSKY",
        "link": "http://locinealy.com/2dEQ"
    },
    {
        "id_disco": 1315,
        "id": 171,
        "nombre_disco": "2018 - Smote Reverser",
        "link": "http://locinealy.com/2dFU"
    },
    {
        "id_disco": 1316,
        "id": 172,
        "nombre_disco": "2019 - In Cauda Venenum",
        "link": "http://locinealy.com/2dGH"
    },
    {
        "id_disco": 1317,
        "id": 173,
        "nombre_disco": "2018 - The Space Between",
        "link": "http://locinealy.com/2dGv"
    },
    {
        "id_disco": 1318,
        "id": 174,
        "nombre_disco": "[1998] Without You Im Nothing",
        "link": "http://locinealy.com/2dHn"
    },
    {
        "id_disco": 1319,
        "id": 174,
        "nombre_disco": "[2000] Black Market Music",
        "link": "http://locinealy.com/2dIr"
    },
    {
        "id_disco": 1320,
        "id": 174,
        "nombre_disco": "[2003] Sleeping With Ghosts",
        "link": "http://locinealy.com/2dJU"
    },
    {
        "id_disco": 1321,
        "id": 174,
        "nombre_disco": "[2003] This Picture",
        "link": "http://locinealy.com/2dJv"
    },
    {
        "id_disco": 1322,
        "id": 174,
        "nombre_disco": "[2004] Once More With Feeling (Singles 1996-2004)",
        "link": "http://locinealy.com/2dKd"
    },
    {
        "id_disco": 1323,
        "id": 174,
        "nombre_disco": "[2006] Live At La Cigale",
        "link": "http://locinealy.com/2dKy"
    },
    {
        "id_disco": 1324,
        "id": 174,
        "nombre_disco": "[2006] Placebo",
        "link": "http://locinealy.com/2dLV"
    },
    {
        "id_disco": 1325,
        "id": 174,
        "nombre_disco": "[2007] Exclusive Session [Live EP]",
        "link": "http://locinealy.com/2dM1"
    },
    {
        "id_disco": 1326,
        "id": 174,
        "nombre_disco": "[2007] Extended Play 07 [EP]",
        "link": "http://locinealy.com/2dMR"
    },
    {
        "id_disco": 1327,
        "id": 174,
        "nombre_disco": "[2007] Meds",
        "link": "http://locinealy.com/2dMy"
    },
    {
        "id_disco": 1328,
        "id": 174,
        "nombre_disco": "[2009] The Never-Ending Why [EP Digital]",
        "link": "http://locinealy.com/2dNs"
    },
    {
        "id_disco": 1329,
        "id": 174,
        "nombre_disco": "[2010] Battle For The Sun",
        "link": "http://locinealy.com/2dOO"
    },
    {
        "id_disco": 1330,
        "id": 174,
        "nombre_disco": "[2010] Bright Lights [EP Digital]",
        "link": "http://locinealy.com/2dP4"
    },
    {
        "id_disco": 1331,
        "id": 174,
        "nombre_disco": "[2011] B Sides [1996-2006]",
        "link": "http://locinealy.com/2dPe"
    },
    {
        "id_disco": 1332,
        "id": 174,
        "nombre_disco": "[2012] B3 [EP]",
        "link": "http://locinealy.com/2dQH"
    },
    {
        "id_disco": 1333,
        "id": 174,
        "nombre_disco": "[2013] Loud Like Love",
        "link": "http://locinealy.com/2dQp"
    },
    {
        "id_disco": 1334,
        "id": 175,
        "nombre_disco": "2015 - Post Animal Perform the Most Curious Water Activities",
        "link": "http://locinealy.com/2dRX"
    },
    {
        "id_disco": 1335,
        "id": 175,
        "nombre_disco": "2018 - When I Think Of You In A Castle",
        "link": "http://locinealy.com/2dRz"
    },
    {
        "id_disco": 1336,
        "id": 176,
        "nombre_disco": "2016 - Stoney (Deluxe Edition)",
        "link": "http://onisedeo.com/W69"
    },
    {
        "id_disco": 1337,
        "id": 176,
        "nombre_disco": "2018 - Beerbongs & Bentleys",
        "link": "http://onisedeo.com/W8d"
    },
    {
        "id_disco": 1338,
        "id": 176,
        "nombre_disco": "2019 - Hollywoods Bleeding",
        "link": "http://locinealy.com/2dU4"
    },
    {
        "id_disco": 1339,
        "id": 177,
        "nombre_disco": "[2014]Spacetime Fabric Softener",
        "link": "http://locinealy.com/2dWN"
    },
    {
        "id_disco": 1340,
        "id": 177,
        "nombre_disco": "[2014]The Music Machine",
        "link": "http://locinealy.com/2dXB"
    },
    {
        "id_disco": 1341,
        "id": 177,
        "nombre_disco": "[2017]Lucid Juice",
        "link": "http://locinealy.com/2dXj"
    },
    {
        "id_disco": 1342,
        "id": 178,
        "nombre_disco": "2019 - And Now for the Whatchamacallit",
        "link": "http://locinealy.com/2dYa"
    },
    {
        "id_disco": 1343,
        "id": 179,
        "nombre_disco": "1990 - A Social Grace",
        "link": "http://locinealy.com/2dZq"
    },
    {
        "id_disco": 1344,
        "id": 179,
        "nombre_disco": "1992 - Into The Everflow",
        "link": "http://locinealy.com/2daE"
    },
    {
        "id_disco": 1345,
        "id": 180,
        "nombre_disco": "2019 - Ghosteen",
        "link": "http://locinealy.com/2dCr"
    },
    {
        "id_disco": 1346,
        "id": 181,
        "nombre_disco": "1998 - Moon Safari",
        "link": "http://locinealy.com/217y"
    },
    {
        "id_disco": 1347,
        "id": 181,
        "nombre_disco": "1999 - Premiers Symptômes",
        "link": "http://locinealy.com/218Q"
    },
    {
        "id_disco": 1348,
        "id": 181,
        "nombre_disco": "2000 - The Virgin Suicides",
        "link": "http://locinealy.com/218s"
    },
    {
        "id_disco": 1349,
        "id": 182,
        "nombre_disco": "1976 - Alas",
        "link": "http://locinealy.com/219V"
    },
    {
        "id_disco": 1350,
        "id": 182,
        "nombre_disco": "1983 - Pinta tu aldea",
        "link": "http://locinealy.com/219r"
    },
    {
        "id_disco": 1351,
        "id": 183,
        "nombre_disco": "2019 - Lahs",
        "link": "http://locinealy.com/21BY"
    },
    {
        "id_disco": 1352,
        "id": 184,
        "nombre_disco": "2009 - Darker Days",
        "link": "http://locinealy.com/21Bz"
    },
    {
        "id_disco": 1353,
        "id": 184,
        "nombre_disco": "2010 - Waiting For The Sun To Leave",
        "link": "http://locinealy.com/21CO"
    },
    {
        "id_disco": 1354,
        "id": 184,
        "nombre_disco": "2015 - The Bearer of Bad News",
        "link": "http://locinealy.com/21Cl"
    },
    {
        "id_disco": 1355,
        "id": 184,
        "nombre_disco": "2016 - The Party",
        "link": "http://locinealy.com/21D4"
    },
    {
        "id_disco": 1356,
        "id": 185,
        "nombre_disco": "2016 - All My Demons Greeting Me As A Friend (Deluxe)",
        "link": "http://locinealy.com/21Dm"
    },
    {
        "id_disco": 1357,
        "id": 185,
        "nombre_disco": "2018 - Infections Of A Different Kind - Step 1",
        "link": "http://locinealy.com/21EV"
    },
    {
        "id_disco": 1358,
        "id": 185,
        "nombre_disco": "2019 - A Different Kind Of Human - Step 2",
        "link": "http://locinealy.com/21Eu"
    },
    {
        "id_disco": 1359,
        "id": 186,
        "nombre_disco": "2019 - Today",
        "link": "http://locinealy.com/21Gp"
    },
    {
        "id_disco": 1360,
        "id": 187,
        "nombre_disco": "[2012]Toys (EP)",
        "link": "http://locinealy.com/21Ht"
    },
    {
        "id_disco": 1361,
        "id": 187,
        "nombre_disco": "[2012]Vivid",
        "link": "http://locinealy.com/21IQ"
    },
    {
        "id_disco": 1362,
        "id": 187,
        "nombre_disco": "[2013]In My Head (Single)",
        "link": "http://locinealy.com/21Iw"
    },
    {
        "id_disco": 1363,
        "id": 187,
        "nombre_disco": "[2014]Grow",
        "link": "http://locinealy.com/21JR"
    },
    {
        "id_disco": 1364,
        "id": 187,
        "nombre_disco": "[2015]Work This Out (Single)",
        "link": "http://locinealy.com/21Jg"
    },
    {
        "id_disco": 1365,
        "id": 188,
        "nombre_disco": "1972 - Pathfinder",
        "link": "http://locinealy.com/21KK"
    },
    {
        "id_disco": 1366,
        "id": 188,
        "nombre_disco": "1973 - Get Your Dog Off Me",
        "link": "http://locinealy.com/21Ka"
    },
    {
        "id_disco": 1367,
        "id": 188,
        "nombre_disco": "1974 - Sagittary",
        "link": "http://locinealy.com/21Ky"
    },
    {
        "id_disco": 1368,
        "id": 188,
        "nombre_disco": "1975 - Beggars Cant Be Choosers",
        "link": "http://locinealy.com/21LN"
    },
    {
        "id_disco": 1369,
        "id": 188,
        "nombre_disco": "1980 - Lifeline",
        "link": "http://locinealy.com/21Lm"
    },
    {
        "id_disco": 1370,
        "id": 188,
        "nombre_disco": "1996 - The Final Curtain",
        "link": "http://locinealy.com/21MF"
    },
    {
        "id_disco": 1371,
        "id": 188,
        "nombre_disco": "2009 - Touching The Edge",
        "link": "http://locinealy.com/21Mn"
    },
    {
        "id_disco": 1372,
        "id": 188,
        "nombre_disco": "2011 - Lose a Life",
        "link": "http://locinealy.com/21NB"
    },
    {
        "id_disco": 1373,
        "id": 188,
        "nombre_disco": "2011 - Promise In Motion",
        "link": "http://locinealy.com/21Nn"
    },
    {
        "id_disco": 1374,
        "id": 188,
        "nombre_disco": "2012 - Mrs. Caligaris Lighter",
        "link": "http://locinealy.com/21OK"
    },
    {
        "id_disco": 1375,
        "id": 189,
        "nombre_disco": "[2017]Roy Pablo",
        "link": "http://locinealy.com/21Qz"
    },
    {
        "id_disco": 1376,
        "id": 189,
        "nombre_disco": "[2018]Soy Pablo EP",
        "link": "http://locinealy.com/21RI"
    },
    {
        "id_disco": 1378,
        "id": 189,
        "nombre_disco": "2012 - By Your Side",
        "link": "http://locinealy.com/21S2"
    },
    {
        "id_disco": 1379,
        "id": 189,
        "nombre_disco": "2016 - Still Waters",
        "link": "http://locinealy.com/21Si"
    },
    {
        "id_disco": 1380,
        "id": 190,
        "nombre_disco": "2014 - Astro Tango",
        "link": "http://locinealy.com/21Uf"
    },
    {
        "id_disco": 1381,
        "id": 190,
        "nombre_disco": "2014 - Reset Robot",
        "link": "http://locinealy.com/21V2"
    },
    {
        "id_disco": 1382,
        "id": 190,
        "nombre_disco": "2015 - Hidden Gate",
        "link": "http://locinealy.com/21VL"
    },
    {
        "id_disco": 1383,
        "id": 190,
        "nombre_disco": "2016 - Blood Walk",
        "link": "http://locinealy.com/21Vg"
    },
    {
        "id_disco": 1384,
        "id": 190,
        "nombre_disco": "2016 - Dance Or Die",
        "link": "http://locinealy.com/21WD"
    },
    {
        "id_disco": 1385,
        "id": 190,
        "nombre_disco": "2016 - Evil Laugh Wrong Tragedy",
        "link": "http://locinealy.com/21Wi"
    },
    {
        "id_disco": 1386,
        "id": 190,
        "nombre_disco": "2017 - Voodoo Spunk",
        "link": "http://locinealy.com/21XA"
    },
    {
        "id_disco": 1387,
        "id": 190,
        "nombre_disco": "2017 - Western Ghost",
        "link": "http://locinealy.com/21XT"
    },
    {
        "id_disco": 1388,
        "id": 191,
        "nombre_disco": "2019 - Mordial",
        "link": "http://locinealy.com/21Xv"
    },
    {
        "id_disco": 1389,
        "id": 192,
        "nombre_disco": "[2010]1",
        "link": "http://locinealy.com/21Yc"
    },
    {
        "id_disco": 1390,
        "id": 192,
        "nombre_disco": "[2010]2",
        "link": "http://locinealy.com/21Yz"
    },
    {
        "id_disco": 1391,
        "id": 192,
        "nombre_disco": "[2010]3",
        "link": "http://locinealy.com/21ZO"
    },
    {
        "id_disco": 1392,
        "id": 192,
        "nombre_disco": "[2010]4",
        "link": "http://locinealy.com/21Zq"
    },
    {
        "id_disco": 1393,
        "id": 192,
        "nombre_disco": "[2010]Little Pieces of Paper With No Written on Them",
        "link": "http://locinealy.com/21aK"
    },
    {
        "id_disco": 1394,
        "id": 192,
        "nombre_disco": "[2011]My Back is Killing Me  Baby",
        "link": "http://locinealy.com/21aj"
    },
    {
        "id_disco": 1395,
        "id": 192,
        "nombre_disco": "[2012]Monomania",
        "link": "http://locinealy.com/21bF"
    },
    {
        "id_disco": 1396,
        "id": 192,
        "nombre_disco": "[2013]Nervous Young Man",
        "link": "http://locinealy.com/21bl"
    },
    {
        "id_disco": 1397,
        "id": 192,
        "nombre_disco": "[2014]How To Leave Town",
        "link": "http://locinealy.com/21cK"
    },
    {
        "id_disco": 1398,
        "id": 192,
        "nombre_disco": "[2015]Teens of Style",
        "link": "http://locinealy.com/21cm"
    },
    {
        "id_disco": 1399,
        "id": 192,
        "nombre_disco": "[2016]Teens of Denial",
        "link": "http://locinealy.com/21dA"
    },
    {
        "id_disco": 1400,
        "id": 192,
        "nombre_disco": "[2018]Twin Fantasy (Face To Face)",
        "link": "http://locinealy.com/21dm"
    },
    {
        "id_disco": 1401,
        "id": 192,
        "nombre_disco": "2019 - Commit Yourself Completely",
        "link": "http://locinealy.com/21eA"
    },
    {
        "id_disco": 1402,
        "id": 193,
        "nombre_disco": "2009 - Psychic Psummer",
        "link": "http://locinealy.com/21et"
    },
    {
        "id_disco": 1403,
        "id": 193,
        "nombre_disco": "2011 - Neverendless",
        "link": "http://locinealy.com/21fP"
    },
    {
        "id_disco": 1404,
        "id": 193,
        "nombre_disco": "2013 - Threace",
        "link": "http://locinealy.com/21ft"
    },
    {
        "id_disco": 1405,
        "id": 193,
        "nombre_disco": "2014 - Release",
        "link": "http://locinealy.com/21gK"
    },
    {
        "id_disco": 1406,
        "id": 193,
        "nombre_disco": "2018 - Allways",
        "link": "http://locinealy.com/21gh"
    },
    {
        "id_disco": 1407,
        "id": 194,
        "nombre_disco": "2011 - Galactic Melt",
        "link": "http://locinealy.com/21hP"
    },
    {
        "id_disco": 1408,
        "id": 194,
        "nombre_disco": "2012 - In Decay",
        "link": "http://locinealy.com/21hl"
    },
    {
        "id_disco": 1409,
        "id": 194,
        "nombre_disco": "2017 - Iteration",
        "link": "http://locinealy.com/21iB"
    },
    {
        "id_disco": 1410,
        "id": 195,
        "nombre_disco": "2006 - Uuu Its Teasy",
        "link": "http://locinealy.com/21iy"
    },
    {
        "id_disco": 1411,
        "id": 195,
        "nombre_disco": "2011 - Forever Dolphin Love",
        "link": "http://locinealy.com/21jW"
    },
    {
        "id_disco": 1412,
        "id": 195,
        "nombre_disco": "2013 - Caramel",
        "link": "http://locinealy.com/21k3"
    },
    {
        "id_disco": 1413,
        "id": 195,
        "nombre_disco": "2018 - Jassbusters",
        "link": "http://locinealy.com/21kf"
    },
    {
        "id_disco": 1414,
        "id": 196,
        "nombre_disco": "1993 - Grin",
        "link": "http://locinealy.com/21lR"
    },
    {
        "id_disco": 1415,
        "id": 196,
        "nombre_disco": "1995 - Coroner",
        "link": "http://locinealy.com/21lt"
    },
    {
        "id_disco": 1416,
        "id": 196,
        "nombre_disco": "1996 - The Unknown Unreleased Tracks",
        "link": "http://locinealy.com/21md"
    },
    {
        "id_disco": 1417,
        "id": 197,
        "nombre_disco": "1977 - Delirios en el Luna",
        "link": "http://locinealy.com/21nq"
    },
    {
        "id_disco": 1418,
        "id": 197,
        "nombre_disco": "1977 - Los Delirios del Mariscal",
        "link": "http://locinealy.com/21od"
    },
    {
        "id_disco": 1419,
        "id": 198,
        "nombre_disco": "2016 - Amnesty I",
        "link": "http://locinealy.com/2b5S"
    },
    {
        "id_disco": 1420,
        "id": 199,
        "nombre_disco": "2019 - Sleeptalk",
        "link": "http://locinealy.com/2b6C"
    },
    {
        "id_disco": 1421,
        "id": 200,
        "nombre_disco": "2012 - EP I",
        "link": "http://locinealy.com/2b6u"
    },
    {
        "id_disco": 1422,
        "id": 200,
        "nombre_disco": "2016 - Deep Winter",
        "link": "http://locinealy.com/2b7R"
    },
    {
        "id_disco": 1423,
        "id": 201,
        "nombre_disco": "2019 - Twenty Twenty",
        "link": "http://locinealy.com/2b8L"
    },
    {
        "id_disco": 1424,
        "id": 202,
        "nombre_disco": "2017 - Unusable Love",
        "link": "http://locinealy.com/2b96"
    },
    {
        "id_disco": 1425,
        "id": 202,
        "nombre_disco": "2018 - Bankers Hill",
        "link": "http://locinealy.com/2b9Z"
    },
    {
        "id_disco": 1426,
        "id": 203,
        "nombre_disco": "1999 - Midori Sour",
        "link": "http://locinealy.com/2bAH"
    },
    {
        "id_disco": 1427,
        "id": 203,
        "nombre_disco": "2002 - Shadow Box",
        "link": "http://locinealy.com/2bBB"
    },
    {
        "id_disco": 1428,
        "id": 203,
        "nombre_disco": "2005 - Making Static",
        "link": "http://locinealy.com/2bBf"
    },
    {
        "id_disco": 1429,
        "id": 203,
        "nombre_disco": "2006 - Beautiful Sleepyhead and the Laughing Yaks",
        "link": "http://locinealy.com/2bCE"
    },
    {
        "id_disco": 1430,
        "id": 203,
        "nombre_disco": "2008 - The Symphonies. Dreams Memories and Parties",
        "link": "http://locinealy.com/2bDC"
    },
    {
        "id_disco": 1431,
        "id": 203,
        "nombre_disco": "2009 - Dirty (EP)",
        "link": "http://locinealy.com/2bDl"
    },
    {
        "id_disco": 1432,
        "id": 203,
        "nombre_disco": "2012 - Mama",
        "link": "http://locinealy.com/2bE7"
    },
    {
        "id_disco": 1433,
        "id": 203,
        "nombre_disco": "2013 - Mama Acoustic Recordings",
        "link": "http://locinealy.com/2bEr"
    },
    {
        "id_disco": 1434,
        "id": 203,
        "nombre_disco": "2017 - In The Hot (EP)",
        "link": "http://locinealy.com/2bFS"
    },
    {
        "id_disco": 1435,
        "id": 204,
        "nombre_disco": "2014 - Cosmódromo",
        "link": "http://locinealy.com/2bGt"
    },
    {
        "id_disco": 1436,
        "id": 204,
        "nombre_disco": "2016 - Amplitud Nuclear",
        "link": "http://locinealy.com/2bHU"
    },
    {
        "id_disco": 1437,
        "id": 204,
        "nombre_disco": "2018 - Límite Voltaico",
        "link": "http://locinealy.com/2bHv"
    },
    {
        "id_disco": 1438,
        "id": 205,
        "nombre_disco": "2002 - Black and White World",
        "link": "http://locinealy.com/2bIf"
    },
    {
        "id_disco": 1439,
        "id": 206,
        "nombre_disco": "2014 - Adhesivo De Contacto Espacial",
        "link": "http://locinealy.com/2bJJ"
    },
    {
        "id_disco": 1440,
        "id": 206,
        "nombre_disco": "2017 - Oscilador",
        "link": "http://locinealy.com/2bJn"
    },
    {
        "id_disco": 1441,
        "id": 207,
        "nombre_disco": "2017 - Trying - Not Enough",
        "link": "http://locinealy.com/2bKd"
    },
    {
        "id_disco": 1442,
        "id": 207,
        "nombre_disco": "2018 - If You Know That Im Lonely",
        "link": "http://locinealy.com/2bL2"
    },
    {
        "id_disco": 1443,
        "id": 207,
        "nombre_disco": "2019 - FUR [EP]",
        "link": "http://locinealy.com/2bLQ"
    },
    {
        "id_disco": 1444,
        "id": 208,
        "nombre_disco": "2019 - Won Goes",
        "link": "http://locinealy.com/2bMZ"
    },
    {
        "id_disco": 1445,
        "id": 209,
        "nombre_disco": "[2019]Where Polly People Go to Read",
        "link": "http://locinealy.com/2bP1"
    },
    {
        "id_disco": 1446,
        "id": 210,
        "nombre_disco": "1974 - Hatfield and the North",
        "link": "http://locinealy.com/2bQ2"
    },
    {
        "id_disco": 1447,
        "id": 210,
        "nombre_disco": "1993 - Live 1990",
        "link": "http://locinealy.com/2bQf"
    },
    {
        "id_disco": 1448,
        "id": 211,
        "nombre_disco": "2015 - Ofnir",
        "link": "http://locinealy.com/2bRV"
    },
    {
        "id_disco": 1449,
        "id": 211,
        "nombre_disco": "2017 - LIFA",
        "link": "http://locinealy.com/2bRn"
    },
    {
        "id_disco": 1450,
        "id": 211,
        "nombre_disco": "2019 - Futha",
        "link": "http://locinealy.com/2bRy"
    },
    {
        "id_disco": 1451,
        "id": 212,
        "nombre_disco": "[2014]In The Shower",
        "link": "http://locinealy.com/2bUX"
    },
    {
        "id_disco": 1452,
        "id": 212,
        "nombre_disco": "[2015]Midnight Snack",
        "link": "http://locinealy.com/2bVu"
    },
    {
        "id_disco": 1453,
        "id": 212,
        "nombre_disco": "[2017]Fresh Air",
        "link": "http://locinealy.com/2bWS"
    },
    {
        "id_disco": 1454,
        "id": 212,
        "nombre_disco": "2019 - Helium",
        "link": "http://locinealy.com/2bX7"
    },
    {
        "id_disco": 1455,
        "id": 213,
        "nombre_disco": "2019 - Beautiful Oblivion",
        "link": "http://locinealy.com/2bXy"
    },
    {
        "id_disco": 1456,
        "id": 214,
        "nombre_disco": "2013 - Finite Form",
        "link": "http://locinealy.com/2bYe"
    },
    {
        "id_disco": 1457,
        "id": 214,
        "nombre_disco": "2015 - Viator",
        "link": "http://locinealy.com/2bZC"
    },
    {
        "id_disco": 1458,
        "id": 214,
        "nombre_disco": "2017 - Pop Food",
        "link": "http://locinealy.com/2bZk"
    },
    {
        "id_disco": 1459,
        "id": 214,
        "nombre_disco": "2018 - HiLo",
        "link": "http://locinealy.com/2baI"
    },
    {
        "id_disco": 1460,
        "id": 215,
        "nombre_disco": "2018 - Start-Up",
        "link": "http://locinealy.com/2bb6"
    },
    {
        "id_disco": 1461,
        "id": 216,
        "nombre_disco": "1988 - Arrival (Demo)",
        "link": "http://locinealy.com/2bdD"
    },
    {
        "id_disco": 1462,
        "id": 216,
        "nombre_disco": "1993 - Listen",
        "link": "http://locinealy.com/2bdX"
    },
    {
        "id_disco": 1463,
        "id": 216,
        "nombre_disco": "1994 - Unplugged",
        "link": "http://locinealy.com/2beI"
    },
    {
        "id_disco": 1464,
        "id": 216,
        "nombre_disco": "1997 - Rudess-Morgenstein Project",
        "link": "http://locinealy.com/2ben"
    },
    {
        "id_disco": 1465,
        "id": 216,
        "nombre_disco": "1997 - Secrets Of The Muse",
        "link": "http://locinealy.com/2bfJ"
    },
    {
        "id_disco": 1466,
        "id": 216,
        "nombre_disco": "1999 - Resonance",
        "link": "http://locinealy.com/2bfn"
    },
    {
        "id_disco": 1467,
        "id": 216,
        "nombre_disco": "2001 - Feeding The Wheel",
        "link": "http://locinealy.com/2bgD"
    },
    {
        "id_disco": 1468,
        "id": 216,
        "nombre_disco": "2002 - 4NYC",
        "link": "http://locinealy.com/2bgq"
    },
    {
        "id_disco": 1469,
        "id": 216,
        "nombre_disco": "2002 - Christmas Sky",
        "link": "http://locinealy.com/2bhH"
    },
    {
        "id_disco": 1470,
        "id": 216,
        "nombre_disco": "2004 - Rhythm of Time",
        "link": "http://locinealy.com/2bhw"
    },
    {
        "id_disco": 1471,
        "id": 216,
        "nombre_disco": "2006 - Prime Cuts",
        "link": "http://locinealy.com/2biM"
    },
    {
        "id_disco": 1472,
        "id": 216,
        "nombre_disco": "2007 - The Road Home",
        "link": "http://locinealy.com/2biw"
    },
    {
        "id_disco": 1473,
        "id": 216,
        "nombre_disco": "2009 - Notes on a Dream",
        "link": "http://locinealy.com/2bjM"
    },
    {
        "id_disco": 1474,
        "id": 216,
        "nombre_disco": "2013 - All That Is Now",
        "link": "http://locinealy.com/2blF"
    },
    {
        "id_disco": 1475,
        "id": 216,
        "nombre_disco": "2014 - Explorations",
        "link": "http://locinealy.com/2blk"
    },
    {
        "id_disco": 1476,
        "id": 216,
        "nombre_disco": "2015 - The Unforgotten Path",
        "link": "http://locinealy.com/2bmH"
    },
    {
        "id_disco": 1477,
        "id": 216,
        "nombre_disco": "2019 - Wired For Madness",
        "link": "http://locinealy.com/2bme"
    },
    {
        "id_disco": 1478,
        "id": 217,
        "nombre_disco": "[2016]Blue Chesse",
        "link": "http://locinealy.com/2bnZ"
    },
    {
        "id_disco": 1479,
        "id": 217,
        "nombre_disco": "[2017]Two Hearts and No Brain",
        "link": "http://locinealy.com/2bpB"
    },
    {
        "id_disco": 1480,
        "id": 218,
        "nombre_disco": "2019 - Im Him",
        "link": "http://locinealy.com/2bpn"
    },
    {
        "id_disco": 1481,
        "id": 219,
        "nombre_disco": "2014 - A Calf Born In Winter",
        "link": "http://locinealy.com/2bqV"
    },
    {
        "id_disco": 1482,
        "id": 219,
        "nombre_disco": "2014 - History Of Flight",
        "link": "http://locinealy.com/2brI"
    },
    {
        "id_disco": 1483,
        "id": 219,
        "nombre_disco": "2014 - The Infamous Bill",
        "link": "http://locinealy.com/2brl"
    },
    {
        "id_disco": 1484,
        "id": 219,
        "nombre_disco": "2014 - เครื่องบิน",
        "link": "http://locinealy.com/2bsV"
    },
    {
        "id_disco": 1485,
        "id": 219,
        "nombre_disco": "2015 - The Universe Smiles Upon You",
        "link": "http://locinealy.com/2bsz"
    },
    {
        "id_disco": 1486,
        "id": 219,
        "nombre_disco": "2018 - Con Todo El Mundo",
        "link": "http://locinealy.com/2bte"
    },
    {
        "id_disco": 1487,
        "id": 219,
        "nombre_disco": "2019 - Hasta El Cielo (Con Todo El Mundo In Dub)",
        "link": "http://locinealy.com/2buL"
    },
    {
        "id_disco": 1488,
        "id": 220,
        "nombre_disco": "2017 - Live KEXP (Oct)",
        "link": "http://locinealy.com/2bvP"
    },
    {
        "id_disco": 1489,
        "id": 220,
        "nombre_disco": "2019 - Fishing For Fishies",
        "link": "http://locinealy.com/2bvt"
    },
    {
        "id_disco": 1490,
        "id": 220,
        "nombre_disco": "2019 - Infest The Rats Nest",
        "link": "http://locinealy.com/2bwO"
    },
    {
        "id_disco": 1491,
        "id": 221,
        "nombre_disco": "[1970]Kraftwerk",
        "link": "http://locinealy.com/2bx9"
    },
    {
        "id_disco": 1492,
        "id": 221,
        "nombre_disco": "[1972]Kraftwerk 2",
        "link": "http://locinealy.com/2bxV"
    },
    {
        "id_disco": 1493,
        "id": 221,
        "nombre_disco": "[1973]Ralf und Florian",
        "link": "http://locinealy.com/2bxq"
    },
    {
        "id_disco": 1494,
        "id": 221,
        "nombre_disco": "[1974]Autobahn",
        "link": "http://locinealy.com/2byK"
    },
    {
        "id_disco": 1495,
        "id": 221,
        "nombre_disco": "[1975]Radioaktivität",
        "link": "http://locinealy.com/2byk"
    },
    {
        "id_disco": 1496,
        "id": 221,
        "nombre_disco": "[1977]Trans-Europa Express",
        "link": "http://locinealy.com/2bz5"
    },
    {
        "id_disco": 1497,
        "id": 221,
        "nombre_disco": "[1978]Die Mensch-Maschine",
        "link": "http://locinealy.com/2bzc"
    },
    {
        "id_disco": 1498,
        "id": 221,
        "nombre_disco": "[1981]Computerwelt",
        "link": "http://locinealy.com/2c0R"
    },
    {
        "id_disco": 1499,
        "id": 221,
        "nombre_disco": "[1986]Electric Café",
        "link": "http://locinealy.com/2c0q"
    },
    {
        "id_disco": 1500,
        "id": 221,
        "nombre_disco": "[2003]Tour De France",
        "link": "http://locinealy.com/2c1J"
    },
    {
        "id_disco": 1501,
        "id": 221,
        "nombre_disco": "2005 - Minimum-Maximum",
        "link": "http://locinealy.com/2c1q"
    },
    {
        "id_disco": 1502,
        "id": 222,
        "nombre_disco": "[2018]Floating Features",
        "link": "http://locinealy.com/2cQO"
    },
    {
        "id_disco": 1503,
        "id": 223,
        "nombre_disco": "1976 - La Máquina de Hacer Pájaros",
        "link": "http://locinealy.com/2cTf"
    },
    {
        "id_disco": 1504,
        "id": 223,
        "nombre_disco": "1977 - Peliculas",
        "link": "http://locinealy.com/2cVR"
    },
    {
        "id_disco": 1505,
        "id": 224,
        "nombre_disco": "2019 - Black Anima",
        "link": "http://locinealy.com/2cWj"
    },
    {
        "id_disco": 1506,
        "id": 225,
        "nombre_disco": "1989 - Vas de punt... o que",
        "link": "http://locinealy.com/2cXU"
    },
    {
        "id_disco": 1507,
        "id": 225,
        "nombre_disco": "1991 - LaxnBusto",
        "link": "http://locinealy.com/2cXv"
    },
    {
        "id_disco": 1508,
        "id": 225,
        "nombre_disco": "1993 - Qui ets Tu",
        "link": "http://locinealy.com/2cYS"
    },
    {
        "id_disco": 1509,
        "id": 225,
        "nombre_disco": "1995 - La Caixa que Puja i Baixa",
        "link": "http://locinealy.com/2cZF"
    },
    {
        "id_disco": 1510,
        "id": 225,
        "nombre_disco": "1996 - A LAuditori",
        "link": "http://locinealy.com/2cZx"
    },
    {
        "id_disco": 1511,
        "id": 225,
        "nombre_disco": "1998 - Si",
        "link": "http://locinealy.com/2caa"
    },
    {
        "id_disco": 1512,
        "id": 225,
        "nombre_disco": "2000 - Llençat",
        "link": "http://locinealy.com/2cb2"
    },
    {
        "id_disco": 1513,
        "id": 225,
        "nombre_disco": "2003 - Morfina",
        "link": "http://locinealy.com/2cbt"
    },
    {
        "id_disco": 1514,
        "id": 225,
        "nombre_disco": "2004 - Amb Tu",
        "link": "http://locinealy.com/2cdW"
    },
    {
        "id_disco": 1515,
        "id": 225,
        "nombre_disco": "2006 - Grans exits CD1",
        "link": "http://locinealy.com/2cdx"
    },
    {
        "id_disco": 1516,
        "id": 225,
        "nombre_disco": "2006 - Grans exits CD2",
        "link": "http://locinealy.com/2ceW"
    },
    {
        "id_disco": 1517,
        "id": 225,
        "nombre_disco": "2007 - Close To My Heart",
        "link": "http://locinealy.com/2cfJ"
    },
    {
        "id_disco": 1518,
        "id": 225,
        "nombre_disco": "2007 - Relax",
        "link": "http://locinealy.com/2cfu"
    },
    {
        "id_disco": 1519,
        "id": 225,
        "nombre_disco": "2008 - Objectiu la lluna",
        "link": "http://locinealy.com/2cgb"
    },
    {
        "id_disco": 1520,
        "id": 225,
        "nombre_disco": "2009 - A LApolo",
        "link": "http://locinealy.com/2ch9"
    },
    {
        "id_disco": 1521,
        "id": 225,
        "nombre_disco": "2011 - Simfònic",
        "link": "http://locinealy.com/2chl"
    },
    {
        "id_disco": 1522,
        "id": 226,
        "nombre_disco": "2015 - Summers On The Ground",
        "link": "http://locinealy.com/2ciq"
    },
    {
        "id_disco": 1523,
        "id": 226,
        "nombre_disco": "2017 - Pretty Faces",
        "link": "http://locinealy.com/2cjS"
    },
    {
        "id_disco": 1524,
        "id": 227,
        "nombre_disco": "2019 - Labrinth  Sia & Diplo present... LSD",
        "link": "http://locinealy.com/2cqG"
    },
    {
        "id_disco": 1525,
        "id": 228,
        "nombre_disco": "2018 - Exlover",
        "link": "http://locinealy.com/2cs7"
    },
    {
        "id_disco": 1526,
        "id": 228,
        "nombre_disco": "2018 - Lucky",
        "link": "http://locinealy.com/2csf"
    },
    {
        "id_disco": 1527,
        "id": 229,
        "nombre_disco": "2001 - M83",
        "link": "http://locinealy.com/2ctX"
    },
    {
        "id_disco": 1528,
        "id": 229,
        "nombre_disco": "2003 - Dead Cities  Red Seas & Lost Ghosts",
        "link": "http://locinealy.com/2cu7"
    },
    {
        "id_disco": 1529,
        "id": 229,
        "nombre_disco": "2005 - Before The Dawn Heals Us",
        "link": "http://locinealy.com/2cum"
    },
    {
        "id_disco": 1530,
        "id": 229,
        "nombre_disco": "2007 - Digital Shades (Volume 1)",
        "link": "http://locinealy.com/2cvx"
    },
    {
        "id_disco": 1531,
        "id": 229,
        "nombre_disco": "2008 - Saturdays = Youth",
        "link": "http://locinealy.com/2cwR"
    },
    {
        "id_disco": 1532,
        "id": 229,
        "nombre_disco": "2011 - Hurry Up  Were Dreaming",
        "link": "http://locinealy.com/2cx5"
    },
    {
        "id_disco": 1533,
        "id": 229,
        "nombre_disco": "2011 - Midnight City (Remixes) - EP",
        "link": "http://locinealy.com/2cxn"
    },
    {
        "id_disco": 1534,
        "id": 229,
        "nombre_disco": "2013 - Oblivion",
        "link": "http://locinealy.com/2cyT"
    },
    {
        "id_disco": 1535,
        "id": 229,
        "nombre_disco": "2016 - Junk",
        "link": "http://locinealy.com/2czw"
    },
    {
        "id_disco": 1536,
        "id": 230,
        "nombre_disco": "2019 - Here Comes The Cowboy",
        "link": "http://locinealy.com/2d1g"
    },
    {
        "id_disco": 1537,
        "id": 231,
        "nombre_disco": "2019 - Metronomy Forever",
        "link": "http://locinealy.com/2d2T"
    },
    {
        "id_disco": 1538,
        "id": 232,
        "nombre_disco": "1992 - Good",
        "link": "http://locinealy.com/2d3j"
    },
    {
        "id_disco": 1539,
        "id": 232,
        "nombre_disco": "1993 - Cure For Pain",
        "link": "http://locinealy.com/2d4K"
    },
    {
        "id_disco": 1540,
        "id": 232,
        "nombre_disco": "1995 - Yes",
        "link": "http://locinealy.com/2d4v"
    },
    {
        "id_disco": 1541,
        "id": 232,
        "nombre_disco": "1997 - Like Swimming",
        "link": "http://locinealy.com/2d6E"
    },
    {
        "id_disco": 1542,
        "id": 232,
        "nombre_disco": "2000 - The Night",
        "link": "http://locinealy.com/2d6u"
    },
    {
        "id_disco": 1543,
        "id": 232,
        "nombre_disco": "2009 - At Your Service",
        "link": "http://locinealy.com/2d7x"
    },
    {
        "id_disco": 1544,
        "id": 233,
        "nombre_disco": "2010 - Alps",
        "link": "http://locinealy.com/2d9n"
    },
    {
        "id_disco": 1545,
        "id": 233,
        "nombre_disco": "2012 - Calendar",
        "link": "http://locinealy.com/2dAS"
    },
    {
        "id_disco": 1546,
        "id": 233,
        "nombre_disco": "2015 - Poverty",
        "link": "http://locinealy.com/2dB1"
    },
    {
        "id_disco": 1547,
        "id": 233,
        "nombre_disco": "2016 - Dialogues",
        "link": "http://locinealy.com/2dBT"
    },
    {
        "id_disco": 1548,
        "id": 233,
        "nombre_disco": "2018 - Many Nights",
        "link": "http://locinealy.com/2dBv"
    },
    {
        "id_disco": 1549,
        "id": 234,
        "nombre_disco": "2006 - Taylor Swift (Deluxe Edition)",
        "link": "http://cigorsica.com/nnD"
    },
    {
        "id_disco": 1550,
        "id": 234,
        "nombre_disco": "2007 - Rhapsody Originals (Exclusive) (EP)",
        "link": "http://cigorsica.com/nnw"
    },
    {
        "id_disco": 1551,
        "id": 234,
        "nombre_disco": "2007 - The Taylor Swift (Holiday Collection) (EP)",
        "link": "http://cigorsica.com/noF"
    },
    {
        "id_disco": 1552,
        "id": 234,
        "nombre_disco": "2008 - Beautiful Eyes (EP)",
        "link": "http://cigorsica.com/noY"
    },
    {
        "id_disco": 1553,
        "id": 234,
        "nombre_disco": "2008 - iTunes Live from SoHo",
        "link": "http://cigorsica.com/npk"
    },
    {
        "id_disco": 1554,
        "id": 234,
        "nombre_disco": "2009 - Fearless (Platinum)",
        "link": "http://cigorsica.com/nq7"
    },
    {
        "id_disco": 1555,
        "id": 234,
        "nombre_disco": "2010 - Speak Now (Deluxe Edition)",
        "link": "http://cigorsica.com/nqQ"
    },
    {
        "id_disco": 1556,
        "id": 234,
        "nombre_disco": "2011 - Speak Now - World Tour Live",
        "link": "http://cigorsica.com/nqh"
    },
    {
        "id_disco": 1557,
        "id": 234,
        "nombre_disco": "2012 - Red (Deluxe Edition)",
        "link": "http://cigorsica.com/nqz"
    },
    {
        "id_disco": 1558,
        "id": 234,
        "nombre_disco": "2014 - 1989 (Deluxe)",
        "link": "http://cigorsica.com/nrq"
    },
    {
        "id_disco": 1559,
        "id": 234,
        "nombre_disco": "2017 - Reputation",
        "link": "http://cigorsica.com/ns4"
    },
    {
        "id_disco": 1560,
        "id": 234,
        "nombre_disco": "2019 - Lover",
        "link": "http://cigorsica.com/nsN"
    },
    {
        "id_disco": 1561,
        "id": 235,
        "nombre_disco": "2003 - Ember to Inferno",
        "link": "http://cigorsica.com/nwF"
    },
    {
        "id_disco": 1562,
        "id": 235,
        "nombre_disco": "2003 - Trivium [EP]",
        "link": "http://cigorsica.com/nwv"
    },
    {
        "id_disco": 1563,
        "id": 235,
        "nombre_disco": "2005 - Ascendancy",
        "link": "http://cigorsica.com/nxl"
    },
    {
        "id_disco": 1564,
        "id": 235,
        "nombre_disco": "2006 - The Crusade",
        "link": "http://cigorsica.com/ny8"
    },
    {
        "id_disco": 1565,
        "id": 235,
        "nombre_disco": "2008 - Shogun (Special Edition)",
        "link": "http://cigorsica.com/nyN"
    },
    {
        "id_disco": 1566,
        "id": 235,
        "nombre_disco": "2011 - In Waves (Special Edition)",
        "link": "http://cigorsica.com/nyn"
    },
    {
        "id_disco": 1567,
        "id": 235,
        "nombre_disco": "2013 - Vengeance Falls (Special Edition)",
        "link": "http://cigorsica.com/nzB"
    },
    {
        "id_disco": 1568,
        "id": 235,
        "nombre_disco": "2015 - Silence In The Snow",
        "link": "http://cigorsica.com/nzW"
    },
    {
        "id_disco": 1569,
        "id": 235,
        "nombre_disco": "2017 - The Sin and the Sentence",
        "link": "http://cigorsica.com/nzt"
    },
    {
        "id_disco": 1570,
        "id": 236,
        "nombre_disco": "2013 - Love Songs Drug Songs",
        "link": "http://cigorsica.com/o0u"
    },
    {
        "id_disco": 1571,
        "id": 236,
        "nombre_disco": "2014 - The Reason EP",
        "link": "http://cigorsica.com/o1J"
    },
    {
        "id_disco": 1572,
        "id": 236,
        "nombre_disco": "2015 - VHS",
        "link": "http://cigorsica.com/o1X"
    },
    {
        "id_disco": 1573,
        "id": 236,
        "nombre_disco": "2016 - VHS 2.0",
        "link": "http://cigorsica.com/o1n"
    },
    {
        "id_disco": 1574,
        "id": 236,
        "nombre_disco": "2019 - Orion",
        "link": "http://cigorsica.com/o22"
    },
    {
        "id_disco": 1575,
        "id": 237,
        "nombre_disco": "2019 - The Lost Boy",
        "link": "http://cigorsica.com/o2T"
    },
    {
        "id_disco": 1576,
        "id": 238,
        "nombre_disco": "2012 - Magia",
        "link": "http://eunsetee.com/A3JI"
    },
    {
        "id_disco": 1577,
        "id": 238,
        "nombre_disco": "2015 - PB.DB. The Mixtape",
        "link": "http://eunsetee.com/A3Jd"
    },
    {
        "id_disco": 1578,
        "id": 238,
        "nombre_disco": "2015 - Pretty Boy  Dirty Boy",
        "link": "http://eunsetee.com/A3K1"
    },
    {
        "id_disco": 1579,
        "id": 238,
        "nombre_disco": "2017 - Felices los 4 (4 Versiones)",
        "link": "http://eunsetee.com/A3KU"
    },
    {
        "id_disco": 1580,
        "id": 238,
        "nombre_disco": "2018 - F.A.M.E",
        "link": "http://eunsetee.com/A3Kl"
    },
    {
        "id_disco": 1581,
        "id": 238,
        "nombre_disco": "2019 - 11_11",
        "link": "http://eunsetee.com/A3US"
    },
    {
        "id_disco": 1582,
        "id": 238,
        "nombre_disco": "2019 - Medellín (Remixes Pt. 2)",
        "link": "http://eunsetee.com/A3V5"
    },
    {
        "id_disco": 1583,
        "id": 239,
        "nombre_disco": "2011 - Juug Season",
        "link": "http://eunsetee.com/CiLL"
    },
    {
        "id_disco": 1584,
        "id": 239,
        "nombre_disco": "2012 - No Label",
        "link": "http://eunsetee.com/CiNZ"
    },
    {
        "id_disco": 1585,
        "id": 239,
        "nombre_disco": "2013 - Streets On Lock",
        "link": "http://eunsetee.com/CiNr"
    },
    {
        "id_disco": 1586,
        "id": 239,
        "nombre_disco": "2013 - Streets On Lock 2",
        "link": "http://eunsetee.com/CiOW"
    },
    {
        "id_disco": 1587,
        "id": 239,
        "nombre_disco": "2013 - Y.R.N. (Young Rich Niggas)",
        "link": "http://eunsetee.com/CiPN"
    },
    {
        "id_disco": 1588,
        "id": 239,
        "nombre_disco": "2014 - No Label 2",
        "link": "http://eunsetee.com/CiQH"
    },
    {
        "id_disco": 1589,
        "id": 239,
        "nombre_disco": "2014 - Rich Nigga Timeline",
        "link": "http://eunsetee.com/CiQy"
    },
    {
        "id_disco": 1590,
        "id": 239,
        "nombre_disco": "2014 - Solid Foundation",
        "link": "http://eunsetee.com/CiRR"
    },
    {
        "id_disco": 1591,
        "id": 239,
        "nombre_disco": "2014 - Streets On Lock 3",
        "link": "http://eunsetee.com/CiRu"
    },
    {
        "id_disco": 1592,
        "id": 239,
        "nombre_disco": "2014 - The Green Album",
        "link": "http://eunsetee.com/CiSU"
    },
    {
        "id_disco": 1593,
        "id": 239,
        "nombre_disco": "2015 - Back To The Bando",
        "link": "http://eunsetee.com/CiT0"
    },
    {
        "id_disco": 1594,
        "id": 239,
        "nombre_disco": "2015 - Migo Lingo",
        "link": "http://eunsetee.com/CiTX"
    },
    {
        "id_disco": 1595,
        "id": 239,
        "nombre_disco": "2015 - Still On Lock",
        "link": "http://eunsetee.com/CiUI"
    },
    {
        "id_disco": 1596,
        "id": 239,
        "nombre_disco": "2015 - Streets On Lock 4",
        "link": "http://eunsetee.com/CiV5"
    },
    {
        "id_disco": 1597,
        "id": 239,
        "nombre_disco": "2015 - Yung Rich Nation",
        "link": "http://eunsetee.com/CiVz"
    },
    {
        "id_disco": 1598,
        "id": 239,
        "nombre_disco": "2016 - 3 Way EP",
        "link": "http://eunsetee.com/CiWX"
    },
    {
        "id_disco": 1599,
        "id": 239,
        "nombre_disco": "2016 - MigoThuggin",
        "link": "http://eunsetee.com/CiX9"
    },
    {
        "id_disco": 1600,
        "id": 239,
        "nombre_disco": "2016 - Young Rich Niggas 2",
        "link": "http://eunsetee.com/CiXW"
    },
    {
        "id_disco": 1601,
        "id": 239,
        "nombre_disco": "2017 - Culture",
        "link": "http://eunsetee.com/CiXy"
    },
    {
        "id_disco": 1602,
        "id": 239,
        "nombre_disco": "2018 - Culture II",
        "link": "http://eunsetee.com/CiYV"
    },
    {
        "id_disco": 1603,
        "id": 240,
        "nombre_disco": "2019 - The Search",
        "link": "http://eunsetee.com/CiZF"
    },
    {
        "id_disco": 1604,
        "id": 241,
        "nombre_disco": "2017 - Odisea",
        "link": "http://eunsetee.com/CiZy"
    },
    {
        "id_disco": 1605,
        "id": 241,
        "nombre_disco": "2018 - Aura",
        "link": "http://eunsetee.com/CiaO"
    },
    {
        "id_disco": 1606,
        "id": 242,
        "nombre_disco": "2019 - Homerun",
        "link": "http://eunsetee.com/Cib2"
    },
    {
        "id_disco": 1607,
        "id": 243,
        "nombre_disco": "2005 - Reik",
        "link": "http://eunsetee.com/Cicy"
    },
    {
        "id_disco": 1608,
        "id": 243,
        "nombre_disco": "2006 - Reik Sesion Metropolitana",
        "link": "http://eunsetee.com/CidV"
    },
    {
        "id_disco": 1609,
        "id": 243,
        "nombre_disco": "2006 - Secuencia",
        "link": "http://eunsetee.com/Cidz"
    },
    {
        "id_disco": 1610,
        "id": 243,
        "nombre_disco": "2008 - Un Dia Mas (Edicion Especial)",
        "link": "http://eunsetee.com/CieL"
    },
    {
        "id_disco": 1611,
        "id": 243,
        "nombre_disco": "2011 - Peligro",
        "link": "http://eunsetee.com/Cieg"
    },
    {
        "id_disco": 1612,
        "id": 243,
        "nombre_disco": "2013 - Reik En Vivo Auditorio Nacional",
        "link": "http://eunsetee.com/CifI"
    },
    {
        "id_disco": 1613,
        "id": 243,
        "nombre_disco": "2016 - Des_Amor",
        "link": "http://eunsetee.com/Cifo"
    },
    {
        "id_disco": 1614,
        "id": 243,
        "nombre_disco": "2019 - Ahora",
        "link": "http://eunsetee.com/Cihb"
    },
    {
        "id_disco": 1615,
        "id": 244,
        "nombre_disco": "2019 - Anger Management",
        "link": "http://eunsetee.com/Ciid"
    },
    {
        "id_disco": 1616,
        "id": 245,
        "nombre_disco": "2015 - Eyes Wide Open",
        "link": "http://eunsetee.com/Cijc"
    },
    {
        "id_disco": 1617,
        "id": 245,
        "nombre_disco": "2016 - EVOLution",
        "link": "http://eunsetee.com/Cikd"
    },
    {
        "id_disco": 1618,
        "id": 245,
        "nombre_disco": "2018 - Singular Act I",
        "link": "http://eunsetee.com/Cim9"
    },
    {
        "id_disco": 1619,
        "id": 245,
        "nombre_disco": "2019 - Singular Act II",
        "link": "http://eunsetee.com/Cimg"
    },
    {
        "id_disco": 1620,
        "id": 246,
        "nombre_disco": "2019 - Portrait Of The Dogg",
        "link": "http://eunsetee.com/Cj7C"
    },
    {
        "id_disco": 1621,
        "id": 247,
        "nombre_disco": "2003 - Solo Star",
        "link": "http://eunsetee.com/Cj8Y"
    },
    {
        "id_disco": 1622,
        "id": 247,
        "nombre_disco": "2008 - Sol-Angel and the Hadley St. Dreams",
        "link": "http://eunsetee.com/Cj8z"
    },
    {
        "id_disco": 1623,
        "id": 247,
        "nombre_disco": "2012 - True - EP",
        "link": "http://eunsetee.com/Cj9a"
    },
    {
        "id_disco": 1624,
        "id": 247,
        "nombre_disco": "2016 - A Seat at the Table",
        "link": "http://eunsetee.com/CjA6"
    },
    {
        "id_disco": 1625,
        "id": 247,
        "nombre_disco": "2019 - When I Get Home",
        "link": "http://eunsetee.com/CjAW"
    },
    {
        "id_disco": 1626,
        "id": 248,
        "nombre_disco": "2009 - My World",
        "link": "http://eunsetee.com/A2k8"
    },
    {
        "id_disco": 1627,
        "id": 248,
        "nombre_disco": "2010 - My World 2.0",
        "link": "http://eunsetee.com/A2kg"
    },
    {
        "id_disco": 1628,
        "id": 248,
        "nombre_disco": "2010 - My Worlds Acoustic",
        "link": "http://eunsetee.com/A2lO"
    },
    {
        "id_disco": 1629,
        "id": 248,
        "nombre_disco": "2010 – My Worlds The Collection",
        "link": "http://eunsetee.com/A2lt"
    },
    {
        "id_disco": 1630,
        "id": 248,
        "nombre_disco": "2011 - Never Say Never (The Remixes)",
        "link": "http://eunsetee.com/A2mM"
    },
    {
        "id_disco": 1631,
        "id": 248,
        "nombre_disco": "2011 - Under The Mistletoe",
        "link": "http://eunsetee.com/A2mp"
    },
    {
        "id_disco": 1632,
        "id": 248,
        "nombre_disco": "2012 - Believe (Deluxe Edition)",
        "link": "http://eunsetee.com/A2nE"
    },
    {
        "id_disco": 1633,
        "id": 248,
        "nombre_disco": "2013 - Believe Acoustic",
        "link": "http://eunsetee.com/A2nc"
    },
    {
        "id_disco": 1634,
        "id": 248,
        "nombre_disco": "2013 - Journals",
        "link": "http://eunsetee.com/A2np"
    },
    {
        "id_disco": 1635,
        "id": 248,
        "nombre_disco": "2015 - Purpose (Deluxe Edition)",
        "link": "http://eunsetee.com/A2oS"
    },
    {
        "id_disco": 1636,
        "id": 249,
        "nombre_disco": "2001 - Katy Hudson",
        "link": "http://eunsetee.com/A2qt"
    },
    {
        "id_disco": 1637,
        "id": 249,
        "nombre_disco": "2008 - One Of The Boys",
        "link": "http://eunsetee.com/A2rJ"
    },
    {
        "id_disco": 1638,
        "id": 249,
        "nombre_disco": "2009 - MTV Unplugged",
        "link": "http://eunsetee.com/A2ra"
    },
    {
        "id_disco": 1639,
        "id": 249,
        "nombre_disco": "2009 - The Matrix (Katy Perry & Adam Longlands)",
        "link": "http://eunsetee.com/A2s1"
    },
    {
        "id_disco": 1640,
        "id": 249,
        "nombre_disco": "2010 - Teenage Dream (Deluxe Edition)",
        "link": "http://eunsetee.com/A2sU"
    },
    {
        "id_disco": 1641,
        "id": 249,
        "nombre_disco": "2013 - Prism",
        "link": "http://eunsetee.com/A2sp"
    },
    {
        "id_disco": 1642,
        "id": 249,
        "nombre_disco": "2017 - Witness",
        "link": "http://eunsetee.com/A2tE"
    },
    {
        "id_disco": 1643,
        "id": 250,
        "nombre_disco": "2017 - American Teen",
        "link": "http://eunsetee.com/A2tk"
    },
    {
        "id_disco": 1644,
        "id": 250,
        "nombre_disco": "2019 - Free Spirit",
        "link": "http://eunsetee.com/A2u4"
    },
    {
        "id_disco": 1645,
        "id": 251,
        "nombre_disco": "2000 - Killswitch Engage (Remastered)",
        "link": "http://eunsetee.com/A2uf"
    },
    {
        "id_disco": 1646,
        "id": 251,
        "nombre_disco": "2002 - Alive or Just Breathing",
        "link": "http://eunsetee.com/A2vB"
    },
    {
        "id_disco": 1647,
        "id": 251,
        "nombre_disco": "2004 - The End of Heartache",
        "link": "http://eunsetee.com/A2vY"
    },
    {
        "id_disco": 1648,
        "id": 251,
        "nombre_disco": "2006 - As Daylight Dies",
        "link": "http://eunsetee.com/A2vu"
    },
    {
        "id_disco": 1649,
        "id": 251,
        "nombre_disco": "2009 - Killswitch Engage II",
        "link": "http://eunsetee.com/A2wB"
    },
    {
        "id_disco": 1650,
        "id": 251,
        "nombre_disco": "2013 - Disarm The Descent (Special Edition)",
        "link": "http://eunsetee.com/A2wa"
    },
    {
        "id_disco": 1651,
        "id": 251,
        "nombre_disco": "2016 - Incarnate",
        "link": "http://eunsetee.com/A2wn"
    },
    {
        "id_disco": 1652,
        "id": 251,
        "nombre_disco": "2019 - Atonement",
        "link": "http://eunsetee.com/A2x8"
    },
    {
        "id_disco": 1653,
        "id": 252,
        "nombre_disco": "2019 - Love Songs 4 the Streets 2",
        "link": "http://eunsetee.com/A33A"
    },
    {
        "id_disco": 1654,
        "id": 253,
        "nombre_disco": "1997 - Three Dollar Bill  Yall",
        "link": "http://eunsetee.com/A33x"
    },
    {
        "id_disco": 1655,
        "id": 253,
        "nombre_disco": "1997-2011 - Singles Pack",
        "link": "http://eunsetee.com/A34K"
    },
    {
        "id_disco": 1656,
        "id": 253,
        "nombre_disco": "1999 - Significant Other",
        "link": "http://eunsetee.com/A34e"
    },
    {
        "id_disco": 1657,
        "id": 253,
        "nombre_disco": "2000 - Chocolate Starfish And The Hot Dog",
        "link": "http://eunsetee.com/A34w"
    },
    {
        "id_disco": 1658,
        "id": 253,
        "nombre_disco": "2001 - New old songs",
        "link": "http://eunsetee.com/A35L"
    },
    {
        "id_disco": 1659,
        "id": 253,
        "nombre_disco": "2003 - Results May Vary",
        "link": "http://eunsetee.com/A35x"
    },
    {
        "id_disco": 1660,
        "id": 253,
        "nombre_disco": "2005 - Greatest Hitz",
        "link": "http://eunsetee.com/A36K"
    },
    {
        "id_disco": 1661,
        "id": 253,
        "nombre_disco": "2005 - The Unquestionable Truth (Part 1)",
        "link": "http://eunsetee.com/A36e"
    },
    {
        "id_disco": 1662,
        "id": 253,
        "nombre_disco": "2008 - Collected",
        "link": "http://eunsetee.com/A36w"
    },
    {
        "id_disco": 1663,
        "id": 253,
        "nombre_disco": "2008 - Rock Im Park 2001",
        "link": "http://eunsetee.com/A37n"
    },
    {
        "id_disco": 1664,
        "id": 253,
        "nombre_disco": "2011 - Gold Cobra (Deluxe Edition)",
        "link": "http://eunsetee.com/A38L"
    },
    {
        "id_disco": 1665,
        "id": 254,
        "nombre_disco": "2019 - May the Lord Watch",
        "link": "http://eunsetee.com/A39e"
    },
    {
        "id_disco": 1666,
        "id": 255,
        "nombre_disco": "1983 - Madonna",
        "link": "http://eunsetee.com/A3Aw"
    },
    {
        "id_disco": 1667,
        "id": 255,
        "nombre_disco": "1984 - Like a Virgin",
        "link": "http://eunsetee.com/A3BH"
    },
    {
        "id_disco": 1668,
        "id": 255,
        "nombre_disco": "1986 - True Blue",
        "link": "http://eunsetee.com/A3Bh"
    },
    {
        "id_disco": 1669,
        "id": 255,
        "nombre_disco": "1989 - Like a Prayer",
        "link": "http://eunsetee.com/A3C4"
    },
    {
        "id_disco": 1670,
        "id": 255,
        "nombre_disco": "1992 - Erotica",
        "link": "http://eunsetee.com/A3CS"
    },
    {
        "id_disco": 1671,
        "id": 255,
        "nombre_disco": "1994 - Bedtime Stories",
        "link": "http://eunsetee.com/A3Cq"
    },
    {
        "id_disco": 1672,
        "id": 255,
        "nombre_disco": "1998 - Ray of Light",
        "link": "http://eunsetee.com/A3Gf"
    },
    {
        "id_disco": 1673,
        "id": 255,
        "nombre_disco": "2000 - Music",
        "link": "http://eunsetee.com/A3Gz"
    },
    {
        "id_disco": 1674,
        "id": 255,
        "nombre_disco": "2003 - American Life",
        "link": "http://eunsetee.com/A3HJ"
    },
    {
        "id_disco": 1675,
        "id": 255,
        "nombre_disco": "2008 - Hard Candy",
        "link": "http://eunsetee.com/A3Hd"
    },
    {
        "id_disco": 1676,
        "id": 255,
        "nombre_disco": "2012 - MDNA",
        "link": "http://eunsetee.com/A3Hq"
    },
    {
        "id_disco": 1677,
        "id": 255,
        "nombre_disco": "2019 - Madame X (Deluxe)",
        "link": "http://eunsetee.com/A3IC"
    },
    {
        "id_disco": 1678,
        "id": 256,
        "nombre_disco": "2019 - Heard It In A Past Life",
        "link": "http://eunsetee.com/A3Io"
    },
    {
        "id_disco": 1679,
        "id": 257,
        "nombre_disco": "2019 - ZUU",
        "link": "http://eunsetee.com/8viS"
    },
    {
        "id_disco": 1680,
        "id": 258,
        "nombre_disco": "2006 - Room For Improvement",
        "link": "http://eunsetee.com/8vj6"
    },
    {
        "id_disco": 1681,
        "id": 258,
        "nombre_disco": "2007 - Comeback Season",
        "link": "http://eunsetee.com/8vk6"
    },
    {
        "id_disco": 1682,
        "id": 258,
        "nombre_disco": "2009 - So Far Gone",
        "link": "http://eunsetee.com/8vkb"
    },
    {
        "id_disco": 1683,
        "id": 258,
        "nombre_disco": "2009 - We Are Young Money",
        "link": "http://eunsetee.com/8vlM"
    },
    {
        "id_disco": 1684,
        "id": 258,
        "nombre_disco": "2010 - Thank Me Later",
        "link": "http://eunsetee.com/8vll"
    },
    {
        "id_disco": 1685,
        "id": 258,
        "nombre_disco": "2011 - Take Care",
        "link": "http://eunsetee.com/8vmO"
    },
    {
        "id_disco": 1686,
        "id": 258,
        "nombre_disco": "2013 - Nothing Was The Same",
        "link": "http://eunsetee.com/8vmm"
    },
    {
        "id_disco": 1687,
        "id": 258,
        "nombre_disco": "2014 - Rise Of An Empire",
        "link": "http://eunsetee.com/8vnG"
    },
    {
        "id_disco": 1688,
        "id": 258,
        "nombre_disco": "2015 - If Youre Reading This Its Too Late",
        "link": "http://eunsetee.com/8vnu"
    },
    {
        "id_disco": 1689,
        "id": 258,
        "nombre_disco": "2015 - What a Time to Be Alive",
        "link": "http://eunsetee.com/8voO"
    },
    {
        "id_disco": 1690,
        "id": 258,
        "nombre_disco": "2016 - Views",
        "link": "http://eunsetee.com/8vqq"
    },
    {
        "id_disco": 1691,
        "id": 258,
        "nombre_disco": "2018 - Scorpion",
        "link": "http://eunsetee.com/8vrE"
    },
    {
        "id_disco": 1692,
        "id": 259,
        "nombre_disco": "2005 - July Heat",
        "link": "http://eunsetee.com/8vs6"
    },
    {
        "id_disco": 1693,
        "id": 259,
        "nombre_disco": "2006 - 1983",
        "link": "http://eunsetee.com/8vsX"
    },
    {
        "id_disco": 1694,
        "id": 259,
        "nombre_disco": "2008 - Los Angeles",
        "link": "http://eunsetee.com/8vt3"
    },
    {
        "id_disco": 1695,
        "id": 259,
        "nombre_disco": "2010 - Cosmogramma",
        "link": "http://eunsetee.com/8vtM"
    },
    {
        "id_disco": 1696,
        "id": 259,
        "nombre_disco": "2012 - Duality",
        "link": "http://eunsetee.com/8vtd"
    },
    {
        "id_disco": 1697,
        "id": 259,
        "nombre_disco": "2014 - Youre Dead!",
        "link": "http://eunsetee.com/8vu0"
    },
    {
        "id_disco": 1698,
        "id": 259,
        "nombre_disco": "2019 - Flamagra",
        "link": "http://eunsetee.com/8vub"
    },
    {
        "id_disco": 1699,
        "id": 260,
        "nombre_disco": "2019 - No Mans Land",
        "link": "http://eunsetee.com/8vvR"
    },
    {
        "id_disco": 1700,
        "id": 261,
        "nombre_disco": "2019 - Now  Not Yet",
        "link": "http://eunsetee.com/8vwB"
    },
    {
        "id_disco": 1701,
        "id": 262,
        "nombre_disco": "1985 - Helloween [EP]",
        "link": "http://eunsetee.com/8vx6"
    },
    {
        "id_disco": 1702,
        "id": 262,
        "nombre_disco": "1985 - Walls Of Jericho [Expanded Edition]",
        "link": "http://eunsetee.com/8vxV"
    },
    {
        "id_disco": 1703,
        "id": 262,
        "nombre_disco": "1987 - Keeper Of The Seven Keys Part I [Expanded Edition]",
        "link": "http://eunsetee.com/8vyt"
    },
    {
        "id_disco": 1704,
        "id": 262,
        "nombre_disco": "1988 - Keeper Of The Seven Keys Part II [Expanded Edition]",
        "link": "http://eunsetee.com/8vzQ"
    },
    {
        "id_disco": 1705,
        "id": 262,
        "nombre_disco": "1991 - Pink Bubbles Go Ape [Expanded Edition]",
        "link": "http://eunsetee.com/8vzx"
    },
    {
        "id_disco": 1706,
        "id": 262,
        "nombre_disco": "1993 - Chameleon [Expanded Edition]",
        "link": "http://eunsetee.com/8w0O"
    },
    {
        "id_disco": 1707,
        "id": 262,
        "nombre_disco": "1994 - Master Of The Rings [Expanded Edition]",
        "link": "http://eunsetee.com/8w0g"
    },
    {
        "id_disco": 1708,
        "id": 262,
        "nombre_disco": "1996 - The Time Of The Oath [Expanded Edition]",
        "link": "http://eunsetee.com/8w1M"
    },
    {
        "id_disco": 1709,
        "id": 262,
        "nombre_disco": "1998 - Better Than Raw [Expanded Edition]",
        "link": "http://eunsetee.com/8w1v"
    },
    {
        "id_disco": 1710,
        "id": 262,
        "nombre_disco": "1999 - Metal Jukebox",
        "link": "http://eunsetee.com/8w2I"
    },
    {
        "id_disco": 1711,
        "id": 262,
        "nombre_disco": "2000 - The Dark Ride",
        "link": "http://eunsetee.com/8w2g"
    },
    {
        "id_disco": 1712,
        "id": 262,
        "nombre_disco": "2003 - Rabbit Dont Come Easy",
        "link": "http://eunsetee.com/8w3F"
    },
    {
        "id_disco": 1713,
        "id": 262,
        "nombre_disco": "2005 - Keeper Of The Seven Keys - The Legacy",
        "link": "http://eunsetee.com/8w4s"
    },
    {
        "id_disco": 1714,
        "id": 262,
        "nombre_disco": "2007 - Gambling With The Devil",
        "link": "http://eunsetee.com/8w6J"
    },
    {
        "id_disco": 1715,
        "id": 262,
        "nombre_disco": "2010 - 7 Sinners",
        "link": "http://eunsetee.com/8w6s"
    },
    {
        "id_disco": 1716,
        "id": 262,
        "nombre_disco": "2012 - Burning Sun [EP]",
        "link": "http://eunsetee.com/8w7N"
    },
    {
        "id_disco": 1717,
        "id": 262,
        "nombre_disco": "2013 - Straight Out Of Hell",
        "link": "http://eunsetee.com/8w7o"
    },
    {
        "id_disco": 1718,
        "id": 262,
        "nombre_disco": "2015 - My God-Given Right (Deluxe Edition)",
        "link": "http://eunsetee.com/8w87"
    },
    {
        "id_disco": 1719,
        "id": 263,
        "nombre_disco": "2019 - In My Defense",
        "link": "http://eunsetee.com/8w9I"
    },
    {
        "id_disco": 1720,
        "id": 264,
        "nombre_disco": "2000 - Fukd ID #3",
        "link": "http://eunsetee.com/8wAD"
    },
    {
        "id_disco": 1721,
        "id": 264,
        "nombre_disco": "2001 - Precipitate",
        "link": "http://eunsetee.com/8wAa"
    },
    {
        "id_disco": 1722,
        "id": 264,
        "nombre_disco": "2002 - Interpol (EP)",
        "link": "http://eunsetee.com/8wB8"
    },
    {
        "id_disco": 1723,
        "id": 264,
        "nombre_disco": "2002 - Turn On The Bright Lights",
        "link": "http://eunsetee.com/8wBS"
    },
    {
        "id_disco": 1724,
        "id": 264,
        "nombre_disco": "2003 - The Black",
        "link": "http://eunsetee.com/8wBm"
    },
    {
        "id_disco": 1725,
        "id": 264,
        "nombre_disco": "2004 - Antics",
        "link": "http://eunsetee.com/8wCE"
    },
    {
        "id_disco": 1726,
        "id": 264,
        "nombre_disco": "2005 - Song Seven",
        "link": "http://eunsetee.com/8wCf"
    },
    {
        "id_disco": 1727,
        "id": 264,
        "nombre_disco": "2007 - Live",
        "link": "http://eunsetee.com/8wD0"
    },
    {
        "id_disco": 1728,
        "id": 264,
        "nombre_disco": "2007 - Our Love to Admire",
        "link": "http://eunsetee.com/8wDP"
    },
    {
        "id_disco": 1729,
        "id": 264,
        "nombre_disco": "2007 - Our Love to Admire (Remixed)",
        "link": "http://eunsetee.com/8wDv"
    },
    {
        "id_disco": 1730,
        "id": 264,
        "nombre_disco": "2010 - Interpol",
        "link": "http://eunsetee.com/8wER"
    },
    {
        "id_disco": 1731,
        "id": 264,
        "nombre_disco": "2014 - El Pintor",
        "link": "http://eunsetee.com/8wEz"
    },
    {
        "id_disco": 1732,
        "id": 264,
        "nombre_disco": "2018 - Marauder",
        "link": "http://eunsetee.com/8wFU"
    },
    {
        "id_disco": 1733,
        "id": 264,
        "nombre_disco": "2019 - A Fine Mess",
        "link": "http://eunsetee.com/91Ne"
    },
    {
        "id_disco": 1734,
        "id": 265,
        "nombre_disco": "2011 - James Blake",
        "link": "http://eunsetee.com/8wG6"
    },
    {
        "id_disco": 1735,
        "id": 265,
        "nombre_disco": "2013 - Overgrown (Deluxe Edition)",
        "link": "http://eunsetee.com/8wGV"
    },
    {
        "id_disco": 1736,
        "id": 265,
        "nombre_disco": "2016 - The Colour In Anything",
        "link": "http://eunsetee.com/8wH1"
    },
    {
        "id_disco": 1737,
        "id": 265,
        "nombre_disco": "2019 - Assume Form",
        "link": "http://eunsetee.com/8wHb"
    },
    {
        "id_disco": 1738,
        "id": 266,
        "nombre_disco": "2006 - Undiscovered",
        "link": "http://eunsetee.com/8wIh"
    },
    {
        "id_disco": 1739,
        "id": 266,
        "nombre_disco": "2008 - Songs For You  Truths For Me",
        "link": "http://eunsetee.com/8wJ4"
    },
    {
        "id_disco": 1740,
        "id": 266,
        "nombre_disco": "2011 - The Awakening",
        "link": "http://eunsetee.com/8wJP"
    },
    {
        "id_disco": 1741,
        "id": 266,
        "nombre_disco": "2015 - Higher Than Here",
        "link": "http://eunsetee.com/8wJu"
    },
    {
        "id_disco": 1742,
        "id": 266,
        "nombre_disco": "2015 - Higher Than Here (Deluxe)",
        "link": "http://eunsetee.com/8wKY"
    },
    {
        "id_disco": 1743,
        "id": 266,
        "nombre_disco": "2019 - Youre Stronger Than You Know",
        "link": "http://eunsetee.com/8wL2"
    },
    {
        "id_disco": 1744,
        "id": 267,
        "nombre_disco": "2012 - Somewhere New (EP)",
        "link": "http://eunsetee.com/6nn0"
    },
    {
        "id_disco": 1745,
        "id": 267,
        "nombre_disco": "2012 - Unplugged (EP)",
        "link": "http://eunsetee.com/6nng"
    },
    {
        "id_disco": 1746,
        "id": 267,
        "nombre_disco": "2014 - 5 Seconds of Summer (Deluxe Edition)",
        "link": "http://eunsetee.com/6noJ"
    },
    {
        "id_disco": 1747,
        "id": 267,
        "nombre_disco": "2014 - Amnesia (EP)",
        "link": "http://eunsetee.com/6npC"
    },
    {
        "id_disco": 1748,
        "id": 267,
        "nombre_disco": "2014 - Dont Stop (EP)",
        "link": "http://eunsetee.com/6npf"
    },
    {
        "id_disco": 1749,
        "id": 267,
        "nombre_disco": "2014 - Good Girls (EP)",
        "link": "http://eunsetee.com/6nqC"
    },
    {
        "id_disco": 1750,
        "id": 267,
        "nombre_disco": "2014 - Live SOS",
        "link": "http://eunsetee.com/6nqg"
    },
    {
        "id_disco": 1751,
        "id": 267,
        "nombre_disco": "2014 - She Looks So Perfect (EP)",
        "link": "http://eunsetee.com/6nrD"
    },
    {
        "id_disco": 1752,
        "id": 267,
        "nombre_disco": "2015 - Sounds Good Feels Good (Deluxe)",
        "link": "http://eunsetee.com/6nrs"
    },
    {
        "id_disco": 1753,
        "id": 267,
        "nombre_disco": "2018 - Youngblood (Deluxe)",
        "link": "http://eunsetee.com/6nsH"
    },
    {
        "id_disco": 1754,
        "id": 268,
        "nombre_disco": "2001 - Bandana",
        "link": "http://eunsetee.com/6ntV"
    },
    {
        "id_disco": 1755,
        "id": 268,
        "nombre_disco": "2002 - Noche",
        "link": "http://eunsetee.com/6nu2"
    },
    {
        "id_disco": 1756,
        "id": 268,
        "nombre_disco": "2003 - Vivir Intentando",
        "link": "http://eunsetee.com/6nup"
    },
    {
        "id_disco": 1757,
        "id": 268,
        "nombre_disco": "2004 - Hasta Siempre",
        "link": "http://eunsetee.com/6nvB"
    },
    {
        "id_disco": 1758,
        "id": 268,
        "nombre_disco": "2016 - Bandana La vuelta",
        "link": "http://eunsetee.com/6nvT"
    },
    {
        "id_disco": 1759,
        "id": 269,
        "nombre_disco": "2019 - III",
        "link": "http://eunsetee.com/6nwN"
    },
    {
        "id_disco": 1760,
        "id": 270,
        "nombre_disco": "2015 - I Dont Wanna Grow Up",
        "link": "http://eunsetee.com/6nxA"
    },
    {
        "id_disco": 1761,
        "id": 270,
        "nombre_disco": "2017 - All Your Fault Pt. 1",
        "link": "http://eunsetee.com/6nxf"
    },
    {
        "id_disco": 1762,
        "id": 270,
        "nombre_disco": "2017 - All Your Fault Pt. 2",
        "link": "http://eunsetee.com/6ny4"
    },
    {
        "id_disco": 1763,
        "id": 270,
        "nombre_disco": "2018 - Expectations",
        "link": "http://eunsetee.com/6nyl"
    },
    {
        "id_disco": 1764,
        "id": 270,
        "nombre_disco": "Singles & Remixes Pack 1",
        "link": "http://eunsetee.com/6nzH"
    },
    {
        "id_disco": 1765,
        "id": 271,
        "nombre_disco": "2019 - Better Oblivion Community Center",
        "link": "http://eunsetee.com/7QOq"
    },
    {
        "id_disco": 1766,
        "id": 272,
        "nombre_disco": "2016 - Masterpiece",
        "link": "http://eunsetee.com/7QPs"
    },
    {
        "id_disco": 1767,
        "id": 272,
        "nombre_disco": "2017 - Capacity",
        "link": "http://eunsetee.com/7QQZ"
    },
    {
        "id_disco": 1768,
        "id": 272,
        "nombre_disco": "2019 - U.F.O.F",
        "link": "http://eunsetee.com/7QRE"
    },
    {
        "id_disco": 1769,
        "id": 273,
        "nombre_disco": "2019 - Hiding Places",
        "link": "http://eunsetee.com/7QTw"
    },
    {
        "id_disco": 1770,
        "id": 274,
        "nombre_disco": "2019 - Lost Control",
        "link": "http://eunsetee.com/7QWl"
    },
    {
        "id_disco": 1771,
        "id": 275,
        "nombre_disco": "2016 - Gangsta Bitch Music Vol 1",
        "link": "http://eunsetee.com/7QZ4"
    },
    {
        "id_disco": 1772,
        "id": 275,
        "nombre_disco": "2017 - Gangsta Bitch Music Vol. 2",
        "link": "http://eunsetee.com/7QZf"
    },
    {
        "id_disco": 1773,
        "id": 275,
        "nombre_disco": "2018 - Invasion of Privacy",
        "link": "http://eunsetee.com/7QaB"
    },
    {
        "id_disco": 1774,
        "id": 275,
        "nombre_disco": "Singles Pack",
        "link": "http://eunsetee.com/7Qbp"
    },
    {
        "id_disco": 1775,
        "id": 276,
        "nombre_disco": "2004-2012 - Singles  EP’s & Otros",
        "link": "http://eunsetee.com/7Qct"
    },
    {
        "id_disco": 1776,
        "id": 276,
        "nombre_disco": "2008 - Tug Of War",
        "link": "http://eunsetee.com/7Qdm"
    },
    {
        "id_disco": 1777,
        "id": 276,
        "nombre_disco": "2012 - Kiss (Japanese Edition)",
        "link": "http://eunsetee.com/7QeY"
    },
    {
        "id_disco": 1778,
        "id": 276,
        "nombre_disco": "2015 - Emotion",
        "link": "http://eunsetee.com/7Qf4"
    },
    {
        "id_disco": 1779,
        "id": 276,
        "nombre_disco": "2019 - Dedicated",
        "link": "http://eunsetee.com/7QfQ"
    },
    {
        "id_disco": 1780,
        "id": 277,
        "nombre_disco": "2018 - diary 001 (EP)",
        "link": "http://eunsetee.com/7Qgl"
    },
    {
        "id_disco": 1781,
        "id": 277,
        "nombre_disco": "2019 - Immunity",
        "link": "http://eunsetee.com/7Qho"
    },
    {
        "id_disco": 1782,
        "id": 278,
        "nombre_disco": "1990 - Facelift",
        "link": "http://evassmat.com/bgnv"
    },
    {
        "id_disco": 1783,
        "id": 278,
        "nombre_disco": "1992 - Dirt (Limited Edition)",
        "link": "http://evassmat.com/bgoF"
    },
    {
        "id_disco": 1784,
        "id": 278,
        "nombre_disco": "1995 - Alice In Chains (Japanese Edition)",
        "link": "http://evassmat.com/bgof"
    },
    {
        "id_disco": 1785,
        "id": 278,
        "nombre_disco": "1996 - MTV Unplugged",
        "link": "http://evassmat.com/bgoz"
    },
    {
        "id_disco": 1786,
        "id": 278,
        "nombre_disco": "1999 - Bank Heist",
        "link": "http://evassmat.com/bgpK"
    },
    {
        "id_disco": 1787,
        "id": 278,
        "nombre_disco": "1999 - Music Bank",
        "link": "http://evassmat.com/bgpb"
    },
    {
        "id_disco": 1788,
        "id": 278,
        "nombre_disco": "1999 - Nothing Safe",
        "link": "http://evassmat.com/bgpr"
    },
    {
        "id_disco": 1789,
        "id": 278,
        "nombre_disco": "2000 - Live",
        "link": "http://evassmat.com/bgq9"
    },
    {
        "id_disco": 1790,
        "id": 278,
        "nombre_disco": "2001 - Greatest Hits",
        "link": "http://evassmat.com/bgqX"
    },
    {
        "id_disco": 1791,
        "id": 278,
        "nombre_disco": "2001 - The Best Of Alice In Chains",
        "link": "http://evassmat.com/bgqq"
    },
    {
        "id_disco": 1792,
        "id": 278,
        "nombre_disco": "2006 - The Essential Alice in Chains",
        "link": "http://evassmat.com/bgrA"
    },
    {
        "id_disco": 1793,
        "id": 278,
        "nombre_disco": "2008 - Discover (EP)",
        "link": "http://evassmat.com/bgsh"
    },
    {
        "id_disco": 1794,
        "id": 278,
        "nombre_disco": "2009 - Black Gives Way To Blue",
        "link": "http://evassmat.com/bguu"
    },
    {
        "id_disco": 1795,
        "id": 278,
        "nombre_disco": "2013 -The Devil Put Dinosaurs Here",
        "link": "http://evassmat.com/bgvK"
    },
    {
        "id_disco": 1796,
        "id": 278,
        "nombre_disco": "2018 - Ranier Fog",
        "link": "http://evassmat.com/bgvs"
    },
    {
        "id_disco": 1797,
        "id": 278,
        "nombre_disco": "Singles  EPs  Fan Club & Promo",
        "link": "http://evassmat.com/bgwM"
    },
    {
        "id_disco": 1798,
        "id": 279,
        "nombre_disco": "2009 - films (EP)",
        "link": "http://evassmat.com/bl3F"
    },
    {
        "id_disco": 1799,
        "id": 279,
        "nombre_disco": "2012 - An Awesome Wave (Limited Tour Edition)",
        "link": "http://evassmat.com/bl3b"
    },
    {
        "id_disco": 1800,
        "id": 279,
        "nombre_disco": "2014 - This Is All Yours",
        "link": "http://evassmat.com/bl3t"
    },
    {
        "id_disco": 1801,
        "id": 279,
        "nombre_disco": "2015 - This Is All Yours  Too (EP)",
        "link": "http://evassmat.com/bl4F"
    },
    {
        "id_disco": 1802,
        "id": 279,
        "nombre_disco": "2016 - Live at Red Rocks",
        "link": "http://evassmat.com/bl4V"
    },
    {
        "id_disco": 1803,
        "id": 279,
        "nombre_disco": "2017 - Relaxer",
        "link": "http://evassmat.com/bl56"
    },
    {
        "id_disco": 1804,
        "id": 279,
        "nombre_disco": "Singles",
        "link": "http://evassmat.com/bl5P"
    },
    {
        "id_disco": 1805,
        "id": 280,
        "nombre_disco": "2013 - Existence",
        "link": "http://evassmat.com/bl7a"
    },
    {
        "id_disco": 1806,
        "id": 280,
        "nombre_disco": "2014 - Remixed",
        "link": "http://evassmat.com/bl7t"
    },
    {
        "id_disco": 1807,
        "id": 280,
        "nombre_disco": "2015 - Decimus",
        "link": "http://evassmat.com/bl86"
    },
    {
        "id_disco": 1808,
        "id": 280,
        "nombre_disco": "2018 - Exogenesis",
        "link": "http://evassmat.com/bl8L"
    },
    {
        "id_disco": 1809,
        "id": 281,
        "nombre_disco": "2012 - Change My Mind",
        "link": "http://evassmat.com/bl9V"
    },
    {
        "id_disco": 1810,
        "id": 282,
        "nombre_disco": "2016 - 22  A Million",
        "link": "http://evassmat.com/blAF"
    },
    {
        "id_disco": 1811,
        "id": 282,
        "nombre_disco": "2019 - i i",
        "link": "http://eunsetee.com/7SGK"
    },
    {
        "id_disco": 1812,
        "id": 283,
        "nombre_disco": "2019 - Hexed (Deluxe Version)",
        "link": "http://evassmat.com/blBD"
    },
    {
        "id_disco": 1813,
        "id": 284,
        "nombre_disco": "2019 - Baby On Baby",
        "link": "http://evassmat.com/blCU"
    },
    {
        "id_disco": 1814,
        "id": 285,
        "nombre_disco": "2010 - Loose Change",
        "link": "http://evassmat.com/blDb"
    },
    {
        "id_disco": 1815,
        "id": 285,
        "nombre_disco": "2011 - + (Deluxe Edition)",
        "link": "http://evassmat.com/blDn"
    },
    {
        "id_disco": 1816,
        "id": 285,
        "nombre_disco": "2011 - Lego House (EP)",
        "link": "http://evassmat.com/blE8"
    },
    {
        "id_disco": 1817,
        "id": 285,
        "nombre_disco": "2011 - Live At the Bedford",
        "link": "http://evassmat.com/blEW"
    },
    {
        "id_disco": 1818,
        "id": 285,
        "nombre_disco": "2011 - No. 5 Collaborations Project",
        "link": "http://evassmat.com/blEp"
    },
    {
        "id_disco": 1819,
        "id": 285,
        "nombre_disco": "2011 - The a Team (EP)",
        "link": "http://evassmat.com/blF8"
    },
    {
        "id_disco": 1820,
        "id": 285,
        "nombre_disco": "2011 - You Need Me (EP)",
        "link": "http://evassmat.com/blFP"
    },
    {
        "id_disco": 1821,
        "id": 285,
        "nombre_disco": "2011-2014 - Singles Collection",
        "link": "http://evassmat.com/blFb"
    },
    {
        "id_disco": 1822,
        "id": 285,
        "nombre_disco": "2012 - Drunk (Remixes) (EP)",
        "link": "http://evassmat.com/blG2"
    },
    {
        "id_disco": 1823,
        "id": 285,
        "nombre_disco": "2012 - The Slumdon Bridge (EP)",
        "link": "http://evassmat.com/blGn"
    },
    {
        "id_disco": 1824,
        "id": 285,
        "nombre_disco": "2014 - Sing",
        "link": "http://evassmat.com/blH5"
    },
    {
        "id_disco": 1825,
        "id": 285,
        "nombre_disco": "2014 - X (Deluxe Edition)",
        "link": "http://evassmat.com/blHM"
    },
    {
        "id_disco": 1826,
        "id": 285,
        "nombre_disco": "2017 - ÷",
        "link": "http://evassmat.com/blHg"
    },
    {
        "id_disco": 1827,
        "id": 286,
        "nombre_disco": "2017 - Ready",
        "link": "http://evassmat.com/blIF"
    },
    {
        "id_disco": 1828,
        "id": 287,
        "nombre_disco": "2015 - My House",
        "link": "http://evassmat.com/blJO"
    },
    {
        "id_disco": 1829,
        "id": 288,
        "nombre_disco": "2014 - Young Thugga Mane La Flare",
        "link": "http://evassmat.com/blKQ"
    },
    {
        "id_disco": 1830,
        "id": 289,
        "nombre_disco": "2019 - Drip or Drown 2",
        "link": "http://evassmat.com/blLH"
    },
    {
        "id_disco": 1831,
        "id": 290,
        "nombre_disco": "2014 - Room 93",
        "link": "http://evassmat.com/blMD"
    },
    {
        "id_disco": 1832,
        "id": 290,
        "nombre_disco": "2015 - BADLANDS (Deluxe Edition)",
        "link": "http://evassmat.com/blMP"
    },
    {
        "id_disco": 1833,
        "id": 290,
        "nombre_disco": "2015 - Room 93 (The Remixes)",
        "link": "http://evassmat.com/blNM"
    },
    {
        "id_disco": 1834,
        "id": 290,
        "nombre_disco": "2016 - Complementary Colors (EP)",
        "link": "http://evassmat.com/blNe"
    },
    {
        "id_disco": 1835,
        "id": 290,
        "nombre_disco": "2017 - Eyes Closed",
        "link": "http://evassmat.com/blNv"
    },
    {
        "id_disco": 1836,
        "id": 290,
        "nombre_disco": "2017 - hopeless fountain kingdom (Deluxe)",
        "link": "http://evassmat.com/blOK"
    },
    {
        "id_disco": 1837,
        "id": 290,
        "nombre_disco": "2017 - Now or Never",
        "link": "http://evassmat.com/blPB"
    },
    {
        "id_disco": 1838,
        "id": 290,
        "nombre_disco": "2018 - Essentials",
        "link": "http://evassmat.com/blPo"
    },
    {
        "id_disco": 1839,
        "id": 290,
        "nombre_disco": "2020 - Manic",
        "link": "http://greponozy.com/13EV"
    },
    {
        "id_disco": 1840,
        "id": 290,
        "nombre_disco": "Singles",
        "link": "http://pladollmo.com/4XLB"
    },
    {
        "id_disco": 1841,
        "id": 291,
        "nombre_disco": "2017 - 508-507-2209",
        "link": "http://evassmat.com/blRS"
    },
    {
        "id_disco": 1842,
        "id": 292,
        "nombre_disco": "2019 - Divinely Uninspired to a Hellish Extent",
        "link": "http://evassmat.com/blTV"
    },
    {
        "id_disco": 1843,
        "id": 293,
        "nombre_disco": "2017 - Luv Is Rage 2",
        "link": "http://evassmat.com/blUE"
    },
    {
        "id_disco": 1844,
        "id": 294,
        "nombre_disco": "2019 - Cuz I Love You (Deluxe Edition)",
        "link": "http://evassmat.com/blUi"
    },
    {
        "id_disco": 1845,
        "id": 295,
        "nombre_disco": "2016 - Bobby Tarantino",
        "link": "http://evassmat.com/blVH"
    },
    {
        "id_disco": 1846,
        "id": 295,
        "nombre_disco": "2017 - Everybody",
        "link": "http://evassmat.com/blVb"
    },
    {
        "id_disco": 1847,
        "id": 295,
        "nombre_disco": "2019 - Confessions of a Dangerous Mind",
        "link": "http://evassmat.com/blVu"
    },
    {
        "id_disco": 1848,
        "id": 296,
        "nombre_disco": "2005 - The Language of My World",
        "link": "http://evassmat.com/blWm"
    },
    {
        "id_disco": 1849,
        "id": 296,
        "nombre_disco": "2009 - The Unplanned Mixtape",
        "link": "http://evassmat.com/blX6"
    },
    {
        "id_disco": 1850,
        "id": 296,
        "nombre_disco": "2009 - The Vs. (EP)",
        "link": "http://evassmat.com/blXB"
    },
    {
        "id_disco": 1851,
        "id": 296,
        "nombre_disco": "2010 - VS. Redux",
        "link": "http://evassmat.com/blXR"
    },
    {
        "id_disco": 1852,
        "id": 296,
        "nombre_disco": "2012 - The Heist",
        "link": "http://evassmat.com/blZj"
    },
    {
        "id_disco": 1853,
        "id": 296,
        "nombre_disco": "2016 - This Unruly Mess Ive Made",
        "link": "http://evassmat.com/bla9"
    },
    {
        "id_disco": 1854,
        "id": 297,
        "nombre_disco": "2019 - Late Night Feelings",
        "link": "http://evassmat.com/blau"
    },
    {
        "id_disco": 1855,
        "id": 298,
        "nombre_disco": "2013 - DC3 (Dreamchasers 3)",
        "link": "http://evassmat.com/blbk"
    },
    {
        "id_disco": 1856,
        "id": 298,
        "nombre_disco": "2015 - Dreams Worth More Than Money (Deluxe Edition)",
        "link": "http://evassmat.com/blcF"
    },
    {
        "id_disco": 1857,
        "id": 298,
        "nombre_disco": "2015 - Maybach Team",
        "link": "http://evassmat.com/blcZ"
    },
    {
        "id_disco": 1858,
        "id": 298,
        "nombre_disco": "2016 - DC4 (Dreamchasers 4)",
        "link": "http://evassmat.com/bldF"
    },
    {
        "id_disco": 1859,
        "id": 298,
        "nombre_disco": "2017 - Wins & Losses",
        "link": "http://evassmat.com/bldZ"
    },
    {
        "id_disco": 1860,
        "id": 299,
        "nombre_disco": "2016 - Michl",
        "link": "http://evassmat.com/ble8"
    },
    {
        "id_disco": 1861,
        "id": 300,
        "nombre_disco": "2015 - Nav Attack",
        "link": "http://evassmat.com/blfO"
    },
    {
        "id_disco": 1862,
        "id": 301,
        "nombre_disco": "2015 - RnB3",
        "link": "http://evassmat.com/bliZ"
    },
    {
        "id_disco": 1863,
        "id": 302,
        "nombre_disco": "2005 - Return in Bloodred",
        "link": "http://evassmat.com/blj2"
    },
    {
        "id_disco": 1864,
        "id": 302,
        "nombre_disco": "2007 - Lupus Dei",
        "link": "http://evassmat.com/bljK"
    },
    {
        "id_disco": 1865,
        "id": 302,
        "nombre_disco": "2009 - Bible of the Beast",
        "link": "http://evassmat.com/bljb"
    },
    {
        "id_disco": 1866,
        "id": 302,
        "nombre_disco": "2011 - Blood of the Saints",
        "link": "http://evassmat.com/bljq"
    },
    {
        "id_disco": 1867,
        "id": 302,
        "nombre_disco": "2012 - Alive in the Night (Live)",
        "link": "http://evassmat.com/blkA"
    },
    {
        "id_disco": 1868,
        "id": 302,
        "nombre_disco": "2012 - Tour EP",
        "link": "http://evassmat.com/blkh"
    },
    {
        "id_disco": 1869,
        "id": 302,
        "nombre_disco": "2013 - Preachers of the Night",
        "link": "http://evassmat.com/bll0"
    },
    {
        "id_disco": 1870,
        "id": 302,
        "nombre_disco": "2013 - The Rockhard Sacrament (EP)",
        "link": "http://evassmat.com/bllZ"
    },
    {
        "id_disco": 1871,
        "id": 302,
        "nombre_disco": "2014 - The History of Heresy I (2004-2008)",
        "link": "http://evassmat.com/blmx"
    },
    {
        "id_disco": 1872,
        "id": 302,
        "nombre_disco": "2014 - The History of Heresy II (2009-2012)",
        "link": "http://evassmat.com/blnA"
    },
    {
        "id_disco": 1873,
        "id": 302,
        "nombre_disco": "2015 - Blessed and Possessed",
        "link": "http://evassmat.com/blnT"
    },
    {
        "id_disco": 1874,
        "id": 302,
        "nombre_disco": "2015 - The Collection",
        "link": "http://evassmat.com/blo6"
    },
    {
        "id_disco": 1875,
        "id": 302,
        "nombre_disco": "2015 - Tour",
        "link": "http://evassmat.com/bloU"
    },
    {
        "id_disco": 1876,
        "id": 302,
        "nombre_disco": "2018 - Demons Are a Girls Best Friend (single)",
        "link": "http://evassmat.com/blqC"
    },
    {
        "id_disco": 1877,
        "id": 302,
        "nombre_disco": "2018 - The Sacrament of Sin (Deluxe Box Set)",
        "link": "http://evassmat.com/blqh"
    },
    {
        "id_disco": 1878,
        "id": 302,
        "nombre_disco": "2019 - Metallum Nostrum",
        "link": "http://evassmat.com/blrA"
    },
    {
        "id_disco": 1879,
        "id": 303,
        "nombre_disco": "2018 - Emerge (EP)",
        "link": "http://evassmat.com/bls6"
    },
    {
        "id_disco": 1880,
        "id": 304,
        "nombre_disco": "2008 - Remember Pepper",
        "link": "http://locinealy.com/2dxy"
    },
    {
        "id_disco": 1881,
        "id": 304,
        "nombre_disco": "2011 - Creatures of an Hour",
        "link": "http://locinealy.com/2dyN"
    },
    {
        "id_disco": 1882,
        "id": 304,
        "nombre_disco": "2013 - Strange Pleasures",
        "link": "http://locinealy.com/2dyu"
    },
    {
        "id_disco": 1883,
        "id": 304,
        "nombre_disco": "2016 - Dead Blue",
        "link": "http://evassmat.com/blsx"
    },
    {
        "id_disco": 1884,
        "id": 304,
        "nombre_disco": "2018 - Slow Air",
        "link": "http://locinealy.com/2dzm"
    },
    {
        "id_disco": 1885,
        "id": 305,
        "nombre_disco": "2016 - Birds in the Trap Sing McKnight",
        "link": "http://evassmat.com/bltR"
    },
    {
        "id_disco": 1886,
        "id": 306,
        "nombre_disco": "2013 - Hotel California",
        "link": "http://evassmat.com/bltr"
    },
    {
        "id_disco": 1887,
        "id": 306,
        "nombre_disco": "2013 - Well Done 4",
        "link": "http://evassmat.com/bluF"
    },
    {
        "id_disco": 1888,
        "id": 306,
        "nombre_disco": "2015 - Fan of a Fan The Album (Deluxe Edition)",
        "link": "http://evassmat.com/blud"
    },
    {
        "id_disco": 1889,
        "id": 306,
        "nombre_disco": "2015 - Fuk Wat They Talkin Bout",
        "link": "http://evassmat.com/bm1N"
    },
    {
        "id_disco": 1890,
        "id": 306,
        "nombre_disco": "2015 - The Gold Album 18th Dynasty",
        "link": "http://evassmat.com/bm1i"
    },
    {
        "id_disco": 1891,
        "id": 306,
        "nombre_disco": "2016 - Rawwest Nigga Alive",
        "link": "http://evassmat.com/bm21"
    },
    {
        "id_disco": 1892,
        "id": 306,
        "nombre_disco": "2017 - Bitch Im The Shit 2",
        "link": "http://evassmat.com/bm2J"
    },
    {
        "id_disco": 1893,
        "id": 306,
        "nombre_disco": "2019 - Legendary",
        "link": "http://evassmat.com/bm2b"
    },
    {
        "id_disco": 1894,
        "id": 307,
        "nombre_disco": "2009 - Bastard",
        "link": "http://locinealy.com/4etT"
    },
    {
        "id_disco": 1895,
        "id": 307,
        "nombre_disco": "2011 - Goblin",
        "link": "http://locinealy.com/4eth"
    },
    {
        "id_disco": 1896,
        "id": 307,
        "nombre_disco": "2013 - Wolf",
        "link": "http://locinealy.com/4etr"
    },
    {
        "id_disco": 1897,
        "id": 307,
        "nombre_disco": "2015 - Cherry Bomb",
        "link": "http://locinealy.com/4eu3"
    },
    {
        "id_disco": 1898,
        "id": 307,
        "nombre_disco": "2017 - Flower Boy",
        "link": "http://locinealy.com/4euK"
    },
    {
        "id_disco": 1899,
        "id": 307,
        "nombre_disco": "2019 - IGOR",
        "link": "http://evassmat.com/bm3L"
    },
    {
        "id_disco": 1900,
        "id": 308,
        "nombre_disco": "2014 - Young Thugga Mane La Flare",
        "link": "http://evassmat.com/bm43"
    },
    {
        "id_disco": 1901,
        "id": 308,
        "nombre_disco": "2015 - Barter 6",
        "link": "http://evassmat.com/bm4R"
    },
    {
        "id_disco": 1902,
        "id": 308,
        "nombre_disco": "2015 - Slime Season 2",
        "link": "http://evassmat.com/bm4s"
    },
    {
        "id_disco": 1903,
        "id": 308,
        "nombre_disco": "2019 - So Much Fun",
        "link": "http://cigorsica.com/o4M"
    },
    {
        "id_disco": 1904,
        "id": 309,
        "nombre_disco": "2017 - No Roots",
        "link": "http://evassmat.com/DjOs"
    },
    {
        "id_disco": 1905,
        "id": 309,
        "nombre_disco": "2019 - MINT",
        "link": "http://evassmat.com/DjPV"
    },
    {
        "id_disco": 1906,
        "id": 310,
        "nombre_disco": "2019 - The Ghost of Ohio",
        "link": "http://evassmat.com/DjSK"
    },
    {
        "id_disco": 1907,
        "id": 311,
        "nombre_disco": "2016 - Alles Nix Konkretes",
        "link": "http://evassmat.com/DjcV"
    },
    {
        "id_disco": 1908,
        "id": 312,
        "nombre_disco": "2017 - Cigarettes After Sex",
        "link": "http://evassmat.com/DjeL"
    },
    {
        "id_disco": 1909,
        "id": 313,
        "nombre_disco": "1975 - For The Whole World To See",
        "link": "http://evassmat.com/DjhB"
    },
    {
        "id_disco": 1910,
        "id": 313,
        "nombre_disco": "1991 - Human",
        "link": "http://evassmat.com/Djhe"
    },
    {
        "id_disco": 1911,
        "id": 313,
        "nombre_disco": "1992 - Live Human Tour",
        "link": "http://evassmat.com/DjiA"
    },
    {
        "id_disco": 1912,
        "id": 313,
        "nombre_disco": "2015 - N.O.W",
        "link": "http://evassmat.com/Djja"
    },
    {
        "id_disco": 1913,
        "id": 314,
        "nombre_disco": "2000 - The Sickness (Special Edition)",
        "link": "http://evassmat.com/Djn9"
    },
    {
        "id_disco": 1914,
        "id": 314,
        "nombre_disco": "2002 - Believe (Limited Edition)",
        "link": "http://evassmat.com/Djns"
    },
    {
        "id_disco": 1915,
        "id": 314,
        "nombre_disco": "2005 - Ten Thousand Fists (Tour Edition)",
        "link": "http://evassmat.com/DjoQ"
    },
    {
        "id_disco": 1916,
        "id": 314,
        "nombre_disco": "2008 - Indestructible (Limited Edition)",
        "link": "http://evassmat.com/Djoo"
    },
    {
        "id_disco": 1917,
        "id": 314,
        "nombre_disco": "2008 - Live & Indestructible (EP)",
        "link": "http://evassmat.com/DjpD"
    },
    {
        "id_disco": 1918,
        "id": 314,
        "nombre_disco": "2010 - Asylum (Deluxe Edition)",
        "link": "http://evassmat.com/Djpv"
    },
    {
        "id_disco": 1919,
        "id": 314,
        "nombre_disco": "2011 - The Lost Children",
        "link": "http://evassmat.com/DjqU"
    },
    {
        "id_disco": 1920,
        "id": 314,
        "nombre_disco": "2015 - Immortalized",
        "link": "http://evassmat.com/Djr1"
    },
    {
        "id_disco": 1921,
        "id": 315,
        "nombre_disco": "2016 - Ullages",
        "link": "http://evassmat.com/DjsZ"
    },
    {
        "id_disco": 1922,
        "id": 316,
        "nombre_disco": "2002 - Evening Out With Your Girlfriend",
        "link": "http://evassmat.com/Djtl"
    },
    {
        "id_disco": 1923,
        "id": 316,
        "nombre_disco": "2002 - With Project Rocket (EP)",
        "link": "http://evassmat.com/DjuL"
    },
    {
        "id_disco": 1924,
        "id": 316,
        "nombre_disco": "2003 - Take This to Your Grave",
        "link": "http://evassmat.com/Djut"
    },
    {
        "id_disco": 1925,
        "id": 316,
        "nombre_disco": "2004 - My Heart Will Always Be the B-Side to My Tongue (EP)",
        "link": "http://evassmat.com/Djvj"
    },
    {
        "id_disco": 1926,
        "id": 316,
        "nombre_disco": "2005 - From Under the Cork Tree",
        "link": "http://evassmat.com/Djx9"
    },
    {
        "id_disco": 1927,
        "id": 316,
        "nombre_disco": "2007 - Infinity on High (Deluxe Edition)",
        "link": "http://evassmat.com/DjxY"
    },
    {
        "id_disco": 1928,
        "id": 316,
        "nombre_disco": "2007 - Leaked In London (EP)",
        "link": "http://evassmat.com/DjyH"
    },
    {
        "id_disco": 1929,
        "id": 316,
        "nombre_disco": "2008 - Folie à Deux",
        "link": "http://evassmat.com/Djyj"
    },
    {
        "id_disco": 1930,
        "id": 316,
        "nombre_disco": "2008 - Live in Phoenix",
        "link": "http://evassmat.com/Djza"
    },
    {
        "id_disco": 1931,
        "id": 316,
        "nombre_disco": "2013 - Save Rock and Roll",
        "link": "http://evassmat.com/Dk09"
    },
    {
        "id_disco": 1932,
        "id": 316,
        "nombre_disco": "2015 - American Beauty - American Psycho",
        "link": "http://evassmat.com/Dk0Z"
    },
    {
        "id_disco": 1933,
        "id": 316,
        "nombre_disco": "2015 - Back To Earth (Remixes)",
        "link": "http://evassmat.com/Dk0u"
    },
    {
        "id_disco": 1934,
        "id": 316,
        "nombre_disco": "2018 - M A N I A",
        "link": "http://evassmat.com/Dk22"
    },
    {
        "id_disco": 1935,
        "id": 317,
        "nombre_disco": "2014 - Zaba",
        "link": "http://evassmat.com/Dk47"
    },
    {
        "id_disco": 1936,
        "id": 317,
        "nombre_disco": "2016 - How to be a Human Being",
        "link": "http://evassmat.com/Dk6v"
    },
    {
        "id_disco": 1937,
        "id": 318,
        "nombre_disco": "1998 - Godsmack",
        "link": "http://evassmat.com/Dk8Z"
    },
    {
        "id_disco": 1938,
        "id": 318,
        "nombre_disco": "2000 - Awake",
        "link": "http://evassmat.com/Dk94"
    },
    {
        "id_disco": 1939,
        "id": 318,
        "nombre_disco": "2003 - Faceless",
        "link": "http://evassmat.com/DkA5"
    },
    {
        "id_disco": 1940,
        "id": 318,
        "nombre_disco": "2004 - The Other Side (EP)",
        "link": "http://evassmat.com/DkAd"
    },
    {
        "id_disco": 1941,
        "id": 318,
        "nombre_disco": "2006 - IV",
        "link": "http://evassmat.com/DkBA"
    },
    {
        "id_disco": 1942,
        "id": 318,
        "nombre_disco": "2007 - Good Times  Bad Times",
        "link": "http://evassmat.com/DkBZ"
    },
    {
        "id_disco": 1943,
        "id": 318,
        "nombre_disco": "2010 - The Oracle",
        "link": "http://evassmat.com/DkCK"
    },
    {
        "id_disco": 1944,
        "id": 318,
        "nombre_disco": "2012 - Live & Inspired",
        "link": "http://evassmat.com/DkCj"
    },
    {
        "id_disco": 1945,
        "id": 318,
        "nombre_disco": "2014 - 1000hp",
        "link": "http://evassmat.com/DkDC"
    },
    {
        "id_disco": 1946,
        "id": 319,
        "nombre_disco": "1994 - Closet Cultivation (Demo)",
        "link": "http://evassmat.com/DkEI"
    },
    {
        "id_disco": 1947,
        "id": 319,
        "nombre_disco": "1995 - Fungus Amongus",
        "link": "http://evassmat.com/DkEx"
    },
    {
        "id_disco": 1948,
        "id": 319,
        "nombre_disco": "1996 - Enjoy Incubus (EP)",
        "link": "http://evassmat.com/DkFY"
    },
    {
        "id_disco": 1949,
        "id": 319,
        "nombre_disco": "1997 - S.C.I.E.N.C.E",
        "link": "http://evassmat.com/DkG6"
    },
    {
        "id_disco": 1950,
        "id": 319,
        "nombre_disco": "1999 - Make Yourself",
        "link": "http://evassmat.com/DkHR"
    },
    {
        "id_disco": 1951,
        "id": 319,
        "nombre_disco": "2000 - When Incubus Attacks  Vol 1 (EP)",
        "link": "http://evassmat.com/DkIC"
    },
    {
        "id_disco": 1952,
        "id": 319,
        "nombre_disco": "2001 - Morning View",
        "link": "http://evassmat.com/DkIo"
    },
    {
        "id_disco": 1953,
        "id": 319,
        "nombre_disco": "2001 - Unplugged",
        "link": "http://evassmat.com/DkJS"
    },
    {
        "id_disco": 1954,
        "id": 319,
        "nombre_disco": "2001 - When Incubus Attacks  Vol 2",
        "link": "http://evassmat.com/DkJw"
    },
    {
        "id_disco": 1955,
        "id": 319,
        "nombre_disco": "2002 - Smokin The Herb",
        "link": "http://evassmat.com/DkKY"
    },
    {
        "id_disco": 1956,
        "id": 319,
        "nombre_disco": "2002 - The String Quartet Tribute To Incubus (Vol. 1)",
        "link": "http://evassmat.com/DkLD"
    },
    {
        "id_disco": 1957,
        "id": 319,
        "nombre_disco": "2004 - A Crow Left Of The Murder",
        "link": "http://evassmat.com/DkMJ"
    },
    {
        "id_disco": 1958,
        "id": 319,
        "nombre_disco": "2004 - Follow (Japanese EP)",
        "link": "http://evassmat.com/DkNM"
    },
    {
        "id_disco": 1959,
        "id": 319,
        "nombre_disco": "2004 - Live (Promo)",
        "link": "http://evassmat.com/DkNu"
    },
    {
        "id_disco": 1960,
        "id": 319,
        "nombre_disco": "2004 - New Skin - The String Quartet Tribute To Incubus (Vol. 2)",
        "link": "http://evassmat.com/DkOX"
    },
    {
        "id_disco": 1961,
        "id": 319,
        "nombre_disco": "2006 - Dub Tribute To Incubus",
        "link": "http://evassmat.com/DkOu"
    },
    {
        "id_disco": 1962,
        "id": 319,
        "nombre_disco": "2006 - Light Grenades (Japanese Release)",
        "link": "http://evassmat.com/DkQI"
    },
    {
        "id_disco": 1963,
        "id": 319,
        "nombre_disco": "2007 - Look Alive",
        "link": "http://evassmat.com/DkR6"
    },
    {
        "id_disco": 1964,
        "id": 319,
        "nombre_disco": "2009 - Monuments And Melodies",
        "link": "http://evassmat.com/DkRi"
    },
    {
        "id_disco": 1965,
        "id": 319,
        "nombre_disco": "2011 - If Not Now  When (Japanese Edition)",
        "link": "http://evassmat.com/DkSO"
    },
    {
        "id_disco": 1966,
        "id": 319,
        "nombre_disco": "2015 - Trust Fall Side A (EP)",
        "link": "http://evassmat.com/DkTC"
    },
    {
        "id_disco": 1967,
        "id": 319,
        "nombre_disco": "2017 - 8",
        "link": "http://evassmat.com/DkU5"
    },
    {
        "id_disco": 1968,
        "id": 320,
        "nombre_disco": "2015 - How Do You Feel Now",
        "link": "http://evassmat.com/DkVr"
    },
    {
        "id_disco": 1969,
        "id": 321,
        "nombre_disco": "2013 - Pure Heroine",
        "link": "http://evassmat.com/DkYJ"
    },
    {
        "id_disco": 1970,
        "id": 321,
        "nombre_disco": "2013 - The Love Club (EP)",
        "link": "http://evassmat.com/DkZH"
    },
    {
        "id_disco": 1971,
        "id": 321,
        "nombre_disco": "2017 - Melodrama",
        "link": "http://evassmat.com/DkaF"
    },
    {
        "id_disco": 1972,
        "id": 322,
        "nombre_disco": "2004 - Sin Noticias de Holanda",
        "link": "http://evassmat.com/DkcR"
    },
    {
        "id_disco": 1973,
        "id": 322,
        "nombre_disco": "2015 - Directo a Septiembre",
        "link": "http://evassmat.com/DkdJ"
    },
    {
        "id_disco": 1974,
        "id": 322,
        "nombre_disco": "2016 - Quitate las Gafas",
        "link": "http://evassmat.com/DkeF"
    },
    {
        "id_disco": 1975,
        "id": 323,
        "nombre_disco": "2007 - The Whorror",
        "link": "http://evassmat.com/DkhV"
    },
    {
        "id_disco": 1976,
        "id": 323,
        "nombre_disco": "2009 - When Love Met Destruction",
        "link": "http://evassmat.com/Dki8"
    },
    {
        "id_disco": 1977,
        "id": 323,
        "nombre_disco": "2012 - Creatures (Deluxe Edition)",
        "link": "http://evassmat.com/Dkig"
    },
    {
        "id_disco": 1978,
        "id": 323,
        "nombre_disco": "2012 - Infamous",
        "link": "http://evassmat.com/DkjN"
    },
    {
        "id_disco": 1979,
        "id": 323,
        "nombre_disco": "2014 - Reincarnate (Deluxe Edition)",
        "link": "http://evassmat.com/Dkjz"
    },
    {
        "id_disco": 1980,
        "id": 323,
        "nombre_disco": "2017 - Graveyard Shift",
        "link": "http://evassmat.com/DklE"
    },
    {
        "id_disco": 1981,
        "id": 324,
        "nombre_disco": "2015 - Paradise Is There",
        "link": "http://evassmat.com/DknH"
    },
    {
        "id_disco": 1982,
        "id": 324,
        "nombre_disco": "2017 - Butterfly",
        "link": "http://evassmat.com/Dkny"
    },
    {
        "id_disco": 1983,
        "id": 325,
        "nombre_disco": "2012 - Keep Your Eyes Open",
        "link": "http://evassmat.com/Dl7K"
    },
    {
        "id_disco": 1984,
        "id": 325,
        "nombre_disco": "2014 - Rivers In the Wasteland",
        "link": "http://evassmat.com/Dl7q"
    },
    {
        "id_disco": 1985,
        "id": 325,
        "nombre_disco": "2016 - H A R D L O V E",
        "link": "http://evassmat.com/Dl8L"
    },
    {
        "id_disco": 1986,
        "id": 326,
        "nombre_disco": "1988 - The Best of OMD",
        "link": "http://evassmat.com/DlBK"
    },
    {
        "id_disco": 1987,
        "id": 326,
        "nombre_disco": "1991 - Call My Name",
        "link": "http://evassmat.com/DlBk"
    },
    {
        "id_disco": 1988,
        "id": 326,
        "nombre_disco": "1991 - Pandoras Box",
        "link": "http://evassmat.com/DlCE"
    },
    {
        "id_disco": 1989,
        "id": 326,
        "nombre_disco": "1991 - Sailing On The Seven Seas",
        "link": "http://evassmat.com/DlDY"
    },
    {
        "id_disco": 1990,
        "id": 326,
        "nombre_disco": "1991 - Sugar Tax",
        "link": "http://evassmat.com/DlE4"
    },
    {
        "id_disco": 1991,
        "id": 326,
        "nombre_disco": "1991 - Then You Turn Away",
        "link": "http://evassmat.com/DlEe"
    },
    {
        "id_disco": 1992,
        "id": 326,
        "nombre_disco": "1993 - Dream Of Me",
        "link": "http://evassmat.com/DlFD"
    },
    {
        "id_disco": 1993,
        "id": 326,
        "nombre_disco": "1993 - Liberator",
        "link": "http://evassmat.com/DlFh"
    },
    {
        "id_disco": 1994,
        "id": 326,
        "nombre_disco": "1993 - Stand Above Me",
        "link": "http://evassmat.com/DlGW"
    },
    {
        "id_disco": 1995,
        "id": 326,
        "nombre_disco": "1996 - OMD (The Collection)",
        "link": "http://evassmat.com/DlH6"
    },
    {
        "id_disco": 1996,
        "id": 326,
        "nombre_disco": "1996 - Universal",
        "link": "http://evassmat.com/DlIj"
    },
    {
        "id_disco": 1997,
        "id": 326,
        "nombre_disco": "1998 - The OMD Singles",
        "link": "http://evassmat.com/DlJP"
    },
    {
        "id_disco": 1998,
        "id": 326,
        "nombre_disco": "2011 - Live in Berlin",
        "link": "http://evassmat.com/DlJv"
    },
    {
        "id_disco": 1999,
        "id": 326,
        "nombre_disco": "2013 - English Electric (Japan Edition)",
        "link": "http://evassmat.com/DlKh"
    },
    {
        "id_disco": 2000,
        "id": 326,
        "nombre_disco": "2013 - Night Cafe (EP)",
        "link": "http://evassmat.com/DlLF"
    },
    {
        "id_disco": 2001,
        "id": 326,
        "nombre_disco": "2017 - The Punishment of Luxury",
        "link": "http://evassmat.com/DlLh"
    },
    {
        "id_disco": 2002,
        "id": 327,
        "nombre_disco": "1994 - Potatoes For Christmas (EP)",
        "link": "http://evassmat.com/DnNh"
    },
    {
        "id_disco": 2003,
        "id": 327,
        "nombre_disco": "1997 - Old Friends From Young Years",
        "link": "http://evassmat.com/DnOM"
    },
    {
        "id_disco": 2004,
        "id": 327,
        "nombre_disco": "1998 - 5 Tracks Deep (EP)",
        "link": "http://evassmat.com/DnOv"
    },
    {
        "id_disco": 2005,
        "id": 327,
        "nombre_disco": "1999 - Let Em Know! (EP)",
        "link": "http://evassmat.com/DnPO"
    },
    {
        "id_disco": 2006,
        "id": 327,
        "nombre_disco": "2000 - Infest",
        "link": "http://evassmat.com/DnQD"
    },
    {
        "id_disco": 2007,
        "id": 327,
        "nombre_disco": "2002 - Lovehatetragedy",
        "link": "http://evassmat.com/DnRe"
    },
    {
        "id_disco": 2008,
        "id": 327,
        "nombre_disco": "2004 - Getting Away With Murder",
        "link": "http://evassmat.com/DnT5"
    },
    {
        "id_disco": 2009,
        "id": 327,
        "nombre_disco": "2006 - The Paramour Sessions",
        "link": "http://evassmat.com/DnTl"
    },
    {
        "id_disco": 2010,
        "id": 327,
        "nombre_disco": "2009 - Metamorphosis",
        "link": "http://evassmat.com/DnUL"
    },
    {
        "id_disco": 2011,
        "id": 327,
        "nombre_disco": "2010 - Time For Annihilation (On The Record & On The Road)",
        "link": "http://evassmat.com/DnV3"
    },
    {
        "id_disco": 2012,
        "id": 327,
        "nombre_disco": "2010 - To Be Loved - The Best Of Papa Roach",
        "link": "http://evassmat.com/DnWg"
    },
    {
        "id_disco": 2013,
        "id": 327,
        "nombre_disco": "2012 - The Connection (Deluxe Edition)",
        "link": "http://evassmat.com/DnX8"
    },
    {
        "id_disco": 2014,
        "id": 327,
        "nombre_disco": "2015 - F.E.A.R",
        "link": "http://evassmat.com/DnXh"
    },
    {
        "id_disco": 2015,
        "id": 327,
        "nombre_disco": "2017 - Crooked Teeth (Deluxe Edition)",
        "link": "http://evassmat.com/DnYK"
    },
    {
        "id_disco": 2016,
        "id": 328,
        "nombre_disco": "2005 - All We Know Is Falling",
        "link": "http://evassmat.com/DnZi"
    },
    {
        "id_disco": 2017,
        "id": 328,
        "nombre_disco": "2005-2010 - Singles Pack",
        "link": "http://evassmat.com/DnaH"
    },
    {
        "id_disco": 2018,
        "id": 328,
        "nombre_disco": "2006 - The Summer Tic (EP)",
        "link": "http://evassmat.com/Dnan"
    },
    {
        "id_disco": 2019,
        "id": 328,
        "nombre_disco": "2007 - Riot",
        "link": "http://evassmat.com/DnbO"
    },
    {
        "id_disco": 2020,
        "id": 328,
        "nombre_disco": "2008 - Live In The UK",
        "link": "http://evassmat.com/Dnbm"
    },
    {
        "id_disco": 2021,
        "id": 328,
        "nombre_disco": "2008 - The Final Riot",
        "link": "http://evassmat.com/DncS"
    },
    {
        "id_disco": 2022,
        "id": 328,
        "nombre_disco": "2009 - Brand New Eyes",
        "link": "http://evassmat.com/Dncr"
    },
    {
        "id_disco": 2023,
        "id": 328,
        "nombre_disco": "2010 - Summer Tour (EP)",
        "link": "http://evassmat.com/DndR"
    },
    {
        "id_disco": 2024,
        "id": 328,
        "nombre_disco": "2011 - Singles Club",
        "link": "http://evassmat.com/Dne2"
    },
    {
        "id_disco": 2025,
        "id": 328,
        "nombre_disco": "2013 - Paramore",
        "link": "http://evassmat.com/Dned"
    },
    {
        "id_disco": 2026,
        "id": 328,
        "nombre_disco": "2017 - After Laughter",
        "link": "http://evassmat.com/Dnf6"
    },
    {
        "id_disco": 2027,
        "id": 328,
        "nombre_disco": "Bonus Albums",
        "link": "http://evassmat.com/Dnfh"
    },
    {
        "id_disco": 2028,
        "id": 329,
        "nombre_disco": "1992 - Demo Tape",
        "link": "http://evassmat.com/DniW"
    },
    {
        "id_disco": 2029,
        "id": 329,
        "nombre_disco": "1994 - Snuff the Punk",
        "link": "http://evassmat.com/Dnix"
    },
    {
        "id_disco": 2030,
        "id": 329,
        "nombre_disco": "1996 - Brown",
        "link": "http://evassmat.com/DnjO"
    },
    {
        "id_disco": 2031,
        "id": 329,
        "nombre_disco": "1997 - Live at Tomfest",
        "link": "http://evassmat.com/Dnjx"
    },
    {
        "id_disco": 2032,
        "id": 329,
        "nombre_disco": "1999 - The Fundamental Elements of Southtown",
        "link": "http://evassmat.com/DnkV"
    },
    {
        "id_disco": 2033,
        "id": 329,
        "nombre_disco": "1999 - The Warriors (EP)",
        "link": "http://evassmat.com/DnlB"
    },
    {
        "id_disco": 2034,
        "id": 329,
        "nombre_disco": "2001 - Satellite (Deluxe Edition)",
        "link": "http://evassmat.com/Dnll"
    },
    {
        "id_disco": 2035,
        "id": 329,
        "nombre_disco": "2001-2008 - Singles + Bonus",
        "link": "http://evassmat.com/DnmJ"
    },
    {
        "id_disco": 2036,
        "id": 329,
        "nombre_disco": "2003 - Payable on Death",
        "link": "http://evassmat.com/Dnmt"
    },
    {
        "id_disco": 2037,
        "id": 329,
        "nombre_disco": "2005 - The Warriors (EP) Vol. 2",
        "link": "http://evassmat.com/Dnnb"
    },
    {
        "id_disco": 2038,
        "id": 329,
        "nombre_disco": "2006 - Greatest Hits The Atlantic Years",
        "link": "http://evassmat.com/DnoH"
    },
    {
        "id_disco": 2039,
        "id": 329,
        "nombre_disco": "2006 - Testify",
        "link": "http://evassmat.com/Dnp3"
    },
    {
        "id_disco": 2040,
        "id": 329,
        "nombre_disco": "2008 - When Angels & Serpents Dance",
        "link": "http://evassmat.com/DnpY"
    },
    {
        "id_disco": 2041,
        "id": 329,
        "nombre_disco": "2012 - Murdered Love",
        "link": "http://evassmat.com/Dnqd"
    },
    {
        "id_disco": 2042,
        "id": 329,
        "nombre_disco": "2014 - SoCal Sessions",
        "link": "http://evassmat.com/Dnr8"
    },
    {
        "id_disco": 2043,
        "id": 329,
        "nombre_disco": "2015 - The Awakening",
        "link": "http://evassmat.com/Dnrg"
    },
    {
        "id_disco": 2044,
        "id": 330,
        "nombre_disco": "2000 - Transistor Revolt (Demo EP)",
        "link": "http://evassmat.com/Dnu5"
    },
    {
        "id_disco": 2045,
        "id": 330,
        "nombre_disco": "2001 - The Unraveling",
        "link": "http://evassmat.com/DnuY"
    },
    {
        "id_disco": 2046,
        "id": 330,
        "nombre_disco": "2003 - Revolutions Per Minute",
        "link": "http://evassmat.com/Dnv9"
    },
    {
        "id_disco": 2047,
        "id": 330,
        "nombre_disco": "2004 - Siren Song Of The Counter Culture",
        "link": "http://evassmat.com/Dnvx"
    },
    {
        "id_disco": 2048,
        "id": 330,
        "nombre_disco": "2007 - The Sufferer And The Witness",
        "link": "http://evassmat.com/Dnwu"
    },
    {
        "id_disco": 2049,
        "id": 330,
        "nombre_disco": "2007 - This is Noise (EP)",
        "link": "http://evassmat.com/DnxN"
    },
    {
        "id_disco": 2050,
        "id": 330,
        "nombre_disco": "2008 - Appeal To Reason",
        "link": "http://evassmat.com/DnyC"
    },
    {
        "id_disco": 2051,
        "id": 330,
        "nombre_disco": "2011 - End Game",
        "link": "http://evassmat.com/Dnyw"
    },
    {
        "id_disco": 2052,
        "id": 330,
        "nombre_disco": "2013 - Long Forgotten Songs - B-sides & Covers 2000-2013",
        "link": "http://evassmat.com/Dnza"
    },
    {
        "id_disco": 2053,
        "id": 330,
        "nombre_disco": "2014 - The Black Market",
        "link": "http://evassmat.com/Do0K"
    },
    {
        "id_disco": 2054,
        "id": 331,
        "nombre_disco": "2017 - Theres Really A Wolf",
        "link": "http://evassmat.com/Do1p"
    },
    {
        "id_disco": 2055,
        "id": 332,
        "nombre_disco": "2000 - Stage One",
        "link": "http://evassmat.com/Do4s"
    },
    {
        "id_disco": 2056,
        "id": 332,
        "nombre_disco": "2002 - Dutty Rock",
        "link": "http://evassmat.com/Do5H"
    },
    {
        "id_disco": 2057,
        "id": 332,
        "nombre_disco": "2006 - The Trinity (Limited edition)",
        "link": "http://evassmat.com/Do5s"
    },
    {
        "id_disco": 2058,
        "id": 332,
        "nombre_disco": "2009 - Imperial Blaze",
        "link": "http://evassmat.com/Do6T"
    },
    {
        "id_disco": 2059,
        "id": 332,
        "nombre_disco": "2012 - Tomahawk Technique",
        "link": "http://evassmat.com/Do7I"
    },
    {
        "id_disco": 2060,
        "id": 332,
        "nombre_disco": "2013 - Full Frequency",
        "link": "http://evassmat.com/Do7u"
    },
    {
        "id_disco": 2061,
        "id": 333,
        "nombre_disco": "2015 - Black Suicide Side C The Seventh Seal",
        "link": "http://evassmat.com/DoDQ"
    },
    {
        "id_disco": 2062,
        "id": 333,
        "nombre_disco": "2018 - I Want To Die In New Orleans",
        "link": "http://evassmat.com/DoDo"
    },
    {
        "id_disco": 2063,
        "id": 334,
        "nombre_disco": "2016 - Notion (EP)",
        "link": "http://evassmat.com/DoEg"
    },
    {
        "id_disco": 2064,
        "id": 334,
        "nombre_disco": "2018 - Flow State",
        "link": "http://evassmat.com/DoFC"
    },
    {
        "id_disco": 2065,
        "id": 335,
        "nombre_disco": "1993 - Everybody Else Is Doing It  So Why Cant We",
        "link": "http://evassmat.com/DoGO"
    },
    {
        "id_disco": 2066,
        "id": 335,
        "nombre_disco": "1994 - No Need To Arque",
        "link": "http://evassmat.com/DoGo"
    },
    {
        "id_disco": 2067,
        "id": 335,
        "nombre_disco": "1996 - To the Faithful Departed",
        "link": "http://evassmat.com/DoHQ"
    },
    {
        "id_disco": 2068,
        "id": 335,
        "nombre_disco": "1999 - Bury The Hatchet",
        "link": "http://evassmat.com/DoII"
    },
    {
        "id_disco": 2069,
        "id": 335,
        "nombre_disco": "2001 - Wake Up And Smell The Coffee",
        "link": "http://evassmat.com/DoIp"
    },
    {
        "id_disco": 2070,
        "id": 335,
        "nombre_disco": "2012 - Roses",
        "link": "http://evassmat.com/DoKE"
    },
    {
        "id_disco": 2071,
        "id": 336,
        "nombre_disco": "1989 - The Offspring",
        "link": "http://evassmat.com/DoLc"
    },
    {
        "id_disco": 2072,
        "id": 336,
        "nombre_disco": "1992 - Ignition",
        "link": "http://evassmat.com/DoLy"
    },
    {
        "id_disco": 2073,
        "id": 336,
        "nombre_disco": "1994 - Smash",
        "link": "http://evassmat.com/DoMi"
    },
    {
        "id_disco": 2074,
        "id": 336,
        "nombre_disco": "1997 - Ixnay on the Hombre",
        "link": "http://evassmat.com/DoNF"
    },
    {
        "id_disco": 2075,
        "id": 336,
        "nombre_disco": "1998 - Americana",
        "link": "http://evassmat.com/DoNo"
    },
    {
        "id_disco": 2076,
        "id": 336,
        "nombre_disco": "2000 - Conspiracy Of One (Limited Edition)",
        "link": "http://evassmat.com/DoOM"
    },
    {
        "id_disco": 2077,
        "id": 336,
        "nombre_disco": "2003 - Splinter",
        "link": "http://evassmat.com/DoQO"
    },
    {
        "id_disco": 2078,
        "id": 336,
        "nombre_disco": "2005 - Greatest Hits",
        "link": "http://evassmat.com/DoSA"
    },
    {
        "id_disco": 2079,
        "id": 336,
        "nombre_disco": "2008 - Rise And Fall  Rage And Grace",
        "link": "http://evassmat.com/DoTW"
    },
    {
        "id_disco": 2080,
        "id": 336,
        "nombre_disco": "2012 - Days Go By",
        "link": "http://evassmat.com/DoUM"
    },
    {
        "id_disco": 2081,
        "id": 337,
        "nombre_disco": "2012 - Come of Age",
        "link": "http://evassmat.com/DoYX"
    },
    {
        "id_disco": 2082,
        "id": 338,
        "nombre_disco": "2004 - Contraband",
        "link": "http://evassmat.com/Doa3"
    },
    {
        "id_disco": 2083,
        "id": 338,
        "nombre_disco": "2007 - Libertad",
        "link": "http://evassmat.com/Doae"
    },
    {
        "id_disco": 2084,
        "id": 338,
        "nombre_disco": "2007 - Melody and Tyranny (EP)",
        "link": "http://evassmat.com/DobF"
    },
    {
        "id_disco": 2085,
        "id": 339,
        "nombre_disco": "2005 - And Their Name Was Treason",
        "link": "http://evassmat.com/9Atz"
    },
    {
        "id_disco": 2086,
        "id": 339,
        "nombre_disco": "2007 - For Those Who Have Heart (Deluxe)",
        "link": "http://evassmat.com/9Auu"
    },
    {
        "id_disco": 2087,
        "id": 339,
        "nombre_disco": "2009 - Homesick",
        "link": "http://evassmat.com/9AvN"
    },
    {
        "id_disco": 2088,
        "id": 339,
        "nombre_disco": "2010 - Attack of the Killer B-Sides",
        "link": "http://evassmat.com/9Aw1"
    },
    {
        "id_disco": 2089,
        "id": 339,
        "nombre_disco": "2010 - What Separates Me from You",
        "link": "http://evassmat.com/9AwI"
    },
    {
        "id_disco": 2090,
        "id": 339,
        "nombre_disco": "2013 - Common Courtesy (Deluxe)",
        "link": "http://evassmat.com/9Awk"
    },
    {
        "id_disco": 2091,
        "id": 339,
        "nombre_disco": "2016 - Bad Vibrations",
        "link": "http://evassmat.com/9AxC"
    },
    {
        "id_disco": 2092,
        "id": 340,
        "nombre_disco": "2008 - 19 (Deluxe Edition)",
        "link": "http://evassmat.com/9Ayd"
    },
    {
        "id_disco": 2093,
        "id": 340,
        "nombre_disco": "2009 - iTunes Live from SoHo",
        "link": "http://evassmat.com/9Az0"
    },
    {
        "id_disco": 2094,
        "id": 340,
        "nombre_disco": "2011 - 21",
        "link": "http://evassmat.com/9Azu"
    },
    {
        "id_disco": 2095,
        "id": 340,
        "nombre_disco": "2011 - Live At The Royal Albert Hall",
        "link": "http://evassmat.com/9B0J"
    },
    {
        "id_disco": 2096,
        "id": 340,
        "nombre_disco": "2011 - Live In London",
        "link": "http://evassmat.com/9B1Z"
    },
    {
        "id_disco": 2097,
        "id": 340,
        "nombre_disco": "2015 - 25 (Holiday Edition)",
        "link": "http://evassmat.com/9B29"
    },
    {
        "id_disco": 2098,
        "id": 341,
        "nombre_disco": "2014 - My Everything (Deluxe)",
        "link": "http://evassmat.com/9B5t"
    },
    {
        "id_disco": 2099,
        "id": 341,
        "nombre_disco": "2014 - Yours Truly",
        "link": "http://evassmat.com/9B7T"
    },
    {
        "id_disco": 2100,
        "id": 341,
        "nombre_disco": "2016 - Dangerous Woman",
        "link": "http://evassmat.com/9B7v"
    },
    {
        "id_disco": 2101,
        "id": 341,
        "nombre_disco": "2018 - Sweetener",
        "link": "http://evassmat.com/9B8D"
    },
    {
        "id_disco": 2102,
        "id": 341,
        "nombre_disco": "2019 - Thank u  Next",
        "link": "http://evassmat.com/9B8Z"
    },
    {
        "id_disco": 2103,
        "id": 341,
        "nombre_disco": "2019 - k bye for now (swt live)",
        "link": "http://pladollmo.com/4WAY"
    },
    {
        "id_disco": 2104,
        "id": 342,
        "nombre_disco": "1993 - Buddha",
        "link": "http://evassmat.com/9B9U"
    },
    {
        "id_disco": 2105,
        "id": 342,
        "nombre_disco": "1993-1998 - Demos & Promos",
        "link": "http://evassmat.com/9BA1"
    },
    {
        "id_disco": 2106,
        "id": 342,
        "nombre_disco": "1994 - Cheshire Cat",
        "link": "http://evassmat.com/9BAX"
    },
    {
        "id_disco": 2107,
        "id": 342,
        "nombre_disco": "1995 - They Came To Conquer... URANUS",
        "link": "http://evassmat.com/9BAs"
    },
    {
        "id_disco": 2108,
        "id": 342,
        "nombre_disco": "1997 - Dude Ranch",
        "link": "http://evassmat.com/9BBJ"
    },
    {
        "id_disco": 2109,
        "id": 342,
        "nombre_disco": "1997-2005 - Singles Pack",
        "link": "http://evassmat.com/9BBl"
    },
    {
        "id_disco": 2110,
        "id": 342,
        "nombre_disco": "1999 - Enema Of The State",
        "link": "http://evassmat.com/9BCF"
    },
    {
        "id_disco": 2111,
        "id": 342,
        "nombre_disco": "2000 - The Mark  Tom  and Travis Show",
        "link": "http://evassmat.com/9BCr"
    },
    {
        "id_disco": 2112,
        "id": 342,
        "nombre_disco": "2001 - Take Off Your Pants And Jacket",
        "link": "http://evassmat.com/9BDY"
    },
    {
        "id_disco": 2113,
        "id": 342,
        "nombre_disco": "2003 - Blink 182",
        "link": "http://evassmat.com/9BDr"
    },
    {
        "id_disco": 2114,
        "id": 342,
        "nombre_disco": "2005 - Greatest Hits",
        "link": "http://evassmat.com/9BED"
    },
    {
        "id_disco": 2115,
        "id": 342,
        "nombre_disco": "2011 - Neighborhoods (Deluxe Edition)",
        "link": "http://evassmat.com/9BEb"
    },
    {
        "id_disco": 2116,
        "id": 342,
        "nombre_disco": "2012 - dogs eating dogs",
        "link": "http://evassmat.com/9BFF"
    },
    {
        "id_disco": 2117,
        "id": 342,
        "nombre_disco": "2016 - California",
        "link": "http://evassmat.com/9BFb"
    },
    {
        "id_disco": 2118,
        "id": 342,
        "nombre_disco": "Otros Discos",
        "link": "http://evassmat.com/9BGF"
    },
    {
        "id_disco": 2119,
        "id": 343,
        "nombre_disco": "2006 - The Dutchess (Deluxe)",
        "link": "http://evassmat.com/9BH0"
    },
    {
        "id_disco": 2120,
        "id": 343,
        "nombre_disco": "2017 - Double Dutchess (Exclusive Edition)",
        "link": "http://evassmat.com/9BHe"
    },
    {
        "id_disco": 2121,
        "id": 344,
        "nombre_disco": "2007 - 2009 - Remixes",
        "link": "http://evassmat.com/9BJH"
    },
    {
        "id_disco": 2122,
        "id": 344,
        "nombre_disco": "2007 - Meet Miley Cyrus",
        "link": "http://evassmat.com/9BJq"
    },
    {
        "id_disco": 2123,
        "id": 344,
        "nombre_disco": "2008 - Best Of Both Worlds Concert",
        "link": "http://evassmat.com/9BL5"
    },
    {
        "id_disco": 2124,
        "id": 344,
        "nombre_disco": "2008 - Breakout",
        "link": "http://evassmat.com/9BLZ"
    },
    {
        "id_disco": 2125,
        "id": 344,
        "nombre_disco": "2009 - The Time Of Our Lives [EP]",
        "link": "http://evassmat.com/9BM1"
    },
    {
        "id_disco": 2126,
        "id": 344,
        "nombre_disco": "2013 - Bangerz (Deluxe Edition)",
        "link": "http://evassmat.com/9BMQ"
    },
    {
        "id_disco": 2127,
        "id": 344,
        "nombre_disco": "2015 - Miley Cyrus And Her Dead Petz",
        "link": "http://evassmat.com/9BMt"
    },
    {
        "id_disco": 2128,
        "id": 344,
        "nombre_disco": "2017 - Younger Now",
        "link": "http://evassmat.com/9BNR"
    },
    {
        "id_disco": 2129,
        "id": 344,
        "nombre_disco": "2019 - SHE IS COMING",
        "link": "http://ellevolaw.com/19QU"
    },
    {
        "id_disco": 2130,
        "id": 345,
        "nombre_disco": "2013 - The 1975 (Deluxe Edition)",
        "link": "http://evassmat.com/9BOF"
    },
    {
        "id_disco": 2131,
        "id": 345,
        "nombre_disco": "2016 - I Like It When You Sleep  for You Are So Beautiful Yet So Unaware of It",
        "link": "http://evassmat.com/9BQ9"
    },
    {
        "id_disco": 2132,
        "id": 345,
        "nombre_disco": "2018 - A Brief Inquiry Into Online Relationships",
        "link": "http://evassmat.com/9BQl"
    },
    {
        "id_disco": 2133,
        "id": 346,
        "nombre_disco": "2013 - Im Ready (EP)",
        "link": "http://evassmat.com/64Rp"
    },
    {
        "id_disco": 2134,
        "id": 346,
        "nombre_disco": "2014 - Infinity (EP)",
        "link": "http://evassmat.com/64SC"
    },
    {
        "id_disco": 2135,
        "id": 346,
        "nombre_disco": "2015 - Living Room",
        "link": "http://evassmat.com/64Sf"
    },
    {
        "id_disco": 2136,
        "id": 346,
        "nombre_disco": "2016 - Weak (Remixes)",
        "link": "http://evassmat.com/64Sw"
    },
    {
        "id_disco": 2137,
        "id": 346,
        "nombre_disco": "2017 - The Click",
        "link": "http://evassmat.com/64Te"
    },
    {
        "id_disco": 2138,
        "id": 347,
        "nombre_disco": "2011 - Strictly Miami",
        "link": "http://evassmat.com/64Xe"
    },
    {
        "id_disco": 2139,
        "id": 347,
        "nombre_disco": "2011 - The Collection (Deluxe Edition)",
        "link": "http://evassmat.com/65fM"
    },
    {
        "id_disco": 2140,
        "id": 347,
        "nombre_disco": "2011 - The Singles",
        "link": "http://evassmat.com/67aZ"
    },
    {
        "id_disco": 2141,
        "id": 347,
        "nombre_disco": "2013 - Hey Brother (Remixes)",
        "link": "http://evassmat.com/67d6"
    },
    {
        "id_disco": 2142,
        "id": 347,
        "nombre_disco": "2013 - True",
        "link": "http://evassmat.com/67bY"
    },
    {
        "id_disco": 2143,
        "id": 347,
        "nombre_disco": "2013 - Wake Me Up (Remixes II)",
        "link": "http://evassmat.com/67e5"
    },
    {
        "id_disco": 2144,
        "id": 347,
        "nombre_disco": "2013 - Wake Me Up (Remixes)",
        "link": "http://evassmat.com/67eO"
    },
    {
        "id_disco": 2145,
        "id": 347,
        "nombre_disco": "2014 - The Days - Nights (EP)",
        "link": "http://evassmat.com/67ek"
    },
    {
        "id_disco": 2146,
        "id": 347,
        "nombre_disco": "2014 - The Nights (Remixes)",
        "link": "http://evassmat.com/67li"
    },
    {
        "id_disco": 2147,
        "id": 347,
        "nombre_disco": "2014 - True - Avicii by Avicii",
        "link": "http://evassmat.com/67m2"
    },
    {
        "id_disco": 2148,
        "id": 347,
        "nombre_disco": "2015 - For A Better Day (Remixes)",
        "link": "http://evassmat.com/67mD"
    },
    {
        "id_disco": 2149,
        "id": 347,
        "nombre_disco": "2015 - Stories",
        "link": "http://evassmat.com/67mX"
    },
    {
        "id_disco": 2150,
        "id": 347,
        "nombre_disco": "2015 - Waiting For Love (Remixes)",
        "link": "http://evassmat.com/67mq"
    },
    {
        "id_disco": 2151,
        "id": 348,
        "nombre_disco": "2008 - Caravan Palace",
        "link": "http://evassmat.com/67qC"
    },
    {
        "id_disco": 2152,
        "id": 348,
        "nombre_disco": "2011 - Clash (EP)",
        "link": "http://evassmat.com/67rH"
    },
    {
        "id_disco": 2153,
        "id": 348,
        "nombre_disco": "2012 - Panic",
        "link": "http://evassmat.com/67rY"
    },
    {
        "id_disco": 2154,
        "id": 348,
        "nombre_disco": "2015 - -!°_°!-",
        "link": "http://evassmat.com/67rt"
    },
    {
        "id_disco": 2155,
        "id": 349,
        "nombre_disco": "2014 - Eject",
        "link": "http://evassmat.com/67so"
    },
    {
        "id_disco": 2156,
        "id": 349,
        "nombre_disco": "2015 - Desserts",
        "link": "http://evassmat.com/67t5"
    },
    {
        "id_disco": 2157,
        "id": 349,
        "nombre_disco": "Remixes Pack",
        "link": "http://evassmat.com/67tm"
    },
    {
        "id_disco": 2158,
        "id": 349,
        "nombre_disco": "Singles Pack",
        "link": "http://evassmat.com/67u1"
    },
    {
        "id_disco": 2159,
        "id": 350,
        "nombre_disco": "2015 - End Credits (EP)",
        "link": "http://evassmat.com/67vB"
    },
    {
        "id_disco": 2160,
        "id": 350,
        "nombre_disco": "2016 - I Think You Think Too Much of Me (EP)",
        "link": "http://evassmat.com/67vp"
    },
    {
        "id_disco": 2161,
        "id": 350,
        "nombre_disco": "2018 - Vertigo (EP)",
        "link": "http://evassmat.com/67wA"
    },
    {
        "id_disco": 2162,
        "id": 351,
        "nombre_disco": "2017 - Black Smoke Rising",
        "link": "http://evassmat.com/67x1"
    },
    {
        "id_disco": 2163,
        "id": 351,
        "nombre_disco": "2017 - From The Fires",
        "link": "http://evassmat.com/67xP"
    },
    {
        "id_disco": 2164,
        "id": 351,
        "nombre_disco": "2018 - Anthem of the Peaceful Army",
        "link": "http://evassmat.com/67xs"
    },
    {
        "id_disco": 2165,
        "id": 352,
        "nombre_disco": "2014 - Risen (EP)",
        "link": "http://evassmat.com/67yl"
    },
    {
        "id_disco": 2166,
        "id": 352,
        "nombre_disco": "2016 - Ashes",
        "link": "http://evassmat.com/67z6"
    },
    {
        "id_disco": 2167,
        "id": 352,
        "nombre_disco": "2016 - Ashes (Remixes)",
        "link": "http://evassmat.com/67zN"
    },
    {
        "id_disco": 2168,
        "id": 352,
        "nombre_disco": "2017 - Awake",
        "link": "http://evassmat.com/67zg"
    },
    {
        "id_disco": 2169,
        "id": 353,
        "nombre_disco": "2004 - Back To Bedlam",
        "link": "http://evassmat.com/6814"
    },
    {
        "id_disco": 2170,
        "id": 353,
        "nombre_disco": "2006 - Chasing Time- The Bedlam Sessions",
        "link": "http://evassmat.com/681T"
    },
    {
        "id_disco": 2171,
        "id": 353,
        "nombre_disco": "2007 - All The Lost Souls (Deluxe Edition)",
        "link": "http://evassmat.com/69Te"
    },
    {
        "id_disco": 2172,
        "id": 353,
        "nombre_disco": "2010 - Some Kind Of Trouble (Deluxe Edition)",
        "link": "http://evassmat.com/682B"
    },
    {
        "id_disco": 2173,
        "id": 353,
        "nombre_disco": "2013 - Moon Landing (Deluxe Edition)",
        "link": "http://evassmat.com/682i"
    },
    {
        "id_disco": 2174,
        "id": 354,
        "nombre_disco": "2006 - It’s About Time",
        "link": "http://evassmat.com/684g"
    },
    {
        "id_disco": 2175,
        "id": 354,
        "nombre_disco": "2007 - Jonas Brothers",
        "link": "http://evassmat.com/684v"
    },
    {
        "id_disco": 2176,
        "id": 354,
        "nombre_disco": "2008 - A Little Bit Longer",
        "link": "http://evassmat.com/685B"
    },
    {
        "id_disco": 2177,
        "id": 354,
        "nombre_disco": "2009 - Lines  Vines and Trying Times",
        "link": "http://evassmat.com/685X"
    },
    {
        "id_disco": 2178,
        "id": 354,
        "nombre_disco": "2009 - Live from SoHo",
        "link": "http://evassmat.com/685o"
    },
    {
        "id_disco": 2179,
        "id": 354,
        "nombre_disco": "2010 - Jonas L.A OST",
        "link": "http://evassmat.com/686A"
    },
    {
        "id_disco": 2180,
        "id": 354,
        "nombre_disco": "2013 - Live",
        "link": "http://evassmat.com/686S"
    },
    {
        "id_disco": 2181,
        "id": 354,
        "nombre_disco": "2019 - Happiness Begins",
        "link": "http://locinealy.com/2bc2"
    },
    {
        "id_disco": 2182,
        "id": 355,
        "nombre_disco": "2012 - The Kodaline - EP",
        "link": "http://evassmat.com/687i"
    },
    {
        "id_disco": 2183,
        "id": 355,
        "nombre_disco": "2013 - Brand New Day - EP",
        "link": "http://evassmat.com/687z"
    },
    {
        "id_disco": 2184,
        "id": 355,
        "nombre_disco": "2013 - In a Perfect World (Deluxe)",
        "link": "http://evassmat.com/688K"
    },
    {
        "id_disco": 2185,
        "id": 355,
        "nombre_disco": "2013 - Love Like This - EP",
        "link": "http://evassmat.com/688n"
    },
    {
        "id_disco": 2186,
        "id": 355,
        "nombre_disco": "2013 - The High Hopes - EP",
        "link": "http://evassmat.com/6899"
    },
    {
        "id_disco": 2187,
        "id": 355,
        "nombre_disco": "2014 - One Day - EP",
        "link": "http://evassmat.com/689b"
    },
    {
        "id_disco": 2188,
        "id": 355,
        "nombre_disco": "2015 - Coming Up for Air (Deluxe)",
        "link": "http://evassmat.com/68AL"
    },
    {
        "id_disco": 2189,
        "id": 356,
        "nombre_disco": "1997 - Angels Fall First",
        "link": "http://evassmat.com/68DI"
    },
    {
        "id_disco": 2190,
        "id": 356,
        "nombre_disco": "1998 - Oceanborn",
        "link": "http://evassmat.com/68Do"
    },
    {
        "id_disco": 2191,
        "id": 356,
        "nombre_disco": "2000 - Wishmaster",
        "link": "http://evassmat.com/68E3"
    },
    {
        "id_disco": 2192,
        "id": 356,
        "nombre_disco": "2000 - Wishmastour (EP) (Limited Edition)",
        "link": "http://evassmat.com/68ES"
    },
    {
        "id_disco": 2193,
        "id": 356,
        "nombre_disco": "2001 - From Wishes to Eternity (Live)",
        "link": "http://evassmat.com/68Eq"
    },
    {
        "id_disco": 2194,
        "id": 356,
        "nombre_disco": "2001 - Over the Hills and Far Away",
        "link": "http://evassmat.com/68FG"
    },
    {
        "id_disco": 2195,
        "id": 356,
        "nombre_disco": "2002 - Century Child",
        "link": "http://evassmat.com/68Fc"
    },
    {
        "id_disco": 2196,
        "id": 356,
        "nombre_disco": "2004 - Once (Limited Edition)",
        "link": "http://evassmat.com/68Fx"
    },
    {
        "id_disco": 2197,
        "id": 356,
        "nombre_disco": "2005 - Kuolema Tekee Taiteilijan (EP)",
        "link": "http://evassmat.com/68GQ"
    },
    {
        "id_disco": 2198,
        "id": 356,
        "nombre_disco": "2005 - The Siren (EP)",
        "link": "http://evassmat.com/68H1"
    },
    {
        "id_disco": 2199,
        "id": 356,
        "nombre_disco": "2006 - End of an Era",
        "link": "http://evassmat.com/68HY"
    },
    {
        "id_disco": 2200,
        "id": 356,
        "nombre_disco": "2007 - Amaranth (EP)",
        "link": "http://evassmat.com/68IG"
    },
    {
        "id_disco": 2201,
        "id": 356,
        "nombre_disco": "2007 - Dark Passion Play",
        "link": "http://evassmat.com/68Ii"
    },
    {
        "id_disco": 2202,
        "id": 356,
        "nombre_disco": "2009 - Made in Hong Kong (and in Various other Places) (EP)",
        "link": "http://evassmat.com/68Je"
    },
    {
        "id_disco": 2203,
        "id": 356,
        "nombre_disco": "2011 - Imaginaerum",
        "link": "http://evassmat.com/68Jy"
    },
    {
        "id_disco": 2204,
        "id": 356,
        "nombre_disco": "2012 - Imaginaerum - the Score",
        "link": "http://evassmat.com/68KC"
    },
    {
        "id_disco": 2205,
        "id": 356,
        "nombre_disco": "2012 - The Crow  the Owl and the Dove (EP)",
        "link": "http://evassmat.com/68KN"
    },
    {
        "id_disco": 2206,
        "id": 356,
        "nombre_disco": "2013 - Showtime  Storytime",
        "link": "http://evassmat.com/68Ku"
    },
    {
        "id_disco": 2207,
        "id": 356,
        "nombre_disco": "2015 - Endless Forms Most Beatiful",
        "link": "http://evassmat.com/68LL"
    },
    {
        "id_disco": 2208,
        "id": 357,
        "nombre_disco": "2011 - Into The Woods (EP)",
        "link": "http://evassmat.com/68Ow"
    },
    {
        "id_disco": 2209,
        "id": 357,
        "nombre_disco": "2011 - My Head Is An Animal",
        "link": "http://evassmat.com/68PE"
    },
    {
        "id_disco": 2210,
        "id": 357,
        "nombre_disco": "2013 - Live from Vatnagarðar",
        "link": "http://evassmat.com/68PT"
    },
    {
        "id_disco": 2211,
        "id": 357,
        "nombre_disco": "2015 - Beneath The Skin",
        "link": "http://evassmat.com/68Pw"
    },
    {
        "id_disco": 2212,
        "id": 358,
        "nombre_disco": "2010 - The X Factor Songs",
        "link": "http://evassmat.com/68RD"
    },
    {
        "id_disco": 2213,
        "id": 358,
        "nombre_disco": "2011 - Gotta Be You (EP)",
        "link": "http://evassmat.com/68Ra"
    },
    {
        "id_disco": 2214,
        "id": 358,
        "nombre_disco": "2011 - Up All Night",
        "link": "http://evassmat.com/68Sp"
    },
    {
        "id_disco": 2215,
        "id": 358,
        "nombre_disco": "2012 - iTunes Festival London",
        "link": "http://evassmat.com/68TG"
    },
    {
        "id_disco": 2216,
        "id": 358,
        "nombre_disco": "2012 - Live While Were Young (EP)",
        "link": "http://evassmat.com/68TY"
    },
    {
        "id_disco": 2217,
        "id": 358,
        "nombre_disco": "2012 - More Than This (EP)",
        "link": "http://evassmat.com/68Tu"
    },
    {
        "id_disco": 2218,
        "id": 358,
        "nombre_disco": "2012 - One Thing",
        "link": "http://evassmat.com/68UJ"
    },
    {
        "id_disco": 2219,
        "id": 358,
        "nombre_disco": "2012 - Up All Night The Live Tour",
        "link": "http://evassmat.com/68Uy"
    },
    {
        "id_disco": 2220,
        "id": 358,
        "nombre_disco": "2013 - Best Song Ever (EP)",
        "link": "http://evassmat.com/68VM"
    },
    {
        "id_disco": 2221,
        "id": 358,
        "nombre_disco": "2013 - Midnight Memories",
        "link": "http://evassmat.com/68Vo"
    },
    {
        "id_disco": 2222,
        "id": 358,
        "nombre_disco": "2013 - One Way or Another (Teenage Kicks) Single",
        "link": "http://evassmat.com/68WH"
    },
    {
        "id_disco": 2223,
        "id": 358,
        "nombre_disco": "2013 - Take Me Home (Deluxe Edition)",
        "link": "http://evassmat.com/68Wo"
    },
    {
        "id_disco": 2224,
        "id": 358,
        "nombre_disco": "2014 - FOUR (Deluxe)",
        "link": "http://evassmat.com/68XS"
    },
    {
        "id_disco": 2225,
        "id": 358,
        "nombre_disco": "2014 - Midnight Memories (EP)",
        "link": "http://evassmat.com/68Xw"
    },
    {
        "id_disco": 2226,
        "id": 358,
        "nombre_disco": "2014 - Night Changes (EP)",
        "link": "http://evassmat.com/6OQ9"
    },
    {
        "id_disco": 2227,
        "id": 358,
        "nombre_disco": "2014 - You & I (EP)",
        "link": "http://evassmat.com/68YW"
    },
    {
        "id_disco": 2228,
        "id": 358,
        "nombre_disco": "2015 - Made in the A.M. [Deluxe Edition]",
        "link": "http://ellevolaw.com/19hs"
    },
    {
        "id_disco": 2229,
        "id": 358,
        "nombre_disco": "2015 - Drag Me Down (Single)",
        "link": "http://evassmat.com/68Yu"
    },
    {
        "id_disco": 2230,
        "id": 358,
        "nombre_disco": "2015 - Made In The A.M",
        "link": "http://evassmat.com/68Zu"
    },
    {
        "id_disco": 2231,
        "id": 358,
        "nombre_disco": "2015 - Perfect (EP)",
        "link": "http://evassmat.com/68aU"
    },
    {
        "id_disco": 2232,
        "id": 359,
        "nombre_disco": "2007 - Dreaming Out Loud (Deluxe)",
        "link": "http://evassmat.com/68dJ"
    },
    {
        "id_disco": 2233,
        "id": 359,
        "nombre_disco": "2008 - Live Session (EP)",
        "link": "http://evassmat.com/68da"
    },
    {
        "id_disco": 2234,
        "id": 359,
        "nombre_disco": "2010 - Live From Dortmund (EP)",
        "link": "http://evassmat.com/68dq"
    },
    {
        "id_disco": 2235,
        "id": 359,
        "nombre_disco": "2010 - Live From Zurich (EP)",
        "link": "http://evassmat.com/68e4"
    },
    {
        "id_disco": 2236,
        "id": 359,
        "nombre_disco": "2010 - Waking Up (Deluxe)",
        "link": "http://evassmat.com/68eL"
    },
    {
        "id_disco": 2237,
        "id": 359,
        "nombre_disco": "2013 - Native (Deluxe)",
        "link": "http://evassmat.com/68ef"
    },
    {
        "id_disco": 2238,
        "id": 359,
        "nombre_disco": "2014 - iTunes Session",
        "link": "http://evassmat.com/68ez"
    },
    {
        "id_disco": 2239,
        "id": 359,
        "nombre_disco": "2016 - Oh My My",
        "link": "http://evassmat.com/68fO"
    },
    {
        "id_disco": 2240,
        "id": 360,
        "nombre_disco": "2007 - Of June (EP)",
        "link": "http://evassmat.com/68gP"
    },
    {
        "id_disco": 2241,
        "id": 360,
        "nombre_disco": "2008 - Maybe Im Dreaming",
        "link": "http://evassmat.com/68gj"
    },
    {
        "id_disco": 2242,
        "id": 360,
        "nombre_disco": "2010 - Ocean Eyes (Deluxe Edition)",
        "link": "http://evassmat.com/68hC"
    },
    {
        "id_disco": 2243,
        "id": 360,
        "nombre_disco": "2011 - All Things Bright And Beautiful (Deluxe Edition)",
        "link": "http://evassmat.com/68hg"
    },
    {
        "id_disco": 2244,
        "id": 360,
        "nombre_disco": "2012 - Shooting Star (EP)",
        "link": "http://evassmat.com/68hz"
    },
    {
        "id_disco": 2245,
        "id": 360,
        "nombre_disco": "2012 - The Midsummer Station",
        "link": "http://evassmat.com/68iL"
    },
    {
        "id_disco": 2246,
        "id": 360,
        "nombre_disco": "2013 - The Midsummer Station (Acoustic EP)",
        "link": "http://evassmat.com/68ii"
    },
    {
        "id_disco": 2247,
        "id": 360,
        "nombre_disco": "2014 - Ultraviolet (EP)",
        "link": "http://evassmat.com/68jF"
    },
    {
        "id_disco": 2248,
        "id": 360,
        "nombre_disco": "2015 - Mobile Orchestra (Japanese Edition)",
        "link": "http://evassmat.com/68ja"
    },
    {
        "id_disco": 2249,
        "id": 361,
        "nombre_disco": "2017 - Los Ángeles",
        "link": "http://evassmat.com/68ld"
    },
    {
        "id_disco": 2250,
        "id": 361,
        "nombre_disco": "2018 - El Mal Querer",
        "link": "http://evassmat.com/68lw"
    },
    {
        "id_disco": 2251,
        "id": 362,
        "nombre_disco": "2000 - Unknown Soldier",
        "link": "http://evassmat.com/68nB"
    },
    {
        "id_disco": 2252,
        "id": 362,
        "nombre_disco": "2002 - Beyond Abilities",
        "link": "http://evassmat.com/68p0"
    },
    {
        "id_disco": 2253,
        "id": 362,
        "nombre_disco": "2005 - Accept the Fact",
        "link": "http://evassmat.com/68oB"
    },
    {
        "id_disco": 2254,
        "id": 362,
        "nombre_disco": "2009 - Japanese Hospitality",
        "link": "http://evassmat.com/68qM"
    },
    {
        "id_disco": 2255,
        "id": 362,
        "nombre_disco": "2010 - The Evil That Warmen Do",
        "link": "http://evassmat.com/68qk"
    },
    {
        "id_disco": 2256,
        "id": 362,
        "nombre_disco": "2014 - First Of The Five Elements",
        "link": "http://evassmat.com/68rA"
    },
    {
        "id_disco": 2257,
        "id": 363,
        "nombre_disco": "2013 - 2 Cool 4 Skool",
        "link": "http://evassmat.com/2Vjr"
    },
    {
        "id_disco": 2258,
        "id": 363,
        "nombre_disco": "2013 - O!RUL8 2",
        "link": "http://evassmat.com/2VkJ"
    },
    {
        "id_disco": 2259,
        "id": 363,
        "nombre_disco": "2014 - Dark & Wild",
        "link": "http://evassmat.com/2Vkd"
    },
    {
        "id_disco": 2260,
        "id": 363,
        "nombre_disco": "2014 - Skool Luv Affair Special Addition",
        "link": "http://evassmat.com/2Vkz"
    },
    {
        "id_disco": 2261,
        "id": 363,
        "nombre_disco": "2014 - Wake Up",
        "link": "http://evassmat.com/2Vm9"
    },
    {
        "id_disco": 2262,
        "id": 363,
        "nombre_disco": "2014-2016 - Singles Pack 1",
        "link": "http://evassmat.com/2Vmk"
    },
    {
        "id_disco": 2263,
        "id": 363,
        "nombre_disco": "2015 - The Most Beautiful Moment in Life Pt. 1",
        "link": "http://evassmat.com/2Vn8"
    },
    {
        "id_disco": 2264,
        "id": 363,
        "nombre_disco": "2015 - The Most Beautiful Moment in Life Pt. 2",
        "link": "http://evassmat.com/2VnU"
    },
    {
        "id_disco": 2265,
        "id": 363,
        "nombre_disco": "2016 - The Most Beautiful Moment in Life Young Forever",
        "link": "http://evassmat.com/2Vo7"
    },
    {
        "id_disco": 2266,
        "id": 363,
        "nombre_disco": "2016 - Wings",
        "link": "http://evassmat.com/2VoY"
    },
    {
        "id_disco": 2267,
        "id": 363,
        "nombre_disco": "2016 - Youth",
        "link": "http://evassmat.com/2Vou"
    },
    {
        "id_disco": 2268,
        "id": 363,
        "nombre_disco": "2017 - Love Yourself Her",
        "link": "http://evassmat.com/2VpD"
    },
    {
        "id_disco": 2269,
        "id": 363,
        "nombre_disco": "2017 - You Never Walk Alone",
        "link": "http://evassmat.com/2VpW"
    },
    {
        "id_disco": 2270,
        "id": 363,
        "nombre_disco": "2018 - Face Yourself",
        "link": "http://evassmat.com/2Vpm"
    },
    {
        "id_disco": 2271,
        "id": 363,
        "nombre_disco": "2018 - Love Yourself Answer",
        "link": "http://evassmat.com/2VqC"
    },
    {
        "id_disco": 2272,
        "id": 363,
        "nombre_disco": "2018 - Love Yourself Tear",
        "link": "http://evassmat.com/2VqZ"
    },
    {
        "id_disco": 2273,
        "id": 363,
        "nombre_disco": "2019 - MAP OF THE SOUL _ PERSONA",
        "link": "http://pladollmo.com/4WVN"
    },
    {
        "id_disco": 2274,
        "id": 363,
        "nombre_disco": "Singles  Solos  Covers y FTs",
        "link": "http://pladollmo.com/4WVi"
    },
    {
        "id_disco": 2275,
        "id": 364,
        "nombre_disco": "2012 - MAMA (EP)",
        "link": "http://evassmat.com/2VsE"
    },
    {
        "id_disco": 2276,
        "id": 364,
        "nombre_disco": "2013 - Miracles in December (EP)",
        "link": "http://evassmat.com/2Vsn"
    },
    {
        "id_disco": 2277,
        "id": 364,
        "nombre_disco": "2013 - XOXO",
        "link": "http://evassmat.com/2VtI"
    },
    {
        "id_disco": 2278,
        "id": 364,
        "nombre_disco": "2014 - Exology Chapter 1 - The Lost Planet",
        "link": "http://evassmat.com/2Vto"
    },
    {
        "id_disco": 2279,
        "id": 364,
        "nombre_disco": "2014 - Overdose (EP)",
        "link": "http://evassmat.com/2Vu8"
    },
    {
        "id_disco": 2280,
        "id": 364,
        "nombre_disco": "2015 - EXODUS",
        "link": "http://evassmat.com/2Vul"
    },
    {
        "id_disco": 2281,
        "id": 364,
        "nombre_disco": "2015 - Love me Right",
        "link": "http://evassmat.com/2Vuy"
    },
    {
        "id_disco": 2282,
        "id": 364,
        "nombre_disco": "2015 - Sing for You (Winter Special Album)",
        "link": "http://evassmat.com/2Vva"
    },
    {
        "id_disco": 2283,
        "id": 364,
        "nombre_disco": "2016 - EXACT",
        "link": "http://evassmat.com/2Vw7"
    },
    {
        "id_disco": 2284,
        "id": 364,
        "nombre_disco": "2016 - For Life (Winter Special)",
        "link": "http://evassmat.com/2VwY"
    },
    {
        "id_disco": 2285,
        "id": 364,
        "nombre_disco": "2016 - LOTTO",
        "link": "http://evassmat.com/2Vws"
    },
    {
        "id_disco": 2286,
        "id": 364,
        "nombre_disco": "2016 - LOTTO - The 3rd Album Repackage (Korean Version)",
        "link": "http://pladollmo.com/4Wty"
    },
    {
        "id_disco": 2287,
        "id": 364,
        "nombre_disco": "2017 - The Power of Music (EP)",
        "link": "http://evassmat.com/2VxC"
    },
    {
        "id_disco": 2288,
        "id": 364,
        "nombre_disco": "2017 - The War - The Power of Music",
        "link": "http://evassmat.com/2VxU"
    },
    {
        "id_disco": 2289,
        "id": 364,
        "nombre_disco": "2018 - DON`T MESS UP MY TEMPO - The 5th Album",
        "link": "http://pladollmo.com/4WuI"
    },
    {
        "id_disco": 2290,
        "id": 364,
        "nombre_disco": "2019 - OBSESSION - The 6th Album",
        "link": "http://pladollmo.com/4WuS"
    },
    {
        "id_disco": 2291,
        "id": 365,
        "nombre_disco": "2010 - Demo",
        "link": "http://evassmat.com/2VyR"
    },
    {
        "id_disco": 2292,
        "id": 365,
        "nombre_disco": "2013 - If You Have Ghost",
        "link": "http://evassmat.com/2Vyx"
    },
    {
        "id_disco": 2293,
        "id": 365,
        "nombre_disco": "2013 - Infestissumam",
        "link": "http://evassmat.com/2VzE"
    },
    {
        "id_disco": 2294,
        "id": 365,
        "nombre_disco": "2015 - He Is",
        "link": "http://evassmat.com/2VzZ"
    },
    {
        "id_disco": 2295,
        "id": 365,
        "nombre_disco": "2015 - Meliora",
        "link": "http://evassmat.com/2W0A"
    },
    {
        "id_disco": 2296,
        "id": 365,
        "nombre_disco": "2016 - Popestar",
        "link": "http://evassmat.com/2W0g"
    },
    {
        "id_disco": 2297,
        "id": 365,
        "nombre_disco": "2017 - Ceremony And Devotion",
        "link": "http://evassmat.com/2W1Y"
    },
    {
        "id_disco": 2298,
        "id": 365,
        "nombre_disco": "2018 - Prequelle",
        "link": "http://evassmat.com/2W22"
    },
    {
        "id_disco": 2299,
        "id": 366,
        "nombre_disco": "1981 - Bad Reputation (Remastered)",
        "link": "http://evassmat.com/2W4W"
    },
    {
        "id_disco": 2300,
        "id": 366,
        "nombre_disco": "1981 - I Love Rock n Roll",
        "link": "http://evassmat.com/2W4y"
    },
    {
        "id_disco": 2301,
        "id": 366,
        "nombre_disco": "1982 - Live In New York",
        "link": "http://evassmat.com/2W5G"
    },
    {
        "id_disco": 2302,
        "id": 366,
        "nombre_disco": "1983 - Album (Remastered)",
        "link": "http://evassmat.com/2W5U"
    },
    {
        "id_disco": 2303,
        "id": 366,
        "nombre_disco": "1984 - Glorious Results Of A Misspent Youth (Remastered)",
        "link": "http://evassmat.com/2W6M"
    },
    {
        "id_disco": 2304,
        "id": 366,
        "nombre_disco": "1986 - Good Music",
        "link": "http://evassmat.com/2W6c"
    },
    {
        "id_disco": 2305,
        "id": 366,
        "nombre_disco": "1988 - Up Your Alley",
        "link": "http://evassmat.com/2W6v"
    },
    {
        "id_disco": 2306,
        "id": 366,
        "nombre_disco": "1990 - The Hit List",
        "link": "http://evassmat.com/2W7G"
    },
    {
        "id_disco": 2307,
        "id": 366,
        "nombre_disco": "1991 - Notorious",
        "link": "http://evassmat.com/2W7d"
    },
    {
        "id_disco": 2308,
        "id": 366,
        "nombre_disco": "1992 - I Love RocknRoll 92 (EP)",
        "link": "http://evassmat.com/2W85"
    },
    {
        "id_disco": 2309,
        "id": 366,
        "nombre_disco": "1993 - Flashback (Remastered)",
        "link": "http://evassmat.com/2W8X"
    },
    {
        "id_disco": 2310,
        "id": 366,
        "nombre_disco": "1994 - Pure & Simple (Remastered)",
        "link": "http://evassmat.com/2W8t"
    },
    {
        "id_disco": 2311,
        "id": 366,
        "nombre_disco": "1995 - 1979 (Fan Club Edition)",
        "link": "http://evassmat.com/2W9C"
    },
    {
        "id_disco": 2312,
        "id": 366,
        "nombre_disco": "1995 - Evil Stig",
        "link": "http://evassmat.com/2W9s"
    },
    {
        "id_disco": 2313,
        "id": 366,
        "nombre_disco": "1996 - Great Hits",
        "link": "http://evassmat.com/2WAD"
    },
    {
        "id_disco": 2314,
        "id": 366,
        "nombre_disco": "1997 - Fit To Be Tied (Remastered)",
        "link": "http://evassmat.com/2WAc"
    },
    {
        "id_disco": 2315,
        "id": 366,
        "nombre_disco": "1999 - Fetish",
        "link": "http://evassmat.com/2WBl"
    },
    {
        "id_disco": 2316,
        "id": 366,
        "nombre_disco": "2003 - Jett Rock",
        "link": "http://evassmat.com/2WC6"
    },
    {
        "id_disco": 2317,
        "id": 366,
        "nombre_disco": "2004 - Naked",
        "link": "http://evassmat.com/2WCY"
    },
    {
        "id_disco": 2318,
        "id": 366,
        "nombre_disco": "2006 - Sinner",
        "link": "http://evassmat.com/2WD5"
    },
    {
        "id_disco": 2319,
        "id": 366,
        "nombre_disco": "2010 - Greatest Hits",
        "link": "http://evassmat.com/2WDR"
    },
    {
        "id_disco": 2320,
        "id": 366,
        "nombre_disco": "2013 - Unvarnished",
        "link": "http://evassmat.com/2WDl"
    },
    {
        "id_disco": 2321,
        "id": 367,
        "nombre_disco": "1984 - La Voz De Los 80",
        "link": "http://evassmat.com/2WIe"
    },
    {
        "id_disco": 2322,
        "id": 367,
        "nombre_disco": "1986 - Pateando Piedras",
        "link": "http://evassmat.com/2WIy"
    },
    {
        "id_disco": 2323,
        "id": 367,
        "nombre_disco": "1987 - La Cultura De La Basura",
        "link": "http://evassmat.com/2WJa"
    },
    {
        "id_disco": 2324,
        "id": 367,
        "nombre_disco": "1990 - Corazones",
        "link": "http://evassmat.com/2WK6"
    },
    {
        "id_disco": 2325,
        "id": 367,
        "nombre_disco": "1996 - Ni Por La Razon  Ni Por La Fuerza",
        "link": "http://evassmat.com/2WLP"
    },
    {
        "id_disco": 2326,
        "id": 367,
        "nombre_disco": "2000 - El Caset Pirata",
        "link": "http://evassmat.com/2WLk"
    },
    {
        "id_disco": 2327,
        "id": 367,
        "nombre_disco": "2002 - Estadio Nacional",
        "link": "http://evassmat.com/2WLz"
    },
    {
        "id_disco": 2328,
        "id": 367,
        "nombre_disco": "2003 - Los Prisioneros",
        "link": "http://evassmat.com/2WMJ"
    },
    {
        "id_disco": 2329,
        "id": 367,
        "nombre_disco": "2004 - Manzana",
        "link": "http://evassmat.com/2WMm"
    },
    {
        "id_disco": 2330,
        "id": 368,
        "nombre_disco": "2002 - Live In Japan",
        "link": "http://evassmat.com/2WNT"
    },
    {
        "id_disco": 2331,
        "id": 368,
        "nombre_disco": "2002 - No Pads  No Helmets... Just Balls",
        "link": "http://evassmat.com/2WNp"
    },
    {
        "id_disco": 2332,
        "id": 368,
        "nombre_disco": "2004 - A Small Package for You",
        "link": "http://evassmat.com/2WO6"
    },
    {
        "id_disco": 2333,
        "id": 368,
        "nombre_disco": "2004 - Live In Anaheim",
        "link": "http://evassmat.com/2WOe"
    },
    {
        "id_disco": 2334,
        "id": 368,
        "nombre_disco": "2004 - Still Not Getting Any",
        "link": "http://evassmat.com/2WP3"
    },
    {
        "id_disco": 2335,
        "id": 368,
        "nombre_disco": "2005 - MTV Hard Rock Live",
        "link": "http://evassmat.com/2WPK"
    },
    {
        "id_disco": 2336,
        "id": 368,
        "nombre_disco": "2008 - Live In AOL",
        "link": "http://evassmat.com/2WPd"
    },
    {
        "id_disco": 2337,
        "id": 368,
        "nombre_disco": "2008 - Simple Plan",
        "link": "http://evassmat.com/2WPy"
    },
    {
        "id_disco": 2338,
        "id": 368,
        "nombre_disco": "2011 - Get Your Heart On!",
        "link": "http://evassmat.com/2WQE"
    },
    {
        "id_disco": 2339,
        "id": 368,
        "nombre_disco": "2011 - Get Your Heart On! - The Second Coming EP",
        "link": "http://evassmat.com/2WQY"
    },
    {
        "id_disco": 2340,
        "id": 368,
        "nombre_disco": "Rares +Singles",
        "link": "http://evassmat.com/2WQi"
    },
    {
        "id_disco": 2341,
        "id": 369,
        "nombre_disco": "2011 - Echoes of Silence",
        "link": "http://evassmat.com/2WRq"
    },
    {
        "id_disco": 2342,
        "id": 369,
        "nombre_disco": "2011 - House of Balloons",
        "link": "http://evassmat.com/2WSD"
    },
    {
        "id_disco": 2343,
        "id": 369,
        "nombre_disco": "2011 - Thursday",
        "link": "http://evassmat.com/2WSX"
    },
    {
        "id_disco": 2344,
        "id": 369,
        "nombre_disco": "2012 - Trilogy",
        "link": "http://evassmat.com/2WSv"
    },
    {
        "id_disco": 2345,
        "id": 369,
        "nombre_disco": "2013 - Kiss Land (Deluxe)",
        "link": "http://evassmat.com/2WTT"
    },
    {
        "id_disco": 2346,
        "id": 369,
        "nombre_disco": "2015 - Beauty Behind The Madness",
        "link": "http://evassmat.com/2WTs"
    },
    {
        "id_disco": 2347,
        "id": 369,
        "nombre_disco": "2016 - Starboy",
        "link": "http://evassmat.com/2WUD"
    },
    {
        "id_disco": 2348,
        "id": 369,
        "nombre_disco": "2018 - My Dear Melancholy",
        "link": "http://evassmat.com/2WUX"
    },
    {
        "id_disco": 2349,
        "id": 370,
        "nombre_disco": "2015 - Dead Roses",
        "link": "http://cesinthi.com/8cK"
    },
    {
        "id_disco": 2350,
        "id": 370,
        "nombre_disco": "2015 - Help",
        "link": "http://cesinthi.com/8d0"
    },
    {
        "id_disco": 2351,
        "id": 370,
        "nombre_disco": "2016 - Cashmere Noose (Deluxe)",
        "link": "http://cesinthi.com/8dq"
    },
    {
        "id_disco": 2352,
        "id": 370,
        "nombre_disco": "2017 - Cybersex",
        "link": "http://cesinthi.com/8eN"
    },
    {
        "id_disco": 2353,
        "id": 370,
        "nombre_disco": "2017 - digital druglord",
        "link": "http://cesinthi.com/9R0"
    },
    {
        "id_disco": 2354,
        "id": 371,
        "nombre_disco": "1998 - The Early Demos",
        "link": "http://cesinthi.com/9Sy"
    },
    {
        "id_disco": 2355,
        "id": 371,
        "nombre_disco": "2001 - Breaking Benjamin EP",
        "link": "http://cesinthi.com/9Tf"
    },
    {
        "id_disco": 2356,
        "id": 371,
        "nombre_disco": "2002 - Saturate",
        "link": "http://cesinthi.com/9Uw"
    },
    {
        "id_disco": 2357,
        "id": 371,
        "nombre_disco": "2004 - Live EP",
        "link": "http://cesinthi.com/9VL"
    },
    {
        "id_disco": 2358,
        "id": 371,
        "nombre_disco": "2004 - So Cold EP",
        "link": "http://cesinthi.com/9Vu"
    },
    {
        "id_disco": 2359,
        "id": 371,
        "nombre_disco": "2004 - We Are Not Alone",
        "link": "http://cesinthi.com/9Wv"
    },
    {
        "id_disco": 2360,
        "id": 371,
        "nombre_disco": "2006 - Phobia",
        "link": "http://cesinthi.com/9Xd"
    },
    {
        "id_disco": 2361,
        "id": 371,
        "nombre_disco": "2006 - Phobia Collectors Edition",
        "link": "http://cesinthi.com/9YZ"
    },
    {
        "id_disco": 2362,
        "id": 371,
        "nombre_disco": "2009 - Dear Agony",
        "link": "http://cesinthi.com/9Yu"
    },
    {
        "id_disco": 2363,
        "id": 371,
        "nombre_disco": "2011 - Shallow Bay The Best Of Breaking Benjamin",
        "link": "http://cesinthi.com/9a6"
    },
    {
        "id_disco": 2364,
        "id": 371,
        "nombre_disco": "2015 - Dark Before Dawn",
        "link": "http://cesinthi.com/9dA"
    },
    {
        "id_disco": 2365,
        "id": 371,
        "nombre_disco": "2018 - Ember",
        "link": "http://cesinthi.com/9di"
    },
    {
        "id_disco": 2366,
        "id": 372,
        "nombre_disco": "1986 - Las insólitas imágenes de Aurora (En vivo)",
        "link": "http://cesinthi.com/9hd"
    },
    {
        "id_disco": 2367,
        "id": 372,
        "nombre_disco": "1988 - Caifanes",
        "link": "http://cesinthi.com/9ie"
    },
    {
        "id_disco": 2368,
        "id": 372,
        "nombre_disco": "1988 - La Negra Tomasa",
        "link": "http://cesinthi.com/9kn"
    },
    {
        "id_disco": 2369,
        "id": 372,
        "nombre_disco": "1988 - Mátenme porque me muero",
        "link": "http://cesinthi.com/9ly"
    },
    {
        "id_disco": 2370,
        "id": 372,
        "nombre_disco": "1990 - Caifanes  Volumen II (El Diablito)",
        "link": "http://cesinthi.com/9mU"
    },
    {
        "id_disco": 2371,
        "id": 372,
        "nombre_disco": "1992 - El Silencio",
        "link": "http://cesinthi.com/9nQ"
    },
    {
        "id_disco": 2372,
        "id": 372,
        "nombre_disco": "1992 - En vivo desde el Rock Stock",
        "link": "http://cesinthi.com/9ny"
    },
    {
        "id_disco": 2373,
        "id": 372,
        "nombre_disco": "1994 - El nervio del volcan",
        "link": "http://cesinthi.com/9ot"
    },
    {
        "id_disco": 2374,
        "id": 372,
        "nombre_disco": "1994 - MTV Unplugged",
        "link": "http://cesinthi.com/9qB"
    },
    {
        "id_disco": 2375,
        "id": 372,
        "nombre_disco": "1997 - La Historia",
        "link": "http://cesinthi.com/9r3"
    },
    {
        "id_disco": 2376,
        "id": 372,
        "nombre_disco": "2012 - A 25 Años",
        "link": "http://cesinthi.com/9s8"
    },
    {
        "id_disco": 2377,
        "id": 373,
        "nombre_disco": "1983 - Metal Magic",
        "link": "http://cesinthi.com/W7x"
    },
    {
        "id_disco": 2378,
        "id": 373,
        "nombre_disco": "1984 - Projects In The Jungle",
        "link": "http://cesinthi.com/W8o"
    },
    {
        "id_disco": 2379,
        "id": 373,
        "nombre_disco": "1985 - I Am The Night",
        "link": "http://cesinthi.com/W9r"
    },
    {
        "id_disco": 2380,
        "id": 373,
        "nombre_disco": "1988 - Power Metal",
        "link": "http://cesinthi.com/WAh"
    },
    {
        "id_disco": 2381,
        "id": 373,
        "nombre_disco": "1990 - Cowboys From Hell",
        "link": "http://cesinthi.com/WBO"
    },
    {
        "id_disco": 2382,
        "id": 373,
        "nombre_disco": "1992 - Vulgar Display Of Power",
        "link": "http://cesinthi.com/WCc"
    },
    {
        "id_disco": 2383,
        "id": 373,
        "nombre_disco": "1994 - Far Beyond Driven",
        "link": "http://cesinthi.com/WDA"
    },
    {
        "id_disco": 2384,
        "id": 373,
        "nombre_disco": "1996 - The Great Southern Trendkill",
        "link": "http://cesinthi.com/WDo"
    },
    {
        "id_disco": 2385,
        "id": 373,
        "nombre_disco": "1997 - Official Live 101 Proof",
        "link": "http://cesinthi.com/WEH"
    },
    {
        "id_disco": 2386,
        "id": 373,
        "nombre_disco": "2000 - Reinventing The Steel",
        "link": "http://cesinthi.com/WEs"
    },
    {
        "id_disco": 2387,
        "id": 374,
        "nombre_disco": "2000 - United",
        "link": "http://cesinthi.com/WHT"
    },
    {
        "id_disco": 2388,
        "id": 374,
        "nombre_disco": "2004 - Alphabetical",
        "link": "http://cesinthi.com/WHy"
    },
    {
        "id_disco": 2389,
        "id": 374,
        "nombre_disco": "2004 - Live! Thirty Days Ago",
        "link": "http://cesinthi.com/WIk"
    },
    {
        "id_disco": 2390,
        "id": 374,
        "nombre_disco": "2006 - Its Never Been Like That",
        "link": "http://cesinthi.com/WMX"
    },
    {
        "id_disco": 2391,
        "id": 374,
        "nombre_disco": "2009 - Lisztomania Remixes (EP)",
        "link": "http://cesinthi.com/WNI"
    },
    {
        "id_disco": 2392,
        "id": 374,
        "nombre_disco": "2009 - Live & Unplugged",
        "link": "http://cesinthi.com/WOD"
    },
    {
        "id_disco": 2393,
        "id": 374,
        "nombre_disco": "2009 - Wolfgang Amadeus Phoenix",
        "link": "http://cesinthi.com/WOm"
    },
    {
        "id_disco": 2394,
        "id": 374,
        "nombre_disco": "2009 - Wolfgang Amadeus Phoenix Remixes",
        "link": "http://cesinthi.com/WPf"
    },
    {
        "id_disco": 2395,
        "id": 374,
        "nombre_disco": "2013 - Bankrupt! (Deluxe Edition)",
        "link": "http://cesinthi.com/WQS"
    },
    {
        "id_disco": 2396,
        "id": 374,
        "nombre_disco": "2017 - Ti Amo",
        "link": "http://cesinthi.com/WQs"
    },
    {
        "id_disco": 2397,
        "id": 375,
        "nombre_disco": "1995 - Wave of Popular Feeling",
        "link": "http://cesinthi.com/WT9"
    },
    {
        "id_disco": 2398,
        "id": 375,
        "nombre_disco": "2003 - Three Days Grace",
        "link": "http://cesinthi.com/WU3"
    },
    {
        "id_disco": 2399,
        "id": 375,
        "nombre_disco": "2004 - Rolling Stone Original (EP)",
        "link": "http://cesinthi.com/WWs"
    },
    {
        "id_disco": 2400,
        "id": 375,
        "nombre_disco": "2006 - One-X",
        "link": "http://cesinthi.com/WXS"
    },
    {
        "id_disco": 2401,
        "id": 375,
        "nombre_disco": "2006 - Pain (EP)",
        "link": "http://cesinthi.com/WZX"
    },
    {
        "id_disco": 2402,
        "id": 375,
        "nombre_disco": "2009 - Life Starts Now",
        "link": "http://cesinthi.com/Wa8"
    },
    {
        "id_disco": 2403,
        "id": 375,
        "nombre_disco": "2012 - Transit Of Venus",
        "link": "http://cesinthi.com/Waq"
    },
    {
        "id_disco": 2404,
        "id": 375,
        "nombre_disco": "2015 - Human",
        "link": "http://cesinthi.com/WbJ"
    },
    {
        "id_disco": 2405,
        "id": 375,
        "nombre_disco": "2018 - Outsider",
        "link": "http://cesinthi.com/Wpr"
    },
    {
        "id_disco": 2406,
        "id": 376,
        "nombre_disco": "1999 - Demo Olmos",
        "link": "http://onisedeo.com/3pw3"
    },
    {
        "id_disco": 2407,
        "id": 376,
        "nombre_disco": "2001 - Zoé",
        "link": "http://onisedeo.com/3pwL"
    },
    {
        "id_disco": 2408,
        "id": 376,
        "nombre_disco": "2003 - Rocanlover",
        "link": "http://onisedeo.com/3pwg"
    },
    {
        "id_disco": 2409,
        "id": 376,
        "nombre_disco": "2005 - The Room Ep",
        "link": "http://onisedeo.com/3px0"
    },
    {
        "id_disco": 2410,
        "id": 376,
        "nombre_disco": "2006 - Memo Rex Commander",
        "link": "http://onisedeo.com/3pxU"
    },
    {
        "id_disco": 2411,
        "id": 376,
        "nombre_disco": "2006 - Zoé Hits 01-06",
        "link": "http://onisedeo.com/3py4"
    },
    {
        "id_disco": 2412,
        "id": 376,
        "nombre_disco": "2007 - Grandes Hits",
        "link": "http://onisedeo.com/3pyJ"
    },
    {
        "id_disco": 2413,
        "id": 376,
        "nombre_disco": "2008 - 281107",
        "link": "http://onisedeo.com/3pyk"
    },
    {
        "id_disco": 2414,
        "id": 376,
        "nombre_disco": "2009 - Dejando Huellas",
        "link": "http://onisedeo.com/3pz5"
    },
    {
        "id_disco": 2415,
        "id": 376,
        "nombre_disco": "2009 - Reptilectric",
        "link": "http://onisedeo.com/3pzM"
    },
    {
        "id_disco": 2416,
        "id": 376,
        "nombre_disco": "2009 - Reptilectric Revisitado",
        "link": "http://onisedeo.com/3pzk"
    },
    {
        "id_disco": 2417,
        "id": 376,
        "nombre_disco": "2009 - Reptilectric Revisitado B-Sides",
        "link": "http://onisedeo.com/3q0K"
    },
    {
        "id_disco": 2418,
        "id": 376,
        "nombre_disco": "40188",
        "link": "http://onisedeo.com/3q0u"
    },
    {
        "id_disco": 2419,
        "id": 376,
        "nombre_disco": "2011 - MTV Unplugged",
        "link": "http://onisedeo.com/3q19"
    },
    {
        "id_disco": 2420,
        "id": 376,
        "nombre_disco": "2013 - Prográmaton",
        "link": "http://onisedeo.com/3q1X"
    },
    {
        "id_disco": 2421,
        "id": 376,
        "nombre_disco": "2018 - Aztlán",
        "link": "http://onisedeo.com/3q1t"
    },
    {
        "id_disco": 2422,
        "id": 377,
        "nombre_disco": "2007 - A Flair For The Dramatic",
        "link": "http://onisedeo.com/3pm4"
    },
    {
        "id_disco": 2423,
        "id": 377,
        "nombre_disco": "2010 - Selfish Machines (Deluxe Edition)",
        "link": "http://onisedeo.com/3pmQ"
    },
    {
        "id_disco": 2424,
        "id": 377,
        "nombre_disco": "2012 - Collide With The Sky",
        "link": "http://onisedeo.com/3pmk"
    },
    {
        "id_disco": 2425,
        "id": 377,
        "nombre_disco": "2016 - Misadventures",
        "link": "http://onisedeo.com/3pnC"
    },
    {
        "id_disco": 2426,
        "id": 378,
        "nombre_disco": "2004 - Weve Been Holding Back",
        "link": "http://onisedeo.com/3pSj"
    },
    {
        "id_disco": 2427,
        "id": 378,
        "nombre_disco": "2005 - Building Cities From Scratch",
        "link": "http://onisedeo.com/3pT1"
    },
    {
        "id_disco": 2428,
        "id": 378,
        "nombre_disco": "2008 - The Ghosts Among Us",
        "link": "http://onisedeo.com/3pTS"
    },
    {
        "id_disco": 2429,
        "id": 378,
        "nombre_disco": "2010 - We Will All Evolve",
        "link": "http://onisedeo.com/3pTr"
    },
    {
        "id_disco": 2430,
        "id": 378,
        "nombre_disco": "2013 - Age of Ignorance",
        "link": "http://onisedeo.com/3pUE"
    },
    {
        "id_disco": 2431,
        "id": 378,
        "nombre_disco": "2013 - Covers",
        "link": "http://onisedeo.com/3pUe"
    },
    {
        "id_disco": 2432,
        "id": 378,
        "nombre_disco": "2013 - Oak Island [EP]",
        "link": "http://onisedeo.com/3pV5"
    },
    {
        "id_disco": 2433,
        "id": 378,
        "nombre_disco": "2014 - Oak Island [Acoustic EP]",
        "link": "http://onisedeo.com/3pVp"
    },
    {
        "id_disco": 2434,
        "id": 378,
        "nombre_disco": "2015 - Younger Dreams",
        "link": "http://onisedeo.com/3pWJ"
    },
    {
        "id_disco": 2435,
        "id": 378,
        "nombre_disco": "2017 - Selective Hearing",
        "link": "http://onisedeo.com/3pWe"
    },
    {
        "id_disco": 2436,
        "id": 379,
        "nombre_disco": "2014 - Royal Blood",
        "link": "http://onisedeo.com/3pJS"
    },
    {
        "id_disco": 2437,
        "id": 379,
        "nombre_disco": "2017 - How Did We Get So Dark",
        "link": "http://onisedeo.com/3pJh"
    },
    {
        "id_disco": 2438,
        "id": 380,
        "nombre_disco": "2010 - Zaz",
        "link": "http://onisedeo.com/3p8o"
    },
    {
        "id_disco": 2439,
        "id": 380,
        "nombre_disco": "2013 - Verso",
        "link": "http://onisedeo.com/3p9D"
    },
    {
        "id_disco": 2440,
        "id": 380,
        "nombre_disco": "2014 - Paris",
        "link": "http://onisedeo.com/3p9c"
    },
    {
        "id_disco": 2441,
        "id": 380,
        "nombre_disco": "2015 - Sur la route",
        "link": "http://onisedeo.com/3pA1"
    },
    {
        "id_disco": 2442,
        "id": 381,
        "nombre_disco": "2013 - Bad Blood",
        "link": "http://onisedeo.com/3fU7"
    },
    {
        "id_disco": 2443,
        "id": 381,
        "nombre_disco": "2014 - All This Bad Blood",
        "link": "http://onisedeo.com/3fnb"
    },
    {
        "id_disco": 2444,
        "id": 381,
        "nombre_disco": "2014 - VS. (Other People’s Heartache  Pt. III)",
        "link": "http://onisedeo.com/3foE"
    },
    {
        "id_disco": 2445,
        "id": 381,
        "nombre_disco": "2016 - Wild World",
        "link": "http://onisedeo.com/3fof"
    },
    {
        "id_disco": 2446,
        "id": 381,
        "nombre_disco": "2012 - Flaws",
        "link": "http://eunsetee.com/7QxJ"
    },
    {
        "id_disco": 2447,
        "id": 381,
        "nombre_disco": "2012 - Overjoyed",
        "link": "http://eunsetee.com/7Qxl"
    },
    {
        "id_disco": 2448,
        "id": 381,
        "nombre_disco": "2013 - Laura Palmer",
        "link": "http://eunsetee.com/7QyO"
    },
    {
        "id_disco": 2449,
        "id": 381,
        "nombre_disco": "2013 - Pompeii",
        "link": "http://eunsetee.com/7Qyq"
    },
    {
        "id_disco": 2450,
        "id": 381,
        "nombre_disco": "2013 - Things We Lost In The Fire",
        "link": "http://eunsetee.com/7QzN"
    },
    {
        "id_disco": 2451,
        "id": 381,
        "nombre_disco": "2014 - Oblivion",
        "link": "http://eunsetee.com/7R0j"
    },
    {
        "id_disco": 2452,
        "id": 381,
        "nombre_disco": "2018 - Other People’s Heartache (Pt. 4)",
        "link": "http://eunsetee.com/7R1B"
    },
    {
        "id_disco": 2453,
        "id": 381,
        "nombre_disco": "2019 - Doom Days",
        "link": "http://eunsetee.com/7R1f"
    },
    {
        "id_disco": 2454,
        "id": 382,
        "nombre_disco": "2013 - Kaleo",
        "link": "http://onisedeo.com/1RCE"
    },
    {
        "id_disco": 2455,
        "id": 382,
        "nombre_disco": "2016 - AB",
        "link": "http://onisedeo.com/1RCg"
    },
    {
        "id_disco": 2456,
        "id": 383,
        "nombre_disco": "1984 - Simplemente",
        "link": "http://onisedeo.com/1QER"
    },
    {
        "id_disco": 2457,
        "id": 383,
        "nombre_disco": "1985 - Hecho En Mexico",
        "link": "http://onisedeo.com/1QFH"
    },
    {
        "id_disco": 2458,
        "id": 383,
        "nombre_disco": "1987 - Niño Sin Amor",
        "link": "http://onisedeo.com/1QG4"
    },
    {
        "id_disco": 2459,
        "id": 383,
        "nombre_disco": "1988 - Otra Tocada Mas",
        "link": "http://onisedeo.com/1QGi"
    },
    {
        "id_disco": 2460,
        "id": 383,
        "nombre_disco": "1989 - 21 Años Despues",
        "link": "http://onisedeo.com/1QHR"
    },
    {
        "id_disco": 2461,
        "id": 383,
        "nombre_disco": "1989 - En Vivo En La Carcel De Santa Martha",
        "link": "http://onisedeo.com/1QI3"
    },
    {
        "id_disco": 2462,
        "id": 383,
        "nombre_disco": "1990 - Una Leyenda Viva Llamada El Tri",
        "link": "http://onisedeo.com/1QK4"
    },
    {
        "id_disco": 2463,
        "id": 383,
        "nombre_disco": "1991 - ¡En Vivo Y A Todo Calor!",
        "link": "http://onisedeo.com/1QL3"
    },
    {
        "id_disco": 2464,
        "id": 383,
        "nombre_disco": "1992 - Indocumentado",
        "link": "http://onisedeo.com/1QLo"
    },
    {
        "id_disco": 2465,
        "id": 383,
        "nombre_disco": "1993 - 25 Años",
        "link": "http://onisedeo.com/1QMS"
    },
    {
        "id_disco": 2466,
        "id": 383,
        "nombre_disco": "1994 - Una Rola Para Los Minusvalidos",
        "link": "http://onisedeo.com/1QNM"
    },
    {
        "id_disco": 2467,
        "id": 383,
        "nombre_disco": "1995 - Un Cuarto De Siglo",
        "link": "http://onisedeo.com/1QO3"
    },
    {
        "id_disco": 2468,
        "id": 383,
        "nombre_disco": "1996 - Hoyos En La Bolsa",
        "link": "http://onisedeo.com/1QOw"
    },
    {
        "id_disco": 2469,
        "id": 383,
        "nombre_disco": "1997 - Cuando Tu No Estas",
        "link": "http://onisedeo.com/1QPk"
    },
    {
        "id_disco": 2470,
        "id": 383,
        "nombre_disco": "1999 - Lora  Su Lira Y Sus Rolas",
        "link": "http://onisedeo.com/1QQo"
    },
    {
        "id_disco": 2471,
        "id": 383,
        "nombre_disco": "1999 - Sinfonico",
        "link": "http://onisedeo.com/1QSC"
    },
    {
        "id_disco": 2472,
        "id": 383,
        "nombre_disco": "2000 - No Podemos Volar",
        "link": "http://onisedeo.com/1QSr"
    },
    {
        "id_disco": 2473,
        "id": 383,
        "nombre_disco": "2001 - Sinfonico II",
        "link": "http://onisedeo.com/1QUk"
    },
    {
        "id_disco": 2474,
        "id": 383,
        "nombre_disco": "2002 - No Te Olvides De La Banda",
        "link": "http://onisedeo.com/1QW3"
    },
    {
        "id_disco": 2475,
        "id": 383,
        "nombre_disco": "2003 - Los Numero Uno Exitos 1968-2003",
        "link": "http://onisedeo.com/1QWx"
    },
    {
        "id_disco": 2476,
        "id": 383,
        "nombre_disco": "2004 - MTV Unplugged",
        "link": "http://onisedeo.com/1QXn"
    },
    {
        "id_disco": 2477,
        "id": 383,
        "nombre_disco": "2005 - Mas Alla Del Bien Y Del Mal",
        "link": "http://onisedeo.com/1QYf"
    },
    {
        "id_disco": 2478,
        "id": 383,
        "nombre_disco": "2007 - A Talonear",
        "link": "http://onisedeo.com/1QZP"
    },
    {
        "id_disco": 2479,
        "id": 383,
        "nombre_disco": "2009 - El Tri 4 Décadas (En Vivo)",
        "link": "http://onisedeo.com/1QaJ"
    },
    {
        "id_disco": 2480,
        "id": 383,
        "nombre_disco": "2011 - 20 Grandes Exitos",
        "link": "http://onisedeo.com/1Qb7"
    },
    {
        "id_disco": 2481,
        "id": 383,
        "nombre_disco": "2011 - Libertad Incondicional",
        "link": "http://onisedeo.com/1QcC"
    },
    {
        "id_disco": 2482,
        "id": 384,
        "nombre_disco": "2000 - Arroz Con Leche",
        "link": "http://onisedeo.com/Wlk"
    },
    {
        "id_disco": 2483,
        "id": 384,
        "nombre_disco": "2002 - La revancha del príncipe charro",
        "link": "http://onisedeo.com/WmU"
    },
    {
        "id_disco": 2484,
        "id": 384,
        "nombre_disco": "2005 - Para Ti Con Desprecio",
        "link": "http://onisedeo.com/Wn7"
    },
    {
        "id_disco": 2485,
        "id": 384,
        "nombre_disco": "2006 - Panda - Amantes Sunt Amentes",
        "link": "http://onisedeo.com/WpS"
    },
    {
        "id_disco": 2486,
        "id": 384,
        "nombre_disco": "2007 - Sinfonía Soledad",
        "link": "http://onisedeo.com/WqH"
    },
    {
        "id_disco": 2487,
        "id": 384,
        "nombre_disco": "2009 - Poetics",
        "link": "http://onisedeo.com/Wqn"
    },
    {
        "id_disco": 2488,
        "id": 384,
        "nombre_disco": "2010 - Panda MTV Unplugged",
        "link": "http://onisedeo.com/1Phl"
    },
    {
        "id_disco": 2489,
        "id": 384,
        "nombre_disco": "2012 - Bonanza",
        "link": "http://onisedeo.com/1Pj2"
    },
    {
        "id_disco": 2490,
        "id": 384,
        "nombre_disco": "2013 - Sangre Fría",
        "link": "http://onisedeo.com/1Pjf"
    },
    {
        "id_disco": 2491,
        "id": 385,
        "nombre_disco": "2010 - With Ears to See and Eyes to Hear",
        "link": "http://onisedeo.com/WQi"
    },
    {
        "id_disco": 2492,
        "id": 385,
        "nombre_disco": "2011 - Lets Cheers to This",
        "link": "http://onisedeo.com/WRa"
    },
    {
        "id_disco": 2493,
        "id": 385,
        "nombre_disco": "2012 - If You Were a Movie  This Would Be Your Soundtrack",
        "link": "http://onisedeo.com/WSb"
    },
    {
        "id_disco": 2494,
        "id": 385,
        "nombre_disco": "2013 - Feel",
        "link": "http://onisedeo.com/WTc"
    },
    {
        "id_disco": 2495,
        "id": 385,
        "nombre_disco": "2015 - Madness (Deluxe Edition)",
        "link": "http://onisedeo.com/WUJ"
    },
    {
        "id_disco": 2496,
        "id": 385,
        "nombre_disco": "2016 - Live and Unplugged",
        "link": "http://onisedeo.com/WVE"
    },
    {
        "id_disco": 2497,
        "id": 385,
        "nombre_disco": "2017 - Gossip",
        "link": "http://onisedeo.com/WVh"
    },
    {
        "id_disco": 2498,
        "id": 386,
        "nombre_disco": "1981 - Face Value",
        "link": "http://ethobleo.com/3hwt"
    },
    {
        "id_disco": 2499,
        "id": 386,
        "nombre_disco": "1982 - Hello  I Must Be Going!",
        "link": "http://ethobleo.com/3hxO"
    },
    {
        "id_disco": 2500,
        "id": 386,
        "nombre_disco": "1985 - No Jacket Required",
        "link": "http://ethobleo.com/3hyD"
    },
    {
        "id_disco": 2501,
        "id": 386,
        "nombre_disco": "1987 - 12ers",
        "link": "http://ethobleo.com/3hys"
    },
    {
        "id_disco": 2502,
        "id": 386,
        "nombre_disco": "1988 - A Groovy Kind of Love (single)",
        "link": "http://ethobleo.com/3hzS"
    },
    {
        "id_disco": 2503,
        "id": 386,
        "nombre_disco": "1988 - In The Air Tonight 88 Remix (single)",
        "link": "http://ethobleo.com/3i05"
    },
    {
        "id_disco": 2504,
        "id": 386,
        "nombre_disco": "1989 - …But Seriously",
        "link": "http://ethobleo.com/3i0d"
    },
    {
        "id_disco": 2505,
        "id": 386,
        "nombre_disco": "1993 - Both Sides",
        "link": "http://ethobleo.com/3i1R"
    },
    {
        "id_disco": 2506,
        "id": 386,
        "nombre_disco": "1994 - Greatest Hits",
        "link": "http://ethobleo.com/3i2D"
    },
    {
        "id_disco": 2507,
        "id": 386,
        "nombre_disco": "1994 - Live From The Board-Official Bootleg",
        "link": "http://ethobleo.com/3i2t"
    },
    {
        "id_disco": 2508,
        "id": 386,
        "nombre_disco": "1996 - Dance Into The Light",
        "link": "http://ethobleo.com/3i3f"
    },
    {
        "id_disco": 2509,
        "id": 386,
        "nombre_disco": "1996 - Dance Lessons  The DITL Demos",
        "link": "http://ethobleo.com/3iQR"
    },
    {
        "id_disco": 2510,
        "id": 386,
        "nombre_disco": "1996 - Rarities A & B Sides (1982-1996)",
        "link": "http://ethobleo.com/3iR7"
    },
    {
        "id_disco": 2511,
        "id": 386,
        "nombre_disco": "1998 - Live and Loose in Paris",
        "link": "http://ethobleo.com/3iRo"
    },
    {
        "id_disco": 2512,
        "id": 386,
        "nombre_disco": "1998 - Phil Collins  Gary Moore & Rod Argent - Wild Connections",
        "link": "http://ethobleo.com/3iSl"
    },
    {
        "id_disco": 2513,
        "id": 386,
        "nombre_disco": "1999 - A Hot Night In Paris",
        "link": "http://ethobleo.com/3iTg"
    },
    {
        "id_disco": 2514,
        "id": 386,
        "nombre_disco": "2002 - Testify",
        "link": "http://ethobleo.com/3iUe"
    },
    {
        "id_disco": 2515,
        "id": 386,
        "nombre_disco": "2003 - Brother Bear",
        "link": "http://ethobleo.com/3iVC"
    },
    {
        "id_disco": 2516,
        "id": 386,
        "nombre_disco": "2004 - Finally... The First Farewell Tour",
        "link": "http://ethobleo.com/3iVX"
    },
    {
        "id_disco": 2517,
        "id": 386,
        "nombre_disco": "2004 - Love Songs a Compilation Old And New",
        "link": "http://ethobleo.com/3iW4"
    },
    {
        "id_disco": 2518,
        "id": 386,
        "nombre_disco": "2010 - Going Back",
        "link": "http://ethobleo.com/3iWv"
    },
    {
        "id_disco": 2519,
        "id": 386,
        "nombre_disco": "2011 - The Lost Album & Demos",
        "link": "http://ethobleo.com/3iXh"
    },
    {
        "id_disco": 2520,
        "id": 386,
        "nombre_disco": "2016 - The Singles (3CD Box Set)",
        "link": "http://ethobleo.com/3iYE"
    },
    {
        "id_disco": 2521,
        "id": 387,
        "nombre_disco": "[1976] - Ramones (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gjL"
    },
    {
        "id_disco": 2522,
        "id": 387,
        "nombre_disco": "[1977] - Leave Home (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gkP"
    },
    {
        "id_disco": 2523,
        "id": 387,
        "nombre_disco": "[1977] - Rocket To Russia (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gnJ"
    },
    {
        "id_disco": 2524,
        "id": 387,
        "nombre_disco": "[1978] - Road To Ruin (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gpU"
    },
    {
        "id_disco": 2525,
        "id": 387,
        "nombre_disco": "[1979] - Its Alive (Live)",
        "link": "http://ethobleo.com/3gq5"
    },
    {
        "id_disco": 2526,
        "id": 387,
        "nombre_disco": "[1980] - End Of The Century (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gr3"
    },
    {
        "id_disco": 2527,
        "id": 387,
        "nombre_disco": "[1981] - Pleasant Dreams (Expanded & Remastered)",
        "link": "http://ethobleo.com/3grz"
    },
    {
        "id_disco": 2528,
        "id": 387,
        "nombre_disco": "[1982] - The Chinese Wall [Live]",
        "link": "http://ethobleo.com/3gsc"
    },
    {
        "id_disco": 2529,
        "id": 387,
        "nombre_disco": "[1983] - Subterranean Jungle",
        "link": "http://ethobleo.com/3gtE"
    },
    {
        "id_disco": 2530,
        "id": 387,
        "nombre_disco": "[1984] - Too Tough To Die (Expanded & Remastered)",
        "link": "http://ethobleo.com/3gth"
    },
    {
        "id_disco": 2531,
        "id": 387,
        "nombre_disco": "[1986] - Animal Boy",
        "link": "http://ethobleo.com/3guL"
    },
    {
        "id_disco": 2532,
        "id": 387,
        "nombre_disco": "[1987] - Halfway To Sanity",
        "link": "http://ethobleo.com/3gus"
    },
    {
        "id_disco": 2533,
        "id": 387,
        "nombre_disco": "[1988] - Ramones Mania (Remastered)",
        "link": "http://ethobleo.com/3gvi"
    },
    {
        "id_disco": 2534,
        "id": 387,
        "nombre_disco": "[1989] - Brain Drain",
        "link": "http://ethobleo.com/3gwC"
    },
    {
        "id_disco": 2535,
        "id": 387,
        "nombre_disco": "[1990] - All the Stuff (And More!) Vol. 1",
        "link": "http://ethobleo.com/3gwp"
    },
    {
        "id_disco": 2536,
        "id": 387,
        "nombre_disco": "[1990] - All the Stuff (And More!) Vol. 2",
        "link": "http://ethobleo.com/3gxo"
    },
    {
        "id_disco": 2537,
        "id": 387,
        "nombre_disco": "[1991] - Loco Live [Live]",
        "link": "http://ethobleo.com/3gyF"
    },
    {
        "id_disco": 2538,
        "id": 387,
        "nombre_disco": "[1992] - Mondo Bizarro",
        "link": "http://ethobleo.com/3gyo"
    },
    {
        "id_disco": 2539,
        "id": 387,
        "nombre_disco": "[1993] - Acid Eaters",
        "link": "http://ethobleo.com/3gzm"
    },
    {
        "id_disco": 2540,
        "id": 387,
        "nombre_disco": "[1995] - Adios Amigos",
        "link": "http://ethobleo.com/3h1I"
    },
    {
        "id_disco": 2541,
        "id": 387,
        "nombre_disco": "[1996] - Greatest Hits Live",
        "link": "http://ethobleo.com/3h1j"
    },
    {
        "id_disco": 2542,
        "id": 387,
        "nombre_disco": "[1997] - Were Outta Here!",
        "link": "http://ethobleo.com/3h2O"
    },
    {
        "id_disco": 2543,
        "id": 387,
        "nombre_disco": "[1999] - Anthology",
        "link": "http://ethobleo.com/3h31"
    },
    {
        "id_disco": 2544,
        "id": 387,
        "nombre_disco": "[2002] - Best Of The Chrysalis Years",
        "link": "http://ethobleo.com/3h3Z"
    },
    {
        "id_disco": 2545,
        "id": 387,
        "nombre_disco": "[2002] - Ramones Mania 2 (Remastered)",
        "link": "http://ethobleo.com/3h49"
    },
    {
        "id_disco": 2546,
        "id": 387,
        "nombre_disco": "[2003] - NYC 1978 (Live)",
        "link": "http://ethobleo.com/3h4a"
    },
    {
        "id_disco": 2547,
        "id": 388,
        "nombre_disco": "1959 - 50 000 000 Elvis Fans Can’t Be Wrong",
        "link": "http://ethobleo.com/3g4p"
    },
    {
        "id_disco": 2548,
        "id": 388,
        "nombre_disco": "1961 - Blue Hawaii (remastered)",
        "link": "http://ethobleo.com/3g7N"
    },
    {
        "id_disco": 2549,
        "id": 388,
        "nombre_disco": "1964 - Double Feature Viva Las Vegas And Roustabout",
        "link": "http://ethobleo.com/3g8p"
    },
    {
        "id_disco": 2550,
        "id": 388,
        "nombre_disco": "1973 - Aloha From Hawaii Via Satellite",
        "link": "http://ethobleo.com/3g9M"
    },
    {
        "id_disco": 2551,
        "id": 388,
        "nombre_disco": "1974 - As Recorded Live On Stage In Memphis",
        "link": "http://ethobleo.com/3g9t"
    },
    {
        "id_disco": 2552,
        "id": 388,
        "nombre_disco": "1992 - Back In Memphis",
        "link": "http://ethobleo.com/3gB7"
    },
    {
        "id_disco": 2553,
        "id": 388,
        "nombre_disco": "1998 - A Touch Of Platinum - A Life In Music",
        "link": "http://ethobleo.com/3gC5"
    },
    {
        "id_disco": 2554,
        "id": 388,
        "nombre_disco": "1999 - Artist Of The Century",
        "link": "http://ethobleo.com/3gCb"
    },
    {
        "id_disco": 2555,
        "id": 388,
        "nombre_disco": "2002 - Always On My Mind",
        "link": "http://ethobleo.com/3gDS"
    },
    {
        "id_disco": 2556,
        "id": 388,
        "nombre_disco": "2003 - 2nd To None",
        "link": "http://ethobleo.com/3gDv"
    },
    {
        "id_disco": 2557,
        "id": 389,
        "nombre_disco": "1998 - Canción de Alerta",
        "link": "http://ethobleo.com/3X8i"
    },
    {
        "id_disco": 2558,
        "id": 389,
        "nombre_disco": "1999 - Ideas Nuevas",
        "link": "http://ethobleo.com/3X9e"
    },
    {
        "id_disco": 2559,
        "id": 389,
        "nombre_disco": "2001 - Cultura En Vivo",
        "link": "http://ethobleo.com/3XAO"
    },
    {
        "id_disco": 2560,
        "id": 389,
        "nombre_disco": "2002 - Diario",
        "link": "http://ethobleo.com/3XAy"
    },
    {
        "id_disco": 2561,
        "id": 389,
        "nombre_disco": "2005 - M.O.T.A",
        "link": "http://ethobleo.com/3XBb"
    },
    {
        "id_disco": 2562,
        "id": 389,
        "nombre_disco": "2007 - Tribute to the Legend Bob Marley (Live)",
        "link": "http://ethobleo.com/3XCO"
    },
    {
        "id_disco": 2563,
        "id": 389,
        "nombre_disco": "2008 - Reggae En Español",
        "link": "http://ethobleo.com/3XCu"
    },
    {
        "id_disco": 2564,
        "id": 389,
        "nombre_disco": "2010 - La Dulzura",
        "link": "http://ethobleo.com/3XDZ"
    },
    {
        "id_disco": 2565,
        "id": 389,
        "nombre_disco": "2012 - 15 Aniversario en el Luna Park",
        "link": "http://ethobleo.com/3XER"
    },
    {
        "id_disco": 2566,
        "id": 390,
        "nombre_disco": "1983 - Del 63",
        "link": "http://lopoteam.com/4q91"
    },
    {
        "id_disco": 2567,
        "id": 390,
        "nombre_disco": "1985 - Giros",
        "link": "http://lopoteam.com/4q9a"
    },
    {
        "id_disco": 2568,
        "id": 390,
        "nombre_disco": "1986 - Corazón Clandestino",
        "link": "http://lopoteam.com/4qA0"
    },
    {
        "id_disco": 2569,
        "id": 390,
        "nombre_disco": "1986 - La La Lá",
        "link": "http://lopoteam.com/4qBJ"
    },
    {
        "id_disco": 2570,
        "id": 390,
        "nombre_disco": "1987 - Ciudad de Pobres Corazones",
        "link": "http://lopoteam.com/4qCE"
    },
    {
        "id_disco": 2571,
        "id": 390,
        "nombre_disco": "1988 - Ey!",
        "link": "http://lopoteam.com/4qD0"
    },
    {
        "id_disco": 2572,
        "id": 390,
        "nombre_disco": "1990 - Chapa Y Pintura",
        "link": "http://lopoteam.com/4qDe"
    },
    {
        "id_disco": 2573,
        "id": 390,
        "nombre_disco": "1990 - Tercer Mundo",
        "link": "http://lopoteam.com/4qE4"
    },
    {
        "id_disco": 2574,
        "id": 390,
        "nombre_disco": "1993 - El Amor Después del Amor",
        "link": "http://lopoteam.com/4qEn"
    },
    {
        "id_disco": 2575,
        "id": 390,
        "nombre_disco": "1994 - Circo Beat",
        "link": "http://lopoteam.com/4qFH"
    },
    {
        "id_disco": 2576,
        "id": 390,
        "nombre_disco": "1996 - Euforia",
        "link": "http://lopoteam.com/4qFo"
    },
    {
        "id_disco": 2577,
        "id": 390,
        "nombre_disco": "1999 - Abre",
        "link": "http://lopoteam.com/4qGJ"
    },
    {
        "id_disco": 2578,
        "id": 390,
        "nombre_disco": "2000 - Rey Sol",
        "link": "http://lopoteam.com/4qJw"
    },
    {
        "id_disco": 2579,
        "id": 390,
        "nombre_disco": "2003 - Naturaleza Sangre",
        "link": "http://lopoteam.com/4qKh"
    },
    {
        "id_disco": 2580,
        "id": 390,
        "nombre_disco": "2004 - Mi Vida Con Ellas",
        "link": "http://lopoteam.com/4qLk"
    },
    {
        "id_disco": 2581,
        "id": 390,
        "nombre_disco": "2005 - Moda Y Pueblo",
        "link": "http://lopoteam.com/4qMb"
    },
    {
        "id_disco": 2582,
        "id": 390,
        "nombre_disco": "2006 - El mundo cabe en una canción",
        "link": "http://lopoteam.com/4qNa"
    },
    {
        "id_disco": 2583,
        "id": 390,
        "nombre_disco": "2007 - Rodolfo",
        "link": "http://lopoteam.com/4qOW"
    },
    {
        "id_disco": 2584,
        "id": 390,
        "nombre_disco": "2009 - No sé si es Baires o Madrid",
        "link": "http://lopoteam.com/4qOw"
    },
    {
        "id_disco": 2585,
        "id": 390,
        "nombre_disco": "2010 - Confia",
        "link": "http://lopoteam.com/4qPW"
    },
    {
        "id_disco": 2586,
        "id": 390,
        "nombre_disco": "2011 - Canciones Para Aliens",
        "link": "http://lopoteam.com/4qQF"
    },
    {
        "id_disco": 2587,
        "id": 390,
        "nombre_disco": "2013 - Dreaming Rosario",
        "link": "http://lopoteam.com/4qQx"
    },
    {
        "id_disco": 2588,
        "id": 390,
        "nombre_disco": "2013 - El Sacrificio",
        "link": "http://lopoteam.com/4qRn"
    },
    {
        "id_disco": 2589,
        "id": 390,
        "nombre_disco": "2013 - Yo Te Amo",
        "link": "http://lopoteam.com/4qSX"
    },
    {
        "id_disco": 2590,
        "id": 390,
        "nombre_disco": "2014 - Rock And Roll Revolution",
        "link": "http://lopoteam.com/4qTA"
    },
    {
        "id_disco": 2591,
        "id": 391,
        "nombre_disco": "1998 - Thats What People Do",
        "link": "http://lopoteam.com/3xjm"
    },
    {
        "id_disco": 2592,
        "id": 391,
        "nombre_disco": "2001 - Set It Off [Deluxe Edition]",
        "link": "http://lopoteam.com/3xle"
    },
    {
        "id_disco": 2593,
        "id": 391,
        "nombre_disco": "2003 - Phenomenon",
        "link": "http://lopoteam.com/3xmG"
    },
    {
        "id_disco": 2594,
        "id": 391,
        "nombre_disco": "2005 - The Art Of Breaking",
        "link": "http://lopoteam.com/3xmt"
    },
    {
        "id_disco": 2595,
        "id": 391,
        "nombre_disco": "2007 - The Flame In All Of Us",
        "link": "http://lopoteam.com/3xnG"
    },
    {
        "id_disco": 2596,
        "id": 391,
        "nombre_disco": "2011 - Live At The Masquerade",
        "link": "http://lopoteam.com/3xoD"
    },
    {
        "id_disco": 2597,
        "id": 391,
        "nombre_disco": "2011 - Welcome To The Masquerade [Fan Edition]",
        "link": "http://lopoteam.com/3xof"
    },
    {
        "id_disco": 2598,
        "id": 391,
        "nombre_disco": "2012 - Metamorphosiz - The End Remixes Vol. 1 [EP]",
        "link": "http://lopoteam.com/3xpV"
    },
    {
        "id_disco": 2599,
        "id": 391,
        "nombre_disco": "2012 - The End Is Where We Begin",
        "link": "http://lopoteam.com/3xqO"
    },
    {
        "id_disco": 2600,
        "id": 391,
        "nombre_disco": "2013 - Made In Canada - The 1998-2010 Collection",
        "link": "http://lopoteam.com/3xr5"
    },
    {
        "id_disco": 2601,
        "id": 391,
        "nombre_disco": "2013 - Metamorphosiz - The End Remixes Vol. 2 [EP]",
        "link": "http://lopoteam.com/3xrd"
    },
    {
        "id_disco": 2602,
        "id": 391,
        "nombre_disco": "2014 - Oxygen - Inhale",
        "link": "http://lopoteam.com/3xsI"
    },
    {
        "id_disco": 2603,
        "id": 391,
        "nombre_disco": "2016 - Exhale",
        "link": "http://lopoteam.com/3xtF"
    },
    {
        "id_disco": 2604,
        "id": 391,
        "nombre_disco": "2017 - Untraveled Roads [Live]",
        "link": "http://lopoteam.com/3xu2"
    },
    {
        "id_disco": 2605,
        "id": 392,
        "nombre_disco": "1974 - Hotter than hell",
        "link": "http://lopoteam.com/2MuF"
    },
    {
        "id_disco": 2606,
        "id": 392,
        "nombre_disco": "1974 - Kiss",
        "link": "http://lopoteam.com/2MvA"
    },
    {
        "id_disco": 2607,
        "id": 392,
        "nombre_disco": "1975 - Alive!",
        "link": "http://lopoteam.com/2Mvp"
    },
    {
        "id_disco": 2608,
        "id": 392,
        "nombre_disco": "1975 - Dressed to kill",
        "link": "http://lopoteam.com/383N"
    },
    {
        "id_disco": 2609,
        "id": 392,
        "nombre_disco": "1976 - Destroyer",
        "link": "http://lopoteam.com/385k"
    },
    {
        "id_disco": 2610,
        "id": 392,
        "nombre_disco": "1976 - Rock and roll over",
        "link": "http://lopoteam.com/386k"
    },
    {
        "id_disco": 2611,
        "id": 392,
        "nombre_disco": "1977 - Alive II",
        "link": "http://lopoteam.com/38AG"
    },
    {
        "id_disco": 2612,
        "id": 392,
        "nombre_disco": "1977 - Love gun",
        "link": "http://lopoteam.com/38Az"
    },
    {
        "id_disco": 2613,
        "id": 392,
        "nombre_disco": "1978 - Ace Frehley Solo",
        "link": "http://lopoteam.com/38Ba"
    },
    {
        "id_disco": 2614,
        "id": 392,
        "nombre_disco": "1978 - Double Platinum",
        "link": "http://lopoteam.com/38CG"
    },
    {
        "id_disco": 2615,
        "id": 392,
        "nombre_disco": "1978 - Gene Simmons Solo",
        "link": "http://lopoteam.com/38D8"
    },
    {
        "id_disco": 2616,
        "id": 392,
        "nombre_disco": "1978 - Paul Stanley Solo",
        "link": "http://lopoteam.com/38Dz"
    },
    {
        "id_disco": 2617,
        "id": 392,
        "nombre_disco": "1978 - Peter Criss Solo",
        "link": "http://lopoteam.com/38ES"
    },
    {
        "id_disco": 2618,
        "id": 392,
        "nombre_disco": "1979 - Dynasty",
        "link": "http://lopoteam.com/38H7"
    },
    {
        "id_disco": 2619,
        "id": 392,
        "nombre_disco": "1980 - Unmasked",
        "link": "http://lopoteam.com/38Ht"
    },
    {
        "id_disco": 2620,
        "id": 392,
        "nombre_disco": "1981 - Music From The elder",
        "link": "http://lopoteam.com/38J0"
    },
    {
        "id_disco": 2621,
        "id": 392,
        "nombre_disco": "1982 - Creatures of the night",
        "link": "http://lopoteam.com/38JX"
    },
    {
        "id_disco": 2622,
        "id": 392,
        "nombre_disco": "1982 - killers",
        "link": "http://lopoteam.com/38KA"
    },
    {
        "id_disco": 2623,
        "id": 392,
        "nombre_disco": "1983 - Lick it up",
        "link": "http://lopoteam.com/38KZ"
    },
    {
        "id_disco": 2624,
        "id": 392,
        "nombre_disco": "1984 - Animalize",
        "link": "http://lopoteam.com/38LO"
    },
    {
        "id_disco": 2625,
        "id": 392,
        "nombre_disco": "1985 - Asylum",
        "link": "http://lopoteam.com/38Lw"
    },
    {
        "id_disco": 2626,
        "id": 392,
        "nombre_disco": "1987 - Crazy nights",
        "link": "http://lopoteam.com/38MU"
    },
    {
        "id_disco": 2627,
        "id": 392,
        "nombre_disco": "1988 - Chikara",
        "link": "http://lopoteam.com/38N2"
    },
    {
        "id_disco": 2628,
        "id": 392,
        "nombre_disco": "1988 - Smashes  thrashes & hits",
        "link": "http://lopoteam.com/38Nt"
    },
    {
        "id_disco": 2629,
        "id": 392,
        "nombre_disco": "1989 - Hot in the shade",
        "link": "http://lopoteam.com/38OW"
    },
    {
        "id_disco": 2630,
        "id": 392,
        "nombre_disco": "1992 - Revenge",
        "link": "http://lopoteam.com/38PO"
    },
    {
        "id_disco": 2631,
        "id": 392,
        "nombre_disco": "1993 - Alive III",
        "link": "http://lopoteam.com/38Q1"
    },
    {
        "id_disco": 2632,
        "id": 392,
        "nombre_disco": "1995 - MTV Unplugged",
        "link": "http://lopoteam.com/38UP"
    },
    {
        "id_disco": 2633,
        "id": 392,
        "nombre_disco": "1996 - You Wanted The Best  You Got The Best!",
        "link": "http://lopoteam.com/38Ur"
    },
    {
        "id_disco": 2634,
        "id": 392,
        "nombre_disco": "1997 - Carnival Of Souls",
        "link": "http://lopoteam.com/38VS"
    },
    {
        "id_disco": 2635,
        "id": 392,
        "nombre_disco": "1998 - Psycho Circus (2CDs)",
        "link": "http://lopoteam.com/38W2"
    },
    {
        "id_disco": 2636,
        "id": 392,
        "nombre_disco": "2001 - Box Set",
        "link": "http://lopoteam.com/38Wa"
    },
    {
        "id_disco": 2637,
        "id": 392,
        "nombre_disco": "2003 - Sympfony  Alive IV",
        "link": "http://lopoteam.com/38XN"
    },
    {
        "id_disco": 2638,
        "id": 392,
        "nombre_disco": "2005 - Rock The Nation",
        "link": "http://lopoteam.com/38YD"
    },
    {
        "id_disco": 2639,
        "id": 392,
        "nombre_disco": "2008 - Jigoku Retsuden",
        "link": "http://lopoteam.com/38Yt"
    },
    {
        "id_disco": 2640,
        "id": 392,
        "nombre_disco": "2009 - Sonic Boom",
        "link": "http://lopoteam.com/38aO"
    },
    {
        "id_disco": 2641,
        "id": 392,
        "nombre_disco": "2012 - Monster",
        "link": "http://lopoteam.com/38an"
    },
    {
        "id_disco": 2642,
        "id": 392,
        "nombre_disco": "2014 - 40 Years Decades Of Decibels [2CD]",
        "link": "http://lopoteam.com/38bA"
    },
    {
        "id_disco": 2643,
        "id": 392,
        "nombre_disco": "2015 - Greatest Ballads",
        "link": "http://lopoteam.com/38bq"
    },
    {
        "id_disco": 2644,
        "id": 393,
        "nombre_disco": "1980 - Blizzard Of Ozz",
        "link": "http://lopoteam.com/1WWi"
    },
    {
        "id_disco": 2645,
        "id": 393,
        "nombre_disco": "1981 - Diary Of A Madman",
        "link": "http://lopoteam.com/1WXU"
    },
    {
        "id_disco": 2646,
        "id": 393,
        "nombre_disco": "1982 - Speak Of The Devil [Live]",
        "link": "http://lopoteam.com/1WYI"
    },
    {
        "id_disco": 2647,
        "id": 393,
        "nombre_disco": "1983 - Bark At The Moon",
        "link": "http://lopoteam.com/1WYx"
    },
    {
        "id_disco": 2648,
        "id": 393,
        "nombre_disco": "1986 - Live USA",
        "link": "http://lopoteam.com/1WZv"
    },
    {
        "id_disco": 2649,
        "id": 393,
        "nombre_disco": "1986 - The Ultimate Sin",
        "link": "http://lopoteam.com/1Waj"
    },
    {
        "id_disco": 2650,
        "id": 393,
        "nombre_disco": "1987 - Randy Rhoads Tribute [Live]",
        "link": "http://lopoteam.com/1WbT"
    },
    {
        "id_disco": 2651,
        "id": 393,
        "nombre_disco": "1988 - No Rest For The Wicked",
        "link": "http://lopoteam.com/1WcU"
    },
    {
        "id_disco": 2652,
        "id": 393,
        "nombre_disco": "1989 - Best Of Ozz",
        "link": "http://lopoteam.com/1WdQ"
    },
    {
        "id_disco": 2653,
        "id": 393,
        "nombre_disco": "1990 - Just Say Ozzy [EP]",
        "link": "http://lopoteam.com/1WeZ"
    },
    {
        "id_disco": 2654,
        "id": 393,
        "nombre_disco": "1990 - Ten Ten Commandments [Limited Collectors Edition]",
        "link": "http://lopoteam.com/1WfS"
    },
    {
        "id_disco": 2655,
        "id": 393,
        "nombre_disco": "1991 - No More Tears",
        "link": "http://lopoteam.com/1Wg0"
    },
    {
        "id_disco": 2656,
        "id": 393,
        "nombre_disco": "1993 - Live and Loud [Remastered Japanese Edition]",
        "link": "http://lopoteam.com/1Wh4"
    },
    {
        "id_disco": 2657,
        "id": 393,
        "nombre_disco": "1995 - Ozzmosis",
        "link": "http://lopoteam.com/1Whc"
    },
    {
        "id_disco": 2658,
        "id": 393,
        "nombre_disco": "1997 - The Ozzman Cometh (2 CDs)",
        "link": "http://lopoteam.com/1WiG"
    },
    {
        "id_disco": 2659,
        "id": 393,
        "nombre_disco": "2001 - Down To Earth",
        "link": "http://lopoteam.com/1Wjk"
    },
    {
        "id_disco": 2660,
        "id": 393,
        "nombre_disco": "2002 - Live At Budokan",
        "link": "http://lopoteam.com/1Wkl"
    },
    {
        "id_disco": 2661,
        "id": 393,
        "nombre_disco": "2003 - The Essential Ozzy Osbourne (2 CDs)",
        "link": "http://lopoteam.com/1Wld"
    },
    {
        "id_disco": 2662,
        "id": 393,
        "nombre_disco": "2005 - Prince of Darkness (BS)(C1-2)",
        "link": "http://lopoteam.com/1Wma"
    },
    {
        "id_disco": 2663,
        "id": 393,
        "nombre_disco": "2005 - Under Cover",
        "link": "http://lopoteam.com/1WnU"
    },
    {
        "id_disco": 2664,
        "id": 393,
        "nombre_disco": "2007 - Black Rain (2CDs)",
        "link": "http://lopoteam.com/1WoC"
    },
    {
        "id_disco": 2665,
        "id": 393,
        "nombre_disco": "2009 - Greatest Hits (2 CDs)",
        "link": "http://lopoteam.com/1Wp9"
    },
    {
        "id_disco": 2666,
        "id": 393,
        "nombre_disco": "2010 - Scream",
        "link": "http://lopoteam.com/1Wpj"
    },
    {
        "id_disco": 2667,
        "id": 393,
        "nombre_disco": "2014 - Dreamer",
        "link": "http://lopoteam.com/1Wqe"
    },
    {
        "id_disco": 2668,
        "id": 393,
        "nombre_disco": "2014 - Memoirs Of A Madman",
        "link": "http://lopoteam.com/1WrE"
    },
    {
        "id_disco": 2669,
        "id": 393,
        "nombre_disco": "2017 - The Great and Powerfull [Japanese Edition]",
        "link": "http://lopoteam.com/1WsS"
    },
    {
        "id_disco": 2670,
        "id": 393,
        "nombre_disco": "2018 - No More Tours - Live Moscow",
        "link": "http://lopoteam.com/1WtS"
    },
    {
        "id_disco": 2671,
        "id": 394,
        "nombre_disco": "1968 - Shades Of Deep Purple",
        "link": "http://lopoteam.com/Pam"
    },
    {
        "id_disco": 2672,
        "id": 394,
        "nombre_disco": "1968 - The Book of Taliesyn",
        "link": "http://lopoteam.com/Pbi"
    },
    {
        "id_disco": 2673,
        "id": 394,
        "nombre_disco": "1969 - Deep Purple",
        "link": "http://lopoteam.com/PcN"
    },
    {
        "id_disco": 2674,
        "id": 394,
        "nombre_disco": "1970 - In Rock",
        "link": "http://lopoteam.com/PdJ"
    },
    {
        "id_disco": 2675,
        "id": 394,
        "nombre_disco": "1971 - Fireball",
        "link": "http://lopoteam.com/Pds"
    },
    {
        "id_disco": 2676,
        "id": 394,
        "nombre_disco": "1972 - Machine Head",
        "link": "http://lopoteam.com/PeI"
    },
    {
        "id_disco": 2677,
        "id": 394,
        "nombre_disco": "1973 - Who Do We Think We Are",
        "link": "http://lopoteam.com/Pf2"
    },
    {
        "id_disco": 2678,
        "id": 394,
        "nombre_disco": "1974 - Burn",
        "link": "http://lopoteam.com/PfM"
    },
    {
        "id_disco": 2679,
        "id": 394,
        "nombre_disco": "1974 - Stormbringer",
        "link": "http://lopoteam.com/Pfp"
    },
    {
        "id_disco": 2680,
        "id": 394,
        "nombre_disco": "1975 - Come Taste The Band",
        "link": "http://lopoteam.com/Pgu"
    },
    {
        "id_disco": 2681,
        "id": 394,
        "nombre_disco": "1984 - Perfect Strangers",
        "link": "http://lopoteam.com/Piw"
    },
    {
        "id_disco": 2682,
        "id": 394,
        "nombre_disco": "1987 - The House of Blue Light",
        "link": "http://lopoteam.com/PjX"
    },
    {
        "id_disco": 2683,
        "id": 394,
        "nombre_disco": "1990 - Slaves And Masters",
        "link": "http://lopoteam.com/PkS"
    },
    {
        "id_disco": 2684,
        "id": 394,
        "nombre_disco": "1993 - Battle Rages On",
        "link": "http://lopoteam.com/PlB"
    },
    {
        "id_disco": 2685,
        "id": 394,
        "nombre_disco": "1996 - Purpendicular",
        "link": "http://lopoteam.com/Plr"
    },
    {
        "id_disco": 2686,
        "id": 394,
        "nombre_disco": "1998 - Abandon",
        "link": "http://lopoteam.com/PmM"
    },
    {
        "id_disco": 2687,
        "id": 394,
        "nombre_disco": "2003 - Bananas",
        "link": "http://lopoteam.com/Pn7"
    },
    {
        "id_disco": 2688,
        "id": 394,
        "nombre_disco": "2005 - Rapture Of The Deep",
        "link": "http://lopoteam.com/Pnh"
    },
    {
        "id_disco": 2689,
        "id": 394,
        "nombre_disco": "2013 - Now What¿!",
        "link": "http://lopoteam.com/Pop"
    },
    {
        "id_disco": 2690,
        "id": 395,
        "nombre_disco": "1986 - Bares y Fondas",
        "link": "http://twiriock.com/4tJo"
    },
    {
        "id_disco": 2691,
        "id": 395,
        "nombre_disco": "1987 - Yo te avise",
        "link": "http://twiriock.com/4tKa"
    },
    {
        "id_disco": 2692,
        "id": 395,
        "nombre_disco": "1988 - El Ritmo Mundial",
        "link": "http://twiriock.com/4tLX"
    },
    {
        "id_disco": 2693,
        "id": 395,
        "nombre_disco": "1989 - El satanico Dr. Cadillac",
        "link": "http://twiriock.com/4tMl"
    },
    {
        "id_disco": 2694,
        "id": 395,
        "nombre_disco": "1990 - Volumen 5",
        "link": "http://twiriock.com/4tNX"
    },
    {
        "id_disco": 2695,
        "id": 395,
        "nombre_disco": "1991- Sopa de Caracol",
        "link": "http://twiriock.com/4tO6"
    },
    {
        "id_disco": 2696,
        "id": 395,
        "nombre_disco": "1992 - El León",
        "link": "http://twiriock.com/4tOi"
    },
    {
        "id_disco": 2697,
        "id": 395,
        "nombre_disco": "1993 - Vasos Vacios",
        "link": "http://twiriock.com/4tPI"
    },
    {
        "id_disco": 2698,
        "id": 395,
        "nombre_disco": "1995 - Rey Azúcar",
        "link": "http://twiriock.com/4tQC"
    },
    {
        "id_disco": 2699,
        "id": 395,
        "nombre_disco": "1997 - Fabulosos Calavera",
        "link": "http://twiriock.com/4tQm"
    },
    {
        "id_disco": 2700,
        "id": 395,
        "nombre_disco": "1999 - La Marcha del golazo solitario",
        "link": "http://twiriock.com/4tRN"
    },
    {
        "id_disco": 2701,
        "id": 395,
        "nombre_disco": "2008 - La Luz del ritmo",
        "link": "http://twiriock.com/4tRv"
    },
    {
        "id_disco": 2702,
        "id": 395,
        "nombre_disco": "2009 - El arte de la elegancia",
        "link": "http://twiriock.com/4tSK"
    },
    {
        "id_disco": 2703,
        "id": 395,
        "nombre_disco": "2016 - La Salvación de un solo y juan",
        "link": "http://twiriock.com/4tSp"
    },
    {
        "id_disco": 2704,
        "id": 396,
        "nombre_disco": "2007 - No Phun Intended",
        "link": "http://swarife.com/8O9V"
    },
    {
        "id_disco": 2705,
        "id": 397,
        "nombre_disco": "1995 - Maxinquaye",
        "link": "http://swarife.com/7gn8"
    },
    {
        "id_disco": 2706,
        "id": 397,
        "nombre_disco": "1996 - Pre-Millennium Tension",
        "link": "http://swarife.com/7gng"
    },
    {
        "id_disco": 2707,
        "id": 397,
        "nombre_disco": "1998 - Angels With Dirty Faces",
        "link": "http://swarife.com/7go5"
    },
    {
        "id_disco": 2708,
        "id": 397,
        "nombre_disco": "1999 - Juxtapose",
        "link": "http://swarife.com/7goX"
    },
    {
        "id_disco": 2709,
        "id": 397,
        "nombre_disco": "2000 - Mission Accomplished [EP]",
        "link": "http://swarife.com/7gow"
    },
    {
        "id_disco": 2710,
        "id": 397,
        "nombre_disco": "2001 - Blowback",
        "link": "http://swarife.com/7gpG"
    },
    {
        "id_disco": 2711,
        "id": 397,
        "nombre_disco": "2002 - A Ruff Guide",
        "link": "http://swarife.com/7gpt"
    },
    {
        "id_disco": 2712,
        "id": 397,
        "nombre_disco": "2003 - Vulnerable",
        "link": "http://swarife.com/7gqL"
    },
    {
        "id_disco": 2713,
        "id": 397,
        "nombre_disco": "2008 - Knowle West Boy",
        "link": "http://swarife.com/7gqh"
    },
    {
        "id_disco": 2714,
        "id": 397,
        "nombre_disco": "2010 - Mixed Race",
        "link": "http://swarife.com/7gr4"
    },
    {
        "id_disco": 2715,
        "id": 397,
        "nombre_disco": "2013 - False Idols",
        "link": "http://swarife.com/7grO"
    },
    {
        "id_disco": 2716,
        "id": 397,
        "nombre_disco": "2014 - Adrian Thaws",
        "link": "http://swarife.com/7gs9"
    },
    {
        "id_disco": 2717,
        "id": 398,
        "nombre_disco": "2013 - Take Me To Church (EP)",
        "link": "http://swarife.com/7CWs"
    },
    {
        "id_disco": 2718,
        "id": 398,
        "nombre_disco": "2014 - From Eden (EP)",
        "link": "http://swarife.com/7CXW"
    },
    {
        "id_disco": 2719,
        "id": 398,
        "nombre_disco": "2015 - Hozier (US Deluxe Edition)",
        "link": "http://swarife.com/7CY7"
    },
    {
        "id_disco": 2720,
        "id": 398,
        "nombre_disco": "2018 - Nina Cried Power (EP)",
        "link": "http://swarife.com/7CYe"
    },
    {
        "id_disco": 2721,
        "id": 399,
        "nombre_disco": "2018 -Tranquility Base Hotel And Casino",
        "link": "http://zipansion.com/X6WP"
    },
    {
        "id_disco": 2722,
        "id": 400,
        "nombre_disco": "1996 - This is a Long Drive for Someone with Nothing to Think About",
        "link": "http://swarife.com/7BfB"
    },
    {
        "id_disco": 2723,
        "id": 400,
        "nombre_disco": "2000 - The Moon and Antarctica",
        "link": "http://swarife.com/7BgF"
    },
    {
        "id_disco": 2724,
        "id": 400,
        "nombre_disco": "2004 - Good News For People Who Love Bad News",
        "link": "http://swarife.com/7BhH"
    },
    {
        "id_disco": 2725,
        "id": 400,
        "nombre_disco": "2007 - We Were Dead Before The Ship Even Sank",
        "link": "http://swarife.com/7BiH"
    },
    {
        "id_disco": 2726,
        "id": 400,
        "nombre_disco": "2015 - Strangers To Ourselves",
        "link": "http://swarife.com/7BjM"
    },
    {
        "id_disco": 2727,
        "id": 401,
        "nombre_disco": "1997 - My Own Prison",
        "link": "http://raboninco.com/8qqI"
    },
    {
        "id_disco": 2728,
        "id": 401,
        "nombre_disco": "1999 - Human Clay",
        "link": "http://raboninco.com/8qqo"
    },
    {
        "id_disco": 2729,
        "id": 401,
        "nombre_disco": "1997 - My Own Prison",
        "link": "http://swarife.com/7Asz"
    },
    {
        "id_disco": 2730,
        "id": 401,
        "nombre_disco": "1999 - Human Clay",
        "link": "http://swarife.com/7Aty"
    },
    {
        "id_disco": 2731,
        "id": 401,
        "nombre_disco": "2001 - Rarities",
        "link": "http://raboninco.com/8qrD"
    },
    {
        "id_disco": 2732,
        "id": 401,
        "nombre_disco": "2001 - Weathered",
        "link": "http://raboninco.com/8qrd"
    },
    {
        "id_disco": 2733,
        "id": 401,
        "nombre_disco": "2002 - Acoustics & Rarities",
        "link": "http://raboninco.com/8qs7"
    },
    {
        "id_disco": 2734,
        "id": 401,
        "nombre_disco": "2004 - Greatest Hits",
        "link": "http://raboninco.com/8qt6"
    },
    {
        "id_disco": 2735,
        "id": 401,
        "nombre_disco": "2001 - Weathered",
        "link": "http://swarife.com/7Aui"
    },
    {
        "id_disco": 2736,
        "id": 401,
        "nombre_disco": "2004 - Greatest Hits",
        "link": "http://swarife.com/7AvV"
    },
    {
        "id_disco": 2737,
        "id": 401,
        "nombre_disco": "2005 - The Great Divide",
        "link": "http://swarife.com/7AwE"
    },
    {
        "id_disco": 2738,
        "id": 401,
        "nombre_disco": "2009 - Full Circle",
        "link": "http://swarife.com/7Awj"
    },
    {
        "id_disco": 2739,
        "id": 401,
        "nombre_disco": "2009 - Live In Houston",
        "link": "http://raboninco.com/8qul"
    },
    {
        "id_disco": 2740,
        "id": 402,
        "nombre_disco": "1997 - OnlySee",
        "link": "http://swarife.com/6EC0"
    },
    {
        "id_disco": 2741,
        "id": 402,
        "nombre_disco": "2001 - Healing Is Difficult (UK Edition)",
        "link": "http://swarife.com/6ECt"
    },
    {
        "id_disco": 2742,
        "id": 402,
        "nombre_disco": "2004 - Colour the Small One",
        "link": "http://swarife.com/6EDk"
    },
    {
        "id_disco": 2743,
        "id": 402,
        "nombre_disco": "2007 - Lady Croissant (US Edition)",
        "link": "http://swarife.com/6EES"
    },
    {
        "id_disco": 2744,
        "id": 402,
        "nombre_disco": "2008 - Some People Have Real Problems",
        "link": "http://swarife.com/6EFV"
    },
    {
        "id_disco": 2745,
        "id": 402,
        "nombre_disco": "2010 - We Are Born",
        "link": "http://swarife.com/6EG9"
    },
    {
        "id_disco": 2746,
        "id": 402,
        "nombre_disco": "2014 - 1000 Forms of Fear",
        "link": "http://swarife.com/6EH1"
    },
    {
        "id_disco": 2747,
        "id": 402,
        "nombre_disco": "2016 - This Is Acting",
        "link": "http://swarife.com/6EIR"
    },
    {
        "id_disco": 2748,
        "id": 402,
        "nombre_disco": "2017 - Everyday is Christmas",
        "link": "http://swarife.com/6EJC"
    },
    {
        "id_disco": 2749,
        "id": 403,
        "nombre_disco": "1977 - Never Mind the Bollocks  Heres the Sex Pistols",
        "link": "http://swarife.com/6Cso"
    },
    {
        "id_disco": 2750,
        "id": 403,
        "nombre_disco": "1977 - Spunk",
        "link": "http://swarife.com/6CtK"
    },
    {
        "id_disco": 2751,
        "id": 403,
        "nombre_disco": "1979 - Some Product - Carri on Sex Pistols (Speech Album)",
        "link": "http://swarife.com/6Ctd"
    },
    {
        "id_disco": 2752,
        "id": 403,
        "nombre_disco": "1979 - The Great Rock N Roll Swindle (UK Version)",
        "link": "http://swarife.com/6Cu4"
    },
    {
        "id_disco": 2753,
        "id": 403,
        "nombre_disco": "1980 - Flogging A Dead Horse",
        "link": "http://swarife.com/6CuU"
    },
    {
        "id_disco": 2754,
        "id": 403,
        "nombre_disco": "1985 - Anarchy in the U.K. - Live at the 76 Club",
        "link": "http://swarife.com/6Cvd"
    },
    {
        "id_disco": 2755,
        "id": 403,
        "nombre_disco": "1992 - Kiss This",
        "link": "http://swarife.com/6CwP"
    },
    {
        "id_disco": 2756,
        "id": 403,
        "nombre_disco": "1996 - Filthy Lucre Live",
        "link": "http://swarife.com/6CxD"
    },
    {
        "id_disco": 2757,
        "id": 403,
        "nombre_disco": "2002 - Jubilee",
        "link": "http://swarife.com/6CyR"
    },
    {
        "id_disco": 2758,
        "id": 403,
        "nombre_disco": "2002 - Sex Pistols - Box Set",
        "link": "http://swarife.com/6Cys"
    },
    {
        "id_disco": 2759,
        "id": 403,
        "nombre_disco": "2004 - Raw and Live",
        "link": "http://swarife.com/6Czk"
    },
    {
        "id_disco": 2760,
        "id": 404,
        "nombre_disco": "1997 - Homework",
        "link": "http://swarife.com/5VH9"
    },
    {
        "id_disco": 2761,
        "id": 404,
        "nombre_disco": "2001 - Discovery",
        "link": "http://swarife.com/5VHw"
    },
    {
        "id_disco": 2762,
        "id": 404,
        "nombre_disco": "2003 - Daft Club",
        "link": "http://swarife.com/5VIe"
    },
    {
        "id_disco": 2763,
        "id": 404,
        "nombre_disco": "2005 - Human After All",
        "link": "http://swarife.com/5VJk"
    },
    {
        "id_disco": 2764,
        "id": 404,
        "nombre_disco": "2007 - Alive",
        "link": "http://swarife.com/5VLi"
    },
    {
        "id_disco": 2765,
        "id": 404,
        "nombre_disco": "2010 - Tron Legacy",
        "link": "http://swarife.com/5VMM"
    },
    {
        "id_disco": 2766,
        "id": 404,
        "nombre_disco": "2013 - Random Access Memories",
        "link": "http://swarife.com/5W8Q"
    },
    {
        "id_disco": 2767,
        "id": 405,
        "nombre_disco": "2005 - The Poison (Re-Issue 2006)",
        "link": "http://dapalan.com/SBdO"
    },
    {
        "id_disco": 2768,
        "id": 405,
        "nombre_disco": "2008 - Scream Aim Fire (Deluxe Edition)",
        "link": "http://dapalan.com/SBf7"
    },
    {
        "id_disco": 2769,
        "id": 405,
        "nombre_disco": "2010 - Fever",
        "link": "http://dapalan.com/SBfl"
    },
    {
        "id_disco": 2770,
        "id": 405,
        "nombre_disco": "2013 - Temper Temper (Deluxe Edition)",
        "link": "http://dapalan.com/SBi4"
    },
    {
        "id_disco": 2771,
        "id": 405,
        "nombre_disco": "2015 - Venom",
        "link": "http://dapalan.com/SBiw"
    },
    {
        "id_disco": 2772,
        "id": 405,
        "nombre_disco": "2018 - Gravity",
        "link": "http://dapalan.com/SBjg"
    },
    {
        "id_disco": 2773,
        "id": 406,
        "nombre_disco": "2001 - Revolution Revolución",
        "link": "http://dapalan.com/RI9y"
    },
    {
        "id_disco": 2774,
        "id": 406,
        "nombre_disco": "2003 - Confession",
        "link": "http://dapalan.com/RIBJ"
    },
    {
        "id_disco": 2775,
        "id": 406,
        "nombre_disco": "2005 - One Nation Underground",
        "link": "http://dapalan.com/RICS"
    },
    {
        "id_disco": 2776,
        "id": 406,
        "nombre_disco": "2008 - Enigma",
        "link": "http://dapalan.com/RIDA"
    },
    {
        "id_disco": 2777,
        "id": 406,
        "nombre_disco": "2010 - Dead New World",
        "link": "http://dapalan.com/RIFz"
    },
    {
        "id_disco": 2778,
        "id": 406,
        "nombre_disco": "2012 - Epidemia",
        "link": "http://dapalan.com/RIH5"
    },
    {
        "id_disco": 2779,
        "id": 406,
        "nombre_disco": "2014 - Till Death  La Familia",
        "link": "http://dapalan.com/RIHk"
    },
    {
        "id_disco": 2780,
        "id": 407,
        "nombre_disco": "2002 - The All American Rejects",
        "link": "http://sapolatsu.com/u0f"
    },
    {
        "id_disco": 2781,
        "id": 407,
        "nombre_disco": "2005 - Move Along",
        "link": "http://sapolatsu.com/u2A"
    },
    {
        "id_disco": 2782,
        "id": 407,
        "nombre_disco": "2008 - When The World Comes Down",
        "link": "http://sapolatsu.com/u3C"
    },
    {
        "id_disco": 2783,
        "id": 407,
        "nombre_disco": "2012 - Kids in the Street",
        "link": "http://sapolatsu.com/u4E"
    },
    {
        "id_disco": 2784,
        "id": 408,
        "nombre_disco": "1998 - Straight Edge Crew",
        "link": "http://turboagram.com/AhFa"
    },
    {
        "id_disco": 2785,
        "id": 408,
        "nombre_disco": "1999 - Once Upon A Time",
        "link": "http://turboagram.com/AhGj"
    },
    {
        "id_disco": 2786,
        "id": 408,
        "nombre_disco": "2000 - See Through Their Lies",
        "link": "http://turboagram.com/AhIU"
    },
    {
        "id_disco": 2787,
        "id": 408,
        "nombre_disco": "2001 - People That Bleed (EP)",
        "link": "http://turboagram.com/AhKA"
    },
    {
        "id_disco": 2788,
        "id": 408,
        "nombre_disco": "2001 - We Came Here For Fun",
        "link": "http://turboagram.com/AhLK"
    },
    {
        "id_disco": 2789,
        "id": 408,
        "nombre_disco": "2002 - Down The Drain",
        "link": "http://turboagram.com/AhMP"
    },
    {
        "id_disco": 2790,
        "id": 408,
        "nombre_disco": "2003 - Random Violence",
        "link": "http://turboagram.com/AhN2"
    },
    {
        "id_disco": 2791,
        "id": 408,
        "nombre_disco": "2004 - Bad Trip",
        "link": "http://turboagram.com/AhNi"
    },
    {
        "id_disco": 2792,
        "id": 408,
        "nombre_disco": "2005 - Pissed Off - A VX Collection",
        "link": "http://turboagram.com/AhOl"
    },
    {
        "id_disco": 2793,
        "id": 408,
        "nombre_disco": "2005 - Rip It Out (EP)",
        "link": "http://turboagram.com/AhPw"
    },
    {
        "id_disco": 2794,
        "id": 408,
        "nombre_disco": "2008 - Full Scale Assault",
        "link": "http://turboagram.com/AhQg"
    },
    {
        "id_disco": 2795,
        "id": 409,
        "nombre_disco": "1977 - 77",
        "link": "http://turboagram.com/4Z3f"
    },
    {
        "id_disco": 2796,
        "id": 409,
        "nombre_disco": "1978 - More Songs About Buildings And Food",
        "link": "http://turboagram.com/4Z4Z"
    },
    {
        "id_disco": 2797,
        "id": 409,
        "nombre_disco": "1979 - Fear Of Music",
        "link": "http://turboagram.com/4Z59"
    },
    {
        "id_disco": 2798,
        "id": 409,
        "nombre_disco": "1980 - Remain In Light",
        "link": "http://turboagram.com/4Z5w"
    },
    {
        "id_disco": 2799,
        "id": 409,
        "nombre_disco": "1983 - Speaking In Tongues",
        "link": "http://turboagram.com/4Z6T"
    },
    {
        "id_disco": 2800,
        "id": 409,
        "nombre_disco": "1985 - Little Creatures",
        "link": "http://turboagram.com/4Z7R"
    },
    {
        "id_disco": 2801,
        "id": 409,
        "nombre_disco": "1986 - True Stories",
        "link": "http://turboagram.com/4Z95"
    },
    {
        "id_disco": 2802,
        "id": 409,
        "nombre_disco": "1988 - Naked",
        "link": "http://turboagram.com/4ZAC"
    },
    {
        "id_disco": 2803,
        "id": 409,
        "nombre_disco": "2004 - The Best Of",
        "link": "http://turboagram.com/4ZB5"
    },
    {
        "id_disco": 2804,
        "id": 409,
        "nombre_disco": "2006 - Bonus Rarities & Outtakes",
        "link": "http://turboagram.com/4ZKY"
    },
    {
        "id_disco": 2805,
        "id": 410,
        "nombre_disco": "2008 - 2018 Singles",
        "link": "http://turboagram.com/3H1X"
    },
    {
        "id_disco": 2806,
        "id": 410,
        "nombre_disco": "2008 - Barrel Of Batteries",
        "link": "http://turboagram.com/3H3D"
    },
    {
        "id_disco": 2807,
        "id": 410,
        "nombre_disco": "2008 - Wagonwheel Blues",
        "link": "http://turboagram.com/3H43"
    },
    {
        "id_disco": 2808,
        "id": 410,
        "nombre_disco": "2010 - Future Weather",
        "link": "http://turboagram.com/3H5K"
    },
    {
        "id_disco": 2809,
        "id": 410,
        "nombre_disco": "2011 - Slave Ambient",
        "link": "http://turboagram.com/3H6K"
    },
    {
        "id_disco": 2810,
        "id": 410,
        "nombre_disco": "2014 - Lost In The Dream",
        "link": "http://turboagram.com/3H7P"
    },
    {
        "id_disco": 2811,
        "id": 410,
        "nombre_disco": "2017 - A Deeper Understanding",
        "link": "http://turboagram.com/3H8z"
    },
    {
        "id_disco": 2812,
        "id": 411,
        "nombre_disco": "2003 - The Bedroom Sessions",
        "link": "http://turboagram.com/2MQf"
    },
    {
        "id_disco": 2813,
        "id": 411,
        "nombre_disco": "2005 - This Is What The Edge Of Your Seat Was Made For",
        "link": "http://turboagram.com/2MRm"
    },
    {
        "id_disco": 2814,
        "id": 411,
        "nombre_disco": "2006 - Count Your Blessings",
        "link": "http://turboagram.com/2MSl"
    },
    {
        "id_disco": 2815,
        "id": 411,
        "nombre_disco": "2008 - Suicide Season",
        "link": "http://turboagram.com/2MUH"
    },
    {
        "id_disco": 2816,
        "id": 411,
        "nombre_disco": "2009 - Suicide Season Cut Up!",
        "link": "http://turboagram.com/2MVV"
    },
    {
        "id_disco": 2817,
        "id": 411,
        "nombre_disco": "2010 - There Is A Hell  Believe Me Ive Seen It. There Is A Heaven  Lets Keep It A Secret",
        "link": "http://turboagram.com/2MX8"
    },
    {
        "id_disco": 2818,
        "id": 411,
        "nombre_disco": "2012 - The Chill Out Sessions",
        "link": "http://turboagram.com/2MYv"
    },
    {
        "id_disco": 2819,
        "id": 411,
        "nombre_disco": "2013 - Sempiternal",
        "link": "http://turboagram.com/2Ma0"
    },
    {
        "id_disco": 2820,
        "id": 411,
        "nombre_disco": "2015 - Thats the Spirit",
        "link": "http://turboagram.com/2Mb6"
    },
    {
        "id_disco": 2821,
        "id": 411,
        "nombre_disco": "2019 - Amo",
        "link": "http://locinealy.com/21U2"
    },
    {
        "id_disco": 2822,
        "id": 412,
        "nombre_disco": "1983 - Care",
        "link": "http://stratoplot.com/675b"
    },
    {
        "id_disco": 2823,
        "id": 412,
        "nombre_disco": "1984 - Jam Science",
        "link": "http://stratoplot.com/676j"
    },
    {
        "id_disco": 2824,
        "id": 412,
        "nombre_disco": "1985 - Oil and Gold [Deluxe 2011]",
        "link": "http://stratoplot.com/678E"
    },
    {
        "id_disco": 2825,
        "id": 412,
        "nombre_disco": "1986 - Big Night Music [Remastered]",
        "link": "http://stratoplot.com/67A7"
    },
    {
        "id_disco": 2826,
        "id": 412,
        "nombre_disco": "1986 - Gunning For The Buddha",
        "link": "http://stratoplot.com/67At"
    },
    {
        "id_disco": 2827,
        "id": 412,
        "nombre_disco": "1988 - Go Bang!",
        "link": "http://stratoplot.com/67Cd"
    },
    {
        "id_disco": 2828,
        "id": 412,
        "nombre_disco": "2015 - Without Real String or Fish",
        "link": "http://stratoplot.com/67Dg"
    },
    {
        "id_disco": 2829,
        "id": 413,
        "nombre_disco": "2008 - Speak To Me [EP]",
        "link": "http://stratoplot.com/4EHb"
    },
    {
        "id_disco": 2830,
        "id": 413,
        "nombre_disco": "2009 - Imagine Dragons[EP]",
        "link": "http://stratoplot.com/4EJT"
    },
    {
        "id_disco": 2831,
        "id": 413,
        "nombre_disco": "2010 - Hell And Silence[EP]",
        "link": "http://stratoplot.com/4EKA"
    },
    {
        "id_disco": 2832,
        "id": 413,
        "nombre_disco": "2011 - Its Time[EP]",
        "link": "http://stratoplot.com/4ELi"
    },
    {
        "id_disco": 2833,
        "id": 413,
        "nombre_disco": "Night Visions (2012)",
        "link": "http://zipansion.com/GNkP"
    },
    {
        "id_disco": 2834,
        "id": 413,
        "nombre_disco": "2012 - Continued Silence[EP]",
        "link": "http://stratoplot.com/4EMS"
    },
    {
        "id_disco": 2835,
        "id": 413,
        "nombre_disco": "2012 - Hear Me[EP]",
        "link": "http://stratoplot.com/4ENB"
    },
    {
        "id_disco": 2836,
        "id": 413,
        "nombre_disco": "2012 - Its Time Remixes[EP]",
        "link": "http://stratoplot.com/4EO2"
    },
    {
        "id_disco": 2837,
        "id": 413,
        "nombre_disco": "2012 - Night Visions [Deluxe Edition]",
        "link": "http://stratoplot.com/4EQH"
    },
    {
        "id_disco": 2838,
        "id": 413,
        "nombre_disco": "2013 - iTunes Session[EP]",
        "link": "http://stratoplot.com/4ER4"
    },
    {
        "id_disco": 2839,
        "id": 413,
        "nombre_disco": "2013 - The Archive[EP]",
        "link": "http://stratoplot.com/4ERm"
    },
    {
        "id_disco": 2840,
        "id": 413,
        "nombre_disco": "Smoke + Mirrors (2015)",
        "link": "http://zipansion.com/GNly"
    },
    {
        "id_disco": 2841,
        "id": 413,
        "nombre_disco": "Evolve (2017)",
        "link": "http://zipansion.com/GNnu"
    },
    {
        "id_disco": 2842,
        "id": 413,
        "nombre_disco": "2018 - Origins [Deluxe Edition]",
        "link": "http://stratoplot.com/4ESX"
    },
    {
        "id_disco": 2843,
        "id": 414,
        "nombre_disco": "1999 - The White Stripes",
        "link": "http://stratoplot.com/3OrZ"
    },
    {
        "id_disco": 2844,
        "id": 414,
        "nombre_disco": "2000 - De Stijl",
        "link": "http://stratoplot.com/3OsQ"
    },
    {
        "id_disco": 2845,
        "id": 414,
        "nombre_disco": "2001 - White Blood Cells",
        "link": "http://stratoplot.com/3OtM"
    },
    {
        "id_disco": 2846,
        "id": 414,
        "nombre_disco": "2003 - Elephant",
        "link": "http://stratoplot.com/3OuK"
    },
    {
        "id_disco": 2847,
        "id": 414,
        "nombre_disco": "2005 - Get Behind Me Satan",
        "link": "http://stratoplot.com/3OvK"
    },
    {
        "id_disco": 2848,
        "id": 414,
        "nombre_disco": "2005 - Walking With A Ghost [EP]",
        "link": "http://stratoplot.com/3OwE"
    },
    {
        "id_disco": 2849,
        "id": 414,
        "nombre_disco": "2007 - Icky Thump",
        "link": "http://stratoplot.com/3Owq"
    },
    {
        "id_disco": 2850,
        "id": 414,
        "nombre_disco": "2010 - Under Great White Northern Lights [Live]",
        "link": "http://stratoplot.com/3Oy7"
    },
    {
        "id_disco": 2851,
        "id": 414,
        "nombre_disco": "2011 - Live In Mississippi",
        "link": "http://stratoplot.com/3Oyp"
    },
    {
        "id_disco": 2852,
        "id": 415,
        "nombre_disco": "2010 - The Ocean Way Sessions - EP",
        "link": "http://stratoplot.com/2VLG"
    },
    {
        "id_disco": 2853,
        "id": 415,
        "nombre_disco": "2011 - Lovestrong (Deluxe Version)",
        "link": "http://stratoplot.com/2VM7"
    },
    {
        "id_disco": 2854,
        "id": 415,
        "nombre_disco": "2011 - The Karaoke Collection - EP",
        "link": "http://stratoplot.com/2VMe"
    },
    {
        "id_disco": 2855,
        "id": 415,
        "nombre_disco": "2012 - A Thousand Years - Single",
        "link": "http://stratoplot.com/2VNA"
    },
    {
        "id_disco": 2856,
        "id": 415,
        "nombre_disco": "2012 - A Very Merry Perri Christmas - EP",
        "link": "http://stratoplot.com/2VNy"
    },
    {
        "id_disco": 2857,
        "id": 415,
        "nombre_disco": "2013 - Human (Official Karaoke Version) - Single",
        "link": "http://stratoplot.com/2VOV"
    },
    {
        "id_disco": 2858,
        "id": 415,
        "nombre_disco": "2014 - Head Or Heart",
        "link": "http://stratoplot.com/2VP3"
    },
    {
        "id_disco": 2859,
        "id": 416,
        "nombre_disco": "2004: The Red Jumpsuit Apparatus",
        "link": "http://stratoplot.com/1Z2S"
    },
    {
        "id_disco": 2860,
        "id": 416,
        "nombre_disco": "2006: AOL Sessions Under Cover",
        "link": "http://stratoplot.com/1Z64"
    },
    {
        "id_disco": 2861,
        "id": 416,
        "nombre_disco": "2006: Demos",
        "link": "http://stratoplot.com/1Z7z"
    },
    {
        "id_disco": 2862,
        "id": 416,
        "nombre_disco": "2007: Dont You Fake It (Deluxe Edition)",
        "link": "http://stratoplot.com/1Z9Z"
    },
    {
        "id_disco": 2863,
        "id": 416,
        "nombre_disco": "2009: Lonely Road",
        "link": "http://stratoplot.com/1ZBM"
    },
    {
        "id_disco": 2864,
        "id": 416,
        "nombre_disco": "2010: The Hell or High Water [EP]",
        "link": "http://stratoplot.com/1ZCS"
    },
    {
        "id_disco": 2865,
        "id": 416,
        "nombre_disco": "2011: Am I The Enemy",
        "link": "http://stratoplot.com/1ZE5"
    },
    {
        "id_disco": 2866,
        "id": 416,
        "nombre_disco": "2013: Et Tu Brute?",
        "link": "http://stratoplot.com/1ZEb"
    },
    {
        "id_disco": 2867,
        "id": 416,
        "nombre_disco": "83.9194444444444",
        "link": "http://stratoplot.com/1ZF5"
    },
    {
        "id_disco": 2868,
        "id": 416,
        "nombre_disco": "2018: The Awakening",
        "link": "http://stratoplot.com/1ZlK"
    },
    {
        "id_disco": 2869,
        "id": 417,
        "nombre_disco": "1984: G.I.T.",
        "link": "http://metastead.com/5l1q"
    },
    {
        "id_disco": 2870,
        "id": 417,
        "nombre_disco": "1985: GIT Volumen 2",
        "link": "http://metastead.com/5l3E"
    },
    {
        "id_disco": 2871,
        "id": 417,
        "nombre_disco": "1986: GIT Volumen 3",
        "link": "http://metastead.com/5l3h"
    },
    {
        "id_disco": 2872,
        "id": 417,
        "nombre_disco": "1988: Primera sangre",
        "link": "http://metastead.com/5l4L"
    },
    {
        "id_disco": 2873,
        "id": 417,
        "nombre_disco": "1992: Distorsión",
        "link": "http://metastead.com/5l4t"
    },
    {
        "id_disco": 2874,
        "id": 417,
        "nombre_disco": "1994: El Album",
        "link": "http://metastead.com/5l83"
    },
    {
        "id_disco": 2875,
        "id": 417,
        "nombre_disco": "1996: Serie ABC (Grandes Éxitos)",
        "link": "http://metastead.com/5l9m"
    },
    {
        "id_disco": 2876,
        "id": 417,
        "nombre_disco": "2002: Gold",
        "link": "http://metastead.com/5lAw"
    },
    {
        "id_disco": 2877,
        "id": 417,
        "nombre_disco": "2004: Aire De Todos - Antología 1984-1986",
        "link": "http://metastead.com/5lBs"
    },
    {
        "id_disco": 2878,
        "id": 418,
        "nombre_disco": "Consuelo en domingo (2005)",
        "link": "http://metastead.com/5jte"
    },
    {
        "id_disco": 2879,
        "id": 418,
        "nombre_disco": "El segundo es felino (2008)",
        "link": "http://metastead.com/5juc"
    },
    {
        "id_disco": 2880,
        "id": 418,
        "nombre_disco": "Daltónico (Deluxe Edition)(2010)",
        "link": "http://metastead.com/5jv1"
    },
    {
        "id_disco": 2881,
        "id": 418,
        "nombre_disco": "Huéspedes del orbe (2012)",
        "link": "http://metastead.com/5jwo"
    },
    {
        "id_disco": 2882,
        "id": 418,
        "nombre_disco": "Proaño (2014)",
        "link": "http://metastead.com/5jy1"
    },
    {
        "id_disco": 2883,
        "id": 418,
        "nombre_disco": "Imperfecto Extraño (2017)",
        "link": "http://metastead.com/5jz0"
    },
    {
        "id_disco": 2884,
        "id": 419,
        "nombre_disco": "Holy Diver (1983)",
        "link": "http://metastead.com/4MXl"
    },
    {
        "id_disco": 2885,
        "id": 419,
        "nombre_disco": "The Last in Line (1984) ",
        "link": "http://metastead.com/4MYw"
    },
    {
        "id_disco": 2886,
        "id": 419,
        "nombre_disco": "Sacred Heart (1985)",
        "link": "http://metastead.com/4MaN"
    },
    {
        "id_disco": 2887,
        "id": 419,
        "nombre_disco": "Intermission (1986) ",
        "link": "http://metastead.com/4MbV"
    },
    {
        "id_disco": 2888,
        "id": 419,
        "nombre_disco": "Dream Evil (1987)",
        "link": "http://metastead.com/4Mcz"
    },
    {
        "id_disco": 2889,
        "id": 419,
        "nombre_disco": "Lock up the Wolves (1990) ",
        "link": "http://metastead.com/4MeB"
    },
    {
        "id_disco": 2890,
        "id": 419,
        "nombre_disco": "Strange Highways (1993)",
        "link": "http://metastead.com/4Mf0"
    },
    {
        "id_disco": 2891,
        "id": 419,
        "nombre_disco": "Angry Machines (1996)",
        "link": "http://metastead.com/4Mfk"
    },
    {
        "id_disco": 2892,
        "id": 419,
        "nombre_disco": "Magica (2000)",
        "link": "http://metastead.com/4Mhj"
    },
    {
        "id_disco": 2893,
        "id": 419,
        "nombre_disco": "Killing the Dragon (2002) ",
        "link": "http://metastead.com/4Mj2"
    },
    {
        "id_disco": 2894,
        "id": 419,
        "nombre_disco": "Master of the Moon (2004)",
        "link": "http://metastead.com/4MkG"
    },
    {
        "id_disco": 2895,
        "id": 420,
        "nombre_disco": "2018 - Cosmic",
        "link": "http://metastead.com/31LU"
    },
    {
        "id_disco": 2896,
        "id": 421,
        "nombre_disco": "2002 - Eye to Eye",
        "link": "http://metastead.com/1KnZ"
    },
    {
        "id_disco": 2897,
        "id": 421,
        "nombre_disco": "2004 - Artcore",
        "link": "http://metastead.com/1Kod"
    },
    {
        "id_disco": 2898,
        "id": 421,
        "nombre_disco": "2008 - One Step Ahead",
        "link": "http://metastead.com/1Kqj"
    },
    {
        "id_disco": 2899,
        "id": 421,
        "nombre_disco": "2010 - Red Means Distortion",
        "link": "http://metastead.com/1KsY"
    },
    {
        "id_disco": 2900,
        "id": 421,
        "nombre_disco": "2016 - He Art",
        "link": "http://metastead.com/1Kta"
    },
    {
        "id_disco": 2901,
        "id": 422,
        "nombre_disco": "2002: Let Go",
        "link": "http://turboagram.com/mVR"
    },
    {
        "id_disco": 2902,
        "id": 422,
        "nombre_disco": "2002 - The Angus Drive [EP]",
        "link": "http://turboagram.com/mYt"
    },
    {
        "id_disco": 2903,
        "id": 422,
        "nombre_disco": "2003 - My World [EP]",
        "link": "http://turboagram.com/mZU"
    },
    {
        "id_disco": 2904,
        "id": 422,
        "nombre_disco": "2004: Under My Skin",
        "link": "http://metastead.com/cCO"
    },
    {
        "id_disco": 2905,
        "id": 422,
        "nombre_disco": "2007: The Best Damn Thing",
        "link": "http://metastead.com/kwI"
    },
    {
        "id_disco": 2906,
        "id": 422,
        "nombre_disco": "2011: Goodbye Lullaby (Deluxe Edition)",
        "link": "http://metastead.com/kxo"
    },
    {
        "id_disco": 2907,
        "id": 422,
        "nombre_disco": "2013: Avril Lavigne",
        "link": "http://metastead.com/kzP"
    },
    {
        "id_disco": 2908,
        "id": 422,
        "nombre_disco": "2019 - Head Above Water",
        "link": "http://locinealy.com/21Fd"
    },
    {
        "id_disco": 2909,
        "id": 423,
        "nombre_disco": "2015 - 143 (Deluxe Edition)",
        "link": "http://zipansion.com/41eVU"
    },
    {
        "id_disco": 2910,
        "id": 423,
        "nombre_disco": "2017 - Generation Z",
        "link": "http://zipansion.com/41eWK"
    },
    {
        "id_disco": 2911,
        "id": 424,
        "nombre_disco": "Leisure (1991)",
        "link": "http://zipansion.com/41P67"
    },
    {
        "id_disco": 2912,
        "id": 424,
        "nombre_disco": "Modern Life Is Rubbish (1993)",
        "link": "http://zipansion.com/41P6y"
    },
    {
        "id_disco": 2913,
        "id": 424,
        "nombre_disco": "Parklife (1994)",
        "link": "http://zipansion.com/41P8A"
    },
    {
        "id_disco": 2914,
        "id": 424,
        "nombre_disco": "The Special Collectors Edition (1994)",
        "link": "http://zipansion.com/41P8x"
    },
    {
        "id_disco": 2915,
        "id": 424,
        "nombre_disco": "The Great Escape (1995)",
        "link": "http://zipansion.com/41PBY"
    },
    {
        "id_disco": 2916,
        "id": 424,
        "nombre_disco": "Blur (1997)",
        "link": "http://zipansion.com/41PCL"
    },
    {
        "id_disco": 2917,
        "id": 424,
        "nombre_disco": "Essential Blur (1997)",
        "link": "http://zipansion.com/41PDj"
    },
    {
        "id_disco": 2918,
        "id": 424,
        "nombre_disco": "10th Anniversary Box Set (1999)",
        "link": "http://zipansion.com/41PF7"
    },
    {
        "id_disco": 2919,
        "id": 424,
        "nombre_disco": "13 (1999)",
        "link": "http://zipansion.com/41PMz"
    },
    {
        "id_disco": 2920,
        "id": 424,
        "nombre_disco": "Think Tank (2003)",
        "link": "http://zipansion.com/41PNn"
    },
    {
        "id_disco": 2921,
        "id": 424,
        "nombre_disco": "The Magic Whip (2015)",
        "link": "http://zipansion.com/41PPM"
    },
    {
        "id_disco": 2922,
        "id": 425,
        "nombre_disco": "1982 - Witching Metal (Demo)",
        "link": "http://zipansion.com/40dBg"
    },
    {
        "id_disco": 2923,
        "id": 425,
        "nombre_disco": "1984 - Victims Of Death (Demo)",
        "link": "http://zipansion.com/40dDf"
    },
    {
        "id_disco": 2924,
        "id": 425,
        "nombre_disco": "1986 - Obsessed by Cruelty",
        "link": "http://zipansion.com/40dEd"
    },
    {
        "id_disco": 2925,
        "id": 425,
        "nombre_disco": "1987 - Expurse of Sodomy (EP)",
        "link": "http://zipansion.com/40dEs"
    },
    {
        "id_disco": 2926,
        "id": 425,
        "nombre_disco": "1987 - Persecution Mania",
        "link": "http://zipansion.com/40dGS"
    },
    {
        "id_disco": 2927,
        "id": 425,
        "nombre_disco": "1988 - Mortal Way Of Live",
        "link": "http://zipansion.com/40dHz"
    },
    {
        "id_disco": 2928,
        "id": 425,
        "nombre_disco": "1989 - Agent Orange",
        "link": "http://zipansion.com/40dKo"
    },
    {
        "id_disco": 2929,
        "id": 425,
        "nombre_disco": "1989 - Ausgebombt (EP)",
        "link": "http://zipansion.com/40dLp"
    },
    {
        "id_disco": 2930,
        "id": 425,
        "nombre_disco": "1990 - Better Off Dead",
        "link": "http://zipansion.com/40dNL"
    },
    {
        "id_disco": 2931,
        "id": 425,
        "nombre_disco": "1991 - The Saw Is The Law (EP)",
        "link": "http://zipansion.com/40dNr"
    },
    {
        "id_disco": 2932,
        "id": 425,
        "nombre_disco": "1992 - Tapping The Vein",
        "link": "http://zipansion.com/40dPY"
    },
    {
        "id_disco": 2933,
        "id": 425,
        "nombre_disco": "1993 - Aber Bitte Mit Sahne (EP)",
        "link": "http://zipansion.com/40dQH"
    },
    {
        "id_disco": 2934,
        "id": 425,
        "nombre_disco": "1994 - Get What You Deserve",
        "link": "http://zipansion.com/40dRv"
    },
    {
        "id_disco": 2935,
        "id": 425,
        "nombre_disco": "1995 - Masquerade in Blood",
        "link": "http://zipansion.com/40dSW"
    },
    {
        "id_disco": 2936,
        "id": 425,
        "nombre_disco": "1996 - The Black Years",
        "link": "http://zipansion.com/40dU6"
    },
    {
        "id_disco": 2937,
        "id": 425,
        "nombre_disco": "1997 - Til Death Do Us Unite",
        "link": "http://zipansion.com/40dVa"
    },
    {
        "id_disco": 2938,
        "id": 425,
        "nombre_disco": "1999 - Code Red",
        "link": "http://zipansion.com/40dVz"
    },
    {
        "id_disco": 2939,
        "id": 425,
        "nombre_disco": "2002 - M-16",
        "link": "http://zipansion.com/40dWG"
    },
    {
        "id_disco": 2940,
        "id": 425,
        "nombre_disco": "2003 - One Night In Bangkok",
        "link": "http://zipansion.com/40dXA"
    },
    {
        "id_disco": 2941,
        "id": 425,
        "nombre_disco": "2006 - Sodom",
        "link": "http://zipansion.com/40dZ6"
    },
    {
        "id_disco": 2942,
        "id": 425,
        "nombre_disco": "2007 - The Final Sign of Evil",
        "link": "http://zipansion.com/40dZS"
    },
    {
        "id_disco": 2943,
        "id": 425,
        "nombre_disco": "2010 - In War and Pieces",
        "link": "http://zipansion.com/40dZw"
    },
    {
        "id_disco": 2944,
        "id": 425,
        "nombre_disco": "2013 - Epitome of Torture",
        "link": "http://zipansion.com/40dbC"
    },
    {
        "id_disco": 2945,
        "id": 425,
        "nombre_disco": "2014 - Sacred Warpath (EP)",
        "link": "http://zipansion.com/40dcF"
    },
    {
        "id_disco": 2946,
        "id": 425,
        "nombre_disco": "2016 - Days of Retribution (EP)",
        "link": "http://zipansion.com/40ddO"
    },
    {
        "id_disco": 2947,
        "id": 425,
        "nombre_disco": "2016 - Decision Day",
        "link": "http://zipansion.com/40dfu"
    },
    {
        "id_disco": 2948,
        "id": 426,
        "nombre_disco": "1996 - La flaca",
        "link": "http://zipansion.com/3jMTl"
    },
    {
        "id_disco": 2949,
        "id": 426,
        "nombre_disco": "1998 - Depende",
        "link": "http://zipansion.com/3jMUD"
    },
    {
        "id_disco": 2950,
        "id": 426,
        "nombre_disco": "2001 - De vuelta y vuelta",
        "link": "http://zipansion.com/3jMVD"
    },
    {
        "id_disco": 2951,
        "id": 426,
        "nombre_disco": "2003 - Bonito",
        "link": "http://zipansion.com/3jMVo"
    },
    {
        "id_disco": 2952,
        "id": 426,
        "nombre_disco": "2003 - Grandes Éxitos",
        "link": "http://zipansion.com/3jMXE"
    },
    {
        "id_disco": 2953,
        "id": 426,
        "nombre_disco": "2004 - 1 m²",
        "link": "http://zipansion.com/3jMZd"
    },
    {
        "id_disco": 2954,
        "id": 426,
        "nombre_disco": "2007 - Adelantando",
        "link": "http://zipansion.com/3jMZw"
    },
    {
        "id_disco": 2955,
        "id": 426,
        "nombre_disco": "2009 - Orquesta reciclando",
        "link": "http://zipansion.com/3jMac"
    },
    {
        "id_disco": 2956,
        "id": 426,
        "nombre_disco": "2011 - ¿Y ahora qué hacemos?",
        "link": "http://zipansion.com/3jMbY"
    },
    {
        "id_disco": 2957,
        "id": 426,
        "nombre_disco": "2014 - Somos",
        "link": "http://zipansion.com/3jMc8"
    },
    {
        "id_disco": 2958,
        "id": 426,
        "nombre_disco": "2017 - 50 palos",
        "link": "http://zipansion.com/3jMcg"
    },
    {
        "id_disco": 2959,
        "id": 427,
        "nombre_disco": "Es reiten die Toten so schnell (Demo tape) (1989-1991)",
        "link": "http://zipansion.com/3hcIz"
    },
    {
        "id_disco": 2960,
        "id": 427,
        "nombre_disco": "…Ich töte mich… (1994)",
        "link": "http://zipansion.com/3hcOS"
    },
    {
        "id_disco": 2961,
        "id": 427,
        "nombre_disco": "Jekura - Deep The Eternal Forest (1995)",
        "link": "http://zipansion.com/3hcSB"
    },
    {
        "id_disco": 2962,
        "id": 427,
        "nombre_disco": "Ehjeh Ascher Ehjeh (1995)",
        "link": "http://zipansion.com/3hcWR"
    },
    {
        "id_disco": 2963,
        "id": 427,
        "nombre_disco": "Todeswunsch - Sous le soleil de Saturne (1995)",
        "link": "http://zipansion.com/3hcUl"
    },
    {
        "id_disco": 2964,
        "id": 427,
        "nombre_disco": "Voyager - The Jugglers of Jusa (1997)",
        "link": "http://zipansion.com/3hcYl"
    },
    {
        "id_disco": 2965,
        "id": 427,
        "nombre_disco": "The inexperienced Spiral Traveller (aus dem Schoß der Hölle ward geboren die Totensonne) (1997)",
        "link": "http://zipansion.com/3hcX3"
    },
    {
        "id_disco": 2966,
        "id": 427,
        "nombre_disco": "Dead Lovers Sarabande (Face One) (1999)",
        "link": "http://zipansion.com/3hcaI"
    },
    {
        "id_disco": 2967,
        "id": 427,
        "nombre_disco": "Dead Lovers Sarabande (Face Two) (1999)",
        "link": "http://zipansion.com/3hcbN"
    },
    {
        "id_disco": 2968,
        "id": 427,
        "nombre_disco": "Songs from the inverted Womb (2000)",
        "link": "http://zipansion.com/3hcbo"
    },
    {
        "id_disco": 2969,
        "id": 427,
        "nombre_disco": "Nenia cAlladan (2002)",
        "link": "http://zipansion.com/3hceV"
    },
    {
        "id_disco": 2970,
        "id": 427,
        "nombre_disco": "Es reiten die Toten so schnell (or: the Vampyre sucking at his own Vein) (2003)",
        "link": "http://zipansion.com/3hcgd"
    },
    {
        "id_disco": 2971,
        "id": 427,
        "nombre_disco": "Flowers in Formaldehyde (2004)",
        "link": "http://zipansion.com/3hck1"
    },
    {
        "id_disco": 2972,
        "id": 427,
        "nombre_disco": "La Chambre DEcho - Where the death birds sing(2004)",
        "link": "http://zipansion.com/3hcip"
    },
    {
        "id_disco": 2973,
        "id": 427,
        "nombre_disco": "Like A Corpse Standing In Desperation (2005)",
        "link": "http://zipansion.com/3hckf"
    },
    {
        "id_disco": 2974,
        "id": 427,
        "nombre_disco": "The Goat - The Bells Have Stopped Ringing - Limited Edition (2005)",
        "link": "http://zipansion.com/3hcon"
    },
    {
        "id_disco": 2975,
        "id": 427,
        "nombre_disco": "Les Fleurs du Mal - Die Blumen des Bösen (2007)",
        "link": "http://zipansion.com/3hcrt"
    },
    {
        "id_disco": 2976,
        "id": 427,
        "nombre_disco": "Sanatorium Altrosa (Musical Therapy for spiritual Dysfunction) (2008)",
        "link": "http://zipansion.com/3hctc"
    },
    {
        "id_disco": 2977,
        "id": 427,
        "nombre_disco": "The Goat and Other Re-Animated Bodies (2008)",
        "link": "http://zipansion.com/3hcuy"
    },
    {
        "id_disco": 2978,
        "id": 427,
        "nombre_disco": "A Strange Thing 2 Say (A Triptychon of Ghosts or El Sexorcismo de Anna Varney Cantodea ) (2010)",
        "link": "http://zipansion.com/3hcyV"
    },
    {
        "id_disco": 2979,
        "id": 427,
        "nombre_disco": "Have you seen this Ghost? (A Triptychon of Ghosts or El Sexorcismo de Anna Varney Cantodea ) (2011)",
        "link": "http://zipansion.com/3hczV"
    },
    {
        "id_disco": 2980,
        "id": 427,
        "nombre_disco": "Imhotep (2011)",
        "link": "http://zipansion.com/3hd16"
    },
    {
        "id_disco": 2981,
        "id": 427,
        "nombre_disco": "Children of the Corn (A Triptychon of Ghosts or El Sexorcismo de Anna Varney Cantodea ) (2011)",
        "link": "http://zipansion.com/3hd3p"
    },
    {
        "id_disco": 2982,
        "id": 427,
        "nombre_disco": "Poetica - All Beauty Sleeps (2013)",
        "link": "http://zipansion.com/3hd4k"
    },
    {
        "id_disco": 2983,
        "id": 427,
        "nombre_disco": "Mitternacht (2014)",
        "link": "http://zipansion.com/3hgZj"
    },
    {
        "id_disco": 2984,
        "id": 427,
        "nombre_disco": "The Spiral Sacrifice (2018)",
        "link": "http://zipansion.com/3hgrw"
    },
    {
        "id_disco": 2985,
        "id": 428,
        "nombre_disco": "Toloache pa mi negra (1997).",
        "link": "http://zipansion.com/3gMy7"
    },
    {
        "id_disco": 2986,
        "id": 428,
        "nombre_disco": "A la izquierda de la Tierra (1999).",
        "link": "http://zipansion.com/3gMyo"
    },
    {
        "id_disco": 2987,
        "id": 428,
        "nombre_disco": "Compañeros musicales (2002).",
        "link": "http://zipansion.com/3gMzN"
    },
    {
        "id_disco": 2988,
        "id": 428,
        "nombre_disco": "Tres veces tres (2004).",
        "link": "http://zipansion.com/3gMzo"
    },
    {
        "id_disco": 2989,
        "id": 428,
        "nombre_disco": "Un Panteón Muy Vivo (2006).",
        "link": "http://zipansion.com/3gN0s"
    },
    {
        "id_disco": 2990,
        "id": 428,
        "nombre_disco": "Panteón Rococó (2007).",
        "link": "http://zipansion.com/3gN3C"
    },
    {
        "id_disco": 2991,
        "id": 428,
        "nombre_disco": "Ejército de paz (2010).",
        "link": "http://zipansion.com/3gN3s"
    },
    {
        "id_disco": 2992,
        "id": 428,
        "nombre_disco": "Ni carne ni pescado (2012).",
        "link": "http://zipansion.com/3gN4v"
    },
    {
        "id_disco": 2993,
        "id": 428,
        "nombre_disco": "Frente A Frente (2014).",
        "link": "http://zipansion.com/3gN68"
    },
    {
        "id_disco": 2994,
        "id": 428,
        "nombre_disco": "XX Años (Vivo) (2016).",
        "link": "http://zipansion.com/3gNGA"
    },
    {
        "id_disco": 2995,
        "id": 429,
        "nombre_disco": "2016 - Annx Dxmini",
        "link": "http://zipansion.com/3eWLF"
    },
    {
        "id_disco": 2996,
        "id": 429,
        "nombre_disco": "2016 - Rxse",
        "link": "http://zipansion.com/3eWPI"
    },
    {
        "id_disco": 2997,
        "id": 429,
        "nombre_disco": "2016 - ?????",
        "link": "http://zipansion.com/3eWQm"
    },
    {
        "id_disco": 2998,
        "id": 429,
        "nombre_disco": "2017 - Cabin Fever",
        "link": "http://zipansion.com/3eWRc"
    },
    {
        "id_disco": 2999,
        "id": 429,
        "nombre_disco": "2017 - Chaxsthexry",
        "link": "http://zipansion.com/3eWTv"
    },
    {
        "id_disco": 3000,
        "id": 429,
        "nombre_disco": "2017 - Lxrdszn",
        "link": "http://zipansion.com/3eWVG"
    },
    {
        "id_disco": 3001,
        "id": 429,
        "nombre_disco": "2018 - Dxxm",
        "link": "http://zipansion.com/3eWWe"
    },
    {
        "id_disco": 3002,
        "id": 430,
        "nombre_disco": "Crashings (2004)",
        "link": "http://zipansion.com/3Z34I"
    },
    {
        "id_disco": 3003,
        "id": 430,
        "nombre_disco": "Dawn Escapes (2005)",
        "link": "http://zipansion.com/3Z34o"
    },
    {
        "id_disco": 3004,
        "id": 430,
        "nombre_disco": "Exit Lights (2006)",
        "link": "http://zipansion.com/3Z35O"
    },
    {
        "id_disco": 3005,
        "id": 430,
        "nombre_disco": "Captiva (2007)",
        "link": "http://zipansion.com/3Z363"
    },
    {
        "id_disco": 3006,
        "id": 430,
        "nombre_disco": "Discover the Trees Again: The Best of Falling Up (2008)",
        "link": "http://zipansion.com/3Z36u"
    },
    {
        "id_disco": 3007,
        "id": 430,
        "nombre_disco": "Fangs! (2009)",
        "link": "http://zipansion.com/3Z38C"
    },
    {
        "id_disco": 3008,
        "id": 430,
        "nombre_disco": "Your Sparkling Death Cometh (2011)",
        "link": "http://zipansion.com/3Z39C"
    },
    {
        "id_disco": 3009,
        "id": 430,
        "nombre_disco": "Mnemos EP (2012)",
        "link": "http://zipansion.com/3Z39y"
    },
    {
        "id_disco": 3010,
        "id": 430,
        "nombre_disco": "Hours (2013)",
        "link": "http://zipansion.com/3Z3B0"
    },
    {
        "id_disco": 3011,
        "id": 430,
        "nombre_disco": "Midnight on Earthship (2013)",
        "link": "http://zipansion.com/3Z3Ba"
    },
    {
        "id_disco": 3012,
        "id": 430,
        "nombre_disco": "Silver City (2013)",
        "link": "http://zipansion.com/3Z3CD"
    },
    {
        "id_disco": 3013,
        "id": 430,
        "nombre_disco": "Falling Up [Acoustic] EP (2015)",
        "link": "http://zipansion.com/3cS7e"
    },
    {
        "id_disco": 3014,
        "id": 430,
        "nombre_disco": "Falling Up (2015)",
        "link": "http://zipansion.com/3cS6e"
    },
    {
        "id_disco": 3015,
        "id": 430,
        "nombre_disco": "Passenger - Runaway (2018)",
        "link": "http://zipansion.com/3Z7wi"
    },
    {
        "id_disco": 3016,
        "id": 431,
        "nombre_disco": "2001 - Death - Pierce Me (Silencer)",
        "link": "http://zipansion.com/3Z4lc"
    },
    {
        "id_disco": 3017,
        "id": 431,
        "nombre_disco": "2007 - Transformalin (Diagnose Lebensgefahr)",
        "link": "http://zipansion.com/3Z4om"
    },
    {
        "id_disco": 3018,
        "id": 431,
        "nombre_disco": "2012 - Ödelagt (Trencadis)",
        "link": "http://zipansion.com/3Z4pz"
    },
    {
        "id_disco": 3019,
        "id": 432,
        "nombre_disco": "Sausage Demo (1988)",
        "link": "http://zipansion.com/3W9Nr"
    },
    {
        "id_disco": 3020,
        "id": 432,
        "nombre_disco": "Suck on this [Live] (Remastered 2002) (1989)",
        "link": "http://zipansion.com/3W9QP"
    },
    {
        "id_disco": 3021,
        "id": 432,
        "nombre_disco": "Frizzle Fry (1990)",
        "link": "http://zipansion.com/3W9TK"
    },
    {
        "id_disco": 3022,
        "id": 432,
        "nombre_disco": "Sailing the Seas of Cheese (1991)",
        "link": "http://zipansion.com/3W9Tz"
    },
    {
        "id_disco": 3023,
        "id": 432,
        "nombre_disco": "Miscellaneous Debris (1992)",
        "link": "http://zipansion.com/3W9Ua"
    },
    {
        "id_disco": 3024,
        "id": 432,
        "nombre_disco": "Pork Soda (1993)",
        "link": "http://zipansion.com/3W9XW"
    },
    {
        "id_disco": 3025,
        "id": 432,
        "nombre_disco": "[Sausage] Riddles Are Abound Tonight (1994)",
        "link": "http://zipansion.com/3W9YA"
    },
    {
        "id_disco": 3026,
        "id": 432,
        "nombre_disco": "Tales from the Punchbowl (1995)",
        "link": "http://zipansion.com/3W9aU"
    },
    {
        "id_disco": 3027,
        "id": 432,
        "nombre_disco": "Brown Album (1997)",
        "link": "http://zipansion.com/3W9ba"
    },
    {
        "id_disco": 3028,
        "id": 432,
        "nombre_disco": "Rhinoplasty (1998)",
        "link": "http://zipansion.com/3W9cH"
    },
    {
        "id_disco": 3029,
        "id": 432,
        "nombre_disco": "Antipop (1999)",
        "link": "http://zipansion.com/3W9dF"
    },
    {
        "id_disco": 3030,
        "id": 432,
        "nombre_disco": "Animals Should Not Try To Act Like People (2003)",
        "link": "http://zipansion.com/3W9ef"
    },
    {
        "id_disco": 3031,
        "id": 432,
        "nombre_disco": "They Cant All Be Zingers (2006)",
        "link": "http://zipansion.com/3W9gN"
    },
    {
        "id_disco": 3032,
        "id": 432,
        "nombre_disco": "June 2010 Rehearsal (2010)",
        "link": "http://zipansion.com/3W9iG"
    },
    {
        "id_disco": 3033,
        "id": 432,
        "nombre_disco": "Green Naugahyde (2011)",
        "link": "http://zipansion.com/3W9kc"
    },
    {
        "id_disco": 3034,
        "id": 432,
        "nombre_disco": "Primus & the Chocolate Factory with the Fungi Ensemble (2014)",
        "link": "http://zipansion.com/3W9lB"
    },
    {
        "id_disco": 3035,
        "id": 432,
        "nombre_disco": "The Desaturating Seven (2017)",
        "link": "http://zipansion.com/3WAaI"
    },
    {
        "id_disco": 3036,
        "id": 433,
        "nombre_disco": "Ready (EP)",
        "link": "http://zipansion.com/3OHSu"
    },
    {
        "id_disco": 3037,
        "id": 433,
        "nombre_disco": "Human (Single)",
        "link": "http://zipansion.com/3OHRI"
    },
    {
        "id_disco": 3038,
        "id": 433,
        "nombre_disco": "Golden Years (Single)",
        "link": "http://zipansion.com/3OHN1"
    },
    {
        "id_disco": 3039,
        "id": 434,
        "nombre_disco": "1999 - Metamorphosis",
        "link": "http://zipansion.com/3JI23"
    },
    {
        "id_disco": 3040,
        "id": 434,
        "nombre_disco": "2000 - Original Superman",
        "link": "http://zipansion.com/3JI40"
    },
    {
        "id_disco": 3041,
        "id": 434,
        "nombre_disco": "2000 - Above",
        "link": "http://zipansion.com/3JI37"
    },
    {
        "id_disco": 3042,
        "id": 434,
        "nombre_disco": "2002 - Fireproof",
        "link": "http://zipansion.com/3JI4e"
    },
    {
        "id_disco": 3043,
        "id": 434,
        "nombre_disco": "2004 - In The Name Of Love - Artists United For Africa",
        "link": "http://zipansion.com/3JI5d"
    },
    {
        "id_disco": 3044,
        "id": 434,
        "nombre_disco": "2004 - Where Do We Go From Here",
        "link": "http://zipansion.com/3JI7g"
    },
    {
        "id_disco": 3045,
        "id": 434,
        "nombre_disco": "2006 - Nothing Comes For Free (EP)",
        "link": "http://zipansion.com/3JI98"
    },
    {
        "id_disco": 3046,
        "id": 434,
        "nombre_disco": "2006 - The Reckoning",
        "link": "http://zipansion.com/3JIAB"
    },
    {
        "id_disco": 3047,
        "id": 434,
        "nombre_disco": "2008 - For the Love of the Game",
        "link": "http://zipansion.com/3JIB3"
    },
    {
        "id_disco": 3048,
        "id": 434,
        "nombre_disco": "2009 - Confessions",
        "link": "http://zipansion.com/3JICE"
    },
    {
        "id_disco": 3049,
        "id": 434,
        "nombre_disco": "2014 - Lion Leads The Way (Single)",
        "link": "http://zipansion.com/3JIDP"
    },
    {
        "id_disco": 3050,
        "id": 434,
        "nombre_disco": "2015 - One Love Revolution",
        "link": "http://zipansion.com/3JIFr"
    },
    {
        "id_disco": 3051,
        "id": 435,
        "nombre_disco": "1989 - Historias Parte I",
        "link": "http://zipansion.com/3JHWW"
    },
    {
        "id_disco": 3052,
        "id": 435,
        "nombre_disco": "1994 - Entre La Arena Y La Luna",
        "link": "http://zipansion.com/3JHYy"
    },
    {
        "id_disco": 3053,
        "id": 435,
        "nombre_disco": "1997 - Al Quinto Día",
        "link": "http://zipansion.com/3JHaA"
    },
    {
        "id_disco": 3054,
        "id": 435,
        "nombre_disco": "1997 - Señora Cuénteme",
        "link": "http://zipansion.com/3JHby"
    },
    {
        "id_disco": 3055,
        "id": 435,
        "nombre_disco": "2002 - A Tiempo",
        "link": "http://zipansion.com/3JHdI"
    },
    {
        "id_disco": 3056,
        "id": 435,
        "nombre_disco": "2004 - Resucitar",
        "link": "http://zipansion.com/3JHew"
    },
    {
        "id_disco": 3057,
        "id": 435,
        "nombre_disco": "2006 - 8",
        "link": "http://zipansion.com/3JHgS"
    },
    {
        "id_disco": 3058,
        "id": 435,
        "nombre_disco": "2006 - Grandes Éxitos",
        "link": "http://zipansion.com/3JHh7"
    },
    {
        "id_disco": 3059,
        "id": 435,
        "nombre_disco": "2008 - Desde Adentro",
        "link": "http://zipansion.com/3JHiv"
    },
    {
        "id_disco": 3060,
        "id": 435,
        "nombre_disco": "2011 - Días Nuevos",
        "link": "http://zipansion.com/3JHkf"
    },
    {
        "id_disco": 3061,
        "id": 435,
        "nombre_disco": "2012 - 20 Años",
        "link": "http://zipansion.com/3JHle"
    },
    {
        "id_disco": 3062,
        "id": 435,
        "nombre_disco": "2013 - Versiones",
        "link": "http://zipansion.com/3JHmj"
    },
    {
        "id_disco": 3063,
        "id": 436,
        "nombre_disco": "2017 - Closer EP",
        "link": "http://zipansion.com/3JHCw"
    },
    {
        "id_disco": 3064,
        "id": 436,
        "nombre_disco": "2017 - Our Journey EP",
        "link": "http://zipansion.com/3JHEY"
    },
    {
        "id_disco": 3065,
        "id": 436,
        "nombre_disco": "2017 - Wisdom EP",
        "link": "http://zipansion.com/3JHFv"
    },
    {
        "id_disco": 3066,
        "id": 436,
        "nombre_disco": "2018 - Brussels EP",
        "link": "http://zipansion.com/3JHIY"
    },
    {
        "id_disco": 3067,
        "id": 436,
        "nombre_disco": "2018 - Heart of Mine EP",
        "link": "http://zipansion.com/3JHJu"
    },
    {
        "id_disco": 3068,
        "id": 436,
        "nombre_disco": "2018 - The Healer EP",
        "link": "http://zipansion.com/3JHLe"
    },
    {
        "id_disco": 3069,
        "id": 437,
        "nombre_disco": "2003 - 76",
        "link": "http://zipansion.com/3JGs9"
    },
    {
        "id_disco": 3070,
        "id": 437,
        "nombre_disco": "2005 - Shivers",
        "link": "http://zipansion.com/3JGvf"
    },
    {
        "id_disco": 3071,
        "id": 437,
        "nombre_disco": "2008 - Imagine",
        "link": "http://zipansion.com/3JGwk"
    },
    {
        "id_disco": 3072,
        "id": 437,
        "nombre_disco": "2010 - Mirage",
        "link": "http://zipansion.com/3JGyo"
    },
    {
        "id_disco": 3073,
        "id": 437,
        "nombre_disco": "2013 - Intense",
        "link": "http://zipansion.com/3JH05"
    },
    {
        "id_disco": 3074,
        "id": 437,
        "nombre_disco": "2015 - Embrace",
        "link": "http://zipansion.com/3JH12"
    },
    {
        "id_disco": 3075,
        "id": 438,
        "nombre_disco": "Letanías Capítulo I (2001)",
        "link": "http://zipansion.com/3JGSk"
    },
    {
        "id_disco": 3076,
        "id": 438,
        "nombre_disco": "Letanías Capítulo II... La Pesadilla (2003)",
        "link": "http://zipansion.com/3JGTO"
    },
    {
        "id_disco": 3077,
        "id": 438,
        "nombre_disco": "Letanias Capítulo Prohibido (2005)",
        "link": "http://zipansion.com/3JGTy"
    },
    {
        "id_disco": 3078,
        "id": 438,
        "nombre_disco": "Letanías Capítulo III (2006)",
        "link": "http://zipansion.com/3JGUn"
    },
    {
        "id_disco": 3079,
        "id": 438,
        "nombre_disco": "Llanto de Libertad (2006)",
        "link": "http://zipansion.com/3JGWS"
    },
    {
        "id_disco": 3080,
        "id": 438,
        "nombre_disco": "Sin Decir Adiós (2006)",
        "link": "http://zipansion.com/3JGXd"
    },
    {
        "id_disco": 3081,
        "id": 438,
        "nombre_disco": "Viernes 13... Y El Zócalo Se Pobló De Sombras (Live album  2007)",
        "link": "http://zipansion.com/3JGYV"
    },
    {
        "id_disco": 3082,
        "id": 438,
        "nombre_disco": "El pozo de los Deseos (2009)",
        "link": "http://zipansion.com/3JGZ8"
    },
    {
        "id_disco": 3083,
        "id": 438,
        "nombre_disco": "Hermanos de Sangre La Iniciación (2009)",
        "link": "http://zipansion.com/3JGb4"
    },
    {
        "id_disco": 3084,
        "id": 438,
        "nombre_disco": "Hermanos De Sangre... El Ritual (2011)",
        "link": "http://zipansion.com/3JGdo"
    },
    {
        "id_disco": 3085,
        "id": 438,
        "nombre_disco": "XV Aniversario (2012)",
        "link": "http://zipansion.com/3JGea"
    },
    {
        "id_disco": 3086,
        "id": 438,
        "nombre_disco": "Letanías Capítulo IV (2013)",
        "link": "http://zipansion.com/3JGhH"
    },
    {
        "id_disco": 3087,
        "id": 438,
        "nombre_disco": "Desideratha (2013)",
        "link": "http://zipansion.com/3JGfg"
    },
    {
        "id_disco": 3088,
        "id": 438,
        "nombre_disco": "Antología de los Suspiros  Vol. 1 (Acústico) (2017)",
        "link": "http://zipansion.com/3JGiK"
    },
    {
        "id_disco": 3089,
        "id": 439,
        "nombre_disco": "Sounding the Seventh Trumpet (2001)",
        "link": "http://zipansion.com/3Dosu"
    },
    {
        "id_disco": 3090,
        "id": 439,
        "nombre_disco": "Warmness On The Soul [EP] (2001)",
        "link": "http://zipansion.com/3Dou1"
    },
    {
        "id_disco": 3091,
        "id": 439,
        "nombre_disco": "Waking the Fallen (2003)",
        "link": "http://zipansion.com/3DoyW"
    },
    {
        "id_disco": 3092,
        "id": 439,
        "nombre_disco": "City of Evil (2005)",
        "link": "http://zipansion.com/3DozT"
    },
    {
        "id_disco": 3093,
        "id": 439,
        "nombre_disco": "Avenged Sevenfold (2007)",
        "link": "http://zipansion.com/3Dozz"
    },
    {
        "id_disco": 3094,
        "id": 439,
        "nombre_disco": "Nightmare (2010)",
        "link": "http://zipansion.com/3Dp36"
    },
    {
        "id_disco": 3095,
        "id": 439,
        "nombre_disco": "Hail to the King (2013)",
        "link": "http://zipansion.com/3Dp4H"
    },
    {
        "id_disco": 3096,
        "id": 439,
        "nombre_disco": "The Stage (2016)",
        "link": "http://zipansion.com/3Dp5G"
    },
    {
        "id_disco": 3097,
        "id": 440,
        "nombre_disco": "Are You Experienced (1967)",
        "link": "http://zipansion.com/3BaGU"
    },
    {
        "id_disco": 3098,
        "id": 440,
        "nombre_disco": "Axis: Bold as Love (1967)",
        "link": "http://zipansion.com/3BaHr"
    },
    {
        "id_disco": 3099,
        "id": 440,
        "nombre_disco": "Electric Ladyland (1968)",
        "link": "http://zipansion.com/3BaIw"
    },
    {
        "id_disco": 3100,
        "id": 440,
        "nombre_disco": "Smash Hits (1968)",
        "link": "http://zipansion.com/3BaKU"
    },
    {
        "id_disco": 3101,
        "id": 440,
        "nombre_disco": "Band of Gypsys (1970 directo)",
        "link": "http://zipansion.com/3BaOB"
    },
    {
        "id_disco": 3102,
        "id": 440,
        "nombre_disco": "The Cry of Love (1971)",
        "link": "http://zipansion.com/3BaQP"
    },
    {
        "id_disco": 3103,
        "id": 440,
        "nombre_disco": "Rainbow Bridge (1971)",
        "link": "http://zipansion.com/3BaPA"
    },
    {
        "id_disco": 3104,
        "id": 440,
        "nombre_disco": "Hendrix In The West (1972)",
        "link": "http://zipansion.com/3BaRP"
    },
    {
        "id_disco": 3105,
        "id": 440,
        "nombre_disco": "Blues (1994)",
        "link": "http://zipansion.com/3BaVr"
    },
    {
        "id_disco": 3106,
        "id": 440,
        "nombre_disco": "Experience Hendrix The Best Of Jimi Hendrix (1997)",
        "link": "http://zipansion.com/3BagP"
    },
    {
        "id_disco": 3107,
        "id": 440,
        "nombre_disco": "First Rays of the New Rising Sun (1997)",
        "link": "http://zipansion.com/3Bahx"
    },
    {
        "id_disco": 3108,
        "id": 440,
        "nombre_disco": "South Saturn Delta (1997)",
        "link": "http://zipansion.com/3BajG"
    },
    {
        "id_disco": 3109,
        "id": 440,
        "nombre_disco": "BBC Sessions (1998)",
        "link": "http://zipansion.com/3BakC"
    },
    {
        "id_disco": 3110,
        "id": 440,
        "nombre_disco": "Merry Christmas And Happy New Year (1999)",
        "link": "http://zipansion.com/3BamJ"
    },
    {
        "id_disco": 3111,
        "id": 440,
        "nombre_disco": "The Jimi Hendrix Experience (Deluxe Reissue) (2000)",
        "link": "http://zipansion.com/3BapZ"
    },
    {
        "id_disco": 3112,
        "id": 440,
        "nombre_disco": "Blue Wild Angel Jimi Hendrix At The Isle Of Wight (2002)",
        "link": "http://zipansion.com/3BatA"
    },
    {
        "id_disco": 3113,
        "id": 440,
        "nombre_disco": "Jimi Hendrix (2007)",
        "link": "http://zipansion.com/3Bavr"
    },
    {
        "id_disco": 3114,
        "id": 440,
        "nombre_disco": "Valleys of Neptune (2010)",
        "link": "http://zipansion.com/3BayE"
    },
    {
        "id_disco": 3115,
        "id": 440,
        "nombre_disco": "Winterland (2011)",
        "link": "http://zipansion.com/3BazS"
    },
    {
        "id_disco": 3116,
        "id": 440,
        "nombre_disco": "People  Hell and Angels (2013)",
        "link": "http://zipansion.com/3Bb2T"
    },
    {
        "id_disco": 3117,
        "id": 440,
        "nombre_disco": "Both Sides of the Sky (2018)",
        "link": "http://zipansion.com/3BbHO"
    },
    {
        "id_disco": 3118,
        "id": 441,
        "nombre_disco": "2005: A Fever You Cant Sweat Out",
        "link": "http://zipansion.com/39sZJ"
    },
    {
        "id_disco": 3119,
        "id": 441,
        "nombre_disco": "2005: Demos",
        "link": "http://zipansion.com/39sas"
    },
    {
        "id_disco": 3120,
        "id": 441,
        "nombre_disco": "2008: Introducing... Panic At The Disco",
        "link": "http://zipansion.com/39sdc"
    },
    {
        "id_disco": 3121,
        "id": 441,
        "nombre_disco": "2008: iTunes Essentials",
        "link": "http://zipansion.com/39sfC"
    },
    {
        "id_disco": 3122,
        "id": 441,
        "nombre_disco": "2008: Pretty. Odd.",
        "link": "http://zipansion.com/39shG"
    },
    {
        "id_disco": 3123,
        "id": 441,
        "nombre_disco": "2011: Vices & Virtues",
        "link": "http://zipansion.com/39soj"
    },
    {
        "id_disco": 3124,
        "id": 441,
        "nombre_disco": "2013: Too Weird to Live  Too Rare to Die!",
        "link": "http://zipansion.com/39sql"
    },
    {
        "id_disco": 3125,
        "id": 441,
        "nombre_disco": "2014 - Nicotine [EP]",
        "link": "http://zipansion.com/39sts"
    },
    {
        "id_disco": 3126,
        "id": 441,
        "nombre_disco": "2016: Death of a Bachelor",
        "link": "http://zipansion.com/39sv7"
    },
    {
        "id_disco": 3127,
        "id": 441,
        "nombre_disco": "2018: Pray for the Wicked",
        "link": "http://zipansion.com/39sw8"
    },
    {
        "id_disco": 3128,
        "id": 442,
        "nombre_disco": "(No existen) Técnicas para olvidar (1993)",
        "link": "http://zipansion.com/38GAF"
    },
    {
        "id_disco": 3129,
        "id": 442,
        "nombre_disco": "Póntelo en la lengua (1996)",
        "link": "http://zipansion.com/38GAn"
    },
    {
        "id_disco": 3130,
        "id": 442,
        "nombre_disco": "Degeneración actual (1999)",
        "link": "http://zipansion.com/38GBp"
    },
    {
        "id_disco": 3131,
        "id": 442,
        "nombre_disco": "Play (2004)",
        "link": "http://zipansion.com/38GCb"
    },
    {
        "id_disco": 3132,
        "id": 442,
        "nombre_disco": "Talk Show (2006)",
        "link": "http://zipansion.com/38GDB"
    },
    {
        "id_disco": 3133,
        "id": 442,
        "nombre_disco": "Amazonas (2009)",
        "link": "http://zipansion.com/38GDY"
    },
    {
        "id_disco": 3134,
        "id": 443,
        "nombre_disco": "[1997] Diariu",
        "link": "http://zipansion.com/37VG0"
    },
    {
        "id_disco": 3135,
        "id": 443,
        "nombre_disco": "[1997] Verdá O Consecuencia",
        "link": "http://zipansion.com/37VHP"
    },
    {
        "id_disco": 3136,
        "id": 443,
        "nombre_disco": "[1999] Diariu II",
        "link": "http://zipansion.com/37VJI"
    },
    {
        "id_disco": 3137,
        "id": 443,
        "nombre_disco": "[2001] Actos Inexplicables",
        "link": "http://zipansion.com/37VLF"
    },
    {
        "id_disco": 3138,
        "id": 443,
        "nombre_disco": "[2001] Seis Canciones Desde el Norte",
        "link": "http://zipansion.com/37VLy"
    },
    {
        "id_disco": 3139,
        "id": 443,
        "nombre_disco": "[2002] - Miedo al Zumbido de los Mosquitos",
        "link": "http://zipansion.com/37VNF"
    },
    {
        "id_disco": 3140,
        "id": 443,
        "nombre_disco": "[2003] - Cajas de Musica Dificiles de Parar",
        "link": "http://zipansion.com/37VPZ"
    },
    {
        "id_disco": 3141,
        "id": 443,
        "nombre_disco": "[2003] - Canciones Desde Palacio",
        "link": "http://zipansion.com/37VQf"
    },
    {
        "id_disco": 3142,
        "id": 443,
        "nombre_disco": "[2005] - Desaparezca Aqui",
        "link": "http://zipansion.com/37VSW"
    },
    {
        "id_disco": 3143,
        "id": 443,
        "nombre_disco": "[2005] - El Hombre que Casi Conoció a Michi Panero",
        "link": "http://zipansion.com/37VUH"
    },
    {
        "id_disco": 3144,
        "id": 443,
        "nombre_disco": "[2005] - Esto No es Una Salida",
        "link": "http://zipansion.com/37VWJ"
    },
    {
        "id_disco": 3145,
        "id": 443,
        "nombre_disco": "[2006] - El Tiempo de las Cerezas (Bunbury & Vegas)",
        "link": "http://zipansion.com/37Va7"
    },
    {
        "id_disco": 3146,
        "id": 443,
        "nombre_disco": "[2007] - Canciones Inexplicables 2001-2005",
        "link": "http://zipansion.com/37Vc9"
    },
    {
        "id_disco": 3147,
        "id": 443,
        "nombre_disco": "[2007] - Verano Fatal",
        "link": "http://zipansion.com/37VdL"
    },
    {
        "id_disco": 3148,
        "id": 443,
        "nombre_disco": "[2008] - El Manifiesto Desastre",
        "link": "http://zipansion.com/37VgX"
    },
    {
        "id_disco": 3149,
        "id": 443,
        "nombre_disco": "[2008] - Lucas 15",
        "link": "http://zipansion.com/37Vhk"
    },
    {
        "id_disco": 3150,
        "id": 443,
        "nombre_disco": "[2009] - El Género Bobo",
        "link": "http://zipansion.com/37Vj4"
    },
    {
        "id_disco": 3151,
        "id": 443,
        "nombre_disco": "[2011] - Como Hacer Crac",
        "link": "http://zipansion.com/37VkN"
    },
    {
        "id_disco": 3152,
        "id": 443,
        "nombre_disco": "[2011] - La Zona Sucia",
        "link": "http://zipansion.com/37VmA"
    },
    {
        "id_disco": 3153,
        "id": 443,
        "nombre_disco": "[2014] - Resituación",
        "link": "http://zipansion.com/37Vn6"
    },
    {
        "id_disco": 3154,
        "id": 443,
        "nombre_disco": "[2015] - Colaboraciones e Inéditos",
        "link": "http://zipansion.com/37Vnz"
    },
    {
        "id_disco": 3155,
        "id": 444,
        "nombre_disco": "Fobia (1990)",
        "link": "http://zipansion.com/37V1K"
    },
    {
        "id_disco": 3156,
        "id": 444,
        "nombre_disco": "Mundo Feliz (1991)",
        "link": "http://zipansion.com/37V1k"
    },
    {
        "id_disco": 3157,
        "id": 444,
        "nombre_disco": "Leche (1993)",
        "link": "http://zipansion.com/37V2B"
    },
    {
        "id_disco": 3158,
        "id": 444,
        "nombre_disco": "Amor Chiquito (1995)",
        "link": "http://zipansion.com/37V2b"
    },
    {
        "id_disco": 3159,
        "id": 444,
        "nombre_disco": "Fobia On Ice (1997)",
        "link": "http://zipansion.com/37V2x"
    },
    {
        "id_disco": 3160,
        "id": 444,
        "nombre_disco": "Wow 87-04 (2004)",
        "link": "http://zipansion.com/37V3L"
    },
    {
        "id_disco": 3161,
        "id": 444,
        "nombre_disco": "Rosa Venus (2005)",
        "link": "http://zipansion.com/37V3Y"
    },
    {
        "id_disco": 3162,
        "id": 444,
        "nombre_disco": "XX (2007)",
        "link": "http://zipansion.com/37V3w"
    },
    {
        "id_disco": 3163,
        "id": 444,
        "nombre_disco": "Destruye Hogares (2012)",
        "link": "http://zipansion.com/37V4a"
    },
    {
        "id_disco": 3164,
        "id": 445,
        "nombre_disco": "Stone Sour (2002)",
        "link": "http://zipansion.com/31jmH"
    },
    {
        "id_disco": 3165,
        "id": 445,
        "nombre_disco": "2006 - Live In Moscow",
        "link": "http://evassmat.com/Do9t"
    },
    {
        "id_disco": 3166,
        "id": 445,
        "nombre_disco": "Come What(ever) May (Special Edition) (2006)",
        "link": "http://zipansion.com/31jnX"
    },
    {
        "id_disco": 3167,
        "id": 445,
        "nombre_disco": "Audio Secrecy (2010)",
        "link": "http://zipansion.com/31jpe"
    },
    {
        "id_disco": 3168,
        "id": 445,
        "nombre_disco": "House of Gold & Bones - Part 1 (2012)",
        "link": "http://zipansion.com/31kNT"
    },
    {
        "id_disco": 3169,
        "id": 445,
        "nombre_disco": "House of Gold & Bones - Part 2 (2013)",
        "link": "http://zipansion.com/31kOC"
    },
    {
        "id_disco": 3170,
        "id": 445,
        "nombre_disco": "Hydrograd (2017)",
        "link": "http://zipansion.com/31kP9"
    },
    {
        "id_disco": 3171,
        "id": 446,
        "nombre_disco": "Handwritten (Deluxe Edition) (2015)",
        "link": "http://zipansion.com/31iuJ"
    },
    {
        "id_disco": 3172,
        "id": 446,
        "nombre_disco": "Illuminate (Deluxe Edition) (2016)",
        "link": "http://zipansion.com/31iwg"
    },
    {
        "id_disco": 3173,
        "id": 446,
        "nombre_disco": "Live At Madison Square Garden (2016)",
        "link": "http://zipansion.com/31iyb"
    },
    {
        "id_disco": 3174,
        "id": 446,
        "nombre_disco": "MTV Unplugged (2017)",
        "link": "http://zipansion.com/31j0j"
    },
    {
        "id_disco": 3175,
        "id": 446,
        "nombre_disco": "Shawn Mendes (2018)",
        "link": "http://zipansion.com/31j2v"
    },
    {
        "id_disco": 3176,
        "id": 447,
        "nombre_disco": "1993: (Like) Linus",
        "link": "http://zipansion.com/31hPr"
    },
    {
        "id_disco": 3177,
        "id": 447,
        "nombre_disco": "1995: Adrenaline",
        "link": "http://zipansion.com/31hT1"
    },
    {
        "id_disco": 3178,
        "id": 447,
        "nombre_disco": "1997: Around the Fur",
        "link": "http://zipansion.com/31hUT"
    },
    {
        "id_disco": 3179,
        "id": 447,
        "nombre_disco": "2000: White Pony",
        "link": "http://zipansion.com/31iKy"
    },
    {
        "id_disco": 3180,
        "id": 447,
        "nombre_disco": "2000 - Back To School",
        "link": "http://zipansion.com/31hVg"
    },
    {
        "id_disco": 3181,
        "id": 447,
        "nombre_disco": "2003: Deftones",
        "link": "http://zipansion.com/31hZI"
    },
    {
        "id_disco": 3182,
        "id": 447,
        "nombre_disco": "2005: B-Sides & Rarities",
        "link": "http://zipansion.com/31haT"
    },
    {
        "id_disco": 3183,
        "id": 447,
        "nombre_disco": "2006: Saturday Night Wrist",
        "link": "http://zipansion.com/31hcs"
    },
    {
        "id_disco": 3184,
        "id": 447,
        "nombre_disco": "2010: Diamond Eyes",
        "link": "http://zipansion.com/31hdo"
    },
    {
        "id_disco": 3185,
        "id": 447,
        "nombre_disco": "2011: Covers",
        "link": "http://zipansion.com/31heh"
    },
    {
        "id_disco": 3186,
        "id": 447,
        "nombre_disco": "2012: Koi No Yokan",
        "link": "http://zipansion.com/31hhW"
    },
    {
        "id_disco": 3187,
        "id": 447,
        "nombre_disco": "2013: Live Volume 1 - Selections from Adrenaline",
        "link": "http://zipansion.com/31hjk"
    },
    {
        "id_disco": 3188,
        "id": 447,
        "nombre_disco": "2016: Gore",
        "link": "http://zipansion.com/31hmV"
    },
    {
        "id_disco": 3189,
        "id": 448,
        "nombre_disco": "2016 - Ocean Eyes (The Remixes) - [EP]",
        "link": "http://zipansion.com/31cfh"
    },
    {
        "id_disco": 3190,
        "id": 448,
        "nombre_disco": "2016 - Six Feet Under (The Remixes) - [EP]",
        "link": "http://zipansion.com/31ch4"
    },
    {
        "id_disco": 3191,
        "id": 448,
        "nombre_disco": "2017 - Dont Smile At Me",
        "link": "http://zipansion.com/31ciB"
    },
    {
        "id_disco": 3192,
        "id": 448,
        "nombre_disco": "2019 - When We All Fall Asleep  Where Do We Go",
        "link": "http://eunsetee.com/7Qod"
    },
    {
        "id_disco": 3193,
        "id": 449,
        "nombre_disco": "(1994) Bootlegs And B-Sides (Explicit)",
        "link": "http://zipansion.com/31J3s"
    },
    {
        "id_disco": 3194,
        "id": 449,
        "nombre_disco": "(1998) War & Peace Vol. 1",
        "link": "http://zipansion.com/31J5T"
    },
    {
        "id_disco": 3195,
        "id": 449,
        "nombre_disco": "(2000) War & Peace Vol. 2 (Explicit)",
        "link": "http://zipansion.com/31J88"
    },
    {
        "id_disco": 3196,
        "id": 449,
        "nombre_disco": "(2001) Ice Cubes Greatest Hits (Explicit)",
        "link": "http://zipansion.com/31J9k"
    },
    {
        "id_disco": 3197,
        "id": 449,
        "nombre_disco": "(2006) Laugh Now  Cry Later",
        "link": "http://zipansion.com/31JBZ"
    },
    {
        "id_disco": 3198,
        "id": 449,
        "nombre_disco": "(2008) The Essentials",
        "link": "http://zipansion.com/31JDR"
    },
    {
        "id_disco": 3199,
        "id": 449,
        "nombre_disco": "(2008) Raw Footage",
        "link": "http://zipansion.com/31KFl"
    },
    {
        "id_disco": 3200,
        "id": 449,
        "nombre_disco": "(2012) I Am the West",
        "link": "http://zipansion.com/31JG9"
    },
    {
        "id_disco": 3201,
        "id": 449,
        "nombre_disco": "(2015) AmeriKKKas Most Wanted",
        "link": "http://zipansion.com/31JI0"
    },
    {
        "id_disco": 3202,
        "id": 449,
        "nombre_disco": "(2015) Kill At Will",
        "link": "http://zipansion.com/31JJy"
    },
    {
        "id_disco": 3203,
        "id": 449,
        "nombre_disco": "(2015) Lethal Injection",
        "link": "http://zipansion.com/31JLH"
    },
    {
        "id_disco": 3204,
        "id": 449,
        "nombre_disco": "(2015) Remain Calm",
        "link": "http://zipansion.com/31JNS"
    },
    {
        "id_disco": 3205,
        "id": 449,
        "nombre_disco": "(2015) The Predator",
        "link": "http://zipansion.com/31JPM"
    },
    {
        "id_disco": 3206,
        "id": 449,
        "nombre_disco": "(2017) Death Certificate (25th Anniversary Edition)",
        "link": "http://zipansion.com/31JRN"
    },
    {
        "id_disco": 3207,
        "id": 449,
        "nombre_disco": "(2017) Woodstock 99 (Live)",
        "link": "http://zipansion.com/31JTI"
    },
    {
        "id_disco": 3208,
        "id": 450,
        "nombre_disco": "2015 - Running With The Wolves [EP]",
        "link": "http://zipansion.com/30AkZ"
    },
    {
        "id_disco": 3209,
        "id": 450,
        "nombre_disco": "2016 - All My Demons Greeting Me As A Friend [Deluxe Edition]",
        "link": "http://zipansion.com/30Aml"
    },
    {
        "id_disco": 3210,
        "id": 451,
        "nombre_disco": "The Sky is Too High (1998)",
        "link": "http://zipansion.com/2yXc1"
    },
    {
        "id_disco": 3211,
        "id": 451,
        "nombre_disco": "The Golden D (2000)",
        "link": "http://zipansion.com/2yXcj"
    },
    {
        "id_disco": 3212,
        "id": 451,
        "nombre_disco": "Crow Sit on Blood Tree (2001)",
        "link": "http://zipansion.com/2yXdm"
    },
    {
        "id_disco": 3213,
        "id": 451,
        "nombre_disco": "The Kiss of Morning (2002)",
        "link": "http://zipansion.com/2yXfA"
    },
    {
        "id_disco": 3214,
        "id": 451,
        "nombre_disco": "Happiness in Magazines (2004)",
        "link": "http://zipansion.com/2yXgi"
    },
    {
        "id_disco": 3215,
        "id": 451,
        "nombre_disco": "Love Travels at Illegal Speeds (2006) ",
        "link": "http://zipansion.com/2yXhv"
    },
    {
        "id_disco": 3216,
        "id": 451,
        "nombre_disco": "The Spinning Top (2009)",
        "link": "http://zipansion.com/2yXjL"
    },
    {
        "id_disco": 3217,
        "id": 451,
        "nombre_disco": "A+E (2012)",
        "link": "http://zipansion.com/2yXlA"
    },
    {
        "id_disco": 3218,
        "id": 452,
        "nombre_disco": "2004 - El Tesoro de los Inocentes",
        "link": "http://zipansion.com/2wakc"
    },
    {
        "id_disco": 3219,
        "id": 452,
        "nombre_disco": "2007 - Porco Rex",
        "link": "http://zipansion.com/2wame"
    },
    {
        "id_disco": 3220,
        "id": 452,
        "nombre_disco": "2010 - El Perfume De La Tempestad",
        "link": "http://zipansion.com/2waoL"
    },
    {
        "id_disco": 3221,
        "id": 452,
        "nombre_disco": "2013 - Pajaritos  bravos muchachitos",
        "link": "http://zipansion.com/2wapm"
    },
    {
        "id_disco": 3222,
        "id": 452,
        "nombre_disco": "2018 - El Ruiseñor el amor y la muerte",
        "link": "http://zipansion.com/2wasq"
    },
    {
        "id_disco": 3223,
        "id": 453,
        "nombre_disco": "1995: Mushroomhead",
        "link": "http://zipansion.com/2wa5t"
    },
    {
        "id_disco": 3224,
        "id": 453,
        "nombre_disco": "1996: Superbuick",
        "link": "http://zipansion.com/2wa6X"
    },
    {
        "id_disco": 3225,
        "id": 453,
        "nombre_disco": "1999: M3",
        "link": "http://zipansion.com/2wa7f"
    },
    {
        "id_disco": 3226,
        "id": 453,
        "nombre_disco": "2001: XX",
        "link": "http://zipansion.com/2wa9O"
    },
    {
        "id_disco": 3227,
        "id": 453,
        "nombre_disco": "2003: XIII",
        "link": "http://zipansion.com/2waAQ"
    },
    {
        "id_disco": 3228,
        "id": 453,
        "nombre_disco": "2006: Savior Sorrow",
        "link": "http://zipansion.com/2waB6"
    },
    {
        "id_disco": 3229,
        "id": 453,
        "nombre_disco": "2010: Beautiful Stories for Ugly Children",
        "link": "http://zipansion.com/2waBh"
    },
    {
        "id_disco": 3230,
        "id": 453,
        "nombre_disco": "2014: The Righteous & the Butterfly",
        "link": "http://zipansion.com/2waCz"
    },
    {
        "id_disco": 3231,
        "id": 454,
        "nombre_disco": "Blackmage",
        "link": "http://zipansion.com/2v6Dj"
    },
    {
        "id_disco": 3232,
        "id": 454,
        "nombre_disco": "Daemon III",
        "link": "http://zipansion.com/2v6Fw"
    },
    {
        "id_disco": 3233,
        "id": 454,
        "nombre_disco": "For the Aspiring Occultist",
        "link": "http://zipansion.com/2v6Hq"
    },
    {
        "id_disco": 3234,
        "id": 454,
        "nombre_disco": "Hades",
        "link": "http://zipansion.com/2v6JT"
    },
    {
        "id_disco": 3235,
        "id": 454,
        "nombre_disco": "Hexada",
        "link": "http://zipansion.com/2v6KP"
    },
    {
        "id_disco": 3236,
        "id": 454,
        "nombre_disco": "Kali Yuga",
        "link": "http://zipansion.com/2v6LX"
    },
    {
        "id_disco": 3237,
        "id": 454,
        "nombre_disco": "Kronol",
        "link": "http://zipansion.com/2v6NX"
    },
    {
        "id_disco": 3238,
        "id": 454,
        "nombre_disco": "Kybalion",
        "link": "http://zipansion.com/2v6Qc"
    },
    {
        "id_disco": 3239,
        "id": 454,
        "nombre_disco": "Nails",
        "link": "http://zipansion.com/2v6SR"
    },
    {
        "id_disco": 3240,
        "id": 454,
        "nombre_disco": "Oogabooga",
        "link": "http://zipansion.com/2v6Um"
    },
    {
        "id_disco": 3241,
        "id": 454,
        "nombre_disco": "Plagues",
        "link": "http://zipansion.com/2v6Wd"
    },
    {
        "id_disco": 3242,
        "id": 454,
        "nombre_disco": "Rituals",
        "link": "http://zipansion.com/2v6XV"
    },
    {
        "id_disco": 3243,
        "id": 454,
        "nombre_disco": "Tartarus",
        "link": "http://zipansion.com/2v6Zt"
    },
    {
        "id_disco": 3244,
        "id": 454,
        "nombre_disco": "Technicolor",
        "link": "http://zipansion.com/2v6bP"
    },
    {
        "id_disco": 3245,
        "id": 455,
        "nombre_disco": "2007 – Wicked Man’s Rest",
        "link": "http://zipansion.com/2udkC"
    },
    {
        "id_disco": 3246,
        "id": 455,
        "nombre_disco": "2009 – Wide Eyes Blind Love",
        "link": "http://zipansion.com/2udmA"
    },
    {
        "id_disco": 3247,
        "id": 455,
        "nombre_disco": "2010 – Divers & Submarines",
        "link": "http://zipansion.com/2udt4"
    },
    {
        "id_disco": 3248,
        "id": 455,
        "nombre_disco": "2010 – Flight of the Crow",
        "link": "http://zipansion.com/2udvs"
    },
    {
        "id_disco": 3249,
        "id": 455,
        "nombre_disco": "2012 – All the Little Lights",
        "link": "http://zipansion.com/2udx1"
    },
    {
        "id_disco": 3250,
        "id": 455,
        "nombre_disco": "2014 – Whispers",
        "link": "http://zipansion.com/2udzbc"
    },
    {
        "id_disco": 3251,
        "id": 455,
        "nombre_disco": "2015 – Whispers II",
        "link": "http://zipansion.com/2ue1S"
    },
    {
        "id_disco": 3252,
        "id": 455,
        "nombre_disco": "2016 – Young as the Morning  Old as the Sea",
        "link": "http://zipansion.com/2ue3b"
    },
    {
        "id_disco": 3253,
        "id": 456,
        "nombre_disco": "2012: Im Sorry...",
        "link": "http://zipansion.com/2ucyx"
    },
    {
        "id_disco": 3254,
        "id": 456,
        "nombre_disco": "2012: Thank You ",
        "link": "http://zipansion.com/2uct9"
    },
    {
        "id_disco": 3255,
        "id": 456,
        "nombre_disco": "2013: I Love You",
        "link": "http://zipansion.com/2ucy7"
    },
    {
        "id_disco": 3256,
        "id": 456,
        "nombre_disco": "2013: The Love Collection",
        "link": "http://zipansion.com/2ud1p"
    },
    {
        "id_disco": 3257,
        "id": 456,
        "nombre_disco": "2014: #000000 & #FFFFFF",
        "link": "http://zipansion.com/2ud36"
    },
    {
        "id_disco": 3258,
        "id": 456,
        "nombre_disco": "2015: Wiped Out!",
        "link": "http://zipansion.com/2ud9I"
    },
    {
        "id_disco": 3259,
        "id": 456,
        "nombre_disco": "2017: Hard - EP",
        "link": "http://zipansion.com/2udAF"
    },
    {
        "id_disco": 3260,
        "id": 456,
        "nombre_disco": "2018: To Imagine - EP",
        "link": "http://zipansion.com/2udJE"
    },
    {
        "id_disco": 3261,
        "id": 456,
        "nombre_disco": "2018: The Neighbourhood",
        "link": "http://zipansion.com/2udHc"
    },
    {
        "id_disco": 3262,
        "id": 457,
        "nombre_disco": "A Modern Tragedy Vol. 1 (2018)",
        "link": "http://zipansion.com/2uYFY"
    },
    {
        "id_disco": 3263,
        "id": 457,
        "nombre_disco": "2019 - A Modern Tragedy Vol. 2",
        "link": "http://locinealy.com/2bOA"
    },
    {
        "id_disco": 3264,
        "id": 458,
        "nombre_disco": "No es cuestión de edades (2006) ",
        "link": "http://zipansion.com/2lZpw"
    },
    {
        "id_disco": 3265,
        "id": 458,
        "nombre_disco": "No hay truco (2007) ",
        "link": "http://zipansion.com/2lZra"
    },
    {
        "id_disco": 3266,
        "id": 458,
        "nombre_disco": "En boca de tantos (2008) ",
        "link": "http://zipansion.com/2lZtL"
    },
    {
        "id_disco": 3267,
        "id": 458,
        "nombre_disco": "Trastorno bipolar (2009)",
        "link": "http://zipansion.com/2lZuO"
    },
    {
        "id_disco": 3268,
        "id": 458,
        "nombre_disco": "Colaboraciones e Ineditas (2010)",
        "link": "http://zipansion.com/2lZvP"
    },
    {
        "id_disco": 3269,
        "id": 458,
        "nombre_disco": "Reset (2012) ",
        "link": "http://zipansion.com/2lZy8"
    },
    {
        "id_disco": 3270,
        "id": 458,
        "nombre_disco": "Algo ha cambiado (2014) ",
        "link": "http://zipansion.com/2lZz2"
    },
    {
        "id_disco": 3271,
        "id": 458,
        "nombre_disco": "Equilibrio (2016) ",
        "link": "http://zipansion.com/2la0K"
    },
    {
        "id_disco": 3272,
        "id": 459,
        "nombre_disco": "1994: Portrait of an American Family",
        "link": "http://zipansion.com/2kdZ2"
    },
    {
        "id_disco": 3273,
        "id": 459,
        "nombre_disco": "1995: Smells Like Children",
        "link": "http://zipansion.com/2kdkT"
    },
    {
        "id_disco": 3274,
        "id": 459,
        "nombre_disco": "1996: Antichrist Superstar",
        "link": "http://zipansion.com/2kdlB"
    },
    {
        "id_disco": 3275,
        "id": 459,
        "nombre_disco": "1998: Mechanical Animals",
        "link": "http://zipansion.com/2kdmC"
    },
    {
        "id_disco": 3276,
        "id": 459,
        "nombre_disco": "1999: The Last Tour on Earth",
        "link": "http://zipansion.com/2kdml"
    },
    {
        "id_disco": 3277,
        "id": 459,
        "nombre_disco": "2000: Holy Wood (In the Shadow of the Valley of Death)",
        "link": "http://zipansion.com/2kdnO"
    },
    {
        "id_disco": 3278,
        "id": 459,
        "nombre_disco": "2003: The Golden Age of Grotesque",
        "link": "http://zipansion.com/2kdo6"
    },
    {
        "id_disco": 3279,
        "id": 459,
        "nombre_disco": "2004: Lest We Forget: The Best Of",
        "link": "http://zipansion.com/2kdqU"
    },
    {
        "id_disco": 3280,
        "id": 459,
        "nombre_disco": "2007: Eat Me  Drink Me",
        "link": "http://zipansion.com/2kds5"
    },
    {
        "id_disco": 3281,
        "id": 459,
        "nombre_disco": "2009: The High End of Low",
        "link": "http://zipansion.com/2kdsi"
    },
    {
        "id_disco": 3282,
        "id": 459,
        "nombre_disco": "2012: Born Villain",
        "link": "http://zipansion.com/2kdtc"
    },
    {
        "id_disco": 3283,
        "id": 459,
        "nombre_disco": "2015: The Pale Emperor",
        "link": "http://zipansion.com/2kdur"
    },
    {
        "id_disco": 3284,
        "id": 459,
        "nombre_disco": "2017: Heaven Upside Down",
        "link": "http://zipansion.com/2kdw4"
    },
    {
        "id_disco": 3285,
        "id": 460,
        "nombre_disco": "2002: I brought you my bullets  you brought me your love",
        "link": "http://zipansion.com/2k6AB"
    },
    {
        "id_disco": 3286,
        "id": 460,
        "nombre_disco": "2004: Three cheers for sweet revenge",
        "link": "http://zipansion.com/2k6Am"
    },
    {
        "id_disco": 3287,
        "id": 460,
        "nombre_disco": "2006: The Black Parade",
        "link": "http://zipansion.com/2k6BM"
    },
    {
        "id_disco": 3288,
        "id": 460,
        "nombre_disco": "2010: Danger days: the true lives of the Fabulous Killjoys",
        "link": "http://zipansion.com/2k6Bz"
    },
    {
        "id_disco": 3289,
        "id": 461,
        "nombre_disco": "Yendo de la cama al living (1982)",
        "link": "http://zipansion.com/2h8ZL"
    },
    {
        "id_disco": 3290,
        "id": 461,
        "nombre_disco": "Clics modernos (1983)",
        "link": "http://zipansion.com/2h8ad"
    },
    {
        "id_disco": 3291,
        "id": 461,
        "nombre_disco": "Piano Bar (1984)",
        "link": "http://zipansion.com/2h8c6"
    },
    {
        "id_disco": 3292,
        "id": 461,
        "nombre_disco": "Tango (1985)",
        "link": "http://zipansion.com/2h8dn"
    },
    {
        "id_disco": 3293,
        "id": 461,
        "nombre_disco": "Parte de la religión (1987)",
        "link": "http://zipansion.com/2h8gz"
    },
    {
        "id_disco": 3294,
        "id": 461,
        "nombre_disco": "Cómo conseguir chicas (1989)",
        "link": "http://zipansion.com/2h8iQ"
    },
    {
        "id_disco": 3295,
        "id": 461,
        "nombre_disco": "Filosofía barata y zapatos de goma (1990)",
        "link": "http://zipansion.com/2h8jO"
    },
    {
        "id_disco": 3296,
        "id": 461,
        "nombre_disco": "La hija de la lágrima (1994)",
        "link": "http://zipansion.com/2h8kc"
    },
    {
        "id_disco": 3297,
        "id": 461,
        "nombre_disco": "Tango 4 (1994)",
        "link": "http://zipansion.com/2h8lC"
    },
    {
        "id_disco": 3298,
        "id": 461,
        "nombre_disco": "Say no More (1996)",
        "link": "http://zipansion.com/2h8nV"
    },
    {
        "id_disco": 3299,
        "id": 461,
        "nombre_disco": "El aguante (1998)",
        "link": "http://zipansion.com/2h8oC"
    },
    {
        "id_disco": 3300,
        "id": 461,
        "nombre_disco": "Influencia (2002)",
        "link": "http://zipansion.com/2h8op"
    },
    {
        "id_disco": 3301,
        "id": 461,
        "nombre_disco": "Rock and Roll YO (2003)",
        "link": "http://zipansion.com/2h8q6"
    },
    {
        "id_disco": 3302,
        "id": 461,
        "nombre_disco": "El Concierto Subacuático [Vivo] (2010)",
        "link": "http://zipansion.com/2h8rf"
    },
    {
        "id_disco": 3303,
        "id": 461,
        "nombre_disco": "Kill Gil (2010)",
        "link": "http://zipansion.com/2h8tX"
    },
    {
        "id_disco": 3304,
        "id": 461,
        "nombre_disco": "60x60 [Vivo] (2012)",
        "link": "http://zipansion.com/2h8uD"
    },
    {
        "id_disco": 3305,
        "id": 461,
        "nombre_disco": "Random (2017)",
        "link": "http://zipansion.com/2h8wQ"
    },
    {
        "id_disco": 3306,
        "id": 462,
        "nombre_disco": "Hatful of Hollow (1984)",
        "link": "http://zipansion.com/2h7A6"
    },
    {
        "id_disco": 3307,
        "id": 462,
        "nombre_disco": "The Smiths (1984)",
        "link": "http://zipansion.com/2h7EF"
    },
    {
        "id_disco": 3308,
        "id": 462,
        "nombre_disco": "Meat Is Murder (1985)",
        "link": "http://zipansion.com/2h7FL"
    },
    {
        "id_disco": 3309,
        "id": 462,
        "nombre_disco": "The Queen Is Dead (1986)",
        "link": "http://zipansion.com/2h7GE"
    },
    {
        "id_disco": 3310,
        "id": 462,
        "nombre_disco": "Louder Than Bombs (1987)",
        "link": "http://zipansion.com/2h7Gn"
    },
    {
        "id_disco": 3311,
        "id": 462,
        "nombre_disco": "Strangeways  Here We Come (1987)",
        "link": "http://zipansion.com/2h7IH"
    },
    {
        "id_disco": 3312,
        "id": 462,
        "nombre_disco": "The World Wont Listen (1987)",
        "link": "http://zipansion.com/2h7JR"
    },
    {
        "id_disco": 3313,
        "id": 462,
        "nombre_disco": "Rank (1988)",
        "link": "http://zipansion.com/2h7Me"
    },
    {
        "id_disco": 3314,
        "id": 463,
        "nombre_disco": "Get Lifted (2004)",
        "link": "http://zipansion.com/2gLTe"
    },
    {
        "id_disco": 3315,
        "id": 463,
        "nombre_disco": "Once Again (2006)",
        "link": "http://zipansion.com/2gLiD"
    },
    {
        "id_disco": 3316,
        "id": 463,
        "nombre_disco": "Evolver (2008)",
        "link": "http://zipansion.com/2gLim"
    },
    {
        "id_disco": 3317,
        "id": 463,
        "nombre_disco": "Wake Up! (Deluxe Edition) with The Roots (2010)",
        "link": "http://zipansion.com/2gLjf"
    },
    {
        "id_disco": 3318,
        "id": 463,
        "nombre_disco": "Love in the Future (2013)",
        "link": "http://zipansion.com/2gLn6"
    },
    {
        "id_disco": 3319,
        "id": 463,
        "nombre_disco": "Darkness and Light (Deluxe Edition) (2016)",
        "link": "http://zipansion.com/2gLnv"
    },
    {
        "id_disco": 3320,
        "id": 464,
        "nombre_disco": "Three [EP] (1979)",
        "link": "http://zipansion.com/2ecI8"
    },
    {
        "id_disco": 3321,
        "id": 464,
        "nombre_disco": "Boy (1980)",
        "link": "http://zipansion.com/2ecL3"
    },
    {
        "id_disco": 3322,
        "id": 464,
        "nombre_disco": "October (1981)",
        "link": "http://zipansion.com/2ecLx"
    },
    {
        "id_disco": 3323,
        "id": 464,
        "nombre_disco": "War (1983)",
        "link": "http://zipansion.com/2ecO6"
    },
    {
        "id_disco": 3324,
        "id": 464,
        "nombre_disco": "The Unforgettable Fire (1984)",
        "link": "http://zipansion.com/2ecOq"
    },
    {
        "id_disco": 3325,
        "id": 464,
        "nombre_disco": "Wide Awake In America (1985)",
        "link": "http://zipansion.com/2ecPa"
    },
    {
        "id_disco": 3326,
        "id": 464,
        "nombre_disco": "The Joshua Tree (1987)",
        "link": "http://zipansion.com/2ecSD"
    },
    {
        "id_disco": 3327,
        "id": 464,
        "nombre_disco": "Rattle and Hum (1988)",
        "link": "http://zipansion.com/2ecTo"
    },
    {
        "id_disco": 3328,
        "id": 464,
        "nombre_disco": "Achtung Baby (1991)",
        "link": "http://zipansion.com/2ecUV"
    },
    {
        "id_disco": 3329,
        "id": 464,
        "nombre_disco": "Zooropa (1993)",
        "link": "http://zipansion.com/2ecVA"
    },
    {
        "id_disco": 3330,
        "id": 464,
        "nombre_disco": "Original Soundtracks 1 (Passengers) (1995)",
        "link": "http://zipansion.com/2ecYP"
    },
    {
        "id_disco": 3331,
        "id": 464,
        "nombre_disco": "Pop (1997)",
        "link": "http://zipansion.com/2ecZs"
    },
    {
        "id_disco": 3332,
        "id": 464,
        "nombre_disco": "All That You Cant Leave Behind (2000)",
        "link": "http://zipansion.com/2ecaY"
    },
    {
        "id_disco": 3333,
        "id": 464,
        "nombre_disco": "7 [EP] (2002)",
        "link": "http://zipansion.com/2ecbY"
    },
    {
        "id_disco": 3334,
        "id": 464,
        "nombre_disco": "How to Dismantle an Atomic Bomb (2004)",
        "link": "http://zipansion.com/2ecfB"
    },
    {
        "id_disco": 3335,
        "id": 464,
        "nombre_disco": "18 Singles (2008)",
        "link": "http://zipansion.com/2ecgX"
    },
    {
        "id_disco": 3336,
        "id": 464,
        "nombre_disco": "No Line on the Horizon (2009)",
        "link": "http://zipansion.com/2eciN"
    },
    {
        "id_disco": 3337,
        "id": 464,
        "nombre_disco": "Songs of Innocence (2014)",
        "link": "http://zipansion.com/2ecjD"
    },
    {
        "id_disco": 3338,
        "id": 464,
        "nombre_disco": "Songs of Experience (2017)",
        "link": "http://zipansion.com/2ecjt"
    },
    {
        "id_disco": 3339,
        "id": 465,
        "nombre_disco": "1999: Slipknot",
        "link": "http://zipansion.com/2dEVw"
    },
    {
        "id_disco": 3340,
        "id": 465,
        "nombre_disco": "2001: Iowa",
        "link": "http://zipansion.com/2dEae"
    },
    {
        "id_disco": 3341,
        "id": 465,
        "nombre_disco": "2004: Vol. 3: (The Subliminal Verses)",
        "link": "http://zipansion.com/2dEbt"
    },
    {
        "id_disco": 3342,
        "id": 465,
        "nombre_disco": "2008: All Hope Is Gone",
        "link": "http://zipansion.com/2dEcv"
    },
    {
        "id_disco": 3343,
        "id": 465,
        "nombre_disco": "2014: .5: The Gray Chapter",
        "link": "http://zipansion.com/2dEdl"
    },
    {
        "id_disco": 3344,
        "id": 465,
        "nombre_disco": "2019 - We Are Not Your Kind",
        "link": "http://eunsetee.com/Cioq"
    },
    {
        "id_disco": 3345,
        "id": 466,
        "nombre_disco": "2016 - First Steps",
        "link": "http://zipansion.com/2c9Hx"
    },
    {
        "id_disco": 3346,
        "id": 466,
        "nombre_disco": "2017 - Momentum",
        "link": "http://zipansion.com/2c9Ji"
    },
    {
        "id_disco": 3347,
        "id": 466,
        "nombre_disco": "(Singles)Feel Like I’m Drowning / Not Me",
        "link": "http://zipansion.com/2c9LL"
    },
    {
        "id_disco": 3348,
        "id": 467,
        "nombre_disco": "Spinettalandia y sus amigos (1971)",
        "link": "http://zipansion.com/2b2af"
    },
    {
        "id_disco": 3349,
        "id": 467,
        "nombre_disco": "A 18 del sol (1977)",
        "link": "http://zipansion.com/2b2bS"
    },
    {
        "id_disco": 3350,
        "id": 467,
        "nombre_disco": "Only love can sustain (1979)",
        "link": "http://zipansion.com/2b2cH"
    },
    {
        "id_disco": 3351,
        "id": 467,
        "nombre_disco": "Kamikaze (1982)",
        "link": "http://zipansion.com/2b2dI"
    },
    {
        "id_disco": 3352,
        "id": 467,
        "nombre_disco": "Mondo di cromo (1983)",
        "link": "http://zipansion.com/2b2e3"
    },
    {
        "id_disco": 3353,
        "id": 467,
        "nombre_disco": "Privé (1986)",
        "link": "http://zipansion.com/2b2fd"
    },
    {
        "id_disco": 3354,
        "id": 467,
        "nombre_disco": "La la la (1986)",
        "link": "http://zipansion.com/2b2el"
    },
    {
        "id_disco": 3355,
        "id": 467,
        "nombre_disco": "Téster de violencia (1988)",
        "link": "http://zipansion.com/2b2gO"
    },
    {
        "id_disco": 3356,
        "id": 467,
        "nombre_disco": "Don Lucero (1989)",
        "link": "http://zipansion.com/2b2gt"
    },
    {
        "id_disco": 3357,
        "id": 467,
        "nombre_disco": "Exactas (1990)",
        "link": "http://zipansion.com/2b2hh"
    },
    {
        "id_disco": 3358,
        "id": 467,
        "nombre_disco": "Piel de Piel (1990)",
        "link": "http://zipansion.com/2b2jc"
    },
    {
        "id_disco": 3359,
        "id": 467,
        "nombre_disco": "Peluson of milk (1991)",
        "link": "http://zipansion.com/2b2mF"
    },
    {
        "id_disco": 3360,
        "id": 467,
        "nombre_disco": "Fuego gris (1993)",
        "link": "http://zipansion.com/2b2n5"
    },
    {
        "id_disco": 3361,
        "id": 467,
        "nombre_disco": "Elija y Gane (1998)",
        "link": "http://zipansion.com/2b2nd"
    },
    {
        "id_disco": 3362,
        "id": 467,
        "nombre_disco": "Silver Sorgo (2001)",
        "link": "http://zipansion.com/2b2qh"
    },
    {
        "id_disco": 3363,
        "id": 467,
        "nombre_disco": "Para los árboles (2003)",
        "link": "http://zipansion.com/2b2s1"
    },
    {
        "id_disco": 3364,
        "id": 467,
        "nombre_disco": "Camalotus (2004)",
        "link": "http://zipansion.com/2b2se"
    },
    {
        "id_disco": 3365,
        "id": 467,
        "nombre_disco": "Pan (2005)",
        "link": "http://zipansion.com/2b2wG"
    },
    {
        "id_disco": 3366,
        "id": 467,
        "nombre_disco": "Obras Cumbres (2006)",
        "link": "http://zipansion.com/2b2tF"
    },
    {
        "id_disco": 3367,
        "id": 467,
        "nombre_disco": "Un mañana (2008)",
        "link": "http://zipansion.com/2b2x2"
    },
    {
        "id_disco": 3368,
        "id": 467,
        "nombre_disco": "Spinetta y las bandas eternas (2010)",
        "link": "http://zipansion.com/2b2xp"
    },
    {
        "id_disco": 3369,
        "id": 467,
        "nombre_disco": "Bon Jovi 1997 - Destination Anywhere",
        "link": "http://zipansion.com/2ZKOC"
    },
    {
        "id_disco": 3370,
        "id": 467,
        "nombre_disco": "Bon Jovi 1990 - Blaze Of Glory",
        "link": "http://zipansion.com/2ZKLt"
    },
    {
        "id_disco": 3371,
        "id": 468,
        "nombre_disco": "Innerspeaker (2010)",
        "link": "http://zipansion.com/2ZKfv"
    },
    {
        "id_disco": 3372,
        "id": 468,
        "nombre_disco": "Lonerism (2012)",
        "link": "http://zipansion.com/2ZKgX"
    },
    {
        "id_disco": 3373,
        "id": 468,
        "nombre_disco": "Currents (2015)",
        "link": "http://zipansion.com/2ZKh0"
    },
    {
        "id_disco": 3374,
        "id": 469,
        "nombre_disco": "1974: Rocka Rolla",
        "link": "http://zipansion.com/2Z3fR"
    },
    {
        "id_disco": 3375,
        "id": 469,
        "nombre_disco": "1976: Sad Wings of Destiny",
        "link": "http://zipansion.com/2Z3g4"
    },
    {
        "id_disco": 3376,
        "id": 469,
        "nombre_disco": "1977: Sin After Sin",
        "link": "http://zipansion.com/2Z3ga"
    },
    {
        "id_disco": 3377,
        "id": 469,
        "nombre_disco": "1978: Stained Class",
        "link": "http://zipansion.com/2Z3h8"
    },
    {
        "id_disco": 3378,
        "id": 469,
        "nombre_disco": "1978: The Best Of Judas Priest",
        "link": "http://zipansion.com/2Z3ho"
    },
    {
        "id_disco": 3379,
        "id": 469,
        "nombre_disco": "1979: Hell Bent For Leather",
        "link": "http://zipansion.com/2Z3iy"
    },
    {
        "id_disco": 3380,
        "id": 469,
        "nombre_disco": "1978: Killing Machine",
        "link": "http://zipansion.com/2Z4Ya"
    },
    {
        "id_disco": 3381,
        "id": 469,
        "nombre_disco": "1979: Hero  Hero",
        "link": "http://zipansion.com/2Z3k3"
    },
    {
        "id_disco": 3382,
        "id": 469,
        "nombre_disco": "1980: British Steel",
        "link": "http://zipansion.com/2Z3mX"
    },
    {
        "id_disco": 3383,
        "id": 469,
        "nombre_disco": "1981: Point of Entry",
        "link": "http://zipansion.com/2Z3nB"
    },
    {
        "id_disco": 3384,
        "id": 469,
        "nombre_disco": "1982: Screaming for Vengeance",
        "link": "http://zipansion.com/2Z3nh"
    },
    {
        "id_disco": 3385,
        "id": 469,
        "nombre_disco": "1984: Defenders of the Faith",
        "link": "http://zipansion.com/2Z3oX"
    },
    {
        "id_disco": 3386,
        "id": 469,
        "nombre_disco": "1986: Turbo",
        "link": "http://zipansion.com/2Z3pE"
    },
    {
        "id_disco": 3387,
        "id": 469,
        "nombre_disco": "1988: Ram It Down",
        "link": "http://zipansion.com/2Z3pp"
    },
    {
        "id_disco": 3388,
        "id": 469,
        "nombre_disco": "1990: Painkiller",
        "link": "http://zipansion.com/2Z3ql"
    },
    {
        "id_disco": 3389,
        "id": 469,
        "nombre_disco": "1993: Metal Works 73-93 (2CDs)",
        "link": "http://zipansion.com/2Z3ra"
    },
    {
        "id_disco": 3390,
        "id": 469,
        "nombre_disco": "1996:Prisoners Of Pain",
        "link": "http://zipansion.com/2Z3uI"
    },
    {
        "id_disco": 3391,
        "id": 469,
        "nombre_disco": "1997: Jugulator",
        "link": "http://zipansion.com/2Z3vj"
    },
    {
        "id_disco": 3392,
        "id": 469,
        "nombre_disco": "2001: Demolition",
        "link": "http://zipansion.com/2Z3wK"
    },
    {
        "id_disco": 3393,
        "id": 469,
        "nombre_disco": "2005: Angel of Retribution",
        "link": "http://zipansion.com/2Z3ww"
    },
    {
        "id_disco": 3394,
        "id": 469,
        "nombre_disco": "2006: The Essential Judas Priest (2CDs)",
        "link": "http://zipansion.com/2Z3xX"
    },
    {
        "id_disco": 3395,
        "id": 469,
        "nombre_disco": "2008: Greatest Hits",
        "link": "http://zipansion.com/2Z3yb"
    },
    {
        "id_disco": 3396,
        "id": 469,
        "nombre_disco": "2008: Nostradamus",
        "link": "http://zipansion.com/2Z40A"
    },
    {
        "id_disco": 3397,
        "id": 469,
        "nombre_disco": "2011: Single Cuts",
        "link": "http://zipansion.com/2Z40w"
    },
    {
        "id_disco": 3398,
        "id": 469,
        "nombre_disco": "2011: The Chosen Few",
        "link": "http://zipansion.com/2Z42F"
    },
    {
        "id_disco": 3399,
        "id": 469,
        "nombre_disco": "2012: Greatest Hits [Special Limited Edition] (2CDs)",
        "link": "http://zipansion.com/2Z43f"
    },
    {
        "id_disco": 3400,
        "id": 469,
        "nombre_disco": "2014: 5 Souls [EP]",
        "link": "http://zipansion.com/2Z44q"
    },
    {
        "id_disco": 3401,
        "id": 469,
        "nombre_disco": "2014: Redeemer of Souls",
        "link": "http://zipansion.com/2Z46X"
    },
    {
        "id_disco": 3402,
        "id": 469,
        "nombre_disco": "2018: Firepower",
        "link": "http://zipansion.com/2Z477"
    },
    {
        "id_disco": 3403,
        "id": 469,
        "nombre_disco": "2018: Hellfest  Clisson  France",
        "link": "http://zipansion.com/2Z47p"
    },
    {
        "id_disco": 3404,
        "id": 470,
        "nombre_disco": "2014 - Give Me Something (EP)",
        "link": "http://zipansion.com/2V8ra"
    },
    {
        "id_disco": 3405,
        "id": 470,
        "nombre_disco": "2015 - Oceans (EP)",
        "link": "http://zipansion.com/2V8sf"
    },
    {
        "id_disco": 3406,
        "id": 470,
        "nombre_disco": "2016 - Tell Me Its Real (Deluxe)",
        "link": "http://zipansion.com/2V8uL"
    },
    {
        "id_disco": 3407,
        "id": 471,
        "nombre_disco": "1996 Extraño lugar",
        "link": "http://zipansion.com/2TM1i"
    },
    {
        "id_disco": 3408,
        "id": 471,
        "nombre_disco": "1998 Amantes suicidas",
        "link": "http://zipansion.com/2TM2s"
    },
    {
        "id_disco": 3409,
        "id": 471,
        "nombre_disco": "2003 Ardimos",
        "link": "http://zipansion.com/2TM3U"
    },
    {
        "id_disco": 3410,
        "id": 471,
        "nombre_disco": "2006 Sistema nervioso central",
        "link": "http://zipansion.com/2TM58"
    },
    {
        "id_disco": 3411,
        "id": 471,
        "nombre_disco": "2009 Una temporada en el amor",
        "link": "http://zipansion.com/2TM65"
    },
    {
        "id_disco": 3412,
        "id": 471,
        "nombre_disco": "2010 America",
        "link": "http://zipansion.com/2TM6y"
    },
    {
        "id_disco": 3413,
        "id": 471,
        "nombre_disco": "2012 El Costado Izquierdo",
        "link": "http://zipansion.com/2TME2"
    },
    {
        "id_disco": 3414,
        "id": 471,
        "nombre_disco": "2014 Vivo en el Gran Rex",
        "link": "http://zipansion.com/2TMEj"
    },
    {
        "id_disco": 3415,
        "id": 471,
        "nombre_disco": "2016 Las antenas",
        "link": "http://zipansion.com/2TQ1q"
    },
    {
        "id_disco": 3416,
        "id": 472,
        "nombre_disco": "1967: The Doors",
        "link": "http://zipansion.com/2S3eR"
    },
    {
        "id_disco": 3417,
        "id": 472,
        "nombre_disco": "1967: Strange Days",
        "link": "http://zipansion.com/2S3dK"
    },
    {
        "id_disco": 3418,
        "id": 472,
        "nombre_disco": "1968: Waiting for the Sun",
        "link": "http://zipansion.com/2S3f5"
    },
    {
        "id_disco": 3419,
        "id": 472,
        "nombre_disco": "1969: The Soft Parade",
        "link": "http://zipansion.com/2S3fq"
    },
    {
        "id_disco": 3420,
        "id": 472,
        "nombre_disco": "1970: Morrison Hotel",
        "link": "http://zipansion.com/2S3ga"
    },
    {
        "id_disco": 3421,
        "id": 472,
        "nombre_disco": "1971: L.A. Woman",
        "link": "http://zipansion.com/2S3hI"
    },
    {
        "id_disco": 3422,
        "id": 472,
        "nombre_disco": "1971: Other Voices",
        "link": "http://zipansion.com/2S3i9"
    },
    {
        "id_disco": 3423,
        "id": 472,
        "nombre_disco": "1972: Full Circle",
        "link": "http://zipansion.com/2S3ik"
    },
    {
        "id_disco": 3424,
        "id": 472,
        "nombre_disco": "1978: An American Prayer",
        "link": "http://zipansion.com/2S3jg"
    },
    {
        "id_disco": 3425,
        "id": 473,
        "nombre_disco": "2004 Hopes and Fears",
        "link": "http://zipansion.com/2QxwV"
    },
    {
        "id_disco": 3426,
        "id": 473,
        "nombre_disco": "2006 Under the Iron Sea",
        "link": "http://zipansion.com/2Qy1c"
    },
    {
        "id_disco": 3427,
        "id": 473,
        "nombre_disco": "2008 Perfect Symmetry",
        "link": "http://zipansion.com/2Qy2U"
    },
    {
        "id_disco": 3428,
        "id": 473,
        "nombre_disco": "2012 Strangeland",
        "link": "http://zipansion.com/2Qy34"
    },
    {
        "id_disco": 3429,
        "id": 474,
        "nombre_disco": "A Storm in Heaven (1993)",
        "link": "http://zipansion.com/2QxcC"
    },
    {
        "id_disco": 3430,
        "id": 474,
        "nombre_disco": "A Northern Soul (1995)",
        "link": "http://zipansion.com/2Qxcf"
    },
    {
        "id_disco": 3431,
        "id": 474,
        "nombre_disco": "Urban Hymns (1997)",
        "link": "http://zipansion.com/2QxdH"
    },
    {
        "id_disco": 3432,
        "id": 474,
        "nombre_disco": "Forth (2008)",
        "link": "http://zipansion.com/2Qxe0"
    },
    {
        "id_disco": 3433,
        "id": 475,
        "nombre_disco": "1978: Serú Girán",
        "link": "http://zipansion.com/2Plxd"
    },
    {
        "id_disco": 3434,
        "id": 475,
        "nombre_disco": "1979: La grasa de las capitales",
        "link": "http://zipansion.com/2Ply0"
    },
    {
        "id_disco": 3435,
        "id": 475,
        "nombre_disco": "1980: Bicicleta",
        "link": "http://zipansion.com/2Plyn"
    },
    {
        "id_disco": 3436,
        "id": 475,
        "nombre_disco": "1981: Peperina",
        "link": "http://zipansion.com/2PlzO"
    },
    {
        "id_disco": 3437,
        "id": 475,
        "nombre_disco": "1982: No llores por mi  Argentina",
        "link": "http://zipansion.com/2Plzx"
    },
    {
        "id_disco": 3438,
        "id": 475,
        "nombre_disco": "1992: Serú 92",
        "link": "http://zipansion.com/2Pm1O"
    },
    {
        "id_disco": 3439,
        "id": 475,
        "nombre_disco": "1993: En Vivo",
        "link": "http://zipansion.com/2Pm1o"
    },
    {
        "id_disco": 3440,
        "id": 475,
        "nombre_disco": "2000: Yo no quiero volverme tan loco (1981)",
        "link": "http://zipansion.com/2Pm2p"
    },
    {
        "id_disco": 3441,
        "id": 476,
        "nombre_disco": "2001 - Heart-Shaped Scar",
        "link": "http://zipansion.com/2MgGA"
    },
    {
        "id_disco": 3442,
        "id": 476,
        "nombre_disco": "2004 - Suburban Sprawl & Alcohol",
        "link": "http://zipansion.com/2MgJ1"
    },
    {
        "id_disco": 3443,
        "id": 476,
        "nombre_disco": "2014 - Forever For Now",
        "link": "http://zipansion.com/2MgKQ"
    },
    {
        "id_disco": 3444,
        "id": 476,
        "nombre_disco": "2016 - Lost on You",
        "link": "http://zipansion.com/2MgLZ"
    },
    {
        "id_disco": 3445,
        "id": 476,
        "nombre_disco": "2018 - Heart to Mouth",
        "link": "http://eunsetee.com/CEmm"
    },
    {
        "id_disco": 3446,
        "id": 477,
        "nombre_disco": "1995: Viejas Locas",
        "link": "http://zipansion.com/2MLFu"
    },
    {
        "id_disco": 3447,
        "id": 477,
        "nombre_disco": "1997: Hermanos de Sangre",
        "link": "http://zipansion.com/2MLGq"
    },
    {
        "id_disco": 3448,
        "id": 477,
        "nombre_disco": "1999: Especial",
        "link": "http://zipansion.com/2MLHR"
    },
    {
        "id_disco": 3449,
        "id": 477,
        "nombre_disco": "2002: Sigue Pegando",
        "link": "http://zipansion.com/2MLIp"
    },
    {
        "id_disco": 3450,
        "id": 477,
        "nombre_disco": "2011: Contra la pared",
        "link": "http://zipansion.com/2MLJe"
    },
    {
        "id_disco": 3451,
        "id": 477,
        "nombre_disco": "Inédito",
        "link": "http://zipansion.com/2MLKP"
    },
    {
        "id_disco": 3452,
        "id": 478,
        "nombre_disco": "La carne (2008)",
        "link": "http://zipansion.com/2LERj"
    },
    {
        "id_disco": 3453,
        "id": 478,
        "nombre_disco": "Es (2010)",
        "link": "http://zipansion.com/2LESQ"
    },
    {
        "id_disco": 3454,
        "id": 478,
        "nombre_disco": "Blanco (2012)",
        "link": "http://zipansion.com/2LET1"
    },
    {
        "id_disco": 3455,
        "id": 478,
        "nombre_disco": "Huellas Digitales (2014)",
        "link": "http://zipansion.com/2LETe"
    },
    {
        "id_disco": 3456,
        "id": 478,
        "nombre_disco": "Barro y fauna (2016)",
        "link": "http://zipansion.com/2LEUA"
    },
    {
        "id_disco": 3457,
        "id": 479,
        "nombre_disco": "1982: Los abuelos de la Nada",
        "link": "http://zipansion.com/2KRAM"
    },
    {
        "id_disco": 3458,
        "id": 479,
        "nombre_disco": "1983: Vasos y besos",
        "link": "http://zipansion.com/2KRB1"
    },
    {
        "id_disco": 3459,
        "id": 479,
        "nombre_disco": "1984: Himno de mi corazón",
        "link": "http://zipansion.com/2KRBf"
    },
    {
        "id_disco": 3460,
        "id": 479,
        "nombre_disco": "1985: Los Abuelos en el Ópera (en vivo)",
        "link": "http://zipansion.com/2KRCJ"
    },
    {
        "id_disco": 3461,
        "id": 479,
        "nombre_disco": "1986: Cosas mías",
        "link": "http://zipansion.com/2KRD0"
    },
    {
        "id_disco": 3462,
        "id": 480,
        "nombre_disco": "2001: ¡¡Buen Día!!",
        "link": "http://zipansion.com/2JXut"
    },
    {
        "id_disco": 3463,
        "id": 480,
        "nombre_disco": "2003: No es sólo rock and roll",
        "link": "http://zipansion.com/2JXzs"
    },
    {
        "id_disco": 3464,
        "id": 480,
        "nombre_disco": "2005: Otro día en el planeta Tierra",
        "link": "http://zipansion.com/2JY0X"
    },
    {
        "id_disco": 3465,
        "id": 480,
        "nombre_disco": "2008 El exilio de las especies",
        "link": "http://zipansion.com/2JY1M"
    },
    {
        "id_disco": 3466,
        "id": 481,
        "nombre_disco": "1977:Motörhead",
        "link": "http://zipansion.com/2Hhx3"
    },
    {
        "id_disco": 3467,
        "id": 481,
        "nombre_disco": "1979:Overkill",
        "link": "http://zipansion.com/2Hhz8"
    },
    {
        "id_disco": 3468,
        "id": 481,
        "nombre_disco": "1979:Bomber",
        "link": "http://zipansion.com/2Hhxj"
    },
    {
        "id_disco": 3469,
        "id": 481,
        "nombre_disco": "1980:Ace of Spades",
        "link": "http://zipansion.com/2Hi08"
    },
    {
        "id_disco": 3470,
        "id": 481,
        "nombre_disco": "1982:Iron Fist",
        "link": "http://zipansion.com/2Hi0m"
    },
    {
        "id_disco": 3471,
        "id": 481,
        "nombre_disco": "1983:Another Perfect Day",
        "link": "http://zipansion.com/2Hi28"
    },
    {
        "id_disco": 3472,
        "id": 481,
        "nombre_disco": "1986:Orgasmatron",
        "link": "http://zipansion.com/2HiCB"
    },
    {
        "id_disco": 3473,
        "id": 481,
        "nombre_disco": "1987:Rock n Roll",
        "link": "http://zipansion.com/2Hi2q"
    },
    {
        "id_disco": 3474,
        "id": 481,
        "nombre_disco": "1989:Blitzkrieg On Birmingham 77",
        "link": "http://zipansion.com/2HiCo"
    },
    {
        "id_disco": 3475,
        "id": 481,
        "nombre_disco": "1991:1916",
        "link": "http://zipansion.com/2HiFm"
    },
    {
        "id_disco": 3476,
        "id": 481,
        "nombre_disco": "1992:March ör Die",
        "link": "http://zipansion.com/2HiHg"
    },
    {
        "id_disco": 3477,
        "id": 481,
        "nombre_disco": "1993:Bastards",
        "link": "http://zipansion.com/2HiOn"
    },
    {
        "id_disco": 3478,
        "id": 481,
        "nombre_disco": "1995:Sacrifice",
        "link": "http://zipansion.com/2HiPL"
    },
    {
        "id_disco": 3479,
        "id": 481,
        "nombre_disco": "1996:Overnight Sensation",
        "link": "http://zipansion.com/2HiQd"
    },
    {
        "id_disco": 3480,
        "id": 481,
        "nombre_disco": "1998:Snake Bite Love",
        "link": "http://zipansion.com/2HiSD"
    },
    {
        "id_disco": 3481,
        "id": 481,
        "nombre_disco": "2000:We Are Motörhead",
        "link": "http://zipansion.com/2HiSz"
    },
    {
        "id_disco": 3482,
        "id": 481,
        "nombre_disco": "2002:Hammered",
        "link": "http://zipansion.com/2HiUJ"
    },
    {
        "id_disco": 3483,
        "id": 481,
        "nombre_disco": "2004:Inferno",
        "link": "http://zipansion.com/2HiVz"
    },
    {
        "id_disco": 3484,
        "id": 481,
        "nombre_disco": "2006:Kiss of Death",
        "link": "http://zipansion.com/2HiWu"
    },
    {
        "id_disco": 3485,
        "id": 481,
        "nombre_disco": "2008:Motörizer",
        "link": "http://zipansion.com/2HiXu"
    },
    {
        "id_disco": 3486,
        "id": 481,
        "nombre_disco": "2011:The Wörld Is Yours",
        "link": "http://zipansion.com/2HiYr"
    },
    {
        "id_disco": 3487,
        "id": 481,
        "nombre_disco": "2013:Aftershock",
        "link": "http://zipansion.com/2HiZh"
    },
    {
        "id_disco": 3488,
        "id": 481,
        "nombre_disco": "2015:Bad Magic",
        "link": "http://zipansion.com/2HiaM"
    },
    {
        "id_disco": 3489,
        "id": 481,
        "nombre_disco": "2017:Under Cöver",
        "link": "http://zipansion.com/2HibP"
    },
    {
        "id_disco": 3490,
        "id": 482,
        "nombre_disco": "Pandemonium Shadow Show (1967)",
        "link": "http://zipansion.com/2DTiO"
    },
    {
        "id_disco": 3491,
        "id": 482,
        "nombre_disco": "Aerial Ballet (1968)",
        "link": "http://zipansion.com/2DTkt"
    },
    {
        "id_disco": 3492,
        "id": 482,
        "nombre_disco": "Harry (1969)",
        "link": "http://zipansion.com/2DTld"
    },
    {
        "id_disco": 3493,
        "id": 482,
        "nombre_disco": "Nilsson Sings Newman (1970)",
        "link": "http://zipansion.com/2DTmV"
    },
    {
        "id_disco": 3494,
        "id": 482,
        "nombre_disco": "The Point! (1971)",
        "link": "http://zipansion.com/2DTne"
    },
    {
        "id_disco": 3495,
        "id": 482,
        "nombre_disco": "Nilsson Schmilsson (1971)",
        "link": "http://zipansion.com/2DToq"
    },
    {
        "id_disco": 3496,
        "id": 482,
        "nombre_disco": "Son of Schmilsson (1972)",
        "link": "http://zipansion.com/2DTq3"
    },
    {
        "id_disco": 3497,
        "id": 482,
        "nombre_disco": "A Little Touch of Schmilsson in the Night (1973)",
        "link": "http://zipansion.com/2DTr1"
    },
    {
        "id_disco": 3498,
        "id": 482,
        "nombre_disco": "Pussy Cats (1974)",
        "link": "http://zipansion.com/2DTrn"
    },
    {
        "id_disco": 3499,
        "id": 482,
        "nombre_disco": "Duit on Mon Dei (1974)",
        "link": "http://zipansion.com/2DTsa"
    },
    {
        "id_disco": 3500,
        "id": 482,
        "nombre_disco": "Sandman (1975)",
        "link": "http://zipansion.com/2DTtM"
    },
    {
        "id_disco": 3501,
        "id": 482,
        "nombre_disco": "...Thats the Way It Is (1976)",
        "link": "http://zipansion.com/2DTuD"
    },
    {
        "id_disco": 3502,
        "id": 482,
        "nombre_disco": "Knnillssonn (1977)",
        "link": "http://zipansion.com/2DTvB"
    },
    {
        "id_disco": 3503,
        "id": 482,
        "nombre_disco": "The Best Of Harry Nilsson (2009)",
        "link": "http://zipansion.com/2DTw4"
    },
    {
        "id_disco": 3504,
        "id": 482,
        "nombre_disco": "Essential Nilsson (2013)",
        "link": "http://zipansion.com/2DTxw"
    },
    {
        "id_disco": 3505,
        "id": 483,
        "nombre_disco": "2010: Tourist History",
        "link": "http://zipansion.com/2C4YW"
    },
    {
        "id_disco": 3506,
        "id": 483,
        "nombre_disco": "2012: Beacon",
        "link": "http://zipansion.com/2C4ZJ"
    },
    {
        "id_disco": 3507,
        "id": 483,
        "nombre_disco": "2016: Gameshow",
        "link": "http://zipansion.com/2C4a1"
    },
    {
        "id_disco": 3508,
        "id": 484,
        "nombre_disco": "Is This It (2001)",
        "link": "http://zipansion.com/2C3Wo"
    },
    {
        "id_disco": 3509,
        "id": 484,
        "nombre_disco": "Room on Fire (2003)",
        "link": "http://zipansion.com/2C3XV"
    },
    {
        "id_disco": 3510,
        "id": 484,
        "nombre_disco": "First Impressions of Earth (2006)",
        "link": "http://zipansion.com/2C3YZ"
    },
    {
        "id_disco": 3511,
        "id": 484,
        "nombre_disco": "Angles (2011)",
        "link": "http://zipansion.com/2C3ZV"
    },
    {
        "id_disco": 3512,
        "id": 484,
        "nombre_disco": "Comedown Machine (2013)",
        "link": "http://zipansion.com/2C3Zm"
    },
    {
        "id_disco": 3513,
        "id": 484,
        "nombre_disco": "Future Present Past (2016)",
        "link": "http://zipansion.com/2C3ac"
    },
    {
        "id_disco": 3514,
        "id": 485,
        "nombre_disco": "2004: Hot Fuss",
        "link": "http://zipansion.com/2C0In"
    },
    {
        "id_disco": 3515,
        "id": 485,
        "nombre_disco": "2006: Sams Town",
        "link": "http://zipansion.com/2C0JJ"
    },
    {
        "id_disco": 3516,
        "id": 485,
        "nombre_disco": "2007: Sawdust",
        "link": "http://zipansion.com/2C0Jp"
    },
    {
        "id_disco": 3517,
        "id": 485,
        "nombre_disco": "2008: Day & Age",
        "link": "http://zipansion.com/2C0LN"
    },
    {
        "id_disco": 3518,
        "id": 485,
        "nombre_disco": "2012: Battle Born",
        "link": "http://zipansion.com/2C0NI"
    },
    {
        "id_disco": 3519,
        "id": 485,
        "nombre_disco": "2017: Wonderful Wonderful",
        "link": "http://zipansion.com/2C16Z"
    },
    {
        "id_disco": 3520,
        "id": 486,
        "nombre_disco": "2010: Slash",
        "link": "http://zipansion.com/2Ai7e"
    },
    {
        "id_disco": 3521,
        "id": 486,
        "nombre_disco": "2012: Apocalyptic Love",
        "link": "http://zipansion.com/2Ai9B"
    },
    {
        "id_disco": 3522,
        "id": 486,
        "nombre_disco": "2014: World on Fire",
        "link": "http://zipansion.com/2AiAL"
    },
    {
        "id_disco": 3523,
        "id": 487,
        "nombre_disco": "The Paul Simon Songbook (1965)",
        "link": "http://zipansion.com/2Afnd"
    },
    {
        "id_disco": 3524,
        "id": 487,
        "nombre_disco": "Paul Simon (1972)",
        "link": "http://zipansion.com/2Afrd"
    },
    {
        "id_disco": 3525,
        "id": 487,
        "nombre_disco": "There Goes Rhymin Simon (1973)",
        "link": "http://zipansion.com/2Afst"
    },
    {
        "id_disco": 3526,
        "id": 487,
        "nombre_disco": "Live Rhymin’ (1974)",
        "link": "http://zipansion.com/2AfuM"
    },
    {
        "id_disco": 3527,
        "id": 487,
        "nombre_disco": "Still Crazy After All These Years (1975)",
        "link": "http://zipansion.com/2Afxb"
    },
    {
        "id_disco": 3528,
        "id": 487,
        "nombre_disco": "One-Trick Pony (1980)",
        "link": "http://zipansion.com/2Afy6"
    },
    {
        "id_disco": 3529,
        "id": 487,
        "nombre_disco": "Hearts and Bones (1983)",
        "link": "http://zipansion.com/2Afza"
    },
    {
        "id_disco": 3530,
        "id": 487,
        "nombre_disco": "Graceland (1986)",
        "link": "http://zipansion.com/2Ag0h"
    },
    {
        "id_disco": 3531,
        "id": 487,
        "nombre_disco": "The Rhythm of the Saints (1990)",
        "link": "http://zipansion.com/2Ag1p"
    },
    {
        "id_disco": 3532,
        "id": 487,
        "nombre_disco": "Concert In The Park (1991)",
        "link": "http://zipansion.com/2Ag2D"
    },
    {
        "id_disco": 3533,
        "id": 487,
        "nombre_disco": "1964-1993 (1993)",
        "link": "http://zipansion.com/2Ag4A"
    },
    {
        "id_disco": 3534,
        "id": 487,
        "nombre_disco": "Songs from The Capeman (1997)",
        "link": "http://zipansion.com/2AgCX"
    },
    {
        "id_disco": 3535,
        "id": 487,
        "nombre_disco": "Youre the One (2000)",
        "link": "http://zipansion.com/2AgDh"
    },
    {
        "id_disco": 3536,
        "id": 487,
        "nombre_disco": "Surprise (2006)",
        "link": "http://zipansion.com/2AgF6"
    },
    {
        "id_disco": 3537,
        "id": 487,
        "nombre_disco": "So Beautiful or So What (2011)",
        "link": "http://zipansion.com/2AgFl"
    },
    {
        "id_disco": 3538,
        "id": 487,
        "nombre_disco": "Live In New York City (2012)",
        "link": "http://zipansion.com/2AgGJ"
    },
    {
        "id_disco": 3539,
        "id": 487,
        "nombre_disco": "The Ultimate Collection (2015)",
        "link": "http://zipansion.com/2AgKW"
    },
    {
        "id_disco": 3540,
        "id": 487,
        "nombre_disco": "Stranger to Stranger (2016)",
        "link": "http://zipansion.com/2AgMo"
    },
    {
        "id_disco": 3541,
        "id": 487,
        "nombre_disco": "The Concert In Hyde Park (2017)",
        "link": "http://zipansion.com/2AgPO"
    },
    {
        "id_disco": 3542,
        "id": 488,
        "nombre_disco": "Torches (2011)",
        "link": "http://zipansion.com/293wX"
    },
    {
        "id_disco": 3543,
        "id": 488,
        "nombre_disco": "Supermodel (2014)",
        "link": "http://zipansion.com/293xw"
    },
    {
        "id_disco": 3544,
        "id": 488,
        "nombre_disco": "Sacred Hearts Club (2017)",
        "link": "http://zipansion.com/293zK"
    },
    {
        "id_disco": 3545,
        "id": 489,
        "nombre_disco": "From Genesis to Revelation 1969",
        "link": "http://zipansion.com/2930z"
    },
    {
        "id_disco": 3546,
        "id": 489,
        "nombre_disco": "Trespass 1970",
        "link": "http://zipansion.com/2932H"
    },
    {
        "id_disco": 3547,
        "id": 489,
        "nombre_disco": "Nursery Cryme 1971",
        "link": "http://zipansion.com/2933x"
    },
    {
        "id_disco": 3548,
        "id": 489,
        "nombre_disco": "Foxtrot 1972",
        "link": "http://zipansion.com/2934Z"
    },
    {
        "id_disco": 3549,
        "id": 489,
        "nombre_disco": "Selling England By The Pound 1973",
        "link": "http://zipansion.com/2935N"
    },
    {
        "id_disco": 3550,
        "id": 489,
        "nombre_disco": "The Lamb Lies Down On Broadway 1974",
        "link": "http://zipansion.com/2936V"
    },
    {
        "id_disco": 3551,
        "id": 489,
        "nombre_disco": "A Trick of the Tail 1976",
        "link": "http://zipansion.com/29389"
    },
    {
        "id_disco": 3552,
        "id": 489,
        "nombre_disco": "Wind & Wuthering 1976",
        "link": "http://zipansion.com/2938x"
    },
    {
        "id_disco": 3553,
        "id": 489,
        "nombre_disco": "...And Then There Were Three... 1978",
        "link": "http://zipansion.com/2939e"
    },
    {
        "id_disco": 3554,
        "id": 489,
        "nombre_disco": "Duke 1980",
        "link": "http://zipansion.com/293A8"
    },
    {
        "id_disco": 3555,
        "id": 489,
        "nombre_disco": "Abacab 1981",
        "link": "http://zipansion.com/293BP"
    },
    {
        "id_disco": 3556,
        "id": 489,
        "nombre_disco": "Genesis 1983",
        "link": "http://zipansion.com/293CX"
    },
    {
        "id_disco": 3557,
        "id": 489,
        "nombre_disco": "Invisible Touch 1986",
        "link": "http://zipansion.com/293DM"
    },
    {
        "id_disco": 3558,
        "id": 489,
        "nombre_disco": "We Cant Dance 1991",
        "link": "http://zipansion.com/293EQ"
    },
    {
        "id_disco": 3559,
        "id": 489,
        "nombre_disco": "Calling All Stations 1997",
        "link": "http://zipansion.com/293FN"
    },
    {
        "id_disco": 3560,
        "id": 490,
        "nombre_disco": "2010: Lana Del Ray",
        "link": "http://zipansion.com/27vlH"
    },
    {
        "id_disco": 3561,
        "id": 490,
        "nombre_disco": "2012: Born to Die",
        "link": "http://zipansion.com/27w6X"
    },
    {
        "id_disco": 3562,
        "id": 490,
        "nombre_disco": "2014: Ultraviolence",
        "link": "http://zipansion.com/27wCG"
    },
    {
        "id_disco": 3563,
        "id": 490,
        "nombre_disco": "2015: Honeymoon",
        "link": "http://zipansion.com/27wDC"
    },
    {
        "id_disco": 3564,
        "id": 490,
        "nombre_disco": "2017: Lust for Life",
        "link": "http://zipansion.com/288H2"
    },
    {
        "id_disco": 3565,
        "id": 491,
        "nombre_disco": "Funeral (2004)",
        "link": "http://zipansion.com/27uJe"
    },
    {
        "id_disco": 3566,
        "id": 491,
        "nombre_disco": "Neon Bible (2007)",
        "link": "http://zipansion.com/27uKA"
    },
    {
        "id_disco": 3567,
        "id": 491,
        "nombre_disco": "The Suburbs (Deluxe Edition) (2010)",
        "link": "http://zipansion.com/27uKf"
    },
    {
        "id_disco": 3568,
        "id": 491,
        "nombre_disco": "Reflektor (2013)",
        "link": "http://zipansion.com/27uMA"
    },
    {
        "id_disco": 3569,
        "id": 491,
        "nombre_disco": "Everything Now (2017)",
        "link": "http://zipansion.com/27uMc"
    },
    {
        "id_disco": 3570,
        "id": 492,
        "nombre_disco": "1996: Infinite",
        "link": "http://zipansion.com/2687b"
    },
    {
        "id_disco": 3571,
        "id": 492,
        "nombre_disco": "1999: The Slim Shady LP",
        "link": "http://zipansion.com/2689B"
    },
    {
        "id_disco": 3572,
        "id": 492,
        "nombre_disco": "2000: The Marshall Mathers LP",
        "link": "http://zipansion.com/2689w"
    },
    {
        "id_disco": 3573,
        "id": 492,
        "nombre_disco": "2002: The Eminem Show",
        "link": "http://zipansion.com/268Af"
    },
    {
        "id_disco": 3574,
        "id": 492,
        "nombre_disco": "2004: Encore",
        "link": "http://zipansion.com/268Ba"
    },
    {
        "id_disco": 3575,
        "id": 492,
        "nombre_disco": "2009: Relapse",
        "link": "http://zipansion.com/268Cu"
    },
    {
        "id_disco": 3576,
        "id": 492,
        "nombre_disco": "2010: Recovery",
        "link": "http://zipansion.com/268E8"
    },
    {
        "id_disco": 3577,
        "id": 492,
        "nombre_disco": "2013: The Marshall Mathers LP 2",
        "link": "http://zipansion.com/268Et"
    },
    {
        "id_disco": 3578,
        "id": 492,
        "nombre_disco": "2014: Shady XV",
        "link": "http://zipansion.com/268FW"
    },
    {
        "id_disco": 3579,
        "id": 492,
        "nombre_disco": "2017: Revival",
        "link": "http://zipansion.com/268HG"
    },
    {
        "id_disco": 3580,
        "id": 493,
        "nombre_disco": "Killing Is My Business... and Business Is Good! (1985)",
        "link": "http://zipansion.com/267Kg"
    },
    {
        "id_disco": 3581,
        "id": 493,
        "nombre_disco": "Peace Sells... but Whos Buying? (1986)",
        "link": "http://zipansion.com/267L9"
    },
    {
        "id_disco": 3582,
        "id": 493,
        "nombre_disco": "So Far  So Good... So What! (1988)",
        "link": "http://zipansion.com/267MJ"
    },
    {
        "id_disco": 3583,
        "id": 493,
        "nombre_disco": "Rust in Peace (1990)",
        "link": "http://zipansion.com/267NE"
    },
    {
        "id_disco": 3584,
        "id": 493,
        "nombre_disco": "Countdown to Extinction (1992)",
        "link": "http://zipansion.com/267OX"
    },
    {
        "id_disco": 3585,
        "id": 493,
        "nombre_disco": "Youthanasia (1994)",
        "link": "http://zipansion.com/267R6"
    },
    {
        "id_disco": 3586,
        "id": 493,
        "nombre_disco": "Cryptic Writings (1997)",
        "link": "http://zipansion.com/267Rc"
    },
    {
        "id_disco": 3587,
        "id": 493,
        "nombre_disco": "Risk (1999)",
        "link": "http://zipansion.com/267S6"
    },
    {
        "id_disco": 3588,
        "id": 493,
        "nombre_disco": "The World Needs a Hero (2001)",
        "link": "http://zipansion.com/267Sh"
    },
    {
        "id_disco": 3589,
        "id": 493,
        "nombre_disco": "The System Has Failed (2004)",
        "link": "http://zipansion.com/267U5"
    },
    {
        "id_disco": 3590,
        "id": 493,
        "nombre_disco": "United Abominations (2007)",
        "link": "http://zipansion.com/267Ua"
    },
    {
        "id_disco": 3591,
        "id": 493,
        "nombre_disco": "Endgame (2009)",
        "link": "http://zipansion.com/267V9"
    },
    {
        "id_disco": 3592,
        "id": 493,
        "nombre_disco": "Thirteen (2011)",
        "link": "http://zipansion.com/267Vn"
    },
    {
        "id_disco": 3593,
        "id": 493,
        "nombre_disco": "Super Collider (2013)",
        "link": "http://zipansion.com/267WD"
    },
    {
        "id_disco": 3594,
        "id": 493,
        "nombre_disco": "Dystopia (2016)",
        "link": "http://zipansion.com/267Wk"
    },
    {
        "id_disco": 3595,
        "id": 494,
        "nombre_disco": "Rage Against the Machine (1992)",
        "link": "http://zipansion.com/25X4i"
    },
    {
        "id_disco": 3596,
        "id": 494,
        "nombre_disco": "Evil Empire (1996)",
        "link": "http://zipansion.com/25X5E"
    },
    {
        "id_disco": 3597,
        "id": 494,
        "nombre_disco": "The Battle of Los Angeles (1999)",
        "link": "http://zipansion.com/25X5m"
    },
    {
        "id_disco": 3598,
        "id": 494,
        "nombre_disco": "Renegades (2000)",
        "link": "http://zipansion.com/25X6H"
    },
    {
        "id_disco": 3599,
        "id": 494,
        "nombre_disco": "XX 20th Anniversary Edition (2012)",
        "link": "http://zipansion.com/25X7K"
    },
    {
        "id_disco": 3600,
        "id": 495,
        "nombre_disco": "Lend Me Your Eyes (EP) (2008).",
        "link": "http://zipansion.com/24u8G"
    },
    {
        "id_disco": 3601,
        "id": 495,
        "nombre_disco": "Love Your Ground (EP) (2008).",
        "link": "http://zipansion.com/24uDe"
    },
    {
        "id_disco": 3602,
        "id": 495,
        "nombre_disco": "Mumford & Sons (EP) (2008)",
        "link": "http://zipansion.com/24uFB"
    },
    {
        "id_disco": 3603,
        "id": 495,
        "nombre_disco": "Little Lion Man (Single) (VBR) (2008)",
        "link": "http://zipansion.com/24uKD"
    },
    {
        "id_disco": 3604,
        "id": 495,
        "nombre_disco": "Sigh No More (2009)",
        "link": "http://zipansion.com/24uxy"
    },
    {
        "id_disco": 3605,
        "id": 495,
        "nombre_disco": "The Cave And The Open Sea (Single) (2009).",
        "link": "http://zipansion.com/24uz0"
    },
    {
        "id_disco": 3606,
        "id": 495,
        "nombre_disco": "2009 - Winter Winds (Single)",
        "link": "http://zipansion.com/24v0L"
    },
    {
        "id_disco": 3607,
        "id": 495,
        "nombre_disco": "Club 69 Brussels BE 22-02-2010 (Bootleg) (2010)",
        "link": "http://zipansion.com/24v5f"
    },
    {
        "id_disco": 3608,
        "id": 495,
        "nombre_disco": "Mumford & Sons  Laura Marling & Dharohar Project (EP) (2010)",
        "link": "http://zipansion.com/24vAk"
    },
    {
        "id_disco": 3609,
        "id": 495,
        "nombre_disco": "Roll Away Your Stone (Single) (2010)",
        "link": "http://zipansion.com/24vFM"
    },
    {
        "id_disco": 3610,
        "id": 495,
        "nombre_disco": "The Cave (Single) (2010)",
        "link": "http://zipansion.com/24vJy"
    },
    {
        "id_disco": 3611,
        "id": 495,
        "nombre_disco": "Babel (2012)",
        "link": "http://zipansion.com/24vLq"
    },
    {
        "id_disco": 3612,
        "id": 495,
        "nombre_disco": "Deluxe Companion (Live at Shepherds Bush Empire  London) (2012)",
        "link": "http://zipansion.com/24vNd"
    },
    {
        "id_disco": 3613,
        "id": 495,
        "nombre_disco": "The Road To Red Rocks (Live From Red Rocks  Colorado) (2012)",
        "link": "http://zipansion.com/24vQt"
    },
    {
        "id_disco": 3614,
        "id": 495,
        "nombre_disco": "Live From Bull Moose (2013)",
        "link": "http://zipansion.com/24vUm"
    },
    {
        "id_disco": 3615,
        "id": 495,
        "nombre_disco": "Believe (Single) (2015)",
        "link": "http://zipansion.com/24vY1"
    },
    {
        "id_disco": 3616,
        "id": 495,
        "nombre_disco": "Wilder Mind (Deluxe) (2015)",
        "link": "http://zipansion.com/24vbD"
    },
    {
        "id_disco": 3617,
        "id": 495,
        "nombre_disco": "Johannesburg (colaboración con Baaba Maal  The Very Best y Beatenberg) (2016).",
        "link": "http://zipansion.com/24ve1"
    },
    {
        "id_disco": 3618,
        "id": 495,
        "nombre_disco": "Live From South Africa. Dust And Thunder (2017)",
        "link": "http://zipansion.com/24vfm"
    },
    {
        "id_disco": 3619,
        "id": 496,
        "nombre_disco": "1997: Kyuss & Queens of the Stone Age [Split EP]",
        "link": "http://zipansion.com/24s6X"
    },
    {
        "id_disco": 3620,
        "id": 496,
        "nombre_disco": "1998: Queens of the Stone Age",
        "link": "http://zipansion.com/24s8r"
    },
    {
        "id_disco": 3621,
        "id": 496,
        "nombre_disco": "1998: The Split CD [EP]",
        "link": "http://zipansion.com/24s9i"
    },
    {
        "id_disco": 3622,
        "id": 496,
        "nombre_disco": "2000: Rated R",
        "link": "http://zipansion.com/24sCm"
    },
    {
        "id_disco": 3623,
        "id": 496,
        "nombre_disco": "2002: Sample This School Boy [EP]",
        "link": "http://zipansion.com/24sDY"
    },
    {
        "id_disco": 3624,
        "id": 496,
        "nombre_disco": "2002: Songs for the Deaf",
        "link": "http://zipansion.com/24sFb"
    },
    {
        "id_disco": 3625,
        "id": 496,
        "nombre_disco": "2004: Stone Age Complication [EP]",
        "link": "http://zipansion.com/24sH2"
    },
    {
        "id_disco": 3626,
        "id": 496,
        "nombre_disco": "2005: Lullabies to Paralyze",
        "link": "http://zipansion.com/24sIS"
    },
    {
        "id_disco": 3627,
        "id": 496,
        "nombre_disco": "2005: Over the Years and Through the Woods",
        "link": "http://zipansion.com/24sJD"
    },
    {
        "id_disco": 3628,
        "id": 496,
        "nombre_disco": "2007: Era Vulgaris",
        "link": "http://zipansion.com/24sKv"
    },
    {
        "id_disco": 3629,
        "id": 496,
        "nombre_disco": "2013: ...Like Clockwork",
        "link": "http://zipansion.com/24sLd"
    },
    {
        "id_disco": 3630,
        "id": 496,
        "nombre_disco": "2017: Villains",
        "link": "http://zipansion.com/24sMP"
    },
    {
        "id_disco": 3631,
        "id": 497,
        "nombre_disco": "1997: Radical Sonora",
        "link": "http://zipansion.com/22367"
    },
    {
        "id_disco": 3632,
        "id": 497,
        "nombre_disco": "1999: Pequeño",
        "link": "http://zipansion.com/23NGG"
    },
    {
        "id_disco": 3633,
        "id": 497,
        "nombre_disco": "2000: Pequeño cabaret ambulante",
        "link": "http://zipansion.com/2236u"
    },
    {
        "id_disco": 3634,
        "id": 497,
        "nombre_disco": "2002: Flamingos",
        "link": "http://zipansion.com/2237S"
    },
    {
        "id_disco": 3635,
        "id": 497,
        "nombre_disco": "2003: Una cita en Flamingos",
        "link": "http://zipansion.com/23Q4I"
    },
    {
        "id_disco": 3636,
        "id": 497,
        "nombre_disco": "2004: El viaje a ninguna parte Parte A: ",
        "link": "http://zipansion.com/223G3"
    },
    {
        "id_disco": 3637,
        "id": 497,
        "nombre_disco": "2004: El viaje a ninguna parte Parte B:",
        "link": "http://zipansion.com/223Iy"
    },
    {
        "id_disco": 3638,
        "id": 497,
        "nombre_disco": "2005: Freak Show",
        "link": "http://zipansion.com/23NHw"
    },
    {
        "id_disco": 3639,
        "id": 497,
        "nombre_disco": "2006: Canciones 1996-2006",
        "link": "http://zipansion.com/23NJ9"
    },
    {
        "id_disco": 3640,
        "id": 497,
        "nombre_disco": "2006: El Tiempo de las Cerezas",
        "link": "http://zipansion.com/23ODk"
    },
    {
        "id_disco": 3641,
        "id": 497,
        "nombre_disco": "2008: Hellville de Luxe",
        "link": "http://zipansion.com/223KE"
    },
    {
        "id_disco": 3642,
        "id": 497,
        "nombre_disco": "2010: Las Consecuencias",
        "link": "http://zipansion.com/223Kp"
    },
    {
        "id_disco": 3643,
        "id": 497,
        "nombre_disco": "2011: Gran Rex",
        "link": "http://zipansion.com/23Q5b"
    },
    {
        "id_disco": 3644,
        "id": 497,
        "nombre_disco": "2011: Licenciado Cantinas",
        "link": "http://zipansion.com/223MO"
    },
    {
        "id_disco": 3645,
        "id": 497,
        "nombre_disco": "2013: Palosanto",
        "link": "http://zipansion.com/223Mw"
    },
    {
        "id_disco": 3646,
        "id": 497,
        "nombre_disco": "2014: Madrid  Área 51",
        "link": "http://zipansion.com/23Q7C"
    },
    {
        "id_disco": 3647,
        "id": 497,
        "nombre_disco": "2015: MTV Unplugged",
        "link": "http://zipansion.com/23Q8C"
    },
    {
        "id_disco": 3648,
        "id": 497,
        "nombre_disco": "2016: Archivos Vol.1 : Tributos y BSOs",
        "link": "http://zipansion.com/23Q96"
    },
    {
        "id_disco": 3649,
        "id": 497,
        "nombre_disco": "2016: Archivos Vol. 2: Duetos",
        "link": "http://zipansion.com/23Q9o"
    },
    {
        "id_disco": 3650,
        "id": 497,
        "nombre_disco": "2017: Expectativas",
        "link": "http://zipansion.com/223OR"
    },
    {
        "id_disco": 3651,
        "id": 498,
        "nombre_disco": "The Frog Prince (1985):",
        "link": "http://zipansion.com/221yO"
    },
    {
        "id_disco": 3652,
        "id": 498,
        "nombre_disco": "Enya (1987): ",
        "link": "http://zipansion.com/21uNt"
    },
    {
        "id_disco": 3653,
        "id": 498,
        "nombre_disco": "1988 - Orinoco Flow (Sail Away)",
        "link": "http://zipansion.com/21uRz"
    },
    {
        "id_disco": 3654,
        "id": 498,
        "nombre_disco": "Watermark (1988): ",
        "link": "http://zipansion.com/21uSb"
    },
    {
        "id_disco": 3655,
        "id": 498,
        "nombre_disco": "1989 - Storms In Africa",
        "link": "http://zipansion.com/21uVq"
    },
    {
        "id_disco": 3656,
        "id": 498,
        "nombre_disco": "1991 - Caribbean Blue",
        "link": "http://zipansion.com/21uZ5"
    },
    {
        "id_disco": 3657,
        "id": 498,
        "nombre_disco": "1991 - Exile ",
        "link": "http://zipansion.com/21ubt"
    },
    {
        "id_disco": 3658,
        "id": 498,
        "nombre_disco": "Shepherd Moons (1991): ",
        "link": "http://zipansion.com/21ucN"
    },
    {
        "id_disco": 3659,
        "id": 498,
        "nombre_disco": "1992 - Book Of Days",
        "link": "http://zipansion.com/21uf8"
    },
    {
        "id_disco": 3660,
        "id": 498,
        "nombre_disco": "1992 - Toys (Music from the Original Motion Picture Soundtrack)",
        "link": "http://zipansion.com/21uiX"
    },
    {
        "id_disco": 3661,
        "id": 498,
        "nombre_disco": "1994 - The Christmas EP",
        "link": "http://zipansion.com/21ulG"
    },
    {
        "id_disco": 3662,
        "id": 498,
        "nombre_disco": "1995 - Greatest Hits 1988-1995 (Unofficial)",
        "link": "http://zipansion.com/21unv"
    },
    {
        "id_disco": 3663,
        "id": 498,
        "nombre_disco": "1995 - The Frog Prince (original Movie Soundtrack)",
        "link": "http://zipansion.com/21uqa"
    },
    {
        "id_disco": 3664,
        "id": 498,
        "nombre_disco": "The Memory of Trees (1995):",
        "link": "http://zipansion.com/21urU"
    },
    {
        "id_disco": 3665,
        "id": 498,
        "nombre_disco": "1996 - On My Way Home",
        "link": "http://zipansion.com/21uu2"
    },
    {
        "id_disco": 3666,
        "id": 498,
        "nombre_disco": "1997 - 6 Tracks ",
        "link": "http://zipansion.com/21uvm"
    },
    {
        "id_disco": 3667,
        "id": 498,
        "nombre_disco": "Paint the Sky with Stars: The Best of Enya (1997): ",
        "link": "http://zipansion.com/221zJ"
    },
    {
        "id_disco": 3668,
        "id": 498,
        "nombre_disco": "A Box of Dreams (1998):",
        "link": "http://zipansion.com/21uwl"
    },
    {
        "id_disco": 3669,
        "id": 498,
        "nombre_disco": "A Day without Rain (2000):",
        "link": "http://zipansion.com/21v19"
    },
    {
        "id_disco": 3670,
        "id": 498,
        "nombre_disco": "2001 - Only Time (Remix & Original Version)",
        "link": "http://zipansion.com/21v2W"
    },
    {
        "id_disco": 3671,
        "id": 498,
        "nombre_disco": "2001 - Themes From Calmi Cuori Appassionati",
        "link": "http://zipansion.com/21v43"
    },
    {
        "id_disco": 3672,
        "id": 498,
        "nombre_disco": "2001 - Wild Child",
        "link": "http://zipansion.com/21v5b"
    },
    {
        "id_disco": 3673,
        "id": 498,
        "nombre_disco": "2002 - Only Time The Collection",
        "link": "http://zipansion.com/21v6d"
    },
    {
        "id_disco": 3674,
        "id": 498,
        "nombre_disco": "Amarantine (2005):",
        "link": "http://zipansion.com/21v7P"
    },
    {
        "id_disco": 3675,
        "id": 498,
        "nombre_disco": "2006 - Amarantine Special Christmas Edition",
        "link": "http://zipansion.com/21v99"
    },
    {
        "id_disco": 3676,
        "id": 498,
        "nombre_disco": "2006 - Christmas Secrets EP",
        "link": "http://zipansion.com/21vBl"
    },
    {
        "id_disco": 3677,
        "id": 498,
        "nombre_disco": "2006 - Sounds Of The Season (The Enya Collection)",
        "link": "http://zipansion.com/21vEv"
    },
    {
        "id_disco": 3678,
        "id": 498,
        "nombre_disco": "And Winter Came (2008):",
        "link": "http://zipansion.com/21vFo"
    },
    {
        "id_disco": 3679,
        "id": 498,
        "nombre_disco": "The Very Best of Enya (Deluxe Edition) (2009): ",
        "link": "http://zipansion.com/21vGR"
    },
    {
        "id_disco": 3680,
        "id": 498,
        "nombre_disco": "Dark Sky Island (2015): ",
        "link": "http://zipansion.com/2220D"
    },
    {
        "id_disco": 3681,
        "id": 499,
        "nombre_disco": "Enanitos Verdes (1984)",
        "link": "http://zipansion.com/207Qi"
    },
    {
        "id_disco": 3682,
        "id": 499,
        "nombre_disco": "Contrarreloj (1986)",
        "link": "http://zipansion.com/207S0"
    },
    {
        "id_disco": 3683,
        "id": 499,
        "nombre_disco": "Habitaciones extrañas (1987)",
        "link": "http://zipansion.com/207TA"
    },
    {
        "id_disco": 3684,
        "id": 499,
        "nombre_disco": "Carrousel (1988)",
        "link": "http://zipansion.com/207Ug"
    },
    {
        "id_disco": 3685,
        "id": 499,
        "nombre_disco": "Había una vez... (1989)",
        "link": "http://zipansion.com/20DV2"
    },
    {
        "id_disco": 3686,
        "id": 499,
        "nombre_disco": "Igual que ayer (1992)",
        "link": "http://zipansion.com/20DWO"
    },
    {
        "id_disco": 3687,
        "id": 499,
        "nombre_disco": "20 Grandes Exitos (1992)",
        "link": "http://zipansion.com/207X9"
    },
    {
        "id_disco": 3688,
        "id": 499,
        "nombre_disco": "Big Bang (1994)",
        "link": "http://zipansion.com/207ei"
    },
    {
        "id_disco": 3689,
        "id": 499,
        "nombre_disco": "Guerra gaucha (1996)",
        "link": "http://zipansion.com/207fZ"
    },
    {
        "id_disco": 3690,
        "id": 499,
        "nombre_disco": "Planetario (1997)",
        "link": "http://zipansion.com/207ge"
    },
    {
        "id_disco": 3691,
        "id": 499,
        "nombre_disco": "Tracción acústica (1998)",
        "link": "http://zipansion.com/207i1"
    },
    {
        "id_disco": 3692,
        "id": 499,
        "nombre_disco": "Néctar (1999)",
        "link": "http://zipansion.com/207s2"
    },
    {
        "id_disco": 3693,
        "id": 499,
        "nombre_disco": "Colección Aniversario (1999)",
        "link": "http://zipansion.com/207kK"
    },
    {
        "id_disco": 3694,
        "id": 499,
        "nombre_disco": "Antologia (2000)",
        "link": "http://zipansion.com/207u4"
    },
    {
        "id_disco": 3695,
        "id": 499,
        "nombre_disco": "Amores lejanos (2002)",
        "link": "http://zipansion.com/2080y"
    },
    {
        "id_disco": 3696,
        "id": 499,
        "nombre_disco": "En vivo (2004)",
        "link": "http://zipansion.com/2081w"
    },
    {
        "id_disco": 3697,
        "id": 499,
        "nombre_disco": "Originales - 20 Exitos (2005)",
        "link": "http://zipansion.com/2083E"
    },
    {
        "id_disco": 3698,
        "id": 499,
        "nombre_disco": "Este es tu Rock (2006)",
        "link": "http://zipansion.com/2089I"
    },
    {
        "id_disco": 3699,
        "id": 499,
        "nombre_disco": "Pescado original (2006)",
        "link": "http://zipansion.com/208Es"
    },
    {
        "id_disco": 3700,
        "id": 499,
        "nombre_disco": "Colección Suprema (2007)",
        "link": "http://zipansion.com/208GN"
    },
    {
        "id_disco": 3701,
        "id": 499,
        "nombre_disco": "Inéditos (2010)",
        "link": "http://zipansion.com/208LH"
    },
    {
        "id_disco": 3702,
        "id": 499,
        "nombre_disco": "Recupera tus Clásicos (2010)",
        "link": "http://zipansion.com/208Mi"
    },
    {
        "id_disco": 3703,
        "id": 499,
        "nombre_disco": "Tic Tac (2013)",
        "link": "http://zipansion.com/208Ra"
    },
    {
        "id_disco": 3704,
        "id": 500,
        "nombre_disco": "Milagro En El Congo (1983)",
        "link": "http://zipansion.com/1yfET"
    },
    {
        "id_disco": 3705,
        "id": 500,
        "nombre_disco": "Hombres G (1985)",
        "link": "http://zipansion.com/1yfJC"
    },
    {
        "id_disco": 3706,
        "id": 500,
        "nombre_disco": "La cagaste... Burt Lancaster (1986)",
        "link": "http://zipansion.com/1yfJm"
    },
    {
        "id_disco": 3707,
        "id": 500,
        "nombre_disco": "Estamos locos... ¿o qué? (1987)",
        "link": "http://zipansion.com/1yfKO"
    },
    {
        "id_disco": 3708,
        "id": 500,
        "nombre_disco": "Agitar antes de usar (1988)",
        "link": "http://zipansion.com/1yfLO"
    },
    {
        "id_disco": 3709,
        "id": 500,
        "nombre_disco": "Voy a pasármelo bien (1989)",
        "link": "http://zipansion.com/1yfME"
    },
    {
        "id_disco": 3710,
        "id": 500,
        "nombre_disco": "Ésta es tu vida (1990)",
        "link": "http://zipansion.com/1yfMq"
    },
    {
        "id_disco": 3711,
        "id": 500,
        "nombre_disco": "Historia del bikini (1992)",
        "link": "http://zipansion.com/1yfNS"
    },
    {
        "id_disco": 3712,
        "id": 500,
        "nombre_disco": "Los singles (1984-1993)",
        "link": "http://zipansion.com/1yfOn"
    },
    {
        "id_disco": 3713,
        "id": 500,
        "nombre_disco": "Las Baladas (1996)",
        "link": "http://zipansion.com/1yfYH"
    },
    {
        "id_disco": 3714,
        "id": 500,
        "nombre_disco": "Peligrosamente juntos (2002)",
        "link": "http://zipansion.com/1yfbx"
    },
    {
        "id_disco": 3715,
        "id": 500,
        "nombre_disco": "Todo esto es muy extraño (2004)",
        "link": "http://zipansion.com/1yfdP"
    },
    {
        "id_disco": 3716,
        "id": 500,
        "nombre_disco": "El Año Que Vivimos Peligrosamente (2004)",
        "link": "http://zipansion.com/1ygwC"
    },
    {
        "id_disco": 3717,
        "id": 500,
        "nombre_disco": "10 (2007)",
        "link": "http://zipansion.com/1yfe6"
    },
    {
        "id_disco": 3718,
        "id": 500,
        "nombre_disco": "Desayuno continental (2010)",
        "link": "http://zipansion.com/1yfeV"
    },
    {
        "id_disco": 3719,
        "id": 500,
        "nombre_disco": "En la playa (2011)",
        "link": "http://zipansion.com/1yff1"
    },
    {
        "id_disco": 3720,
        "id": 500,
        "nombre_disco": "30 años y un día (2015)",
        "link": "http://zipansion.com/1yh0y"
    },
    {
        "id_disco": 3721,
        "id": 501,
        "nombre_disco": "2003: Demo",
        "link": "http://zipansion.com/1y8rC"
    },
    {
        "id_disco": 3722,
        "id": 501,
        "nombre_disco": "2005: Por Colectora",
        "link": "http://zipansion.com/1y8sZ"
    },
    {
        "id_disco": 3723,
        "id": 501,
        "nombre_disco": "2006: Las Pastillas del Abuelo",
        "link": "http://zipansion.com/1y8t5"
    },
    {
        "id_disco": 3724,
        "id": 501,
        "nombre_disco": "2007: Acústico",
        "link": "http://zipansion.com/1y8uP"
    },
    {
        "id_disco": 3725,
        "id": 501,
        "nombre_disco": "2008: Crisis",
        "link": "http://zipansion.com/1y8vJ"
    },
    {
        "id_disco": 3726,
        "id": 501,
        "nombre_disco": "2010: Versiones",
        "link": "http://zipansion.com/1y8wH"
    },
    {
        "id_disco": 3727,
        "id": 501,
        "nombre_disco": "2011: Desafíos",
        "link": "http://zipansion.com/1y8xM"
    },
    {
        "id_disco": 3728,
        "id": 501,
        "nombre_disco": "2014: El Barrio en sus puños",
        "link": "http://zipansion.com/1y8yj"
    },
    {
        "id_disco": 3729,
        "id": 501,
        "nombre_disco": "2015: Paradojas",
        "link": "http://zipansion.com/1y905"
    },
    {
        "id_disco": 3730,
        "id": 501,
        "nombre_disco": "Inéditos",
        "link": "http://zipansion.com/1y91F"
    },
    {
        "id_disco": 3731,
        "id": 502,
        "nombre_disco": "Gulp! (1985).",
        "link": "http://zipansion.com/1wxsN"
    },
    {
        "id_disco": 3732,
        "id": 502,
        "nombre_disco": "Oktubre (1986).",
        "link": "http://zipansion.com/1wxt5"
    },
    {
        "id_disco": 3733,
        "id": 502,
        "nombre_disco": "Un baión para el ojo idiota (1988).",
        "link": "http://zipansion.com/1wxuC"
    },
    {
        "id_disco": 3734,
        "id": 502,
        "nombre_disco": "¡Bang! ¡Bang!... Estás liquidado (1989).",
        "link": "http://zipansion.com/1wxui"
    },
    {
        "id_disco": 3735,
        "id": 502,
        "nombre_disco": "La mosca y la sopa (1991).",
        "link": "http://zipansion.com/1wxvP"
    },
    {
        "id_disco": 3736,
        "id": 502,
        "nombre_disco": "Lobo suelto / Cordero atado (1993).",
        "link": "http://zipansion.com/1wxvx"
    },
    {
        "id_disco": 3737,
        "id": 502,
        "nombre_disco": "Luzbelito (1996).",
        "link": "http://zipansion.com/1wxwX"
    },
    {
        "id_disco": 3738,
        "id": 502,
        "nombre_disco": "Último Bondi a Finisterre (1998).",
        "link": "http://zipansion.com/1wxwy"
    },
    {
        "id_disco": 3739,
        "id": 502,
        "nombre_disco": "Momo Sampler (2000).",
        "link": "http://zipansion.com/1wxxy"
    },
    {
        "id_disco": 3740,
        "id": 503,
        "nombre_disco": "1989: 40 Dibujos Ahí en el Piso",
        "link": "http://zipansion.com/1wxCW"
    },
    {
        "id_disco": 3741,
        "id": 503,
        "nombre_disco": "1991: Acariciando lo Áspero",
        "link": "http://zipansion.com/1wxDP"
    },
    {
        "id_disco": 3742,
        "id": 503,
        "nombre_disco": "1993: La Era de la Boludez",
        "link": "http://zipansion.com/1wxDu"
    },
    {
        "id_disco": 3743,
        "id": 503,
        "nombre_disco": "1995: Otro le travaladna",
        "link": "http://zipansion.com/1wxEU"
    },
    {
        "id_disco": 3744,
        "id": 503,
        "nombre_disco": "1996 - Divididos",
        "link": "http://raboninco.com/8p7o"
    },
    {
        "id_disco": 3745,
        "id": 503,
        "nombre_disco": "1998: Gol de Mujer",
        "link": "http://zipansion.com/1wxGC"
    },
    {
        "id_disco": 3746,
        "id": 503,
        "nombre_disco": "2000: Narigón del Siglo",
        "link": "http://zipansion.com/1wxGq"
    },
    {
        "id_disco": 3747,
        "id": 503,
        "nombre_disco": "2002: Vengo del Placard de Otro",
        "link": "http://zipansion.com/1wxHf"
    },
    {
        "id_disco": 3748,
        "id": 503,
        "nombre_disco": "2010: Amapola del 66",
        "link": "http://zipansion.com/1wxIO"
    },
    {
        "id_disco": 3749,
        "id": 504,
        "nombre_disco": "Café Tacvba (1992)",
        "link": "http://zipansion.com/1wWRm"
    },
    {
        "id_disco": 3750,
        "id": 504,
        "nombre_disco": "Re (1994)",
        "link": "http://zipansion.com/1wWSh"
    },
    {
        "id_disco": 3751,
        "id": 504,
        "nombre_disco": "Avalancha de Éxitos (1996)",
        "link": "http://zipansion.com/1wWTP"
    },
    {
        "id_disco": 3752,
        "id": 504,
        "nombre_disco": "Revés/Yo Soy (1999) CD1:",
        "link": "http://zipansion.com/1wWTz"
    },
    {
        "id_disco": 3753,
        "id": 504,
        "nombre_disco": "Cuatro Caminos (2003)",
        "link": "http://zipansion.com/1wWWo"
    },
    {
        "id_disco": 3754,
        "id": 504,
        "nombre_disco": "Sino (2007)",
        "link": "http://zipansion.com/1wWXd"
    },
    {
        "id_disco": 3755,
        "id": 504,
        "nombre_disco": "El Objeto Antes Llamado Disco (2012)",
        "link": "http://zipansion.com/1wWYB"
    },
    {
        "id_disco": 3756,
        "id": 504,
        "nombre_disco": "Jei Beibi (2017)",
        "link": "http://zipansion.com/1wWrE"
    },
    {
        "id_disco": 3757,
        "id": 505,
        "nombre_disco": "1993: Laura Pausini",
        "link": "http://zipansion.com/1wYUM"
    },
    {
        "id_disco": 3758,
        "id": 505,
        "nombre_disco": "1994: Laura",
        "link": "http://zipansion.com/1wZ9D"
    },
    {
        "id_disco": 3759,
        "id": 505,
        "nombre_disco": "1996: Las cosas que vives",
        "link": "http://zipansion.com/1wZAG"
    },
    {
        "id_disco": 3760,
        "id": 505,
        "nombre_disco": "1998: Mi respuesta",
        "link": "http://zipansion.com/1wZAw"
    },
    {
        "id_disco": 3761,
        "id": 505,
        "nombre_disco": "2000: Entre tú y mil mares",
        "link": "http://zipansion.com/1wZBj"
    },
    {
        "id_disco": 3762,
        "id": 505,
        "nombre_disco": "2002: From the Inside",
        "link": "http://zipansion.com/1wfR2"
    },
    {
        "id_disco": 3763,
        "id": 505,
        "nombre_disco": "2004: Escucha",
        "link": "http://zipansion.com/1wfSF"
    },
    {
        "id_disco": 3764,
        "id": 505,
        "nombre_disco": "2006: Yo canto",
        "link": "http://zipansion.com/1wfT1"
    },
    {
        "id_disco": 3765,
        "id": 505,
        "nombre_disco": "2008: Primavera anticipada",
        "link": "http://zipansion.com/1wfTY"
    },
    {
        "id_disco": 3766,
        "id": 505,
        "nombre_disco": "2011: Inédito (Deluxe Edition)",
        "link": "http://zipansion.com/1wfUP"
    },
    {
        "id_disco": 3767,
        "id": 505,
        "nombre_disco": "2015: Similares",
        "link": "http://zipansion.com/1wfUw"
    },
    {
        "id_disco": 3768,
        "id": 505,
        "nombre_disco": "2016: Laura Navidad",
        "link": "http://zipansion.com/1wfXI"
    },
    {
        "id_disco": 3769,
        "id": 505,
        "nombre_disco": "2018: Hazte Sentir",
        "link": "http://zipansion.com/1wg4A"
    },
    {
        "id_disco": 3770,
        "id": 506,
        "nombre_disco": "A 15 cm de la realidad (1998)",
        "link": "http://zipansion.com/rMv5"
    },
    {
        "id_disco": 3771,
        "id": 506,
        "nombre_disco": "Un asado en Abbey Road (1999)",
        "link": "http://zipansion.com/rMwH"
    },
    {
        "id_disco": 3772,
        "id": 506,
        "nombre_disco": "Operación Rebenque (2000)",
        "link": "http://zipansion.com/rMwu"
    },
    {
        "id_disco": 3773,
        "id": 506,
        "nombre_disco": "Grandes Éxitos (2001)",
        "link": "http://zipansion.com/rN1u"
    },
    {
        "id_disco": 3774,
        "id": 506,
        "nombre_disco": "Botanika (2002)",
        "link": "http://zipansion.com/rMy4"
    },
    {
        "id_disco": 3775,
        "id": 506,
        "nombre_disco": "¡Esta! (2004)",
        "link": "http://zipansion.com/rN3L"
    },
    {
        "id_disco": 3776,
        "id": 506,
        "nombre_disco": "KapangStock (2006)",
        "link": "http://zipansion.com/rN5k"
    },
    {
        "id_disco": 3777,
        "id": 506,
        "nombre_disco": "Crece (2007)",
        "link": "http://zipansion.com/rN6q"
    },
    {
        "id_disco": 3778,
        "id": 506,
        "nombre_disco": "Todoterreno (2009)",
        "link": "http://zipansion.com/rN8B"
    },
    {
        "id_disco": 3779,
        "id": 506,
        "nombre_disco": "Todo es poco (2010)",
        "link": "http://zipansion.com/rNAY"
    },
    {
        "id_disco": 3780,
        "id": 506,
        "nombre_disco": "Lima (2012)",
        "link": "http://zipansion.com/rNC3"
    },
    {
        "id_disco": 3781,
        "id": 506,
        "nombre_disco": "¿Mamá dónde estoy? (2014)",
        "link": "http://zipansion.com/rNEp"
    },
    {
        "id_disco": 3782,
        "id": 506,
        "nombre_disco": "Motormúsica (CD) (2015)",
        "link": "http://zipansion.com/rNGJ"
    },
    {
        "id_disco": 3783,
        "id": 507,
        "nombre_disco": "Parachutes (Japanese Limited Edition) (2000)",
        "link": "http://zipansion.com/q0nS"
    },
    {
        "id_disco": 3784,
        "id": 507,
        "nombre_disco": "A Rush of Blood to the Head (2002)",
        "link": "http://zipansion.com/q0p9"
    },
    {
        "id_disco": 3785,
        "id": 507,
        "nombre_disco": "Live [CD Europe] (2003)",
        "link": "http://zipansion.com/q0rr"
    },
    {
        "id_disco": 3786,
        "id": 507,
        "nombre_disco": "X&Y (Japanese Tour Special Edition)  (2005)",
        "link": "http://zipansion.com/q0tH"
    },
    {
        "id_disco": 3787,
        "id": 507,
        "nombre_disco": "Prospekts March (EP UK & Europe) (2008)",
        "link": "http://zipansion.com/q0vc"
    },
    {
        "id_disco": 3788,
        "id": 507,
        "nombre_disco": "Viva la Vida or Death and All His Friends (Japanese Edition) (2008) ",
        "link": "http://zipansion.com/q10X"
    },
    {
        "id_disco": 3789,
        "id": 507,
        "nombre_disco": "LeftRightLeftRightLeft [CD US] (2009)",
        "link": "http://zipansion.com/q13O"
    },
    {
        "id_disco": 3790,
        "id": 507,
        "nombre_disco": "iTunes Festival London (2011)",
        "link": "http://zipansion.com/q174"
    },
    {
        "id_disco": 3791,
        "id": 507,
        "nombre_disco": "Mylo Xyloto (Japanese Edition) (2011) ",
        "link": "http://zipansion.com/q18X"
    },
    {
        "id_disco": 3792,
        "id": 507,
        "nombre_disco": "Live (2012)",
        "link": "http://zipansion.com/q1Fh"
    },
    {
        "id_disco": 3793,
        "id": 507,
        "nombre_disco": "Ghost Stories (Target Exclusive) (2014)",
        "link": "http://zipansion.com/q1KG"
    },
    {
        "id_disco": 3794,
        "id": 507,
        "nombre_disco": "Midnight (Remixes) (2014)",
        "link": "http://zipansion.com/q1Mo"
    },
    {
        "id_disco": 3795,
        "id": 507,
        "nombre_disco": "A Head Full of Dreams (Japanese Edition) (2015)",
        "link": "http://zipansion.com/q1Ri"
    },
    {
        "id_disco": 3796,
        "id": 508,
        "nombre_disco": "Definitely Maybe (1994)",
        "link": "http://zipansion.com/piXr"
    },
    {
        "id_disco": 3797,
        "id": 508,
        "nombre_disco": "(Whats the Story) Morning Glory? (1995)",
        "link": "http://zipansion.com/piei"
    },
    {
        "id_disco": 3798,
        "id": 508,
        "nombre_disco": "Be Here Now (1997)",
        "link": "http://zipansion.com/pigq"
    },
    {
        "id_disco": 3799,
        "id": 508,
        "nombre_disco": "Standing on the Shoulder of Giants (2000)",
        "link": "http://zipansion.com/piiX"
    },
    {
        "id_disco": 3800,
        "id": 508,
        "nombre_disco": "Heathen Chemistry (2002)",
        "link": "http://zipansion.com/pik0"
    },
    {
        "id_disco": 3801,
        "id": 508,
        "nombre_disco": "Dont Believe the Truth (2005)",
        "link": "http://zipansion.com/pikS"
    },
    {
        "id_disco": 3802,
        "id": 508,
        "nombre_disco": "Dig Out Your Soul (2008)",
        "link": "http://zipansion.com/pimG"
    },
    {
        "id_disco": 3803,
        "id": 509,
        "nombre_disco": "2015 - Benaroya Hall (Live)",
        "link": "http://zipansion.com/oA7d"
    },
    {
        "id_disco": 3804,
        "id": 509,
        "nombre_disco": "2016 - Temple Of The Dog Deluxe Edition (2-CD)",
        "link": "http://zipansion.com/oA8s"
    },
    {
        "id_disco": 3805,
        "id": 510,
        "nombre_disco": "1987  Screaming Life-Fopp (EP).",
        "link": "http://zipansion.com/nm5L"
    },
    {
        "id_disco": 3806,
        "id": 510,
        "nombre_disco": "1988  Ultramega OK.",
        "link": "http://zipansion.com/nm28"
    },
    {
        "id_disco": 3807,
        "id": 510,
        "nombre_disco": "1989  Louder than Love.",
        "link": "http://zipansion.com/nm4E"
    },
    {
        "id_disco": 3808,
        "id": 510,
        "nombre_disco": "1991  Badmotorfinger.",
        "link": "http://zipansion.com/nm71"
    },
    {
        "id_disco": 3809,
        "id": 510,
        "nombre_disco": "1994  Superunknown.",
        "link": "http://zipansion.com/nmA6"
    },
    {
        "id_disco": 3810,
        "id": 510,
        "nombre_disco": "1996  Down on the Upside.",
        "link": "http://zipansion.com/nmB6"
    },
    {
        "id_disco": 3811,
        "id": 510,
        "nombre_disco": "1997  A-Sides",
        "link": "http://zipansion.com/o7iA"
    },
    {
        "id_disco": 3812,
        "id": 510,
        "nombre_disco": "2010 - Telephantasm",
        "link": "http://zipansion.com/o7mT"
    },
    {
        "id_disco": 3813,
        "id": 510,
        "nombre_disco": "2012  King Animal. Deluxe Edition",
        "link": "http://zipansion.com/nmC6"
    },
    {
        "id_disco": 3814,
        "id": 510,
        "nombre_disco": "2014 - Echo Of Miles Scattered Tracks Across The Path",
        "link": "http://zipansion.com/nmFd"
    },
    {
        "id_disco": 3815,
        "id": 511,
        "nombre_disco": "2002: Audioslave",
        "link": "http://zipansion.com/nOpf"
    },
    {
        "id_disco": 3816,
        "id": 511,
        "nombre_disco": "2005: Out of Exile",
        "link": "http://zipansion.com/nOrd"
    },
    {
        "id_disco": 3817,
        "id": 511,
        "nombre_disco": "2006: Revelations",
        "link": "http://zipansion.com/nOtW"
    },
    {
        "id_disco": 3818,
        "id": 512,
        "nombre_disco": "1999 Euphoria Morning (A&M)",
        "link": "http://zipansion.com/mMkz"
    },
    {
        "id_disco": 3819,
        "id": 512,
        "nombre_disco": "2007 Carry On",
        "link": "http://zipansion.com/mMmA"
    },
    {
        "id_disco": 3820,
        "id": 512,
        "nombre_disco": "2009 Scream",
        "link": "http://zipansion.com/mMnL"
    },
    {
        "id_disco": 3821,
        "id": 512,
        "nombre_disco": "2011 Songbook",
        "link": "http://zipansion.com/mMri"
    },
    {
        "id_disco": 3822,
        "id": 512,
        "nombre_disco": "2015 Higher Truth",
        "link": "http://zipansion.com/mMsE"
    },
    {
        "id_disco": 3823,
        "id": 512,
        "nombre_disco": "Lost and Found I",
        "link": "http://zipansion.com/mMsz"
    },
    {
        "id_disco": 3824,
        "id": 512,
        "nombre_disco": "Lost and Found II",
        "link": "http://zipansion.com/mMtP"
    },
    {
        "id_disco": 3825,
        "id": 513,
        "nombre_disco": "Serart (2003)",
        "link": "http://zipansion.com/X23A"
    },
    {
        "id_disco": 3826,
        "id": 513,
        "nombre_disco": "Elect the Dead (2007)",
        "link": "http://zipansion.com/X5qp"
    },
    {
        "id_disco": 3827,
        "id": 513,
        "nombre_disco": "Lie Lie Live (EP) (2008)",
        "link": "http://zipansion.com/X28c"
    },
    {
        "id_disco": 3828,
        "id": 513,
        "nombre_disco": "Selected Music Scores (2008)",
        "link": "http://zipansion.com/X2HR"
    },
    {
        "id_disco": 3829,
        "id": 513,
        "nombre_disco": "Imperfect Harmonies (2010)",
        "link": "http://zipansion.com/X2Uo"
    },
    {
        "id_disco": 3830,
        "id": 513,
        "nombre_disco": "Elect the Dead Symphony (2010)",
        "link": "http://zipansion.com/X2I6"
    },
    {
        "id_disco": 3831,
        "id": 513,
        "nombre_disco": "Imperfect Remixes (EP) (2011)",
        "link": "http://zipansion.com/X2XF"
    },
    {
        "id_disco": 3832,
        "id": 513,
        "nombre_disco": "Harakiri (2012)",
        "link": "http://zipansion.com/X2Xx"
    },
    {
        "id_disco": 3833,
        "id": 513,
        "nombre_disco": "Orca Symphony No. 1 (2013)",
        "link": "http://zipansion.com/X2ZM"
    },
    {
        "id_disco": 3834,
        "id": 513,
        "nombre_disco": "Jazz-Iz-Christ (2013)",
        "link": "http://zipansion.com/X2fj"
    },
    {
        "id_disco": 3835,
        "id": 514,
        "nombre_disco": "1973: Queen",
        "link": "http://zipansion.com/Udd7"
    },
    {
        "id_disco": 3836,
        "id": 514,
        "nombre_disco": "1974: Queen II",
        "link": "http://zipansion.com/UddU"
    },
    {
        "id_disco": 3837,
        "id": 514,
        "nombre_disco": "1974: Sheer Heart Attack",
        "link": "http://zipansion.com/Uddz"
    },
    {
        "id_disco": 3838,
        "id": 514,
        "nombre_disco": "1975: A Night at the Opera",
        "link": "http://zipansion.com/Udej"
    },
    {
        "id_disco": 3839,
        "id": 514,
        "nombre_disco": "1976: A Day at the Races",
        "link": "http://zipansion.com/Udf1"
    },
    {
        "id_disco": 3840,
        "id": 514,
        "nombre_disco": "1977: News of the World",
        "link": "http://zipansion.com/Udfl"
    },
    {
        "id_disco": 3841,
        "id": 514,
        "nombre_disco": "1978: Jazz",
        "link": "http://zipansion.com/UdgK"
    },
    {
        "id_disco": 3842,
        "id": 514,
        "nombre_disco": "1980: The Game",
        "link": "http://zipansion.com/Udkh"
    },
    {
        "id_disco": 3843,
        "id": 514,
        "nombre_disco": "1980: Flash Gordon ",
        "link": "http://zipansion.com/Udgl"
    },
    {
        "id_disco": 3844,
        "id": 514,
        "nombre_disco": "1982: Hot Space",
        "link": "http://zipansion.com/UdlU"
    },
    {
        "id_disco": 3845,
        "id": 514,
        "nombre_disco": "1984: The Works",
        "link": "http://zipansion.com/UdmP"
    },
    {
        "id_disco": 3846,
        "id": 514,
        "nombre_disco": "1986: A Kind of Magic",
        "link": "http://zipansion.com/Udmy"
    },
    {
        "id_disco": 3847,
        "id": 514,
        "nombre_disco": "1989: The Miracle",
        "link": "http://zipansion.com/UdnT"
    },
    {
        "id_disco": 3848,
        "id": 514,
        "nombre_disco": "1993 - News of the World",
        "link": "http://homoluath.com/1YoN"
    },
    {
        "id_disco": 3849,
        "id": 514,
        "nombre_disco": "1991: Innuendo",
        "link": "http://zipansion.com/UdoG"
    },
    {
        "id_disco": 3850,
        "id": 514,
        "nombre_disco": "1995: Made in Heaven",
        "link": "http://zipansion.com/Udow"
    },
    {
        "id_disco": 3851,
        "id": 515,
        "nombre_disco": "Twenty One Pilots (2009)",
        "link": "http://zipansion.com/SmzU"
    },
    {
        "id_disco": 3852,
        "id": 515,
        "nombre_disco": "Regional at Best (2011)",
        "link": "http://zipansion.com/Sn16"
    },
    {
        "id_disco": 3853,
        "id": 515,
        "nombre_disco": "Vessel (2013)",
        "link": "http://zipansion.com/Sn2s"
    },
    {
        "id_disco": 3854,
        "id": 515,
        "nombre_disco": "Blurryface (2015)",
        "link": "http://zipansion.com/Sn4G"
    },
    {
        "id_disco": 3855,
        "id": 515,
        "nombre_disco": "2018 - Trench",
        "link": "http://ellevolaw.com/1ASQ"
    },
    {
        "id_disco": 3856,
        "id": 515,
        "nombre_disco": "Singles",
        "link": "http://ellevolaw.com/1AT5"
    },
    {
        "id_disco": 3857,
        "id": 516,
        "nombre_disco": "1970 Black Sabbath",
        "link": "http://zipansion.com/SMjn"
    },
    {
        "id_disco": 3858,
        "id": 516,
        "nombre_disco": "1970 Paranoid",
        "link": "http://zipansion.com/SMXh"
    },
    {
        "id_disco": 3859,
        "id": 516,
        "nombre_disco": "1971 Master of Reality",
        "link": "http://zipansion.com/SMRy"
    },
    {
        "id_disco": 3860,
        "id": 516,
        "nombre_disco": "1972 Black Sabbath  Vol. 4",
        "link": "http://zipansion.com/SMku"
    },
    {
        "id_disco": 3861,
        "id": 516,
        "nombre_disco": "1973 Sabbath Bloody Sabbath",
        "link": "http://zipansion.com/SMZQ"
    },
    {
        "id_disco": 3862,
        "id": 516,
        "nombre_disco": "1975 Sabotage",
        "link": "http://zipansion.com/SMbU"
    },
    {
        "id_disco": 3863,
        "id": 516,
        "nombre_disco": "1976 Technical Ecstasy",
        "link": "http://zipansion.com/SMe1"
    },
    {
        "id_disco": 3864,
        "id": 516,
        "nombre_disco": "1978 Never Say Die!",
        "link": "http://zipansion.com/SMWh"
    },
    {
        "id_disco": 3865,
        "id": 516,
        "nombre_disco": "1980 Heaven and Hell",
        "link": "http://zipansion.com/SMR6"
    },
    {
        "id_disco": 3866,
        "id": 516,
        "nombre_disco": "1981 Mob Rules",
        "link": "http://zipansion.com/SMUF"
    },
    {
        "id_disco": 3867,
        "id": 516,
        "nombre_disco": "1983 Born Again",
        "link": "http://zipansion.com/SMEE"
    },
    {
        "id_disco": 3868,
        "id": 516,
        "nombre_disco": "1986 Seventh Star",
        "link": "http://zipansion.com/SMcY"
    },
    {
        "id_disco": 3869,
        "id": 516,
        "nombre_disco": "1987 The Eternal Idol",
        "link": "http://zipansion.com/SMgw"
    },
    {
        "id_disco": 3870,
        "id": 516,
        "nombre_disco": "1989 Headless Cross",
        "link": "http://zipansion.com/SMQ8"
    },
    {
        "id_disco": 3871,
        "id": 516,
        "nombre_disco": "1990 Tyr",
        "link": "http://zipansion.com/SMiq"
    },
    {
        "id_disco": 3872,
        "id": 516,
        "nombre_disco": "1992 Dehumanizer",
        "link": "http://zipansion.com/SMM2"
    },
    {
        "id_disco": 3873,
        "id": 516,
        "nombre_disco": "1994 Cross Purposes",
        "link": "http://zipansion.com/SMJd"
    },
    {
        "id_disco": 3874,
        "id": 516,
        "nombre_disco": "1995 Forbidden",
        "link": "http://zipansion.com/SMOK"
    },
    {
        "id_disco": 3875,
        "id": 516,
        "nombre_disco": "2013 13",
        "link": "http://zipansion.com/SemK"
    },
    {
        "id_disco": 3876,
        "id": 517,
        "nombre_disco": "1963: Please Please Me",
        "link": "http://zipansion.com/MRYV"
    },
    {
        "id_disco": 3877,
        "id": 517,
        "nombre_disco": "1963: With the Beatles",
        "link": "http://zipansion.com/MRZW"
    },
    {
        "id_disco": 3878,
        "id": 517,
        "nombre_disco": "1964: A Hard Days Night",
        "link": "http://zipansion.com/MRbM"
    },
    {
        "id_disco": 3879,
        "id": 517,
        "nombre_disco": "1964: Beatles for Sale",
        "link": "http://zipansion.com/MRco"
    },
    {
        "id_disco": 3880,
        "id": 517,
        "nombre_disco": "1965: Help!",
        "link": "http://zipansion.com/MRdw"
    },
    {
        "id_disco": 3881,
        "id": 517,
        "nombre_disco": "1965: Rubber Soul",
        "link": "http://zipansion.com/MRen"
    },
    {
        "id_disco": 3882,
        "id": 517,
        "nombre_disco": "1966: Revolver",
        "link": "http://zipansion.com/MRga"
    },
    {
        "id_disco": 3883,
        "id": 517,
        "nombre_disco": "1967: Sgt. Peppers Lonely Hearts Club Band",
        "link": "http://zipansion.com/MRiG"
    },
    {
        "id_disco": 3884,
        "id": 517,
        "nombre_disco": "1967: Magical Mystery Tour",
        "link": "http://zipansion.com/MRkP"
    },
    {
        "id_disco": 3885,
        "id": 517,
        "nombre_disco": "1968: The Beatles",
        "link": "http://zipansion.com/MSFa"
    },
    {
        "id_disco": 3886,
        "id": 517,
        "nombre_disco": "1969: Yellow Submarine",
        "link": "http://zipansion.com/MSHs"
    },
    {
        "id_disco": 3887,
        "id": 517,
        "nombre_disco": "1969: Abbey Road",
        "link": "http://zipansion.com/MSJU"
    },
    {
        "id_disco": 3888,
        "id": 517,
        "nombre_disco": "1970: Let It Be",
        "link": "http://zipansion.com/MSMT"
    },
    {
        "id_disco": 3889,
        "id": 517,
        "nombre_disco": "83.3340277777778",
        "link": "http://zipansion.com/MSUj"
    },
    {
        "id_disco": 3890,
        "id": 517,
        "nombre_disco": "1962-1966 (The Red Album)",
        "link": "http://zipansion.com/MSWM"
    },
    {
        "id_disco": 3891,
        "id": 517,
        "nombre_disco": "1967-1970 (The Blue Album)",
        "link": "http://zipansion.com/MSZ2"
    },
    {
        "id_disco": 3892,
        "id": 517,
        "nombre_disco": "1995: Anthology 1",
        "link": "http://zipansion.com/MScS"
    },
    {
        "id_disco": 3893,
        "id": 517,
        "nombre_disco": "1996: Anthology 2",
        "link": "http://zipansion.com/MSgT"
    },
    {
        "id_disco": 3894,
        "id": 517,
        "nombre_disco": "1996: Anthology 3",
        "link": "http://zipansion.com/MSkH"
    },
    {
        "id_disco": 3895,
        "id": 517,
        "nombre_disco": "1965: Beatles VI",
        "link": "http://zipansion.com/MSmV"
    },
    {
        "id_disco": 3896,
        "id": 517,
        "nombre_disco": "1996: Casualties",
        "link": "http://zipansion.com/MSrE"
    },
    {
        "id_disco": 3897,
        "id": 517,
        "nombre_disco": "1995: Free As A Bird",
        "link": "http://zipansion.com/MSv2"
    },
    {
        "id_disco": 3898,
        "id": 517,
        "nombre_disco": "1968: Hey Jude",
        "link": "http://zipansion.com/MT0u"
    },
    {
        "id_disco": 3899,
        "id": 517,
        "nombre_disco": "1965: Hollywood Bowl Complete",
        "link": "http://zipansion.com/MT5c"
    },
    {
        "id_disco": 3900,
        "id": 517,
        "nombre_disco": "1970: In The Beginning",
        "link": "http://zipansion.com/MTAi"
    },
    {
        "id_disco": 3901,
        "id": 517,
        "nombre_disco": "1964: Introducing The Beatles",
        "link": "http://zipansion.com/MTEL"
    },
    {
        "id_disco": 3902,
        "id": 517,
        "nombre_disco": "2005: Last Licks Live",
        "link": "http://zipansion.com/MTO1"
    },
    {
        "id_disco": 3903,
        "id": 517,
        "nombre_disco": "2003: Let It Be... Naked",
        "link": "http://zipansion.com/MTRM"
    },
    {
        "id_disco": 3904,
        "id": 517,
        "nombre_disco": "1994: Live At The BBC",
        "link": "http://zipansion.com/MTUv"
    },
    {
        "id_disco": 3905,
        "id": 517,
        "nombre_disco": "2006: Love",
        "link": "http://zipansion.com/MTWk"
    },
    {
        "id_disco": 3906,
        "id": 517,
        "nombre_disco": "1977: Love Songs",
        "link": "http://zipansion.com/MTYV"
    },
    {
        "id_disco": 3907,
        "id": 517,
        "nombre_disco": "1964: Meet The Beatles",
        "link": "http://zipansion.com/MTZu"
    },
    {
        "id_disco": 3908,
        "id": 517,
        "nombre_disco": "1988: Past Masters",
        "link": "http://zipansion.com/MTbk"
    },
    {
        "id_disco": 3909,
        "id": 517,
        "nombre_disco": "1978: Rarities",
        "link": "http://zipansion.com/MTfj"
    },
    {
        "id_disco": 3910,
        "id": 517,
        "nombre_disco": "1976: Rock N Roll Music",
        "link": "http://zipansion.com/MTid"
    },
    {
        "id_disco": 3911,
        "id": 517,
        "nombre_disco": "1964: The Beatles Second Album",
        "link": "http://zipansion.com/MTnj"
    },
    {
        "id_disco": 3912,
        "id": 517,
        "nombre_disco": "1962: The Decca tapes",
        "link": "http://zipansion.com/MTqJ"
    },
    {
        "id_disco": 3913,
        "id": 517,
        "nombre_disco": "1984: The Early Tapes",
        "link": "http://zipansion.com/MTsH"
    },
    {
        "id_disco": 3914,
        "id": 517,
        "nombre_disco": "Yellow Submarine Mono Songtrack",
        "link": "http://zipansion.com/MTx3"
    },
    {
        "id_disco": 3915,
        "id": 517,
        "nombre_disco": "1966: Yesterday And Today",
        "link": "http://zipansion.com/MU0R"
    },
    {
        "id_disco": 3916,
        "id": 518,
        "nombre_disco": "1993 Live at Sin-é",
        "link": "http://zipansion.com/KO1V"
    },
    {
        "id_disco": 3917,
        "id": 518,
        "nombre_disco": "1994 - Grace",
        "link": "http://zipansion.com/KO4D"
    },
    {
        "id_disco": 3918,
        "id": 518,
        "nombre_disco": "1998 - Sketches for My Sweetheart the Drunk",
        "link": "http://zipansion.com/KOra"
    },
    {
        "id_disco": 3919,
        "id": 518,
        "nombre_disco": "2000 Mystery White Boy",
        "link": "http://zipansion.com/KO54"
    },
    {
        "id_disco": 3920,
        "id": 518,
        "nombre_disco": "2002 The Grace EP",
        "link": "http://zipansion.com/KO6o"
    },
    {
        "id_disco": 3921,
        "id": 518,
        "nombre_disco": "2016 - You and I ",
        "link": "http://zipansion.com/KO8O"
    },
    {
        "id_disco": 3922,
        "id": 519,
        "nombre_disco": "1999: Showbiz",
        "link": "http://zipansion.com/GsX4"
    },
    {
        "id_disco": 3923,
        "id": 519,
        "nombre_disco": "2001: Origin of Symmetry",
        "link": "http://zipansion.com/GsYj"
    },
    {
        "id_disco": 3924,
        "id": 519,
        "nombre_disco": "2003: Absolution",
        "link": "http://zipansion.com/GsZG"
    },
    {
        "id_disco": 3925,
        "id": 519,
        "nombre_disco": "2003: Absolution (Australian bonus CD)",
        "link": "http://zipansion.com/GsdU"
    },
    {
        "id_disco": 3926,
        "id": 519,
        "nombre_disco": "2006: Black Holes and Revelations",
        "link": "http://zipansion.com/GseW"
    },
    {
        "id_disco": 3927,
        "id": 519,
        "nombre_disco": "2009: The Resistance",
        "link": "http://zipansion.com/GsgC"
    },
    {
        "id_disco": 3928,
        "id": 519,
        "nombre_disco": "2012: The 2nd Law",
        "link": "http://zipansion.com/Gsgx"
    },
    {
        "id_disco": 3929,
        "id": 519,
        "nombre_disco": "2015: Drones",
        "link": "http://zipansion.com/GsiE"
    },
    {
        "id_disco": 3930,
        "id": 520,
        "nombre_disco": "1972: Lonesome Crow",
        "link": "http://zipansion.com/Gqqa"
    },
    {
        "id_disco": 3931,
        "id": 520,
        "nombre_disco": "1974: Fly to the Rainbow",
        "link": "http://zipansion.com/Gqhw"
    },
    {
        "id_disco": 3932,
        "id": 520,
        "nombre_disco": "1975: In Trance",
        "link": "http://zipansion.com/Gqkx"
    },
    {
        "id_disco": 3933,
        "id": 520,
        "nombre_disco": "1976: Virgin Killer",
        "link": "http://zipansion.com/Gr6p"
    },
    {
        "id_disco": 3934,
        "id": 520,
        "nombre_disco": "1977: Taken by Force",
        "link": "http://zipansion.com/Gr4F"
    },
    {
        "id_disco": 3935,
        "id": 520,
        "nombre_disco": "1979: Lovedrive",
        "link": "http://zipansion.com/GqoG"
    },
    {
        "id_disco": 3936,
        "id": 520,
        "nombre_disco": "1980: Animal Magnetism",
        "link": "http://zipansion.com/Gs9b"
    },
    {
        "id_disco": 3937,
        "id": 520,
        "nombre_disco": "1982: Blackout",
        "link": "http://zipansion.com/GqS3"
    },
    {
        "id_disco": 3938,
        "id": 520,
        "nombre_disco": "1984: Love at First Sting",
        "link": "http://zipansion.com/Gqmf"
    },
    {
        "id_disco": 3939,
        "id": 520,
        "nombre_disco": "1988: Savage Amusement",
        "link": "http://zipansion.com/Gr14"
    },
    {
        "id_disco": 3940,
        "id": 520,
        "nombre_disco": "1990: Crazy World",
        "link": "http://zipansion.com/GqTX"
    },
    {
        "id_disco": 3941,
        "id": 520,
        "nombre_disco": "1993: Face the Heat",
        "link": "http://zipansion.com/Gqgm"
    },
    {
        "id_disco": 3942,
        "id": 520,
        "nombre_disco": "1996: Pure Instinct",
        "link": "http://zipansion.com/Gqzh"
    },
    {
        "id_disco": 3943,
        "id": 520,
        "nombre_disco": "1999: Eye II Eye",
        "link": "http://zipansion.com/Gqfj"
    },
    {
        "id_disco": 3944,
        "id": 520,
        "nombre_disco": "2000: Moment of Glory",
        "link": "http://zipansion.com/Gqpt"
    },
    {
        "id_disco": 3945,
        "id": 520,
        "nombre_disco": "2004: Unbreakable",
        "link": "http://zipansion.com/Gr5K"
    },
    {
        "id_disco": 3946,
        "id": 520,
        "nombre_disco": "2007: Humanity: Hour I",
        "link": "http://zipansion.com/Gqjh"
    },
    {
        "id_disco": 3947,
        "id": 520,
        "nombre_disco": "2010: Sting in the Tail",
        "link": "http://zipansion.com/Gr2q"
    },
    {
        "id_disco": 3948,
        "id": 520,
        "nombre_disco": "2015: Return to Forever",
        "link": "http://zipansion.com/GsB4"
    },
    {
        "id_disco": 3949,
        "id": 521,
        "nombre_disco": "1988: Rata Blanca",
        "link": "http://zipansion.com/GVQE"
    },
    {
        "id_disco": 3950,
        "id": 521,
        "nombre_disco": "1990: Magos  Espadas y Rosas",
        "link": "http://zipansion.com/GVQp"
    },
    {
        "id_disco": 3951,
        "id": 521,
        "nombre_disco": "1991: Guerrero del Arco Iris",
        "link": "http://zipansion.com/GVRU"
    },
    {
        "id_disco": 3952,
        "id": 521,
        "nombre_disco": "1993 - El Libro Oculto [Ep]",
        "link": "http://zipansion.com/GVT2"
    },
    {
        "id_disco": 3953,
        "id": 521,
        "nombre_disco": "1994: Entre el Cielo y el Infierno",
        "link": "http://zipansion.com/GVWc"
    },
    {
        "id_disco": 3954,
        "id": 521,
        "nombre_disco": "1996 - En Vivo En Buenos Aires",
        "link": "http://zipansion.com/GVZp"
    },
    {
        "id_disco": 3955,
        "id": 521,
        "nombre_disco": "1997: Rata Blanca VII",
        "link": "http://zipansion.com/GVaS"
    },
    {
        "id_disco": 3956,
        "id": 521,
        "nombre_disco": "2000 - Grandes Canciones",
        "link": "http://zipansion.com/GVbj"
    },
    {
        "id_disco": 3957,
        "id": 521,
        "nombre_disco": "2002: El Camino del Fuego",
        "link": "http://zipansion.com/GVeG"
    },
    {
        "id_disco": 3958,
        "id": 521,
        "nombre_disco": "2003 - Poder Vivo",
        "link": "http://zipansion.com/GVfo"
    },
    {
        "id_disco": 3959,
        "id": 521,
        "nombre_disco": "2004 - En Vivo Estadio Obras",
        "link": "http://zipansion.com/GVht"
    },
    {
        "id_disco": 3960,
        "id": 521,
        "nombre_disco": "2005: La Llave de la Puerta Secreta",
        "link": "http://zipansion.com/GVjc"
    },
    {
        "id_disco": 3961,
        "id": 521,
        "nombre_disco": "2008: El Reino Olvidado",
        "link": "http://zipansion.com/GVkm"
    },
    {
        "id_disco": 3962,
        "id": 521,
        "nombre_disco": "2009: The Forgotten Kingdom",
        "link": "http://zipansion.com/Gfqn"
    },
    {
        "id_disco": 3963,
        "id": 521,
        "nombre_disco": "2011 - XX Aniversario En Vivo [Magos  Espadas Y Rosas]",
        "link": "http://zipansion.com/Gfrs"
    },
    {
        "id_disco": 3964,
        "id": 521,
        "nombre_disco": "2015: Tormenta Eléctrica",
        "link": "http://zipansion.com/Gfs9"
    },
    {
        "id_disco": 3965,
        "id": 522,
        "nombre_disco": "2000: Hybrid Theory",
        "link": "http://zipansion.com/GMVf"
    },
    {
        "id_disco": 3966,
        "id": 522,
        "nombre_disco": "2003: Meteora",
        "link": "http://zipansion.com/GMlW"
    },
    {
        "id_disco": 3967,
        "id": 522,
        "nombre_disco": "2007: Minutes to Midnight",
        "link": "http://zipansion.com/GMmK"
    },
    {
        "id_disco": 3968,
        "id": 522,
        "nombre_disco": "2010: A Thousand Suns",
        "link": "http://zipansion.com/GMnF"
    },
    {
        "id_disco": 3969,
        "id": 522,
        "nombre_disco": "2012: Living Things",
        "link": "http://zipansion.com/GMod"
    },
    {
        "id_disco": 3970,
        "id": 522,
        "nombre_disco": "2014: The Hunting Party",
        "link": "http://zipansion.com/GMpB"
    },
    {
        "id_disco": 3971,
        "id": 522,
        "nombre_disco": "2017: One More Light",
        "link": "http://zipansion.com/GMpy"
    },
    {
        "id_disco": 3972,
        "id": 523,
        "nombre_disco": "2002: Movement EP",
        "link": "http://zipansion.com/B6m4"
    },
    {
        "id_disco": 3973,
        "id": 523,
        "nombre_disco": "2003: Reason EP",
        "link": "http://zipansion.com/B6ml"
    },
    {
        "id_disco": 3974,
        "id": 523,
        "nombre_disco": "2005: How to Save a Life",
        "link": "http://zipansion.com/B6nP"
    },
    {
        "id_disco": 3975,
        "id": 523,
        "nombre_disco": "2006: Live At the Electric Factory - Bootleg No. 1",
        "link": "http://zipansion.com/B6oV"
    },
    {
        "id_disco": 3976,
        "id": 523,
        "nombre_disco": "2009: Christmas EP",
        "link": "http://zipansion.com/B6pQ"
    },
    {
        "id_disco": 3977,
        "id": 523,
        "nombre_disco": "2009: Live from the 9:30 Club: Bootleg No. 3",
        "link": "http://zipansion.com/B6vD"
    },
    {
        "id_disco": 3978,
        "id": 523,
        "nombre_disco": "2009: Live from SoHo",
        "link": "http://zipansion.com/B6ui"
    },
    {
        "id_disco": 3979,
        "id": 523,
        "nombre_disco": "2009: The Fray (Deluxe Edition)",
        "link": "http://zipansion.com/B6vg"
    },
    {
        "id_disco": 3980,
        "id": 523,
        "nombre_disco": "2012: Scars & Stories (Deluxe Edition)",
        "link": "http://zipansion.com/B6wz"
    },
    {
        "id_disco": 3981,
        "id": 523,
        "nombre_disco": "2014: Helios",
        "link": "http://zipansion.com/B6xO"
    },
    {
        "id_disco": 3982,
        "id": 524,
        "nombre_disco": "System of a Down (1998)",
        "link": "http://zipansion.com/AgLt"
    },
    {
        "id_disco": 3983,
        "id": 524,
        "nombre_disco": "Toxicity (2001)",
        "link": "http://zipansion.com/AgN2"
    },
    {
        "id_disco": 3984,
        "id": 524,
        "nombre_disco": "Steal This Album! (2002)",
        "link": "http://zipansion.com/AgJj"
    },
    {
        "id_disco": 3985,
        "id": 524,
        "nombre_disco": "Mezmerize (2005)",
        "link": "http://zipansion.com/AgHp"
    },
    {
        "id_disco": 3986,
        "id": 524,
        "nombre_disco": "Hypnotize (2005)",
        "link": "http://zipansion.com/AgH6"
    },
    {
        "id_disco": 3987,
        "id": 525,
        "nombre_disco": "1991: 39/Smooth",
        "link": "http://zipansion.com/8s80"
    },
    {
        "id_disco": 3988,
        "id": 525,
        "nombre_disco": "1992: Kerplunk",
        "link": "http://zipansion.com/8sFl"
    },
    {
        "id_disco": 3989,
        "id": 525,
        "nombre_disco": "1994: Dookie",
        "link": "http://zipansion.com/8sHo"
    },
    {
        "id_disco": 3990,
        "id": 525,
        "nombre_disco": "1995: Insomniac",
        "link": "http://zipansion.com/8sJK"
    },
    {
        "id_disco": 3991,
        "id": 525,
        "nombre_disco": "1998: Nimrod",
        "link": "http://zipansion.com/8sKn"
    },
    {
        "id_disco": 3992,
        "id": 525,
        "nombre_disco": "2000: Warning",
        "link": "http://zipansion.com/8sRX"
    },
    {
        "id_disco": 3993,
        "id": 525,
        "nombre_disco": "2004: American Idiot",
        "link": "http://zipansion.com/8sSX"
    },
    {
        "id_disco": 3994,
        "id": 525,
        "nombre_disco": "2009: 21st Century Breakdown",
        "link": "http://zipansion.com/8sTs"
    },
    {
        "id_disco": 3995,
        "id": 525,
        "nombre_disco": "2012: ¡Uno!",
        "link": "http://zipansion.com/8sVN"
    },
    {
        "id_disco": 3996,
        "id": 525,
        "nombre_disco": "2012: ¡Dos!",
        "link": "http://zipansion.com/8sbQ"
    },
    {
        "id_disco": 3997,
        "id": 525,
        "nombre_disco": "2012: ¡Tré!",
        "link": "http://zipansion.com/8sct"
    },
    {
        "id_disco": 3998,
        "id": 525,
        "nombre_disco": "2016: Revolution Radio",
        "link": "http://zipansion.com/8sds"
    },
    {
        "id_disco": 3999,
        "id": 526,
        "nombre_disco": "1964 The Rolling Stones",
        "link": "http://zipansion.com/7ndX"
    },
    {
        "id_disco": 4000,
        "id": 526,
        "nombre_disco": "1964 12 x 5",
        "link": "http://zipansion.com/7ZAj"
    },
    {
        "id_disco": 4001,
        "id": 526,
        "nombre_disco": "1965 The Rolling Stones  Now!",
        "link": "http://zipansion.com/7ZPq"
    },
    {
        "id_disco": 4002,
        "id": 526,
        "nombre_disco": "1965 Out of Our Heads",
        "link": "http://zipansion.com/7nbH"
    },
    {
        "id_disco": 4003,
        "id": 526,
        "nombre_disco": "1965 Decembers Children (And Everybodys)",
        "link": "http://zipansion.com/7ZJX"
    },
    {
        "id_disco": 4004,
        "id": 526,
        "nombre_disco": "1966 Aftermath US",
        "link": "http://zipansion.com/7ZCG"
    },
    {
        "id_disco": 4005,
        "id": 526,
        "nombre_disco": "1967 Between the Buttons",
        "link": "http://zipansion.com/7ZH5"
    },
    {
        "id_disco": 4006,
        "id": 526,
        "nombre_disco": "1967 Their Satanic Majesties Request",
        "link": "http://zipansion.com/7ncD"
    },
    {
        "id_disco": 4007,
        "id": 526,
        "nombre_disco": "1968 Beggars Banquet",
        "link": "http://zipansion.com/7ZE7"
    },
    {
        "id_disco": 4008,
        "id": 526,
        "nombre_disco": "1969 Let It Bleed",
        "link": "http://zipansion.com/7ZP8"
    },
    {
        "id_disco": 4009,
        "id": 526,
        "nombre_disco": "1971 Sticky Fingers",
        "link": "http://zipansion.com/7ZSJ"
    },
    {
        "id_disco": 4010,
        "id": 526,
        "nombre_disco": "1972 Exile on Main St.",
        "link": "http://zipansion.com/7ZMI"
    },
    {
        "id_disco": 4011,
        "id": 526,
        "nombre_disco": "1973 Goats Head Soup",
        "link": "http://zipansion.com/7ZNJ"
    },
    {
        "id_disco": 4012,
        "id": 526,
        "nombre_disco": "1974 Its Only RocknRoll",
        "link": "http://zipansion.com/7ZOQ"
    },
    {
        "id_disco": 4013,
        "id": 526,
        "nombre_disco": "1976 Black and Blue",
        "link": "http://zipansion.com/7ZHs"
    },
    {
        "id_disco": 4014,
        "id": 526,
        "nombre_disco": "1978 Some Girls",
        "link": "http://zipansion.com/7ZQN"
    },
    {
        "id_disco": 4015,
        "id": 526,
        "nombre_disco": "1980 Emotional Rescue",
        "link": "http://zipansion.com/7ZLl"
    },
    {
        "id_disco": 4016,
        "id": 526,
        "nombre_disco": "1981 Tattoo You",
        "link": "http://zipansion.com/7ZSw"
    },
    {
        "id_disco": 4017,
        "id": 526,
        "nombre_disco": "1983 Undercover",
        "link": "http://zipansion.com/7ZTh"
    },
    {
        "id_disco": 4018,
        "id": 526,
        "nombre_disco": "1986 Dirty Work",
        "link": "http://zipansion.com/7ZL1"
    },
    {
        "id_disco": 4019,
        "id": 526,
        "nombre_disco": "1989 Steel Wheels",
        "link": "http://zipansion.com/7ZR9"
    },
    {
        "id_disco": 4020,
        "id": 526,
        "nombre_disco": "1994 Voodoo Lounge",
        "link": "http://zipansion.com/7ZUr"
    },
    {
        "id_disco": 4021,
        "id": 526,
        "nombre_disco": "1997 Bridges to Babylon",
        "link": "http://zipansion.com/7ZIp"
    },
    {
        "id_disco": 4022,
        "id": 526,
        "nombre_disco": "2005 A Bigger Bang",
        "link": "http://zipansion.com/7ZBC"
    },
    {
        "id_disco": 4023,
        "id": 526,
        "nombre_disco": "2012 Grrr!",
        "link": "http://zipansion.com/7nLF"
    },
    {
        "id_disco": 4024,
        "id": 526,
        "nombre_disco": "2016 Blue & Lonesome",
        "link": "http://zipansion.com/7p6E"
    },
    {
        "id_disco": 4025,
        "id": 527,
        "nombre_disco": "1998 Dile al sol",
        "link": "http://zipansion.com/6C4r"
    },
    {
        "id_disco": 4026,
        "id": 527,
        "nombre_disco": "2000 El viaje de Copperpot",
        "link": "http://zipansion.com/6C7s"
    },
    {
        "id_disco": 4027,
        "id": 527,
        "nombre_disco": "2003 Gira en vivo",
        "link": "http://zipansion.com/6C91"
    },
    {
        "id_disco": 4028,
        "id": 527,
        "nombre_disco": "2003 Lo que te conté mientras te hacías la dormida",
        "link": "http://zipansion.com/6CGJ"
    },
    {
        "id_disco": 4029,
        "id": 527,
        "nombre_disco": "2004 Rarezas",
        "link": "http://zipansion.com/6CIf"
    },
    {
        "id_disco": 4030,
        "id": 527,
        "nombre_disco": "2005 Paris",
        "link": "http://zipansion.com/6CM6"
    },
    {
        "id_disco": 4031,
        "id": 527,
        "nombre_disco": "2006 Guapa",
        "link": "http://zipansion.com/6CMs"
    },
    {
        "id_disco": 4032,
        "id": 527,
        "nombre_disco": "2006 Mas guapa",
        "link": "http://zipansion.com/6CPg"
    },
    {
        "id_disco": 4033,
        "id": 527,
        "nombre_disco": "2008 A las cinco en el Astoria",
        "link": "http://zipansion.com/6CQl"
    },
    {
        "id_disco": 4034,
        "id": 527,
        "nombre_disco": "2009 Nuestra Casa A La Izquierda Del Tiempo",
        "link": "http://zipansion.com/6CS9"
    },
    {
        "id_disco": 4035,
        "id": 527,
        "nombre_disco": "2011 Cometas por el cielo",
        "link": "http://zipansion.com/6CVa"
    },
    {
        "id_disco": 4036,
        "id": 527,
        "nombre_disco": "2016 El planeta imaginario",
        "link": "http://zipansion.com/6DTQ"
    },
    {
        "id_disco": 4037,
        "id": 528,
        "nombre_disco": "Ten (1991)",
        "link": "http://zipansion.com/3TSh"
    },
    {
        "id_disco": 4038,
        "id": 528,
        "nombre_disco": "Vs. (1993)",
        "link": "http://zipansion.com/3Twt"
    },
    {
        "id_disco": 4039,
        "id": 528,
        "nombre_disco": "Vitalogy (1994)",
        "link": "http://zipansion.com/3Tvs"
    },
    {
        "id_disco": 4040,
        "id": 528,
        "nombre_disco": "No Code (1996)",
        "link": "http://zipansion.com/3S78"
    },
    {
        "id_disco": 4041,
        "id": 528,
        "nombre_disco": "Yield (1998)",
        "link": "http://zipansion.com/3TzL"
    },
    {
        "id_disco": 4042,
        "id": 528,
        "nombre_disco": "Binaural (2000)",
        "link": "http://zipansion.com/3QTi"
    },
    {
        "id_disco": 4043,
        "id": 528,
        "nombre_disco": "Riot Act (2002)",
        "link": "http://zipansion.com/3SvR"
    },
    {
        "id_disco": 4044,
        "id": 528,
        "nombre_disco": "Lost Dogs (2003)",
        "link": "http://zipansion.com/3Rby"
    },
    {
        "id_disco": 4045,
        "id": 528,
        "nombre_disco": "Live at Benaroya Hall (2004)",
        "link": "http://zipansion.com/3QHe"
    },
    {
        "id_disco": 4046,
        "id": 528,
        "nombre_disco": "Pearl Jam (2006)",
        "link": "http://zipansion.com/3TAQ"
    },
    {
        "id_disco": 4047,
        "id": 528,
        "nombre_disco": "Backspacer (2009)",
        "link": "http://zipansion.com/3Pxw"
    },
    {
        "id_disco": 4048,
        "id": 528,
        "nombre_disco": "Live On Ten Legs (2011)",
        "link": "http://zipansion.com/3QUx"
    },
    {
        "id_disco": 4049,
        "id": 528,
        "nombre_disco": "Twenty (2011)",
        "link": "http://zipansion.com/3TUY"
    },
    {
        "id_disco": 4050,
        "id": 528,
        "nombre_disco": "Lightning Bolt (2013)",
        "link": "http://zipansion.com/6AEl"
    },
    {
        "id_disco": 4051,
        "id": 529,
        "nombre_disco": "Los Tipitos (1996).",
        "link": "http://zipansion.com/2FT8"
    },
    {
        "id_disco": 4052,
        "id": 529,
        "nombre_disco": "¿Quién va a garpar todo esto? (Vol. 1) (1998).",
        "link": "http://zipansion.com/2FTf"
    },
    {
        "id_disco": 4053,
        "id": 529,
        "nombre_disco": "Cocrouchis (1999).",
        "link": "http://zipansion.com/2FWr"
    },
    {
        "id_disco": 4054,
        "id": 529,
        "nombre_disco": "Vintage (2001).",
        "link": "http://zipansion.com/2FXs"
    },
    {
        "id_disco": 4055,
        "id": 529,
        "nombre_disco": "Contra los molinos (2002).",
        "link": "http://zipansion.com/2FYg"
    },
    {
        "id_disco": 4056,
        "id": 529,
        "nombre_disco": "¿Quién va a garpar todo esto? (Vol. 2) (2002).",
        "link": "http://zipansion.com/2FZU"
    },
    {
        "id_disco": 4057,
        "id": 529,
        "nombre_disco": "Armando Camaleón (2004).",
        "link": "http://zipansion.com/2Fax"
    },
    {
        "id_disco": 4058,
        "id": 529,
        "nombre_disco": "Tipitorex (2006)",
        "link": "http://zipansion.com/2FcG"
    },
    {
        "id_disco": 4059,
        "id": 529,
        "nombre_disco": "Tan Real (2007).",
        "link": "http://zipansion.com/2Fgb"
    },
    {
        "id_disco": 4060,
        "id": 529,
        "nombre_disco": "El club de los martes (2010).",
        "link": "http://zipansion.com/2FyT"
    },
    {
        "id_disco": 4061,
        "id": 529,
        "nombre_disco": "Push (2013).",
        "link": "http://zipansion.com/2Fzv"
    },
    {
        "id_disco": 4062,
        "id": 529,
        "nombre_disco": "Ojos tremendos (2016).",
        "link": "http://zipansion.com/2G1k"
    },
    {
        "id_disco": 4063,
        "id": 530,
        "nombre_disco": "1967 The Piper at the Gates of Dawn",
        "link": "http://zipansion.com/1Nzi"
    },
    {
        "id_disco": 4064,
        "id": 530,
        "nombre_disco": "1968 A Saucerful of Secrets",
        "link": "http://zipansion.com/1O1b"
    },
    {
        "id_disco": 4065,
        "id": 530,
        "nombre_disco": "1969 Music from the Film More",
        "link": "http://zipansion.com/1O5d"
    },
    {
        "id_disco": 4066,
        "id": 530,
        "nombre_disco": "1969 Ummagumma",
        "link": "http://zipansion.com/1O45"
    },
    {
        "id_disco": 4067,
        "id": 530,
        "nombre_disco": "1970 Atom Heart Mother",
        "link": "http://zipansion.com/1O70"
    },
    {
        "id_disco": 4068,
        "id": 530,
        "nombre_disco": "1971 Meddle",
        "link": "http://zipansion.com/1O98"
    },
    {
        "id_disco": 4069,
        "id": 530,
        "nombre_disco": "1972 Obscured by Clouds",
        "link": "http://zipansion.com/1OA5"
    },
    {
        "id_disco": 4070,
        "id": 530,
        "nombre_disco": "1973 The Dark Side of the Moon",
        "link": "http://zipansion.com/1OAm"
    },
    {
        "id_disco": 4071,
        "id": 530,
        "nombre_disco": "1975 Wish You Were Here",
        "link": "http://zipansion.com/1OBh"
    },
    {
        "id_disco": 4072,
        "id": 530,
        "nombre_disco": "1977 Animals",
        "link": "http://zipansion.com/1OEV"
    },
    {
        "id_disco": 4073,
        "id": 530,
        "nombre_disco": "1979 The Wall",
        "link": "http://zipansion.com/1OF5"
    },
    {
        "id_disco": 4074,
        "id": 530,
        "nombre_disco": "1983 The Final Cut",
        "link": "http://zipansion.com/1OFv"
    },
    {
        "id_disco": 4075,
        "id": 530,
        "nombre_disco": "1987 A Momentary Lapse of Reason",
        "link": "http://zipansion.com/1OGq"
    },
    {
        "id_disco": 4076,
        "id": 530,
        "nombre_disco": "1994 The Division Bell",
        "link": "http://zipansion.com/1OIO"
    },
    {
        "id_disco": 4077,
        "id": 530,
        "nombre_disco": "2014 The Endless River",
        "link": "http://zipansion.com/1PLT"
    },
    {
        "id_disco": 4078,
        "id": 531,
        "nombre_disco": "1993: Pablo Honey",
        "link": "http://zipansion.com/1Ku3"
    },
    {
        "id_disco": 4079,
        "id": 531,
        "nombre_disco": "1995: The Bends",
        "link": "http://zipansion.com/1Kv4"
    },
    {
        "id_disco": 4080,
        "id": 531,
        "nombre_disco": "1997: OK Computer",
        "link": "http://zipansion.com/1Krt"
    },
    {
        "id_disco": 4081,
        "id": 531,
        "nombre_disco": "2000: Kid A",
        "link": "http://zipansion.com/1KpX"
    },
    {
        "id_disco": 4082,
        "id": 531,
        "nombre_disco": "2001: Amnesiac",
        "link": "http://zipansion.com/1Klm"
    },
    {
        "id_disco": 4083,
        "id": 531,
        "nombre_disco": "2003: Hail to the Thief",
        "link": "http://zipansion.com/1Kn5"
    },
    {
        "id_disco": 4084,
        "id": 531,
        "nombre_disco": "2007: In Rainbows",
        "link": "http://zipansion.com/1Ko5"
    },
    {
        "id_disco": 4085,
        "id": 531,
        "nombre_disco": "2011: The King of Limbs",
        "link": "http://zipansion.com/1Kwz"
    },
    {
        "id_disco": 4086,
        "id": 531,
        "nombre_disco": "2016: A Moon Shaped Pool",
        "link": "http://zipansion.com/1Kj9"
    },
    {
        "id_disco": 4087,
        "id": 532,
        "nombre_disco": "My Generation (1965)",
        "link": "http://zipansion.com/1KFB"
    },
    {
        "id_disco": 4088,
        "id": 532,
        "nombre_disco": "A Quick One (1966)",
        "link": "http://zipansion.com/1KHY"
    },
    {
        "id_disco": 4089,
        "id": 532,
        "nombre_disco": "The Who Sell Out (1967)",
        "link": "http://zipansion.com/1KJM"
    },
    {
        "id_disco": 4090,
        "id": 532,
        "nombre_disco": "Tommy (1969)",
        "link": "http://zipansion.com/1KKg"
    },
    {
        "id_disco": 4091,
        "id": 532,
        "nombre_disco": "Whos Next (1971)",
        "link": "http://zipansion.com/1KMs"
    },
    {
        "id_disco": 4092,
        "id": 532,
        "nombre_disco": "Quadrophenia (1973)",
        "link": "http://zipansion.com/1KPL"
    },
    {
        "id_disco": 4093,
        "id": 532,
        "nombre_disco": "The Who By Numbers (1975)",
        "link": "http://zipansion.com/1KQG"
    },
    {
        "id_disco": 4094,
        "id": 532,
        "nombre_disco": "Who Are You (1978)",
        "link": "http://zipansion.com/1KQz"
    },
    {
        "id_disco": 4095,
        "id": 532,
        "nombre_disco": "Face Dances (1981)",
        "link": "http://zipansion.com/1KTH"
    },
    {
        "id_disco": 4096,
        "id": 532,
        "nombre_disco": "Its Hard (1982)",
        "link": "http://zipansion.com/1KUt"
    },
    {
        "id_disco": 4097,
        "id": 532,
        "nombre_disco": "Endless Wire (2006)",
        "link": "http://zipansion.com/1KW6"
    },
    {
        "id_disco": 4098,
        "id": 533,
        "nombre_disco": "(2002) Natalia Lafourcade ",
        "link": "http://velociterium.com/Ao5J"
    },
    {
        "id_disco": 4099,
        "id": 533,
        "nombre_disco": "(2005) Casa",
        "link": "http://velociterium.com/Anjp"
    },
    {
        "id_disco": 4100,
        "id": 533,
        "nombre_disco": "(2007) Las 4 Estaciones del Amor",
        "link": "http://velociterium.com/Anmh"
    },
    {
        "id_disco": 4101,
        "id": 533,
        "nombre_disco": "(2009) Hu Hu Hu ",
        "link": "http://velociterium.com/Anl5"
    },
    {
        "id_disco": 4102,
        "id": 533,
        "nombre_disco": "(2012) Mujer Divina",
        "link": "http://velociterium.com/Ao26"
    },
    {
        "id_disco": 4103,
        "id": 533,
        "nombre_disco": "(2015) Hasta la Raíz",
        "link": "http://velociterium.com/Ankd"
    },
    {
        "id_disco": 4104,
        "id": 533,
        "nombre_disco": "(2017) Musas Vol.1",
        "link": "http://velociterium.com/Ao3C"
    },
    {
        "id_disco": 4105,
        "id": 533,
        "nombre_disco": "(2018) Musas Vol.2",
        "link": "http://velociterium.com/Ao41"
    },
    {
        "id_disco": 4106,
        "id": 534,
        "nombre_disco": "Curb (1996)",
        "link": "http://velociterium.com/7pie"
    },
    {
        "id_disco": 4107,
        "id": 534,
        "nombre_disco": "Hesher (1996)",
        "link": "http://velociterium.com/7pjG"
    },
    {
        "id_disco": 4108,
        "id": 534,
        "nombre_disco": "The State (1999)",
        "link": "http://velociterium.com/7pok"
    },
    {
        "id_disco": 4109,
        "id": 534,
        "nombre_disco": "Silver Side Up (2001)",
        "link": "http://velociterium.com/7pqN"
    },
    {
        "id_disco": 4110,
        "id": 534,
        "nombre_disco": "MTV Unplugged (2003)",
        "link": "http://velociterium.com/7pru"
    },
    {
        "id_disco": 4111,
        "id": 534,
        "nombre_disco": "The Long Road (2003)",
        "link": "http://velociterium.com/7pzh"
    },
    {
        "id_disco": 4112,
        "id": 534,
        "nombre_disco": "All The Right Reasons (2005)",
        "link": "http://velociterium.com/7q0p"
    },
    {
        "id_disco": 4113,
        "id": 534,
        "nombre_disco": "Greatest Hits (2007)",
        "link": "http://velociterium.com/7q1j"
    },
    {
        "id_disco": 4114,
        "id": 534,
        "nombre_disco": "Dark Horse (2008)",
        "link": "http://velociterium.com/7q41"
    },
    {
        "id_disco": 4115,
        "id": 534,
        "nombre_disco": "Here And Now (2011)",
        "link": "http://velociterium.com/7s7v"
    },
    {
        "id_disco": 4116,
        "id": 534,
        "nombre_disco": "No Fixed address (2014)",
        "link": "http://velociterium.com/7s8f"
    },
    {
        "id_disco": 4117,
        "id": 534,
        "nombre_disco": "Feed the Machine (2017)",
        "link": "http://velociterium.com/7s9y"
    },
    {
        "id_disco": 4118,
        "id": 535,
        "nombre_disco": "Korn (1994)",
        "link": "http://velociterium.com/7nIf"
    },
    {
        "id_disco": 4119,
        "id": 535,
        "nombre_disco": "Life Is Peachy (1996)",
        "link": "http://velociterium.com/7nKp"
    },
    {
        "id_disco": 4120,
        "id": 535,
        "nombre_disco": "Follow the Leader (1998)",
        "link": "http://velociterium.com/7nM2"
    },
    {
        "id_disco": 4121,
        "id": 535,
        "nombre_disco": "Issues (1999)",
        "link": "http://velociterium.com/7nMi"
    },
    {
        "id_disco": 4122,
        "id": 535,
        "nombre_disco": "Untouchables (2002)",
        "link": "http://velociterium.com/7nPK"
    },
    {
        "id_disco": 4123,
        "id": 535,
        "nombre_disco": "Take a Look in the Mirror (2003)",
        "link": "http://velociterium.com/7nQz"
    },
    {
        "id_disco": 4124,
        "id": 535,
        "nombre_disco": "See You on the Other Side (2005)",
        "link": "http://velociterium.com/7nSR"
    },
    {
        "id_disco": 4125,
        "id": 535,
        "nombre_disco": "untitled (2007)",
        "link": "http://velociterium.com/7nTB"
    },
    {
        "id_disco": 4126,
        "id": 535,
        "nombre_disco": "Korn III – Remember Who You Are (2010)",
        "link": "http://velociterium.com/7orB"
    },
    {
        "id_disco": 4127,
        "id": 535,
        "nombre_disco": "The Path of Totality (2011)",
        "link": "http://velociterium.com/7osb"
    },
    {
        "id_disco": 4128,
        "id": 535,
        "nombre_disco": "The Paradigm Shift (2013)",
        "link": "http://velociterium.com/7otF"
    },
    {
        "id_disco": 4129,
        "id": 535,
        "nombre_disco": "The Serenity of Suffering (2016)",
        "link": "http://velociterium.com/7otz"
    },
    {
        "id_disco": 4130,
        "id": 536,
        "nombre_disco": "1987 Héroes del Silencio ",
        "link": "http://velociterium.com/7IUS"
    },
    {
        "id_disco": 4131,
        "id": 536,
        "nombre_disco": "1988 El mar no cesa ",
        "link": "http://velociterium.com/7IHK"
    },
    {
        "id_disco": 4132,
        "id": 536,
        "nombre_disco": "1989 En directo ",
        "link": "http://velociterium.com/7mxP"
    },
    {
        "id_disco": 4133,
        "id": 536,
        "nombre_disco": "1990 Senderos de traición ",
        "link": "http://velociterium.com/7INu"
    },
    {
        "id_disco": 4134,
        "id": 536,
        "nombre_disco": "1991 Senda 91",
        "link": "http://velociterium.com/7IJi"
    },
    {
        "id_disco": 4135,
        "id": 536,
        "nombre_disco": "1993 El espíritu del vino",
        "link": "http://velociterium.com/7IFb"
    },
    {
        "id_disco": 4136,
        "id": 536,
        "nombre_disco": "1995 Avalancha",
        "link": "http://velociterium.com/7mzW"
    },
    {
        "id_disco": 4137,
        "id": 536,
        "nombre_disco": "1996 Parasiempre",
        "link": "http://velociterium.com/7IIG"
    },
    {
        "id_disco": 4138,
        "id": 537,
        "nombre_disco": "1984 Bon Jovi",
        "link": "http://velociterium.com/79cU"
    },
    {
        "id_disco": 4139,
        "id": 537,
        "nombre_disco": "1985 7800° Fahrenheit",
        "link": "http://velociterium.com/79gA"
    },
    {
        "id_disco": 4140,
        "id": 537,
        "nombre_disco": "1986 Slippery When Wet",
        "link": "http://velociterium.com/7A5I"
    },
    {
        "id_disco": 4141,
        "id": 537,
        "nombre_disco": "1988 New Jersey",
        "link": "http://velociterium.com/79jM"
    },
    {
        "id_disco": 4142,
        "id": 537,
        "nombre_disco": "1992 Keep the Faith",
        "link": "http://velociterium.com/79MC"
    },
    {
        "id_disco": 4143,
        "id": 537,
        "nombre_disco": "1994 Cross Road",
        "link": "http://velociterium.com/79ok"
    },
    {
        "id_disco": 4144,
        "id": 537,
        "nombre_disco": "1995 These Days",
        "link": "http://velociterium.com/79OF"
    },
    {
        "id_disco": 4145,
        "id": 537,
        "nombre_disco": "2000 Crush",
        "link": "http://velociterium.com/79QS"
    },
    {
        "id_disco": 4146,
        "id": 537,
        "nombre_disco": "2002 Bounce",
        "link": "http://velociterium.com/79Rf"
    },
    {
        "id_disco": 4147,
        "id": 537,
        "nombre_disco": "2005 Have a Nice Day",
        "link": "http://velociterium.com/79TQ"
    },
    {
        "id_disco": 4148,
        "id": 537,
        "nombre_disco": "2007 Lost Highway",
        "link": "http://velociterium.com/79Vu"
    },
    {
        "id_disco": 4149,
        "id": 537,
        "nombre_disco": "2009 The Circle",
        "link": "http://velociterium.com/79Wn"
    },
    {
        "id_disco": 4150,
        "id": 537,
        "nombre_disco": "2013 What About Now",
        "link": "http://velociterium.com/79nZ"
    },
    {
        "id_disco": 4151,
        "id": 537,
        "nombre_disco": "2015 Burning Bridges",
        "link": "http://velociterium.com/7pcR"
    },
    {
        "id_disco": 4152,
        "id": 537,
        "nombre_disco": "2016 This House Is Not For Sale",
        "link": "http://velociterium.com/7pf3"
    },
    {
        "id_disco": 4153,
        "id": 538,
        "nombre_disco": "Franz Ferdinand (2004)",
        "link": "http://velociterium.com/1r2Y"
    },
    {
        "id_disco": 4154,
        "id": 538,
        "nombre_disco": "You Could Have It So Much Better (2005)",
        "link": "http://velociterium.com/1r4H"
    },
    {
        "id_disco": 4155,
        "id": 538,
        "nombre_disco": "Blood (2009)",
        "link": "http://velociterium.com/1r6J"
    },
    {
        "id_disco": 4156,
        "id": 538,
        "nombre_disco": "Tonight (2009)",
        "link": "http://velociterium.com/1rC7"
    },
    {
        "id_disco": 4157,
        "id": 538,
        "nombre_disco": "Right Thoughts  Right Words  Right Action (2013)",
        "link": "http://velociterium.com/1rFY"
    },
    {
        "id_disco": 4158,
        "id": 538,
        "nombre_disco": "Late Night Tales (2014)",
        "link": "http://velociterium.com/1rH1"
    },
    {
        "id_disco": 4159,
        "id": 538,
        "nombre_disco": "FFS junto a Sparks (2015)",
        "link": "http://velociterium.com/1ra7"
    },
    {
        "id_disco": 4160,
        "id": 538,
        "nombre_disco": "Always Ascending (2018)",
        "link": "http://velociterium.com/1tsX"
    },
    {
        "id_disco": 4161,
        "id": 539,
        "nombre_disco": "2002: Justified",
        "link": "http://swifttopia.com/FYkc"
    },
    {
        "id_disco": 4162,
        "id": 539,
        "nombre_disco": "2006: FutureSex/LoveSounds",
        "link": "http://swifttopia.com/FYlU"
    },
    {
        "id_disco": 4163,
        "id": 539,
        "nombre_disco": "2013: The 20/20 Experience",
        "link": "http://swifttopia.com/FYni"
    },
    {
        "id_disco": 4164,
        "id": 539,
        "nombre_disco": "2013: The 20/20 Experience (2 of 2)",
        "link": "http://swifttopia.com/FYph"
    },
    {
        "id_disco": 4165,
        "id": 539,
        "nombre_disco": "2018: Man of the Woods",
        "link": "http://swifttopia.com/FYqn"
    },
    {
        "id_disco": 4166,
        "id": 540,
        "nombre_disco": "Woman (2013)",
        "link": "http://swifttopia.com/EPr3"
    },
    {
        "id_disco": 4167,
        "id": 540,
        "nombre_disco": "Blood (2018)",
        "link": "http://swifttopia.com/EPmt"
    },
    {
        "id_disco": 4168,
        "id": 541,
        "nombre_disco": "Oracular Spectacular (2007)",
        "link": "http://swifttopia.com/EEfX"
    },
    {
        "id_disco": 4169,
        "id": 541,
        "nombre_disco": "Congratulations (2010)",
        "link": "http://swifttopia.com/EEjs"
    },
    {
        "id_disco": 4170,
        "id": 541,
        "nombre_disco": "MGMT (2013)",
        "link": "http://swifttopia.com/EEmF"
    },
    {
        "id_disco": 4171,
        "id": 541,
        "nombre_disco": "Little Dark Age (2018)",
        "link": "http://swifttopia.com/EEo8"
    },
    {
        "id_disco": 4172,
        "id": 542,
        "nombre_disco": "1975 High Voltage (Australia)",
        "link": "http://swifttopia.com/Bypd"
    },
    {
        "id_disco": 4173,
        "id": 542,
        "nombre_disco": "1976 High Voltage (Internacional)",
        "link": "http://swifttopia.com/E1Ib"
    },
    {
        "id_disco": 4174,
        "id": 542,
        "nombre_disco": "1975 T.N.T (Australia)",
        "link": "http://swifttopia.com/ByOO"
    },
    {
        "id_disco": 4175,
        "id": 542,
        "nombre_disco": "1976 Dirty Deeds Done Dirt Cheap (Australia)",
        "link": "http://swifttopia.com/BySc"
    },
    {
        "id_disco": 4176,
        "id": 542,
        "nombre_disco": "1981 Dirty Deeds Done Dirt Cheap (Universal)",
        "link": "http://swifttopia.com/Byjq"
    },
    {
        "id_disco": 4177,
        "id": 542,
        "nombre_disco": "1977 Let There Be Rock (Australia)",
        "link": "http://swifttopia.com/E1QY"
    },
    {
        "id_disco": 4178,
        "id": 542,
        "nombre_disco": "1977 Let There Be Rock (internacional)",
        "link": "http://swifttopia.com/E1Wi"
    },
    {
        "id_disco": 4179,
        "id": 542,
        "nombre_disco": "1978 If You Want Blood Youve Got It (Live)",
        "link": "http://swifttopia.com/E578"
    },
    {
        "id_disco": 4180,
        "id": 542,
        "nombre_disco": "1978 Powerage",
        "link": "http://swifttopia.com/E53E"
    },
    {
        "id_disco": 4181,
        "id": 542,
        "nombre_disco": "1979 Highway to Hell",
        "link": "http://swifttopia.com/E1Ep"
    },
    {
        "id_disco": 4182,
        "id": 542,
        "nombre_disco": "1980 Back in Black",
        "link": "http://swifttopia.com/E1av"
    },
    {
        "id_disco": 4183,
        "id": 542,
        "nombre_disco": "1981 For Those About to Rock",
        "link": "http://swifttopia.com/E1ee"
    },
    {
        "id_disco": 4184,
        "id": 542,
        "nombre_disco": "1983 Flick of the Switch",
        "link": "http://swifttopia.com/E1cg"
    },
    {
        "id_disco": 4185,
        "id": 542,
        "nombre_disco": "1984 74 Jailbreak",
        "link": "http://swifttopia.com/E5AF"
    },
    {
        "id_disco": 4186,
        "id": 542,
        "nombre_disco": "1985 Fly on the Wall",
        "link": "http://swifttopia.com/Byo7"
    },
    {
        "id_disco": 4187,
        "id": 542,
        "nombre_disco": "1986 Who Made Who",
        "link": "http://swifttopia.com/E5B3"
    },
    {
        "id_disco": 4188,
        "id": 542,
        "nombre_disco": "1988 Blow Up Your Video",
        "link": "http://swifttopia.com/ByiO"
    },
    {
        "id_disco": 4189,
        "id": 542,
        "nombre_disco": "1990 The Razors Edge",
        "link": "http://swifttopia.com/E1YN"
    },
    {
        "id_disco": 4190,
        "id": 542,
        "nombre_disco": "1995 Ballbreaker",
        "link": "http://swifttopia.com/Bye7"
    },
    {
        "id_disco": 4191,
        "id": 542,
        "nombre_disco": "2000 Stiff Upper Lip",
        "link": "http://swifttopia.com/E1gs"
    },
    {
        "id_disco": 4192,
        "id": 542,
        "nombre_disco": "2008 Black Ice",
        "link": "http://swifttopia.com/Byfq"
    },
    {
        "id_disco": 4193,
        "id": 542,
        "nombre_disco": "2014 Rock or Bust",
        "link": "http://swifttopia.com/E5CI"
    },
    {
        "id_disco": 4194,
        "id": 542,
        "nombre_disco": "2010 - Iron Man 2",
        "link": "http://eunsetee.com/7Qip"
    },
    {
        "id_disco": 4195,
        "id": 542,
        "nombre_disco": "2012 - Live At River Plate",
        "link": "http://eunsetee.com/7QjJ"
    },
    {
        "id_disco": 4196,
        "id": 542,
        "nombre_disco": "2019 - Hell Aint A Bad Place To Be (Live)",
        "link": "http://eunsetee.com/7Qjn"
    },
    {
        "id_disco": 4197,
        "id": 542,
        "nombre_disco": "2019 - Kicked In The Teeth (Live)",
        "link": "http://eunsetee.com/7Qko"
    },
    {
        "id_disco": 4198,
        "id": 543,
        "nombre_disco": "Herzeleid (1995)",
        "link": "http://swifttopia.com/Bkmv"
    },
    {
        "id_disco": 4199,
        "id": 543,
        "nombre_disco": "Sehnsucht (1997)",
        "link": "http://swifttopia.com/Bkx5"
    },
    {
        "id_disco": 4200,
        "id": 543,
        "nombre_disco": "Mutter (2001)",
        "link": "http://swifttopia.com/BkrH"
    },
    {
        "id_disco": 4201,
        "id": 543,
        "nombre_disco": "Reise  Reise (2004)",
        "link": "http://swifttopia.com/Bksx"
    },
    {
        "id_disco": 4202,
        "id": 543,
        "nombre_disco": "Rosenrot (2005)",
        "link": "http://swifttopia.com/Bkuv"
    },
    {
        "id_disco": 4203,
        "id": 543,
        "nombre_disco": "Liebe ist für alle da (2009)",
        "link": "http://swifttopia.com/Bkq4"
    },
    {
        "id_disco": 4204,
        "id": 544,
        "nombre_disco": "1986 Live ?!*@ Like a Suicide",
        "link": "http://swifttopia.com/BjA7"
    },
    {
        "id_disco": 4205,
        "id": 544,
        "nombre_disco": "1987 Appetite for Destruction",
        "link": "http://swifttopia.com/AqN5"
    },
    {
        "id_disco": 4206,
        "id": 544,
        "nombre_disco": "1988 G N R Lies",
        "link": "http://swifttopia.com/AqP8"
    },
    {
        "id_disco": 4207,
        "id": 544,
        "nombre_disco": "1991 Use Your Illusion I",
        "link": "http://swifttopia.com/AqQv"
    },
    {
        "id_disco": 4208,
        "id": 544,
        "nombre_disco": "1991 Use Your Illusion II",
        "link": "http://swifttopia.com/AqRQ"
    },
    {
        "id_disco": 4209,
        "id": 544,
        "nombre_disco": "1993 The Spaghetti Incident?",
        "link": "http://swifttopia.com/AqZH"
    },
    {
        "id_disco": 4210,
        "id": 544,
        "nombre_disco": "1999 Live Era: 87-93 (recopilación)",
        "link": "http://swifttopia.com/BjCN"
    },
    {
        "id_disco": 4211,
        "id": 544,
        "nombre_disco": "2004 Greatest Hits (recopilación)",
        "link": "http://swifttopia.com/BjMf"
    },
    {
        "id_disco": 4212,
        "id": 544,
        "nombre_disco": "2008 Chinese Democracy",
        "link": "http://swifttopia.com/Arfl"
    },
    {
        "id_disco": 4213,
        "id": 545,
        "nombre_disco": "1989 Bleach",
        "link": "http://swifttopia.com/AoKm"
    },
    {
        "id_disco": 4214,
        "id": 545,
        "nombre_disco": "1991 Nevermind",
        "link": "http://swifttopia.com/AoIm"
    },
    {
        "id_disco": 4215,
        "id": 545,
        "nombre_disco": "1992 Incesticide",
        "link": "http://swifttopia.com/Ap5S"
    },
    {
        "id_disco": 4216,
        "id": 545,
        "nombre_disco": "1992 Live At Reading",
        "link": "http://swifttopia.com/Ap7h"
    },
    {
        "id_disco": 4217,
        "id": 545,
        "nombre_disco": "1993 In Utero",
        "link": "http://swifttopia.com/AoNA"
    },
    {
        "id_disco": 4218,
        "id": 545,
        "nombre_disco": "1994 MTV Unplugged in New York",
        "link": "http://swifttopia.com/ApBr"
    },
    {
        "id_disco": 4219,
        "id": 545,
        "nombre_disco": "1996 From The Muddy Banks Of the Wishkah",
        "link": "http://swifttopia.com/AotU"
    },
    {
        "id_disco": 4220,
        "id": 545,
        "nombre_disco": "2002 Nirvana",
        "link": "http://swifttopia.com/ApG6"
    },
    {
        "id_disco": 4221,
        "id": 545,
        "nombre_disco": "2005 Sliver (The Best Of The Box)",
        "link": "http://swifttopia.com/ApK1"
    },
    {
        "id_disco": 4222,
        "id": 545,
        "nombre_disco": "2010 Icon",
        "link": "http://swifttopia.com/Ap0d"
    },
    {
        "id_disco": 4223,
        "id": 546,
        "nombre_disco": "1989 Dulce Navidad",
        "link": "http://swifttopia.com/AmOY"
    },
    {
        "id_disco": 4224,
        "id": 546,
        "nombre_disco": "1990 El cielo puede esperar",
        "link": "http://swifttopia.com/AmPb"
    },
    {
        "id_disco": 4225,
        "id": 546,
        "nombre_disco": "1992 Ángeles caídos",
        "link": "http://swifttopia.com/AmlU"
    },
    {
        "id_disco": 4226,
        "id": 546,
        "nombre_disco": "1993 Todo está al revés",
        "link": "http://swifttopia.com/Ammn"
    },
    {
        "id_disco": 4227,
        "id": 546,
        "nombre_disco": "1995 Amén!",
        "link": "http://swifttopia.com/Amnx"
    },
    {
        "id_disco": 4228,
        "id": 546,
        "nombre_disco": "1997 Un día perfecto (U.D.P)",
        "link": "http://swifttopia.com/Amoi"
    },
    {
        "id_disco": 4229,
        "id": 546,
        "nombre_disco": "1998 Otras Canciones",
        "link": "http://swifttopia.com/Amqr"
    },
    {
        "id_disco": 4230,
        "id": 546,
        "nombre_disco": "2000 Radio Insomnio",
        "link": "http://swifttopia.com/Amsv"
    },
    {
        "id_disco": 4231,
        "id": 546,
        "nombre_disco": "2003 Antihumano",
        "link": "http://swifttopia.com/Amty"
    },
    {
        "id_disco": 4232,
        "id": 546,
        "nombre_disco": "2007 Karmagedon",
        "link": "http://swifttopia.com/Amw3"
    },
    {
        "id_disco": 4233,
        "id": 546,
        "nombre_disco": "2009 Estallar",
        "link": "http://swifttopia.com/Amx5"
    },
    {
        "id_disco": 4234,
        "id": 546,
        "nombre_disco": "2016 Triángulo de Fuerza (vol.1)",
        "link": "http://swifttopia.com/BjRp"
    },
    {
        "id_disco": 4235,
        "id": 547,
        "nombre_disco": "Tuatha Na Gael (1995)",
        "link": "http://swifttopia.com/81DC"
    },
    {
        "id_disco": 4236,
        "id": 547,
        "nombre_disco": "The Middle Kingdom (2000)",
        "link": "http://swifttopia.com/813m"
    },
    {
        "id_disco": 4237,
        "id": 547,
        "nombre_disco": "Folk-Lore (2002)",
        "link": "http://swifttopia.com/80qE"
    },
    {
        "id_disco": 4238,
        "id": 547,
        "nombre_disco": "Pagan (2004)",
        "link": "http://swifttopia.com/80sL"
    },
    {
        "id_disco": 4239,
        "id": 547,
        "nombre_disco": "The Morrigans Call (2006)",
        "link": "http://swifttopia.com/817L"
    },
    {
        "id_disco": 4240,
        "id": 547,
        "nombre_disco": "Cruachan - A Celtic Legacy (Best Of) (2007)",
        "link": "http://swifttopia.com/80mE"
    },
    {
        "id_disco": 4241,
        "id": 547,
        "nombre_disco": "Blood On The Black Robe (2011)",
        "link": "http://swifttopia.com/80oI"
    },
    {
        "id_disco": 4242,
        "id": 547,
        "nombre_disco": "Blood for the Blood God (2014)",
        "link": "http://swifttopia.com/839x"
    },
    {
        "id_disco": 4243,
        "id": 548,
        "nombre_disco": "El Cuarteto de Nos/Alberto Wolf  (1984)",
        "link": "http://swifttopia.com/7tM3"
    },
    {
        "id_disco": 4244,
        "id": 548,
        "nombre_disco": "Soy una arveja (1986)",
        "link": "http://swifttopia.com/7x4G"
    },
    {
        "id_disco": 4245,
        "id": 548,
        "nombre_disco": "Emilio García (1988)",
        "link": "http://swifttopia.com/7tia"
    },
    {
        "id_disco": 4246,
        "id": 548,
        "nombre_disco": "Canciones del corazón (1991)",
        "link": "http://swifttopia.com/7tWF"
    },
    {
        "id_disco": 4247,
        "id": 548,
        "nombre_disco": "Otra navidad en las trincheras (1994)",
        "link": "http://swifttopia.com/7tmw"
    },
    {
        "id_disco": 4248,
        "id": 548,
        "nombre_disco": "Barranca abajo (1995)",
        "link": "http://swifttopia.com/7tPb"
    },
    {
        "id_disco": 4249,
        "id": 548,
        "nombre_disco": "El tren bala (1996)",
        "link": "http://swifttopia.com/7tfR"
    },
    {
        "id_disco": 4250,
        "id": 548,
        "nombre_disco": "Revista ¡¡Ésta!! (1998)",
        "link": "http://swifttopia.com/7tpz"
    },
    {
        "id_disco": 4251,
        "id": 548,
        "nombre_disco": "Cortamambo (2000)",
        "link": "http://swifttopia.com/7tZ3"
    },
    {
        "id_disco": 4252,
        "id": 548,
        "nombre_disco": "El Cuarteto de Nos (recopilatorio 2004)",
        "link": "http://swifttopia.com/7ppm"
    },
    {
        "id_disco": 4253,
        "id": 548,
        "nombre_disco": "Raro (2006)",
        "link": "http://swifttopia.com/7pt7"
    },
    {
        "id_disco": 4254,
        "id": 548,
        "nombre_disco": "Bipolar (2009)",
        "link": "http://swifttopia.com/7q2v"
    },
    {
        "id_disco": 4255,
        "id": 548,
        "nombre_disco": "Porfiado (2012)",
        "link": "http://swifttopia.com/7qVV"
    },
    {
        "id_disco": 4256,
        "id": 548,
        "nombre_disco": "Habla tu espejo (2014)",
        "link": "http://swifttopia.com/7qXw"
    },
    {
        "id_disco": 4257,
        "id": 548,
        "nombre_disco": "Apocalipsis Zombi (2017)",
        "link": "http://swifttopia.com/7zPS"
    },
    {
        "id_disco": 4258,
        "id": 549,
        "nombre_disco": "Led Zeppelin (1969)",
        "link": "http://swifttopia.com/7lrt"
    },
    {
        "id_disco": 4259,
        "id": 549,
        "nombre_disco": "Led Zeppelin II (1969)",
        "link": "http://swifttopia.com/7luH"
    },
    {
        "id_disco": 4260,
        "id": 549,
        "nombre_disco": "Led Zeppelin III (1970)",
        "link": "http://swifttopia.com/7lyx"
    },
    {
        "id_disco": 4261,
        "id": 549,
        "nombre_disco": "Led Zeppelin IV (1971)",
        "link": "http://swifttopia.com/7m0L"
    },
    {
        "id_disco": 4262,
        "id": 549,
        "nombre_disco": "Houses of the Holy (1973)",
        "link": "http://swifttopia.com/7lbP"
    },
    {
        "id_disco": 4263,
        "id": 549,
        "nombre_disco": "Physical Graffiti (1975)",
        "link": "http://swifttopia.com/7m4i"
    },
    {
        "id_disco": 4264,
        "id": 549,
        "nombre_disco": "Presence (1976)",
        "link": "http://swifttopia.com/7mKi"
    },
    {
        "id_disco": 4265,
        "id": 549,
        "nombre_disco": "In Through the Out Door (1979)",
        "link": "http://swifttopia.com/7lno"
    },
    {
        "id_disco": 4266,
        "id": 549,
        "nombre_disco": "Coda (1982)",
        "link": "http://swifttopia.com/7lUm"
    },
    {
        "id_disco": 4267,
        "id": 550,
        "nombre_disco": "Colores Santos (1992)",
        "link": "http://swifttopia.com/7jlN"
    },
    {
        "id_disco": 4268,
        "id": 550,
        "nombre_disco": "Amor amarillo (1993).",
        "link": "http://swifttopia.com/7jQw"
    },
    {
        "id_disco": 4269,
        "id": 550,
        "nombre_disco": "Bocanada (1999).",
        "link": "http://swifttopia.com/7jTR"
    },
    {
        "id_disco": 4270,
        "id": 550,
        "nombre_disco": "+ Bien (2001)",
        "link": "http://swifttopia.com/7jrz"
    },
    {
        "id_disco": 4271,
        "id": 550,
        "nombre_disco": "11 Episodios Sinfónicos(2001)",
        "link": "http://swifttopia.com/7k2S"
    },
    {
        "id_disco": 4272,
        "id": 550,
        "nombre_disco": "Siempre es hoy (2002).",
        "link": "http://swifttopia.com/7jXP"
    },
    {
        "id_disco": 4273,
        "id": 550,
        "nombre_disco": "Canciones Elegidas 93-04 (2004)",
        "link": "http://swifttopia.com/7kAj"
    },
    {
        "id_disco": 4274,
        "id": 550,
        "nombre_disco": "Ahí vamos (2006).",
        "link": "http://swifttopia.com/7ja4"
    },
    {
        "id_disco": 4275,
        "id": 550,
        "nombre_disco": "Fuerza natural (2009).",
        "link": "http://swifttopia.com/7jcv"
    },
    {
        "id_disco": 4276,
        "id": 551,
        "nombre_disco": "1997 - Dale! ",
        "link": "http://swifttopia.com/7hLm"
    },
    {
        "id_disco": 4277,
        "id": 551,
        "nombre_disco": "1998 - A morir!!! (vivo)",
        "link": "http://swifttopia.com/7hP0"
    },
    {
        "id_disco": 4278,
        "id": 551,
        "nombre_disco": "2000 - Cuentos decapitados ",
        "link": "http://swifttopia.com/7hT2"
    },
    {
        "id_disco": 4279,
        "id": 551,
        "nombre_disco": "2002 - Cuadros dentro de cuadros",
        "link": "http://swifttopia.com/7hXQ"
    },
    {
        "id_disco": 4280,
        "id": 551,
        "nombre_disco": "2004 - El número imperfecto ",
        "link": "http://swifttopia.com/7hYh"
    },
    {
        "id_disco": 4281,
        "id": 551,
        "nombre_disco": "2007 - Laberintos entre aristas y dialectos ",
        "link": "http://swifttopia.com/7hev"
    },
    {
        "id_disco": 4282,
        "id": 551,
        "nombre_disco": "2009 - Simetría de Moebius ",
        "link": "http://swifttopia.com/7hjk"
    },
    {
        "id_disco": 4283,
        "id": 551,
        "nombre_disco": "2011 - El mezcal y la cobra ",
        "link": "http://swifttopia.com/7hkf"
    },
    {
        "id_disco": 4284,
        "id": 552,
        "nombre_disco": "Espejos (2010)",
        "link": "http://swifttopia.com/7gN5"
    },
    {
        "id_disco": 4285,
        "id": 552,
        "nombre_disco": "27 (2012)",
        "link": "http://swifttopia.com/7gQX"
    },
    {
        "id_disco": 4286,
        "id": 552,
        "nombre_disco": "Naranja persa (2016/18)",
        "link": "http://swifttopia.com/7gUT"
    },
    {
        "id_disco": 4287,
        "id": 552,
        "nombre_disco": "Qué placer verte otra vez (2015)",
        "link": "http://swifttopia.com/7gS6"
    },
    {
        "id_disco": 4288,
        "id": 553,
        "nombre_disco": "1991 - Esquivando charcos",
        "link": "http://swifttopia.com/1QtR"
    },
    {
        "id_disco": 4289,
        "id": 553,
        "nombre_disco": "1993 - A donde me lleva la vida",
        "link": "http://swifttopia.com/1QGS"
    },
    {
        "id_disco": 4290,
        "id": 553,
        "nombre_disco": "1995 - Bailando en una Pata",
        "link": "http://swifttopia.com/1QPM"
    },
    {
        "id_disco": 4291,
        "id": 553,
        "nombre_disco": "1996 - Despedazado por mil partes",
        "link": "http://swifttopia.com/1QlN"
    },
    {
        "id_disco": 4292,
        "id": 553,
        "nombre_disco": "1998 - La Renga",
        "link": "http://swifttopia.com/1Qyf"
    },
    {
        "id_disco": 4293,
        "id": 553,
        "nombre_disco": "2000 - La esquina del infinito",
        "link": "http://swifttopia.com/1Qwq"
    },
    {
        "id_disco": 4294,
        "id": 553,
        "nombre_disco": "2003 - Detonador de sueños",
        "link": "http://swifttopia.com/1QpA"
    },
    {
        "id_disco": 4295,
        "id": 553,
        "nombre_disco": "2006 - Truenotierra",
        "link": "http://swifttopia.com/1R1y"
    },
    {
        "id_disco": 4296,
        "id": 553,
        "nombre_disco": "2010 - Algún Rayo",
        "link": "http://swifttopia.com/1QKE"
    },
    {
        "id_disco": 4297,
        "id": 553,
        "nombre_disco": "2014 - Pesados Vestigios",
        "link": "http://swifttopia.com/1Rky"
    },
    {
        "id_disco": 4298,
        "id": 554,
        "nombre_disco": "1983: Kill Em All",
        "link": "http://swifttopia.com/1Lll"
    },
    {
        "id_disco": 4299,
        "id": 554,
        "nombre_disco": "1984: Ride the Lightning",
        "link": "http://swifttopia.com/1LqO"
    },
    {
        "id_disco": 4300,
        "id": 554,
        "nombre_disco": "1986: Master of Puppets",
        "link": "http://swifttopia.com/1MUh"
    },
    {
        "id_disco": 4301,
        "id": 554,
        "nombre_disco": "1988: ...And Justice for All",
        "link": "http://swifttopia.com/1LsP"
    },
    {
        "id_disco": 4302,
        "id": 554,
        "nombre_disco": "1991: Metallica (Black Album)",
        "link": "http://swifttopia.com/1MSw"
    },
    {
        "id_disco": 4303,
        "id": 554,
        "nombre_disco": "1996: Load",
        "link": "http://swifttopia.com/1MPH"
    },
    {
        "id_disco": 4304,
        "id": 554,
        "nombre_disco": "1997: ReLoad",
        "link": "http://swifttopia.com/1M9D"
    },
    {
        "id_disco": 4305,
        "id": 554,
        "nombre_disco": "2003: St. Anger",
        "link": "http://swifttopia.com/1MCI"
    },
    {
        "id_disco": 4306,
        "id": 554,
        "nombre_disco": "2008: Death Magnetic",
        "link": "http://swifttopia.com/1MZK"
    },
    {
        "id_disco": 4307,
        "id": 554,
        "nombre_disco": "2016: Hardwired... to Self-Destruct",
        "link": "http://swifttopia.com/1Mbo"
    },
    {
        "id_disco": 4308,
        "id": 555,
        "nombre_disco": "Foo Fighters (1995)",
        "link": "http://swifttopia.com/KvC"
    },
    {
        "id_disco": 4309,
        "id": 555,
        "nombre_disco": "The Colour and the Shape (1997)",
        "link": "http://swifttopia.com/Kyt"
    },
    {
        "id_disco": 4310,
        "id": 555,
        "nombre_disco": "There Is Nothing Left to Lose (1999)",
        "link": "http://swifttopia.com/KrX"
    },
    {
        "id_disco": 4311,
        "id": 555,
        "nombre_disco": "One by One (2002)",
        "link": "http://swifttopia.com/KuR"
    },
    {
        "id_disco": 4312,
        "id": 555,
        "nombre_disco": "In Your Honor (2005)",
        "link": "http://swifttopia.com/Lou"
    },
    {
        "id_disco": 4313,
        "id": 555,
        "nombre_disco": "Skin and Bones (2006)",
        "link": "http://swifttopia.com/L1V"
    },
    {
        "id_disco": 4314,
        "id": 555,
        "nombre_disco": "Echoes  Silence  Patience & Grace (2007)",
        "link": "http://swifttopia.com/Kx6"
    },
    {
        "id_disco": 4315,
        "id": 555,
        "nombre_disco": "Wasting Light (2011)",
        "link": "http://swifttopia.com/LRp"
    },
    {
        "id_disco": 4316,
        "id": 555,
        "nombre_disco": "Medium Rare (2011)",
        "link": "http://swifttopia.com/LV4"
    },
    {
        "id_disco": 4317,
        "id": 555,
        "nombre_disco": "Sonic Highways (2014)",
        "link": "http://swifttopia.com/1J5f"
    },
    {
        "id_disco": 4318,
        "id": 555,
        "nombre_disco": "Concrete and Gold (2017)",
        "link": "http://swifttopia.com/1Ji0"
    },
    {
        "id_disco": 4319,
        "id": 556,
        "nombre_disco": "The Red Hot Chili Peppers (1984)",
        "link": "http://swifttopia.com/K3a"
    },
    {
        "id_disco": 4320,
        "id": 556,
        "nombre_disco": "Freaky Styley (1985)",
        "link": "http://swifttopia.com/Jpy"
    },
    {
        "id_disco": 4321,
        "id": 556,
        "nombre_disco": "The Uplift Mofo Party Plan (1987)",
        "link": "http://swifttopia.com/K6N"
    },
    {
        "id_disco": 4322,
        "id": 556,
        "nombre_disco": "Mothers Milk (1989)",
        "link": "http://swifttopia.com/Jui"
    },
    {
        "id_disco": 4323,
        "id": 556,
        "nombre_disco": "Blood Sugar Sex Magik (1991)",
        "link": "http://swifttopia.com/Jlc"
    },
    {
        "id_disco": 4324,
        "id": 556,
        "nombre_disco": "One Hot Minute (1995)",
        "link": "http://swifttopia.com/Jym"
    },
    {
        "id_disco": 4325,
        "id": 556,
        "nombre_disco": "Californication (1999)",
        "link": "http://swifttopia.com/JoZ"
    },
    {
        "id_disco": 4326,
        "id": 556,
        "nombre_disco": "By the Way (2002)",
        "link": "http://swifttopia.com/Jmk"
    },
    {
        "id_disco": 4327,
        "id": 556,
        "nombre_disco": "Stadium Arcadium (2006)",
        "link": "http://swifttopia.com/K0c"
    },
    {
        "id_disco": 4328,
        "id": 556,
        "nombre_disco": "Im with You (2011)",
        "link": "http://swifttopia.com/JsL"
    },
    {
        "id_disco": 4329,
        "id": 556,
        "nombre_disco": "The Getaway (2016)",
        "link": "http://swifttopia.com/1Mv8"
    },
    {
        "id_disco": 4330,
        "id": 557,
        "nombre_disco": "Chactuchac (1992)",
        "link": "http://sprysphere.com/H03D"
    },
    {
        "id_disco": 4331,
        "id": 557,
        "nombre_disco": "Ay ay ay (1994)",
        "link": "http://sprysphere.com/H05W"
    },
    {
        "id_disco": 4332,
        "id": 557,
        "nombre_disco": "3er arco (1996)",
        "link": "http://sprysphere.com/H0Ar"
    },
    {
        "id_disco": 4333,
        "id": 557,
        "nombre_disco": "Azul (1998)",
        "link": "http://sprysphere.com/H0Ec"
    },
    {
        "id_disco": 4334,
        "id": 557,
        "nombre_disco": "Ritual (1999)",
        "link": "http://sprysphere.com/H0I8"
    },
    {
        "id_disco": 4335,
        "id": 557,
        "nombre_disco": "Verde paisaje del infierno (2000)",
        "link": "http://sprysphere.com/H0MT"
    },
    {
        "id_disco": 4336,
        "id": 557,
        "nombre_disco": "Huracanes en luna plateada (2002)",
        "link": "http://sprysphere.com/H0OL"
    },
    {
        "id_disco": 4337,
        "id": 557,
        "nombre_disco": "Máquina de sangre (2003)",
        "link": "http://sprysphere.com/H0Qu"
    },
    {
        "id_disco": 4338,
        "id": 557,
        "nombre_disco": "Civilización (2007)",
        "link": "http://sprysphere.com/H0U3"
    },
    {
        "id_disco": 4339,
        "id": 558,
        "nombre_disco": "Whatever People Say I Am  Thats What Im Not (2006)",
        "link": "http://sprysphere.com/Gwlt"
    },
    {
        "id_disco": 4340,
        "id": 558,
        "nombre_disco": "Favourite Worst Nightmare (2007)",
        "link": "http://sprysphere.com/GwXo"
    },
    {
        "id_disco": 4341,
        "id": 558,
        "nombre_disco": "Humbug (2009)",
        "link": "http://sprysphere.com/GwcP"
    },
    {
        "id_disco": 4342,
        "id": 558,
        "nombre_disco": "Suck It and See (2011)",
        "link": "http://sprysphere.com/Gweg"
    },
    {
        "id_disco": 4343,
        "id": 558,
        "nombre_disco": "AM (2013)",
        "link": "http://sprysphere.com/GwTt"
    },
    {
        "id_disco": 4344,
        "id": 559,
        "nombre_disco": "1996: Jardín frenético",
        "link": "http://sprysphere.com/GtIa"
    },
    {
        "id_disco": 4345,
        "id": 559,
        "nombre_disco": "1999: Árbol",
        "link": "http://sprysphere.com/GtKr"
    },
    {
        "id_disco": 4346,
        "id": 559,
        "nombre_disco": "2002: Chapusongs",
        "link": "http://sprysphere.com/GtOl"
    },
    {
        "id_disco": 4347,
        "id": 559,
        "nombre_disco": "2004: Guau!",
        "link": "http://sprysphere.com/GtSP"
    },
    {
        "id_disco": 4348,
        "id": 559,
        "nombre_disco": "2006: Miau!",
        "link": "http://sprysphere.com/Gtb2"
    },
    {
        "id_disco": 4349,
        "id": 559,
        "nombre_disco": "2007: Hormigas",
        "link": "http://sprysphere.com/GtfH"
    },
    {
        "id_disco": 4350,
        "id": 559,
        "nombre_disco": "2009: No me etiquetes",
        "link": "http://sprysphere.com/GtjN"
    },
    {
        "id_disco": 4351,
        "id": 560,
        "nombre_disco": "1984: Soda Stereo",
        "link": "http://sprysphere.com/AtiT"
    },
    {
        "id_disco": 4352,
        "id": 560,
        "nombre_disco": "1985: Nada personal",
        "link": "http://sprysphere.com/Au3g"
    },
    {
        "id_disco": 4353,
        "id": 560,
        "nombre_disco": "1986: Signos",
        "link": "http://sprysphere.com/AuKB"
    },
    {
        "id_disco": 4354,
        "id": 560,
        "nombre_disco": "1987: Ruido Blanco ",
        "link": "http://sprysphere.com/AvK0"
    },
    {
        "id_disco": 4355,
        "id": 560,
        "nombre_disco": "1988: Doble vida",
        "link": "http://sprysphere.com/Aum3"
    },
    {
        "id_disco": 4356,
        "id": 560,
        "nombre_disco": "1990: Canción animal",
        "link": "http://sprysphere.com/B2K9"
    },
    {
        "id_disco": 4357,
        "id": 560,
        "nombre_disco": "1992: Dynamo",
        "link": "http://sprysphere.com/B2Ti"
    },
    {
        "id_disco": 4358,
        "id": 560,
        "nombre_disco": "1993: Zona de Promesas",
        "link": "http://sprysphere.com/B2lF"
    },
    {
        "id_disco": 4359,
        "id": 560,
        "nombre_disco": "1995: Sueño Stereo",
        "link": "http://sprysphere.com/B2sz"
    },
    {
        "id_disco": 4360,
        "id": 560,
        "nombre_disco": "1996: Comfort y música para volar",
        "link": "http://sprysphere.com/B3Bc"
    },
    {
        "id_disco": 4361,
        "id": 560,
        "nombre_disco": "1997: El último concierto  Pt. A",
        "link": "http://sprysphere.com/B3O1"
    },
    {
        "id_disco": 4362,
        "id": 560,
        "nombre_disco": "1997: El último concierto  Pt. B",
        "link": "http://sprysphere.com/B3eq"
    },
    {
        "id_disco": 4363,
        "id": 560,
        "nombre_disco": "1989: Languis",
        "link": "http://sprysphere.com/Avty"
    },
    {
        "id_disco": 4364,
        "id": 561,
        "nombre_disco": "Gorillaz (2001)",
        "link": "http://sprysphere.com/DoAN"
    },
    {
        "id_disco": 4365,
        "id": 561,
        "nombre_disco": "G-Sides (2002)",
        "link": "http://sprysphere.com/DoEI"
    },
    {
        "id_disco": 4366,
        "id": 561,
        "nombre_disco": "Demon Days (2005)",
        "link": "http://sprysphere.com/DoJm"
    },
    {
        "id_disco": 4367,
        "id": 561,
        "nombre_disco": "D-Sides (2007)",
        "link": "http://sprysphere.com/DoN0"
    },
    {
        "id_disco": 4368,
        "id": 561,
        "nombre_disco": "Plastic Beach (2010)",
        "link": "http://sprysphere.com/DoQH"
    },
    {
        "id_disco": 4369,
        "id": 561,
        "nombre_disco": "The Fall (2010)",
        "link": "http://sprysphere.com/DpAm"
    },
    {
        "id_disco": 4370,
        "id": 561,
        "nombre_disco": "Humanz (2017)",
        "link": "http://sprysphere.com/DoqJ"
    },
    {
        "id_disco": 4371,
        "id": 561,
        "nombre_disco": "[2018]The Now Now",
        "link": "http://locinealy.com/2bNK"
    },
    {
        "id_disco": 4372,
        "id": 562,
        "nombre_disco": "1994: Mägo de Oz",
        "link": "http://sprysphere.com/DpXj"
    },
    {
        "id_disco": 4373,
        "id": 562,
        "nombre_disco": "1996: Jesús de Chamberí",
        "link": "http://sprysphere.com/Dpcp"
    },
    {
        "id_disco": 4374,
        "id": 562,
        "nombre_disco": "1998: La Leyenda de la Mancha",
        "link": "http://sprysphere.com/Dpey"
    },
    {
        "id_disco": 4375,
        "id": 562,
        "nombre_disco": "2000: Finisterra",
        "link": "http://sprysphere.com/DpiE"
    },
    {
        "id_disco": 4376,
        "id": 562,
        "nombre_disco": "2003: Gaia",
        "link": "http://sprysphere.com/DplF"
    },
    {
        "id_disco": 4377,
        "id": 562,
        "nombre_disco": "2004: Belfast",
        "link": "http://sprysphere.com/Dpno"
    },
    {
        "id_disco": 4378,
        "id": 562,
        "nombre_disco": "2005: Gaia II: La Voz Dormida",
        "link": "http://sprysphere.com/Dpsx"
    },
    {
        "id_disco": 4379,
        "id": 562,
        "nombre_disco": "2007: La Ciudad de los Árboles",
        "link": "http://sprysphere.com/Dq0m"
    },
    {
        "id_disco": 4380,
        "id": 562,
        "nombre_disco": "2010: Gaia III: Atlantia",
        "link": "http://sprysphere.com/Dq5t"
    },
    {
        "id_disco": 4381,
        "id": 562,
        "nombre_disco": "2010: Gaia: Epílogo",
        "link": "http://sprysphere.com/Dq9Y"
    },
    {
        "id_disco": 4382,
        "id": 562,
        "nombre_disco": "2012: Hechizos  Pócimas y Brujería",
        "link": "http://sprysphere.com/DqDu"
    },
    {
        "id_disco": 4383,
        "id": 562,
        "nombre_disco": "2014: Ilussia",
        "link": "http://sprysphere.com/DqO2"
    },
    {
        "id_disco": 4384,
        "id": 563,
        "nombre_disco": "Pasto (1992)",
        "link": "http://sprysphere.com/ARIB"
    },
    {
        "id_disco": 4385,
        "id": 563,
        "nombre_disco": "Trance Zomba (1994)",
        "link": "http://sprysphere.com/ATlD"
    },
    {
        "id_disco": 4386,
        "id": 563,
        "nombre_disco": "Dopádromo (1996)",
        "link": "http://sprysphere.com/AV6B"
    },
    {
        "id_disco": 4387,
        "id": 563,
        "nombre_disco": "Babasónica (1997)",
        "link": "http://sprysphere.com/AVbR"
    },
    {
        "id_disco": 4388,
        "id": 563,
        "nombre_disco": "Vórtice Marxista (1998)",
        "link": "http://sprysphere.com/Ak7N"
    },
    {
        "id_disco": 4389,
        "id": 563,
        "nombre_disco": "Miami (1999)",
        "link": "http://sprysphere.com/AVwt"
    },
    {
        "id_disco": 4390,
        "id": 563,
        "nombre_disco": "Groncho (2000)",
        "link": "http://sprysphere.com/Aikr"
    },
    {
        "id_disco": 4391,
        "id": 563,
        "nombre_disco": "Vedette (2000)",
        "link": "http://sprysphere.com/Ajd9"
    },
    {
        "id_disco": 4392,
        "id": 563,
        "nombre_disco": "Jessico (2001)",
        "link": "http://sprysphere.com/AcL8"
    },
    {
        "id_disco": 4393,
        "id": 563,
        "nombre_disco": "Infame (2003)",
        "link": "http://sprysphere.com/AcUb"
    },
    {
        "id_disco": 4394,
        "id": 563,
        "nombre_disco": "Anoche (2005)",
        "link": "http://sprysphere.com/AgzI"
    },
    {
        "id_disco": 4395,
        "id": 563,
        "nombre_disco": "Mucho (2008)",
        "link": "http://sprysphere.com/AhYN"
    },
    {
        "id_disco": 4396,
        "id": 563,
        "nombre_disco": "Mucho+ (2009)",
        "link": "http://sprysphere.com/Gr6i"
    },
    {
        "id_disco": 4397,
        "id": 563,
        "nombre_disco": "A propósito (2011)",
        "link": "http://sprysphere.com/Ai1v"
    },
    {
        "id_disco": 4398,
        "id": 563,
        "nombre_disco": "Romantisísmico (2013)",
        "link": "http://sprysphere.com/AiMv"
    },
    {
        "id_disco": 4399,
        "id": 563,
        "nombre_disco": "Impuesto de fe (2016)",
        "link": "http://sprysphere.com/Apk"
    }
];
*/