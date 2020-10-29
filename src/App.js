import React from 'react';
import AppRouter from './AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import theme from './theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';
import AppBar from './componets/AppBar.js';
import Typography from '@material-ui/core/Typography';


export default class App extends React.Component {
    componentDidMount() {

    }
    Copyright ()  {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Axeleratum '} 
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <Router history={createBrowserHistory()}>
                        <AppBar/>
                        <AppRouter/>
                        <div style={{paddingTop:'10px'}}>{this.Copyright()}</div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}
