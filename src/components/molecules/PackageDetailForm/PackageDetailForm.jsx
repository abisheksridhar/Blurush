import React from 'react'
import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import SelectBox from '../../atoms/SelectBox/SelectBox'
import Label from '../../atoms/Label/Label';

const PackageDetailForm = ({ packageDetail, onDateChange,onSelectionChange,onInputChange,error,productTypes}) => {
  return (
    <div className="packageDetailForm">
        <Grid container padding={2} marginY={2} gap={2}>
      <Grid item xs={12}>
        <DatePicker
          label="Pickup Date"
          name="pickUpDate"
          value={packageDetail.pickUpdate||new Date()}
          disablePast
          onChange={(selectedValue) => {
            onDateChange(selectedValue);
          }}
          size="medium"
          fullWidth
        ></DatePicker>
      </Grid>
      <Grid item xs={12} >
      <SelectBox 
                name='productType'
                required
                label="Product type"
                value={packageDetail?.productType}
                onSelectionChange={onSelectionChange}
                errorMessage={error.productType}
                options={productTypes}
                size="medium"
                idName={"id"}
                valueName={"value"}
                fullWidth={true}
                ></SelectBox>
      </Grid>
      <Grid item xs={12}>
        <TextField 
          fullWidth
          label="Product Value"
          value={packageDetail.shipmentValue}
          onChange={onInputChange}
          name="shipmentValue"
          error={error.shipmentValue ?  true : false}
          placeholder={error.shipmentValue}
          />
      </Grid>

      <Grid item xs={12}>
        <Grid container gap={1}>
          <Grid item xs={12}>
            <Label variant="regular" text="Dimensions"></Label>
          </Grid>
          <Grid item xs={3}>
          <TextField 
          fullWidth
          label="Length"
          value={packageDetail.length}
          onChange={onInputChange}
          name="length"
          error={error.length ?  true : false}
          placeholder={error.length}
          />
          </Grid>
          <Grid item xs={3}>
          <TextField 
          fullWidth
          label="Breadth"
          value={packageDetail.breadth}
          onChange={onInputChange}
          name="length"
          error={error.breadth ?  true : false}
          placeholder={error.breadth}
          />
          </Grid>
          <Grid item xs={3}>
          <TextField 
          fullWidth
          label="Width"
          value={packageDetail.width}
          onChange={onInputChange}
          name="length"
          error={error.width ?  true : false}
          placeholder={error.width}
          />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TextField 
          fullWidth
          label="What is in the Package"
          value={packageDetail.packageItem}
          onChange={onInputChange}
          name="packageItem"
          error={error.packageItem ?  true : false}
          placeholder={error.packageItem}
          />
      </Grid>
    </Grid>
    </div>
  )
}

export default PackageDetailForm