"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@store/features/theme/themeSlice";
const Footer = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div >

      <section
        className={`pt-[3vw] pb-7 w-full   ${
          theme === "light"
            ? "bg-white text-gray-900 border-gray-200"
            : "bg-gray-900 text-gray-100 border-gray-800"
        }`}
      >

<hr className=" py-3 m-auto w-[96%]"></hr>

        <div className="mx-auto max-w-[1500px] px-[2vw] md:px-4  m-auto">
          <div
            className={`grid grid-cols-1 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 pb-10 lg:pb-14 ${
              theme === "light"
                ? "divide-gray-200 border-b-2 border-gray-200"
                : "divide-gray-800 border-b-2 border-gray-800"
            }`}
          >
            <div className="lg:col-span-7 lg:pr-6 xl:pr-16">
              <h5
                className={`text-lg font-medium mb-7 ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                } max-md:text-center`}
              >
                Contact
              </h5>
              <div
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 ${
                  theme === "light"
                    ? "border-b-2 border-gray-200"
                    : "border-b-2 border-gray-800"
                }`}
              >
                <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                  <Link
                    className="flex flex-row h-5 items-center gap-3"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p
                      className={`text-base font-normal ${
                        theme === "light" ? "text-gray-900" : "text-gray-300"
                      }`}
                    >
                      61-A, Odisha, India.
                    </p>
                  </Link>
                </div>

                <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                  <Link
                    className="flex flex-row h-5 items-center gap-3"
                    href=""
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    <p
                      className={`text-base font-normal ${
                        theme === "light" ? "text-gray-900" : "text-gray-300"
                      }`}
                    >
                      +9xxxxxxxxx
                    </p>
                  </Link>
                </div>

                <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                  <Link
                    className="flex flex-row h-5 items-center gap-3"
                    href=""
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p
                      className={`text-base font-normal ${
                        theme === "light" ? "text-gray-900" : "text-gray-300"
                      }`}
                    >
                      alumnexus@gmail.com
                    </p>
                  </Link>
                </div>
              </div>

              <div
                className={`flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-14 xl:gap-24 pt-14 justify-between ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-gray-100"
                }`}
              >
                <div className="block">
                  <h6
                    className={`text-lg font-medium mb-7 max-md:text-center ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    AlumnNexus
                  </h6>
                  <ul className="flex flex-col max-md:items-center gap-6">
                    <li>
                      <Link
                        href="/"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="About"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Alumni"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Alumni
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Events"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h6
                    className={`text-lg font-medium max-md:text-center mb-7 ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    Products
                  </h6>
                  <ul className="flex flex-col max-md:items-center gap-6">
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Figma UI System
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Icons Assets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Responsive Blocks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Components Library
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h6
                    className={`text-lg font-medium max-md:text-center mb-7 ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    Resources
                  </h6>
                  <ul className="flex flex-col max-md:items-center gap-6">
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascritp:;"
                        className={`text-base font-normal transition-all duration-300 hover:text-blue-400 ${
                          theme === "light" ? "text-gray-900" : "text-gray-300"
                        } ${
                          theme === "light"
                            ? "focus-within:outline-0 focus-within:text-blue-400"
                            : "dark:focus-within:text-emerald-500"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-5  lg:pl-9 xl:pl-16 w-full col-middle-1 max-lg:row-start-1 ${
                theme === "light"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-gray-100"
              }`}
            >
              <Link
                href=""
                className={`mb-9 max-md:mx-auto max-md:flex max-md:w-full items-center justify-center ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                }`}
              ></Link>
              <h2
                className={`font-manrope font-semibold text-2xl max-md:text-center leading-9 mt-9 mb-5 ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                }`}
              >
                Join Our Newsletter for Exclusive Updates
              </h2>
              <p
                className={`text-base font-normal mb-8 ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                } max-md:text-center`}
              >
                Subscribe to Our Exclusive Newsletter for the Latest Updates
              </p>
              <div
                className={`relative max-w-xs max-md:max-w-full max-md:mx-auto mb-5 ${
                  theme === "light"
                    ? "text-gray-500 focus-within:text-gray-900"
                    : "text-gray-400 focus-within:text-gray-100"
                }`}
              >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="default-search"
                  className={`block w-full md:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs ${
                    theme === "light"
                      ? "text-gray-900  border-gray-300 placeholder-gray-900 bg-gray-200"
                      : "text-gray-100 bg-gray-700 border-gray-600 placeholder-gray-200"
                  } rounded-full focus:outline-none leading-relaxed`}
                  placeholder="alumnnexus@gmail.com"
                />
              </div>
              <button
                className={`py-2.5 px-7 max-md:w-full max-md:text-center rounded-full max-md:mx-auto flex items-center justify-center ${
                  theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-400 text-gray-900 hover:bg-blue-500"
                } text-base font-semibold mb-8 transition-all duration-500`}
              >
                Subscribe
              </button>
              <div
                className={`flex items-center max-md:justify-center gap-5 ${
                  theme === "light" ? "text-black" : "text-gray-100"
                }`}
              >
                <Link
                  href="javascript:;"
                  className={`p-2 rounded-full transition-all duration-500 ${
                    theme === "light"
                      ? "text-black hover:bg-blue-600 hover:text-white focus-within:bg-blue-600"
                      : "text-gray-100 hover:bg-blue-500 focus-within:bg-blue-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.5854 10.7242L19.79 3.66699H18.3197L12.9323 9.79466L8.62939 3.66699H3.6665L10.1733 12.9331L3.6665 20.3337H5.13687L10.8261 13.8626L15.3703 20.3337H20.3332L13.5851 10.7242H13.5854ZM11.5716 13.0147L10.9123 12.092L5.66666 4.75005H7.92505L12.1583 10.6753L12.8176 11.598L18.3204 19.2999H16.062L11.5716 13.0151V13.0147Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="javascript:;"
                  className={`p-2 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-500 ${
                    theme === "light"
                      ? "text-black hover:bg-blue-600 hover:text-white"
                      : "text-gray-100 hover:bg-blue-500"
                  }`}
                >
                  <p>
                    <FontAwesomeIcon
                      className="w-[23px] h-[23px]"
                      icon={faFacebook}
                    />
                  </p>
                </Link>
                <Link
                  href="javascript:;"
                  className={`px-2 py-1.5 rounded-full transition-all duration-500 ${
                    theme === "light"
                      ? "text-black hover:bg-blue-600 hover:text-white"
                      : "text-gray-100 hover:bg-blue-500"
                  }`}
                >
                  <p>
                    <FontAwesomeIcon
                      className="w-[23px] h-[23px]"
                      icon={faInstagram}
                    />
                  </p>
                </Link>
                <Link
                  href="javascript:;"
                  className={`px-2 py-1.5 rounded-full group transition-all duration-500 ${
                    theme === "light"
                      ? "text-black hover:bg-blue-600 hover:text-white"
                      : "text-gray-100 hover:bg-blue-500"
                  }`}
                >
                  <p>
                    <FontAwesomeIcon
                      className="w-[23px] h-[23px]"
                      icon={faYoutube}
                    />
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center pt-7 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            <p className="text-sm font-normal">
              <Link href="https://pagedone.io/">©AlumnNexus</Link> 2024, All
              rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
