import { Grid } from '@mui/material'
import React from 'react'
import OrderStore from '../../../store/ServiceStore/OrderStore'
import SummaryDetail from '../../molecules/SummaryDetail/SummaryDetail';
import PackageDetails from '../../molecules/PackageDetails/PackageDetails';

const Billing = () => {
    const packageDetail = {...OrderStore.getPackageDetail()};
    const pickUpAddress = {...OrderStore.getPickUpAddress()};
    const dropAddress = {...OrderStore.getDropAddress()};
    console.log(pickUpAddress);
  return (
    <div className="billing">
        <Grid container justifyContent={'center'} margin={3} gap={1}>
            <Grid item xs={6} >
                <Grid container>
                        <Grid item xs={12} marginY={2} sx={{backgroundColor:'#fff'}}>
                        <SummaryDetail pickUpAddress={pickUpAddress} dropAddress={dropAddress} />
                        </Grid>
                        <Grid item xs={12} marginY={2} sx={{backgroundColor:'#fff'}}>
                        <PackageDetails packageDetail={packageDetail} />
                        </Grid>
                </Grid>
                
            </Grid> 
            <Grid item xs={5}>
                
            </Grid> 
        </Grid>
    </div>
  )
}

export default Billing