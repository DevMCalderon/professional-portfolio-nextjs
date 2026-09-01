import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Skills from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects-section";
import AboutMe from "@/components/about-me/about-me";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      {/* pendiente crear las clases personalizadas de este archivo */}
      <div
      // className=" bg-[linear-gradient(to_right,rgba(11,4,34,0.82),rgba(21,2,25,0.4)),url('/images/bg1.jpg')]
      // bg-top bg-cover bg-no-repeat bg-fixed"
      >
        <Navbar />
        <main>
          <div className="backdrop-blur-[0.2rem]">
            <Banner />
            <Skills />
          </div>
          <ProjectsSection />
          <AboutMe />
        </main>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
