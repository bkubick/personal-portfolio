import React from 'react';

import { Education } from '@/interface/education';
import { Project } from '@/interface/project';
import { User } from '@/interface/user';
import { WorkExperience } from '@/interface/work-experience';
import DetailsFrame from './DetailsFrame';
import SummaryFrame from './SummaryFrame';
import { user, education, projects, workExperiences } from '../professional-info';


interface Props {}


interface State {
    user: User;
    workExperiences: WorkExperience[];
    projects: Project[];
    education: Education[];
    activeSection: string;
}


class App extends React.Component<Props, State> {

    sections: string[] = [
        'about',
        'experience',
        'education',
        'projects'
    ];

    constructor(props: Props) {
        super(props);
        this.state = {
            user: user,
            workExperiences: workExperiences,
            projects: projects,
            education: education,
            activeSection: this.sections[0],
        }

        this.updateActiveSection = this.updateActiveSection.bind(this);
    }

    componentDidMount(): void {
        this.addCursorFollowerListener();
        this.addNavbarSectionScrollListener();
    }

    updateActiveSection(section: string): void {
        this.setState({ activeSection: section });
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

    addNavbarSectionScrollListener(): void {
        const detailsFrame: HTMLElement | null = document.getElementById('details-frame');
        const experienceSection: HTMLElement | null = document.getElementById('experience');
        const educationSection: HTMLElement | null = document.getElementById('education');
        const projectSection: HTMLElement | null = document.getElementById('projects');

        const scrollHandler = () => {
            if (!(detailsFrame && projectSection && educationSection && experienceSection)) {
                throw Error('Element section missing.');
            }

            if (detailsFrame.scrollTop >= projectSection.offsetTop) {
                this.updateActiveSection('projects');
            } else if (detailsFrame.scrollTop < projectSection.offsetTop && detailsFrame.scrollTop >= educationSection.offsetTop) {
                this.updateActiveSection('education');
            } else if (detailsFrame.scrollTop < educationSection.offsetTop && detailsFrame.scrollTop >= experienceSection.offsetTop) {
                this.updateActiveSection('experience');
            } else {
                this.updateActiveSection('about');
            }
        };

        detailsFrame?.addEventListener('scroll', scrollHandler);
    }

    render() {
        return (
            <div id='app' className='container mx-auto h-screen flex'>
                <div className='grid md:grid-cols-5'>
                    <div className='col-span-2 md:overflow-hidden flex'>
                        <div className='overflow-y-scroll no-scrollbar'>
                            <SummaryFrame user={ this.state.user } activeSection={this.state.activeSection} sections={this.sections}></SummaryFrame>
                        </div>
                    </div>
                    <div className='col-span-3 md:overflow-hidden flex'>
                        <div id="details-frame" className='overflow-y-scroll no-scrollbar'>
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
