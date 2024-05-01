import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Faqs from "./pages/Faqs";
import CalculatorWorks from "./pages/CalculatorWorks";
import SubscriptionWorks from "./pages/SubscriptionWorks";
import TrackYourCarbonImpact from "./pages/TrackYourCarbonImpact";
import PartnershipWithCNaught from "./pages/PartnershipWithCNaught";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState, useEffect, useContext } from "react";
import ForgetPass from "./pages/ForgetPass";
import PersonalProfile from "./pages/PersonalProfile";
import EditProfile from "./pages/EditProfile.js";
import ActivationPage from "./pages/ActivationPage";
import axios from "axios";
import { server } from "./server.js";
import LoaderContext from "./components/LoaderContext.js/LoaderContext.js"; 
import StartShredding from "./components/StartShredding.js";
 
function App() {
  // const location = useLocation();
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoaderContext);
 


  useEffect(() => {
    const fetchUserAuthStatus = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get(`${server}/check-auth`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthentication", true);
          console.log("User is authenticated");
        } else {
          setIsAuthenticated(false);
          localStorage.setItem("isAuthentication", false);
          console.log("User is not authenticated");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        localStorage.setItem("isAuthentication", false);
      }
    };

    fetchUserAuthStatus();
  }, []);

  // useEffect(() => {
  //   if (
  //     location.pathname.includes("/sign-up") ||
  //     location.pathname.includes("/forget-pass") ||
  //     location.pathname.includes("/activation") ||
  //     location.pathname === "/"
  //   ) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }, [location.pathname]);

  return (
    <> 
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/home" element={<Home />} /> */}
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/forget-pass" element={<ForgetPass />} />
            <Route
              exact
              path="/activation/:slug"
              element={<ActivationPage />}
            />
            <Route
              exact
              path="/personal-profile"
              element={<PersonalProfile />}
            /> 
            <Route exact path="/start-shredding" element={<StartShredding />} />
            <Route exact path="/edit-profile" element={<EditProfile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/how-it-works" element={<HowItWorks />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              exact
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route exact path="/faqs" element={<Faqs />} />
            <Route
              exact
              path="/calculator-works"
              element={<CalculatorWorks />}
            />
            <Route
              exact
              path="/subscription-works"
              element={<SubscriptionWorks />}
            />
            <Route
              exact
              path="/track-your-carbon-impact"
              element={<TrackYourCarbonImpact />}
            />
            <Route
              exact
              path="/partnership-with-cnaught"
              element={<PartnershipWithCNaught />}
            />
          </Routes>
          <Footer />
        </div> 
    </>
  );
}

export default App;
