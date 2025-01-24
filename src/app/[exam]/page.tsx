import { fetchPublicExam } from "@/api/publicExams";
import { fetchPublicExamSubjects } from "@/api/publicExamSubjects";
import { Breadcrumb, ExamSubjects } from "@/components/exam";
import { getQueryClient } from "@/utils/functions/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

type Params = {
  params: {
    exam: string;
  };
};

const ExamPage = async ({ params: { exam } }: Params) => {
  // hydration for SSR, and SEO using separate dedicated QueryClient for server side data caching
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["public-exam-subjects", exam],
    queryFn: () => fetchPublicExamSubjects(exam),
  });
  await queryClient.prefetchQuery({
    queryKey: ["public-exam", exam],
    queryFn: () => fetchPublicExam(exam),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Breadcrumb exam={exam} />
          <ExamSubjects exam={exam} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default ExamPage;
