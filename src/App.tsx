import DownFooter from "./components/DownFooter";
import Footer from "./components/Footer";
import Header from "./components/Header"
import HomeContainer1 from "./components/HomeContainer1"
import HomeContainer2 from "./components/HomeContainer2";
import HomeContainer3 from "./components/HomeContainer3";
import HomeContainer4 from "./components/HomeContainer4";
import HomeContainer5 from "./components/HomeContainer5";
import HomeContainer6 from "./components/HomeContainer6";
import HomeContainer7 from "./components/HomeContainer7";
import HomeSpace1 from "./components/HomeSpace1";
import HomeSpace2 from "./components/HomeSpace2";
import HomeSpace3 from "./components/HomeSpace3";
import HomeSpace4 from "./components/HomeSpace4";
import HomeSpace5 from "./components/HomeSpace5";
import HomeSpace6 from "./components/HomeSpace6";
import UpHeader from "./components/UpHeader"
import './styles/fonts.css';
import './styles/index.css'

function App() {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#101010] text-[#ffffff]  h-full">
    <div className="col-span-1"></div>{/* отступ слева */}
    <div className="col-span-10 object-center">{/*Весь контент*/}
      <UpHeader/>
      <Header/>
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
      <Footer/>
      <DownFooter/>
    </div>
    <div className="col-span-1"></div>{/* отступ справа */}
  </div>
    </>
  )
}

export default App
