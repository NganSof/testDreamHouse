import { FC, useEffect, useState } from "react";
import Select from "../Select/Select";
import { dataSelect } from "../../data/select";
import { typeStringSelect } from "../../type/selectType";
import DetailFilter from "../Detail_Filter/DetailFilter";
import CountUp from "react-countup";

interface countValue {
  count: number;
  text: string;
}
const TabContent: FC = () => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const handelCountNumber = () => {
    const dataNumberCount: countValue[] = [
      { count: 1500, text: "Property ready" },
      { count: 700, text: "Happy customer" },
    ];
    return (
      <div className="bg-[#FFF9EF] text-black flex items-start gap-6 md:ml-0 ml-10">
        {dataNumberCount.map((valCount: countValue) => (
          <div className="mr-2 w-36">
            <CountUp
              enableScrollSpy={true}
              start={0}
              end={valCount.count}
              suffix=" +"
              className="font-serif font-semibold text-xl"
            />
            <p className="mt-3 text-sm text-gray-500">{valCount.text}</p>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {}, [openDetail]);

  return (
    <div className="md:w-[155vh] w-[460px] border-none outline-none md:h-[130px] h-[300px] rounded-lg bg-white grid grid-col-2 md:flex md:justify-between md:items-center md:gap-5 p-2">
      <div className="md:flex md:justify-center md:items-center md:p-3 md:gap-2 gap-2 grid grid-col-1">
        <div>
          <input
            placeholder="Type keyword..."
            className="md:w-52 w-[400px] px-4 py-2 border rounded-lg placeholder:text-base focus:placeholder:text-base placeholder:text-black focus:outline-none focus:placeholder:text-black focus:ring-1 focus:ring-[#FFA920]"
          />
        </div>
        {dataSelect.map((itemSelect: typeStringSelect) => {
          const { keySelect, nameChirlSelect, nameSelect } = itemSelect;
          return (
            <div key={keySelect}>
              <Select name={nameSelect} chirlSelect={nameChirlSelect} />
            </div>
          );
        })}
      </div>
      <div className=" flex md:justify-around items-center md:gap-4 md:p-4 py-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setOpenDetail(!openDetail);
            }}
            className="relative w-11 h-11 text-orange-500 hover:text-white cursor-pointer hover:cursor-pointer border-none outline-none shadow-md bg-[#FFF9EF] p-2 rounded-md hover:bg-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          <div
            className={`absolute md:top-40 left-0 top-72  ${
              !openDetail ? "shadow-none mt-5" : "shadow-lg"
            } `}
          >
            {openDetail ? <DetailFilter /> : handelCountNumber()}
          </div>
        </div>
        <div className="border-none outline-none rounded-md ml-40 md:ml-0 flex justify-evenly items-center py-2 px-3 bg-[#FFA920] text-white cursor-pointer shadow-md hover:bg-[#F39703] hover:opacity-100 ">
          <button className="pr-2 text-sm font-semibold">Search Now</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
