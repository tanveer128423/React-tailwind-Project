import watch3 from "../assets/images/watch3.png";
import watch4 from "../assets/images/watch4.png";
import watch5 from "../assets/images/watch5.png";
import watch6 from "../assets/images/watch6.png";

const Collection = () => {
  return (
    <div className="pt-20 mb-250">
  
      <div className=" text-5xl mb-10 mr-20 ml-20">
        <h1>
          Featured <span className="text-green-900">Collection</span>
        </h1>
      </div>
      <div className="w-333 h-30 mt-90 bg-green-900 absolute">

      </div>
      {/* ----------------------------------------------------Outside Circle -------------------------------------------------------------- */}
      <div className=" mt-30">
        <div className="absolute w-180 h-180 bg-green-900 rounded-full ml-77  ">
          <div className="absolute w-130 h-130 bg-white rounded-full ml-25 mt-25 ">
            <h1 className="text-6xl text-green-900 mt-45 ml-32">Craft Your</h1>
            <h1 className="text-6xl text-green-900 ml-41 ">Choice</h1>
          </div>
        </div>
      </div>


      {/* -----------------------------------------------------  Watches ---------------------------------------------------------------------- */}
      <div>
        <div>
          <div className="absolute w-95 h-60 bg-white border-4 rounded-2xl border-green-900 ml-50 flex">
            <img
              src={watch3}
              alt="watch"
              className="w-27 h-48 bg-white rounded-xl ml-5 mt-5"
            />
            <h1>
              <span className="absolute mt-10 ml-5 text-4xl text-green-900">Day-Date 40</span>
            </h1>
            <p >
              <span className="absolute mt-24 ml-6 mr-2 text-gray-500 leading-none">
                Oyster, 40 mm, Everose gold
              </span>
            </p>
            <p>
              <span className="absolute mt-30 ml-6 text-gray-500 leading-none">
                Reference 228235
              </span>
            </p>
            <p>
              <span className="absolute mt-36 ml-6 text-gray-500 leading-none">$47,500 USD</span>
            </p>
          </div>
        </div>
        <div className="absolute w-95 h-60 bg-white border-4 rounded-2xl border-green-900 ml-188 flex ">
          <img
            src={watch4}
            alt="watch"
            className="w-27 h-48 rounded-xl ml-5 mt-5"
          />

            <h1>
              <span className="absolute mt-10 ml-5 text-4xl text-green-900">Day-Date 40</span>
            </h1>
            <p >
              <span className="absolute mt-24 ml-6 mr-2 text-gray-500 leading-none">
                Oyster, 40 mm, platinum
              </span>
            </p>
            <p>
              <span className="absolute mt-30 ml-6 text-gray-500 leading-none">
                Reference  228236
              </span>
            </p>
            <p>
              <span className="absolute mt-36 ml-6 text-gray-500 leading-none">$64,600 USD</span>
            </p>
          
        </div>

        <div className="absolute w-95 h-60 bg-white border-4 rounded-2xl border-green-900 ml-50 mt-110 flex">
          <img
            src={watch5}
            alt="watch"
            className="w-25 h-50 rounded-xl ml-5 mt-5"
          />

            <h1>
              <span className="absolute mt-10 ml-5 text-4xl text-green-900">Sky-Dweller</span>
            </h1>
            <p >
              <span className="absolute mt-24 ml-6 mr-2 text-gray-500 leading-none">
                Oyster, 42 mm, yellow gold
              </span>
            </p>
            <p>
              <span className="absolute mt-30 ml-6 text-gray-500 leading-none">
                Reference 336938
              </span>
            </p>
            <p>
              <span className="absolute mt-36 ml-6 text-gray-500 leading-none">$56,200 USD</span>
            </p>

        </div>
        <div className="absolute w-95 h-60 bg-white border-4 rounded-2xl border-green-900 ml-188 mt-110 flex">
          <img
            src={watch6}
            alt="watch"
            className="w-26 h-48 rounded-xl ml-5 mt-5"
          />

            <h1>
              <span className="absolute mt-10 ml-5 text-4xl text-green-900">Sky-Dweller</span>
            </h1>
            <p >
              <span className="absolute mt-24 ml-6 mr-2 text-gray-500 leading-none">
                Oyster, 42 mm, Everose gold
              </span>
            </p>
            <p>
              <span className="absolute mt-30 ml-6 text-gray-500 leading-none">
                Reference 336935
              </span>
            </p>
            <p>
              <span className="absolute mt-36 ml-6 text-gray-500 leading-none">$59,500 USD</span>
            </p>
        </div>
      </div>

    </div>
  );
};

export default Collection;
