import { FC, Fragment, useState } from "react";
import SliderBlog from "../Slider_Blog/SliderBlog";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import SliderSale from "../Slider_Sale/SliderSale";
import logoFooter1 from "../../img/footer-icon-1.png";
import logoFooter2 from "../../img/footer-icon-2.png";
import logoHome from "../../img/logoHome.png";

const Footer: FC = () => {
  const dataSliderBlog = [
    {
      pict: blog1,
      description:
        "Building gains into housing stocks and how to trade the sector",
    },
    {
      pict: blog2,
      description:
        "92% of millennial homebuyers say inflation has impacted their plans",
    },
    {
      pict: blog3,
      description: "We are hiring moderately, says Compass CEO",
    },
  ];
  const dataCompany: string[] = [
    "Property For Sale",
    "About Us",
    "Our Agents",
    "FAQ",
    "Pricing",
    "Contact Us",
  ];
  const [animationContact, setAnimationContact] = useState<number>(0);
  const [skewLogo, setSkewLogo] = useState<boolean>(false);
  return (
    <Fragment>
      <div className="bg-gray-100 py-10">
        <div className="md:max-w-[1280px] md:m-[auto] text-center pb-10">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg md:tracking-wider pb-4">
            Form our blog
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </h5>
          <div className="md:max-w-[1028px] md:m-[auto] md:flex md:justify-between md:items-center grid grid-cols-1 md:pl-0 pl-16">
            {dataSliderBlog.map((itemBlog) => (
              <SliderBlog item={itemBlog} />
            ))}
          </div>
        </div>
      </div>
      <>
        <div className="text-center mb-10 mt-8 md:p-0 p-2">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg md:tracking-wider pb-4">
            Properties for sale
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </h5>
        </div>
        <div className="max-w-[1280px] m-[auto]">
          <div className="bg-gradient-to-b from-gray-100">
            <SliderSale sliderShow={3} type="footer" />
            <div className="w-full rounded-3xl border outline-none p-1 md:max-w-[800px] md:m-[auto] flex md:justify-around items-center justify-center flex-wrap">
              <span className="text-sm md:text-md">
                Become our next customer, and find your dream home
              </span>
              <span className="text-orange-500 font-semibold ml-0.5 text-xs md:text-md">
                Contact us: 314-555-0123
              </span>
            </div>
          </div>
        </div>
      </>
      <div className="mt-5 bg-black">
        <div className="md:max-w-[1028px] md:m-auto bg-transparent py-5">
          <div className="md:flex md:justify-around md:items-center mt-5 grid grid-rows-2 gap-8">
            <div className="bg-[#FFF5E0] p-3 md:w-96 h-36 relative flex justify-between items-center border-none outline-none rounded-xl w-[460px] ">
              <img
                onMouseMove={() => setSkewLogo(true)}
                onMouseLeave={() => setSkewLogo(false)}
                src={logoFooter1}
                alt="logo 1"
                className={`object-contain mr-5 cursor-pointer transform ${
                  skewLogo ? "-skew-y-12 -rotate-[360deg]" : "skew-y-0 rotate-0"
                }`}
              />

              <div>
                <h1 className="font-extrabold text-xl">You need a house</h1>
                <p className="text-xs mt-2">
                  Tell us your needs, we will give you thousands of suggestions
                  for the dream home.
                </p>
              </div>

              <div className="border-none absolute top-32 left-[33%] outline-none rounded-md flex justify-evenly items-center py-2 px-3 bg-[#FFA920] text-white cursor-pointer shadow-md  hover:bg-[#F39703] hover:opacity-100 ">
                <span className="border-r-[1px] border-white pr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <button className="pl-2">Contact Seller</button>
              </div>
            </div>
            <div className="bg-[#FFF5E0] p-3 md:w-96 h-36 relative flex justify-between items-center border-none outline-none rounded-xl w-[460px] ">
              <img
                src={logoFooter2}
                alt="logo 2"
                className="object-contain mr-5"
              />
              <div>
                <h1 className="font-extrabold text-xl">Sell your house</h1>
                <p className="text-xs mt-2">
                  We will connect you to thousands of people who need to buy a
                  home.
                </p>
              </div>
              <div className="border-none absolute top-32 right-[27%] outline-none rounded-md flex justify-evenly items-center py-2 px-3 bg-[#FFA920] text-white cursor-pointer shadow-md  hover:bg-[#F39703] hover:opacity-100 ">
                <span className="border-r-[1px] border-white pr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:animate-bounce"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <button className="pl-2">Sell Property</button>
              </div>
            </div>
          </div>
          {/* footer */}
          <div>
            <footer className="mt-5">
              <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
                  <div>
                    <p className="font-semibold text-white">Office Address</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                      <div className="text-gray-600 text-xs">
                        <p>Head office:</p>
                        <p className="text-white font-semibold ">
                          2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </p>
                      </div>
                      <div className="text-gray-600 text-xs">
                        <p>Branch:</p>
                        <p className="text-white font-semibold ">
                          3891 Ranchview Dr. Richardson, California 62639
                        </p>
                      </div>
                      <div className="text-white text-xs">
                        <p className="text-white font-semibold ">
                          3517 W. Gray St. Utica, Pennsylvania 57867
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Contact Seller</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                      <div className="flex justify-around items-center mb-2">
                        <img
                          src="https://picsum.photos/seed/log0/50/50"
                          alt="logo 2"
                          className="object-cover mr-5 rounded-[50%]"
                        />
                        <div className="text-gray-600 text-xs">
                          <p>Darrell Steward</p>
                          <p className="text-white font-semibold ">
                            (405) 555-0128
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-around items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-6 mr-5  text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                        <div className="text-gray-600 text-xs">
                          <p>Hotline:</p>
                          <p className="text-white font-semibold ">
                            (201) 555-0124
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-around items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-6 mr-5 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                          />
                        </svg>
                        <div className="text-gray-600 text-xs">
                          <p>Email:</p>
                          <p className="text-white font-semibold ">
                            Realestatecp@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Our Company
                    </p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                      {dataCompany.map((item: string, index: number) => {
                        return (
                          <div
                            key={index}
                            onMouseMove={() => setAnimationContact(index)}
                            onMouseLeave={() => setAnimationContact(-1)}
                            className={`flex text-xs items-center ${
                              animationContact === index
                                ? "cursor-pointer"
                                : null
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className={`w-3 h-3 text-orange-500 ${
                                animationContact === index
                                  ? "-ml-2 opacity-0"
                                  : null
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                            <p
                              className={`${
                                animationContact === index
                                  ? "text-orange-500 -ml-2"
                                  : "text-gray-500"
                              }`}
                            >
                              {item}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Newsletter</p>
                    <p className="text-xs mt-2 text-white tracking-tight w-56">
                      Sign up to receive the latest articles
                    </p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                      <div className="w-56 ">
                        <input
                          type="text"
                          placeholder="Your Email ddress"
                          className="placeholder:text-xs placeholder:text-gray-400 p-2 mb-2 border-gray-200 border outline-orange-500 outline-1 rounded-lg w-[400px] md:w-[250px]"
                        />
                        <div className="inline-flex mb-2 md:w-[250px] w-[400px] text-white bg-gray-700 hover:bg-orange-500 justify-center items-center p-2 border-gray-200 border outline-orange-500 outline-1 rounded-lg">
                          <button>Sign Up </button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                        <div className="md:w-52 w-[400px] inline-flex items-center">
                          <input
                            className="mr-2 leading-tight w-4 h-4 rounded-md outline-none border-none accent-orange-500"
                            type="checkbox"
                          />
                          <span className="text-xs text-white">
                            I have read and agree to the terms & conditions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2 border-gray-200 md:mt-20 md:mb-1 h-1" />
                <div className="flex justify-around items-center ">
                  <img
                    src={logoHome}
                    className="object-contain w-36 h-36 text-white"
                    alt="logo Home"
                  />
                  <div className="flex justify-around items-center md:justify-evenly md:w-full">
                    <div className="md:flex items-center gap-3 hover:cursor-pointer hidden">
                      <p className="font-semibold text-md text-white hover:text-orange-500 hover:cursor-pointer">
                        Home
                      </p>
                      <p className="font-semibold text-md text-white hover:text-orange-500 hover:cursor-pointer">
                        Property
                      </p>
                      <p className="font-semibold text-md text-white hover:text-orange-500 hover:cursor-pointer">
                        Agents
                      </p>
                      <p className="font-semibold text-md text-white hover:text-orange-500 hover:cursor-pointer">
                        Blog
                      </p>
                      <p className="font-semibold text-md text-white hover:text-orange-500 hover:cursor-pointer">
                        Contact
                      </p>
                    </div>
                    <div className="flex gap-3 items-center hover:cursor-pointer">
                      <img
                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                        width={30}
                        height={30}
                        alt="fb"
                      />
                      <img
                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                        width={30}
                        height={30}
                        alt="tw"
                      />
                      <img
                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                        width={30}
                        height={30}
                        alt="inst"
                      />
                      <img
                        src="https://www.svgrepo.com/show/28145/linkedin.svg"
                        width={30}
                        height={30}
                        alt="in"
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-2 border-gray-200 md:my-8 h-1" />
                <p className="font-sans md:p-8 text-start md:text-center md:text-md text-xs text-gray-500 p-0 ">
                  Copyright © 2023. Designed & Developed by
                  <span className="font-semibold text-white pl-1">
                    Themesflat.
                  </span>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
