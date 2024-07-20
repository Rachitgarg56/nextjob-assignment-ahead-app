import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-[0] left-[0] bg-white z-[100] flex justify-center w-full">
      <header className="flex justify-between h-20 items-center py-3 w-[1300px] px-4">
        <div>
          <Image width={50} height={50} alt="" src="/ahead-logo.png" />
        </div>
        <div className='md:block hidden'>
          <ul className="flex gap-8 items-center">
            <li className="cursor-pointer font-semibold whitespace-nowrap">Emotions</li>
            <li className="cursor-pointer font-semibold whitespace-nowrap">Manifesto</li>
            <li className="cursor-pointer font-semibold whitespace-nowrap">Self-awareness test</li>
            <li className="cursor-pointer font-semibold whitespace-nowrap">Work With Us</li>
          </ul>
        </div>
        <div>
          <button className="cursor-pointer text-white bg-black rounded-full px-5 py-3 font-semibold whitespace-nowrap">
            Download app
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
