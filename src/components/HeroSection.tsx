import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { SpotlightPreview } from "./SpotlightEffect";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="red"
        />
        {/* Spotlight not Working */}
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quia iusto nulla eum necessitatibus id totam sapiente, ducimus
          deleniti voluptates nesciunt consequuntur reprehenderit fuga aliquam
          delectus aliquid aut! Harum, quas. Ut maiores explicabo corrupti,
          tempora corporis mollitia labore, itaque reiciendis exercitationem
          perferendis accusamus eius id maxime harum praesentium quia. Soluta!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem"> Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
