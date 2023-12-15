import { FC } from "react";

const CardFooter: FC = () => {
  return (
    <div className="overflow-hidden w-[340px]">
      <div className="bg-white my-3 text-center py-3 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-center text-orange-500 m-auto"
        >
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
        </svg>
        <p className="m-5 text-xs italic">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsa
          repellendus culpa ipsam maiores asperiores laborum porro! Ipsa
          provident voluptate quibusdam quam eveniet suscipit eum nam! Facere
          nostrum atque ipsum?"
        </p>
      </div>
      {/* bottom */}
      <div className="p-6 text-center text-md bg-transparent">
        <img
          src="https://picsum.photos/seed/picsum/80/80"
          alt="anh"
          className="object-cover rounded-[50%] m-auto"
        />
        <h4 className="mt-2">Esther Howard</h4>
        <p className="text-gray-500">Internet Security Assistant</p>
      </div>
    </div>
  );
};

export default CardFooter;
