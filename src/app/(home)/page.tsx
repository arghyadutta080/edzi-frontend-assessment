import PublicExams from "@/components/home/PublicExams";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* About Edzy Section */}
        <section>
          <h1 className="text-4xl font-bold mb-6">About Edzy</h1>
          <p className="text-gray-200 leading-relaxed">
            Edzy Class X NCERT offer a perfect blend of knowledge and
            creativity, covering essential subjects like English, Mathematics,
            Science, Social Science, Hindi, and Urdu. These books are designed
            to ignite curiosity with engaging stories, practical experiments,
            and thought-provoking lessons, while building strong foundations in
            critical thinking and problem-solving. From exploring the beauty of
            literature to unraveling scientific mysteries and understanding the
            workings of society, the curriculum ensures holistic development,
            making learning enjoyable and preparing students for future success.
            Dive into the world of NCERT and unlock your potential!
          </p>
        </section>

        {/* Classes Section */}
        <PublicExams />

        {/* Interactive Learning Modules Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Interactive Learning Modules
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Edzy offers a diverse range of interactive learning modules that
            cover all subjects and topics from the NCERT and CBSE syllabi. These
            modules are designed to engage students through animations,
            simulations, and quizzes, making learning fun and effective. With
            interactive exercises and real-time feedback, students can test
            their knowledge, reinforce their understanding, and track their
            progress in a dynamic and engaging way.
          </p>
        </section>

        {/* Revision Guides Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Revision Guides for Quick Recap
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Edzy provides comprehensive revision guides that summarize key
            concepts, formulas, and topics from each chapter of the NCERT and
            CBSE textbooks. These guides are designed to help students quickly
            recap important information before exams. They have been carefully
            crafted to include all essential points while keeping the content
            concise and easy to understand.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
