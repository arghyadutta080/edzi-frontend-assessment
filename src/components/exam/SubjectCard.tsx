import React from "react";
import { Card, CardContent } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

interface SubjectCardProps {
  title: string;
  image: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ title, image }) => {
  const truncateTitle = (title: string, length: number) => {
    if (title.length > length) {
      return title.slice(0, length) + "...";
    }

    return title;
  };
  return (
    <Link href="/" className="block group">
      <Card
        key={title}
        className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-zinc-700 rounded-lg transition-colors"
      >
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="py-6 px-2">
            <h3 className=" text-xs md:text-base font-semibold text-white text-center">
              {truncateTitle(title, 21)}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SubjectCard;
