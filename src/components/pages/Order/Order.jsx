import { Grid, InputAdornment,  TextField } from "@mui/material";
import React, { useReducer, useState } from "react";
import Navbar from "../../atoms/Navbar/Navbar";
import Label from "../../atoms/Label/Label";
import Icon from "../../atoms/Icon/Icon";
import { DatePicker } from "@mui/x-date-pickers";
import SelectBox from "../../atoms/SelectBox/SelectBox";
import Chip from "../../atoms/Chip/Chip";
import Button from "../../atoms/Button/Button";
import Modal from "../../molecules/Modal/Modal";
import OTPForm from "../../molecules/OTPForm/OTPForm";
import OtpVerificationform from "../../molecules/OtpVerificationForm/OtpVerificationform";
import { useNavigate } from "react-router-dom";

const packageDetailSetter = (state, action) => {
  return { ...state, [action.type]: action.value };
};

const errorSetter = (state, action) => {
  return { ...state, [action.type]: action.value };
};

const Order = () => {
  const navigate = useNavigate();
  const[open,setOpen] = useState(false);
  const[mobileNumber,setMobileNumber] = useState("");
  const[mobileError,setMobileError] = useState("");
  const[countryCode,setCountryCode] = useState("+91");
  const [privacyChecked,setPrivacyChecked] = useState(false);
  const [otpSent,setOtpSent] = useState(false);
  const [otp,setOtp] = useState("");
  const [packageDetails, setPackageDetails] = useReducer(packageDetailSetter, {
    fromLocation: "",
    toLocation: "",
    pickUpDate: "",
    productType: "",
    productWeight: "",
    productDimension: {
      length: "",
      breadth: "",
      height: "",
    },
  });

  const [inputError, setInputError] = useReducer(errorSetter, {
    fromLocation: "",
    toLocation: "",
    pickUpDate: "",
    productType: "",
    productWeight: "",
    productDimension: {
      length: "",
      breadth: "",
      height: "",
    },
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length < 1) {
      setInputError({ type: name, value: "Required" });
      setPackageDetails({ type: name, value: value });
    } else {
      setInputError({ type: name, value: "" });
      setPackageDetails({ type: name, value: value });
    }
  };

  const onDateChange = (e) => {
    setPackageDetails({ type: "pickUpDate", value: e });
  };

  const onDropdownChange = (e)=>{
        const{name,value} = e.target;
        setPackageDetails({type:name,value:value});
  }

  const onWeightSelect = (value)=>{
        setPackageDetails({type:'productWeight',value:value})
  }

  const onSubmitClick=()=>{
        setOpen(true);
  }

  const onMobileNumberChange= (e)=>{
    const {value} = e.target;
    if(value.length < 1){
      setMobileError("Required");
      setMobileNumber(value);
    }else if(!value.match(/\d+$/)){
      setMobileError("Only numbers are allowed");
    }else if(value.length > 10){
      setMobileError("Mobile Number cannot be more than 10 digits");
    }else{
      setMobileNumber(value);
      setMobileError("");
    }
  }

  const onCountryCodeChange = (e)=>{
    setCountryCode(e.target.value);
  }

  const onPrivacyAgreeMentChange =()=>{
    setPrivacyChecked(!privacyChecked)
  }

  const onGetOtpClick = ()=>{
      setOtpSent(true);
  }

  const onOtpChange=(e)=>{
    setOtp(e);
  }

  const otpVerifyClick = ()=>{
      navigate("/serviceProviders")
  }

  return (
    <>
    <div className="order" style={{height:"100%",overflow:'hidden'}}>
    <Grid container sx={{ height: { lg: "100%", sm: "fit-content" } }}>
      <Navbar />
      <Grid container justifyContent={"center"} alignItems={"center"} sx={{height:'90%'}}>
        <Grid item xs={12} lg={5} md={7} sx={{ backgroundColor: "#ffffff",borderRadius:'5px'}}>
          <Grid container justifyContent={"center"} padding={2}>
            <Grid item xs={12} lg={12} textAlign={"center"}>
              <Label variant={"formHeader"} text={"Enter your details"}></Label>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12} paddingY={1} paddingX={1}>
            <Grid container justifyContent={"center"} columnGap={1} rowGap={3}>
              <Grid item xs={12} lg={6}>
                <TextField
                  required
                  variant="outlined"
                  name="fromLocation"
                  fullWidth
                  label="Pickup Location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon iconClass={"location_pin"}></Icon>
                      </InputAdornment>
                    ),
                  }}
                  value={packageDetails.fromLocation}
                  onChange={onInputChange}
                  error={inputError.fromLocation ? true : false}
                  helperText={inputError.fromLocation}
                  placeholder="Enter your pickup location"
                  size={"medium"}
                ></TextField>
              </Grid>
              <Grid item xs={12} lg={5}>
                <DatePicker
                  label="Pickup Date"
                  name="pickUpDate"
                  value={packageDetails.pickUpDate || new Date()}
                  disablePast
                  onChange={(selectedValue) => {
                    onDateChange(selectedValue);
                  }}
                  size="medium"
                  fullWidth
                ></DatePicker>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  variant="outlined"
                  name="toLocation"
                  required
                  error={inputError.toLocation}
                  value={packageDetails.toLocation}
                  onChange={onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon iconClass={"location_pin"}></Icon>
                      </InputAdornment>
                    ),
                  }}
                  helperText={inputError.toLocation}
                  label="Drop Location"
                  fullWidth
                  size={"medium"}
                  placeholder="Enter your drop location"
                ></TextField>
              </Grid>
              <Grid item xs={12} lg={5}>
                <SelectBox size={"medium"} options={[{id:1,value:"abc"},{id:2,value:"2bc"},{id:1,value:"3bc"}]} value={packageDetails.productType} name="productType" onSelectionChange={onDropdownChange} fullWidth={true} errorMessage={inputError.productType} label={"Product Type"}></SelectBox>
              </Grid>
            </Grid>
          </Grid>
          <Chip onChipSelect={onWeightSelect} selected={packageDetails.productWeight}></Chip>
          <Grid container justifyContent={"center"} paddingBottom={3}>
                  <Grid item textAlign={"center"}>
                    <Button variant="secondary" size="large" text={"Ship now"} icon="arrow-right2" onClick={onSubmitClick}></Button>
                  </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
    <Modal isOpen={open} setIsOpen={setOpen}>
      {
        !otpSent ? <OTPForm mobileNumber={mobileNumber} errorMessage={mobileError} onInputchange={onMobileNumberChange} countryCode={countryCode} onCountryCodeChange={onCountryCodeChange} privacyChecked={privacyChecked} onPrivacyAgreeMentChange={onPrivacyAgreeMentChange} onGetOtpClick={onGetOtpClick} /> : <OtpVerificationform mobileNumber={mobileNumber} otp={otp} onOtpChange={onOtpChange} otpVerifyClick={otpVerifyClick} />
      }
    
    </Modal>
    </>
  );
};

export default Order;
