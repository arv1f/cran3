import DownFooter from "../components/DownFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpHeader from "../components/UpHeader";

function Contact() {
  return(
    <div className="grid grid-cols-12 bg-[#101010] z-0 text-[#ffffff] min-h-screen overflow-x-hidden">
      <div className="hidden lg:block col-span-1"></div>
      <div className="col-span-12 lg:col-span-10">
      <UpHeader />
      <Header />

      <Footer />
      <DownFooter/>
      </div>
      <div className="hidden lg:block lg:col-span-1"></div>
    </div>
  );
};
export default Contact;