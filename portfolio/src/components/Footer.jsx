
import { Link } from "react-router-dom";

import { socialLinks } from "../constants/index";

const Footer = () => {
  return (
    <footer className='bg-white flex items-center justify-around h-[80px] border-t-2 border-black px-4'>
        <p className="text-[15px]">
          © 2024 <strong>Suraj Kumar</strong>. <br className="lg:hidden md:hidden"/> All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='sm:w-10 sm:h-10 w-8 h-8 object-contain bg-white p-1 rounded-full'
              />
            </Link>
          ))}
        </div>

      </footer>
  );
};

export default Footer;
