// import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HeaderLink } from "./HeaderLink";
import { useOnClickOutside } from "usehooks-ts";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import {
  motion,
  useReducedMotion,
  easeInOut,
  AnimatePresence,
} from "motion/react";
import { animationPresets } from "../constants/animationPresets";

export const Nav = () => {
  const shouldReduceMotion = useReducedMotion();
  const mediumPreset = animationPresets.medium;
  const extraLargePreset = animationPresets.extraLarge;
  const [isDropDownOpen, setIsDropdownOpen] = useState(false); // dropdown behavior for mobile

  // ref for the dropdown
  const dropDownRef = useRef<HTMLDivElement>(null);
  const handleClickOutsideDropdown = () => {
    setIsDropdownOpen(false);
  };
  useOnClickOutside(
    dropDownRef as React.RefObject<HTMLElement>,
    handleClickOutsideDropdown,
  );

  return (
    <header>
      {/* desktop */}
      <motion.nav
        className="fixed left-1/2 z-50 mt-(--nav-top-gap) hidden h-(--nav-height) -translate-x-1/2 items-center justify-center gap-4 rounded-(--nav-rounding) bg-(--primary-50) p-(--nav-padding) shadow-xl outline outline-(--primary-200) backdrop-blur-3xl sm:flex"
        initial={
          shouldReduceMotion
            ? {}
            : {
                y: -mediumPreset.distance,
                opacity: 0,
                filter: `blur(${mediumPreset.blurAmount}px)`,
              }
        }
        animate={
          shouldReduceMotion ? {} : { y: 0, opacity: 1, filter: "blur(0px)" }
        }
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: mediumPreset.duration,
                delay: mediumPreset.delay,
                ease: easeInOut,
              }
        }
      >
        <HeaderLink text="Home" to="/" />
        <HeaderLink text="Team" to="/team" />
        <HeaderLink text="Portfolio" to="/portfolio" />
        <HeaderLink text="Contact" to="/contact" />
      </motion.nav>

      {/* mobile */}
      <motion.nav
        className="fixed left-1/2 z-50 mt-(--nav-top-gap) flex h-(--nav-height) w-[calc(90%-1.5rem)] -translate-x-1/2 items-center justify-center gap-4 rounded-(--nav-rounding) bg-(--primary-50) p-(--nav-padding) shadow-xl outline outline-(--primary-200) backdrop-blur-3xl sm:hidden"
        initial={
          shouldReduceMotion
            ? {}
            : {
                y: -mediumPreset.distance,
                opacity: 0,
                filter: `blur(${mediumPreset.blurAmount}px)`,
              }
        }
        animate={
          shouldReduceMotion ? {} : { y: 0, opacity: 1, filter: "blur(0px)" }
        }
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: mediumPreset.duration,
                delay: mediumPreset.delay,
                ease: easeInOut,
              }
        }
      >
        <div className="relative flex w-full items-center justify-between">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="ml-(--nav-mobile-spacing-nudge) h-8 w-8 object-cover transition-transform duration-200 hover:scale-110"
            />
          </Link>
          <button className="group relative flex items-center justify-center">
            {isDropDownOpen ? (
              <div className="group relative mr-(--nav-mobile-spacing-nudge) flex items-center justify-center">
                <RxCross2
                  className="z-40 h-8 w-8 cursor-pointer text-(--primary-900)"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <span
                  className="pointer-events-none absolute z-30 h-15 w-15 cursor-pointer rounded-full from-(--primary-100) from-30% to-(--primary-200) group-hover:bg-linear-to-b"
                  onClick={() => setIsDropdownOpen(true)}
                ></span>
              </div>
            ) : (
              <div className="group relative mr-(--nav-mobile-spacing-nudge) flex items-center justify-center">
                <RxHamburgerMenu
                  className="z-40 h-8 w-8 cursor-pointer text-(--primary-900)"
                  onClick={() => setIsDropdownOpen(true)}
                />
                <span
                  className="pointer-events-none absolute z-30 h-15 w-15 cursor-pointer rounded-full from-(--primary-100) from-30% to-(--primary-200) group-hover:bg-linear-to-b"
                  onClick={() => setIsDropdownOpen(true)}
                ></span>
              </div>
            )}
          </button>
        </div>
      </motion.nav>
      {/* dropdown menu */}
      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            ref={dropDownRef}
            key="dropdown"
            className="fixed left-1/2 z-40 mt-(--nav-top-gap) flex h-fit w-[calc(90%-1.5rem)] -translate-x-1/2 flex-col gap-y-3 rounded-(--nav-rounding) bg-(--primary-50)/50 px-(--nav-mobile-spacing-nudge) pt-[calc(var(--nav-height)*1.3)] pb-(--nav-padding) shadow-xl outline outline-(--primary-200) backdrop-blur-xl sm:hidden"
            initial={
              shouldReduceMotion
                ? {}
                : {
                    y: -mediumPreset.distance,
                    scale: mediumPreset.scaleAmount,
                    opacity: 0,
                    filter: `blur(${mediumPreset.blurAmount}px)`,
                  }
            }
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: 0,
                    opacity: 1,
                    scale: 1.0,
                    filter: "blur(0px)",
                  }
            }
            exit={
              shouldReduceMotion
                ? {}
                : {
                    y: -mediumPreset.distance,
                    opacity: 0,
                    scale: mediumPreset.scaleAmount,
                    filter: `blur(${extraLargePreset.blurAmount}px)`,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : extraLargePreset.duration,
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
          >
            <div
              className="flex w-full"
              onClick={() => setIsDropdownOpen(false)}
            >
              <HeaderLink text="Home" to="/" />
            </div>
            <div
              className="flex w-full"
              onClick={() => setIsDropdownOpen(false)}
            >
              <HeaderLink text="Team" to="/team" />
            </div>
            <div
              className="flex w-full"
              onClick={() => setIsDropdownOpen(false)}
            >
              <HeaderLink text="Portfolio" to="/portfolio" />
            </div>
            <div
              className="flex w-full"
              onClick={() => setIsDropdownOpen(false)}
            >
              <HeaderLink text="Contact" to="/contact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};;
