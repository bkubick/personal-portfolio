import React from 'react';

import { User } from '@/interface/user';
import Github from '../static/img/github.svg';
import LinkedIn from '../static/img/linked-in.svg';
import Envelope from '../static/img/envelope.svg';

import TopNav from './TopNav';



interface Props {
    user: User
}


interface State {}



class SummaryFrame extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="py-10 h-screen">
                <div className='mb-40'>
                    <TopNav></TopNav>
                </div>
                <div className='mb-12'>
                    <div className="">
                        <div className='uppercase text-white mb-2 text-4xl'>
                            { `${this.props.user.summaryDetails.firstName} ${this.props.user.summaryDetails.lastName}` }
                        </div>
                        <div className='text-slate-400 mb-8 text-2xl'>
                            { this.props.user.summaryDetails.tagline }
                        </div>
                        <div className='text-slate-400 mb-8 text-base'>
                            { this.props.user.summaryDetails.summary }
                        </div>
                    </div>
                </div>
                <div className='mb-48'>
                    <button className='btn btn-primary-outline'>Resume</button>
                </div>
                <div>
                    <div className='flex mb-4'>
                        <a href={`mailto:${this.props.user.contactInfo.email}`} target='_blank'>
                            <Envelope/>
                        </a>
                        <a className='ml-12' href={this.props.user.contactInfo.github} target='_blank'>
                            <Github/>
                        </a>
                        <a className='ml-12' href={this.props.user.contactInfo.linkedIn} target='_blank'>
                            <LinkedIn/>
                        </a>
                    </div>
                    <div className='text-slate-400 '>
                        This was built with React and Figma
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryFrame;
