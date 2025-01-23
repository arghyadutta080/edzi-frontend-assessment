import ExamSubjects from "@/components/exam/ExamSubjects";
import React from "react";

type Params = {
  params: {
    exam: string;
  };
};

const ExamPage = ({ params: { exam } }: Params) => {
  return <ExamSubjects exam={exam} />;
};

export default ExamPage;
