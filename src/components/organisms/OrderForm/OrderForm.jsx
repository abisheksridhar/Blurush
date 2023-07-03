import React, { useReducer } from "react";
import { Grid } from "@mui/material";
import AddressForm from "../../molecules/AddressForm/AddressForm";
import PackageDetailForm from "../../molecules/PackageDetailForm/PackageDetailForm";
import Button from '../../atoms/Button/Button'
import { useNavigate } from "react-router-dom";
import OrderStore from "../../../store/ServiceStore/OrderStore";

const reducer = (state,action)=>{
  return {...state,[action.type]:action.value};
}

const OrderForm = () => {
  const address= OrderStore.getDropAddress;
  const packageInfo = OrderStore.getPackageDetail;


  const navigate = useNavigate();

  const [pickUpAddress,setPickUpAddress] = useReducer(reducer,address);
  const [dropAddress,setDropAddress] = useReducer(reducer,address);
  const [pickUpAddressError,setPickUpAddressError] = useReducer(reducer,address);
  const [dropAddressError,setDropAddressError] = useReducer(reducer,address);
  const [packageDetail,setPackageDetail] = useReducer(reducer,packageInfo);
  const [packageError,setPackageError] = useReducer(reducer,packageInfo);

  const onInputChange=(e,field) =>{
    const {name,value} = e.target;
      switch (field){
        case 'pickup':
          setPickUpAddress({type:name,value:value});
          break;
        case 'drop':
          setDropAddress({type:name,value:value});
          break;
        default:
          setPackageDetail({type:name,value:value});
          break;
      }
  }

  const onSelectionChange=(e,field)=>{
    const {name,value} = e.target;
      switch (field){
        case 'pickup':
          setPickUpAddress({type:name,value:value});
          break;
        case 'drop':
          setDropAddress({type:name,value:value});
          break;
        default:
          setPackageDetail({type:name,value:value});
          break;
      }
  }

  const onDateChange =(e)=>{
      setPackageDetail({type:'pickUpDate',value:value});
  }

  const onNextClick =()=>{
      OrderStore.setDropAddress(dropAddress);
      OrderStore.setPickUpAddress(pickUpAddress);
      OrderStore.setPackageDetail(packageDetail);
      setTimeout(navigate("/billing"),1000);
      
  }

  return (
    <div className="orderForm">
      <Grid container justifyContent={"center"} margin={2} gap={1}>
        <Grid item lg={7} xs={12}>
          <Grid container gap={1}>
            <Grid item xs={12}>
              <AddressForm address={pickUpAddress} onInputchange={(e)=>{onInputChange(e,'pickup')}} error={pickUpAddressError} states={[]} districts={[]} onSelectionChange={(e)=>{onSelectionChange(e,'pickup')}} label={"PickUp Address"}  />
            </Grid>
            <Grid item xs={12}>
              <AddressForm address={dropAddress} onInputchange={(e)=>{onInputChange(e,'drop')}} error={dropAddressError} states={[]} districts={[]} onSelectionChange={(e)=>{onSelectionChange(e,'drop')}} label={"Drop Address"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} xs={12} sx={{ backgroundColor: "white" }}>
            <PackageDetailForm packageDetail={packageDetail} onDateChange={onDateChange} onSelectionChange={(e)=>{onSelectionChange(e,'package')}} productTypes={[]} error={packageError} onInputChange={(e)=>{onInputChange(e,'package')}}/>
        </Grid>

        <Grid item xs={12} textAlign={'center'} margin={4}>
            <Button variant={"secondary"} size={"big"} icon="arrow-right2" text="Next" onClick={onNextClick}></Button> 
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderForm;
