import ReactSlider from "react-slider";
import { FC, useState } from "react";
import "./style.css";

const SliderChirl: FC<{ name: string; minValue: number; maxValue: number }> = ({
  name,
  minValue,
  maxValue,
}) => {
  const [maValue, setMaxValue] = useState(maxValue);
  const [miValue, setMinValue] = useState(minValue);

  return (
    <div className="flex flex-wrap">
      <div className="flex justify-between items-center px-3 gap-9">
        <h3 className="font-semibold">{name}</h3>
        <span>
          ${miValue} - ${maValue}
        </span>
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[100, 100000]}
        max={100000}
        min={100}
        renderThumb={(props, state) => <div {...props}> </div>}
        onChange={(value: any, index) => {
          if (value[0] !== minValue) {
            setMinValue(value[0]);
          } else {
            setMaxValue(value[1]);
          }
        }}
      />
    </div>
  );
};
export default SliderChirl;
