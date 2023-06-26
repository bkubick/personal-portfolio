import { Education } from '@/interface/education';
import { Project } from '@/interface/project';
import { ProfessionalSkill, Technology } from './interface/skill';
import { User } from '@/interface/user';
import { WorkExperience } from '@/interface/work-experience';

const user: User = {
    summaryDetails: {
        firstName: 'Brandon',
        lastName: 'Kubick',
        tagline: 'Full-Stack Developer | Mechanical Engineer',
        summary: `I am a highly motivated individual seeking a mid-level position in Software Engineering.
                  I am driven by a continuous desire to learn and grow, and am eager to apply my diverse
                  skill set to new challenges.`,
    },
    contactInfo: {
        email: 'brandonkubick@gmail.com',
        github: 'https://github.com/bkubick',
        linkedIn: 'https://www.linkedin.com/in/brandonkubick/',
    },
    about: `<p>
                I am a highly motivated individual seeking a mid-level position in Software Engineering.
                With a background as a Full-Stack Software Developer, and as an R&D Aerospace Engineer,
                I have excelled in both fields due to my strong focus, dedication, and passion for learning.

                <br/><br/>

                In my recent role as a full-stack engineer, I thrived in an Agile environment, where I
                contributed to the development and optimization of new and existing features on the
                company's platform. Notable projects include the development and integration of a separate
                API microservice and enhancing key areas of the platform to optimize performance and enhance
                user experience.

                <br/><br/>

                Prior to my transition to software, I spent two years as an Aerospace Engineer,
                honing fundamental skills such as project management, and the integration and analysis
                of complex systems. During this time, I served as the primary engineering contact for a
                major customer, further building the company’s trust with the client. Additionally, I led
                the thermal spray department as the lead engineer, where myself and two other engineers
                successfully integrated a new thermal spray booth to increase production.

                <br/><br/>

                I am driven by a continuous desire to learn and grow, and I am eager to apply my diverse
                skill set to new challenges as a Software and/or Mechanical Engineer.
            </p>`,
};


