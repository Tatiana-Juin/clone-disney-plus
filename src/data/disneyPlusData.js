const disneyPlusData = {
  marvel: [
    {
      id:1,
      type: "film",
      nom: "Iron Man",
      annee: 2008,
      image: "",
      resume: "Tony Stark, un milliardaire inventeur, construit une armure high-tech pour devenir Iron Man.",
      categorie: "héros"
    },
    {
      id:2,
      type: "serie",
      nom: "WandaVision",
      annee: 2021,
      image: "",
      categorie: "fantastique",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "Filmé devant public",
              resume: "Wanda et Vision essaient de s’intégrer dans leur nouvelle ville."
            },
            {
              numero: 2,
              titre: "Ne changez pas de chaîne",
              resume: "Un spectacle de magie tourne mal."
            }
          ]
        }
      ]
    }
  ],

  disney: [
    {
      id:3,
      type: "film",
      nom: "Le Roi Lion",
      annee: 1994,
      image: "",
      resume: "Simba, un jeune lion destiné à régner, doit surmonter la perte de son père et retrouver sa place de roi.",
      categorie: "aventure"
    },
    {
      id:4,
      type: "film",
      nom: "Vaiana",
      annee: 2016,
      image: "",
      resume: "Vaiana, une jeune navigatrice intrépide, part en mer pour sauver son peuple avec l’aide du demi-dieu Maui.",
      categorie: "famille"
    },
    {
      id:5,
      type: "serie",
      nom: "Waverly place les nouveau sorciers",
      annee: 2024,
      image: "",
      categorie: "fantastique",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "Il ne faut pas se fier au apparence",
              resume: "Justin accepte d'enseigner a une jeune sorcière"
            },
            {
              numero: 2,
              titre: "Vivre parmis les mortels ",
              resume: "Bilie jette un sort à Roman et Milo"
            }
          ]
        }
      ]
    }

  ],

  pixar: [
    {
      id:6,
      type: "film",
      nom: "Toy Story",
      annee: 1995,
      image: "",
      resume: "Woody, un cow-boy en peluche, voit son statut de jouet préféré menacé par l’arrivée de Buzz l’Éclair.",
      categorie: "comédie"
    },
    {
      id:7,
      type: "serie",
      nom: "Toy Story: The Series",
      annee: 2020,
      image: "",
      categorie: "animation",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "Bienvenue chez Andy",
              resume: "Woody et Buzz apprennent à vivre ensemble."
            },
            {
              numero: 2,
              titre: "Le nouveau jouet",
              resume: "Un jouet mystérieux arrive dans la chambre."
            }
          ]
        }
      ]
    }
  ],

  starWars: [
    {
      id:8,
      type: "film",
      nom: "Star Wars: Un nouvel espoir",
      annee: 1977,
      image: "",
      resume: "Luke Skywalker rejoint la Rébellion pour combattre l’Empire galactique et sauver la princesse Leia.",
      categorie: "science-fiction"
    },
    {
      id:9,
      type: "serie",
      nom: "The Mandalorian",
      annee: 2019,
      image: "",
      categorie: "aventure",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "Chapter 1: The Mandalorian",
              resume: "Un chasseur de primes accepte une mission inhabituelle."
            }
          ]
        }
      ]
    }
  ],

  nationalGeographique: [
    {
      id:10,
      type: "film",
      nom: "Free Solo",
      annee: 2018,
      image: "",
      resume: "L’alpiniste Alex Honnold tente l’ascension d’El Capitan sans corde, un exploit unique au monde.",
      categorie: "documentaire"
    },
    {
      id:11,
      type: "serie",
      nom: "One Strange Rock",
      annee: 2018,
      image: "",
      categorie: "science",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "La planète vivante",
              resume: "Will Smith explore les forces qui font de la Terre un monde unique."
            }
          ]
        }
      ]
    }
  ],

  star: [
    {
      id:12,
      type: "film",
      nom: "Deadpool",
      annee: 2016,
      image: "",
      resume: "Un ancien militaire subit une expérience qui lui donne des pouvoirs de régénération et devient Deadpool.",
      categorie: "comédie"
    },
    {
      id:13,
      type: "serie",
      nom: "Grey anatomy",
      annee: 2005,
      image: "",
      categorie: "drame",
      saisons: [
        {
          numero: 1,
          episodes: [
            {
              numero: 1,
              titre: "Un nouveau départ",
              resume: "Meredith Grey commence son internat en chirurgie."
            }
          ]
        }
      ]
    }
  ]
};

export default disneyPlusData;
