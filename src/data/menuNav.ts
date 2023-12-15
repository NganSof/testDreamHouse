import { typeMenuNav } from "../type/menuType";

export const dataMenuNav: typeMenuNav[] = [
  {
    key: 1,
    nameMenu: "Home",
    active: true,
    menuChirl: [
      { nameMenuChirl: "Home Page 01" },
      { nameMenuChirl: "Home Page 02" },
      { nameMenuChirl: "Home Page 03" },
      { nameMenuChirl: "Home Page 04" },
      { nameMenuChirl: "Home Page 05" },
    ],
  },
  {
    key: 2,
    nameMenu: "Property",
    active: false,
    menuChirl: [
      { nameMenuChirl: "Property List" },
      { nameMenuChirl: "Property Grid" },
      { nameMenuChirl: "Property Detail" },
      { nameMenuChirl: "Property Map" },
    ],
  },
  {
    key: 3,
    nameMenu: "Page",
    active: false,
    menuChirl: [
      { nameMenuChirl: "About Us" },
      { nameMenuChirl: "Faq's" },
      { nameMenuChirl: "Pricing" },
      { nameMenuChirl: "Error" },
      { nameMenuChirl: "Agents" },
      { nameMenuChirl: "Agencies" },
      { nameMenuChirl: "Dashboard" },
    ],
  },
  {
    key: 4,
    nameMenu: "Blog",
    active: false,
    menuChirl: [
      { nameMenuChirl: "Blog List" },
      { nameMenuChirl: "Blog Grid" },
      { nameMenuChirl: "Blog Detail" },
    ],
  },
  { key: 5, nameMenu: "Contact", active: false },
];
