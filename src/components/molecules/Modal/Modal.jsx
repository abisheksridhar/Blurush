import React from 'react'
import './Modal.scss'
import { Grid } from '@mui/material'
import Label from '../../atoms/Label/Label'

const Modal = ({isOpen,setIsOpen,children}) => {
  return (
        isOpen ?(
        <div className='modalOverlay'>
            <Grid container justifyContent={"center"} alignItems={"center"} height={"100%"}>
                <Grid item xs={12} md={8} lg={6} sx={{backgroundColor:'#ffffff'}}>
                    <Grid container xs={12} justifyContent={'right'} paddingTop={1} paddingRight={1}>
                        <Grid item textAlign={"center"} xs={1} onClick={()=>{setIsOpen(false)}} sx={{borderRadius:"50%",fontSize:'24px',height:"36px",width:"36px","&:hover":{backgroundColor:"#e9e9e9"}}}>
                            <Label text={"x"}></Label>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} justifyContent={'center'} paddingX={2}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </div>)
        :
        <></>
  )
}

export default Modal
