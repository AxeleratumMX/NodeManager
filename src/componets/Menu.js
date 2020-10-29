import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import Contract from '@material-ui/icons/DescriptionTwoTone';
import AddUser from '@material-ui/icons/PersonAddTwoTone';
import History from '@material-ui/icons/HistoryTwoTone';
import Notify from '@material-ui/icons/NotificationsNoneTwoTone';
import Email from '@material-ui/icons/EmailTwoTone';
import Template from '@material-ui/icons/InsertDriveFileTwoTone';
import Params from '@material-ui/icons/AssignmentOutlined';
import Roles from '@material-ui/icons/SupervisorAccountOutlined';
import MenuIcon from '@material-ui/icons/Language';
import BallotIcon from '@material-ui/icons/Ballot';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    list: {
        width: 350,
        backgroundColor: '#F7FFFE',
    },
    fullList: {
        width: 250, height: 'auto',
        backgroundColor: '#FAFDFE',


    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.fullList, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            <div style={{height: '100%',paddingTop:'1rem'
                }} className="ui right">
            <h4 style={{paddingLeft:'3rem'}}>Environments</h4>
                </div>
                <Link to={{pathname: `/`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Axeleratum
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/kasia`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Kasia Solutions
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/despachoUno`,
                }}><MenuItem style={{color: '#7D7C7C'}} >
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Despacho Legal 1
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/despachoDos`
                }}><MenuItem style={{color: '#7D7C7C'}} >
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Despacho Legal 2
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/empresaUno`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Empresa 1
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/empresaDos`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Empresa 2
                    </MenuItem></Link> <Divider />
                <Link to={{pathname: `/desa`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Empresa Desa
                    </MenuItem></Link><Divider />
                <Link to={{pathname: `/materialidadUno`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                     Materialidad-Cliente 1
                    </MenuItem></Link><Divider />
                    <Link to={{pathname: `/materialidadDos`,
                }}><MenuItem style={{color: '#7D7C7C'}}>
                        <BallotIcon style={{color: '#7D7C7C', fontSize: 25, margin: '1rem'}} />
                    Materialidad-Cliente 2
                    </MenuItem></Link><Divider />
            </List>
        </div>
    );
    return (
        <div>

            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
