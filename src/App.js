import React from 'react'
import './App.scss'
import Landing from './components/pages/Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Order from './components/pages/Order/Order'
import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import ServiceListPanel from './components/pages/ServiceListPanel/ServiceListPanel'
import OrderForm from './components/organisms/OrderForm/OrderForm'
import OrderPage from './components/pages/OrderPage/OrderPage'
import Billing from './components/pages/Billing/Billing'

const App = () => {
  return (
    <div className="mainApplication">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Landing />}></Route>
              <Route path="/orderNow" element={<Order />}></Route>
              <Route path="/serviceProviders" element={<ServiceListPanel />}></Route>
              <Route path="/orderPage" element={<OrderPage/>}></Route>
              <Route path="/billing" element={<Billing />}></Route>
          </Routes>
      </BrowserRouter>
      </LocalizationProvider>
    </div>
  )
}

export default App
