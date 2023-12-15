import { Tooltip } from "@material-tailwind/react";
import { FC } from "react";
import property from "../../img/property-3.jpg";

const Card: FC<{ nameCard: string }> = ({ nameCard }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl w-[340px]">
      <div className="relative">
        <div className="p-3 overflow-hidden relative">
          <img
            className="mt-5 h-48 rounded-md object-cover relative overflow-hidden w-full"
            src={property}
            alt="anh"
          />
          <div className="absolute top-[38px] right-[14.5px] bg-transparent w-[350px] h-[240px] overflow-hidden rounded-[12px] ">
            <p className="rotate-45 transform absolute -top-[21px] -right-[3rem] bg-[#FFF9EF] font-bold px-9 py-5 m-2 rounded-sm opacity-90" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-orange-500 absolute top-2 right-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute top-14 left-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
          Featured
        </div>
      </div>

      {/* bottom */}
      <div className="p-4">
        <div>
          <h2 className="hover:text-orange-500 font-bold font-mono hover:cursor-pointer">
            Gorgeous Apartment Building
          </h2>
          <div className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <span>58 Hullbrook Road, Billesley, B13 0LA</span>
          </div>
        </div>
        <div>
          <p className="hover:text-orange-500 text-orange-500 font-bold font-mono hover:cursor-pointer my-4">
            $7,500
          </p>
          <div className="flex gap-3 items-center font-sans text-xs">
            <div className="flex justify-around items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>
              <span>Beds: </span>
              <span className="font-semibold">4</span>
            </div>
            <div className="flex justify-around items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </span>
              <span>Baths: </span>
              <span className="font-semibold">2</span>
            </div>
            <div className="flex justify-around items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </span>
              <span>Sqft: </span>
              <span className="font-semibold">1150</span>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-500 mt-4 text-xs tracking-wide font-sans flex justify-between items-center pt-5">
          <div className="flex items-center font-bold">
            <span className="text-orange-500">+</span>
            <p>Compare</p>
          </div>
          <div>
            <Tooltip
              offset={20}
              content={`${nameCard}`}
              className="text-black bg-white py-1 px-2 text-sm font-bold rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${nameCard}/55/55`}
                alt="logoPic"
                className="rounded-[50%] hover:cursor-pointer"
              />
            </Tooltip>
          </div>
          <p className="text-gray-500">3 year ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
