import React from 'react';

import { User } from '@/interface/user';



interface Props {
    user: User
}


interface State {}


class DetailsFrame extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="">
            </div>
        )
    }
}

export default DetailsFrame;
