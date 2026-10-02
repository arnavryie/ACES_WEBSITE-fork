export const categories = [
  {
    id: "faculty-coordinator",
    title: "Faculty Coordinator",
    description: "Faculty advisor and mentor guiding ACES activities.",
    roles: ["Faculty Coordinator"],
  },
  {
    id: "core-team",
    title: "Core Team & Leadership",
    description: "The primary leadership, advisors, and executives of ACES.",
    roles: ["President", "Vice President", "Treasurer", "Club Advisor", "Secretary"],
  },
  {
    id: "technical-team",
    title: "Technical Team",
    description: "Leading tech initiatives, digital architecture, and hackathons.",
    roles: ["Senior Technical Head", "Technical Head", "Jr. Tech Head", "Technical Team"],
  },
  {
    id: "public-relations",
    title: "Public Relations Officers",
    description: "Managing public relations, outreach, and official communications.",
    roles: ["Public Relations Officer"],
  },
  {
    id: "external-affairs",
    title: "External Affairs Officers",
    description: "Handling external collaborations, industry relations, and outreach.",
    roles: ["External Affairs Officer"],
  },
  {
    id: "representatives",
    title: "ACES Representatives",
    description: "Student representatives bridging departments, cohorts, and club activities.",
    roles: ["ACES Representative"],
  },
  {
    id: "content-creators",
    title: "Content Creators",
    description: "Creating engaging digital media, video reels, and creative narratives.",
    roles: ["Content Creator", "Jr. Content Creator"],
  },
  {
    id: "event-managers",
    title: "Event Managers",
    description: "Planning, organizing, and executing all flagship ACES events.",
    roles: ["Event Manager", "Jr. Event Manager"],
  },
  {
    id: "data-managers",
    title: "Data Managers",
    description: "Managing data pipelines, analytics, registrations, and club automation.",
    roles: ["Data Manager"],
  },
  {
    id: "designers",
    title: "Designers Team",
    description: "Designing visuals, branding aesthetics, and digital assets.",
    roles: ["Designer"],
  },
];

