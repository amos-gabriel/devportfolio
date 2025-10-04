/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amos Gabriel",
  title: "Salut, ici Amos",
  subTitle: emoji(
    "Développeur logiciel Full Stack passionné 🚀 ayant une expérience de la construction d'applications web et mobiles avec JavaScript / Reactjs / Nodejs / React Native et quelques autres bibliothèques et frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18NL1Z0MK2pBn0SabLoWcaWJgcBX64Jub/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amos-gabriel",
  linkedin: "https://www.linkedin.com/in/amos-gabrieldev/",
  gmail: "kksivitra@gmail.com",
  gitlab: "https://gitlab.com/killian-debug",
  facebook: "https://www.facebook.com/amosgabriel.dev",
  instagram: "https://www.instagram.com/amosgabriel.dev/",
// medium: "https://medium.com/@saadpasta",
// stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
// Instagram, Twitter and Kaggle are also supported in the links!
// To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DEVELOPPEUR EN QUETE D'EXCELLENCE POUR DES EXPERIENCES WEB ET MOBILE EXTRAORDINAIRES",
  skills: [
    emoji(
      "⚡ Création d'expériences utilisateur réactives et engageantes sur toutes vos plateformes digitales."
    ),
    emoji("⚡ Création de services backend (serveurs, algorithmes)"),
    emoji(
      "⚡ Interconnexion avec des services tiers, IA, WhatsApp, N8N, etc..."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
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
      schoolName: "Ecole Supérieure Polytechnique - UCAD, Dakar",
      logo: require("./assets/images/esplogo.png"),
      subHeader: "Master en Système Logiciel et Système d'Information",
      duration: "Septembre 2024 - Août 2026",
      desc: "Deux années d'études en master. Autodidacte en graphisme et 3D",
      descBullets: [
        "Master professionnel alliant programmation, réseau et intelligence artificielle",
        "Production de plusieurs projets professionnels et éducatifs"
      ]
    },
    {
      schoolName: "UATM Gasa formation - Bénin",
      logo: require("./assets/images/uatmlogo.png"),
      subHeader: "Licence en Système d'Information et Logiciel",
      duration: "Septembre 2019 - April 2023",
      desc: "A suivi des cours sur le génie logiciel, la sécurité web, les systèmes d'exploitation, ...",
      descBullets: [
        "Acquisition de connaissances de base",
        "Déjà plusieurs projets clients réalisés dès la licence"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programmation",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Admin Système",
      company: "SSI-AO",
      companylogo: require("./assets/images/ssiaologo.png"),
      date: "Janvier 2023 – À auourd'hui",
      desc: "J'assure la maintenance et l'amélioration du Système d'Information utilisé par l'ONG SSI-AO depuis maintenant 3 ans. www.ssiao.org.",
      descBullets: [
        "Développement de logiciel et de site web",
        "Sécurité, protection et mise à jour des serveurs et ordinateurs"
      ]
    },
    {
      role: "Développeur Backend",
      company: "BFC Capital",
      companylogo: require("./assets/images/bfcLogo.png"),
      date: "Mars 2025 – May 2025",
      desc: "Développement d'un serveur de reporting et d'affiliation derrière une application (PayCash).",
      descBullets: [
        "Application bancaire",
        "Sécurité et maintenabilité"
      ]
    },
    {
      role: "Lead - Développeur Full-Stack",
      company: "WescanGift",
      companylogo: require("./assets/images/wsgLogo.png"),
      date: " - ",
      desc: "Les QR codes de WSG redirigent vers des expériences personnalisées (promos, jeux, landing pages), avec un suivi en temps réel des performances. La plateforme est conçue pour être flexible, intégrable et orientée conversion."
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
  title: "Projets marquants",
  subtitle: "QUELQUES STARTUPS ET ENTREPRISES QUE J'AI AIDÉES À CRÉER LEUR TECHNOLOGIE",
  projects: [
    {
      image: require("./assets/images/wsgLogo.png"),
      projectName: "WescanGift",
      projectDesc: "Nos QR codes intelligents connectent les entreprises avec les clients à travers des expériences engageantes et gratifiantes.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://app.wescan.gift/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lclogo.png"),
      projectName: "LauraCosmétique",
      projectDesc: "Laura Cosmétique est l’un des géants de l’esthétique au Bénin, dirigé par des mains de velours. Mme Laura CEO de LC EMPIRE a fait de la beauté son objectif N°1 pour elle mais aussi pour toute les femmes et les hommes.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://lauracosmetique.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/maejtlogo.png"),
      projectName: "MAEJT",
      projectDesc: "Nous sommes le seul acteur gouverné par des enfants et des jeunes travaillant pour des enfants et des jeunes, et nous nous attaquons à la confluence de la pauvreté, de l’exploitation et des abus sous toutes leurs formes.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://maejt.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kelvinlogo.png"),
      projectName: "Le blog de Mr Pastèque",
      projectDesc: "Je crée des produits digitaux et industriels pour des particuliers et des entreprises en Afrique, puis je m’assure qu’ils rencontrent leur marché et soient rentables",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://kelvinagentk.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wsgLogo.png"),
      projectName: "WescanGift - Url To QrCode",
      projectDesc: "Extension Microsoft Edge et Chrome pour transformer les urls de votre navigateur en qrcode pour continuer la navigation sur votre mobile.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://microsoftedge.microsoft.com/addons/detail/wescangift-url-to-qr-co/gdancjkpkjcmgecekbeooffjgabmpgaf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et certifications 🏆 "),
  subtitle:
    "Réalisations, certifications, lettres de récompenses et quelques trucs sympas que j'ai faits !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec l'amour de voir les projets réalisés et perdurés sur le long term, j'analyse, critique, écris et partage aux autres ce que j'ai appris.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Gagnez un t-shirt Google Assistant et 200 $ de crédits Google Cloud",
      description:
        "Êtes-vous prêt à gagner $200 et un t-shirt Google Assistant en créant une action Google Assistant en moins de 30 minutes ?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "React est le meilleur ?",
      description:
        "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs et d'entreprises individuels."
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

// Resume Section
const resumeSection = {
  title: "Curriculum vitae",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+229 68403520",
  email_address: "kksivitra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "amosgabrieldev", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
