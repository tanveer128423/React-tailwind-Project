import watch7 from "../assets/images/watch7.png";
import watch10 from "../assets/images/watch10.png";
import watch8 from "../assets/images/watch8.png";
import watch9 from "../assets/images/watch9.png";
import watch13 from "../assets/images/watch13.png";
import watch14 from "../assets/images/watch14.png";

const New = () => {
  return (
    <div className="pb-300 ">
      <div>
        <h1 className="absolute text-5xl ml-39">
          Newly <span className="text-green-900">Crafted</span>
        </h1>
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/455/907/non_2x/crown-on-transparent-background-free-png.png"
          alt="crown"
          className="w-15 ml-20"
        />
      </div>

      {/* ----------------------------watches---------------------------------------*/}
      <div className="absolute bg-transparant border-2 w-130 h-75 border-green-800 shadow-lg ml-25 mt-30 rounded-2xl">
        <div className="absolute w-40 h-40 bg-green-900 rounded-tr-full ml-10 mt-28 shadow-lg"></div>
        <img
          src={watch7}
          alt="watch"
          className="absolute w-26 h-54 ml-16 mt-8 border-1 border-green-900 rounded-tr-2xl rounded-bl-2xl "
        />
        
        <div className="absolute ml-65 mt-15">
          <h1 className="text-4xl text-green-900 mb-8">Datejust 31</h1>
          <p className="text-xl leading-none mb-1 text-gray-500">
            Oyster, 31 mm, yellow gold and diamonds
          </p>
          <p className="text-xl text-gray-500">Reference 278288RBR</p>
          <p className="text-2xl text-gray-500 mt-1">$49,900 USD</p>
        </div>
      </div>

      <div className="absolute bg-transparant border-2 w-130 h-75 border-green-800 shadow-lg ml-180 mt-30 rounded-2xl">
        <div className="absolute w-40 h-40 bg-green-900 rounded-tr-full ml-10 mt-28 shadow-lg"></div>
        <img
          src={watch10}
          alt="watch"
          className="absolute w-28 h-54 ml-15 mt-8 border-1 border-green-900 rounded-tr-2xl rounded-bl-2xl "
        />
        <div className="absolute ml-66 mt-13">
          <h1 className="text-4xl text-green-900 mb-9">Oyster Perpetual 28</h1>
          <p className="text-xl leading-none mb-1 text-gray-500">
            Oyster, 28 mm, Oystersteel
          </p>
          <p className="text-xl text-gray-500">Reference 276200</p>
          <p className="text-2xl text-gray-500 mt-1">$5,800 USD</p>
        </div>
      </div>

{/* -----------------------------------four watches----------------------------------------------------------------------------- */}


      <div>
        <div className="absolute w-55 h-110 bg-transparant border-2 border-green-900 mt-150 ml-20 rounded-tl-4xl rounded-tr-4xl">
          <div className="absolute bg-green-900 w-55 h-80 mt-30 rounded-tl-full rounded-tr-full">
            <div className=" ml-6 mt-30">
              <p className="text-2xl text-white ml-3">GMT-Master II</p>
              <p className="text-[#F5F5DC] leading-none mt-5 mb-1">
                Oyster, 40 mm, white gold
              </p>
              <p className="text-[#F5F5DC] ml-2 ">Reference 126729VTNR</p>
              <p className="text-[#F5F5DC] ml-9 text-xl mt-1">₹ 4,412,500</p>
            </div>
          </div>
        </div>
        <div>
          
          <img
            src={watch9}
            alt="watch"
            className="absolute w-40 h-65 ml-27 mt-140 rounded-xl border-2 border-green-900"
          />
        </div>
      </div>

      <div className="ml-80">
        <div className="absolute w-55 h-110 bg-transparant border-2 border-green-900 mt-150 ml-20 rounded-tl-4xl rounded-tr-4xl">
          <div className="absolute bg-green-900 w-55 h-80 mt-30 rounded-tl-full rounded-tr-full">
            <div className=" ml-3 mt-29">
              <p className="text-2xl text-white ml-18">1908</p>
              <p className="text-[#F5F5DC] leading-none mt-5 ml-5">
                39 mm, 18 ct yellow gold,
              </p>
              <p className="text-[#F5F5DC] ml-13"> polihed finish</p>
              <p className="text-[#F5F5DC] ml-11">Reference 52508</p>
              <p className="text-[#F5F5DC] ml-13 text-xl mt-1">₹ 3,295,000</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={watch13}
            alt="watch"
            className="absolute w-38 h-65 ml-29 mt-140 rounded-xl border-2 border-green-900"
          />
        </div>
      </div>
      <div className="ml-160">
        <div className="absolute w-55 h-110 bg-transparant border-2 border-green-900 mt-150 ml-20 rounded-tl-4xl rounded-tr-4xl">
          <div className="absolute bg-green-900 w-55 h-80 mt-30 rounded-tl-full rounded-tr-full">
            <div className=" ml-2 mt-29">
              <p className="text-2xl text-white ml-10">Cosmograph</p>
              <p className="text-2xl text-white ml-15"> Daytona</p>
              <p className="text-[#F5F5DC] leading-none mt-5 ml-4">
                Oyster, 40 mm, yellow gold
              </p>
              <p className="text-[#F5F5DC] ml-8 ">Reference 126518LN</p>
              <p className="text-[#F5F5DC] ml-13 text-xl mt-1">₹ 3,431,000</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={watch14}
            alt="watch"
            className="absolute w-38 h-65 ml-29 mt-140 rounded-xl border-2 border-green-900"
          />
        </div>
      </div>
      <div className="ml-245">
        <div className="absolute w-55 h-110 bg-transparant border-2 border-green-900 mt-150 ml-20 rounded-tl-4xl rounded-tr-4xl">
          <div className="absolute bg-green-900 w-55 h-80 mt-30 rounded-tl-full rounded-tr-full">
            <div className=" ml-5 mt-29">
              <p className="text-2xl text-white ml-3">Land-Dweller 40</p>
              <p className="text-[#F5F5DC] leading-none mt-5 ml-1">
                Oyster, 40 mm, Oystersteel 
              </p>
              <p className="text-[#F5F5DC] ml-10">and white gold</p>
              <p className="text-[#F5F5DC] ml-8">Reference 127334</p>
              <p className="text-[#F5F5DC] ml-12 text-xl mt-1">₹1,409,000</p>
            </div>
          </div>
          
        </div>
        <img
            src={watch8}
            alt="watch"
            className="absolute w-36 h-65 ml-30 mt-140 rounded-xl border-2 border-green-900"
          />
        <div>
          
        </div>
      </div>
    </div>

    // -------------------------testing ---------------------------------------------------------
  );
};

export default New;
