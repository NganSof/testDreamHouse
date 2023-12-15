import { FC, useEffect } from "react";

const Text: FC = () => {
  const text: string = "FIND YOUR DREAM REAL ESTATE";
  let textCricle = document.getElementById("textCricle");

  useEffect(() => {
    for (let index = 0; index < text.length; index++) {
      let span = document.createElement("span");
      span.innerHTML = text[index];
      textCricle?.appendChild(span);
      span.style.transform = `rotate${11 * index}deg`;
    }
  }, []);

  return (
    <div className="rounded-[50%] border-none outline-none bg-[#ebdabe] relative animate-spin_text w-36 h-36 flex justify-center items-center  ">
      <p className="bg-[#FFF9EF] w-28 h-28 rounded-[50%] border-none outline-none "></p>
      <p id="textCricle"></p>
    </div>
  );
};

export default Text;
