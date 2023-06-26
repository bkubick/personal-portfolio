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
        return false;
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
            <div className="text-white flex">
                <Logo className='logo'/>
                <div className='mx-5 flex my-2 xs:invisible visible md:invisible lg:visible'>
                    { this.sections.map((section: string) => {
                        return this.navItem(section);
                    })}
                </div>
            </div>
        )
    }
}

export default TopNav;
