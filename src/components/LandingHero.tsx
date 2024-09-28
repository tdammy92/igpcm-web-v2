import Hero from "../assets/images/heroicon.png";

const LandingHero = () => {
  return (
    <section className="max-w-full mt-3 mx-auto h-screen flex justify-center items-center bg-white relative">
      <div className="absolute inset-0 bg-green-200 opacity-20"></div>
      <div className="relative z-10 h-full flex  justify-center items-center px-4 w-full">
        <div className="w-full flex  md:flex h-[60%] ">
          <div className=" w-1/2 flex gap-8 flex-col  items-center justify-center ">

          <h1 className="text-xl font-semibold leading-relaxed text-green-600 text-center md:w-[45%]">
            At IGPCM We Train The Mind. Everyone experiences difficulty in
            different ways. Let IGPCM guide you in your path to achieving
            greatness.
          </h1>
          <button className=" bg-green-600 w-40 h-10 rounded-lg shadow-black shadow-sm text-white hover:bg-green-700 md:max-w-xs">
            Register
          </button>
          </div>
          <div className="flex w-1/2 ">

             <img
              src={Hero}
              className=" rounded-md md:rounded-3xl md:w-3/4"
              alt="A woman studying"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
