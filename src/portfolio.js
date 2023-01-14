/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gus",
  title: "Olá, eu sou Gus",
  subTitle: emoji(
    "um cara aprendendo coisas sobre programação"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gustafer",
  discord: "https://discord.gg/68RfW5JeNN",
  steam: "https://steamcommunity.com/profiles/76561198924836134/",
  gmail: "gustavobreasy@gmail.com",
  youtube: "https://music.youtube.com/channel/UCazPZA5I0goXo85P_LAJAkA",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O QUE EU FAÇO?",
  subTitle: "Um estudante de programação, aprendendo estas linguagens",
  skills: [
    emoji(
      "⚡ Navego na internet buscando projetos open source e construo com parceria"
    ),
    emoji("⚡ Construo projetos open source "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CNA Grajáu, Online",
      logo: "./assets/images/cnalogo.png",
      subHeader: "Avançado, penúltimo módulo",
      duration: "Fevereiro 2016 - Novembro 2022...",
      desc: "Participou da prova de st.Patrick",
      descBullets: [
        "Aprender uma outra lingua é libertar-se de padrões."
      ]
    },
    {
      schoolName: "Escola E.M.E.F. Padre José Pegoraro",
      logo: "./assets/images/stanfordLogo.png",
      subHeader: "Ensino fundamental, 9° Ano",
      duration: "Fevereiro 2013 - Novembro 2022...",
      desc: "Participei de um teatro em 2016, programa de robótica em 2017",
      descBullets: ["Melhores notas da sala."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: "./assets/images/facebookLogo.png",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: "./assets/images/quoraLogo.png",
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: "./assets/images/airbnbLogo.png",
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "Alguns projetos open-source que estou trabalhando agora",
  projects: [
    {
      image: "./assets/images/harryLogo.png",
      projectName: "Harry App",
      projectDesc: "Quer saber mais sobre os personagens de Harry Potter? Em parceria.",
      footerLink : [
        {
          name: "Veja o github",
          url: "https://github.com/viniciuscluna/react-harry-app"
        },
        {
          name: "Site",
          url: "https://react-harry-app.vercel.app",
        }
      ]
    },
    {
      image: "./assets/images/manOnTable.svg",
      projectName: "Portfolio Escolar",
      projectDesc: "Este projeto que você está vendo agora, feito tambêm em parceria. ",
      footerLink: [
        {
          name: "Veja o github",
          url: "https://github.com/gustafer/portfolio_escolar",
        },
        {
          name: "Site",
          url: "https://ustav.vercel.app",
        }
      ]
    },
    
    
      
    //  you can add extra buttons here.
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const gamesSection = {
  title: emoji("Jogos"),
  subtitle:
    "Eu tambem gosto de jogar, estes são alguns do que mais jogo :",

  achievementsCards: [
    {
      title: "League of Legends",
      subtitle:
        "Venho jogando desde 2016, Hardstuck gold, main Jhin",
      image: "./assets/images/league.png",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "OP.GG",
          url: "https://www.op.gg/summoners/br/LeftJhinDead"
        },
        {
          name: "Riot Games",
          url: "https://www.leagueoflegends.com/pt-br/"
        }
      ]
    },

    {
      title: "Valorant",
      subtitle:
        "Outro da riot, sou um jogador casual, prata e main Chamber",
      image: "./assets/images/valorant.png",
      imageAlt: "Google Code-In Logo",
      footerLink : [
        {
          name: "Tracker.gg",
          url: "https://tracker.gg/valorant/profile/riot/SirGustaf%23BR1/overview"
        },
        {
          name: "Riot Games",
          url: "https://playvalorant.com/pt-br/"
        }
      ]
    },
    {
      title: "Terraria",
      subtitle:
        "200 Horas de gameplay, esse jogo é uma maravilha.",
      image: "./assets/images/terraria.png",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Steam",
          url: "https://store.steampowered.com/app/105600/Terraria/"
        }
      ]
    },

    {
      title: "Brawlhalla",
      subtitle: "Jogo muito bom, basicamente um smashbros só que jogável",
      image: "./assets/images/brawlhalla.png",
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Steam",
          url: "https://store.steampowered.com/app/291550/Brawlhalla/"
        }
      ]
    },
    
    {
      title: "Pokemon GO",
      subtitle: "Jogo mobile da niantic, as atualizações estão boas.",
      image: "./assets/images/pokemon.png",
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=pt_BR&gl=US"
        }
      ]
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displaymediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contatos ☎️"),
  subtitle:
    "Quer discutir alguma coisa ou falar comigo?",
  discord: "ustav#0397",
  email_address: "gustavobreasy@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  gamesSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
