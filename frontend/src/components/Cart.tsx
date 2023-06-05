import React from 'react';


interface Props {}


interface State {
    isOpen: boolean;
}


class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                Random Cart
            </div>
        )
    }
}
