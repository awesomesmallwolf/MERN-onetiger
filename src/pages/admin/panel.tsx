import { useEffect, useState } from 'react'
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses,
} from 'react-pro-sidebar'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { BASE_URL } from '../../env'
import useDarkMode from '../../hooks/use-dark-mode'
import Address from './address'
import Admins from './administrators'
import BankInfo from './bank-info'
import ClienteComprando from './cliente-comprando'
import ClienteVendendo from './cliente_vendendo'
import CNPJ from './cnpj'
import AdminEmail from './email'
import Form from './form'
import OfficeHours from './office-hours'
import AdminTels from './tels'

const AdminPanel = () => {
    const [isLogged, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const dark = useDarkMode()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/admin/login')
        }

        fetch(`${BASE_URL}/admin/update-configs`).then((res) => {
            if (res.status === 401) {
                localStorage.removeItem('token')
                window.location.href = '/admin/login'
            }
        })

        setIsLoggedIn(!!token)
    }, [])

    const sidebarr = (
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    height: '100vh',
                    background: dark ? '#0D0909' : '#f6f6f6',
                },
            }}
        >
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        return {
                            color: dark ? '#fff' : '#0D0909',
                            background: dark ? '#0D0909' : '#f6f6f6',
                        }

                    },
                }}
            >
                <SubMenu label="ADM SITE">
                    <SubMenu label="ELEMENTOS EXTERNOS">
                        <MenuItem onClick={() => navigate('/admin/email')}>
                            EMAILS
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/admin/telefones')}>
                            TELFEFONES{' '}
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate('/admin/office-hours')}
                        >
                            HORARIO DE ATENDIMENTO{' '}
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/admin/cnpj')}>
                            CNPJ{' '}
                        </MenuItem>

                        <MenuItem onClick={() => navigate('/admin/address')}>
                            ENDEREÇO
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/admin/form')}>
                            FORMULARIOS
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="ELEMENTOS INTERNOS">
                        <MenuItem
                            onClick={() => navigate('/admin/administrators')}
                        >
                            ADMINISTRADORAS
                        </MenuItem>
                        <MenuItem>MARGEM COTISTA</MenuItem>
                        <MenuItem>TEXTOS MODELOS</MenuItem>
                        <MenuItem>TAGS PERSONALIZADAS - FORMULARIO</MenuItem>
                        {/* <MenuItem>CNPJ </MenuItem> */}
                        <MenuItem>MOD WHATSAPP</MenuItem>
                        <MenuItem>MOD TEL </MenuItem>
                        <MenuItem onClick={() => navigate('/admin/bank-info')}>
                            DADOS BANCARIOS
                        </MenuItem>

                        {/* <MenuItem>ENDEREÇO</MenuItem> */}
                    </SubMenu>
                </SubMenu>

                <SubMenu label="GERENCIAR CLIENTES">
                    <MenuItem
                        onClick={() => navigate('/admin/cliente-vendendo')}
                    >
                        CLIENTE VENDENDO
                    </MenuItem>
                    <MenuItem
                        onClick={() => navigate('/admin/cliente-comprando')}
                    >
                        CLIENTE COMPRANDO
                    </MenuItem>
                    <MenuItem>CONTATOS DE CLIENTES</MenuItem>
                </SubMenu>

                <SubMenu label="CONFIG MKT">
                    <MenuItem>MKT INTERNO</MenuItem>
                    <MenuItem>CADASTRO COTISTAS</MenuItem>
                    <MenuItem>EMAILS AUTOMATICOS</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )

    const header = (
        <div className="min-h-[4rem] w-full  flex items-center px-4 bg-primary-1">
            <a href="/admin" className="h-full flex items-center">
                <span className="text-gray-100 font-bold text-xl">
                    VMConsortium
                </span>
            </a>

            <div
                className="p-3 px-4 hover:bg-whiteAlpha-300 rounded cursor-pointer ml-auto"
                onClick={() => {
                    if (document.body.classList.contains('dark'))
                        document.body.classList.remove('dark')
                    else document.body.classList.add('dark')
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-5 h-5"
                    aria-hidden="true"
                >
                    <path
                        className="fill-gray-100"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.25 1.5H12.75V5.22H11.25V1.5ZM16.2651 6.66751L18.8954 4.03801L19.9559 5.09851L17.3256 7.72876L16.2651 6.66751ZM18.7802 11.25H22.5002V12.75H18.7802V11.25ZM16.2697 17.328L17.3302 16.2675L19.9604 18.8978L18.8999 19.9575L16.2697 17.328ZM11.25 18.78H12.75V22.5H11.25V18.78ZM4.04688 18.9015L6.67788 16.2712L7.73838 17.3317L5.10813 19.962L4.04688 18.9015ZM1.5 11.25H5.22V12.75H1.5V11.25ZM4.04234 5.10226L5.10359 4.04176L7.73384 6.67201L6.67334 7.73251L4.04234 5.10226ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>
    )

    if (!isLogged) return null

    return (
        <div className="h-[100vh] w-[100vw] flex flex-col overflow-x-hidden bg-white dark:bg-primary-3">
            {header}
            <div className="flex">
                {sidebarr}
                <div className="overflow-y-auto p-6 w-full flex flex-col">
                    <Routes>
                        <Route path="email" element={<AdminEmail />} />
                        <Route path="telefones" element={<AdminTels />} />
                        <Route path="office-hours" element={<OfficeHours />} />
                        <Route path="address" element={<Address />} />
                        <Route path="cnpj" element={<CNPJ />} />
                        <Route path="form" element={<Form />} />
                        <Route path="administrators" element={<Admins />} />
                        <Route path="bank-info" element={<BankInfo />} />

                        <Route
                            path="cliente-vendendo"
                            element={<ClienteVendendo />}
                        />
                        <Route
                            path="cliente-comprando"
                            element={<ClienteComprando />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
