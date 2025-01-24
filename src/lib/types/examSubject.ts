interface SubjectMetadata {
  tags: string[];
}

interface Subject {
  metadata: SubjectMetadata;
  _id: string;
  title: string;
  slug: string;
  icon: string;
}

export interface PublicExamSubject {
  metadata: Record<string, unknown>;
  _id: string;
  exam: Record<string, unknown>;
  subject: Subject;
  title: string;
  slug: string;
  icon: string;
  subjectTitle: string;
  bookOrdering: unknown[];
  subjectTitleSlug: string;
  description: string;
}
