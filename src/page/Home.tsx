import DownFooter from "../components/DownFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContainer1 from "../components/Home/HomeContainer1";
import HomeContainer2 from "../components/Home/HomeContainer2";
import HomeContainer3 from "../components/Home/HomeContainer3";
import HomeContainer4 from "../components/Home/HomeContainer4";
import HomeContainer5 from "../components/Home/HomeContainer5";
import HomeContainer6 from "../components/Home/HomeContainer6";
import HomeContainer7 from "../components/Home/HomeContainer7";
import HomeSpace1 from "../components/Home/HomeSpace1";
import HomeSpace2 from "../components/Home/HomeSpace2";
import HomeSpace3 from "../components/Home/HomeSpace3";
import HomeSpace4 from "../components/Home/HomeSpace4";
import HomeSpace5 from "../components/Home/HomeSpace5";
import HomeSpace6 from "../components/Home/HomeSpace6";
import UpHeader from "../components/UpHeader";


function Home() {
    return (
    <div className="grid grid-cols-12 bg-[#101010] z-0 text-[#ffffff] min-h-screen overflow-x-hidden">
      <div className="hidden lg:block col-span-1"></div>
      <div className="col-span-12 lg:col-span-10">
      <UpHeader />
      <Header />

      <HomeContainer1/>
      <HomeSpace1/>
      <HomeContainer2/>
      <HomeSpace2/>
      <HomeContainer3/>
      <HomeSpace3/>
      <HomeContainer4/>
      <HomeSpace4/>
      <HomeContainer5/>
      <HomeSpace5/>
      <HomeContainer6/>
      <HomeSpace6/>
      <HomeContainer7/>
      
      <Footer />
      <DownFooter/>
      </div>
      <div className="hidden lg:block lg:col-span-1"></div>
    </div>
  );
};
export default Home;