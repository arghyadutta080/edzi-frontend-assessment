"use client";

import { fetchPublicExamSubjects } from "@/api/publicExamSubjects";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type ExamSubjectsProps = {
  exam: string;
};

const ExamSubjects: React.FC<ExamSubjectsProps> = ({ exam }) => {
    console.log(exam);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["public-exam-subjects", exam],
        queryFn: () => fetchPublicExamSubjects(exam),
        staleTime: Infinity,
    });

    console.log(data, isLoading, isError, error);
  return <div>ExamSubjects</div>;
};

export default ExamSubjects;
