import { TextField } from '@mui/material'
import React from 'react'
import SelectBox from '../../atoms/SelectBox/SelectBox'
import { countryCodes } from "../../utils/constants";
import {Grid} from '@mui/material'
import Label from '../../atoms/Label/Label';

const orderDetailsetter = (state,action)=>{
    return{...state,[action.name] : action.value}
}

const AddressForm = ({address,onInputchange,onSelectionChange,error,states,districts,label}) => {
  return (
    <Grid container justifyContent={"center"} sx={{backgroundColor:'#fff'}} rowGap={2} columnGap={1} padding={1} paddingTop={2} paddingBottom={5}>
        <Grid item xs={12} paddingLeft={{lg:5,xs:0}}>
            <Label variant={"formHeader"} text={label}></Label>
        </Grid>
        <Grid item xs={12} lg={11}>
            <TextField 
                fullWidth
                required
                label=""
                name='localAddress'
                value= {address.localAddress}
                onChange={onInputchange}
                error={error.localAddress ? true : false}
                helperText={error.localAddress}
                placeholder='Flat no, Door no, Street name'
            />
        </Grid>
        <Grid item xs={12} lg={5.5}>
            <SelectBox 
                name='district'
                fullWidth={true}
                required
                label="District"
                value={address.district}
                onSelectionChange={onSelectionChange}
                errorMessage={error.district}
                options={districts}
                size="medium"
                idName={"id"}
                valueName={"value"}
                ></SelectBox>
        </Grid>
        <Grid item xs={12} lg={5.5}>
            <SelectBox 
                name='state'
                fullWidth={true}
                required
                label="State"
                value={address.state}
                onSelectionChange={onSelectionChange}
                errorMessage={error.state}
                options={states}
                size="medium"
                idName={"id"}
                valueName={"value"}
                ></SelectBox>
        </Grid>

        <Grid item xs={12} lg={5.5}>
            <TextField 
                name="postalCode"
                fullWidth
                size='medium'
                required
                value={address.postalCode}
                onChange={onInputchange}
                label="Postal Code"
                error={error.postalCode ? true : false}
                helperText={error.postalCode}
                placeholder='600028'
                />
        </Grid>
        <Grid item xs={12} lg={5.5}>
           <Grid container>
           <Grid item lg={3} xs={2} textAlign={"right"}>
            <SelectBox
              name="countryCode"
              onSelectionChange={onSelectionChange}
              options={countryCodes}
              value={address.countryCode}
              idName={"dial_code"}
              valueName={"dial_code"}
              fullWidth={true}
            ></SelectBox>
          </Grid>
          <Grid item xs={10} lg={9}>
            <TextField
              required
              name="phoneNumber"
              fullWidth
              value={address.phoneNumber}
              onChange={onInputchange}
              error={error.phoneNumber ? true : false}
              helperText={error.phoneNumber}
              placeholder="Phone Number"
            ></TextField>
          </Grid>
           </Grid>
        </Grid>
    </Grid>
  )
}

export default AddressForm