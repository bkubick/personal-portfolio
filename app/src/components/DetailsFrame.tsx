import React from 'react';
import { InView } from 'react-intersection-observer';

import CollapsiblePanel from './common/Panel';
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
    workExperienceCardLimit: number;
    projectCardLimit: number;
}


class DetailsFrame extends React.Component<Props, State> {
    keyValue: number = 0;

    constructor(props: Props) {
        super(props);
        this.state = {
            workExperienceCardLimit: 5,
            projectCardLimit: 10,
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
                        <div className='grid grid-flow-col auto-cols-auto'>
                            <img className='col-auto h-12 mr-4 rounded' src={ workExperience.company.img } alt={ workExperience.company.img }/>
                            <div>
                                <div>
                                    <div className='text-lg text-slate-300'>
                                        { workExperience.company.name } - { workExperience.jobTitle }
                                    </div>
                                    <div className='mb-2 uppercase text-xs text-slate-300 pl-6'>
                                        { this.getDateDisplay(workExperience) }
                                    </div>
                                </div>
                                <ul className='list-disc pl-6 mb-4 text-sm'>
                                    {
                                        workExperience.details.map((detail: string) => {
                                            return <li>{ detail }</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
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
                    <div ref={ ref } key={education.courses + education.degree} className={ `card-hoverable mb-6 cursor-pointer ${inView ? 'animate-fade-in' : ''}`}>
                        <CollapsiblePanel>
                            {{
                                icon: <img className='h-12 mr-4 rounded' src={ education.school.img } alt={ education.school.name }/>,
                                header: (
                                    <div>
                                        <div className='text-lg text-slate-300'>
                                            { education.school.name } - { education.degree }
                                        </div>
                                        <div className='pl-6 uppercase text-xs text-slate-300'>
                                            { this.getDateDisplay(education) }  (GPA: { education.gpa.toFixed(2) })
                                        </div>
                                    </div>
                                ),
                                body: (
                                    <ul className={ 'mt-4 list-disc pl-6 text-sm' }>
                                        {
                                            education.details.map((detail: string) => {
                                                return <li>{ detail }</li>
                                            })
                                        }
                                    </ul>
                                )
                            }}
                        </CollapsiblePanel>
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
                    <div ref={ ref } key={ project.title } className={ `card-hoverable mb-6 ${inView ? 'animate-fade-in' : ''}`}>
                        <CollapsiblePanel>
                        {{
                            icon: project.img ? <img className='h-12 mr-4 rounded' src={ project.img } alt={ project.title }/> : '',
                            header: (
                                <div>
                                    <div className='text-lg text-slate-300 flex items-center'>
                                        { project.title }
                                        <span className='ml-4'>
                                            {
                                                project.link ? <a href={ project.link } target='_blank'><UpRight className='fill-slate-300 hover:fill-slate-100'/></a> : ''
                                            }
                                        </span>
                                    </div>
                                    <div className='mb-2 pl-6 uppercase text-xs text-slate-300'>
                                        { this.getDateDisplay(project) }
                                    </div>
                                </div>
                            ),
                            body: (
                                <ul className='list-disc pl-6 mb-4 text-sm'>
                                    {
                                        project.details.map((detail: string) => {
                                            return <li>{ detail }</li>
                                        })
                                    }
                                </ul>
                            )
                        }}
                        </CollapsiblePanel>
                        <div className='mt-2 flex flex-wrap'>
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
        for (const experience of this.props.workExperiences) {
            if (htmlCards.length >= this.state.workExperienceCardLimit) break;
            htmlCards.push(this.workExperienceCard(experience));
        }
        return htmlCards;
    }

    getEducationCards(): React.JSX.Element[] {
        var htmlCards: React.JSX.Element[] = [];
        for (const education of this.props.education) htmlCards.push(this.educationCard(education));
        return htmlCards;
    }

    getProjectCards(): React.JSX.Element[] {
        var htmlCards: React.JSX.Element[] = [];
        for (const project of this.props.projects) {
            if (htmlCards.length >= this.state.projectCardLimit) break;
            htmlCards.push(this.projectCard(project));
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
