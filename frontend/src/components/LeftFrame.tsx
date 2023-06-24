import React from 'react';

import User from '@/interface/user';

import TopNav from './TopNav';



interface Props {
    user: User
}


interface State {}


class LeftFrame extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <TopNav></TopNav>
                { this.props.user.firstName } { this.props.user.lastName }
            </div>
        )
    }
}

export default LeftFrame;
