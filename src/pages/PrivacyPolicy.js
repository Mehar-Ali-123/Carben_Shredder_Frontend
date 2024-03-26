import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <section className=" h-96 bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">Privacy Policy</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-5xl ">
          <div className="flex py-20 flex-col">
            <p className="text-2xl text-black mb-5 ">
             <b> Privacy Policy of Carbon Shredder Last Updated: 17 January 2024</b>
            </p>

            <p className="text-lg text-black mb-10">
              Welcome to Carbon Shredder. We respect your privacy and are
              committed to protecting your personal data. This privacy policy
              will inform you how we look after your personal data when you
              visit our website and tell you about your privacy rights and how
              the law protects you.
            </p>

            <h2 className="text-2xl mb-3">1. Important Information and who we are</h2>
            <p className="text-lg text-black mb-5">
              Carbon Shredder is a company based in Estonia, providing services
              in carbon footprint calculation and offset subscriptions. Our
              website servers are located in the Netherlands.
            </p>

            <h2 className="text-2xl mb-3">2. Data collection</h2>
            <p className="text-lg text-black ">
              <b>2.1 Personal Data:</b> We collect your name, email, location, and
              lifestyle choices to estimate your personal carbon emissions.
            </p>
            <p className="text-lg text-black mb-5">
              <b>2.2 Financial Data:</b> Financial transactions are processed through
              our payment provider, Stripe. We do not store or have access to
              your financial information.
            </p>

            <h2 className="text-2xl mb-3">3. Data ysage</h2>
            <p className="text-lg text-black mb-5">
              Your personal data is used solely for the purpose of estimating
              your personal carbon emissions and managing your subscription to
              our services.
            </p>

            <h2 className="text-2xl mb-3">4. Data sharing</h2>
            <p className="text-lg text-black mb-5">
              Carbon Shredder does not share your personal data with any third
              parties, except for the facilitation of offset subscriptions with
              CNaught.
            </p>

            <h2 className="text-2xl mb-3">5. User consent and control</h2>
            <p className="text-lg text-black">
              <b>5.1 consent:</b> By filling out the carbon footprint calculator on our
              website, you consent to the collection and use of your data as
              outlined in this policy.
            </p>
            <p className="text-lg text-black mb-5">
              <b>5.2 Data management:</b> You may request changes to your personal data
              by contacting us via the website's contact form.
            </p>

            <h2 className="text-2xl mb-3">6. Data security</h2>
            <p className="text-lg text-black mb-5">
              We are committed to ensuring the security of your data. We
              implement various web development and cloud security measures,
              including regular security audits, to protect your data from
              unauthorized access or disclosure.
            </p>

            <h2 className="text-2xl mb-3">7. Compliance</h2>
            <p className="text-lg text-black mb-5">
              Carbon Shredder complies with EU data protection laws, as we are
              based in Estonia and our servers are in the Netherlands.
            </p>

            <h2 className="text-2xl mb-3">8. Policy updates</h2>
            <p className="text-lg text-black mb-5">
              Any changes to our privacy policy will be posted on the privacy
              policy page of our website.
            </p>

            <h2 className="text-2xl mb-3">9. Contact information</h2>
            <p className="text-lg text-black mb-5">
              For any privacy-specific concerns or data management requests,
              please reach out to us through the contact form available on our
              website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
