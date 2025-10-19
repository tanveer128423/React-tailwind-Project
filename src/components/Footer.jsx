import logo from "../assets/images/rolex.png";

import github from "../assets/svgs/github.svg";
import linkedIn from "../assets/svgs/linkedin.svg";


const Footer = () => {
  return (
    <div>
      <div>
      <div className="absolute mt-10 ml-2">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-11 rounded-[10px] ml-30 shadow-lg"
        />
        <div className="w-100">
        <p className="text-xl text-white mt-10 ml-30">
          Crafting timeless excellence since 1905. Every Rolex tells a story of
          precision, innovation, and prestige.
        </p>
        </div>
        
        <a href="https://github.com/tanveer128423">
        <img src={github} alt="github" className="absolute w-10 mt-7 ml-30"/>
        </a>
        <a href="https://www.linkedin.com/in/khalid-tanveer-04165b309/">
        <img src={linkedIn} alt="linkedIn" className="absolute w-10 mt-7 ml-45"/>
        </a>


      </div>
      <div className="w-389.5 h-110 bg-green-900 ml-1">
        <h1 className="absolute text-5xl text-underline text-white pl-5 mt-10 ml-40">
          ROLEX
        </h1>
        <div className="absolute ">
        <h1 className="text-2xl text-white ml-140 mt-10">Support</h1>
        <ol className="text-xl text-white ml-140 mt-10">
          <li>FAQs</li>
          <li>Warranty & Services</li>
          <li>Find a Store</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ol>
      </div>
        <div className="absolute ml-90">
        <h1 className="text-2xl text-white ml-140 mt-10">Navigate</h1>
        <ol className="text-xl text-white ml-140 mt-10">
          <li>Home</li>
          <li>Featured Collection</li>
          <li>Newly Crafted</li>
          <li>Customer Reviews</li>
        
        </ol>
      </div>
        <div className="absolute ml-170">
        <h1 className="text-2xl text-white ml-140 mt-10">Get In Touch</h1>
        <ol className="text-xl text-white ml-140 mt-10">
          <li>customer@rolex.com</li>
          <li>+93233244321</li>
        
        </ol>
      </div>
      <div className="text-white text-xl ml-170 pt-100">
        © Rolex. All Rights Reserved.
      </div>
      </div>
      
      </div>
      
      
    </div>
  );
};

export default Footer;
