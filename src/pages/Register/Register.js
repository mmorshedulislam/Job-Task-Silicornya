import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    position: "",
    institution_name: "",
    education_level: "",
    work_time: "",
    password: "",
    confirm_password: "",
  });

  const institutes = [
    {
      name: "Dhaka University",
      value: "Dhaka_University",
    },
    {
      name: "BUET",
      value: "BUET",
    },
    {
      name: "Chittagong University",
      value: "Chittagong_University",
    },
    {
      name: "CUET",
      value: "CUET",
    },
  ];
  const education_levels = [
    {
      name: "Secondary School Certificate (SSC)",
      value: "Secondary School Certificate (SSC)",
    },
    {
      name: "Higher Secondary School Certificate (HSC)",
      value: "Higher Secondary School Certificate (HSC)",
    },
    {
      name: "Diploma",
      value: "Diploma",
    },
    {
      name: "Bachelor of Science (BSC)",
      value: "Bachelor of Science (BSC)",
    },
    {
      name: "Master of Arts(MA)",
      value: "Master of Arts(MA)",
    },
    {
      name: "Bachelor of Arts(BA)",
      value: "Bachelor of Arts(BA)",
    },
  ];
  const work_times = [
    {
      name: "Full Time",
      value: "Full Time",
    },
    {
      name: "Part Time",
      value: "Part Time",
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="lg:max-w-1/2 lg:w-1/2 mx-auto px-5">
            <div className="steps steps-vertical lg:steps-horizontal w-full">
              <p className="step step-primary">Information</p>
              <p className="step">Security</p>
              <p className="step">Confirmation</p>
            </div>
            <h2 className="text-center text-3xl my-5 font-semibold">
              Personal Information
            </h2>
            <div className="my-3">
              <label className="font-semibold" htmlFor="full_name">
                Full Name
              </label>
              <input
                className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                placeholder="Full Name"
              />
            </div>
            <div className="my-3">
              <label className="font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
              />
            </div>
            <div className="my-3">
              <label className="font-semibold" htmlFor="position">
                Position
              </label>
              <select
                className="select select-bordered w-full border border-[#333333] mt-2"
                name="position"
                onChange={handleInputChange}
                value={formData.position}
              >
                <option>Select Position</option>
                <option value={"teacher"}>Teacher</option>
                <option value={"student"}>Student</option>
              </select>
            </div>
            {(formData.position === "student" ||
              formData.position === "teacher") && (
              <div className="my-3">
                <label className="font-semibold" htmlFor="institution_name">
                  Institute Name
                </label>
                <select
                  className="select select-bordered w-full border border-[#333333] mt-2"
                  name="institution_name"
                  onChange={handleInputChange}
                  value={formData.institution_name}
                >
                  {institutes.map((institute, i) => (
                    <option key={i} value={institute.value}>
                      {institute.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {formData.position === "student" && (
              <div className="my-3">
                <label className="font-semibold" htmlFor="education_level">
                  Education level
                </label>
                <select
                  className="select select-bordered w-full border border-[#333333] mt-2"
                  name="education_level"
                  onChange={handleInputChange}
                  value={formData.education_level}
                >
                  {education_levels.map((education, i) => (
                    <option key={i} value={education.value}>
                      {education.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.position === "teacher" && (
              <div className="my-3">
                <label className="font-semibold" htmlFor="work_time">
                  Work Time
                </label>
                <select
                  className="select select-bordered w-full border border-[#333333] mt-2"
                  name="work_time"
                  onChange={handleInputChange}
                  value={formData.work_time}
                >
                  {work_times.map((work, i) => (
                    <option key={i} value={work.value}>
                      {work.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="flex items-center justify-between gap-5 my-5">
              <button
                onClick={handleNext}
                className="border bg-[#6078EA] text-white w-full py-3 rounded-md font-semibold flex items-center justify-center gap-x-2"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="lg:max-w-1/2 lg:w-1/2 mx-auto px-5">
            <div className="steps steps-vertical lg:steps-horizontal w-full">
              <p className="step step-primary">Information</p>
              <p className="step step-primary">Security</p>
              <p className="step">Confirmation</p>
            </div>
            <h2 className="text-center text-3xl my-8 font-semibold">
              Security
            </h2>
            <div className="my-3">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="my-3">
              <label className="font-semibold" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
                type="password"
                name="confirmPassword"
                value={formData.confirm_password}
                onChange={handleInputChange}
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center justify-between gap-5 my-5">
              <button
                onClick={handlePrevious}
                className="border bg-[#6078EA] text-white w-full py-3 rounded-md font-semibold"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="border bg-[#6078EA] text-white w-full py-3 rounded-md font-semibold"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="lg:max-w-1/2 lg:w-1/2 mx-auto px-5">
            <div className="steps steps-vertical lg:steps-horizontal w-full">
              <p className="step step-primary">Information</p>
              <p className="step step-primary">Security</p>
              <p className="step step-primary">Confirmation</p>
            </div>

            <div className="mt-10 mb-5 flex items-center justify-center w-[200px] h-[200px] rounded-full bg-[#6078EA] border-[15px] border-[#CFD7F9] mx-auto">
              <AiOutlineCheck size={70} color="white" />
            </div>
            <p className="text-center text-2xl font-semibold">Thank You</p>
            <p className="text-[#9F9F9F] text-center w-48 mx-auto">
              Account Has Been Created. Enjoy Job Task.{" "}
            </p>
            <div className="flex justify-center">
              <Link
                to={"/dashboard"}
                className="border border-[#6078EA] rounded-md py-2 px-6 font-semibold text-[#6078EA] inline-block my-10"
              >
                Go To Home
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto text-[#333333] mt-10">
      <form onSubmit={handleSubmit}>{renderStep()}</form>
      {(step === 1 || step === 2) && (
        <p className="font-semibold text-center text-[#000000]">
          Already Have An Account?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-[#6078EA] underline"
          >
            Log In
          </Link>
        </p>
      )}
    </div>
  );
};

export default Register;
