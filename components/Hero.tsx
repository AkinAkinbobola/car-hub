"use client";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scroll({ behavior: "smooth" });
    }
  };
  return (
    <div className={"hero"}>
      <div className={"flex-1 pt-36 padding-x"}>
        <h1 className={"hero__title"}>
          Find, book or rent a car — quickly and easily!
        </h1>

        <p className={"hero__subtitle"}>
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title={"Explore Cars"}
          containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
          onClick={handleScroll}
          type={"button"}
        />
      </div>

      <div className={"hero__image-container"}>
        <div className={"hero__image"}>
          <Image
            src={"/hero.png"}
            alt={"Hero Image"}
            fill
            className={"object-contain"}
          />
          <div className={"hero__image-overlay"}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
