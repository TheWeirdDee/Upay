import React from "react";
import "../../index.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 120000, suffix: "+", label: "Active Users" },
  { value: 85, suffix: "M", label: "Transactions Processed" },
  { value: 4.9, suffix: "/5", label: "User Rating" },
  { value: 150, suffix: "+", label: "Supported Countries" },

];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-blue-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative w-full overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[220px] text-center flex-shrink-0 mx-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </h2>
                <p className="text-sm text-gray-800 mt-1 playfair">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
