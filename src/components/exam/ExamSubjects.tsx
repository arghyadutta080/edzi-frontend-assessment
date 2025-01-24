import React from "react";
import ClassInfo from "./ClassInfo";
import SubjectsGrid from "./SubjectGrid";

type ExamSubjectsProps = {
  exam: string;
};

const ExamSubjects: React.FC<ExamSubjectsProps> = ({ exam }) => {
  return (
    <>
      <ClassInfo exam={exam} />
      <SubjectsGrid exam={exam} />{" "}
    </>
  );
};

export default ExamSubjects;
