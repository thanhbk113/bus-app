import { Google } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAuth, userSelector } from "../../features/userSlice";
import { clientId } from "../../share";
import "./login.scss";

const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  const { signIn } = useGoogleLogin({
    clientId,
    onSuccess(res: any) {
      console.log(res);
      dispatch(loginAuth(res.profileObj));
      navigate("/");
    },
    isSignedIn: true,
    cookiePolicy: "single_host_origin",
  });

  useEffect(() => {
    if (user.auth) {
      navigate("/");
    }
  }, [dispatch, user]);

  console.log(user.auth);

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
          <CardActions>
            <Button
              variant="contained"
              endIcon={<Google />}
              onClick={() => signIn()}
            >
              Đăng nhập với Google
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
