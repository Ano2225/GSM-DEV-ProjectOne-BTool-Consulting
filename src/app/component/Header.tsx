"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuBurgerForMobile from './MenuBurgerForMobile';
import { navLinks } from '../../../utils/navLinks';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    


    return (
        <header className="bg-white shadow-md py-4 fixed top-0 w-full z-20">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex items-center">
                    <Link href="/" className='cursor-pointer'>
                        <Image
                            src="/assets/logo.webp"
                            alt="B.tool Consulting Logo"
                            width={150}
                            height={50}
                        />
                    </Link>
                </div>
                <nav className="hidden lg:flex space-x-8 text-lg font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.href} className="hover:text-primary-blue">{link.label}</Link>
                    ))}                    
                </nav>
                <div className="hidden lg:block">
                    <Link href="#contact" className="bg-primary-blue text-white px-6 py-2 rounded-full font-bold hover:bg-secondary-turquoise transition">
                        Contactez-nous
                    </Link>
                </div>
                <div className="lg:hidden" onClick={toggleMenu}>
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328" />
                        <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328" />
                        <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328" />
                    </svg>
                </div>
                {isOpen && <MenuBurgerForMobile toggleMenu={toggleMenu} />}
            </div>
        </header>
    );
}
