import { Grid } from "@mui/material";
import React from "react";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";

const PackageDetails = ({
  packageDetail,
  onPackageEditClick,
  pickUpSchedule,
}) => {
  return (
    <div className="packageDetail">
      <Grid container padding={2} sx={{ backgroundColor: "#fff" }}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={9}>
              <Label variant={"formHeader"} text="Package Detail"></Label>
            </Grid>
            <Grid item xs={3} textAlign={"right"} alignItems={"center"}>
              <Button
                variant={"edit"}
                text={"Edit"}
                onClick={onPackageEditClick}
              ></Button>
            </Grid>
          </Grid>
          <hr />

          <Grid container>
            <Grid item xs={6}>
              <Label variant={"inputLabel"} text="Product Type"></Label>
            </Grid>
            <Grid item xs={6} textAlign={"right"} alignItems={"center"}>
              <Label
                variant={"inputLabel"}
                text={packageDetail?.productType}
              ></Label>
            </Grid>
          </Grid>
          <hr />

          <Grid container>
            <Grid item xs={6}>
              <Label variant={"inputLabel"} text="Shipment Value"></Label>
            </Grid>
            <Grid item xs={6} textAlign={"right"} alignItems={"center"}>
              <Label
                variant={"inputLabel"}
                text={packageDetail?.shipmentValue}
              ></Label>
            </Grid>
          </Grid>
          <hr />

          <Grid container>
            <Grid item xs={6}>
              <Label variant={"inputLabel"} text="Dimension"></Label>
            </Grid>
            <Grid item xs={6} textAlign={"right"} alignItems={"center"}>
              <Label
                variant={"inputLabel"}
                text={`${packageDetail?.length} x ${packageDetail?.breadth} x ${packageDetail?.width}`}
              ></Label>
            </Grid>
          </Grid>
          <hr />

          <Grid container>
            <Grid item xs={6}>
              <Label
                variant={"inputLabel"}
                text="What is in the Parcel"
              ></Label>
            </Grid>
            <Grid item xs={6} textAlign={"right"} alignItems={"center"}>
              <Label
                variant={"inputLabel"}
                text={packageDetail?.packageItem}
              ></Label>
            </Grid>
          </Grid>
          <hr />

          <Grid container>
            <Grid item xs={6}>
              <Label variant={"inputLabel"} text="PickUp Schedule"></Label>
            </Grid>
            <Grid item xs={6} textAlign={"right"} alignItems={"center"}>
              <Label variant={"inputLabel"} text={pickUpSchedule}></Label>
            </Grid>
          </Grid>
          <hr />
        </Grid>
      </Grid>
    </div>
  );
};

export default PackageDetails;
