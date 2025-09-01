const disneyPlusData = {
  marvel: [
    {
      type: "film",
      nom: "Iron Man",
      annee: 2008,
      image: "",
      resume: "Tony Stark, un milliardaire inventeur, construit une armure high-tech pour devenir Iron Man.",
      categorie: "héros"
    },
    {
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
      type: "film",
      nom: "Le Roi Lion",
      annee: 1994,
      image: "",
      resume: "Simba, un jeune lion destiné à régner, doit surmonter la perte de son père et retrouver sa place de roi.",
      categorie: "aventure"
    },
    {
      type: "film",
      nom: "Vaiana",
      annee: 2016,
      image: "",
      resume: "Vaiana, une jeune navigatrice intrépide, part en mer pour sauver son peuple avec l’aide du demi-dieu Maui.",
      categorie: "famille"
    },
    {
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
      type: "film",
      nom: "Toy Story",
      annee: 1995,
      image: "",
      resume: "Woody, un cow-boy en peluche, voit son statut de jouet préféré menacé par l’arrivée de Buzz l’Éclair.",
      categorie: "comédie"
    },
    {
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
      type: "film",
      nom: "Star Wars: Un nouvel espoir",
      annee: 1977,
      image: "",
      resume: "Luke Skywalker rejoint la Rébellion pour combattre l’Empire galactique et sauver la princesse Leia.",
      categorie: "science-fiction"
    },
    {
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

  nationalGeographic: [
    {
      type: "film",
      nom: "Free Solo",
      annee: 2018,
      image: "",
      resume: "L’alpiniste Alex Honnold tente l’ascension d’El Capitan sans corde, un exploit unique au monde.",
      categorie: "documentaire"
    },
    {
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
      type: "film",
      nom: "Deadpool",
      annee: 2016,
      image: "",
      resume: "Un ancien militaire subit une expérience qui lui donne des pouvoirs de régénération et devient Deadpool.",
      categorie: "comédie"
    },
    {
      type: "serie",
      nom: "",
      annee: 2005,
      image: "images/greys_anatomy.jpg",
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
