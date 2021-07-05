import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "A.L.Gpikrishnan",
  title: "Hi all, I'm Gopi",
  subTitle: emoji(
    "13 years old boy with the intrest to become a Full Stack Web Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gopikrishnan20",
  gmail: "algopikrishnan20official@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

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
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "AWS",
      fontAwesomeClassname: "fab	fa-aws"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-server"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false,
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "",
      duration: "",
      desc: ".",
      descBullets: [
        ""
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "",
      duration: "",
      desc:
        "",
      descBullets: [""]
    }
  ]
};


const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / Design",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "third-party services",
      progressPercentage: "85%"
    },
  ],
  displayCodersrank: true
};



const workExperiences = {
  display: false,
  experience: [
    {
      role: "",
      company: "",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "",
      desc:
        "",
      descBullets: [
        "",
        "",
        "",
        ""
      ]
    },
    {
      role: "",
      company: "",
      companylogo: require("./assets/images/googleAssistantLogo.webp"),
      date: "",
      desc:
        ""
    },
    {
      role: "",
      company: "",
      companylogo: require("./assets/images/jsFramework.svg"),
      date: "",
      desc:
        ""
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "",
  showGithubProfile: "",
  display: false
};


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/NetflixClone.PNG"),
      projectName: "netflix-clone",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-proj.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/disny+clone.PNG"),
      projectName: "disnyplus-clone",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://disney-plus-hotstar-clone.netlify.app"
        },
      ]
    },
    {
      image: require("./assets/images/G-drive-clone.PNG"),
      projectName: "Google-drive-clone",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://google-drive-clone.netlify.app"
        },
      ]
    }, {
      image: require("./assets/images/chat-app.PNG"),
      projectName: "chatting-app",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chat-app-gopi.netlify.app"
        },
      ]
    }
  ],
  projects_1: [
    {
      image: require("./assets/images/news.PNG"),
      projectName: "News-app",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://enews-app.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/amazon-final.PNG"),
      projectName: "amazon-clone",
      projectDesc: "",
      footerLink: [
        {
          name: "this site is noy yet deployed",
          url: ""
        },
      ]
    },
    {
      image: require("./assets/images/game-1.PNG"),
      projectName: "knight-King-game",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://simmer.io/@Gopikrishnan20/rpg-game"
        },
      ]
    }, {
      image: require("./assets/images/gmae-2.PNG"),
      projectName: "hunter-game",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://simmer.io/@Gopikrishnan20/unity-fps-game"
        },
      ]
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "",
          url:
            ""
        },
        {
          name: "",
          url:
            ""
        },
        {
          name: "",
          url:
            ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "",
          url:
            ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};



const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false 
};


const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
    ""
  ],
  display: false 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7305025313",
  email_address: "algopikrishnan20official@gmail.com"
};

const twitterDetails = {
  userName: "", 
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
