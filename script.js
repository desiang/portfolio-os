// Resume data
const resumeData = {
    name: "Desi Marie Birondo",
    title: "Software Engineer",
    contact: {
        phone: "(+123) 456-7890",
        email: "birondodm@gmail.com",
        linkedin: "linkedin.com/in/dmbirondo",
        github: "github.com/dmbirondo",
        location: "Marigondon, Lapu-Lapu City, Philippines"
    },
    summary: "A passionate software engineer with 5+ years of experience building scalable web applications using React, Node.js, and cloud technologies. Proven track record of delivering clean, maintainable code and improving system performance by up to 40%.",
    experience: [
        {
            position: "Senior Software Engineer",
            company: "TechCorp Solutions Pvt Ltd",
            location: "Marigondon, Lapu-Lapu City, Philippines",
            dates: "Jan 2022 – Present",
            responsibilities: [
                "Designed and led development of a microservices-based e-commerce platform serving 2M+ monthly users",
                "Reduced API response time by 45% through query optimization and Redis caching",
                "Mentored 4 junior developers and established code review standards"
            ]
        },
        {
            position: "Software Engineer",
            company: "StartupX Labs",
            location: "Marigondon, Lapu-Lapu City, Philippines",
            dates: "Jun 2020 – Dec 2021",
            responsibilities: [
                "Built real-time dashboard using React + WebSocket that decreased reporting time from 2 days to <5 seconds",
                "Implemented automated testing suite increasing test coverage from 30% to 89%"
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Cordova Public College",
            dates: "2023 – 2027 ",
            cgpa: "8.9/10 CGPA"
        }
    ],
    skills: [
        {
            category: "Languages",
            items: "JavaScript (ES6+), TypeScript, Python, Java"
        },
        {
            category: "Frameworks",
            items: "React, Next.js, Node.js, Express, Django"
        },
        {
            category: "Tools & Platforms",
            items: "Git, Docker, AWS, PostgreSQL, MongoDB, Redis"
        },
        {
            category: "Other",
            items: "REST APIs, GraphQL, CI/CD, Jest, Tailwind CSS"
        }
    ],
    projects: [
        {
            title: "FCFS CPU Scheduling Visualizer",
            description: [
                "Interactive web simulator built with HTML, CSS, JavaScript & Chart.js",
                "Live: https://fcfs-birondo.vercel.app/",
                "GitHub:https://github.com/desiang/portfolio-os"
            ]
        },
        {
            title: "TaskFlow – Task Management SaaS",
            description: [
                "Full-stack app with React + Node.js + MongoDB",
                "Live: taskflow-app.netlify.app"
            ]
        }
    ]
};

// Function to create HTML elements
function createElement(tag, className = "", textContent = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

// Function to build the resume
function buildResume() {
    console.log('Building resume...');
    const container = document.querySelector('.resume-container');
    if (!container) {
        console.error('Resume container not found');
        return;
    }

    // Header
    const header = document.querySelector('.resume-header');
    const img = createElement('img', 'profile-pic');
    img.src = 'dxs.jpg';
    img.alt = 'Profile Picture';
    header.appendChild(img);
    header.appendChild(createElement('h1', '', resumeData.name));
    header.appendChild(createElement('p', 'title', resumeData.title));

    const contactInfo = createElement('div', 'contact-info');
    const phoneP = createElement('p', '');
    phoneP.innerHTML = '<i class="fas fa-phone"></i> ' + resumeData.contact.phone;
    contactInfo.appendChild(phoneP);
    const emailP = createElement('p', '');
    emailP.innerHTML = '<i class="fas fa-envelope"></i> ' + resumeData.contact.email;
    contactInfo.appendChild(emailP);
    const linkedinP = createElement('p', '');
    linkedinP.innerHTML = '<i class="fab fa-linkedin"></i> ' + resumeData.contact.linkedin;
    contactInfo.appendChild(linkedinP);
    const githubP = createElement('p', '');
    githubP.innerHTML = '<i class="fab fa-github"></i> ' + resumeData.contact.github;
    contactInfo.appendChild(githubP);
    const locationP = createElement('p', '');
    locationP.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + resumeData.contact.location;
    contactInfo.appendChild(locationP);
    header.appendChild(contactInfo);

    // Content
    const content = document.querySelector('.resume-content');

    // Summary
    const summaryCard = createElement('div', 'section-card');
    summaryCard.id = 'summary';
    const summaryH2 = createElement('h2', '');
    summaryH2.innerHTML = '<i class="fas fa-user"></i> Professional Summary';
    summaryCard.appendChild(summaryH2);
    summaryCard.appendChild(createElement('p', '', resumeData.summary));
    content.appendChild(summaryCard);

    // Experience
    const experienceCard = createElement('div', 'section-card');
    experienceCard.id = 'experience';
    const experienceH2 = createElement('h2', '');
    experienceH2.innerHTML = '<i class="fas fa-briefcase"></i> Professional Experience';
    experienceCard.appendChild(experienceH2);
    resumeData.experience.forEach(job => {
        const jobDiv = createElement('div', 'job');
        jobDiv.appendChild(createElement('h3', '', job.position));
        jobDiv.appendChild(createElement('p', 'company', job.company + ' • ' + job.location));
        jobDiv.appendChild(createElement('p', 'dates', job.dates));
        const ul = createElement('ul');
        job.responsibilities.forEach(resp => {
            ul.appendChild(createElement('li', '', resp));
        });
        jobDiv.appendChild(ul);
        experienceCard.appendChild(jobDiv);
    });
    content.appendChild(experienceCard);

    // Education
    const educationCard = createElement('div', 'section-card');
    educationCard.id = 'education';
    const educationH2 = createElement('h2', '');
    educationH2.innerHTML = '<i class="fas fa-graduation-cap"></i> Education';
    educationCard.appendChild(educationH2);
    resumeData.education.forEach(edu => {
        const degreeDiv = createElement('div', 'degree');
        degreeDiv.appendChild(createElement('h3', '', edu.degree));
        degreeDiv.appendChild(createElement('p', 'school', edu.school));
        degreeDiv.appendChild(createElement('p', 'dates', edu.dates));
        degreeDiv.appendChild(createElement('p', 'cgpa', edu.cgpa));
        educationCard.appendChild(degreeDiv);
    });
    content.appendChild(educationCard);

    // Featured Project - FCFS CPU Scheduling Visualizer
    const fcfsCard = createElement('div', 'section-card featured-project');
    fcfsCard.id = 'fcfs-project';
    const fcfsH2 = createElement('h2', '');
    fcfsH2.innerHTML = '<i class="fas fa-cogs"></i> Featured Project';
    fcfsCard.appendChild(fcfsH2);

    const fcfsTitle = createElement('h3', '', 'FCFS CPU Scheduling Visualizer');
    fcfsCard.appendChild(fcfsTitle);

    // Add project image
    const fcfsImage = createElement('img', 'project-image');
    fcfsImage.src = 'fcfs.jpeg'; 
    fcfsImage.alt = 'FCFS CPU Scheduling Visualizer Preview';
    fcfsCard.appendChild(fcfsImage);

    const fcfsDesc = createElement('p', '', 'Interactive web simulator built with HTML, CSS, JavaScript & Chart.js for visualizing First Come First Served (FCFS) CPU scheduling algorithm.');
    fcfsCard.appendChild(fcfsDesc);

    const fcfsLinks = createElement('div', 'project-links');
    const liveLink = createElement('a', 'project-link live-link');
    liveLink.href = 'https://fcfs-os.vercel.app/';
    liveLink.target = '_blank';
    liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
    fcfsLinks.appendChild(liveLink);

    const githubLink = createElement('a', 'project-link github-link');
    githubLink.href = 'https://github.com/desiang/fcfs_os';
    githubLink.target = '_blank';
    githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
    fcfsLinks.appendChild(githubLink);

    fcfsCard.appendChild(fcfsLinks);
    content.appendChild(fcfsCard);

    // Projects
    const projectsCard = createElement('div', 'section-card');
    projectsCard.id = 'projects';
    const projectsH2 = createElement('h2', '');
    projectsH2.innerHTML = '<i class="fas fa-project-diagram"></i> Other Projects';
    projectsCard.appendChild(projectsH2);
    resumeData.projects.forEach(project => {
        const projectDiv = createElement('div', 'project');
        projectDiv.appendChild(createElement('h3', '', project.title));
        const ul = createElement('ul');
        project.description.forEach(desc => {
            ul.appendChild(createElement('li', '', desc));
        });
        projectDiv.appendChild(ul);
        projectsCard.appendChild(projectDiv);
    });
    content.appendChild(projectsCard);

    // Skills
    const skillsCard = createElement('div', 'section-card');
    skillsCard.id = 'skills';
    const skillsH2 = createElement('h2', '');
    skillsH2.innerHTML = '<i class="fas fa-tools"></i> Technical Skills';
    skillsCard.appendChild(skillsH2);
    resumeData.skills.forEach(skill => {
        skillsCard.appendChild(createElement('p', 'skill-category', `${skill.category}: ${skill.items}`));
    });
    content.appendChild(skillsCard);
}

// Build the resume when the page loads
document.addEventListener('DOMContentLoaded', buildResume);
