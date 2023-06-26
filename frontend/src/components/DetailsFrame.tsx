import React from 'react';

import { Education } from '@/interface/education';
import { Project } from '@/interface/project';
import { ProfessionalSkill, Technology } from '@/interface/skill';
import { User } from '@/interface/user';
import { WorkExperience } from '@/interface/work-experience';
import StartEndData from '@/interface/StartEndDate';
import * as DisplayUtil from '../utils/display';



interface Props {
    user: User,
    education: Education[],
    projects: Project[],
    workExperiences: WorkExperience[],
}


interface State {
    educationCardLimit: number;
    workExperienceCardLimit: number;
    projectCardLimit: number;
}


class DetailsFrame extends React.Component<Props, State> {
    keyValue: number = 0;

    constructor(props: Props) {
        super(props);
        this.state = {
            educationCardLimit: 3,
            workExperienceCardLimit: 3,
            projectCardLimit: 3
        }
    }

    getPill(value: string): React.JSX.Element {
        this.keyValue += 1;
        return <span key={this.keyValue} className="pill mx-1 mb-1 text-primary border-primary">{ value }</span>
    }

    getDateDisplay(startEndData: StartEndData): string {
        const startMonthName = DisplayUtil.getMonthByNumber(startEndData.startMonth, true);
        var dateDisplay: string = `${startMonthName} ${startEndData.startYear}`;
        if (startEndData.endMonth && startEndData.endYear) {
            const endMonthName = DisplayUtil.getMonthByNumber(startEndData.endMonth, true);
            dateDisplay += ` - ${endMonthName} ${startEndData.endYear}`;
        }
        return dateDisplay;
    }

    workExperienceCard(workExperience: WorkExperience): React.JSX.Element {
        this.keyValue += 1;
        return (
            <div key={this.keyValue} className='card mb-6'>
                <div className='text-lg text-slate-300'>
                    { workExperience.company.name } - { workExperience.jobTitle }
                </div>
                <div className='mb-2 text-slate-300 pl-6'>
                    { this.getDateDisplay(workExperience) }
                </div>
                <ul className='list-disc pl-6 mb-4'>
                    {
                        workExperience.details.map((detail: string) => {
                            return <li>{ detail }</li>
                        })
                    }
                </ul>
                <div className='mb-2 flex flex-wrap'>
                    {
                        workExperience.technologies.map((technology: Technology) => {
                            return  this.getPill(technology)
                        })
                    }
                    {
                        workExperience.professionalSkills.map((skill: ProfessionalSkill) => {
                            return  this.getPill(skill)
                        })
                    }
                </div>
            </div>
        )
    }

    educationCard(education: Education): React.JSX.Element {
        this.keyValue += 1;
        return (
            <div key={this.keyValue} className='card mb-6'>
                <div className='text-lg text-slate-300'>
                    { education.school.name } - { education.degree }
                </div>
                <div className='mb-2 pl-6 text-slate-300'>
                    { this.getDateDisplay(education) }  (GPA: { education.gpa.toFixed(2) })
                </div>
                <ul className='list-disc pl-6'>
                    {
                        education.details.map((detail: string) => {
                            return <li>{ detail }</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    projectCard(project: Project): React.JSX.Element {
        this.keyValue += 1;
        return (
            <div key={this.keyValue} className='card mb-6'>
                <div className='text-lg text-slate-300'>
                    { project.title }
                </div>
            </div>
        )
    }

    getWorkExperienceCards(): React.JSX.Element[] {
        var htmlCards: React.JSX.Element[] = [];
        const numCards = this.state.workExperienceCardLimit > this.props.workExperiences.length ? this.props.workExperiences.length : this.state.workExperienceCardLimit;
        for (let i = 0; i < numCards; i++) {
            htmlCards.push(this.workExperienceCard(this.props.workExperiences[i]));
        }

        return htmlCards;
    }

    getEducationCards(): React.JSX.Element[] {
        var htmlCards: React.JSX.Element[] = [];
        const numCards = this.state.educationCardLimit > this.props.education.length ? this.props.education.length : this.state.educationCardLimit;
        for (let i = 0; i < numCards; i++) {
            htmlCards.push(this.educationCard(this.props.education[i]));
        }

        return htmlCards;
    }

    getProjectCards(): React.JSX.Element[] {
        var htmlCards: React.JSX.Element[] = [];
        const numCards = this.state.projectCardLimit > this.props.projects.length ? this.props.projects.length : this.state.projectCardLimit;
        for (let i = 0; i < numCards; i++) {
            htmlCards.push(this.projectCard(this.props.projects[i]));
        }

        return htmlCards;
    }

    render(): React.JSX.Element {
        return (
            <div className="mx-12 mt-20">
                <div id="about" ref="about" className='section mb-20'>
                    <div className='sticky top-0 backdrop-blur uppercase text-xl text-white mb-4'>
                        About
                    </div>
                    <div className='text-slate-400' dangerouslySetInnerHTML={ DisplayUtil.createMarkup(this.props.user.about) }>
                    </div>
                </div>
                <div id="experience" className='section mb-20'>
                    <div className='sticky top-0 backdrop-blur uppercase text-xl text-white mb-4'>
                        Work Experience
                    </div>
                    <div className='text-slate-400'>
                        { 
                            this.getWorkExperienceCards()
                        }
                    </div>
                </div>
                <div id="education" ref="education" className='section mb-20'>
                    <div className='sticky top-0 backdrop-blur uppercase text-xl text-white mb-4'>
                        Education
                    </div>
                    <div className='text-slate-400'>
                        {
                            this.getEducationCards()
                        }
                    </div>
                </div>
                <div id="projects" ref="projects" className='section mb-20'>
                    <div className='sticky top-0 backdrop-blur uppercase text-xl text-white mb-4'>
                        Personal Projects
                    </div>
                    <div className='text-slate-400'>
                        { 
                            this.getProjectCards()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsFrame;
