export default function ContactForm() {
  return (
    <div>
      <div className="text-center text-[60px] lg:py-[80px] lg:px-[200px]">
        Ready to do business with us? Let’s Get Started!
      </div>
      <div className="w-full max-h-screen flex justify-center items-center h-full">
        <div className="rounded-lg shadow xl:w-[875px] md:w-[700px] md:top-[-25px] w-full">
          <form>
            <div className="pr-5">
              <div className="flex xl:flex-nowrap flex-wrap justify-between py-[10px] gap-5 xl:gap-16">
                <div className="flex flex-col w-full">
                  <label className="pb-[4px]">What is your first name?</label>
                  <input
                    className="pl-[10px] lg:mt-[15px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[20px] px-[20px] border-[2px] rounded-[7px] text-[12px] sm:text-[14px]"
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
                    className="pl-[10px] lg:mt-[15px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[20px] px-[20px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
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
                    className="pl-[10px] lg:mt-[15px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[20px] px-[20px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
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
                    className="pl-[10px] lg:mt-[15px] focus:border-[#C5CBDC] focus:border-[2px] outline-none focus:outline-none py-[20px] px-[20px] border-[2px] border-[#C5CBDC] rounded-[7px] text-[12px] sm:text-[14px]"
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
                className="sm:px-[10px] md:px-[30px] lg:px-[50px] sm:py-[10px] md:py-[10px] lg:py-[10px] rounded-[20px] color-white"
              >
                Submit
              </button>
            </div>
            <div
              className="w-[100%] h-[4px] lg:mt-[100px] lg:mt-[50px]"
              style={{
                background:
                  "linear-gradient(89deg, #3F1B79 0.92%, #11074F 98.29%)",
              }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
}
