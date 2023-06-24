import React from 'react';

import User from '@/interface/user';



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
            <div className="text-white text-3xl font-bold underline">
                { this.props.user.firstName } { this.props.user.lastName }
            </div>
        )
    }
}

export default LeftFrame;
