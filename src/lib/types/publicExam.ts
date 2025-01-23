export interface PublicExam {
    affiliation: string;
    icon: string;
    isActive: boolean;
    metadata: {
        synopsis: string;
        tags: string[];
    };
    slug: string;
    studyOrder: number;
    title: string;
    _id: string;
}
