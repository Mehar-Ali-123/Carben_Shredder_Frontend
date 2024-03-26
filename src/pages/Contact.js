import React from "react";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <section
        className="h-96  bg-primary bg-opacity-10"
        // style={{ backgroundImage: `url(${PageHeader})` }}
      >
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
              Contact our support team
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-20 max-w-3xl">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl ">Get in Touch with Carbon Shredder</h1>
            <p className="text-lg leading-10 text-center">
              We're here to help you with a smaller carbon footprint. Whether
              you have questions, need support, or want to share your thoughts,
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-row py-20 gap-20">
            <div className="basis-full md:basis-6/12 my-auto pr-10">
              <ul className="flex flex-col gap-8 ">
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl ">General inquiries: </h1>
                    <p className="text-lg leading-10">
                      For any general questions about Carbon Shredder, our
                      services, or how we can assist you, please feel free to
                      reach out.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl ">Support requests: </h1>
                    <p className="text-lg leading-10">
                      If you're encountering issues or need assistance with our
                      calculator or subscription service, our dedicated team is
                      ready to offer you personalized support.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl ">Feedback and suggestions: </h1>
                    <p className="text-lg leading-10">
                      Your feedback is invaluable to us. If you have
                      suggestions, ideas, or feedback on how we can improve,
                      please don't hesitate to share.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl ">Stay connected: </h1>
                    <p className="text-lg leading-10">
                      Follow us on our social media channels to stay updated on
                      the latest news, tips, and insights in carbon reduction
                      and sustainability. At Carbon Shredder, your input is
                      essential in shaping a sustainable future. We're excited
                      to connect with you!
                    </p>
                  </div>
                </li>
              </ul>
              <div class="p-2 w-full pt-8 ">
                <span className="inline-flex">
                  <a className="text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="basis-full md:basis-6/12 ">
              <form className="  flex flex-col ">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Contact form
                </h2>
                <p className="leading-relaxed mb-5 text-black">
                  Fill out our easy-to-use contact form on this page. We aim to
                  respond to all inquiries promptly.
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-none h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
                <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
                  Submit
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  By clicking "Submit", you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section></section> */}
      <Hero />
      {/* <div className="basis-full md:basis-6/12 my-auto">
              <ul className="flex flex-col gap-8 ">
                <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl ">Address</h1>
                    <p className="text-lg leading-10">
                      Cecilia Chapman 711-2880 Nulla St.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl ">Phone</h1>
                    <p className="text-lg leading-10">+1 (866)-838-5838</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl ">Email</h1>
                    <p className="text-lg leading-10">
                      info@carbonshredder.com
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
    </>
  );
}
