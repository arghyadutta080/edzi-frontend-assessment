"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import SubjectCard from "./SubjectCard";
import { fetchPublicExamSubjects } from "@/api/publicExamSubjects";
import { PublicExamSubject } from "@/lib/types/examSubject";
import { SubjectGridLoading } from "./Loading";
import { notFound } from "next/navigation";

type SubjectGridProps = {
  exam: string;
};

const SubjectsGrid: React.FC<SubjectGridProps> = ({ exam }) => {
  const { data, isLoading, isError, error, isFetching } =
    useQuery({
      queryKey: ["public-exam-subjects", exam],
      queryFn: () => fetchPublicExamSubjects(exam),
      staleTime: Infinity,
      retry: false,
    });

//   console.log(data, isLoading, isError, error, isFetching, isPending, isPaused);

  if (isFetching) {
    notFound();
  }

  if (isError) {
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching health status"}
      </div>
    );
  }

  const subjects = data?.data?.examSubject.map((subject: PublicExamSubject) => {
    return {
      title: subject?.subject?.title,
      image: subject?.subject?.icon,
    };
  });
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <SubjectGridLoading />
        ) : (
          subjects?.map((subject: { title: string; image: string }) => (
            <SubjectCard key={subject.title} {...subject} />
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectsGrid;
