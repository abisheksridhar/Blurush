import React,{useState,useEffect} from 'react'
import Label from '../Label/Label';


const TimeRenderer = ({text,setIsDisabled}) => {
    const [otpTimerValue, setOtpTimeValue] = useState(60);

    const runTimer=()=>{
        setTimeout(()=>{setOtpTimeValue(otpTimerValue-1)},1000);
    }

    useEffect(()=>{
        if(otpTimerValue > 0){
            runTimer();
        }else{
            setIsDisabled(false)
        }
    },[otpTimerValue])

    useEffect(()=>{
        runTimer();
    },[])
  return (
    <Label text={`${text} ${otpTimerValue}s`} variant={"small"}></Label>
  )
}

export default TimeRenderer