interface ContactInformation {
    email: string;
    github: string;
    linkedIn: string;
}


interface User {
    firstName: string;
    lastName: string;

    contactInfo: ContactInformation;
}


export default User;
