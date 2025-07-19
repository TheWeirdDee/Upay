import React from 'react';
import {
  FiHome,
  FiCreditCard,
  FiBell,
  FiSettings,
  FiPlus
} from 'react-icons/fi';

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Echo Spiral Background Behind Phone */}
      <div className="absolute -z-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#B7F6EC] to-[#FFF1D7] rounded-full blur-[100px] top-10 left-10 opacity-50"></div>
      <div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#B7F6EC] to-[#FFF1D7] rounded-full blur-[120px] top-0 left-0 opacity-50"></div>

      {/* Phone Frame */}
      <div className="relative z-10 w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-xl border border-gray-200 overflow-hidden flex flex-col">
        {/* Scrollable App Content */}
        <div className="flex-1 overflow-y-auto px-5 pt-6 pb-20 space-y-6">
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Good Morning,</p>
              <h3 className="text-sm font-semibold text-gray-800">Casey Kaspol</h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>

          {/* Cards */}
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            <div className="min-w-[160px] h-[100px] rounded-xl bg-gradient-to-br from-gray-800 to-black text-white p-4 flex flex-col justify-between shadow-md">
              <span className="text-xs">Family</span>
              <span className="text-xl font-bold">$2,300.00</span>
            </div>
            <div className="min-w-[160px] h-[100px] rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white p-4 flex flex-col justify-between opacity-70">
              <span className="text-xs">Salary</span>
              <span className="text-xl font-bold">$1,320.00</span>
            </div>
          </div>

          {/* Activity Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Recent Activity</h4>
            <div className="flex space-x-4 text-sm text-gray-400 mb-4">
              <button className="text-black border-b-2 border-black pb-1">Today</button>
              <button>This Week</button>
              <button>This Month</button>
              <button>All</button>
            </div>

            {/* Transactions */}
            <div className="space-y-4">
              {[
                { name: 'Netflix', amount: '-$73', bg: 'bg-red-500' },
                { name: 'Dribbble Pro', amount: '-$230', bg: 'bg-pink-400' },
                { name: 'Apple Music', amount: '-$64', bg: 'bg-purple-500' },
                { name: 'Figma', amount: '-$18', bg: 'bg-indigo-500' },
                { name: 'Spotify', amount: '-$99', bg: 'bg-green-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${item.bg} text-white rounded-full flex items-center justify-center font-bold`}>
                      {item.name[0]}
                    </div>
                    <span className="text-gray-800">{item.name}</span>
                  </div>
                  <span className="text-red-500">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Add Button */}
        <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl z-10 shadow-lg">
          <FiPlus />
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white px-5 py-3 border-t flex justify-between text-gray-400 text-xl">
          <FiHome />
          <FiCreditCard />
          <div className="w-6" /> {/* Spacer */}
          <FiBell />
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
