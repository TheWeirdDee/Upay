import React from "react";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaChartBar,
  FaGlobe,
  FaCreditCard,
  FaHandHoldingUsd,
  FaCompass,
} from "react-icons/fa";
import transactionImg from "../../assets/Images/UpayFeaturess.png";
import atmCard from "../../assets/Images/UpayHero.png";

const cards = [
  {
    icon: <FaWallet />,
    title: "Get paid faster than ever",
    text: "UPay allows you to receive payments up to two days early, giving you quicker access to your money for daily needs.",
    image: transactionImg,
    overlayText: "Deposit Received",
    motion: { x: -100 },
  },
  {
    icon: <FaChartBar />,
    title: "Visualize your spending",
    text: "Monitor your expenses with easy-to-read charts. Stay on top of your finances and plan smarter every month.",
    chart: true,
    motion: { y: 100 },
  },
  {
    icon: <FaGlobe />,
    title: "Send money globally",
    text: "Transfer funds securely and instantly to any country of your choice using UPay’s seamless platform.",
    notifications: true,
    motion: { x: 100 },
  },
  {
    icon: <FaCreditCard />,
    title: "Use your UPay card anywhere",
    text: "Access your funds with our UPay Mastercard—accepted worldwide. Reliable, secure, and always ready.",
    cardImg: atmCard,
    motion: { y: -100 },
  },
  {
    icon: <FaCompass />,
    title: "Discover more with UPay",
    text: "Browse all the services UPay has to offer—from budgeting tools to financial education resources.",
    action: "Explore more",
    motion: { y: 150 },
  },
];

const IconWrapper = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-purple-900 text-white flex items-center justify-center text-xl mb-3">
    {icon}
  </div>
);

const UPayFeatures = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
        4 Quick Steps To Use Our UPay Services
      </h2>

      {/* First Row (2 Cards) */}
      <div className="flex flex-col md:flex-row md:justify-center md:gap-6 mb-6">
  {cards.slice(0, 2).map((card, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, ...card.motion }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-[40%] bg-purple-200 p-4 md:p-5 rounded-2xl shadow-md relative mb-6 md:mb-0"
    >
      <IconWrapper icon={card.icon} />
      <h3 className="text-lg font-semibold text-purple-900">{card.title}</h3>
      <p className="mt-2 text-sm text-purple-700">{card.text}</p>

      {card.image && (
 <div className="relative mt-4 h-[350px] rounded-xl overflow-hidden">
  <img
    src={card.image}
    alt="transaction"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] md:w-[450px] h-[480px] object-cover"
  />
 




    {/* Deposit Received */}
    <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 bg-white px-3 py-4 text-xs md:text-sm rounded-xl shadow text-purple-800 font-semibold flex items-center justify-between gap-0 w-[80%] md:w-[80%]">
      <div className="flex items-center gap-2">
        <div className="bg-purple-100 p-2 rounded-full text-purple-800 text-base">
          <FaHandHoldingUsd />
        </div>
        <span>Deposit Received</span>
      </div>
      <span className="text-purple-700 font-bold">$3,000</span>
    </div>

    {/* Semi-transparent duplicate */}
    <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 bg-white/30 px-0 py-2 text-xs md:text-sm rounded shadow text-purple-800 font-semibold flex items-center justify-between gap-0 w-[58%] md:w-[58%]">
      <div className="flex items-center gap-2">
        <div className="bg-purple-100 p-2 rounded-full text-purple-800/30 text-base">
          <FaHandHoldingUsd />
        </div>
        <span className="text-purple-800/30">Deposit Received</span>
      </div>
    </div>
  </div>
)}


      {card.chart && (
        <div className="flex items-end gap-2 h-28 mt-6 px-2">
          {[40, 100, 70, 90, 60].map((height, i) => (
            <div
              key={i}
              className="w-4 bg-purple-400 rounded-md"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      )}
    </motion.div>
  ))}
</div>



      {/* Second Row (3 Cards) */}
      <div className="w-full flex justify-center">
        <div className="w-[83%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.slice(2).map((card, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, ...card.motion }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: (index + 2) * 0.2 }}
                viewport={{ once: true }}
                className={`p-4 md:p-5 rounded-2xl shadow-md relative ${
                  index === 2 ? "bg-purple-900 text-white" : "bg-purple-50"
                }`}
              >
                <IconWrapper icon={card.icon} />
                <h3
                  className={`text-lg font-semibold ${
                    index === 2 ? "text-white" : "text-purple-900"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    index === 2 ? "text-purple-200" : "text-purple-700"
                  }`}
                >
                  {card.text}
                </p>

                {card.notifications && (
                  <div className="relative h-28 mt-6">
                    <div className="absolute top-0 left-0 w-36 h-16 bg-white rounded-lg shadow z-10 flex items-center justify-center text-purple-700 font-semibold text-sm">
                      USD $200 sent
                    </div>
                    <div className="absolute top-6 left-6 w-36 h-16 bg-white rounded-lg shadow z-0 flex items-center justify-center text-purple-500 font-medium text-sm">
                      New Transfer
                    </div>
                  </div>
                )}

                {card.cardImg && (
                  <div className="mt-6 relative h-36">
                    <img
                      src={card.cardImg}
                      alt="ATM Card"
                      className="absolute bottom-0 right-0 w-36 rounded-xl rotate-[15deg]"
                    />
                  </div>
                )}

                {card.action && (
                  <button className="mt-6 inline-block bg-white text-purple-800 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm">
                    {card.action} →
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPayFeatures;
