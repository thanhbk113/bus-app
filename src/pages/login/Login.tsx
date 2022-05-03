import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAuth, userSelector } from "../../features/userSlice";
import "./login.scss";

const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.auth) {
      navigate("/");
    }
  }, [dispatch, user]);
  const [name, setName] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLogIn = () => {
    if (name !== "") {
      dispatch(loginAuth(name));
      navigate("/");
    } else {
      toast.error("Vui lòng nhập tên của bạn !");
    }
  };

  return (
    <div className="login">
      <h3>Đăng nhập để sử dụng các tính năng hấp dẫn của ứng dụng</h3>
      <Card
        sx={{
          maxWidth: 800,
          width: {
            sm: 400,
            md: 600,
          },
          margin: 3,
        }}
      >
        <CardMedia
          component="img"
          image="https://i.ibb.co/gZfxrhR/danh-sach-lo-trinh-cac-tuyen-xe-buyt-tphcm-nam-2019-53-4524.jpg"
          alt="Logo Bus App"
          sx={{
            height: {
              sm: 300,
              md: 440,
            },
          }}
          width="200"
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder="Nhập tên của bạn"
            onChange={handleInput}
          />
          <CardActions>
            <Button variant="contained" onClick={handleLogIn}>
              Đăng nhập
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
