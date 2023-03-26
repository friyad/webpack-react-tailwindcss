import React from "react";
import { NavItemsData } from "../../data/NavItemsData";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/scribeLogo.png";

const navItemStyle =
  "text-center text-2xs lg:text-xs xl:text-sm mxl:text-base font-semibold text-white hover:text-blue-600 hover:font-semibold hover:tracking-wider transition-all duration-300 mr-2.5 lg:mr-[13px] xl:mr-5 2xl:mr-7 cursor-pointer";
const navItemStyle2 = `text-left text-sm sm:text-base font-semibold hover:tracking-wider transition-all duration-200 text-white p-3 rounded-md mb-1 hover:bg-blue-600`;
const navIconsStyle = `mr-1 lg:mr-1.5 xl:mr-2 hover:scale-110 flex active:scale-100 transition-all duration-300 hover:bg-blue-600 w-7 xl:w-8 mxl:w-10 h-7 xl:h-8 mxl:h-10 rounded-full justify-center items-center`;
const navIconsStyle2 = `mr-3 hover:scale-110 flex active:scale-100 transition-all duration-300 bg-blue-600 w-8 h-8 rounded-full justify-center items-center`;

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const [headerBg, setHeaderBg] = React.useState(false);

  let lastScrollTop = 88;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  });

  const goTo = (id) => {
    let destination = document.querySelector(id);
    let yCoord = destination.offsetTop - 150;
    window.scrollTo({
      top: yCoord,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        headerBg
          ? "bg-[#0b0e24a1] border-b border-gray-800 backdrop-blur-lg"
          : ""
      } sticky top-[0px] w-full z-50`}
    >
      <div className="flex justify-between items-center w-[86%] lg:w-10/12 2xl:w-full 2xl:max-w-screen-mxl mx-auto py-4">
        <div className="">
          <a href="/">
            <img
              src={logo}
              alt=""
              className="w-full block h-10 lg:h-11 xl:h-14 2xl:h-16"
            />
          </a>
        </div>

        <div className="flex justify-end items-center ml-2 lg:ml-0">
          <div className="justify-center items-center hidden md:flex flex-1">
            {NavItemsData.map((item) => {
              const { id, link, label } = item;
              return (
                <button
                  key={id}
                  onClick={() => goTo(link)}
                  className={navItemStyle}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="justify-end items-center hidden md:flex">
            <a
              href="https://www.tiktok.com/@scribs_nft"
              target="_blank"
              rel="noreferrer"
              className={navIconsStyle}
            >
              <BsDiscord className="w-3 lg:w-3.5 xl:w-4 mxl:w-[17px] 2xl:w-5 h-auto fill-white" />
            </a>
            <a
              href="https://www.tiktok.com/@scribs_nft"
              target="_blank"
              rel="noreferrer"
              className={navIconsStyle}
            >
              <AiOutlineInstagram className="w-3 lg:w-3.5 xl:w-4 mxl:w-[17px] 2xl:w-6 h-auto fill-white" />
            </a>
            <a
              href="https://www.tiktok.com/@scribs_nft"
              target="_blank"
              rel="noreferrer"
              className={navIconsStyle}
            >
              <AiFillYoutube className="w-3 lg:w-3.5 xl:w-4 mxl:w-[17px] 2xl:w-6 h-auto fill-white" />
            </a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-800 hidden md:inline-block px-3 lg:px-6 2xl:px-8 py-2 lg:py-2.5 mxl:py-2 text-2xs lg:text-xs xl:text-sm mxl:text-base text-white font-semibold rounded-full hover:tracking-wider transition-all duration-300">
            Connect Wallet
          </button>

          <button
            className="md:hidden"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <HiOutlineMenu className="w-7 sm:w-16 h-auto text-white" />
          </button>
        </div>

        {/* side menubar for small devices */}
        <div
          className={`transition-all duration-200 fixed h-screen w-full inset-0 md:hidden overflow-auto
                ${
                  !sideBarOpen
                    ? "translate-x-[-100%]"
                    : "translate-x-0 bg-[#03031c] p-5"
                }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <a
                href="https://www.tiktok.com/@scribs_nft"
                target="_blank"
                rel="noreferrer"
                className={navIconsStyle2}
              >
                <BsDiscord className="w-4 lg:w-5 mxl:w-5 fill-white" />
              </a>
              <a
                href="https://www.tiktok.com/@scribs_nft"
                target="_blank"
                rel="noreferrer"
                className={navIconsStyle2}
              >
                <AiOutlineInstagram className="w-4 lg:w-5 mxl:w-5 fill-white" />
              </a>
              <a
                href="https://www.tiktok.com/@scribs_nft"
                target="_blank"
                rel="noreferrer"
                className={navIconsStyle2}
              >
                <AiFillYoutube className="w-4 lg:w-5 mxl:w-5 fill-white" />
              </a>
            </div>

            <button
              className="w-9 h-9 rounded-full border-gray-600 border-2 bg-gray-700 flex justify-center items-center"
              onClick={() => setSideBarOpen(false)}
            >
              <IoClose className="w-6 h-auto text-slate-300" />
            </button>
          </div>

          <div className="flex flex-col mt-6">
            {NavItemsData.map((item) => {
              const { id, link, label } = item;
              return (
                <button
                  key={id}
                  onClick={() => {
                    goTo(link);
                    setSideBarOpen(false);
                  }}
                  className={navItemStyle2}
                >
                  {label}
                </button>
              );
            })}

            <button className="bg-blue-600 hover:bg-blue-800 px-6 py-2 mt-4 text-xs xl:text-sm mxl:text-base text-white font-semibold rounded-full hover:tracking-wider transition-all duration-300">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
