import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterLaoyout = () => {
  return (
    <div  className=''>
     <Footer className='fixed bottom-0 py-5 px-5  bg-blue-950 rounded-none '>
      <div className="w-full ">
       
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright className='text-white' href="/" by="Abu Taher Hossain" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon className='text-white' href="#" icon={BsFacebook} />
            <Footer.Icon className='text-white' href="#" icon={BsInstagram} />
            <Footer.Icon className='text-white' href="#" icon={BsTwitter} />
            <Footer.Icon className='text-white' href="#" icon={BsGithub} />
            <Footer.Icon className='text-white' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
   
    
    </div>
  );
};

export default FooterLaoyout;