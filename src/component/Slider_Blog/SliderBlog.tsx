import { FC, useState } from "react";

const SliderBlog: FC<{ item: any }> = ({ item }) => {
  const { pict, description } = item;
  const [act, setAct] = useState<boolean>(false);
  return (
    <div
      className="w-64 h-[auto] border-none rounded-md mb-5 hover:cursor-pointer relative"
      onMouseMove={() => setAct(true)}
      onMouseLeave={() => setAct(false)}
    >
      <div className="w-full overflow-hidden hover:rounded-md">
        <img
          className={`object-contain w-full rounded-md ${
            act ? "scale-125 transform" : "scale-100"
          } `}
          src={pict}
          alt="pic"
        />
        <div
          className={`h-8 w-26 rounded-md absolute top-24 right-[27%] p-2 bg-white text-black`}
        >
          <div className="flex justify-around items-center text-xs">
            <p className="hover:cursor-none">April</p>
            <div className="flex justify-between items-center ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                />
              </svg>
              <p className="text-orange-500">Housing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 mx-0.5 tracking-tight overflow-hidden">
        <h1 className="text-center font-bold text-md hover:text-orange-500">
          {description}
        </h1>
        <div className="flex items-center text-orange-500 justify-center mt-2 text-xs">
          <button className="">Read more</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2 hover:animate-bounce hover:tranform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SliderBlog;
