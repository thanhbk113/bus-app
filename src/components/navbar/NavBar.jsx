import { NotificationsNone, Send, Visibility } from "@mui/icons-material";
import "./navbar.scss";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Menu,
  MenuItem,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, userSelector } from "../../features/userSlice";
import { VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Notifycation from "../notifycation/Notifycation";
import { toast } from "react-toastify";
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
  const [openMd, setOpenMd] = useState(false);
  const handleOpenMd = () => {
    handleClose();
    setOpenMd(true);
  };
  const handleCloseMd = () => {
    setOpenMd(false);
  };
  const [value, setValue] = useState(2);
  const handleSent = () => {
    toast.success("Chúng tôi đã nhận được và sẽ phản hồi đến bạn sớm");
    setOpenMd(false);
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
              <MenuItem onClick={handleOpenMd}>Phản hồi và đánh giá</MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </>
          )}
        </Menu>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openMd}
          onClose={handleCloseMd}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box
            sx={{
              width: {
                sm: 200,
                md: 500,
              },
              height: 400,
              backgroundColor: "white",
              position: "absolute",
              margin: "auto",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h3"
              sx={{
                fontSize: {
                  sm: "1rem",
                  md: "",
                },
              }}
            >
              Phản hồi từ bạn(Không bắt buộc)
            </Typography>
            <TextField
              id="outlined-basic"
              label="Phản hồi của bạn..."
              variant="outlined"
              sx={{
                width: "90%",
              }}
            />
            <Typography
              sx={{
                marginTop: 2,
              }}
              component="legend"
            >
              Đánh giá
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                width: "20%",
              }}
              endIcon={<Send />}
              onClick={handleSent}
            >
              Gửi
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
