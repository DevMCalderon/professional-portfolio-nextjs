import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Skills from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects-section";
import AboutMe from "@/components/about-me/about-me";

export default function Home() {
  return (
    <>
      <div className="bgBanner1">
        <Navbar />
        <main className="app-container">
          <Banner />
          <Skills />
          <ProjectsSection />
          <AboutMe />
        </main>
        <Contact />
      </div>
      Footer
    </>
  );
}
