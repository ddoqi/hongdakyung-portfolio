import React from "react";
import { RefObject } from "react";

interface HeaderProps {
  refs: {
    [key: string]: RefObject<HTMLElement>;
  };
}

const Header = ({ refs }: HeaderProps) => {
  console.log(refs);
  const onClickRef = (indexNum: number) => {
    refs[`${indexNum}`].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header className="text-gray-600 body-font border-b-1 fixed z-50 w-full bg-white lg:border-none border-b-2">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="header-nav">
            <div
              onClick={() => {
                window.scroll({ top: 0, behavior: "smooth" });
              }}
            >
              MAIN
            </div>
            <div
              onClick={() => {
                onClickRef(0);
              }}
            >
              INTRODUCE
            </div>
            <div
              onClick={() => {
                onClickRef(1);
              }}
            >
              SKILLS
            </div>
            <div
              onClick={() => {
                onClickRef(2);
              }}
              className="hover:text-gray-900"
            >
              PROJECT
            </div>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl"></span>
          </a>
          <div className="lg:w-2/5 lg:inline-flex hidden lg:justify-end ml-5 lg:ml-0">
            <button
              onClick={() => {
                window.open(
                  "https://zealous-seeker-d06.notion.site/2ead9ae06e4a4f6a8a342b6596d6870e"
                );
              }}
              className="text-white  items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0"
            >
              RESUME
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
