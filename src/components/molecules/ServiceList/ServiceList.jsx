import { Grid } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Label from "../../atoms/Label/Label";
import Image from "../../atoms/Image/Image";
import rating from "@images/rating.png";
import DHL from "@images/DHL.svg";
import Professional from "@images/Professional.svg";
import BlueDart from "@images/BlueDart.svg";
import Delhivery from "@images/Delhivery.svg";
import checked from "@images/checked.svg";
import Discount from "@images/Discount.svg";

const ServiceList = ({ providerDetails }) => {
  const getImage = (name) => {
    switch (name) {
      case "DHL":
        return DHL;
      case "Professional":
        return Professional;
      case "BlueDart":
        return BlueDart;
      default:
        return Delhivery;
    }
  };

  return (
    <Grid container sx={{ backgroundColor: "#fff"}} marginY={2}>
      <Grid item xs={4}>
        <Grid container height="100%" alignItems={"center"}>
          <Grid item xs={12} textAlign={"center"} paddingTop={5}>
            <Image
              src={getImage(providerDetails.providerName)}
              width={"80%"}
              alt={providerDetails?.altText}
            ></Image>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Label variant="regular" text="Estimated Delivery date" />
            <Label
              variant="large"
              text={`${providerDetails?.estimatedDays} days`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5} >
        <Grid container justifyContent={"center"} alignItems={"center"} paddingY={5}>
          <Grid item xs={12}>
            <Label
              variant={"large red"}
              text={providerDetails?.providerName}
            ></Label>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              {providerDetails?.benefits?.map((benefit) => {
                return (
                  <Grid item xs={12} lg={6} key={benefit}>
                    <Grid container xs={12}>
                      <Grid item xs={1} >
                        <Image src={checked}></Image>
                      </Grid>
                      <Grid item xs={10} paddingLeft={1}>
                        <Label variant={"regular"} text={benefit}></Label>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container xs={12} lg={8}>
              <Grid item xs={1}>
                <Image src={Discount}></Image>
              </Grid>
              <Grid item xs={11} paddingLeft={1}>
                <Label
                  variant={"regular"}
                  text={providerDetails.availableOffers}
                ></Label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        gap={1}
        justifyContent={"center"}
        sx={{ backgroundColor: "#0A0442", color: "#fff" }}
      >
        <Grid container justifyContent={'center'} justifySelf={'stretch'} height={"100%"} alignItems={'center'} paddingY={5}>
          <Grid item lg={8} xs={10} >
            <Image src={rating}></Image>
          </Grid>
          <Grid item xs={11} textAlign={"center"}>
            <Label
              variant={"chip"}
              text={`(${providerDetails.reviews}reviews)`}
            ></Label>
          </Grid>
          <Grid item xs={11} textAlign={"center"}>
            <Label
              variant={"large white"}
              text={`Rs.${providerDetails.price}`}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceList;
