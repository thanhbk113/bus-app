import { Notifications } from "@mui/icons-material";
import { List, ListItem } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { userSelector } from "../../features/userSlice";
import "./notification.scss";

const Notifycation = () => {
  const user = useAppSelector(userSelector);
  return (
    <div className="notiContainer">
      <div className="top">
        Thông báo
        <Notifications />
      </div>
      <div className="notiContain">
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          {user.histoyBuy.length === 0 && (
            <h3>Chưa có thông báo dành cho bạn!</h3>
          )}

          {user.histoyBuy.map((d) => (
            <ListItem>
              <span>Đã mua thành công vé {d.nameTicket}</span>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Notifycation;
