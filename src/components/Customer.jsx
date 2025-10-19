import customer1 from "../assets/customer/customer1.png";
import customer2 from "../assets/customer/customer2.png";
import customer3 from "../assets/customer/customer3.png";
import customer4 from "../assets/customer/customer4.png";
import star from "../assets/star/star.png";

const Customer = () => {
  return (
    <div className="mb-230">
      <h1 className="text-6xl ml-25 mb-20">
        Customer <span className="text-green-900">Reviews</span>
      </h1>

      {/* -------------------------------------------- customer 1 ------------------------------------------- */}
      <div className="absolute w-150 h-70 border-green-800 border-3 ml-30 rounded-3xl">
        <p className="absolute mt-5 ml-27 text-2xl text-gray-600">
          James <span className="text-green-900">Thornton</span>
        </p>
        <img src={customer1} alt="customer" className="w-12 mt-3 ml-12" />
        <div className="w-122 h-0.5 ml-13 mt-4 bg-gray-300 mt-2"></div>
        <p className="ml-10 mt-8 text-gray-600 text-xl">
          "Owning a Rolex has always been a dream. The craftsmanship, weight,
          and precision of my Submariner remind me daily that true luxury is
          timeless."
        </p>
        <img src={star} alt="star" className=" absolute ml-42 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-47 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-52 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-57 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-62 w-5 mt-6" />
        <p className="text-xl text-green-900 ml-13 mt-5">Rating - 5/5</p>
      </div>

      {/* ----------------------------------------------------customer 2--------------------------------------------------------------- */}
      <div className="absolute w-150 h-70 border-green-800 border-3 ml-200 rounded-3xl">
        <p className="absolute mt-5 ml-27 text-2xl text-gray-600">
          Isabella <span className="text-green-900">Chen</span>
        </p>
        <img src={customer2} alt="customer" className="w-12 mt-3 ml-12" />
        <div className="w-122 h-0.5 ml-13 mt-4 bg-gray-300 mt-2"></div>
        <p className="ml-10 mt-8 text-gray-600 text-xl">
          "My Rolex Datejust isn’t just a watch — it’s a statement of confidence
          and heritage. Every glance at it feels like a reminder of success
          achieved with hard work."
        </p>
        <img src={star} alt="star" className=" absolute ml-42 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-47 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-52 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-57 w-5 mt-6" />
        <p className="text-xl text-green-900 ml-13 mt-5">Rating - 4/5</p>
      </div>

      {/* -------------------------------------customer 3----------------------------------------------- */}
      <div className="absolute w-150 h-70 border-green-800 border-3 ml-200 mt-90 rounded-3xl">
        <p className="absolute mt-5 ml-27 text-2xl text-gray-600">
          Aisha <span className="text-green-900">Khan</span>
        </p>
        <img src={customer3} alt="customer" className="w-12 mt-3 ml-12" />
        <div className="w-122 h-0.5 ml-13 mt-4 bg-gray-300 mt-2"></div>
        <p className="ml-10 mt-8 mr-2 text-gray-600 text-xl">
          "I gifted myself a Rolex for my promotion — the moment I wore it, I
          understood why it’s iconic. It’s not about luxury, it’s about legacy."
        </p>
        <img src={star} alt="star" className=" absolute ml-42 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-47 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-52 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-57 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-62 w-5 mt-6" />
        <p className="text-xl text-green-900 ml-13 mt-5">Rating - 5/5</p>
      </div>

      {/* -------------------------------------  customer 4 ----------------------------------------------  */}
      <div className="absolute w-150 h-70 border-green-800 border-3 ml-30 mt-90 rounded-3xl">
        <p className="absolute mt-5 ml-27 text-2xl text-gray-600">
          Michael <span className="text-green-900">Rossi</span>
        </p>
        <img src={customer4} alt="customer" className="w-12 mt-3 ml-12" />
        <div className="w-122 h-0.5 ml-13 mt-4 bg-gray-300 mt-2"></div>
        <p className="ml-10 mt-8 text-gray-600 text-xl">
          "I’ve worn many watches, but none feel as refined as my Rolex Oyster
          Perpetual. The smooth movement and subtle shine make it a piece I’ll
          cherish forever."
        </p>
        <img src={star} alt="star" className=" absolute ml-42 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-47 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-52 w-5 mt-6" />
        <img src={star} alt="star" className=" absolute ml-57 w-5 mt-6" />
        <p className="text-xl text-green-900 ml-13 mt-5">Rating - 4/5</p>
      </div>
    </div>
  );
};

export default Customer;
