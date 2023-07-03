import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectBox = ({errorMessage,label,fullWidth,onSelectionChange,name,options,value,size,idName,valueName,...rest}) => {
  return (
    <FormControl error={errorMessage ? true : false} fullWidth={fullWidth} size={size}>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={onSelectionChange}
          label={label}
          {...rest}
        >
          {
            options.map(option=>{
              return <MenuItem key={option[idName]} value={option[idName]}>{option[valueName]}</MenuItem>
            })
          }
        </Select>
        <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  )
}

export default SelectBox
