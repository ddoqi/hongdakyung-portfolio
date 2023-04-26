import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full">
      <footer className="text-gray-600 body-font flex w-full bg-blue-50">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">HDK PORTFOLIO</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © HDK —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/ddoqi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
