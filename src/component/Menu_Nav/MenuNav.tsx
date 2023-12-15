import { FC, useEffect, Fragment } from "react";
import { typeMenuChirl } from "../../type/menuType";

const MenuNav: FC<{ menuChirl: typeMenuChirl[] }> = ({ ...prop }) => {
  const { menuChirl } = prop;

  const renderMenuChirl = () => {
    return menuChirl.map((itemChirl: typeMenuChirl) => (
      <p
        key={itemChirl.nameMenuChirl}
        className="text-black hover:text-orange-500"
      >
        {itemChirl.nameMenuChirl}
      </p>
    ));
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <div>{renderMenuChirl()}</div>{" "}
    </Fragment>
  );
};

export default MenuNav;
