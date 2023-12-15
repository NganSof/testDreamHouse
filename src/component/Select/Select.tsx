import { FC, useEffect, useState } from "react";

const Select: FC<{ name: string; chirlSelect: string[] }> = ({
  name,
  chirlSelect,
}) => {
  const keychirlSelect = Object.entries(chirlSelect);
  const [changeName, setChangeName] = useState<string>("");

  useEffect(() => {}, [chirlSelect]);

  return (
    <select className="md:w-52 w-[400px] px-4 py-2 pb-2 border rounded-lg placeholder:text-base focus:placeholder:text-base placeholder:text-black focus:outline-none focus:placeholder:text-black hover:cursor-pointer cursor-pointer ">
      {keychirlSelect.map((chirl: string[]) => (
        <option
          key={chirl[0]}
          onClick={() => {
            setChangeName(chirl[1]);
          }}
        >
          {chirl[1]}
        </option>
      ))}
    </select>
  );
};

export default Select;
