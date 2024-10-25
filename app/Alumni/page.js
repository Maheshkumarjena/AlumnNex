"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Alumni from "@components/Alumni";
import AlumniCard from "@components/AlumniCard";
import alumniProfiles from "@app/StaticData";

const AlumniPage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`w-[100vw] pb-[5vw] ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className={`max-w-1500 px-[2vw] md:px-4 lg:px-6${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}>
        <div
          className={`pt-[3vw] ${
            isDarkMode ? "text-gray-300 bg-gray-900 " :  "text-gray-600"
          } outline-none focus:outline-none`}
        >
          <div className="relative flex">
            {/* drop down */}
            <div
              className={`justify-center h-10    items-center ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <details className="dropdown  inline-block relative">
                <summary
                  className={`  ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-300 text-gray-700"
                  } font-semibold py-2 px-4  inline-flex items-center`}
                >
                  <span className="mr-1 marker:content-none">Filter</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </summary>

                <ul
                  className={`dropdown-menu overflow-y-scroll max-h-[80vh] hidden-scrollbar min-w-[200px] glassmorphism absolute hidden ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } pt-1`}
                >
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>IT & Software</span>
                        </span>
                        <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                      </summary>

                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <div class="space-y-2">
                            <label class=" cursor-pointer  hover:bg-white/20 px-2  rounded-md flex justify-between items-center  gap-1">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">AI Enginner</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Full stack Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">ML Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Cybersecurity Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Blockchain  Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                          </div>
                        </ul>
                      </article>
                    </details>
                  </li>
                    {/* type 2 */}

                    
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>IT & Software</span>
                        </span>
                        <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                      </summary>

                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <div class="space-y-2">
                            <label class=" cursor-pointer  hover:bg-white/20 px-2  rounded-md flex justify-between items-center  gap-1">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">AI Enginner</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Full stack Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">ML Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Cybersecurity Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Blockchain  Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                          </div>
                        </ul>
                      </article>
                    </details>
                  </li>
                    {/* type 2 */}

                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>IT & Software</span>
                        </span>
                        <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                      </summary>

                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <div class="space-y-2">
                            <label class=" cursor-pointer  hover:bg-white/20 px-2  rounded-md flex justify-between items-center  gap-1">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">AI Enginner</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Full stack Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">ML Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Cybersecurity Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Blockchain  Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                          </div>
                        </ul>
                      </article>
                    </details>
                  </li>
                    {/* type 2 */}

                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>IT & Software</span>
                        </span>
                        <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                      </summary>

                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <div class="space-y-2">
                            <label class=" cursor-pointer  hover:bg-white/20 px-2  rounded-md flex justify-between items-center  gap-1">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">AI Enginner</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Full stack Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">ML Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Cybersecurity Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>
                            <hr></hr>
                            <label class=" cursor-pointer hover:bg-white/20 px-2  rounded-md flex justify-between items-center ">
                              <div class="flex items-center ">
                                <div class="flex items-center"></div>
                                <h2 class="text-sm">Blockchain  Engineer</h2>
                              </div>
                              <input
                                type="radio"
                                name="type"
                                class="checked:border-indigo-500 w-[25px] h-[20px] py-1"
                              />
                            </label>

                          </div>
                        </ul>
                      </article>
                    </details>
                  </li>
                    {/* type 2 */}


                </ul>
              </details>
            </div>

            <input
              type="search"
              name="search"
              placeholder="Search"
              className={`h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-500 text-gray-900"
              }`}
              autoComplete="off"
              spellCheck="false"
              required
              step="any"
              autoCapitalize="none"
              autoFocus
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <Alumni renderAll="true" />
    </div>
  );
};

export default AlumniPage;
