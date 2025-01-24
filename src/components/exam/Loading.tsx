import { Card, CardContent, Skeleton } from "../ui";


export const ClassInfoLoading = () => {
  return (
    <div className="flex items-start gap-6">
      <Skeleton className="w-[200px] h-[200px] bg-zinc-800 rounded-lg" />
      <div className="flex-1 space-y-4">
        <Skeleton className="h-8 w-48 bg-zinc-800" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-zinc-800" />
          <Skeleton className="h-4 w-[90%] bg-zinc-800" />
          <Skeleton className="h-4 w-[80%] bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export const SubjectGridLoading = () => {
  return (
    <div className="w-full space-y-8">
      <div className="space-y-6">
        <Skeleton className="h-7 w-32 bg-zinc-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              className="relative h-[200px] w-full bg-zinc-900 border-0"
            >
              <CardContent className="p-0">
                <Skeleton className="w-full h-full bg-zinc-800" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <Skeleton className="h-5 w-24 bg-zinc-800" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
