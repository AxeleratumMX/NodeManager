import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Paper from '@material-ui/core/Paper';
import Dash from './AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NodeEnv from './NodeEnv.js';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';


function  Copyright ()  {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Axeleratum '} 
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const DashBoard = (props) => {
    const [nodes, setNodes] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [buttonLoad, setButtonLoad] = React.useState(false);
    
    const [password, setPassword] = React.useState('');
    const [statusNodes, setStatusNodes] = React.useState('pendiente');
    const [node2, setNode2] = React.useState('pendiente');
    const [node3, setNode3] = React.useState('pendiente');
    const [task, setTask] = React.useState('pendiente');
    const [token, setToken] = React.useState('u0s7ul315b-7GbZeIoYX852Jac1R0KvmX3CHRCvJTjnesX0pLANqq0=');
    const [proxyurl, setProxy] = React.useState('https://cors-anywhere.herokuapp.com/');
    const [urlNode, setUrlNode] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1y0wpyqko/start');
    const [urlNode2, setUrlNode2] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1u89pwd0u/start');
    const [urlNode3, setUrlNode3] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1yw7qq3qz/start');
    const [urlNodestop, setUrlNodestop] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1y0wpyqko/start');
    const [urlNode2stop, setUrlNode2stop] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1u89pwd0u/start');
    const [urlNode3stop, setUrlNode3stop] = React.useState('https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes/u1yw7qq3qz/start');
    const [environment, setEnvironment] = React.useState('https://console.kaleido.io/gql');
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
       paper: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',maxHeight: '100hv'
          }
      }));
      const classes = useStyles();

      const fecha = () => {
        function pad(s) {
            return (s < 10) ? '0' + s : s;
        }
        const d = new Date();
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
    }

    const kaleidoStatus = () => {        
        const url = 'https://console-us1.kaleido.io/api/v1/consortia/u1xsszi2gn/environments/u1bgxqcgm9/nodes';
        let config = { "headers" : {
                        "Authorization" : 'Bearer ' + token, 
                        "content-type" : "application/json",
                        "Access-Control-Allow-Origin" : "*"
                        }
                    }
                    axios.get(proxyurl+url,config)
                    .then((response) => {
                            setNodes(response.data);
                            setLoading(true);
                        }, (error) => {
                            console.log(error)
                        }
                    )
    }

    const  start = () => {  
        setLoading(false);    
        setButtonLoad(true);
        let body ={
            "operationName": "updateEnvironment",
            "variables": {"environment": {"state": "live"}, "consortia_id": "u1xsszi2gn", "id": "u1bgxqcgm9"},
            "query": "fragment EnvironmentFields on Environment {\n  _id\n  name\n  description\n  state\n  mode\n  provider\n  release_id\n  consensus_type\n  consortia_id\n  chain_id\n  block_period\n  region\n  enable_tether\n  limit_initial_signers\n  node_list\n  service_list\n  autopause_init_delay\n  autopause_idle_hours\n  created_at\n  deleted_at\n  paused_at\n  resumed_at\n  member_policy\n  amend_policy\n  locked_policies\n  test_features\n  updated_at\n  __typename\n}\n\nmutation updateEnvironment($consortia_id: String!, $id: String!, $environment: UpdateEnvironmentInput!) {\n  updateEnvironment(consortia_id: $consortia_id, id: $id, environment: $environment) {\n    ...EnvironmentFields\n    __typename\n  }\n}\n"
        }   
        let config = { "headers" : {
                        "Authorization" : 'Bearer ' + token, 
                        "content-type" : "application/json",
                        "Access-Control-Allow-Origin" : "*"
                        }
                    }
                    axios.post(proxyurl+environment,body,config)
                    .then((response) => {
                            setNodes(response.data);
                            setButtonLoad(false);
                            kaleidoStatus();
                        }, (error) => {
                            console.log(error)
                        }
                    )
    }

    const  stop = () => {  
        setButtonLoad(true); 
        setLoading(false); 
        let body ={
            "operationName": "updateEnvironment",
            "variables": {"environment": {"state": "paused"}, "consortia_id": "u1xsszi2gn", "id": "u1bgxqcgm9"},
            "query": "fragment EnvironmentFields on Environment {\n  _id\n  name\n  description\n  state\n  mode\n  provider\n  release_id\n  consensus_type\n  consortia_id\n  chain_id\n  block_period\n  region\n  enable_tether\n  limit_initial_signers\n  node_list\n  service_list\n  autopause_init_delay\n  autopause_idle_hours\n  created_at\n  deleted_at\n  paused_at\n  resumed_at\n  member_policy\n  amend_policy\n  locked_policies\n  test_features\n  updated_at\n  __typename\n}\n\nmutation updateEnvironment($consortia_id: String!, $id: String!, $environment: UpdateEnvironmentInput!) {\n  updateEnvironment(consortia_id: $consortia_id, id: $id, environment: $environment) {\n    ...EnvironmentFields\n    __typename\n  }\n}\n"
        }    
        let config = { "headers" : {
                        "Authorization" : 'Bearer ' + token, 
                        "content-type" : "application/json",
                        "Access-Control-Allow-Origin" : "*"
                        }
                    }
                    axios.post(proxyurl+environment,body,config)
                    .then((response) => {
                        setButtonLoad(false);
                        kaleidoStatus();
                         }, (error) => {
                              console.log(error)
                         }
                    )
    }

    const stopNode = () => {
        let day =new Date().getDay();
        let hours =new Date().getHours();
        let min = new Date().getMinutes();
        let seg = new Date().getSeconds() 
        console.log(statusNodes);
        console.log(password);

        console.log('stop day: ' + day + '  Hours : ' + hours + '</br>' + min + seg);
        if (hours === 20 && min === 57) 
        {
           console.log("pruewbas scheduled kaliedo Off")
           stop();
           setPassword("SE CUMPLIO PROMESA APAGANDO NODO")
           setStatusNodes("INCIO NODO :"+ day + '  Hours : ' + hours + '-' + min + seg)

        }
    };

    const startNode = () => {
        let day =new Date().getDay();
        let hours =new Date().getHours();
        let min = new Date().getMinutes();
        let seg = new Date().getSeconds() 
        console.log(statusNodes);
        console.log(password);
        console.log('start day: ' + day + '  Hours : ' + hours + '</br>' + min + seg);
        //8 am a 7 pm
        if (hours === 8 && min === 3) 
        {
           console.log("pruewbas scheduled kaliedo On")
           setPassword("SE CUMPLIO PROMESA INICIANDO NODO")
           setStatusNodes("INCIO NODO :"+ day + '  Hours : ' + hours + '-' + min + seg)
           start();
        }
    };

    const scheduledNodeStart = () => {
        switch (new Date().getDay()) {
            case 0:
              break;
            case 1:
                startNode();
              break;
            case 2:
                startNode();
              break;
            case 3:
                startNode();
              break;
            case 4:
                startNode();
              break;
            case 5:
                startNode();
              break;
            case 6:
              break;
              default:
            break;

          }
    }

    const scheduledNodeStop = () => {
        switch (new Date().getDay()) {
            case 0: 
                break;
            case 1:
                stopNode();
              break;
            case 2:
                stopNode();
              break;
            case 3:
                stopNode();
              break;
            case 4:
                stopNode();
              break;
            case 5:
                stopNode();
              break;
            case 6:
              break;
              default:
            break;

          }
    }
    
    // scheduled interbval 1mn check start or stop node
    //60000 1 mn descomentar

    //setInterval(scheduledNodeStart, 60000 );
    //setInterval(scheduledNodeStop, 60000 );
    setInterval(scheduledNodeStart, 180000 );
    setInterval(scheduledNodeStop, 180000 );





