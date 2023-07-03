import React from 'react'
import { Grid } from '@mui/material'
import Label from '../../atoms/Label/Label'
import Button from '../../atoms/Button/Button'

const SummaryDetail = ({pickUpAddress,dropAddress,onSummaryEditClick}) => {
  return (
    <div className='summaryDetail'>
        <Grid container padding={2} sx={{backgroundColor:'#fff'}}>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={9}>
                    <Label variant={'formHeader'} text="Summary Detail"></Label>
                    </Grid>
                    <Grid item xs={3} textAlign={"right"} alignItems={"center"}>
                        <Button variant={"edit"} text={"Edit"} onClick={onSummaryEditClick}></Button>
                    </Grid>
                    </Grid>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <Label variant={'formHeader'} text={"Address Details"}></Label>
                    <Grid container paddingX={4} paddingY={1}>
                        <Grid item xs={12} padding={2}>
                            <Label variant={'inputLabel'} text={"PickUp Address"}></Label>
                            <Label variant={'chip'} text={pickUpAddress.localAddress}></Label>
                            <Label variant={'chip'} text={pickUpAddress.district}></Label>
                            <Label variant={'chip'} text={pickUpAddress.state}></Label>
                            <Label variant={'chip'} text={pickUpAddress.postalCode}></Label>
                            <Label variant={'chip'} text={`Phone number: ${pickUpAddress.countryCode + pickUpAddress.phoneNumber}`}></Label>
                        </Grid>
                        <Grid item xs={12} padding={2}>
                            <Label variant={'inputLabel'} text={"Drop Address"}></Label>
                            <label>
                                {dropAddress.localAddress}
                                {dropAddress.state}
                                {dropAddress.district}
                                {dropAddress.postalCode}
                            </label>
                            <Label variant={'chip'} text={`Phone number: ${dropAddress.countryCode + dropAddress.phoneNumber}`}></Label>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    </div>
  )
}

export default SummaryDetail