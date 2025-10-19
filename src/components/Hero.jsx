import watch2 from "../assets/images/watch2.png";
const Hero = () => {
  return (
    <div className="">
      <div className="absolute w-110 h-120 mt-10 bg-green-900 rounded-tl-full rounded-br-2xl shadow-lg ml-200"></div>
      <img
        src={watch2}
        alt="rolex-watch"
        className="absolute w-80 h-115 ml-218 rounded-tl-3xl rounded-br-3xl border-1 border-green-900 shadow-lg object-cover"
      />

      <div className="ml-15 pb-20">
        <div className="ml-15 mt-10 font-judson mr-190 pt-20">
          <h1 className="text-6xl tracking-wide leading-[1]">
            Crafted for those who value
            <span className="text-green-900 "> Time </span>
            and
            <span className="text-green-900 "> Precision.</span>
          </h1>
        </div>
        <div>
          <p className="ml-15 text-xl text-gray-700 mt-5 mr-220 font-sans">
            Discover the exquisite craftsmanship of Rolex watches, where every
            timepiece is a masterpiece of engineering and design.
          </p>
        </div>
        <div>
          <button className="bg-green-900 text-xl text-white py-2 px-4 rounded hover:bg-green-800 transition duration-200 ml-20 mt-10 w-35 shadow-lg transition delay-70 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
