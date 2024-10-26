import React, { useState } from "react";

const Main = () => {
  const [activeTab, setActiveTab] = useState("Day 1");
  return (
    <>
      <div className="h-calc w-full">
        <div className="bg-[#099A83] px-4 md:px-[50px]  text-left">
          <p className="text-xs text-white pt-[22px] font-medium">
            Completed class / DP-100T01: Designing and Implementing a Data
            Science Solution on Azure (Data Scientist)
          </p>
          <div className="flex gap-2 pt-8">
            <div className="border text-[11px] border-[#23E6ED] text-[#181A53] font-medium px-1 mx-1 my-0.5 h-[18px] flex items-center justify-center bg-[#C4FDFF] rounded-[4px]">
              Microsoft
            </div>
            <div className="border text-[11px] border-[#FFD9B5] text-[#181A53] font-medium px-1 mx-1 my-0.5 h-[18px] flex items-center justify-center bg-[#FFD9B5] rounded-[4px]">
              Public class
            </div>
          </div>
          <h2 className="text-[24px] pt-[18px] text-white">
            DP-100T01: Designing and Implementing a Data Science Solution on{" "}
            <br />
            Azure(Data Scientist)
          </h2>
          <div className="flex gap-[19px] pt-4">
            <span className="text-[16px] text-white font-medium">
              Completed On : 24 Feb, 2023
            </span>
            <span className="text-[16px] text-white flex items-center gap-2">
              <img src="richard.png" alt="richard" className="" />{" "}
              <span className="font-medium">Richard B</span>
            </span>
          </div>
          <div className="flex gap-2 items-center pt-[33px]">
            <img src="attendance.png" className="pr-2" alt="attendance" />
            <p className="text-sm text-[#71FF9D] font-semibold">
              Your Attendance:100%
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-center gap-[16px] pt-9 pb-[120px]">
            <div className="py-2 px-4 bg-[#0876F8] rounded-lg text-white text-sm font-semibold">
              Last Day Evaluation
            </div>
            <div className="py-2 px-4 border border-[#FFFFFF66] rounded-lg text-white text-sm font-semibold">
              Buy Exam
            </div>
            <div className="py-2 px-4 border border-[#FFFFFF66] rounded-lg text-white text-sm font-semibold">
              Access Digital Assets
            </div>
            <div className="py-2 px-4 border border-[#FFFFFF66] rounded-lg text-white text-sm font-semibold">
              Class Recordings
            </div>
            <select className="py-2 px-4 border border-[#FFFFFF66] rounded-lg text-white text-sm font-semibold bg-transparent">
              <option className="text-[#333]" value="resources">
                Additional Resources
              </option>
              <option className="text-[#333]" value="resource1">
                Resource 1
              </option>
              <option className="text-[#333]" value="resource2">
                Resource 2
              </option>
              <option className="text-[#333]" value="resource3">
                Resource 3
              </option>
            </select>
          </div>
        </div>
        <div className="md:px-[50px] px-4 flex flex-col md:flex-row gap-4 mb-8 -mt-20">
          <div className="shadow-card flex items-center justify-between rounded-[12px] text-left bg-white px-7 py-[24px] w-full md:w-1/2">
            <div>
              <h5 className="text-[#181A53] text-[20px] font-semibold mb-2">
                Claim your Badge
              </h5>
              <p className="text-sm text-[#181A53] mb-[16px]">
                Scan QR to download on Mobile Phone
              </p>
              <button
                type="button"
                className="bg-[#0876F8] inline-block text-xs text-white  rounded-[7px] px-3 py-[9px]"
              >
                Download
              </button>
            </div>
            <div className="">
              <img src="qr.png" alt="ar" className="" />
            </div>
          </div>
          <div className="shadow-card flex items-center justify-between rounded-[12px] text-left bg-white px-7 py-[24px] w-full md:w-1/2">
            <div>
              <h5 className="text-[#181A53] text-[20px] font-semibold mb-2">
                Download Certificate
              </h5>
              <p className="text-sm text-[#181A53] mb-[16px]">
                Download your certificate or share it to your social.
              </p>
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  className="bg-[#0876F8] text-xs inline-block text-white  rounded-[7px] px-3 py-[9px]"
                >
                  Download
                </button>
                <img src="share.png" alt="share" />
              </div>
            </div>
            <div className="">
              <img src="certificate.png" alt="certificate" className="" />
            </div>
          </div>
        </div>
        <div className="md:px-[50px] px-4 mb-10">
          <div className="py-4 px-5 shadow-card text-left bg-white rounded-[12px] flex flex-col items-center lg:flex-row">
            <div className="pr-[61px] text-[#181A53] text-[20px] font-semibold lg:pl-[40px] mb-4 md:mb-0 w-[240px]">
              Access <br className="hidden md:inline-block" /> lab module
            </div>
            <div className="bg-[#E2E2E2] rounded-lg px-6 py-[18px] w-full">
              <p className="text-[#181A53] text-sm font-semibold mb-3">
                Lab module
              </p>
              <div className="flex flex-col md:flex-row items-center gap-5">
                <select className="h-9 text-[#181A53] bg-white text-xs rounded-lg w-full px-4 border border-[#E2E2E2]">
                  <option value="1">01 Exploring the Lab Environment</option>
                  <option value="2">02 Setting Up Your Workspace</option>
                  <option value="3">03 Understanding the Basics</option>
                </select>

                <button
                  type="button"
                  className="bg-[#0876F8] w-[180px] px-7 py-2 inline-block text-white text-sm font-semibold  rounded-[8px]"
                >
                  Access LAB
                </button>
              </div>
              <div className="pt-[9px] flex gap-1">
                <img src="info.svg" alt="info" className="" />{" "}
                <span className="text-[#585858] text-[12px]">
                  Expires in 180 Days (Valid till : Mon, 20 Sep 2023)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:gap-[19px] md:px-[50px] px-4 flex flex-col lg:flex-row items-stretch gap-4 mb-8">
          <div className="text-left flex flex-col w-full">
            <h6 className="text-[20px] font-semibold pb-[20px] text-[#181A53]">
              Instructor's notes
            </h6>
            <div className="border border-[#E2E2E2] rounded-xl shadow-card bg-white h-full px-[40px] pt-[18px]">
            
              <ul className="flex items-center gap-[27.4px] border-b-2 border-[#E2E2E2]">
                {["Day 1", "Day 2", "Day 3"].map((day) => (
                  <li
                    key={day}
                    className={`text-[16px] font-semibold pb-[14px] cursor-pointer ${
                      activeTab === day
                        ? "border-b-4 border-[#0876F8] text-[#0876F8]"
                        : ""
                    }`}
                    onClick={() => setActiveTab(day)}
                  >
                    {day}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                {activeTab === "Day 1" && (
                  <>
                    <p className="font-semibold text-[#181A53] text-sm">Course outline</p>
                    <ul className="pt-[18px] pl-4">
                      <li className="text-[#4D4D4D] text-sm">
                        a. Get Started with Cisco Command-Line Interface (CLI)
                      </li>
                      <li className="text-[#4D4D4D] text-sm">
                        b. Observe How a Switch Operates
                      </li>
                      <li className="text-[#4D4D4D] text-sm">
                        
                        c. Perform Basic Switch Configuration
                      </li>
                      <li className="text-[#4D4D4D] text-sm">
                        
                        d. Implement the Initial Switch Configuration
                      </li>
                      <li className="text-[#4D4D4D] text-sm">
                        e. Inspect TCP/IP Applications f. Configure an Interface
                        on a Cisco Router
                      </li>
                    </ul>
                  </>
                )}
                {activeTab === "Day 2" && <p>Content for Day 2</p>}
                {activeTab === "Day 3" && <p>Content for Day 3</p>}
              </div>
            </div>
          </div>
          <div className="text-left w-full">
            <h6 className="text-[20px] font-semibold pb-[20px] text-[#181A53]">
              Recommended Learning Path
            </h6>
            <div className="border text-left border-[#E2E2E2]  rounded-xl shadow-card bg-white px-[40px] pt-[18px]">
              <div className="pb-[16px]">
                <div className="flex gap-2">
                  <div className="border text-[11px] border-[#23E6ED] text-[#181A53] font-medium px-1 my-0.5 h-[18px] flex items-center justify-center bg-[#C4FDFF] rounded-[4px]">
                    Microsoft
                  </div>
                  <div className="border text-[11px] border-[#23E6ED] text-[#181A53] font-medium px-1 my-0.5 h-[18px] flex items-center justify-center bg-[#C4FDFF] rounded-[4px]">
                    OTR
                  </div>
                </div>
                <p className="text-[#181A53]">
                  DP-100T01: Designing and Implementing a Data Science Solution
                  on Azure (Data Scientist)
                </p>
                <div className="flex gap-[10px] pt-4">
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img
                      src="icon_duration.svg"
                      alt="icon_duration"
                      className=""
                    />{" "}
                    <span className="font-medium">4.00 days (32 Hrs)</span>
                  </span>
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img
                      src="icon_duration.svg"
                      alt="icon_duration"
                      className=""
                    />{" "}
                    <span className="font-medium">Virtual Instructor-Led</span>
                  </span>
                </div>
                <div className="flex gap-[10px] pt-[12px]">
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="half-star.svg" alt="icon_rating" className="" />{" "}
                    <img src="blank-star.svg" alt="blank-star" className="" />{" "}
                    <span className="font-medium">3.5</span>
                  </span>
                </div>
                <div className="flex pt-[12px] gap-3">
                  <div className="background-[#F1F1F1] px-[12px] py-[9px] w-[180px]">
                    <p className="text-[#181A53] text-[13px]">
                      Starting in 7days
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-[#0876F8] text-center w-full border border-[#0876F8] rounded-[7px] text-sm py-2.5 h-fit"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#d3d3d3]"></div>
              <div className="py-[16px]">
                <div className="flex gap-2">
                  <div className="border text-[11px] border-[#23E6ED] text-[#181A53] font-medium px-1 my-0.5 h-[18px] flex items-center justify-center bg-[#C4FDFF] rounded-[4px]">
                    Microsoft
                  </div>
                  <div className="border text-[11px] border-[#23E6ED] text-[#181A53] font-medium px-1 my-0.5 h-[18px] flex items-center justify-center bg-[#C4FDFF] rounded-[4px]">
                    OTR
                  </div>
                </div>
                <p className="text-[#181A53]">
                  DP-100T01: Designing and Implementing a Data Science Solution
                  on Azure (Data Scientist)
                </p>
                <div className="flex gap-[10px] pt-4">
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img
                      src="icon_duration.svg"
                      alt="icon_duration"
                      className=""
                    />{" "}
                    <span className="font-medium">4.00 days (32 Hrs)</span>
                  </span>
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img
                      src="icon_duration.svg"
                      alt="icon_duration"
                      className=""
                    />{" "}
                    <span className="font-medium">Virtual Instructor-Led</span>
                  </span>
                </div>
                <div className="flex gap-[10px] pt-[12px]">
                  <span className="text-[14px] text-[#9e9e9e] flex items-center gap-1">
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="icon_rating.svg" alt="icon_rating" className="" />{" "}
                    <img src="half-star.svg" alt="icon_rating" className="" />{" "}
                    <img src="blank-star.svg" alt="blank-star" className="" />{" "}
                    <span className="font-medium">3.5</span>
                  </span>
                </div>
                <div className="flex pt-[12px] gap-3">
                  <div className="background-[#F1F1F1] px-[12px] py-[9px] w-[180px]">
                    <p className="text-[#181A53] text-[13px]">
                      Starting in 7days
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-[#0876F8] text-center w-full border border-[#0876F8] rounded-[7px] text-sm py-2.5 h-fit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
