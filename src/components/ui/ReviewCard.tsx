import { cn } from "@/lib/utils";

export const ReviewCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-52 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "flex flex-col items-center justify-center text-center",
      )}
    >
      <div>
        <figcaption className="text-lg font-medium dark:text-white mb-4">
          {name}
        </figcaption>
      </div>
      <img className="rounded-full" width="52" height="52" alt="" src={img} />
    </figure>
  );
};
