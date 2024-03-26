import React from "react";

export default function TrackYourCarbonImpact() {
  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
            How to track your carbon impact
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-24 max-w-5xl">
          <p className="text-lg text-black pb-10">
            At Carbon Shredder we believe in empowering our customers with the
            tools and information they need to make a real impact on the
            environment. Our personalised carbon dashboard and tracking system
            are designed to do just that. Here’s how you can use these tools to
            monitor your carbon footprint and the effectiveness of your offset
            efforts:
          </p>

          <div className="grid grid-cols-1 gap-8 border-l-2 pl-16 relative">
    
          {/* Step 1:Accessing your personalized dashboard */}
          <div className="bg-white rounded-lg shadow-lg p-8  ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">
                <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 1</p> 
                  <h1 className="text-2xl font-semibold ">
                  Accessing your personalized dashboard
                  </h1>
                </div>
              </div>
              <div className="basis-8/12">
                <div className="flex items-center ">
                <p className="text-lg text-black">
                <b> Easy Login: </b>Access your personalized dashboard with a
                secure login. This dashboard is your central hub for tracking
                and managing your carbon footprint and offset activities.
              </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2:Understanding your carbon footprint */}
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">

              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 2</p> 
                  <h1 className="text-2xl font-semibold ">
                  Understanding your carbon footprint
                  </h1>
                </div>
             
              </div>
              <div className="basis-8/12">
              <p className="text-lg mb-4">
              <b> Real-Time Tracking: </b>The dashboard displays your current
              carbon footprint, calculated based on the information you
              provide about your lifestyle and activities.
            </p>
            <p className="text-lg mb-4">
              <b> Historical Data: </b>View your past emissions to understand
              how your footprint has changed over time, helping you to gauge
              the effectiveness of your efforts to reduce it.
            </p>
              </div>
            </div>
          </div>
          {/* Step 3: Monitoring your offset efforts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">

              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 3</p> 
                  <h1 className="text-2xl font-semibold ">
                  Monitoring your offset efforts
                  </h1>
                </div>
            
              </div>
              <div className="basis-8/12">
              <p className="text-lg mb-4">
              <b> Offset subscriptions: </b>Track your current subscription
              level (Less, Equal, More) and see how much carbon you're
              offsetting each month.
            </p>
            <p className="text-lg mb-4">
              <b> Progress over time: </b>Monitor the progress you’ve made in
              reducing your “climate debt” by offsetting more than your
              monthly emissions.
            </p>
            <p className="text-lg mb-4">
              <b> Offset impact:</b> Understand the impact of your offsets
              with detailed information on the projects you're supporting
              through your subscription.
            </p>
              </div>
            </div>
          </div>
          {/* Step 4:Certificates and reports */}
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>

            <div className="flex flex-row gap-5">
              <div className="basis-4/12">
              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 4</p> 
                  <h1 className="text-2xl font-semibold ">
                  Certificates and reports
                  </h1>
                </div>
          
              </div>
              <div className="basis-8/12">
              <p className="text-lg mb-4">
              <b> Emission reduction certificates:</b> For each period of
              offsetting, receive a certificate detailing your contribution to
              carbon offset projects.
            </p>
            <p className="text-lg mb-4">
              <b> Detailed reports:</b> Access comprehensive reports that
              break down your emissions and offsetting activities, perfect for
              personal record-keeping or sharing with others.
            </p>
              </div>
            </div>
          </div>
        </div>


{/*

 <div className="grid grid-cols-2 gap-10">
            {/* Step 1: Accessing your personalized dashboard 
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">
                Step 1: Accessing your personalized dashboard
              </h2>
              <p className="text-lg text-black">
                <b> Easy Login: </b>Access your personalized dashboard with a
                secure login. This dashboard is your central hub for tracking
                and managing your carbon footprint and offset activities.
              </p>
            </div>
            {/* Step 2: Understanding your carbon footprint 
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">
                Step 2: Understanding your carbon footprint
              </h2>
              <p className="text-lg mb-4">
                <b> Real-Time Tracking: </b>The dashboard displays your current
                carbon footprint, calculated based on the information you
                provide about your lifestyle and activities.
              </p>
              <p className="text-lg mb-4">
                <b> Historical Data: </b>View your past emissions to understand
                how your footprint has changed over time, helping you to gauge
                the effectiveness of your efforts to reduce it.
              </p>
            </div>
            {/* Step 3: Monitoring your offset efforts *
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">
                Step 3: Monitoring your offset efforts
              </h2>
              <p className="text-lg mb-4">
                <b> Offset subscriptions: </b>Track your current subscription
                level (Less, Equal, More) and see how much carbon you're
                offsetting each month.
              </p>
              <p className="text-lg mb-4">
                <b> Progress over time: </b>Monitor the progress you’ve made in
                reducing your “climate debt” by offsetting more than your
                monthly emissions.
              </p>
              <p className="text-lg mb-4">
                <b> Offset impact:</b> Understand the impact of your offsets
                with detailed information on the projects you're supporting
                through your subscription.
              </p>
            </div>
            {/* Step 4: Certificates and reports *
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">
                Step 4: Certificates and reports
              </h2>
              <p className="text-lg mb-4">
                <b> Emission reduction certificates:</b> For each period of
                offsetting, receive a certificate detailing your contribution to
                carbon offset projects.
              </p>
              <p className="text-lg mb-4">
                <b> Detailed reports:</b> Access comprehensive reports that
                break down your emissions and offsetting activities, perfect for
                personal record-keeping or sharing with others.
              </p>
            </div>
          </div>

*/}
        </div>
      </section>
    </>
  );
}
