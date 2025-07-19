import React from "react";
import { FaStar, FaApple, FaGooglePlay } from "react-icons/fa";
import PhoneUi from "../../assets/Images/UpayHero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-purple-100 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      
      <div className="w-full md:w-1/2 z-10 md:pr-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-8 md:mt-6">
          Next-gen finance in your pocket <br />
Bank less. Live more.
        </h1>

        <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-sm">
          Take control of your finances with smart tools and instant access to banking products — all made seamless with YouPay!
        </p>
 
        <div className="flex gap-3">
           
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all"
          >
            <FaApple size={22} />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px]">Download on the</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </a>

           
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all"
          >
            <FaGooglePlay size={22} className="text-green-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px]">Get it on</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </a>
        </div>

      
        <div className="flex items-start gap-3">
          <p className="text-4xl font-bold text-gray-900 leading-none mt-1">4.8</p>
          <div>
            <div className="flex text-yellow-400 gap-1.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={18} />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">990+ Reviews</p>
          </div>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        
        <div className="absolute w-[400px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border border-black/10 rounded-full animate-spin-slow z-0" />
        <div className="absolute w-[330px] h-[330px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] border border-black/5 rounded-full animate-spin-slower z-0" />

         
        <div className="relative z-10 w-[450px] md:w-[650px] lg:w-[650px]">
          <img
            src={PhoneUi}
            alt="Phone UI"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
