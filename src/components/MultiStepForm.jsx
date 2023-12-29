"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";
import AccountSetUpForm from "./AccountSetUpForm";
import SocialProfiles from "./SocialProfiles";
import PersonalDetails from "./PersonalDetails";

const MultiStepForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [header, setHeaders] = useState([{ name: "Account Setup", component: <AccountSetUpForm setCurrentTab={setCurrentTab} currentTab={currentTab} /> }, { name: "Social Profiles", component: <SocialProfiles setCurrentTab={setCurrentTab} currentTab={currentTab} /> }, { name: "Personal Details", component: <PersonalDetails setCurrentTab={setCurrentTab} currentTab={currentTab} /> }]);

  return (
    <div className="p-10">
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
      >

        <div className="form-header flex gap-3 mb-4 text-xs text-center">
          {header.map((val, index) =>
            <span className={`stepIndicator flex-1 pb-8 relative ${currentTab === index ? 'active' : ''} ${currentTab > index && 'finish'}`} >
              {val.name}
            </span>)
          }
        </div>

        {header.map((val, index) =>
          <>
            <div className={`step ${currentTab === index ? 'active' : ''}`} style={{ display: `${currentTab === index ? 'block' : 'none'}` }}>
              {val.component}
            </div>
          </>
        )
        }
      </form >
    </div >
  );
};

export default MultiStepForm;
