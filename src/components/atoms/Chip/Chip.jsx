import React from "react";
import { Grid } from "@mui/material";
import Label from "../Label/Label";

const Chip = ({ onChipSelect, selected }) => {
  const weightRanges = [
    {
      value: 1,
      label: "Upto 1kg",
    },
    {
      value: 2,
      label: "Upto 2kg",
    },
    {
      value: 5,
      label: "Upto 5kg",
    },
    {
      value: 10,
      label: "Upto 10kg",
    },
    {
      value: 20,
      label: "Max 20kg",
    },
  ];
  return (
    <Grid
      container
      gap={1}
      padding={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {weightRanges.map((range) => {
        return (
          <Grid item xs={3} lg={2} key={range.value} textAlign={"center"} sx={{
                border:'1px solid #0A0442',
                color: range.value === selected ? '#ffffff' :'#0A0442',
                backgroundColor: range.value === selected ? '#0A0442' :"#ffffff",
                padding:'5px 2px',
                borderRadius:'5px',
                cursor:"pointer"
          }} onClick={()=>{onChipSelect(range.value)}} >
            <Label variant="chip" text={range.label}></Label>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Chip;