const workExperiences: WorkExperience[] = [
    {
        company: {
            name: 'Catalant Technologies',
        },
        jobTitle: 'Software Engineer II',
        description: '',
        details: [
            'Excelled and practiced all experiences noted as a Software Engineer I.',
            'Implemented and integrated a separate microservice API into the company\'s platform, uncoupling functionality to an independent service.',
            'Transitioned legacy company patterns to an industry-standard architecture, enhancing scalability and maintainability.',
            'Authored and reviewed technical documentation, standardizing architectural patterns across the codebase.'
        ],
        startMonth: 7,
        startYear: 2021,
        endMonth: 6,
        endYear: 2023,
        technologies: [
            Technology.PYTHON,
            Technology.JAVASCRIPT,
            Technology.VUE,
            Technology.DOCKER,
            Technology.FLASK,
            Technology.BOOTSTRAP
        ],
        professionalSkills: [
            ProfessionalSkill.TECHNICAL_DOCUMENTATION,
            ProfessionalSkill.SYSTEM_ARCHITECTURE,
            ProfessionalSkill.PROBLEM_SOLVING
        ]
    },
    {
        company: {
            name: 'Catalant Technologies',
        },
        jobTitle: 'Software Engineer I',
        description: '',
        details: [
            'Worked as a Full-Stack developer, dedicated to the development, maintenance, and optimization of the Catalant Marketplace.',
            'Applied the Agile/Scrum methodology throughout the software development lifecycle, from initial development to enterprise-wide deployment and ongoing support.',
            'Fostered effective cross-functional collaboration with Sales, Product, and Design teams to deliver rapid and high-quality software solutions, with an intuitive user experience.',
            'Conducted peer reviews and integration tests to ensure code quality, and compliance with company and industry standards.'
        ],
        startMonth: 7,
        startYear: 2021,
        endMonth: 6,
        endYear: 2023,
        technologies: [
            Technology.PYTHON,
            Technology.JAVASCRIPT,
            Technology.VUE,
            Technology.DOCKER,
            Technology.FLASK,
            Technology.BOOTSTRAP
        ],
        professionalSkills: [
            ProfessionalSkill.TECHNICAL_DOCUMENTATION,
            ProfessionalSkill.PROBLEM_SOLVING
        ]
    },
    {
        company: {
            name: 'TurbineAero Engine Technics',
        },
        jobTitle: 'R&D Engineer',
        description: '',
        details: [
            'Led the metal spray department as the primary engineer, focusing on developing and improving metal spray repair processes/documentation to enhance repair quality and reduce costs.',
            'Supervised and mentored an intern, identifying and assigning key projects that generated significant benefits for the company, as well as allowed them to develop fundamental engineering skills and gain valuable hands-on experience.',
            'Provided dedicated engineering support to a key customer, fostering strong client relationships, and cross-collaborating with their engineering team to improve upon existing repairs.',
            'Tracked repair data and conducted experiments to develop new repairs and streamline existing repairs of turbine engine components.',
            'Collaborated with a team of two engineers to successfully integrate a new metal spray system, enhancing department capabilities.',
            'Designed tooling and fixtures with technical documentation and engineering drawings to support manufacturing processes.',
            'Leveraged RobotStudio to develop automated programs, utilizing 3D models and simulations for efficient programming.',
            'Authored and peer reviewed technical documentation and engineering drawings.'
        ],
        startMonth: 5,
        startYear: 2020,
        endMonth: 7,
        endYear: 2021,
        technologies: [Technology.SOLIDWORKS, Technology.AUTOCAD],
        professionalSkills: [
            ProfessionalSkill.TECHNICAL_DOCUMENTATION,
            ProfessionalSkill.PROBLEM_SOLVING
        ]
    },
    {
        company: {
            name: 'TurbineAero Repair',
        },
        jobTitle: 'MRO Engineer',
        description: '',
        details: [
            'Determined work-scopes for Auxiliary Power Units (APUs) by conducting performance analyses and visual inspections.',
            'Collaborated with a Designated Engineering Representative (DER) to reverse engineer and develop repairs for specific turbine engine parts.',
            'Tracked and analyzed APU work-scopes for key customers, delivering quarterly presentations on trends to identify opportunities for future repairs and enhancements.',
            'Authored and reviewed technical documentation to ensure accuracy and compliance with industry standards.',
            'Designed and created engineering drawings for tooling utilized in repair processes.'
        ],
        startMonth: 5,
        startYear: 2020,
        endMonth: 7,
        endYear: 2021,
        technologies: [Technology.SOLIDWORKS, Technology.AUTOCAD],
        professionalSkills: [
            ProfessionalSkill.TECHNICAL_DOCUMENTATION,
            ProfessionalSkill.PROBLEM_SOLVING
        ]
    },
    {
        company: {
            name: 'Gage Mathers',
        },
        jobTitle: 'Part Time Legal Assistant & Software Consultant',
        description: '',
        details: [
            'Conceptualized and executed a custom application leveraging Python and Tkinter to streamline the intakes and demand package creation process.',
            'Conducted data ingestion by collecting and cleaning intake data from clients, ensuring its accuracy and completeness.',
            'Tracked and analyzed case valuations on a quarterly basis.'
        ],
        startMonth: 1,
        startYear: 2020,
        endMonth: 7,
        endYear: 2021,
        technologies: [Technology.PYTHON, Technology.TKINTER],
        professionalSkills: [ProfessionalSkill.DATA_ANALYSIS]
    },
    {
        company: {
            name: 'Power Solutions International',
        },
        jobTitle: 'Business & Engineering Intern',
        description: '',
        details: [
            'Benchmarked and analyzed competitor engines, and reviewed technical specification requirements, to focus future generator development.',
            'Cross-collaborated with the financial department, where I utilized my background in programming to analyze and cleanup historical pricing data, and identified pricing indices from BLS to help develop a case for a 2019 price increase.'
        ],
        startMonth: 5,
        startYear: 2018,
        endMonth: 8,
        endYear: 2018,
        technologies: [Technology.PYTHON, Technology.MATLAB],
        professionalSkills: [ProfessionalSkill.LEADERSHIP, ProfessionalSkill.PRESENTATIONS, ProfessionalSkill.DATA_ANALYSIS]
    },
];


const projects: Project[] = [
    {
        title: 'SB3 Investments, LLC Website',
        description: '',
        details: [
            'Started an LLC to build my rental property portfolio.',
            'Developing a website to track my cash flow, manage my properties, and recommend new investments based off preferences.',
            'Implemented a Flask and MySQL backend api, and a Vue3 and TypeScript frontend.'
        ],
        technologies: [Technology.VUE, Technology.PYTHON, Technology.TYPESCRIPT, Technology.FLASK],
        startMonth: 9,
        startYear: 2022,
    },
];


const education: Education[] = [
    {
        school: {
            name: 'Columbia University',
        },
        degree: 'B.S. Mechanical Engineering',
        gpa: 4.0,
        startMonth: 9,
        startYear: 2017,
        endMonth: 5,
        endYear: 2019,
        details: [
            'Graduated Magna Cum Laude and was awarded the Mechanical Engineering Certificate of Merit.',
            'My senior design team and I were the winners for the Mechanical Engineering Senior Design Expo where we built an automated spice dispenser and made it completely ready for market.',
            'Completed multiple interdisciplinary projects in design, programming, and manufacturing, as listed in my projects section.'
        ],
        honors: [],
        clubs: [],
        courses: [],
    },
    {
        school: {
            name: 'University of Redlands',
        },
        degree: 'B.A. Physics',
        gpa: 3.92,
        startMonth: 9,
        startYear: 2014,
        endMonth: 5,
        endYear: 2017,
        details: [
            'Received Dean\'s list every semester and was part of the 3/2 combined plan program.',
            'Barry Goldwater Scholarship nominee where I was one of three students nominated at Redlands.',
            'Researched and performed a literary review on computational fluid dynamics studies used to optimize the angle of the rear windshield to minimize drag.'
        ],
        honors: [],
        clubs: [],
        courses: [],
    }
];


export { user, education, projects, workExperiences };
