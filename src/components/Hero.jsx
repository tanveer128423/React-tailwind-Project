import watch2 from "../assets/images/watch2.png";
const Hero = () => {
  return (
    <div>
      <div className="absolute w-120 h-130 mt-10 bg-green-900 rounded-tl-full rounded-br-2xl shadow-lg ml-220"></div>
          <img
            src={watch2}
            alt="rolex-watch"
            className="absolute w-95 h-130 ml-234 rounded-tl-3xl rounded-br-3xl  border-1 border-green-900   shadow-lg object-cover"
          />

        <div className="ml-10 pb-20 w-370">
          <div className="ml-25 mt-20 font-judson mr-220 pt-20">
            <h1 className="text-6xl tracking-wide leading-[1.2]">
              Crafted for those who value
              <span className="text-green-900 "> Time </span>
              <span className="text-green-900 "> Precision.</span>
            </h1>
          </div>
          <div>
            <p className="ml-26 text-xl text-gray-700 mt-5 mr-240 font-sans">
              Discover the exquisite craftsmanship of Rolex watches, where every
              timepiece is a masterpiece of engineering and design.
            </p>
          </div>
          <div>
            <button className="bg-green-900 text-xl text-white py-2 px-4 rounded hover:bg-green-800 transition duration-200 ml-30 mt-10 w-35 shadow-lg transition delay-70 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Shop Now
            </button>
          </div>

        </div>
         

    </div>
  );
};

export default Hero;
