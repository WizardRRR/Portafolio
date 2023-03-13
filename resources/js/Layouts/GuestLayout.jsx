import ApplicationLogo from '@/Components/ApplicationLogo';
import LinkNav from '@/Components/LinkNav';
import { Link } from '@inertiajs/react';
import { useState } from 'react'
import Menu from '../../img/Menu_Hamburguesa.svg'

export default function Guest({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='min-h-screen bg-gradient-to-tr
            from-violet-900 to-blue-400
            '>
            <header className='w-full bg-blue-900 flex flex-row p-2 items-center transition-all  justify-between'>
                <Link
                    href="/"
                    className='basis-1/4 text-white text-2xl sm:text-2xl font-bold text-center hover:text-cyan-500 md:hover:text-3xl transition-all leading-10'
                >
                    WizardRevenge
                </Link>
                <div className={`basis-3/4 md:flex md:justify-end md:pr-10 ${menuOpen ?
                    `flex flex-col absolute top-14 right-0 md:flex-row md:relative md:top-0 bg-black bg-opacity-70 md:bg-transparent inset-0 h-full text-center pt-10 md:pt-0` : `hidden`}`}>
                    <LinkNav title='Home' href='/' />
                    <LinkNav title='About' href='/about' />
                    <LinkNav title='Contact' href='/contact' />
                    <LinkNav title='Login' href='/login' />
                    <LinkNav title='Register' href='/register' />
                </div>
                <button
                    type=""
                    className='justify-end md:hidden'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img src={Menu} alt="" className='w-10' />
                </button>
            </header>
            <main className='pt-10 p-2'>
                {children}
            </main>
        </div>
    );
}
