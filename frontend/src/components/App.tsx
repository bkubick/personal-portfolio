import React from 'react';

import { User } from '@/interface/user';
import DetailsFrame from './DetailsFrame';
import SummaryFrame from './SummaryFrame';


interface Props {}


interface State {
    user: User;
}


class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            user: {
                summaryDetails: {
                    firstName: 'Brandon',
                    lastName: 'Kubick',
                    tagline: 'Full-Stack Software Engineer | Mechanical Engineer',
                    summary: 'I am a highly motivated individual seeking a mid-level position in Software Engineering. I am driven by a continuous desire to learn and grow, and am eager to apply my diverse skill set to new challenges.',
                },
                contactInfo: {
                    email: 'brandonkubick@gmail.com',
                    github: 'https://github.com/bkubick',
                    linkedIn: 'https://www.linkedin.com/in/brandonkubick/',
                }
            }
        }
    }

    render() {
        return (
            <div id='app' className='container mx-auto'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-2'>
                        <SummaryFrame user={ this.state.user }></SummaryFrame>
                    </div>
                    <div className='col-span-3'>
                        <DetailsFrame user={ this.state.user }></DetailsFrame>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
