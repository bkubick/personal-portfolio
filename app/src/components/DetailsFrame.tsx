import React from 'react';
import { InView } from 'react-intersection-observer';

import { Education } from '@/interface/education';
import { Project } from '@/interface/project';
import { ProfessionalSkill, Technology } from '@/interface/skill';
import { User } from '@/interface/user';
import { WorkExperience } from '@/interface/work-experience';
import StartEndData from '@/interface/StartEndDate';
import * as DisplayUtil from '../utils/display';
import UpRight from '../static/img/up-right.svg';


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
            workExperienceCardLimit: 10,
            projectCardLimit: 10
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
        } else {
            dateDisplay += ' - current';
        }
        return dateDisplay;
    }

    workExperienceCard(workExperience: WorkExperience): React.JSX.Element {
        this.keyValue += 1;
        return (
            <InView>
                {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                    <div ref={ ref } key={ workExperience.company.name + workExperience.jobTitle } className={ `card mb-6 ${inView ? 'animate-fade-in' : ''}`}>
                        { inView }
                        <div className='flex mb-2'>
                            <img className='h-12 mr-4 rounded' src={ workExperience.company.img } alt={ workExperience.company.img }/>
                            <div>
                                <div className='text-lg text-slate-300'>
                                    { workExperience.company.name } - { workExperience.jobTitle }
                                </div>
                                <div className='mb-2 uppercase text-sm text-slate-300 pl-6'>
                                    { this.getDateDisplay(workExperience) }
                                </div>
                            </div>
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
                )}
            </InView>
        )
    }

    educationCard(education: Education): React.JSX.Element {
        return (
            <InView>
                {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                    <div ref={ ref } key={education.courses + education.degree} className={ `card mb-6 ${inView ? 'animate-fade-in' : ''}`}>
                        <div className='flex mb-2'>
                            <img className='h-12 mr-4 rounded' src={ education.school.img } alt={ education.school.name }/>
                            <div>
                                <div className='text-lg text-slate-300'>
                                    { education.school.name } - { education.degree }
                                </div>
                                <div className='mb-2 pl-6 uppercase text-sm text-slate-300'>
                                    { this.getDateDisplay(education) }  (GPA: { education.gpa.toFixed(2) })
                                </div>
                            </div>
                        </div>
                        <ul className='list-disc pl-6'>
                            {
                                education.details.map((detail: string) => {
                                    return <li>{ detail }</li>
                                })
                            }
                        </ul>
                    </div>
                )}
            </InView>
        )
    }

    projectCard(project: Project): React.JSX.Element {
        this.keyValue += 1;
        return (
            <InView>
                {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                    <div ref={ ref } key={ project.title } className={ `card mb-6 ${inView ? 'animate-fade-in' : ''}`}>
                        <div className="flex mb-2">
                            { project.img ? <img className='h-12 mr-4 rounded' src={ project.img } alt={ project.title }/> : '' }
                            <div>
                                <div className='text-lg text-slate-300 flex items-center'>
                                    { project.title }
                                    <span className='ml-4'>
                                        {
                                            project.link ? <a href={ project.link } target='_blank'><UpRight className='fill-slate-300 hover:fill-slate-100'/></a> : ''
                                        }
                                    </span>
                                </div>
                                <div className='mb-2 pl-6 uppercase text-sm text-slate-300'>
                                    { this.getDateDisplay(project) }
                                </div>
                            </div>
                        </div>
                        <ul className='list-disc pl-6 mb-4'>
                            {
                                project.details.map((detail: string) => {
                                    return <li>{ detail }</li>
                                })
                            }
                        </ul>
                        <div className='mb-2 flex flex-wrap'>
                            {
                                project.technologies.map((technology: Technology) => {
                                    return  this.getPill(technology)
                                })
                            }
                        </div>
                    </div>
                )}
            </InView>
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
                <InView>
                    {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                        <div ref={ ref } id="about" className={`section mb-20 ${inView ? 'animate-fade-in' : ''}`}>
                            <div className='sticky top-0 backdrop-blur z-10 uppercase text-xl text-white mb-4'>
                                About Me
                            </div>
                            <div className='text-slate-400' dangerouslySetInnerHTML={ DisplayUtil.createMarkup(this.props.user.about) }>
                            </div>
                        </div>
                    )}
                </InView>
                <div id="experience" className='section mb-20'>
                    <InView>
                        {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                            <div ref={ ref } className={`sticky top-0 backdrop-blur z-10 uppercase text-xl text-white mb-4 ${inView ? 'animate-fade-in' : ''}`}>
                                Work Experience
                            </div>
                        )}
                    </InView>
                    <div className='text-slate-400'>
                        { 
                            this.getWorkExperienceCards()
                        }
                    </div>
                </div>
                <div id="background" className='section mb-20'>
                    <InView>
                        {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                            <div ref={ ref } className={`sticky top-0 backdrop-blur z-10 uppercase text-xl text-white mb-4 ${inView ? 'animate-fade-in' : ''}`}>
                                Skills & Education
                            </div>
                        )}
                    </InView>
                    <div className='text-slate-400'>
                        {
                            this.getEducationCards()
                        }
                    </div>
                </div>
                <div id="personal" className='section mb-20'>
                    <InView>
                        {({ inView, ref }: { inView: boolean, ref: React.RefObject<HTMLDivElement> }) => (
                            <div ref={ ref } className={`sticky top-0 backdrop-blur z-10 uppercase text-xl text-white mb-4 ${inView ? 'animate-fade-in' : ''}`}>
                                Personal Projects & Interests
                            </div>
                        )}
                    </InView>
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
