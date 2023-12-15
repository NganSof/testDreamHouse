import { FC, useState } from "react";
import { Tabs, TabsHeader } from "@material-tailwind/react";
import TabContent from "./TabContent";

const TabHeader: FC = () => {
  const nameTabs: string[] = ["Ren", "Buy"];
  const [tabActive, setTabActive] = useState<number>(0);
  return (
    <Tabs
      value="html"
      className="w-[155vh] rounded-lg outline-none border-none shadow-xl "
    >
      <TabsHeader className={`w-48 md:flex outline-none md:ml-0 ml-[6rem]`}>
        {nameTabs.map((name: string, index: number) => (
          <button
            onClick={() => {
              setTabActive(index);
            }}
            key={index}
            className={`w-[100%] h-[100%] border-none outline-none px-5 font-[500]
              ${
                index === tabActive
                  ? "bg-orange-500 text-white"
                  : "bg-[#FFF9EF] text-black hover:bg-orange-500 hover:text-white hover:animate-wiggle"
              } 
              hover:${
                index === 0
                  ? "rounded-tl-lg rounded-tr-none"
                  : "rounded-tr-lg rounded-tl-none"
              } ${
              index === 0
                ? "rounded-tl-lg rounded-tr-none"
                : "rounded-tr-lg rounded-tl-none"
            } `}
          >
            {name}
          </button>
        ))}
      </TabsHeader>
      <TabContent />
    </Tabs>
  );
};

export default TabHeader;
