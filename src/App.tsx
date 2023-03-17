import React from 'react';
import './App.css';

import {Grid} from "@mui/material"
import { Typography } from '@material-ui/core';

// import logo from "https://upload.wikimedia.org/wikipedia/en/b/bb/Brooklyn_College_Seal.svg"


function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h2'>
          Hello World
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
