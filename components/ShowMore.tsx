"use client";

import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import { updateSearchParams } from "@/lib/utils";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          type="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
