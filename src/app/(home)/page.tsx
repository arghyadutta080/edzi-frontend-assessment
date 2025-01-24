import React from "react";
import { fetchPublicExams } from "@/api/publicExams";
import { getQueryClient } from "@/utils/functions/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  AboutSection,
  LearningModule,
  PublicExams,
  RevisionGuide,
  ServerHealthStatus,
} from "@/components/home";

const HomePage: React.FC = async () => {
  // hydration for SSR, and SEO using separate dedicated QueryClient for server side data caching
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["public-exams"],
    queryFn: fetchPublicExams,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen bg-black text-white px-4 py-12 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Edzy Section */}
          <AboutSection />
          
          {/* checking serever health */}
          <ServerHealthStatus/>

          {/* Classes Section */}
          <PublicExams />

          {/* Interactive Learning Modules Section */}
          <LearningModule />

          {/* Revision Guides Section */}
          <RevisionGuide />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default HomePage;
