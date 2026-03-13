import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Impacts from "@/components/impacts/impacts";
import Partners from "@/components/partners/partners";
import Testimonial from "@/components/testimonial/testimonial";
import Blog from "@/components/blog/blog";
import React from "react";

const Main = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Impacts />
      <Partners />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default Main;
