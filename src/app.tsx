import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { ConfigProvider } from 'antd'
import { useMemo } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import useDarkMode from './hooks/use-dark-mode'
import AdminLogin from './pages/admin/login'
import AdminPanel from './pages/admin/panel'
import Comprar from './pages/comprar'
import Contact from './pages/contact'
import Landing from './pages/Landing'

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#400709',
        },
        secondary: {
            main: '#080D3B',
        },
    },
})

const App = () => {
    const dark = useDarkMode()

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: !dark? 'light' : 'dark',
                    primary: {
                        // Purple and green play nicely together.
                        main: '#400709',
                    },
                    secondary: {
                        main: dark? '#232f96' : '#080D3B',
                    },
                },
            }),
        [dark]
    )
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <ThemeProvider theme={theme}>
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/contato" element={<Contact />} />
                            <Route path="/comprar" element={<Comprar />} />
                            <Route path="admin/*" element={<AdminPanel />} />
                            <Route
                                path="/admin/login"
                                element={<AdminLogin />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
            <ToastContainer position="top-center" />
        </ConfigProvider>
    )
}

export default App
