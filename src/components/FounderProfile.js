import React from "react";
import FounderImage from "../assets/images/founder-img.jpeg";

export default function FounderProfile() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={FounderImage}
          />
          <div className="text-center lg:w-2/3 w-full">
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1> */}
            <p className="mb-8 leading-relaxed text-lg font-medium">
              <span className="text-primary">Thijn Felix </span>is a dynamic
              entrepreneur and strategic consultant with a passion for solving
              ESG and Energy Transition challenges. With a background that spans
              international business and entrepreneurship, Thijn brings a global
              perspective to his commitment to sustainable practices.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAjTFJABBYJfI0RN-BmRLu5NuJRnKPI0ses&keywords=thijn%20felix&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=56521ebe-39af-4928-a116-da83baafb6d6&sid=n9d&spellCorrectionEnabled=true"
                className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center"
                target="_blank"
              >
                View more on Linkedin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin ml-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
