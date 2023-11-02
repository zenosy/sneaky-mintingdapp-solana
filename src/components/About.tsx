/* eslint-disable @next/next/no-img-element */
import { Fade, Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="flex items-center justify-center w-full mt-10" id="about">
      <div className="w-full flex justify-center p-[5px] max-w-[1340px] flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center gap-10 mx-10 my-10 lg:flex-row">
            <div className="relative">
              <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
                About Us
              </p>
              <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
                our
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 mt-10">
          <span className="flex items-center justify-center gap-3 ">
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
              5000
            </span>{" "}
            <img src="/img/monster.svg" className="w-[70px] h-[70px]" alt="" />{" "}
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-black">
              SNEAKY KITTENS
            </span>
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-black">
              BUILD
            </span>{" "}
            <img src="/img/monster2.svg" className="w-[70px] h-[70px]" alt="" />{" "}
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
              PASSIVE INCOME
            </span>
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
              SOLANA
            </span>{" "}
            <img src="/img/monster3.svg" className="w-[70px] h-[70px]" alt="" />{" "}
            <span className="text-[10px] md:text-[40px] lg:text-[70px] font-Gulfs text-black">
              BLOCKCHAIN
            </span>
          </span>
          <Fade delay={1e3} cascade damping={1e-1}>
            <span className="text-lg font-semibold text-center text-gray-700">
              {` Discover our enchanting collection of 5,000 unique Sneaky Kittens
              NFTs, each with its own personality and charm. As a part of our
              community, you’re not just owning a piece of digital art, you're
              stepping into a world of adventure and unlocking a path to
              fantastic passive income.`}
            </span>
          </Fade>
        </div>
      </div>
    </div>
  );
}