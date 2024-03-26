import React, { useState } from "react";
import { Stepper, Step, StepLabel, Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const MultiStepForm = ({ onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({
    age: "",
    country: "",
    transportation: "",
    flights: "",
    dflights: "",
    diet: "",
    energy: "",
    size: "",
    appliances: "",
    recycle: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const adjustmentFactor = () => {
    const total = (
      parseFloat(values.transportation) * 100 +
      parseFloat(values.flights) * 100 +
      parseFloat(values.dflights) * 100 +
      parseFloat(values.diet) * 100 +
      parseFloat(values.energy) * 100 +
      parseFloat(values.size) * 100 +
      parseFloat(values.appliances) * 100 +
      parseFloat(values.recycle) * 100
    ).toFixed(2);
    return isNaN(total) ? 0 : total;
  };

  const adjustmentFactor2 = () => {
    const total =
      parseFloat(values.transportation) +
      parseFloat(values.flights) +
      parseFloat(values.dflights) +
      parseFloat(values.diet) +
      parseFloat(values.energy) +
      parseFloat(values.size) +
      parseFloat(values.appliances) +
      parseFloat(values.recycle);
    return isNaN(total) ? 0 : total;
  };

  const monthlyFootprint = () => {
    const total = (
      (1 + adjustmentFactor2()) *
      parseFloat(values.country)
    ).toFixed(2);
    return isNaN(total) ? 0 : total;
  };
  const offsettingPrice = () => {
    const total = (monthlyFootprint() * 20).toFixed(2);
    return isNaN(total) ? 0 : total;
  };
  const carbonDebt = () => {
    const total = (monthlyFootprint() * parseFloat(values.age)).toFixed(2);
    return isNaN(total) ? 0 : total;
  };
  const carbonPrice = () => {
    const total = (carbonDebt() * 20).toFixed(2);
    return isNaN(total) ? 0 : total;
  };

  // const countryPercentage = values.country * (percentage / 100);

  const handleSubmit = () => {
    // onSubmit(values);
    alert("You are ready to buy your Footprint !");
  };

  const steps = [
    "General",
    "Commute",
    "Flight",
    "Diet",
    "Home Energy",
    "Other Factors",
    "Footprint",
  ];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="age">Age</InputLabel>
              <Select
                name="age"
                value={values.age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={120.0}>0-10</MenuItem>
                <MenuItem value={47.84}>11-20</MenuItem>
                <MenuItem value={138.39}>21-30</MenuItem>
                <MenuItem value={249.64}>31-40</MenuItem>
                <MenuItem value={384.63}>41-50</MenuItem>
                <MenuItem value={519.96}>51-60</MenuItem>
                <MenuItem value={667.08}>61-70</MenuItem>
                <MenuItem value={805.9}>71-80</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="Country">Country of Residence</InputLabel>
              <Select
                name="country"
                value={values.country}
                onChange={handleChange}
                label="Country of Residence"
              >
                <MenuItem value="0.18">Albania</MenuItem>
                <MenuItem value="0.308">Argentina</MenuItem>
                <MenuItem value="0.208">Armenia</MenuItem>
                <MenuItem value="1.192">Australia</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="age">
                What is your primary mode of transportation?
              </InputLabel>
              <Select
                name="transportation"
                value={values.transportation}
                label="What is your primary mode of transportation?"
                onChange={handleChange}
              >
                <MenuItem value={0.05}>Car - Short (&lt;5 miles)</MenuItem>
                <MenuItem value={0.15}>Car - Medium (5-15 miles)</MenuItem>
                <MenuItem value={0.25}>Car - Long (&gt;15 miles)</MenuItem>
                <MenuItem value={-0.05}>
                  Public Transit - Short (&lt;5 miles)
                </MenuItem>
                <MenuItem value={0}>
                  Public Transit - Medium (5-15 miles)
                </MenuItem>
                <MenuItem value={0.05}>
                  Public Transit - Long (&gt;15 miles)
                </MenuItem>

                <MenuItem value={-0.3}>Bike/Walking - Any</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                How many flights do you take per year?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="flights"
                value={values.flights}
                label="How many flights do you take per year?"
                onChange={handleChange}
              >
                <MenuItem value={0}>0 flight</MenuItem>
                <MenuItem value={0.2}>1-5 flights</MenuItem>
                <MenuItem value={0.4}>6 or more flights</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Average distances of these flights?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="dflights"
                value={values.dflights}
                label="Average distances of these flights?"
                onChange={handleChange}
              >
                <MenuItem value={0.15}> Short</MenuItem>
                <MenuItem value={0.3}>Medium</MenuItem>
                <MenuItem value={0.5}>Long</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                What is your diet category?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="diet"
                value={values.diet}
                label="What is your diet category?"
                onChange={handleChange}
              >
                <MenuItem value={0.15}>Meat-heavy</MenuItem>
                <MenuItem value={0.05}>Balanced</MenuItem>
                <MenuItem value={-0.1}>Vegetarian</MenuItem>
                <MenuItem value={-0.2}>Vegan</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                What type of home energy do you have?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="energy"
                value={values.energy}
                label="What type of home energy do you have?"
                onChange={handleChange}
              >
                <MenuItem value={0.1}>Electricity</MenuItem>
                <MenuItem value={0.15}>Natural Gas</MenuItem>
                <MenuItem value={-0.2}>Renewable</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                What is the size of your home?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="size"
                value={values.size}
                label="What is the size of your home?"
                onChange={handleChange}
              >
                <MenuItem value={-0.1}>Small</MenuItem>
                <MenuItem value={0}>Medium</MenuItem>
                <MenuItem value={0.2}>Large</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Do you have energy efficient appliances?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="appliances"
                value={values.appliances}
                label="Do you have energy efficient appliances?"
                onChange={handleChange}
              >
                <MenuItem value={-0.1}>
                  Yes I have energy efficient appliances
                </MenuItem>
                <MenuItem value={0}>No</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col gap-10 py-20">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Do you recycle often?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="recycle"
                value={values.recycle}
                label="Do you recycle often?"
                onChange={handleChange}
              >
                <MenuItem value={-0.1}>Yes I recycle often</MenuItem>
                <MenuItem value={0}>No</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 6:
        return (
          <div className="p-10 flex flex-col justify-center items-center gap-5 ">
            <h1>
              Total adjustment factor <b>{adjustmentFactor()}%</b> <br />
            </h1>
            <h1>
              Adjusted monthly footprint (CO2) <b>{monthlyFootprint()}</b>
            </h1>
            <h1>
              Price for offsetting per month (EUR) <b>€{offsettingPrice()}</b>
            </h1>
            <h1>
              Carbon debt <b>{carbonDebt()}</b>
            </h1>
            <h1>
              Price for carbon debt (EUR) <b>€{carbonPrice()}</b>
            </h1>
            <button
              variant="contained"
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center"
              onClick={handleSubmit}
            >
              Ready to buy
            </button>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>{getStepContent(activeStep)}</div>
        {activeStep !== steps.length - 1 && (
          <div className="flex justify-between items-center ">
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              className=""
            >
              Back
            </button>
            <button
              variant="contained"
              onClick={handleNext}
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
