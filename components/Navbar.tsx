'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-20 ${
        shadow ? 'shadow-xl' : ''
      } z-50 bg-[#ecf0f3]`}
    >
      <div className="flex justify-between items-center px-6 w-full h-full 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/navLogo.png"
            width={125}
            height={50}
            alt="navbar logo"
            className="object-contain"
          />
        </Link>

        <div>
          <ul className="hidden md:flex gap-10">
            <li className="text-sm uppercase hover:border-b hover:border-b-gray-500">
              <Link href="#home">Home</Link>
            </li>
            <li className="text-sm uppercase hover:border-b hover:border-b-gray-500">
              <Link href="#about">About</Link>
            </li>
            <li className="text-sm uppercase hover:border-b hover:border-b-gray-500">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="text-sm uppercase hover:border-b hover:border-b-gray-500">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="text-sm uppercase hover:border-b hover:border-b-gray-500">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu & Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-150%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/navLogo.png"
                width={125}
                height={50}
                alt="navbar logo"
                className="object-contain"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul
              className="uppercase"
              onClick={e => {
                const target = e.target as HTMLAnchorElement;
                if (target.tagName === 'A') handleNav();
              }}
            >
              <li className="py-4 text-sm">
                <Link href="#home">Home</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="#about">About</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/spormuv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
