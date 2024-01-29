import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Container from "./Container";

const FooterLaoyout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer className=" py-5 px-5  bg-blue-950 rounded-none ">
      <Container>
        <div className=" flex flex-col items-center gap-2 md:w-full md:flex-row md:justify-evenly ">
          <Footer.Copyright
            className="text-white"
            href="/"
            by="Abu Taher Hossain"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
            <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default FooterLaoyout;
