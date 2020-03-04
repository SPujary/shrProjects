import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GroupIcon from '@material-ui/icons/Group';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function Sidebar(props) {
    const useStyles = makeStyles(theme => ({
      root: {
         border: '1px solid #d5d5d5',
         maxWidth:'100%',
         height:'100vh',
         position: 'fixed',
         zIndex: 1,
         overflowX: 'hidden',
        },
        link:{
          color:'inherit',
          textDecoration:'none',
        }
      }));
      const classes = useStyles();
      // const history = useHistory();

      // console.log(props.location);
      
      // if(props.location.state.login.username!=='admin')
      // {
      //   history.push( '/');
      // }
      return (
        <div className={classes.root}>
          <Divider />
          <List>
            <Link to="/Students" className={classes.link}>
            <ListItem button>
              <ListItemIcon><GroupIcon/> </ListItemIcon>
              <ListItemText primary="Students"/>
            </ListItem>
            </Link>
            <Link to="/ShoppingCart" className={classes.link}>
            <ListItem button>
              <ListItemIcon><ShoppingCartIcon/> </ListItemIcon>
              <ListItemText primary="Shopping Cart"/>
            </ListItem>
            </Link>
          </List>

          <Divider />

          <List>
            <Link to="/" className={classes.link}>
          <ListItem button >
              <ListItemIcon><PowerSettingsNewIcon/> </ListItemIcon>
              <ListItemText primary="Sign Out"/>
            </ListItem>
            </Link>
            {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </List>
          </div>
      );
  }

  function Navbar(props) {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
      const classes = useStyles();
  
      return (
        <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              shrProjects
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <AccountCircleIcon fontSize="large"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      );
  }

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar/>
            <Sidebar/>

        </React.Fragment>
    );
}

export default Layout;