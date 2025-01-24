import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SubjectCardProps {
  title: string;
  image: string;
//   color: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ title, image }) => {
  return (
    <Link href="#" className="block group">
      <Card
        key={title}
        className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors"
      >
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-white text-center">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SubjectCard;