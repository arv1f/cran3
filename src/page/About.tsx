import UpHeader from "../components/UpHeader";
import Header from "../components/Header";
import AboutContainer1 from "../components/About/AboutContainer1";
import AboutSpace2 from "../components/About/AboutContainer2";
import AboutContainer2 from "../components/About/AboutContainer2";
import AboutContainer3 from "../components/About/AboutContainer3";
import AboutSpace1 from "../components/About/AboutSpace1";
import AboutSpace3 from "../components/About/AboutSpace3";




import Footer from "../components/Footer";
import DownFooter from "../components/DownFooter";

function About() {
  return(
    <div className="grid grid-cols-12 bg-[#101010] z-0 text-[#ffffff] min-h-screen overflow-x-hidden">
      <div className="hidden lg:block col-span-1"></div>
      <div className="col-span-12 lg:col-span-10">
      <UpHeader />
      <Header />

      <AboutContainer1/>
      <AboutSpace1/>
      <AboutContainer2/>
      <AboutSpace2/>
      <AboutContainer3/>
      <AboutSpace3/>

      <Footer />
      <DownFooter/>
      </div>
      <div className="hidden lg:block lg:col-span-1"></div>
    </div>
  );
};
export default About;