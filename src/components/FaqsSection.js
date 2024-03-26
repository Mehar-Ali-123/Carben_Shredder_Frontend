import { Disclosure } from "@headlessui/react";
import Cal from "../assets/images/cal.png";

export default function FaqsSection() {
  return (
    <>
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              Frequently asked <span className="text-primary">questions</span>
            </h1>
          </div>
          <div className="flex flex-row ">
            <div className="basis-full  py-10 flex flex-col max-w-4xl mx-auto">
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                // style={{
                //   boxShadow:
                //     "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                // }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-black" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring items-center  bg-primary bg-opacity-10`}
                    >
                      <span>What happens once I subscribe?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500 bg-primary bg-opacity-10">
                      When you subscribe to our service, you help fund projects
                      that reduce carbon emissions. To keep you informed about
                      the progress made from your funding, you will have a
                      personalized dashboard.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                // style={{
                //   boxShadow:
                //     "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                // }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-black" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring  bg-primary bg-opacity-10 `}
                    >
                      <span>
                        How much does it cost to offset my carbon footprint?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500 bg-primary bg-opacity-10">
                      The amount you'll need to spend to offset your carbon
                      footprint depends on the amount of carbon emissions your
                      lifestyle generates and the cost of removing that carbon
                      from the atmosphere. This will be estimated by our
                      calculator. For every tonne of CO2 offset, the cost is $20
                      USD. It's worth noting that some users choose to offset
                      half or double their carbon footprint.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                // style={{
                //   boxShadow:
                //     "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                // }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-black" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring bg-primary bg-opacity-10  `}
                    >
                      <span>
                        What else can I do to help end the climate crisis?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500 bg-primary bg-opacity-10">
                      One of the best ways to combat climate change is by
                      reducing your carbon footprint and offsetting the
                      remainder. Additionally, it's important to educate others
                      about the seriousness of the issue, since many people are
                      not aware of its urgency. You can find useful educational
                      resources on Extinction Rebellion's website. Finally, it's
                      crucial to take political action by voting and contacting
                      your local representatives. Local governments often
                      respond more quickly, so consider reaching out to your
                      city council members and representatives to express your
                      concern about climate change.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                // style={{
                //   boxShadow:
                //     "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                // }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-black" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring  bg-primary bg-opacity-10 `}
                    >
                      <span>How does your business model work?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500 bg-primary bg-opacity-10">
                      When you subscribe, the majority of your payment (90%)
                      goes directly to Cnaught, an organization that manages
                      climate projects such as tree planting, rainforest
                      protection, and carbon capture. The remaining amount is
                      used to maintain and improve our platform, which is
                      dedicated to fulfilling our mission.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* <div className="basis-full md:basis-5/12">
              <img src={Cal} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