export const members = [
  // ─── FACULTY COORDINATOR ───
  {
    id: "sharad-sir",
    name: "Sharad Sir",
    role: "Faculty Coordinator",
    category: "faculty-coordinator",
    rollNo: "Faculty",
    branch: "Computer Engineering",
    year: "DIT Pune",
    image: "https://i.pravatar.cc/300?img=68",
    bio: "Faculty Coordinator of ACES. Providing guidance, support, and mentorship to student teams in technical and organizational activities.",
    responsibilities: [
      "Mentorship",
      "Club Oversight",
      "Faculty Guidance"
    ],
    skills: [
      "Mentoring",
      "Academic Leadership"
    ],
    social: {
      email: "mailto:sharad.sir@college.edu"
    }
  },

  // ─── CORE TEAM & LEADERSHIP ───
  {
    id: "tejas-nalawade",
    name: "Tejas Nalawade",
    role: "President",
    category: "core-team",
    rollNo: "TCO...",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Leading ACES with vision and responsibility. Creating with passion, building with purpose. Dedicated to making an impact through innovation, collaboration, and continuous learning.",
    responsibilities: [
      "Team Leadership",
      "Strategic Planning",
      "Community Building"
    ],
    skills: [
      "Leadership",
      "Public Speaking",
      "Web Development"
    ],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "sanket-kulkarni",
    name: "Sanket Kulkarni",
    role: "President",
    category: "core-team",
    rollNo: "TCO...",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Guiding the team towards technical excellence and strategic growth.",
    responsibilities: [
      "Mentorship",
      "Technical Planning",
      "Leadership"
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Leadership"
    ],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "atharva-gawade",
    name: "Atharva Gawade",
    role: "Vice President",
    category: "core-team",
    rollNo: "SCO...",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Supporting leadership, driving execution. Works closely with teams to turn ideas into impactful realities.",
    responsibilities: [
      "Operations",
      "Team Coordination",
      "Execution"
    ],
    skills: [
      "Management",
      "Communication"
    ],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "anurag-bansal",
    name: "Anurag Bansal",
    role: "Treasurer",
    category: "core-team",
    rollNo: "TCOC28",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Anurag+Bansal&background=b22b2f&color=fff&size=400&bold=true",
    bio: "I hail from Barnala, Punjab. I am a MUN and Air Force enthusiast with a keen interest in Indian politics and geopolitical dynamics across the globe. I believe the perfect way to spend weekends is engaging in meaningful debates while building lasting connections.",
    responsibilities: [
      "Financial Management",
      "Budget Allocation",
      "Sponsorship Auditing"
    ],
    skills: [
      "Finance Management",
      "Public Speaking",
      "Debating"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/anurag-bansal-33873b329/",
      github: "https://github.com/AnuragBansal2005",
      instagram: "https://instagram.com/anura_g17144"
    }
  },
  {
    id: "alisha-sheikh",
    name: "Alisha Sheikh",
    role: "Club Advisor",
    category: "core-team",
    rollNo: "BCOA17",
    branch: "Computer Engineering",
    year: "BE",
    image: "https://ui-avatars.com/api/?name=Alisha+Sheikh&background=d1a550&color=111&size=400&bold=true",
    bio: "Passionate about technology, problem-solving, and turning ideas into something meaningful. I enjoy exploring new things and expressing my creative side through music and guitar.",
    responsibilities: [
      "Senior Advisory",
      "Club Mentorship",
      "Strategic Consultation"
    ],
    skills: [
      "Strategic Advisory",
      "Problem Solving",
      "Creative Direction"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/alisha-sheikh-as15/",
      github: "https://github.com/alisha1510",
      instagram: "https://www.instagram.com/its.alishaa._/"
    }
  },

  // ─── TECHNICAL TEAM ───
  {
    id: "aaditya-kharat",
    name: "Aaditya Kharat",
    role: "Senior Technical Head",
    category: "technical-team",
    rollNo: "TCOA06",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Aaditya+Kharat&background=b22b2f&color=fff&size=400&bold=true",
    bio: "I hold the title of Senior Technical Head. My approach to life is simple: build cool things, hit the gym, and don't overcomplicate it. I can absolutely lock in when it's time to grind, but I bring a relaxed energy that takes the pressure off to let the best work happen.",
    responsibilities: [
      "Technical Architecture",
      "Full-Stack Mentorship",
      "Hackathon Infrastructure"
    ],
    skills: [
      "Full-Stack Dev",
      "System Design",
      "Team Mentorship"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/aaditya-kharat/",
      github: "https://www.github.com/Aaditya-2407/",
      instagram: "https://www.instagram.com/him_aadi"
    }
  },
  {
    id: "gayatri-vitkar",
    name: "Gayatri Ganesh Vitkar",
    role: "Senior Technical Head",
    category: "technical-team",
    rollNo: "TCOC49",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Gayatri+Vitkar&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Building, learning, and leading—one challenge at a time. A Computer Engineering student and Senior Technical Head at ACES, journeying from Junior Technical Head to taking on bigger responsibilities and creating meaningful impact with the team.",
    responsibilities: [
      "Technical Leadership",
      "Event Tech Management",
      "Workshops & Labs"
    ],
    skills: [
      "Software Development",
      "Technical Planning",
      "Team Leadership"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/gayatrivitkar/",
      github: "https://github.com/GayatriVitkar"
    }
  },
  {
    id: "samarth-kulkarni",
    name: "Samarth Kulkarni",
    role: "Senior Technical Head",
    category: "technical-team",
    rollNo: "TCOD31",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Samarth+Kulkarni&background=111&color=fff&size=400&bold=true",
    bio: "Senior Technical Head at ACES. Enthusiastic about engineering clean architectures, competitive programming, and scalable web solutions.",
    responsibilities: [
      "Technical Mentorship",
      "Code Reviews",
      "Platform Stability"
    ],
    skills: [
      "Web Architecture",
      "Algorithms",
      "Problem Solving"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/samarth-kulkarni-/",
      github: "https://github.com/SamaKool"
    }
  },
  {
    id: "vyankatesh-patil",
    name: "Vyankatesh Patil",
    role: "Jr. Technical Head",
    category: "technical-team",
    rollNo: "SCOC48",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Vyankatesh+Patil&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Hey, I'm Vyankatesh, pursuing Bachelor's in Computer Science. Passionate about building web projects and exploring new technologies. Always eager to learn, code, and create impactful software.",
    responsibilities: [
      "Web Platforms",
      "Full-Stack Development",
      "UI Engineering"
    ],
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "CSS"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/vyankatesh-patil-606883385/",
      github: "https://github.com/vyankatesh9880",
      instagram: "https://www.instagram.com/vyaanky/"
    }
  },
  {
    id: "atharva-harale",
    name: "Atharva Harale",
    role: "Jr. Technical Head",
    category: "technical-team",
    rollNo: "SCOB53",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Atharva+Harale&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Passionate about technology, coding, and continuously learning new skills. A vibecoder who built cetpredict.in, a college predicting website for MHT-CET students.",
    responsibilities: [
      "Web Development",
      "Product Innovation",
      "Frontend Design"
    ],
    skills: [
      "Full Stack",
      "React",
      "Next.js",
      "UI/UX"
    ],
    social: {
      linkedin: "https://linkedin.com/in/atharvaharale",
      github: "https://github.com/Atharvanh",
      instagram: "https://instagram.com/sincerelyatharva"
    }
  },
  {
    id: "raj-singh",
    name: "Raj Singh",
    role: "Jr. Technical Head",
    category: "technical-team",
    rollNo: "SCOD05",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Raj+Singh&background=d1a550&color=111&size=400&bold=true",
    bio: "CSE'29 student, Junior Tech Head @ ACES and GSSoC'26 Contributor. Currently learning DSA, Web Development, and contributing to open-source software.",
    responsibilities: [
      "Web Infrastructure",
      "Technical Workshops",
      "Open Source Outreach"
    ],
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DSA"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/rajsingh052007",
      github: "https://github.com/rajsingh2007rs",
      instagram: "https://www.instagram.com/who.rxj"
    }
  },
  {
    id: "arnav-tagade",
    name: "Arnav Tagade",
    role: "Jr. Technical Head",
    category: "technical-team",
    rollNo: "SCOD22",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Arnav+Tagade&background=111&color=fff&size=400&bold=true",
    bio: "Passionate about competitive programming, building scalable distributed systems, and modern software architectures.",
    responsibilities: [
      "Algorithm Design",
      "Technical Problem Solving",
      "System Building"
    ],
    skills: [
      "C++",
      "Python",
      "Data Structures"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/arnavryie/",
      github: "https://github.com/arnavryie",
      instagram: "https://www.instagram.com/arnhvooo/"
    }
  },

  // ─── PUBLIC RELATIONS OFFICERS ───
  {
    id: "srushti-veer",
    name: "Srushti Mangesh Veer",
    role: "Public Relations Officer",
    category: "public-relations",
    rollNo: "TCOD70",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Srushti+Veer&background=b22b2f&color=fff&size=400&bold=true",
    bio: "I’m Srushti, a CSE student, tech enthusiast, and PRO at ACES. ✨ I enjoy exploring tech, but what I love just as much is talking to people, building connections, and being part of something meaningful. Here to learn, contribute, connect, and make some noise with ACES. 🚀",
    responsibilities: [
      "Public Relations",
      "Community Outreach",
      "Inter-College Networking"
    ],
    skills: [
      "PR Management",
      "Communication",
      "Event Promotion"
    ],
    social: {
      linkedin: "https://linkedin.com/in/srushti-veer-9a225122b",
      github: "https://github.com/veersrushti60",
      instagram: "https://www.instagram.com/veer.srushtii/"
    }
  },
  {
    id: "spandan-hattikar",
    name: "Spandan Hattikar",
    role: "Public Relations Officer",
    category: "public-relations",
    rollNo: "SCOB46",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Spandan+Hattikar&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Curious, slightly chaotic, and always trying to learn something new. Pretty easygoing, enjoy meeting new people, and always up for trying something different.",
    responsibilities: [
      "Campus PR",
      "Student Engagement",
      "Media Relations"
    ],
    skills: [
      "Public Relations",
      "Networking",
      "Communication"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/spandan-hattikar",
      github: "https://github.com/Spandan-Hattikar",
      instagram: "https://instagram.com/spandan_hattikar"
    }
  },
  {
    id: "mohini-pandare",
    name: "Mohini Ramkrishna Pandare",
    role: "Public Relations Officer",
    category: "public-relations",
    rollNo: "SCOC30",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Mohini+Pandare&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Passionate Computer Engineering student interested in Artificial Intelligence, software development, and emerging technologies. Always eager to learn, explore new ideas, and build innovative projects.",
    responsibilities: [
      "PR Communications",
      "Department Representation",
      "Outreach Initiatives"
    ],
    skills: [
      "Communication",
      "AI Basics",
      "Teamwork"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/mohini-pandare-3250a7385",
      github: "https://github.com/mohinipandare11",
      instagram: "https://www.instagram.com/mohinipandare_11"
    }
  },

  // ─── EXTERNAL AFFAIRS OFFICERS ───
  {
    id: "gauri-marke",
    name: "Gauri Prakash Marke",
    role: "External Affairs Officer",
    category: "external-affairs",
    rollNo: "TCOC16",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Gauri+Marke&background=b22b2f&color=fff&size=400&bold=true",
    bio: "A people person who enjoys communication, collaboration, and turning conversations into opportunities. At ACES, I work towards building strong external connections and creating meaningful collaborations.",
    responsibilities: [
      "External Relations",
      "Strategic Collaborations",
      "Outreach Campaigns"
    ],
    skills: [
      "Communication",
      "Collaboration",
      "Strategic Networking"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/gauri-m-1a5519378",
      github: "https://github.com/GauriMarke10"
    }
  },
  {
    id: "rajeshwari-kokate",
    name: "Rajeshwari Kokate",
    role: "External Affairs Officer",
    category: "external-affairs",
    rollNo: "SCOB20",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Rajeshwari+Kokate&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Public speaker by choice, professional yapper by nature. I love technology, badminton, good conversations, and pretending I'll stop talking after 'one last thing.' If I'm not playing badminton or talking, I'm probably thinking about what to talk about next.",
    responsibilities: [
      "External Outreach",
      "Public Speaking",
      "Inter-College Relations"
    ],
    skills: [
      "Public Speaking",
      "Negotiation",
      "Relationship Building"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/rajeshwari-kokate-613b84326",
      github: "https://github.com/Rajeshwari-Kokate",
      instagram: "https://www.instagram.com/_raj_eshwari_06"
    }
  },
  {
    id: "shubham-singh",
    name: "Shubham Singh",
    role: "External Affairs Officer",
    category: "external-affairs",
    rollNo: "SCOD25",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Shubham+Singh&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Professional talker, Part time problem solver, Full time masti. Too curious to sit still, too ambitious to chill.",
    responsibilities: [
      "Sponsorships",
      "Corporate Partnerships",
      "Outreach"
    ],
    skills: [
      "Communication",
      "Outreach",
      "Negotiation"
    ],
    social: {
      linkedin: "https://linkedin.com/in/shubham-singh-9a2b96384",
      github: "https://github.com/shu6hamsingh",
      instagram: "https://instagram.com/_shu6ham"
    }
  },
  {
    id: "manika-gupta",
    name: "Manika Gupta",
    role: "External Affairs Officer",
    category: "external-affairs",
    rollNo: "SCOB35",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Manika+Gupta&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Someone who is creative and loves to try different things. Good at multiple domains, constantly exploring to discover where I can make the highest impact.",
    responsibilities: [
      "External Communications",
      "Partnership Outreach",
      "Brand Advocacy"
    ],
    skills: [
      "Creative Thinking",
      "Outreach",
      "Collaboration"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/manika-gupta-34802637",
      github: "https://github.com/manikagupta101",
      instagram: "https://www.instagram.com/_manika_gupta_10"
    }
  },
  {
    id: "yash-jain",
    name: "Yash Jain",
    role: "External Affairs Officer",
    category: "external-affairs",
    rollNo: "SCOD42",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Yash+Jain&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Excited to be a part of ACES, meet new people, and learn through impactful experiences. Looking forward to expanding our external reach and industry ties.",
    responsibilities: [
      "External Outreach",
      "Industry Networking",
      "Event Promotion"
    ],
    skills: [
      "Networking",
      "Public Relations",
      "Team Collaboration"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/yash-jain-164096385",
      github: "https://github.com/yashj178323-ai",
      instagram: "https://www.instagram.com/yaxhhh07"
    }
  },

  // ─── ACES REPRESENTATIVES ───
  {
    id: "anjali-shanbhag",
    name: "Anjali Shanbhag",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "TCOC22",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Anjali+Shanbhag&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Contributing to the planning and execution of ACES initiatives, coordinating with faculty and student teams, and mentoring junior representatives to foster student engagement within the Computer Engineering department.",
    responsibilities: [
      "Department Coordination",
      "Mentorship",
      "Student Advocacy"
    ],
    skills: [
      "Leadership",
      "Team Coordination",
      "Department Liaison"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/anjali-s-68b843329",
      github: "https://github.com/anjaliishanbhag",
      instagram: "https://instagram.com/anjaliiii_sh"
    }
  },
  {
    id: "shivam-kurlekar",
    name: "Shivam Kurlekar",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "TCOD55",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Shivam+Kurlekar&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Connecting people, creating memories, handling the chaos, and pretending I had everything under control the entire time.",
    responsibilities: [
      "Student Relations",
      "Logistics Coordination",
      "Engagement"
    ],
    skills: [
      "People Management",
      "Problem Solving",
      "Team Building"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/shivam-kurlekar",
      github: "https://github.com/bemo-codes"
    }
  },
  {
    id: "yasha-chhajed",
    name: "Yasha Anilkumar Chhajed",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "SCOD04",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Yasha+Chhajed&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Hi! I’m Yasha. Excited to bring fresh ideas, represent your voice, and contribute to an unforgettable student experience!",
    responsibilities: [
      "Cohort Representation",
      "Student Feedback",
      "Event Coordination"
    ],
    skills: [
      "Student Advocacy",
      "Communication",
      "Event Support"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/yashachhajed",
      github: "https://github.com/chhajedyasha",
      instagram: "https://www.instagram.com/yarrr.yashaaa"
    }
  },
  {
    id: "chinmay-patil",
    name: "Chinmay Nitin Patil",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "SCOC06",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Chinmay+Patil&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Computer Engineering student who enjoys learning new technologies and solving problems. Currently focusing on programming, DSA, and exploring Machine Learning. Joined ACES to learn, contribute, and build meaningful community projects.",
    responsibilities: [
      "Student Engagement",
      "Technical Support",
      "Club Representation"
    ],
    skills: [
      "DSA",
      "Machine Learning",
      "Problem Solving"
    ],
    social: {
      linkedin: "https://linkedin.com/in/chinmay-patil-237a81385",
      github: "https://github.com/chinmaypatil033",
      instagram: "https://instagram.com/chinmay4449"
    }
  },
  {
    id: "shreya-ashtekar",
    name: "Shreya Ashtekar",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "SCOA20",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Shreya+Ashtekar&background=b22b2f&color=fff&size=400&bold=true",
    bio: "A second-year computer student who is curious, creative, and has a strong interest in technology. Passionate about learning new things, adaptable, and eager to take on new leadership challenges.",
    responsibilities: [
      "Class Representation",
      "Event Organization",
      "Student Liaison"
    ],
    skills: [
      "Creativity",
      "Adaptability",
      "Communication"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/shreya-ashtekar",
      github: "https://github.com/shreyaashtekar",
      instagram: "https://www.instagram.com/shreya_ashtekar10"
    }
  },
  {
    id: "rajsinh-ghorpade",
    name: "Rajsinh Ghorpade",
    role: "ACES Representative",
    category: "representatives",
    rollNo: "SCOB01",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Rajsinh+Ghorpade&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Second-year Computer Science student with a strong interest in AI, ML, and DSA. Two-time Olympiad medalist with a competitive spirit. Dedicated to contributing technical and leadership enthusiasm to ACES.",
    responsibilities: [
      "Technical Representation",
      "Peer Mentoring",
      "Competitive Coding"
    ],
    skills: [
      "AI & ML",
      "DSA",
      "Competitive Coding"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/rajsinh-ghorpade-73134036b",
      github: "https://github.com/rajghorpade03"
    }
  },

  // ─── DESIGNERS TEAM ───
  {
    id: "aliza-husain",
    name: "Aliza Husain",
    role: "Designer",
    category: "designers",
    rollNo: "TCOD45",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Aliza+Husain&background=b22b2f&color=fff&size=400&bold=true",
    bio: "8.5 CGPA, 0.29 Mental Stability, Professional Overthinker, Amateur Coder, and a recently joined gym enthusiast pretending to have her life together. Passionate about bold creative design and digital artwork.",
    responsibilities: [
      "UI/UX Design",
      "Creative Collaterals",
      "Event Themes"
    ],
    skills: [
      "UI Design",
      "Digital Art",
      "Visual Storytelling"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/aliza-husain-17ba4337a/",
      github: "https://github.com/AlizaHusain006",
      instagram: "https://www.instagram.com/_aziza_.o6/"
    }
  },
  {
    id: "parth-mangire",
    name: "Parth Sachin Mangire",
    role: "Designer",
    category: "designers",
    rollNo: "SCOA72",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Parth+Mangire&background=b22b2f&color=fff&size=400&bold=true",
    bio: "A guy who’s into tech, building cool stuff, learning new design aesthetics, and figuring things out along the way.",
    responsibilities: [
      "Graphic Design",
      "Branding & Posters",
      "Digital Media"
    ],
    skills: [
      "Figma",
      "Photoshop",
      "Visual Design"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/parth-mangire-aab393349",
      github: "https://github.com/thisisparth187",
      instagram: "https://instagram.com/a_exolotol"
    }
  },
  {
    id: "samarth-gupta",
    name: "Samarth Gupta",
    role: "Designer",
    category: "designers",
    rollNo: "SCOC05",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Samarth+Gupta&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Myself Samarth Gupta from Jammu. Computer Engineering student interested in tech, coding, and design. I enjoy learning, creating projects, and solving real-world problems.",
    responsibilities: [
      "Creative Design",
      "UI Assets",
      "Event Banners"
    ],
    skills: [
      "Graphic Design",
      "UI/UX",
      "Creativity"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/samarth-gupta-23782042b",
      github: "https://github.com/samarthgupta2297-sys",
      instagram: "https://instagram.com/_samarth_gupta_."
    }
  },
  {
    id: "ashutosh-avasare",
    name: "Ashutosh Surendra Avasare",
    role: "Designer",
    category: "designers",
    rollNo: "SCOA33",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Ashutosh+Avasare&background=b22b2f&color=fff&size=400&bold=true",
    bio: "CSE student with an artist's mind. I love drawing, travelling, exploring design, and turning random ideas into something creative. Always learning, experimenting, and finding new ways to create.",
    responsibilities: [
      "Visual Art",
      "Creative Concepting",
      "Merchandise Design"
    ],
    skills: [
      "Illustration",
      "Figma",
      "Creative Direction"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/ashutosh-avasare-1357bb370",
      github: "https://github.com/ashutoshavasare33",
      instagram: "https://www.instagram.com/ashutosh_avasare_"
    }
  },

  // ─── CONTENT CREATORS ───
  {
    id: "jeet-choudhari",
    name: "Jeet Choudhari",
    role: "Content Creator",
    category: "content-creators",
    rollNo: "TCOD19",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Jeet+Choudhari&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Creates engaging video reels and stories to make ACES event updates, technical workshops, and club achievements available to students across the college campus and beyond.",
    responsibilities: [
      "Reels Production",
      "Story Campaigns",
      "Digital Promotion"
    ],
    skills: [
      "Video Editing",
      "Content Creation",
      "Reels Creation"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/jeet-choudhary-b6b346311",
      github: "https://github.com/jeet8499",
      instagram: "https://instagram.com/jeet_18c"
    }
  },
  {
    id: "shreya-patil",
    name: "Shreya Patil",
    role: "Content Creator",
    category: "content-creators",
    rollNo: "SCOC33",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Shreya+Patil&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Good team player, open to new ideas, and always eager to learn. Looking forward to contributing content strategy, taking up new media challenges, and growing with ACES.",
    responsibilities: [
      "Social Media Content",
      "Copywriting",
      "Community Engagement"
    ],
    skills: [
      "Content Strategy",
      "Social Media",
      "Writing"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/shreya-patil-9473492b6",
      github: "https://www.github.com/sp2537965-sys",
      instagram: "https://www.instagram.com/not__shreyyy"
    }
  },
  {
    id: "rohan-band",
    name: "Rohan Prakash Band",
    role: "Content Creator",
    category: "content-creators",
    rollNo: "SCOA08",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Rohan+Band&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Content Creator at ACES, handling social media content, live event coverage, photography, videography, and video editing to creatively showcase the committee's activities.",
    responsibilities: [
      "Event Photography",
      "Video Editing",
      "Reel Production"
    ],
    skills: [
      "Videography",
      "Premiere Pro",
      "Photography"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/rohan-band-41545b373",
      github: "https://github.com/bandrohan85-crypto",
      instagram: "https://www.instagram.com/band_rohan__007/"
    }
  },
  {
    id: "riddesh-thakre",
    name: "Riddesh Thakre",
    role: "Jr. Content Creator",
    category: "content-creators",
    rollNo: "SCOC59",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Riddesh+Thakre&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Junior Content Creator at ACES. Enthusiastic about creating fresh reels, editing campus event highlights, and engaging the student community.",
    responsibilities: [
      "Video Shorts",
      "Social Media Updates",
      "Coverage Assistance"
    ],
    skills: [
      "Video Editing",
      "Social Media",
      "Content Curation"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/riddhesh-thakre",
      github: "https://github.com/Riddesh7",
      instagram: "https://www.instagram.com/riddesh__07"
    }
  },

  // ─── EVENT MANAGERS ───
  {
    id: "yash-sahane",
    name: "Yash Sahane",
    role: "Event Manager",
    category: "event-managers",
    rollNo: "SCOD34",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Yash+Sahane&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Computer Engineering student with a passion for technology, teamwork, and leadership. Enjoys taking initiative, exploring new ideas, and collaborating to turn ideas into meaningful outcomes.",
    responsibilities: [
      "Event Operations",
      "Stage Logistics",
      "Team Coordination"
    ],
    skills: [
      "Event Management",
      "Leadership",
      "Problem Solving"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/yash-sahane",
      github: "https://github.com/YashSahane30"
    }
  },
  {
    id: "prachi-ladia",
    name: "Prachi Ladia",
    role: "Event Manager",
    category: "event-managers",
    rollNo: "SCOC08",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Prachi+Ladia&background=b22b2f&color=fff&size=400&bold=true",
    bio: "I enjoy planning events, working with people, and bringing ideas to life. Proud to contribute to creating memorable events at ACES.",
    responsibilities: [
      "Event Planning",
      "Hospitality & Logistics",
      "Participant Coordination"
    ],
    skills: [
      "Event Execution",
      "Coordination",
      "Planning"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/prachiladia",
      github: "https://github.com/prachiladia",
      instagram: "https://instagram.com/prachi_ladia"
    }
  },
  {
    id: "samiksha-bhosale",
    name: "Samiksha Bhosale",
    role: "Event Manager",
    category: "event-managers",
    rollNo: "SCOC68",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Samiksha+Bhosale&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Exploring Python, Java, Git & GitHub, and cloud computing. Passionate about event management, teamwork, and leadership, always looking for opportunities to learn, grow, and build meaningful projects.",
    responsibilities: [
      "Event Flow Management",
      "Volunteer Coordination",
      "Operations"
    ],
    skills: [
      "Event Logistics",
      "Python",
      "Team Leadership"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/samiksha-bhosale-b81560429",
      github: "https://github.com/samiksha191007",
      instagram: "https://www.instagram.com/ammksha__/"
    }
  },
  {
    id: "swarali-shirkande",
    name: "Swarali Balaso Shirkande",
    role: "Jr. Event Manager",
    category: "event-managers",
    rollNo: "SCOD26",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Swarali+Shirkande&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Jr. Event Manager | Computer Engineering student exploring technology, creativity, people, and new experiences. Always curious, always learning, and always up for turning an idea into something real. Quiet mind. Creative chaos. Big dreams.",
    responsibilities: [
      "Event Assistance",
      "Crowd Management",
      "Creative Setup"
    ],
    skills: [
      "Event Coordination",
      "Teamwork",
      "Creativity"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/swarali-shirkande-407427385",
      github: "https://github.com/swaralishirkande22-stack"
    }
  },

  // ─── DATA MANAGERS ───
  {
    id: "soham-chitnis",
    name: "Soham Saurabh Chitnis",
    role: "Data Manager",
    category: "data-managers",
    rollNo: "TCOD30",
    branch: "Computer Engineering",
    year: "TE",
    image: "https://ui-avatars.com/api/?name=Soham+Chitnis&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Just your everyday guy with a passion for his work and a brain that does not rest until a certain threshold is met. Joined ACES to build with like-minded creators! Handling data automation so that the crew knows exactly what's up at all times.",
    responsibilities: [
      "Data Automation",
      "Event Analytics",
      "Registration Pipelines"
    ],
    skills: [
      "Python",
      "Data Processing",
      "Automation"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/soham-chitnis-3a2708329",
      github: "https://github.com/Itachi-of-the-Leaf/",
      instagram: "https://www.instagram.com/soham.so.what"
    }
  },
  {
    id: "aditya-renake",
    name: "Aditya Renake",
    role: "Data Manager",
    category: "data-managers",
    rollNo: "SCOC56",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Aditya+Renake&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Comfortable with code and currently deep in ML engineering. Shipped NexGen Careers (Career guidance platform for 12th grade students).",
    responsibilities: [
      "Machine Learning",
      "Data Curation",
      "System Tracking"
    ],
    skills: [
      "Machine Learning",
      "Python",
      "Data Science"
    ],
    social: {
      linkedin: "https://linkedin.com/in/aditya-renake",
      github: "https://github.com/aditya-renake",
      instagram: "https://www.instagram.com/where.aditya"
    }
  },
  {
    id: "hariti-rawal",
    name: "Hariti Rawal",
    role: "Data Manager",
    category: "data-managers",
    rollNo: "SCOB31",
    branch: "Computer Engineering",
    year: "SE",
    image: "https://ui-avatars.com/api/?name=Hariti+Rawal&background=b22b2f&color=fff&size=400&bold=true",
    bio: "Data Manager at ACES. Enthusiastic explorer who loves analyzing datasets, optimizing workflows, and learning new computational tools.",
    responsibilities: [
      "Data Management",
      "Database Tracking",
      "Event Spreadsheets"
    ],
    skills: [
      "Data Analysis",
      "Spreadsheets",
      "Organization"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/hariti-rawal-243053383",
      github: "https://github.com/Hari-228",
      instagram: "https://www.instagram.com/_rawalh_"
    }
  }
];

