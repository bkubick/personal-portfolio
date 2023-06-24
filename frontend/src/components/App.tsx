import React from 'react';

import User from '@/interface/user';
import LeftFrame from './LeftFrame';


interface Props {}


interface State {
    user: User;
}


class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Brandon',
                lastName: 'Kubick',
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
            <div id='app' className='container mx-auto my-10'>
                <LeftFrame user={ this.state.user }></LeftFrame>
            </div>
        )
    }
}

export default App;
