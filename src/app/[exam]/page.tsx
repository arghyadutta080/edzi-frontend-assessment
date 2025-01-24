import {Breadcrumb, ExamSubjects} from "@/components/exam";
import React from "react";

type Params = {
  params: {
    exam: string;
  };
};

const ExamPage = ({ params: { exam } }: Params) => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Breadcrumb exam={exam}/>
        <ExamSubjects exam={exam} />
      </div>
    </div>
  );
};

export default ExamPage;