//36000000
    //setInterval(scheduledNodeStart, 3612600 );
    //setInterval(scheduledNodeStop, 3612600 );

    
    React.useEffect(() => {
        kaleidoStatus();
    }, [0]);

    return (
    <Paper elevation={3} >
        <Dash/>
        {!buttonLoad ?  '' :  <LinearProgress />}
        {!loading ? <LinearProgress /> :       
    <Container component="div" style={{ paddingTop:'50px', backgroundColor: 'whiteSmoke', height: 'auto'}}>          
        <Grid  style={{paddingTop:'40px'}} container  justify="center" className={classes.root} spacing={3}>   
            <Paper>    
                    <div style={{padding: '25px 0px 25px 40px'}}>
                                    <Grid item xl={12} lg={10} md={11} sm={12} xs={12}>
                                        <Grid container spacing={3}>
                                            {/*<Grid item>Api nodo 1: <b>{node1}</b></Grid>
                                            <Grid item>Api nodo 2: <b>{node2}</b></Grid>
                                            <Grid item>Api nodo 3: <b>{node3}</b></Grid>*/}
                                              <Tooltip title="Cambiar estatus Environment ">
                                                        {nodes[0].state==='paused' ?
                                                    <Button  onClick={() => start()}> Axeleratum / Environment dev : start
                                                        <LoopIcon/>
                                                    </Button> :  
                                                    <Button  onClick={() => stop()}>  Axeleratum / Environment dev : stop
                                                        <LoopIcon/>
                                                    </Button>
                                            }</Tooltip>
                                            <Grid item>Environment Status: <b>{nodes[0].state}</b></Grid>
                                            <Grid item>Fecha:<b>{fecha()}</b></Grid>
                                            <Grid item>Iniciando nodos a las <b>8:03 am</b></Grid> 
                                            <Grid item>Apagando nodos a las <b>20:57 pm</b></Grid> 
                                        </Grid>
                                    </Grid>
                    </div>
            </Paper>
        </Grid>
    <Grid  style={{paddingTop:'40px'}} container  justify="center" className={classes.root} spacing={3}>   
            <Grid  item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <AccountTreeIcon style={{color :'whiteSmoke'}}/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="System" secondary={
                        <dl>
                            <dt> Status : { nodes[0].state} </dt>
                            <dt> Environment Id : { nodes[0].environment_id } </dt>
                        </dl> }/>
                        <Button>
                            <PauseCircleOutlineIcon/>
                        </Button>
                    </ListItem>
                </List>
                </Paper>
            </Grid>
            <Grid  item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <AccountTreeIcon style={{color :'whiteSmoke'}}/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary=" Primary" secondary={
                        <dl>
                            <dt> Status : { nodes[1].state} </dt>
                            <dt> Environment Id : { nodes[1].environment_id } </dt>
                        </dl> }/>
                        <Button>
                            <PauseCircleOutlineIcon/>
                        </Button>
                    </ListItem>
                </List>
                </Paper>
            </Grid>
            <Grid  item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <AccountTreeIcon style={{color :'whiteSmoke'}}/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Secondary" secondary={
                        <dl>
                            <dt> Status : { nodes[2].state} </dt>
                            <dt> Environment Id : { nodes[2].environment_id } </dt>
                        </dl> }/>
                        <Button>
                            <PauseCircleOutlineIcon/>
                        </Button>
                    </ListItem>
                </List>
                </Paper>
            </Grid>
            
            
          <NodeEnv/>

          </Grid>
          <div style={{paddingTop:'50px'}}>          
            <Copyright/>
        </div>
    </Container>  }            
    </Paper>
    );
};

DashBoard.propTypes = {
    history: PropTypes.object,
};

export default DashBoard;
