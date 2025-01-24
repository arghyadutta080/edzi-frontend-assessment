import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-full h-[300px] mb-8">
          <Image
            src="https://www.edzy.ai/error-1.svg"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          The page you are looking for is not found
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          It seems we&apos;ve hit a little bump on the road to learning. But
          don&apos;t worry, we&apos;ll get you back on track!
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
