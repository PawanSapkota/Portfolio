import About from "@/components/pagecomponents/about/About";
import Banner from "@/components/pagecomponents/banner/Banner";
import Toolbar from "@/components/navigation/Toolbar";
import React from "react";
import Resume from "@/components/pagecomponents/resume/Resume";
import Projects from "@/components/pagecomponents/projects/Projects";
import Footer from "@/components/pagecomponents/footer/Footer";
import Contact from "@/components/pagecomponents/contact/Contact";

const Home = () => {
  return (
    <div>
      <Toolbar />
      <div className="">
        <Banner />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
