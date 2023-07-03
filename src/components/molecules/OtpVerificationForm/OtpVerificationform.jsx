import React, { useState } from "react";
import { Grid } from "@mui/material";
import Label from "../../atoms/Label/Label";
import OTPInput from "react-otp-input";
import Button from "../../atoms/Button/Button";
import './OtpVerificationForm.scss'
import TimeRenderer from "../../atoms/TimeRenderer/TimeRenderer";
const OtpVerificationform = ({mobileNumber,otp,onOtpChange,otpVerifyClick}) => {
    const[isDisabled,setIsDisabled] = useState(true);
  return (
    <div className="verificationForm">
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Label variant={"formHeader"} text="Verify your number"></Label>
      </Grid>
      <Grid item xs={12} paddingY={2} justifyItems={'center'} justifySelf={'stretch'}>
        <Label
          variant="chip"
          text={"We’ve sent a verification code to: " + mobileNumber}
        ></Label>
        <hr />
        <OTPInput 
        value={otp}
        onChange={onOtpChange}
        numInputs={6}
        renderSeparator={<span>&ensp;</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{width:'42px',height:'42px',fontSize:'24px'}}
        shouldAutoFocus={true}
        />
        </Grid>
        <TimeRenderer text="Have not received the OTP?" setIsDisabled={setIsDisabled}></TimeRenderer>
        <Grid container justifyContent={"left"}>
        <Button
              disabled={isDisabled}
              text={"Resend"}
              onClick={otpVerifyClick}
              variant={"primary"}
              size="small"
            ></Button>
            </Grid>
        <Grid container justifyContent={"center"} xs={12} paddingY={2}>
          <Grid item textAlign={"center"}>
            <Button
              disabled={otp.length<6 ? true : false}
              text={"Verify"}
              onClick={otpVerifyClick}
              variant={"secondary"}
              size="small"
            ></Button>
          </Grid>
        </Grid>
    </Grid>
    </div>
  );
};

export default OtpVerificationform;
