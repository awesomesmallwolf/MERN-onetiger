import { Select, MenuItem } from '@mui/material'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SaleFormB from './sale-form-b'
import SidebarMobile from './sidebar-mobile'

function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0)
    useLayoutEffect(() => {
        function updatePosition() {
            console.log(window.scrollY)
            setPosition(window.scrollY)
        }
        document.body.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => document.body.removeEventListener('scroll', updatePosition)
    }, [])
    return scrollPosition
}

const Header = () => {
    const nav = useNavigate()
    const [showSidebarMobile, setShowSidebarMobile] = useState(false)
    const [saleFromB, setSaleFromB] = useState(false)

    return (
        <>
            <header
                className={`min-h-[5rem] w-full  flex items-center  dark:bg-white fixed top-0 left-0 z-50 bg-transparent px-12`}
            >
                <a href="/" className="h-full flex items-center">
                    <span className="text-gray-100 font-bold text-xl">
                        VMConsortium
                    </span>
                </a>

                <a
                    href="/"
                    className="p-3 px-4 ml-auto hover:bg-whiteAlpha-300 rounded cursor-pointer md:hidden"
                >
                    <span className="text-gray-200 font-medium dark:text-gray-700">
                        Home
                    </span>
                </a>
                <a
                    onClick={() => setSaleFromB(true)}
                    className="p-3 px-4 hover:bg-whiteAlpha-300 rounded cursor-pointer md:hidden"
                >
                    <span className="text-gray-200 font-medium dark:text-gray-700">
                        Vender
                    </span>
                </a>
                <a
                    href="/comprar"
                    className="p-3 px-4 hover:bg-whiteAlpha-300 rounded cursor-pointer md:hidden "
                >
                    <span className="text-gray-200 font-medium dark:text-gray-700">
                        Comprar
                    </span>
                </a>
                <a
                    href="/contato"
                    className="p-3 px-4 hover:bg-whiteAlpha-300 rounded cursor-pointer md:hidden"
                >
                    <span className="text-gray-200 font-medium dark:text-gray-700">
                        Contato
                    </span>
                </a>

                <div
                    onClick={() => setShowSidebarMobile(true)}
                    className="h-[50px] min-w-[50px] dark:bg-[#f4f5fa] ml-auto rounded justify-center items-center cursor-pointer hidden md:flex"
                >
                    <svg
                        viewBox="0 0 32 32"
                        focusable="false"
                        className="w-4 h-4"
                        aria-hidden="true"
                    >
                        <path
                            className="fill-gray-100 dark:fill-gray-850"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 20H28V22H4V20ZM4 10H28V12H4V10Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                {showSidebarMobile && (
                    <SidebarMobile
                        onClose={() => setShowSidebarMobile(false)}
                    />
                )}
            </header>
            <SaleFormB
                open={saleFromB}
                handleClose={() => setSaleFromB(false)}
            />
        </>
    )
}

export default Header
