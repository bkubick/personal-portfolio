import React from 'react';
import Logo from '../static/img/b_to_the_3_logo.svg';


interface Props {
}

interface State {
    activeSectionName: string;
}


class TopNav extends React.Component<Props, State> {

    sections: string[] = [
        'about',
        'experience',
        'education',
        'projects'
    ];

    constructor(props: Props) {
        super(props);
    }

    isSectionActive(section: string): boolean {
        return true;
    }

    activeCircle(): React.JSX.Element {
        return <span className="h-2 w-2 bg-primary rounded-full inline-block"></span>

    }

    navItem(section: string): React.JSX.Element {
        return (
            <div className='mx-2 text-center'>
                <div className='leading-4 text-sm uppercase font-bold'>
                    { section }
                </div>
                <div className="leading-4">
                    { this.isSectionActive(section) ? this.activeCircle() : '' }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="text-white flex">
                <Logo/>
                <div className='mx-5 flex my-2'>
                    { this.sections.map((section: string) => {
                        return this.navItem(section);
                    })}
                </div>
            </div>
        )
    }
}

export default TopNav;
