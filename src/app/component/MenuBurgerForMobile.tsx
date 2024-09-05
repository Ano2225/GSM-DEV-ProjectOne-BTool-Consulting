import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '../../../utils/navLinks';

export default function MenuBurgerForMobile({ toggleMenu }: { toggleMenu: () => void }) {
    return (
        <div className="fixed inset-0 z-30">
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={toggleMenu}
            >
            </div>
            <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300">
                <div className="p-6">
                    <button 
                        onClick={toggleMenu} 
                        className="absolute top-10 right-4 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="mb-8 cursor-pointer">
                        <Image
                            src="/assets/logo.webp"
                            alt="B.tool Consulting Logo"
                            width={120}
                            height={80}
                        />
                    </div>
                    <nav className="space-y-4">
                        <button>
                            <Link href="/" className="block text-lg font-medium text-white" onClick={toggleMenu}>Nos services</Link>
                        </button>
                        <div className='mx-8 space-y-2'>
                            {navLinks.map((link)=> (
                                <Link href={link.href} key={link.href} className="block text-lg font-medium text-primary-blue" onClick={toggleMenu}>{link.label}</Link>
                            ))}                            
                        </div>
                        <button>
                            <Link href="/#contact" className="block text-lg font-medium text-white" onClick={toggleMenu}>Nous contactez</Link>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
