import WhyChooseUsContentData from "@/data/WhyChooseUsData";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={WhyChooseUsContentData} />
    </div>
  );
};

export default WhyChooseUs;
