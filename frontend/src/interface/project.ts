import { Technology } from '@/interface/skill';
import { College } from '@/interface/school';
import Company from './company';
import StartEndData from './StartEndDate';


interface Project extends StartEndData {
    title: string;
    description: string;
    details: string[];
    technologies: Technology[];
    link?: string;
    associatedWith?: College | Company;
}


export type { Project };