// Seniority ranking helpers
const getYearScore = (m) => {
  if (!m) return 99;
  if (m.category === 'faculty-coordinator' || m.role === 'Faculty Coordinator') return 0;
  const y = (m.year || '').toLowerCase().trim();
  const roll = (m.rollNo || '').toLowerCase().trim();
  if (y === 'dit pune' || y.includes('faculty')) return 0;
  if (y.includes('be') || roll.startsWith('bco')) return 1;
  if (y.includes('te') || roll.startsWith('tco')) return 2;
  if (y.includes('se') || roll.startsWith('sco')) return 3;
  if (y.includes('fe') || roll.startsWith('fco')) return 4;
  return 5;
};

const getRoleRank = (role, category) => {
  const r = (role || '').toLowerCase().trim();
  // For Core Team, maintain leadership hierarchy
  if (category === 'core-team') {
    if (r === 'president') return 1;
    if (r === 'vice president') return 2;
    if (r === 'treasurer') return 3;
    if (r === 'secretary') return 4;
    if (r.includes('advisor')) return 5;
  }
  // Senior / Head before Junior
  if (r.includes('senior') || r.includes('sr.')) return 1;
  if (r.includes('head') && !r.includes('jr')) return 2;
  if (r.includes('lead') && !r.includes('jr')) return 3;
  if (r.includes('jr')) return 10;
  return 5;
};

