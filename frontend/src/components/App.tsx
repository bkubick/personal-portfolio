import React from 'react';

import { Education } from '@/interface/education';
import { Project } from '@/interface/project';
import { ProfessionalSkill, Technology } from '../interface/skill';
import { User } from '@/interface/user';
import { WorkExperience } from '@/interface/work-experience';
import DetailsFrame from './DetailsFrame';
import SummaryFrame from './SummaryFrame';


interface Props {}


interface State {
    user: User;
    workExperiences: WorkExperience[];
    projects: Project[];
    education: Education[];
}


class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            user: {
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
            },
            workExperiences: [
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
                    technologies: [Technology.PYTHON, Technology.JAVASCRIPT, Technology.VUE],
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
                        'Excelled and practiced all experiences noted as a Software Engineer I.',
                        'Implemented and integrated a separate microservice API into the company\'s platform, uncoupling functionality to an independent service.',
                        'Transitioned legacy company patterns to an industry-standard architecture, enhancing scalability and maintainability.',
                        'Authored and reviewed technical documentation, standardizing architectural patterns across the codebase.'
                    ],
                    startMonth: 7,
                    startYear: 2021,
                    endMonth: 6,
                    endYear: 2023,
                    technologies: [Technology.PYTHON, Technology.JAVASCRIPT, Technology.VUE],
                    professionalSkills: [
                        ProfessionalSkill.TECHNICAL_DOCUMENTATION,
                        ProfessionalSkill.PROBLEM_SOLVING
                    ]
                }
            ],
            projects: [
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
            ],
            education: [
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
            ],
        }

        this.addCursorFollowerListener();
    }

    addCursorFollowerListener(): void {
        const root: HTMLElement = document.documentElement;

        document.addEventListener('mousemove', evt => {
            let x: number = evt.clientX / innerWidth;
            let y: number = evt.clientY / innerHeight;
        
            root.style.setProperty('--mouse-x', x.toString());
            root.style.setProperty('--mouse-y', y.toString());
        });
    }

    render() {
        return (
            <div id='app' className='container mx-auto h-screen flex'>
                <div className='grid md:grid-cols-5'>
                    <div className='col-span-2 md:overflow-hidden flex'>
                        <div className='overflow-y-scroll no-scrollbar'>
                            <SummaryFrame user={ this.state.user }></SummaryFrame>
                        </div>
                    </div>
                    <div className='col-span-3 md:overflow-hidden flex'>
                        <div className='overflow-y-scroll no-scrollbar'>
                            <DetailsFrame
                                user={ this.state.user }
                                workExperiences={ this.state.workExperiences }
                                projects={ this.state.projects }
                                education={ this.state.education }></DetailsFrame>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
