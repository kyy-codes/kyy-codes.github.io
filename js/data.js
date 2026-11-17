const SITE = {
  name: "Salsabila Azky Quri'al Qur'ani",
  cv: "./cv/CV_Salsabila_Azky.pdf",        
  photoLight: "images/other/porto.png",   
  photoDark: "images/other/porto2.png",     
  email: "salsabilaazky2422@gmail.com",
  linkedin: "https://linkedin.com/in/salsabila-azky-quri-al-qur-ani-ba73b930a",

  role: " Informatics Engineering Graduate | Software Development | System Analysis | AI & Machine Learning",
  intro: "I enjoy understanding problems, translating ideas into clear requirements, and building practical digital solutions.",

  about: [
    "I’m an Informatics Engineering graduate from the University of Lampung, Indonesia, with a strong interest in User Experience Design, System Analysis, and Software Development.",
    "I enjoy understanding user needs, analyzing problems, and translating requirements into practical digital solutions. Through my internship, academic projects, and experience as a Computer Laboratory Assistant,I have gained experience in requirements gathering, system analysis, wireframing, web development, and software testing.",
    "I am particularly interested in creating digital products that are functional, accessible, and aligned with users needs. I am eager to continue developing my skills and contribute to collaborative product development environments."
  ],

  experience: [
    {
      group: "Professional",
      items: [
        {
          title: "Intern", org: "KPPN Liwa, Directorate General of Treasury", date: "June – July 2025",
          points: [
            "Worked with KPPN Liwa staff to understand their needs and started building LIWA, a Learning Organization document management website, which later became my thesis project.",
            "Turned staff requirements into web system features and took part in design, implementation, and testing.",
            "Designed visual materials, a logo for a KPPN Liwa event and the LIWA app logo.",
            "Organized asset data and, together with other interns, worked on the design of the annual magazine.",
            "Supported administrative tasks and reported results to my mentor."
          ],
          photos: ["images/experience/pic4.png", "images/experience/Picture2.jpg", "images/experience/pic3.png"]
        },
        {
          title: "Computer Laboratory Teaching Assistant", org: "University of Lampung", date: "2024 - 2026",
          points: [
            "Guided practicum sessions and graded students in eight courses, including Web Programming, Database Systems, Software Engineering, Data Structures, and Computer Networks.",
            "Worked with fellow teaching assistants to prepare practicum modules and organize how practicums are run.",
            "Explained technical concepts and helped students solve programming and technical problems.",
            "Delivered a presentation on Introduction to Embedded Systems at a community service event at SMAN 1 Natar (2025) and the Himatro Electrical Workshop (2025)."
          ],
          photos: ["images/experience/lab2.jpeg", "images/experience/lab1.png", "images/experience/lab.jpg"]
        }
      ]
    },
    {
      group: "Organization",
      items: [
        {
          title: "Himatro – Education Department", org: "Spiritual Division", date: "2023 - 2024",
          points: [
            "Managed Islamic study events from preparation to execution and coordinated with division members and other officers.",
            "Committee member for Electrical Engineering in Action (2023, 2024), Himatro Cup, and Leadership Training and Inauguration (2023), and took part in other Himatro activities."
          ],
          photos: ["images/experience/hima1.jpeg", "images/experience/hima2.png", "images/experience/hima3.png"]
        }
      ]
    }
  ],

  projects: [
    {
      id: "liwa", title: "LIWA 1.0", category: "Web Platform",
      mockup: "laptop", thumb: "images/project/liwa1.png", thumbPhone: "",
      tech: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
      overview: "LIWA 1.0 is a centralized web platform for managing Learning Organization documents. It was built as an academic development project based on the needs of KPPN Liwa.",
      problem: "During my internship at KPPN Liwa, I observed that Learning Organization documents were managed through multiple platforms, including Microsoft Teams and Google Drive. This made document organization and monitoring less centralized.",
      objectives: "To provide a centralized platform for managing, verifying, and monitoring Learning Organization documents.",
      features: "Document Submission, Document Verification, Employee Monitoring and Centralized Document Management",
      role: "Intern at KPPN Liwa",
      process:
        ["Gathered and analyzed organizational requirements with guidance from supervisors and an organizational mentor.",
          "Translated identified requirements into system features and workflows.",
          "Contributed to interface and system design.",
          "Built the web app with React.js, Tailwind CSS, and Firebase",
          "Tested with black box scenarios and a SUS survey"],
      outcome: "The project was presented to KPPN Liwa leadership as a proposed solution for improving the management and monitoring of Learning Organization documents",
      shots: ["images/project/liwa-UC.png", "images/project/liwa3.png", "images/project/liwa2.png"]
    },
    {
      id: "universe", title: "Universe", category: "Software Engineering",
      mockup: "laptop", thumb: "images/project/universe1.png", thumbPhone: "",
      tech: ["SKPL", "System analysis", "UML"],
      overview: "Universe is an academic software engineering project. A system design that collects Unila event information on one website, with three roles: Guest, User, and Admin.",
      problem: "Currently, there is no centralized platform for managing event information at the University of Lampung (Unila). Event information is scattered across various platforms, making it difficult for users to find and access event information.",
      role: ["Developed UML diagrams to represent system requirements and interactions.",
        "Created wireframes to illustrate the proposed interface.",
        "Contributed to the system structure and user-role definition."
      ],
      process: ["Requirements documentation (SKPL)", "System analysis", "Design"],
      outcome: "System design for Universe project, including requirements documentation (SKPL), use case diagrams, activity diagrams, class diagrams, and UI wireframes.",
      shots: ["images/project/universe-UC.png", "images/project/universe2.png", "images/project/universe3.png"]
    },
    {
      id: "dwitin", title: "Dwitin", category: "Finance App · Machine Learning",
      mockup: "phone", thumb: "", thumbPhone: "images/project/dwitin.png",
      tech: ["TensorFlow", "TensorFlow Lite", "CNN", "Bidirectional LSTM", "OCR"],
      overview: "Dwitin is a finance application developed by a team as a capstone project (C2P2-PS546). I worked on the machine learning part: an OCR model that lets the app read text from images, so users enter less data by hand. [Confirm: what the app reads, e.g. receipts or transaction proofs.]",
      problem: "Managing personal finances means entering many details by hand, which is slow and easy to skip. [Confirm: the exact problem the team set out to solve.] Dwitin aims to make this easier, and OCR was used to read information directly from images.",
      role: "Machine learning team member. I built the OCR model using a CNN combined with a Bidirectional LSTM, and prepared it for mobile use with TensorFlow Lite. [Add: how you worked with the mobile and cloud teammates, and how many people were on the team.]",
      process: [
        "Agreed with the team on what the OCR feature needed to read",
        "Prepared the image and text data for training",
        "Trained a text recognition model using a CNN with a Bidirectional LSTM",
        "Converted the model to TensorFlow Lite so it can run inside the app",
      ],
      outcome: "The OCR model was delivered as part of the team’s capstone project.",
      shots: ["images/project/dwitin1.png", "images/project/dwitin2.png", "images/project/dwitin3.png"]
    }
  ],

  otherProjects: {
    intro: "Other academic and personal projects",
    items: [
      {
        title: "Stuition", category: "UI/UX Design · HCI", photo: "images/project/stuition2.png",
        desc: "A learning management system (LMS) prototype designed in Figma for a Human-Computer Interaction project. I translated the project's requirements into interface layouts.",
        tech: ["Figma", "Wireframing", "Prototyping"], link: "", linkLabel: "View prototype"
      },
      {
        title: "ARWish", category: "Augmented Reality · Android", photo: "images/project/arwish2.png",
        desc: "ARWish is an individual Android project developed for my Augmented Reality course. I designed the interface in Figma and developed the application using Unity and Vuforia. It allows users to scan greeting cards with their smartphone camera to display 3D models and audio, featuring three different card variations.",
        tech: ["Unity", "Vuforia", "3D models", "Canva"], link: "", linkLabel: "View project"
      },
      {
        title: "Automatic Plant Watering System", category: "Arduino · Embedded System", photo: "images/project/embedded.png",
        desc: "An Arduino prototype that waters a plant only when the soil is dry and the light is low, with the status shown on an LCD. I helped assemble the circuit.",
        tech: ["Arduino", "Soil moisture sensor", "LDR sensor", "5V relay", "DC pump", "I2C LCD"], link: "", linkLabel: "View project"
      },
      {
        title: "Smart Parking", category: "Internet of Things", photo: "images/project/iot.png",
        desc: "An IoT prototype that monitors parking slot availability with ultrasonic sensors, shows it on an LCD, and sends the data through MQTT. I assembled the hardware and wrote code with the team, and did most of the MQTT setup.",
        tech: ["NodeMCU (ESP8266)", "HC-SR04 sensors", "I2C LCD", "MQTT", "Arduino IDE", "Wokwi."], link: "", linkLabel: "View project"
      }
    ]
  },

  skills: {
    "Requirements & Documentation": ["Requirements Gathering and Analysis", "Software Requirements Specification (SKPL)", "UML Diagrams", "Usability Evaluation (SUS)", "Black-box Testing"],
    "UI/UX & Design": ["Figma", "Wireframing", "User Flows", "Draw.io", "Canva"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Firebase"],
    "Programming & Other Tools": ["Python", "C++", "MySQL", "Unity", "Vuforia"]
  },

  education: {
    degree: "Bachelor’s Degree in Informatics Engineering",
    school: "University of Lampung",
    year: "Graduated 2026",
    gpa: "GPA 3.88 / 4.00"
  },

  contactText: "I’m open to entry-level, internship, and graduate trainee opportunities. If you’d like to talk about a role or a project, I’d be glad to connect."
};
