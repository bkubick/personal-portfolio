interface ContactInformation {
    email: string;
    github: string;
    linkedIn: string;
}


interface SummaryDetails {
    firstName: string;
    lastName: string;
    tagline: string;
    summary: string;
}


interface User {
    summaryDetails: SummaryDetails;
    contactInfo: ContactInformation;
}


export type { User, ContactInformation, SummaryDetails };
