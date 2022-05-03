import { NotificationsNone, Visibility } from "@mui/icons-material";
import "./navbar.scss";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, userSelector } from "../../features/userSlice";
import { VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Notifycation from "../notifycation/Notifycation";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setDrop(false);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useAppSelector(userSelector);
  const handleShowMoney = () => {
    setShow(!show);
  };
  const [drop, setDrop] = useState(false);
  const handleDrop = (event) => {
    setDrop(true);
    setAnchorEl(event.currentTarget);
  };
  const dispath = useAppDispatch();
  const handleLogout = () => {
    handleClose();
    dispath(logout());
  };
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <span>Bus App</span>
      </Link>
      <div className="right">
        <NotificationsNone className="icon" onClick={handleDrop} />
        <Link to="/huongdan" className="link">
          <span>Hướng dẫn</span>
        </Link>
        <Link to="/VeChungToi" className="link">
          <span>Về chúng tôi</span>
        </Link>
        <Avatar
          alt="Avatar"
          src="https://i.ibb.co/1bVfjdH/avatar-placeholder.png"
          onClick={handleClick}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {drop ? (
            <>
              <Notifycation />
            </>
          ) : (
            <>
              <div
                className="showMoney"
                style={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "17rem",
                }}
              >
                Số tiền còn lại trong ví:{" "}
                {show ? `${user.wallet} VND` : "*****"}
                {show ? (
                  <Visibility
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    onClick={handleShowMoney}
                  />
                ) : (
                  <VisibilityOff
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    onClick={handleShowMoney}
                  />
                )}
              </div>
              <MenuItem>Xin chào {user.auth}</MenuItem>
              <Link
                to="/muave"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>
                  <span>Mua vé</span>
                </MenuItem>
              </Link>
              <Link
                to="/xemlichsu"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Xem lịch sử mua</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
