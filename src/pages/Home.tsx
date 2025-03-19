import { BentoHome } from "@/components/home/BentoHome";
import { Carousel } from "@/components/home/Carousel";
import { IntroHome } from "@/components/home/IntroHome";
import { Services } from "@/components/home/Services";

export const Home = () => {
  return (
    <>
      <Carousel />
      <div className="w-full px-5 lg:px-20">
        <IntroHome />
        <BentoHome />
        <Services />
      </div>
    </>
  );
};
