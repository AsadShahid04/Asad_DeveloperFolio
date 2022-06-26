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
  username: "Asad Shahid",
  title: "Hi all, I'm Asad",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications using some cool modern libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1uMdXmWNrxRxlO-IVDDFGt_ymf08lACgKd58uDJ81Fy4/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsadShahid04",
  linkedin: "https://www.linkedin.com/in/asad-shahid-9553a91b0/",
  gmail: "asadshahid623@gmail.com",
  twitter: "https://twitter.com/a1sadshahid",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/a1sad.shahid/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I know...",
  subTitle:
    "CRAZY FRONT END DEVELOPER & CODER LOOKING TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fab fa-confluence"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Las Positas College",
      logo: require("./assets/images/LasPositasCollege.jpeg"),
      subHeader: "Major: Computer Science",
      duration: "June 2022 - May 2024",
      desc: "Currently attending Las Positas to finish IGETC general education requirements before transfering to UC Davis through the TAG program in the Fall of 2024 for a BS in Computer Science & Engineering.",
      descBullets: ["Member of Muslim Student Association"]
    },
    {
      schoolName: "San Joaquin Delta College",
      logo: require("./assets/images/SanJoaquinDeltaCollege.png"),
      subHeader: "Dual-Enrolled Student",
      duration: "June 2020 - December 2022",
      desc: "Attended San Joquin Delta College while dual-enrolled in MHHS as a highschooler to finish general education requirements.",
      descBullets: [
        "Completed/in the process of completing the following courses: HIST17A, PHYSC1A, SOCIO1A, CS11, MATH 1, MATH 2, ENG1A, ENG 1B"
      ]
    },
    /*
    {
      schoolName: "University of California Davis",
      logo: require("./assets/images/UCDavisLogo.png"),
      subHeader: "Major: Computer Science & Engineering",
      duration: "August 2024 - May 2026",
      desc: "Will be tranferring to UC Davis via the Transfer admission guarantee (TAG) program from Las Positas College in 2024"
      //descBullets: [""]
    }
    */
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Website Developer",
      company: "Mountain House Muslim Association",
      companylogo: require("./assets/images/MHMALogo.png"),
      date: "October 2021 – Present",
      desc: "A collaborative coding project developed by future engineers in high school/college. The MHMA MCE is a website for the local Mountain House community to organize local community events, classes, praying schedules, etc. Created using:",
      descBullets: ["React.js", "MongoDB", "SCSS", "HTML"]
    },
    {
      role: "Marketing Research Intern",
      company: "Grotabyte",
      companylogo: require("./assets/images/GrotabyteLogo.jpeg"),
      date: "March 2021 – Nov 2021",
      descBullets: [
        "Conducted research for technical use cases of our archive storage software",
        "Looked into country legislation regarding consumer privacy",
        "Highlighted comparative differences between competitors’ websites and features to help in the future development of the Grotabyte website."
      ]
    },
    {
      role: "Marketing Director",
      company: "Provision Hacks",
      companylogo: require("./assets/images/ProvisionHacksLogo.png"),
      date: "Dec 2020 – Jul 2021",
      desc: "One of the founding members of Provision Hacks helping build and manage social media pages, website development, contacting and gathering sponsors, and creating online digital content to post on socials."
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
//TO-DO: Work on adding my own bigProjects!
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Scholar Athlete of the Year - 2022",
      subtitle:
        "Was awarded the Western Athlete Conference Scholar Athlete of the Year for my sportsmanship within the Varsity Boys Tennis team at MHHS",
      image: require("/Users/asadshahid/CodingFiles/Asad_DeveloperFolio/src/assets/images/ScholarAthleteAward.jpeg"),
      footerLink: []
    },
    {
      title: "Introduction to SQL",
      subtitle:
        "Successfully completed the Introduction to SQL course on CodeHS. I learned concepts such as basic querying, filtering queries, advanced filters, ordering results, joining tables, and also various SQL functions. ",
      image: require("./assets/images/SQL_ICON_CODEHS.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://codehs.com/certificate/PphVy9"
        }
      ]
    },

    {
      title: "Golden State Seal of Merit Award Winner",
      subtitle:
        "The Golden State Seal Merit Diploma is given to seniors who have demonstrated mastery of the high school curriculum in at least six subject areas four of which are English-language arts, mathematics, science, and U.S. history, with the remaining two subject matter areas selected by the student. The seal is awarded jointly by the State Board of Education and the State Superintendent of Public Instruction.",
      image: require("./assets/images/GoldenStateSealofMerit.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

//TO-DO: Work on Testimonials Section
const talkSection = {
  title: "TESTIMONIALS",
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "(408)-430-2623",
  email_address: "asadshahid623@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "a1sadshahid", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

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
  twitterDetails
};
