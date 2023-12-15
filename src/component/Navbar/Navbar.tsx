import { FC, Fragment, useEffect, useState } from "react";
import logo from "../../img/logoHome.png";
import slider from "../../img/slider-1.png";
import { dataMenuNav } from "../../data/menuNav";
import { typeMenuNav } from "../../type/menuType";
import MenuNav from "../Menu_Nav/MenuNav";
import Text from "../Text_Rotate/Text";
import TabHeader from "../Tabs/Tab";
import brand1 from "../../img/brand-1.png";
import brand2 from "../../img/brand-2.png";
import brand3 from "../../img/brand-3.png";
import brand4 from "../../img/brand-4.png";
import brand5 from "../../img/brand-5.png";
import brand6 from "../../img/brand-6.png";
import girlLogo from "../../img/mark-contact.png";
import { Tooltip } from "@material-tailwind/react";
import Card from "../Card/Card";
import SliderSale from "../Slider_Sale/SliderSale";
import CardParam from "../Card_Param/CardParam";
import Footer from "../Footer/Footer";

interface TypeTooltip {
  name: string;
  place: string;
}

const Navbar: FC = () => {
  const [indexShowMenu, setIndexShowMenu] = useState<number>(0);
  const [actIndex, setActIndex] = useState<number>(0);
  const [actTool, setActTool] = useState<number>(0);
  const [actButton, setActButton] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const arrImg = [brand1, brand2, brand3, brand4, brand5, brand6];
  const arrTooltip: TypeTooltip[] = [
    { name: "Houses", place: "8 Property" },
    { name: "Smart home", place: "6 Property" },
    { name: "Apartments", place: "5 Property" },
    { name: "Office", place: "7 Property" },
    { name: "Villa", place: "6 Property" },
    { name: "Bungalow", place: "3 Property" },
  ];
  const dataCard: string[] = [
    "Houses",
    "Apartments",
    "Bungalow",
    "Villa",
    "Office",
    "Smart",
    "Home",
    "House",
  ];

  useEffect(() => {}, []);

  return (
    <>
      <div className="md:flex justify-around items-center bg-white shadow-md shadow-slate-700 py-3 ">
        <div>
          <img
            src={logo}
            alt="logo"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="md:hidden absolute top-4 right-0"
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <div
          className={`relative hover:inline-block ${
            openNav ? "z-0 absolute top-10 left-3 " : null
          }`}
        >
          <ul
            className={`flex flex-col md:flex-row items-start ml-5 ${
              openNav ? null : "hidden md:block"
            }`}
          >
            {dataMenuNav.map((item: typeMenuNav, index: number) => (
              <li
                value={item.nameMenu}
                key={item.key}
                onClick={() => {
                  setActIndex(index);
                }}
                onMouseMove={() => setIndexShowMenu(index)}
                className={` ${
                  index === actIndex ? "text-orange-500" : ""
                } relative font-mono font-semibold text-lg mr-4 inline-flex justify-evenly items-center hover:text-orange-500 hover:cursor-pointer hover:${
                  index === actIndex ? "text-orange-500" : ""
                }`}
              >
                {item.nameMenu}
                {item.menuChirl ? (
                  <>
                    <div className={`ml-2 text-sm font-thin `}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    {indexShowMenu === index ? (
                      <div
                        className="absolute top-[63px] left-0 z-20 w-80 text-start bg-white shadow-md"
                        onMouseLeave={() => setIndexShowMenu(-1)}
                      >
                        <MenuNav menuChirl={item.menuChirl} />
                      </div>
                    ) : null}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:justify-around md:items-center flex-col md:flex-row w-40 md:w-auto">
          <div className="flex justify-between items-center font-mono text-sm font-semibold mr-3">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <div className="flex justify-between items-center">
              <p className="mr-1 hover:text-orange-500 hover:cursor-pointer">
                Register
              </p>
              <span>/</span>
              <p className="ml-1 hover:text-orange-500 hover:cursor-pointer">
                Login
              </p>
            </div>
          </div>
          <div className="border-none outline-none rounded-md flex justify-evenly items-center py-2 px-3 bg-[#FFA920] text-white cursor-pointer shadow-md  hover:bg-[#F39703] hover:opacity-100 ">
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

      <div className="bg-[#FFF9EF] w-[100%] md:h-[136vh] h-[190vh] relative mb-1 overflow-hidden ">
        <img
          src={slider}
          alt="slider"
          width={"65%"}
          height={"127vh"}
          className="object-cover absolute -right-24 top-16 md:block hidden"
        />
        <div className="absolute md:top-40 top-24 left-[1%] ml-3">
          <h1 className="md:text-[60px] text-4xl font-bold leading-tight mb-6 md:w-[750px] w-[415px]">
            We will find a perfect home for you
          </h1>
          <p className="leading-relaxed md:text-[17.7px] text-xs md:w-[650px] w-[415px]">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>
        </div>
        <div className="md:absolute md:right-[40%] md:top-20 hidden md:block">
          <Text />
        </div>
        <div className="absolute left-[2%] top-96">
          <TabHeader />
        </div>
      </div>
      <div className="m-[auto] max-w-[1280px] pt-5">
        <div className="w-[100%] flex flex-wrap justify-center items-center overflow-hidden mb-5">
          <h3 className="w-[100%] mb-10 text-center">
            Trusted by over 150+ major companies
          </h3>
          <div
            className="w-full inline-flex flex-nowrap"
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          >
            <div className="w-[100%] flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite_scroll">
              {arrImg.map((item: any) => {
                return <img src={item} alt="pic" width={150} height={150} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mb-14">
            <h1 className="md:font-extrabold md:text-4xl text-lg font-semibold tracking-widest pb-4">
              Featured properties
            </h1>
            <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel lobortis justo
            </h5>
          </div>
          <div className="flex justify-center items-center flex-wrap text-black md:my-3">
            {arrTooltip.map((itemTool: TypeTooltip, index: number) => {
              return (
                <Tooltip
                  interactive={true}
                  offset={20}
                  content={itemTool.place}
                  className="text-black bg-white py-1 px-2 text-xs font-bold rounded-lg shadow-md"
                >
                  <div
                    onClick={() => setActTool(index)}
                    className={`shadow-lg rounded-sm w-[130px] py-1 font-semibold text-center text-xs hover:cursor-pointer ${
                      actTool === index ? "text-orange-400" : "text-black"
                    }  hover:text-orange-400 `}
                  >
                    <span>{itemTool.name}</span>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-2 md:px-10">
        {dataCard.map((item, index) => (
          <div key={index} className="mx-10 md:m-0">
            <Card nameCard={item} />
          </div>
        ))}
      </div>
      <div>
        <div className="text-center mb-10">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg tracking-wider pb-4">
            Search real estate by area
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs">
            Find your dream apartment with our listing
          </h5>
        </div>
        <div className="grid py-3 md:grid-cols-2 lg:grid-cols-4 px-0 md:px-0 grid-cols-1">
          {dataCard.map((dataGrid, index) => (
            <article
              key={index}
              className="w-[100%] relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 max-w-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 hover:opacity-900 hover:animate-imgTrans" />
              <h3 className="z-10 mt-3 font-bold text-white hover:cursor-pointer hover:text-orange-500">
                California
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                1570 listing
              </div>
            </article>
          ))}
        </div>
      </div>
      <div>
        <div className="text-center mb-10 mt-5">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg md:tracking-wider pb-4">
            Properties for sale
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </h5>
        </div>
        <div className="max-w-[1280px] m-[auto] ">
          <SliderSale sliderShow={3} type="" />
        </div>
      </div>
      <div className="mt-5 md:w-[1510px] w-[470px] h-full">
        <div className="text-center mb-10 bg-[#FFF6EA]">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg md:tracking-wider pb-4">
            Properties for rent
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </h5>
          <SliderSale sliderShow={4} type="" />
        </div>
      </div>
      <div className="my-5 h-full ">
        <div className="max-w-[1280px] m-[auto] text-center pb-10">
          <h1 className="md:font-extrabold font-semibold md:text-4xl text-lg md:tracking-wider pb-4">
            Meet the agents
          </h1>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </h5>
          <div className="bg-white md:max-w-[1028px] m-auto md:flex md:justify-between md:items-center grid grid-cols-1 md:pl-0 pl-16">
            <CardParam />
            <CardParam />
            <CardParam />
          </div>
          <h5 className="text-gray-500 md:tracking-tight md:text-sm text-xs text-center mb-5 md:flex md:justify-center md:items-center">
            <p>Become an agent and get the commission you deserve.</p>
            <a
              href="/"
              className="text-orange-500 decoration-orange-400 underline md:pl-1"
            >
              Contact us
            </a>
          </h5>
        </div>
        <div className="max-w-[1280px] m-[auto] w-full grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="w-full md:w-[50%] md:p-0 p-3">
            <div className="w-[460px] mb-10">
              <h1 className="md:tracking-wider md:font-bold font-semibold md:text-4xl text-lg mb-3">
                We provide the most suitable and quality real estate.
              </h1>
              <p className="md:text-sm text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center mb-2">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                </p>
                <div className="text-start ml-12">
                  <p className="text-gray-500 text-sm font-semibold">
                    Office address
                  </p>
                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </p>
                <div className="text-start ml-12">
                  <p className="text-gray-500 text-sm font-semibold">
                    Request a call back
                  </p>
                  <p className="text-orange-500 font-semibold text-3xl">
                    314-555-0123
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </p>
                <div className="text-start ml-12">
                  <p className="text-gray-500 text-sm font-semibold">
                    Email us
                  </p>
                  <p className="text-orange-500 font-semibold text-xs">
                    hellosupport@gmail.com
                  </p>
                </div>
              </div>
              <div className="absolute top-32 -right-56 md:block hidden">
                <img
                  src={girlLogo}
                  alt="Pic Girl"
                  className="transform animate-bounDelay"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex md:justify-between items-center justify-center">
              <div className="md:ml-8 ml-4 mt-5">
                <h2 className="md:font-bold md:text-2xl text-lg mb-1">
                  Contact us
                </h2>
                <p className="text-gray-500 md:text-sm text-xs">
                  We will respond as soon as we receive your message.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 text-orange-500 animate-bounce hover:cursor-pointer pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>
            <div className="p-4 py-1 rounded-lg md:p-8">
              <form>
                <div className="mt-4 mb-1">
                  <label className="block mb-2 text-sm text-black">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="bg-white border text-black pl-[50px] pr-5 border-gray-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      placeholder="Your Name"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-mx-2 md:items-center md:flex mt-4 mb-1">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-black">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="peer py-3 px-4 ps-11 border-gray-300 block w-full bg-white text-black border rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none "
                        placeholder="Email"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="flex-shrink-0 w-4 h-4 text-orange-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-black">
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="peer py-3 px-4 ps-11 border-gray-300 block w-full bg-white text-black border rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none "
                        placeholder="Phone"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="flex-shrink-0 w-4 h-4 text-orange-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-1">
                  <label className="block mb-2 text-sm text-black ">
                    Property Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 text-orange-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                        />
                      </svg>
                    </div>
                    <select
                      id="countries"
                      className="bg-white border text-black pl-[50px] pr-5 border-gray-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    >
                      <option value="Choose" selected>
                        Choose
                      </option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-black">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-24 px-5 py-2.5 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div
                  onMouseMove={() => setActButton(true)}
                  onMouseLeave={() => setActButton(false)}
                  className="w-[40%] mt-4 border-none outline-none rounded-md flex justify-evenly items-center py-2 px-3 bg-[#FFA920] text-white cursor-pointer shadow-md hover:bg-[#F39703] hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${actButton ? "animate-bounce" : null}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <button className="pr-2 text-sm font-semibold">
                    Sent Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
