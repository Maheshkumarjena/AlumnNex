"use client";
import "@styles/globals.css";
import React from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";


const Page = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={` w-[100vw] ${
                theme === 'dark' ? 'bg-gray-900 ' : 'bg-white '
            } `}>

        <div
            className={`w-screen max-w-[1500px] ${
                theme === 'dark' ? 'bg-gray-900 ' : 'bg-white '
            }  py-8  shadow-xl  sm:mx-auto  sm:px-10`}
        >
            <div className="mx-auto px-[2vw] md:px-4">
                <div
                    className={`max-w-xl m-auto ${
                        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    } shadow-md rounded-lg p-8 w-full`}
                >
                    <h1 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Signup as
                    </h1>
                    <div className="flex flex-col gap-4">
                        {/* Students */}
                        <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                            <Link
                                href="Signup/Student"
                                className={`h-fit w-fit ${
                                    theme === 'dark'
                                        ? 'bg-blue-700 hover:bg-blue-800'
                                        : 'bg-[#0077b5] hover:bg-[#005582]'
                                } text-white py-2 px-4 rounded-lg shadow-md transition`}
                            >
                                Student
                            </Link>
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>Who should log in as student?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p
                                        className={`group-open:animate-fadeIn mt-3 ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                        }`}
                                    >
                                        Springerdata offers a variety of billing options, including monthly and annual
                                        subscription plans, as well as pay-as-you-go pricing for certain services.
                                        Payment is typically made through a credit card or other secure online payment
                                        method.
                                    </p>
                                </details>
                            </div>
                        </div>
                        {/* Alumni */}
                        <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                            <Link
                                href="Signup/Alumni"
                                className={`h-fit w-fit ${
                                    theme === 'dark'
                                        ? 'bg-green-700 hover:bg-green-800'
                                        : 'bg-[#0077b5] hover:bg-[#005582]'
                                } text-white py-2 px-4 rounded-lg shadow-md transition`}
                            >
                                Alumni
                            </Link>
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>Who should log in as Alumni?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p
                                        className={`group-open:animate-fadeIn mt-3 ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                        }`}
                                    >
                                        Springerdata offers a variety of billing options, including monthly and annual
                                        subscription plans, as well as pay-as-you-go pricing for certain services.
                                        Payment is typically made through a credit card or other secure online payment
                                        method.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className="signIn mt-10">
                        <Link
                            href="Login"
                            className="text-white font-bold rounded-lg shadow-md transition"
                        >
                            Already have an account ?
                        </Link>
                    </div>
                </div>

                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                    <div className="text-3xl font-bold py-5">
                        Common questions asked by users, <br /> Things to know before logging in
                    </div>

                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>What do you need to Signup?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p
                                className={`group-open:animate-fadeIn mt-3 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                }`}
                            >
                                Springerdata offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
                                typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>

                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>What do you need to Signup?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p
                                className={`group-open:animate-fadeIn mt-3 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                }`}
                            >
                                Springerdata offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
                                typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>

                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>What do you need to Signup?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p
                                className={`group-open:animate-fadeIn mt-3 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                }`}
                            >
                                Springerdata offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
                                typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>

                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>What do you need to Signup?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p
                                className={`group-open:animate-fadeIn mt-3 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                }`}
                            >
                                Springerdata offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
                                typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>

                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>What do you need to Signup?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p
                                className={`group-open:animate-fadeIn mt-3 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                                }`}
                            >
                                Springerdata offers a variety of billing options, including monthly and annual
                                subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
                                typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Page;
