import { Card, CardContent, CardMedia, List, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { userSelector } from "../../features/userSlice";
import NavBar from "../navbar/NavBar";

const HistoryBuy = () => {
  const user = useAppSelector(userSelector);
  return (
    <div>
      <NavBar />
      {user.histoyBuy.length === 0 ? (
        <h2>Chưa có lịch sử mua hàng </h2>
      ) : (
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography component="div" variant="h2">
            Lịch sử mua vé của bạn
          </Typography>
          {user.histoyBuy.map((b) => (
            <Card sx={{ maxWidth: 500, width: 400, margin: 3 }}>
              <CardMedia
                component="img"
                height="240"
                image="https://i.ibb.co/M1S4vb3/Bus-removebg-preview.png"
                alt="Vé xe của bạn"
              />
              <CardContent>
                <span>{b.nameTicket}</span>
                <p>
                  {b.value === 3000
                    ? "Vé học sinh / Sinh viên"
                    : "Vé Người lớn"}
                </p>
                <p>Giá: {b.value}</p>
              </CardContent>
            </Card>
          ))}
        </List>
      )}
    </div>
  );
};

export default HistoryBuy;
