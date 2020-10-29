import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Language';
import Menu from '../componets/Menu.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:'#129ac4'}} position="static">
        <Toolbar variant="dense">
            <Menu/>
          <Typography variant="h10" color="inherit">
            Blockchain Nodes
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}