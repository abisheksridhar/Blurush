import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ServiceList from '../../molecules/ServiceList/ServiceList';
import ServiceStore from '../../../store/ServiceStore/ServiceStore';
import { useNavigate } from 'react-router-dom';
 
const ServiceListPanel = () => {
    const navigate = useNavigate();
    const serviceList= [
        {
            providerName:"DHL",
            estimatedDays:"2-3",
            price:140,
            rating:4,
            reviews:21,
            image:"https://imgur.com/Ee2xIAr",
            benefits:['On time delivery','Secure package'],
            availableOffers:"10% discount on first courier"
        },
        {
            providerName:"Professional",
            estimatedDays:"1-3",
            price:90,
            rating:5,
            reviews:21,
            image:"https://imgur.com/UYa7qld",
            benefits:['On time delivery','Secure package'],
            availableOffers:"10% discount on first courier"
        },
        {
            providerName:"BlueDart",
            estimatedDays:"2-3",
            price:120,
            rating:4,
            reviews:21,
            image:"https://imgur.com/QucwHpZ",
            benefits:['On time delivery','Secure package'],
            availableOffers:"10% discount on first courier"
        },
        {
            providerName:"Delhivery",
            estimatedDays:"2-3",
            price:100,
            rating:3,
            reviews:21,
            image:"https://imgur.com/f4yXx07",
            benefits:['On time delivery','Secure package'],
            availableOffers:"10% discount on first courier"
        }
    ];

    const onServiceClick = (service)=>{
        ServiceStore.addSelectedService(service);
        navigate("/orderPage")
    }

  return (
    <Grid container justifyContent={"center"} alignItems={'center'} paddingX={1} >
        <Grid item xs={12} lg={3}>

        </Grid>
        <Grid item xs={12} lg={8}>
        <Grid container>
        {serviceList.map(service=>{
            return(
                <Grid item xs={12} lg={12} key={service.providerName} onClick={()=>onServiceClick(service)}>
                    <ServiceList providerDetails={service}/>
                </Grid>
            )
        })}
        </Grid>
    </Grid>
    </Grid>
  )
}

export default ServiceListPanel