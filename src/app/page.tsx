import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { SpotlightPreview } from "@/components/SpotlightEffect";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

const Homepage = () => {
  return (
    <>
      <main className=" min-h-screen bg-black/[0.96] antialiased  text-white">
        <h1 className="opacity-[0]">Test</h1>
        <h1 className=" text-2xl text-center mt-[5rem]">This is Homepage</h1>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars />
      </main>
    </>
  );
};

export default Homepage;
