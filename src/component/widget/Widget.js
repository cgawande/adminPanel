import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React, { useState } from "react";

const Widget = ({ type }) => {
 

  //temporary
  const amount = 100;
  const diff = 20;

  // switch (type) {
  //case "user":

 

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{ type.title}</span>
        <span className="counter">
          { type.isMoney && "$"} {amount}
        </span>
        <span className="link">{ type.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        { type.icon}
      </div>
    </div>
  );
};

export default Widget;
