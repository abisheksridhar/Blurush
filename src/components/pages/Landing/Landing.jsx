import React from "react";
import LandingImage from "@images/LandingImage.png";
import Logo from "@images/Logo.png";
import Button from "../../atoms/Button/Button";
import { Grid } from "@mui/material";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import { useNavigate } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";

const Landing = () => {

  const navigate = useNavigate();

  const goto = (page)=>{
    console.log("here")
    navigate(page);
  }

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{paddingX:"20px",height:{lg:"100%",xs:"auto"}} }
    >
      <Grid item lg={5} md={12}>
        <Grid container justifyContent={"center"}  >
            <Grid container  alignItems={"center"} >
              <Grid item lg={2} xs={12} sx={{textAlign:{xs:"center",lg:"left"}}} >
                <Image src={Logo}  height={81} width={81}/>
              </Grid>
              <Grid item lg={10} xs={12} sx={{textAlign:{xs:"center",lg:"left"}}} >
                <Label variant={"welcomeLabel"} text="Welcome to blurush"></Label>
              </Grid>
            </Grid>
            <Grid container sx={{display:{lg:'grid',xs:'none'}}}>
                <Label variant="services" text={"We provide best Services to courier"}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia labore accusantium enim iure ex et minus atque voluptatem quibusdam eaque a ipsum ut dolorum, sunt, consectetur sint laudantium iste.</p>
                <Grid container gap="20px">
                <Grid item >
                    <Button size="medium" variant="primary" onClick={()=>{goto("trackNow")}} text="Track now"></Button>
                  </Grid>
                  <Grid item>
                    <Button size="medium" variant="primary" onClick={()=>{goto("orderNow")}} text="Order now" ></Button>
                  </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid item lg={7} md={12}>
        <Image src={LandingImage}></Image>
      </Grid>
      <Grid container justifyContent={"center"} justifySelf={"stretch"} sx={{display:{xs:'grid',lg:'none'}}}>
                <Grid item lg={12} textAlign={"center"}>
                <Label variant="services" text={"We provide best Services to courier"}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia labore accusantium enim iure ex et minus atque voluptatem quibusdam eaque a ipsum ut dolorum, sunt, consectetur sint laudantium iste.</p>
                </Grid>
                <Grid container gap="20px" justifyContent={"center"}>
                  <Grid item >
                    <Button size="medium" variant="primary" onClick={()=>{goto("trackNow")}} text="Track now"></Button>
                  </Grid>
                  <Grid item>
                    <Button size="medium" variant="primary" onClick={()=>{goto("orderNow")}} text="Order now" ></Button>
                  </Grid>
                </Grid>
            </Grid>
    </Grid>
  );
};

export default Landing;
