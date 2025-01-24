import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  exam: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ exam }) => {
  const modifyClassName = (exam: string) => {
    return exam
      .split("-")
      .map((word, i) => {
        if (i == 0) return word.charAt(0).toUpperCase() + word.slice(1);
        else return word.toUpperCase();
      })
      .join(" ");
  };

  return (
    <nav className="flex items-center gap-2 text-base text-gray-400 font-semibold">
      <Link href="/" className="hover:text-white transition-colors">
        Learn
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-500">{modifyClassName(exam)}</span>
    </nav>
  );
};

export default Breadcrumb;
