export interface Resume {
    work?: (WorkEntity)[] | null;
    awards?: (AwardsEntity)[] | null;
    basics: Basics;
    skills?: (SkillsEntity)[] | null;
    education?: (EducationEntity)[] | null;
    interests?: (InterestsEntity)[] | null;
    languages?: (LanguagesEntity)[] | null;
    volunteer?: (VolunteerEntity)[] | null;
    references?: (ReferencesEntity)[] | null;
    publications?: (PublicationsEntity)[] | null;
}

export interface WorkEntity {
    company: string;
    endDate: string;
    summary: string;
    website: string;
    position: string;
    startDate: string;
    highlights?: (string)[] | null;
}

export interface AwardsEntity {
    date: string;
    title: string;
    awarder: string;
    summary: string;
}

export interface Basics {
    name: string;
    email: string;
    label: string;
    phone: string;
    picture: string;
    summary: string;
    website: string;
    location: Location;
    profiles?: (ProfilesEntity)[] | null;
}

export interface Location {
    city: string;
    region: string;
    address: string;
    postalCode: string;
    countryCode: string;
}

export interface ProfilesEntity {
    url: string;
    network: string;
    username: string;
}

export interface SkillsEntity {
    name: string;
    level: string;
    keywords?: (string)[] | null;
}

export interface EducationEntity {
    gpa: string;
    area: string;
    courses?: (string)[] | null;
    endDate: string;
    startDate: string;
    studyType: string;
    institution: string;
}

export interface InterestsEntity {
    name: string;
    keywords?: (string)[] | null;
}

export interface LanguagesEntity {
    name: string;
    level: string;
}

export interface VolunteerEntity {
    endDate: string;
    summary: string;
    website: string;
    position: string;
    startDate: string;
    highlights?: (string)[] | null;
    organization: string;
}

export interface ReferencesEntity {
    name: string;
    reference: string;
}

export interface PublicationsEntity {
    name: string;
    summary: string;
    website: string;
    publisher: string;
    releaseDate: string;
}
  