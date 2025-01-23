"use client";

import { fetchPublicExams } from "@/api/publicExams";
import { PublicExam } from "@/lib/types/publicExam";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import ExamsLoadingUI from "./ExamsLoadingUI";
import Link from "next/link";

const PublicExams = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["public-exams"],
    queryFn: fetchPublicExams,
    staleTime: Infinity,
  });

  const publicExams = data?.data?.exam;
  console.log(publicExams as unknown, isLoading, isError, error);

  if (isLoading) {
    return <ExamsLoadingUI />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const modifyExamTitle = (title: string) => {
    return title.replace(/\s/g, "-").toLowerCase();
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {publicExams?.map((exam: PublicExam, index: number) => {
          return (
            <Link key={index} href={`/${modifyExamTitle(exam?.title)}`}>
              <div
                key={index}
                className="bg-zinc-900 rounded-lg p-6 transition-transform hover:scale-105"
              >
                <Image
                  height={192}
                  width={192}
                  alt={exam?.title}
                  src={exam?.icon}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {exam?.affiliation} - {exam?.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PublicExams;
