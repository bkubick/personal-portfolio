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
}


class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            user: user,
            workExperiences: workExperiences,
            projects: projects,
            education: education,
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
