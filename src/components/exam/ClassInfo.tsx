"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchPublicExam } from "@/api/publicExams";
import { PublicExam } from "@/lib/types/publicExam";
import { ClassInfoLoading } from "./Loading";
import { notFound } from "next/navigation";

type ClassInfoProps = {
  exam: string;
};

const ClassInfo: React.FC<ClassInfoProps> = ({ exam }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["public-exam", exam],
    queryFn: () => fetchPublicExam(exam),
    staleTime: Infinity,
  });

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

  const examData: PublicExam = data?.data?.exam;
  return (
    <div className="space-y-6">
      {isLoading ? (
        <ClassInfoLoading />
      ) : (
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <Card className="h-auto md:w-[200px] md:h-[200px] bg-zinc-900 border-0">
            <CardContent className="p-0">
              <Image
                src={examData?.icon}
                alt={`${examData?.affiliation} - ${examData?.slug}`}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{examData?.title}</h1>
            <p className="text-gray-400 leading-relaxed">
              Edzy Class {exam == "class-x" ? "Class X" : "Class XII"} NCERT
              offer a perfect blend of knowledge and creativity, covering
              essential subjects like English, Mathematics, Science, Social
              Science, Hindi, and Urdu. books are designed to ignite curiosity
              with engaging stories, experiments, and thought-provoking lessons,
              while building strong foundations in critical thinking and
              problem-solving. From exploring the beauty of literature to
              unraveling scientific mysteries and understanding the workin...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassInfo;
