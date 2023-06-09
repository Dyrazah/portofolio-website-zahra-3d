import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    jira,
    permib,
    telu,
    ditmawa,
    warmingup,
    asyst,
    lets_glow_up,
    glidder,
    ijahit,
    work1,
    work2,
    work3
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "jira",
      icon: jira,
    },
  ];
  
  const experiences = [
    {
      title: "PERMIB Freedom In Creativity",
      company_name: "Secretary of Event Division",
      icon: permib,
      iconBg: "#FFFFFF",
      date: "Dec 2020 - May 2021",
      points: [
        "Organized and record the results of routine division meetings",
        "Organized the regular meeting schedule of the event division",
        "Analyze and plan the event",
        "Make an event timeline from the beginning of the activity to the end",
        "Coordinated all performance",
        "Monitoring and ensure the event runs smoothly",
        "Manage time of the event"
      ],
    },
    {
      title: "Direktorat Kemahasiswaan Universitas Telkom",
      company_name: "Liaison Officer Internship",
      icon: ditmawa,
      iconBg: "#FFFFFF",
      date: "May 2021 - Jul 2021",
      points: [
        "Manage and assist Telkom University faculty staff to upload or input data SIMKATMAWA (Sistem Informasi Manajemen Pemeringkatan Kemahasiswaan)",
        "Monitoring and ensure complete data",
        "Reminded Telkom University faculty staff to upload or input data SIMKATMAWA (Sistem Informasi Manajemen Pemeringkatan Kemahasiswaan)"
      ],
    },
    {
      title: "Industrial  Lecture D3 Sistem Informasi",
      company_name: "Public Relation Division",
      icon: telu,
      iconBg: "#FFFFFF",
      date: "Dec 2021 - Jan 2022",
      points: [
        "Manage and assist Telkom University faculty staff to upload or input data SIMKATMAWA (Sistem Informasi Manajemen Pemeringkatan Kemahasiswaan)",
        "Monitoring and ensure complete data",
        "Reminded Telkom University faculty staff to upload or input data SIMKATMAWA (Sistem Informasi Manajemen Pemeringkatan Kemahasiswaan)"
      ],
    },
    {
      title: "Warming Up",
      company_name: "Chief of Operation and Public Relation Division",
      icon: warmingup,
      iconBg: "#FFFFFF",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Design and implement business strategies, plans, and procedures",
        "Oversee daily operations of the company and the work of (IT, marketing)",
        "Write and submit reports to CEO",
        "Lead employees to encourage maximum performance",
        "Evaluate performance by analyzing and interpreting data",
        "Design social media content",
      ],
    },
    {
      title: "PT Aero Systems Indonesia",
      company_name: "Front End Developer Internship",
      icon: asyst,
      iconBg: "#FFFFFF",
      date: "Aug 2022 - Jun 2023",
      points: [
        "Develop application using React Typescript",
        "Integrate pages with database APIs",
        "Make improvements if there are bugs that interfere with application activities",
        "Monitoring and ensure all features and pages according to user requirements can run smoothly",
        "Make the required validation on a particular page",
        "Make the required features according to user requirements"
      ],
    },
  ];
  
  const projects = [
    {
      projects_image: work1,
      notes:
        "UI/UX mobile applications beauty consultation and marketplace (Let's Glow Up) by using Figma.",
      name: "Let's Glow Up",
      year: "2021",
      work: "School Project",
      image: lets_glow_up,
    },
    {
      projects_image: work2,
      notes:
        "Create a SuperApp (Glidder) website User Interface using HTML and CSS.",
      name: "Glidder",
      year: "2021",
      work: "School Project",
      image: glidder,
    },
    {
      projects_image: work3,
      notes:
        "Designing and building a website-based tailor application with using CI framework, PHP, HTML, and CSS.",
      name: "I-Jahit",
      year: "2021",
      work: "School Project",
      image: ijahit,
    },
  ];

  const school = [
    {
      name: "SMA Telkom Bandung",
      major: "Science",
      date: "July 2017 - June 2020",
      achievement: [
        "3rd Runner Up of National Scientific Writing Competition “Bakti Formica Bangsa XXI” Universitas Pendidikan Indonesia",
        "3rd Runner Up of Industrial Green Competition Telkom University 2018",
        "3rd Runner Up of Industrial Green Competition Telkom University 2017",
      ]
    },
    {
      name: "Telkom University",
      major: "Diploma Information System",
      date: "Sep 2020 - Now",
      achievement: [
        "Awardee of One Pipe Education System (OPES)",
        "Participant of Program Kreativitas Mahasiswa (PKM) 2021",
        "Participant of Program Kreativitas Mahasiswa (PKM) 2022",
        "Participant of GEMASTIK XIV 2021",
        "Finalist of National Scientific Writing Competition “Gebyar Farmasi 2021” Universitas Andalas"
      ]
    }
  ];
  
  export { services, technologies, experiences, projects, school };