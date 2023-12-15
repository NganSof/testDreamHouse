import { FC, useEffect } from "react";
import SelectChirl from "../Select/Select";
import { dataFilter } from "../../data/select";
import { typeStringSelect } from "../../type/selectType";
import SliderChirl from "../Slider_Chirl/SliderChirl";
import { Checkbox } from "@material-tailwind/react";

const DetailFilter: FC = () => {
  useEffect(() => {}, []);
  const dataCheckbox: string[] = [
    "Swimming pool",
    "Garage",
    "Alarm system",
    "Balcony",
    "Outdoor area",
    "Broadband",
    "Ensuite",
    "Built in robes",
    "Gym",
    "Tennis court",
    "Study",
    "Outdoor spa",
  ];
  return (
    <div className="md:w-[155vh] w-[460px] border-none outline-none h-auto p-3 rounded-lg bg-white flex justify-between items-center flex-wrap">
      {/* top */}
      <div className="md:flex md:justify-between md:items-center grid grid-cols-1 w-full">
        <div className="md:flex md:justify-center md:items-center grid grid-cols-1 w-full p-3 gap-2">
          {dataFilter.map((itemFilter: typeStringSelect) => {
            const { keySelect, nameChirlSelect, nameSelect } = itemFilter;
            return (
              <div key={keySelect}>
                <SelectChirl name={nameSelect} chirlSelect={nameChirlSelect} />
              </div>
            );
          })}
        </div>
        <div className="md:flex md:justify-evenly md:items-center p-3 gap-2 grid grid-cols-1 w-[100%]">
          <SliderChirl name="From" minValue={100} maxValue={1000000} />
          <SliderChirl name="Size" minValue={0} maxValue={500000} />
        </div>
      </div>
      <hr className="bg-gray-500 w-full mx-4" />
      {/* bottom */}
      <div className="flex md:justify-between md:items-center flex-wrap p-2 w-full">
        {/* render checkbox */}
        <div className="grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-1 p-2 w-[100%]">
          {dataCheckbox.map((itemCheck: string, index: number) => {
            return (
              <div>
                <Checkbox crossOrigin={"anonymous"} label={itemCheck} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailFilter;
