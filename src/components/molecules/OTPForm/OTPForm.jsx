import { Grid, TextField, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import Label from "../../atoms/Label/Label";
import { countryCodes } from "../../utils/constants";
import SelectBox from "../../atoms/SelectBox/SelectBox";
import "./OTPForm.scss";
import Button from "../../atoms/Button/Button";

const OTPForm = ({
  mobileNumber,
  errorMessage,
  onInputchange,
  countryCode,
  onCountryCodeChange,
  onPrivacyAgreeMentChange,
  privacyChecked,
  onGetOtpClick,
}) => {
  return (
    <Grid container xs={12} justifyContent={"center"}>
      <Grid item xs={12}>
        <Label variant={"formHeader"} text="Enter your mobile number"></Label>
      </Grid>
      <Grid item xs={12} paddingY={2}>
        <Label
          variant="chip"
          text={"We’ll send you an OTP via SMS to confirm your mobile number."}
        ></Label>
        <hr />
        <Grid container xs={12} gap={0}>
          <Grid item lg={2} xs={2} textAlign={"right"}>
            <SelectBox
              onSelectionChange={onCountryCodeChange}
              options={countryCodes}
              value={countryCode}
              idName={"dial_code"}
              valueName={"dial_code"}
            ></SelectBox>
          </Grid>
          <Grid item xs={10} lg={10}>
            <TextField
              required
              variant="outlined"
              name="mobileNumber"
              fullWidth
              value={mobileNumber}
              onChange={onInputchange}
              error={errorMessage ? true : false}
              helperText={errorMessage}
              placeholder="Enter your MobileNumber"
            ></TextField>
          </Grid>
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={onPrivacyAgreeMentChange}
                checked={privacyChecked}
              />
            }
            label="I have read and I accept the Privacy Policy & Conditions of use"
          ></FormControlLabel>
          <Label
            variant="chip"
            text={
              "Our Privacy Policy oulines what personal data we collect, why we collect it, and how use it. Our condition of use govern your use of our service."
            }
          ></Label>
        </Grid>
        <Grid container justifyContent={"center"} xs={12} paddingY={2}>
          <Grid item textAlign={"center"}>
            <Button
              text={"Get Otp"}
              onClick={onGetOtpClick}
              variant={"secondary"}
              size="large"
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OTPForm;
