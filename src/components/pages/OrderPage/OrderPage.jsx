import { Grid } from '@mui/material'
import React from 'react'
import ServiceList from '../../molecules/ServiceList/ServiceList'
import ServiceStore from '../../../store/ServiceStore/ServiceStore'
import OrderForm from '../../organisms/OrderForm/OrderForm'

const OrderPage = () => {
    const selectedService = ServiceStore.getSelectedService();
  return (
    <div className="orderPage">
        <Grid container justifyContent={'center'}>
            <Grid item xs={12}>
                {/* <ServiceList providerDetails={selectedService} /> */}
            </Grid>
            <Grid item xs={12}>
                <OrderForm />
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderPage