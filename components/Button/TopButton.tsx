import React from "react";

const TopButton = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-gray-400 justify-center content-center w-10 h-10 rounded-full text-white fixed bottom-5 right-1 md:right-5 lg:right-10 2xl:right-24 z-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
      >
        &#8593;
      </button>
    </>
  );
};

export default TopButton;
