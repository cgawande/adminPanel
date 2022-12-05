import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">admin</span>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <li>
          <DashboardIcon/>
            <span>Dashboad</span>
            </li>
          <li>
            < PersonOutlineIcon/>
            <span>Users</span>
            </li>
          <li>
          <StoreIcon/>
            <span>Products</span>
            </li>
          <li>
           <CreditCardIcon/>
            <span>Orders</span>
         </li>
         <li>
            <LocalShippingIcon/>
            <span>Delivery</span>
         </li>
         <li>
       
         <InsertChartIcon/>
            <span>Stats</span>
         </li>
         <li>
          <NotificationsNoneIcon/>
            <span>Notification</span>
         </li>
         <li>
         <SettingsSystemDaydreamOutlinedIcon/>
            <span>System Helth</span>
         </li>
          <li>
      
            <PsychologyOutlinedIcon/>
            <span>Logs</span>
         </li>
         <li>
          <SettingsApplicationsIcon/>
            <span>Settings</span>
         </li>
         <li>
         <AccountCircleOutlinedIcon/>
            <span>Profile</span>
         </li>
         <li>
          <ExitToAppIcon/>
            <span>Logout</span>
         </li>

          </ul>

      </div>
      <div className="bottom">
        
      </div>
    </div>
  )
}

export default Sidebar
