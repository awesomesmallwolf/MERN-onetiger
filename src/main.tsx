import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify'
import Landing from './pages/Landing'
import './index.css'
import 'tw-elements'
import 'react-toastify/dist/ReactToastify.css'
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    Router,
    Routes,
} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Contact from './pages/contact'
import Comprar from './pages/comprar'
import AdminLogin from './pages/admin/login'
import AdminPanel from './pages/admin/panel'
import OfficeHours from './pages/admin/email'
import { ConfigProvider } from 'antd'
import App from './app'

// import Observer from 'tailwindcss-intersect';
// Observer.start()



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
