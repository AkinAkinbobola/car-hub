import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
import Image from "next/image";

interface CustomButtonProps {
  type: "button" | "submit";
  containerStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  textStyles?: string;
  isDisabled?: boolean;
  rightIcon?: string;
}

const CustomButton = ({
  type,
  onClick,
  title,
  containerStyles,
  textStyles,
  isDisabled,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={cn("custom-btn", containerStyles)}
      onClick={onClick}
    >
      <span className={cn("flex-1", textStyles)}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
