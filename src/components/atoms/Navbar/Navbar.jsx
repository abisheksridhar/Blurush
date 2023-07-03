import React from "react";
import { Grid } from "@mui/material";
import Icon from "../Icon/Icon";

const Navbar = () => {
  const navbarItems = [
    {
      icon: "add",
      label: "Order",
    },
    {
      icon: "map",
      label: "Track Order",
    },
    {
      icon: "person",
      label: "services",
    },
  ];
  const onNavItemClick = (label) => {
    console.log(label);
  };
  return (
    <Grid container justifyContent={"right"} alignItems={"center"} sx={{height:'100px'}}>
      {navbarItems.map((item) => {
        return (
          <Grid item lg={1} xs={4} key={item.label} textAlign={'center'}>
            <Grid container justifyContent={"center"}>
            <Icon
              iconClass={item.icon}
              onIconClick={() => {
                onNavItemClick(item.label);
              }}
            ></Icon>
            </Grid>
            <label>{item.label}</label>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Navbar;