export const sortMembersBySeniority = (membersList, categoryId) => {
  return [...membersList].sort((a, b) => {
    // For core-team: President > Vice President > Treasurer > Secretary > Club Advisor
    if (categoryId === 'core-team' || (a.category === 'core-team' && b.category === 'core-team')) {
      const roleA = getRoleRank(a.role, 'core-team');
      const roleB = getRoleRank(b.role, 'core-team');
      if (roleA !== roleB) return roleA - roleB;
      const yearA = getYearScore(a);
      const yearB = getYearScore(b);
      if (yearA !== yearB) return yearA - yearB;
      return 0;
    }

    // 1. Primary sort: Academic Year Seniority (Faculty > BE > TE > SE > FE)
    const yearA = getYearScore(a);
    const yearB = getYearScore(b);
    if (yearA !== yearB) return yearA - yearB;

    // 2. Secondary sort: Role Hierarchy (Senior / Head before Junior)
    const roleA = getRoleRank(a.role, categoryId || a.category);
    const roleB = getRoleRank(b.role, categoryId || b.category);
    if (roleA !== roleB) return roleA - roleB;

    return 0;
  });
};

export const getMembersByCategory = (categoryId) => {
  const filtered = members.filter(member => member.category === categoryId);
  return sortMembersBySeniority(filtered, categoryId);
};

export const getMembersByRole = (role) => {
  const filtered = members.filter(member => member.role === role);
  return sortMembersBySeniority(filtered);
};

export const getMemberById = (id) => {
  return members.find(member => member.id === id);
};
