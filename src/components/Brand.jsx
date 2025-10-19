import Brand1 from "../assets/images/Brand.png";
const Brand = () => {
  return (
    <div>
      <div>
        <div className="absolute tracking-wide text-4xl pt-60 pl-15 pr-200 text-white">
          A{" "}
          <span className="text-yellow-100 tracking-wide text-6xl">Legacy</span>{" "}
          of Timeless Excellence
        </div>
        <div className="absolute text-3xl pt-100 pl-15 mr-190 text-white">
          Since 1905, Rolex has defined precision, elegance, and innovation.
          Each watch is a masterpiece—crafted with Swiss expertise, built to
          last generations, and worn by those who achieve the extraordinary.
        </div>
        <h1 className="text-5xl pb-10 mr-20">
          Brand <span className="text-green-900">Story</span>
        </h1>
      </div>
      <div>
        <img src={Brand1} alt="Brand" className="rounded-2xl w-320 h-170" />
      </div>
    </div>
  );
};

export default Brand;
