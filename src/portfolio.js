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
  title: "Hi, I'm Asad",
  subTitle: emoji(
    "An ML Infrastructure & Inference Engineer 🚀 passionate about building high-performance distributed systems for AI. Open source contributor to NVIDIA Dynamo, with experience across the full stack from GPU-accelerated serving to cloud-native deployments."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Oa64WWa_t5SzLMts3AHyJfgQINjCX2xt/edit?usp=sharing&ouid=111821426187858764882&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AsadShahid04",
  linkedin: "https://www.linkedin.com/in/asadshahid04/",
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
  title: "What I Do",
  subTitle:
    "ML INFRASTRUCTURE & INFERENCE ENGINEER WHO LOVES BUILDING HIGH-PERFORMANCE DISTRIBUTED SYSTEMS",
  skills: [
    emoji(
      "⚡ Build and optimize distributed inference serving frameworks for large-scale AI workloads"
    ),
    emoji(
      "⚡ Design cloud-native infrastructure with Kubernetes, Docker, and GPU-accelerated pipelines"
    ),
    emoji(
      "⚡ Contribute to open source AI/ML projects including NVIDIA Dynamo"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
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
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/ucBerkeleyLogo.png"),
      subHeader: "B.A. in Statistics & Data Science",
      duration: "August 2024 - May 2026",
      desc: "Focusing on statistical learning, AI/ML systems, and inference engineering. Active open source contributor to NVIDIA Dynamo.",
      descBullets: []
    },
    {
      schoolName: "Las Positas College",
      logo: require("./assets/images/LasPositasCollege.jpeg"),
      subHeader: "Transfer Program — Computer Science",
      duration: "June 2022 - May 2024",
      desc: "Completed IGETC requirements and core CS coursework before transferring to UC Berkeley.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML Infrastructure & Inference",
      progressPercentage: "90%"
    },
    {
      Stack: "Systems Programming (Rust/C++/Go)",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps (K8s/Docker/CI-CD)",
      progressPercentage: "80%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "SanDisk (Western Digital)",
      companylogo: require("./assets/images/sandiskLogo.png"),
      date: "2025 – Present",
      desc: "Software engineering internship working on storage infrastructure and systems-level development.",
      descBullets: []
    },
    {
      role: "Software Engineering Intern",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hpeLogo.png"),
      date: "2023 – 2024",
      descBullets: [
        "Built a React-based networking dashboard (Sextant) for field technicians consolidating essential networking tools",
        "Developed automation scripts and internal tooling for infrastructure management",
        "Worked on GitHub Classroom migration tooling for enterprise education workflows"
      ]
    },
    {
      role: "Bioinformatics / Data Science Intern",
      company: "Genentech",
      companylogo: require("./assets/images/genentechLogo.png"),
      date: "2023",
      descBullets: [
        "Applied data science and statistical methods to biological data analysis",
        "Worked with Python-based ML pipelines for research applications"
      ]
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
  title: "Notable Projects",
  subtitle:
    "OPEN SOURCE CONTRIBUTIONS AND SIGNIFICANT PROJECTS",
  projects: [
    {
      image: require("./assets/images/dynamoLogo.png"),
      projectName: "NVIDIA Dynamo",
      projectDesc:
        "Active contributor to Dynamo, NVIDIA's open-source distributed inference serving framework for scaling generative AI models. Contributed bug fixes and improvements to tool-use parsing and inference pipelines.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/ai-dynamo/dynamo"
        },
        {
          name: "My Pull Requests",
          url: "https://github.com/ai-dynamo/dynamo/pulls?q=author%3AAsadShahid04"
        }
      ]
    },
    {
      image: require("./assets/images/chatbotLogo.png"),
      projectName: "LLM ChatBot for Students",
      projectDesc:
        "An AI-powered LLM-based chatbot designed for students to use in academic environments. Built with JavaScript and modern AI APIs.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AsadShahid04/LLM-ChatBot-for-Students"
        }
      ]
    },
    {
      image: require("./assets/images/notionLogo.png"),
      projectName: "Notion Clone",
      projectDesc:
        "Full-stack Notion clone built with Next.js 13, DALL·E, DrizzleORM, OpenAI, and Vercel. Features real-time editing and AI-powered content generation.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AsadShahid04/NotionClone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Open Source 🏆"),
  subtitle:
    "Open source contributions, notable projects, and recognition",

  achievementsCards: [
    {
      title: "NVIDIA Dynamo Contributor",
      subtitle:
        "Active open source contributor to NVIDIA's Dynamo distributed inference serving framework. Fixing bugs and improving tool-use parsing in LLM serving pipelines.",
      image: require("./assets/images/dynamoLogo.png"),
      footerLink: [
        {
          name: "View Contributions",
          url: "https://github.com/ai-dynamo/dynamo/pulls?q=author%3AAsadShahid04"
        }
      ]
    },
    {
      title: "Scholar Athlete of the Year — 2022",
      subtitle:
        "Awarded the Western Athletic Conference Scholar Athlete of the Year for sportsmanship within the Varsity Boys Tennis team.",
      image: require("./assets/images/ScholarAthleteAward.jpeg"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Writing about AI inference engineering, distributed systems, and my contributions to open source.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
  // TODO: Enable once blog posts about Dynamo contributions are written
};

// Talks / Testimonials Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji("CONFERENCE TALKS AND PRESENTATIONS"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss AI infrastructure, open source, or anything else? My inbox is open.",
  //number: "(408)-430-2623",
  email_address: "asadshahid623@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "a1sadshahid", //Replace "twitter" with your twitter username without @
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
