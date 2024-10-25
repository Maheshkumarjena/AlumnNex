"use client";
import { useSelector } from "react-redux";

const Events = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`w-[100vw]  ${isDarkMode ? "bg-gray-900" : "bg-white"}`} >

    <div className={` max-w-[1500px]  ${isDarkMode ? "bg-gray-900" : "bg-white"} p-4`}>
      <h2 className="text-3xl px-[2vw] md:px-4 lg:px-6 text-white font-bold mb-12">Events</h2>
      <div className="flex flex-col grid-cols-9  m-auto md:grid px-[2vw] md:px-4 lg:px-6">
      
        <div className="flex md:contents flex-row-reverse">
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
            <p className="mt-2 leading-6">Description of the first event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            > 
              Date 1
            </span>
          </div>
          
          <div className="relative col-start-5 col-end-6 mr-7       md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              >
              </div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0a5f8c]" : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              ></div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0073B1] " : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-6 col-end-10 mr-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
            <p className="mt-2 leading-6">Description of the second event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            >
              Date 2
            </span>
          </div>
        </div>

        {/*  ............................................................................................................................. */}
      
        <div className="flex md:contents flex-row-reverse">
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
            <p className="mt-2 leading-6">Description of the first event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            >
              Date 1
            </span>
          </div>
          
          <div className="relative col-start-5 col-end-6 mr-7       md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              >
              </div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0a5f8c]" : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              ></div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0073B1] " : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-6 col-end-10 mr-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
            <p className="mt-2 leading-6">Description of the second event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            >
              Date 2
            </span>
          </div>
        </div>

        {/*  ............................................................................................................................. */}
      
        <div className="flex md:contents flex-row-reverse">
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
            <p className="mt-2 leading-6">Description of the first event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            >
              Date 1
            </span>
          </div>
          
          <div className="relative col-start-5 col-end-6 mr-7       md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              >
              </div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0a5f8c]" : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div
                className={`w-1 h-full ${
                  isDarkMode
                    ? "bg-gradient-to-b from-[#0073B1] to-[#005582]"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                } rounded-t-full`}
              ></div>
            </div>
            <div
              className={`absolute w-6 h-6 -mt-3 ${
                isDarkMode ? "bg-[#1A1D23] border-[#0073B1] " : "bg-white border-gray-800"
              } border-4  rounded-full top-1/2`}
            ></div>
          </div>
          <div
            className={`relative p-4 my-6 ${
              isDarkMode ? "text-white bg-[#1A1D23]" : "text-gray-800 bg-white"
            } rounded-xl col-start-6 col-end-10 mr-auto`}
          >
            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
            <p className="mt-2 leading-6">Description of the second event.</p>
            <span
              className={`absolute text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              } -top-5 left-2 whitespace-nowrap`}
            >
              Date 2
            </span>
          </div>
        </div>

        {/*  ............................................................................................................................. */}

      </div>
    </div>
    </div>

  );
};

export default Events;
