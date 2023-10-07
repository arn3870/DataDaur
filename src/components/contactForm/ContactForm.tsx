export default function ContactForm() {
  return (
    <div className="md:left-[110px] left-0 m-[0!important] top-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto text-[#FFF]">
      <div className="relative w-full max-h-screen flex justify-center items-center h-full">
        <div className="relative rounded-lg shadow xl:w-[875px] md:w-[700px] md:top-[-25px] w-full">
          <form>
            <div className="pr-5">
              <div className="flex xl:flex-nowrap flex-wrap justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px]">What is your first name?</label>
                  <input
                    className="pl-[10px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[10px] border-[2px] rounded-[7px] text-[12px] sm:text-[14px]"
                    id="service"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid var(--Button-Stroke, #A265F0)",
                      background:
                        "linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 99.97%)",
                      boxShadow: "0px 4px 30px 0px rgba(100, 26, 135, 0.50)",
                      backdropFilter: "blur(5px)",
                    }}
                  ></input>
                </div>
                <div className="flex flex-col w-full">
                  <label className="pb-[4px]">What is your last name?</label>
                  <input
                    className="pl-[10px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[10px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
                    id="review_actions"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid var(--Button-Stroke, #A265F0)",
                      background:
                        "linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 99.97%)",
                      boxShadow: "0px 4px 30px 0px rgba(100, 26, 135, 0.50)",
                      backdropFilter: "blur(5px)",
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex xl:flex-nowrap flex-wrap justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px]">What is your email?</label>
                  <input
                    rows={10}
                    className="pl-[10px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[10px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
                    id="review_actions"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid var(--Button-Stroke, #A265F0)",
                      background:
                        "linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 99.97%)",
                      boxShadow: "0px 4px 30px 0px rgba(100, 26, 135, 0.50)",
                      backdropFilter: "blur(5px)",
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex xl:flex-nowrap flex-wrap justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px]">Tell us about your enquiry</label>
                  <textarea
                    rows={10}
                    className="pl-[10px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[10px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
                    id="review_actions"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid var(--Button-Stroke, #A265F0)",
                      background:
                        "linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 99.97%)",
                      boxShadow: "0px 4px 30px 0px rgba(100, 26, 135, 0.50)",
                      backdropFilter: "blur(5px)",
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[50px] sm:text-sm md:text-lg lg:text-xl">
              <button
                style={{
                  border: "2px solid var(--Button-Stroke, #A265F0)",
                  background:
                    "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                  boxShadow: "0px 4px 25px 0px #2F1C64",
                }}
                className="sm:px-[10px] md:px-[10px] lg:px-[40px] sm:py-[10px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
