import React from 'react';

import { User } from '@/interface/user';
import Github from '../static/img/github.svg';
import LinkedIn from '../static/img/linked-in.svg';
import Envelope from '../static/img/envelope.svg';

import Logo from '../static/img/b_to_the_3_logo.svg';



interface Props {
    user: User;
    sections: string[];
    activeSection: string;
}


interface State {}



class SummaryFrame extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    isSectionActive(section: string): boolean {
        return this.props.activeSection === section;
    }

    activeCircle(): React.JSX.Element {
        return <span className="h-2 w-2 bg-primary rounded-full inline-block"></span>
    }

    navItem(section: string): React.JSX.Element {
        const active: boolean = this.isSectionActive(section);
        const titleClass = 'leading-4 text-xs uppercase font-bold hover:text-primary';
        return (
            <div key={section} className='mx-1 text-center'>
                <div className={ titleClass }>
                    <a href={`#${section}`}>
                        { section }
                    </a>
                </div>
                <div className="leading-4">
                    { active ? this.activeCircle() : '' }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="py-10 mx-12 flex flex-col h-screen justify-between">
                <div className='mb-4'>
                    <div className="text-white flex">
                        <Logo className='logo'/>
                        <div className='mx-5 flex my-2 xs:invisible visible md:invisible lg:visible'>
                            { this.props.sections.map((section: string) => {
                                return this.navItem(section);
                            })}
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div>
                        <div className='uppercase text-white mb-2 text-4xl'>
                            { `${this.props.user.summaryDetails.firstName} ${this.props.user.summaryDetails.lastName}` }
                        </div>
                        <div className='text-slate-300 mb-8 text-2xl'>
                            { this.props.user.summaryDetails.tagline }
                        </div>
                        <div className='text-slate-400 mb-8 text-base'>
                            { this.props.user.summaryDetails.summary }
                        </div>
                    </div>
                    <div>
                        <a className='btn btn-primary-outline cursor-pointer' href="/personal-portfolio/Resume-BrandonKubick.pdf" target='_blank'>Resume</a>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex mb-4'>
                        <a href={`mailto:${this.props.user.contactInfo.email}`} target='_blank'>
                            <Envelope/>
                        </a>
                        <a className='ml-6' href={this.props.user.contactInfo.github} target='_blank'>
                            <Github/>
                        </a>
                        <a className='ml-6' href={this.props.user.contactInfo.linkedIn} target='_blank'>
                            <LinkedIn/>
                        </a>
                    </div>
                    <div className='text-slate-400 mb-4'>
                        This was created by Branding Kubick, built using React, TypeScript, and TailWind.
                        I want to point out that I am not a designer! This portfolio
                        is meant to showcase my experience through actual development!
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryFrame;
