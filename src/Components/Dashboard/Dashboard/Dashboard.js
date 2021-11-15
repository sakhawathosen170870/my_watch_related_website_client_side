import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashbordHome from '../DashbordHome/DashbordHome';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import Home from '../../Home/Home/Home';
import useAuth from '../../../hooks/useAuth';
import { Nav } from 'react-bootstrap';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    // const { admin } = useAuth();
    const {logout} = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            
            <Link className="text-decoration-none" to={`${url}`}><Button className="fw-bold" color="inherit">DashBord Home</Button></Link>
            <Link className="text-decoration-none" to={`${url}/payment`}><Button className="fw-bold" color="inherit">Payment</Button></Link> 
            <Link className="text-decoration-none" to={`${url}/review`}><Button className="fw-bold" color="inherit">Customer Review</Button></Link>
            <Link className="text-decoration-none" to="/home"><Button className="fw-bold" color="inherit">Back to Home</Button></Link>
            <Nav.Link  as= {Link}><button className="btn btn-primary mx-auto" onClick={logout}>Logout</button></Nav.Link>
            
            {/* {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/addDoctor`}><Button color="inherit">Add A Product</Button></Link>
                <Link to={`${url}/addDoctor`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addDoctor`}><Button color="inherit">Manage Products</Button></Link>
            </Box>} */}
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashbordHome></DashbordHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>    
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>    
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>    
                    </Route>
                    <Route path={`${path}`}>
                        <Home></Home>   
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;