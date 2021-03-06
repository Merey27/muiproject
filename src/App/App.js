import {MuiThemeProvider, createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';
import Employee from "../pages/Employees/Employee";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c33b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: "#f4f5fd"
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'

      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        {/* <PageHeader
        title="Page Header"
        subTitle="Page description"
        icon = {<PeopleOutlineTwoToneIcon fontSize="large" classes={shape.borderRadius}/>}
        /> */}
        <Employee/>
      </div>
      <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
