import React from "react";
// import  { ThemeProvider}  from " @mui/material/box";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import Header from "./component";
import SearchBar from "./component";
import Grid from '@mui/material/Grid';




export default () => {
  return ( 
  <ThemeProvider  theme ={ theme }>
    <Header/>
  <Grid container justify = "center" item xs={10}>
  
    <SearchBar/>
    </Grid>
   
  
  </ThemeProvider>
  )
};
