import { LoadingOutlined } from "@ant-design/icons";
import {
  Close,
  DirectionsBus,
  LocalGroceryStore,
  Paid,
  Search,
} from "@mui/icons-material";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  buyTicket,
  getAllBus,
  getSearchBus,
  moveToHistory,
  userSelector,
} from "../../features/userSlice";
import "./searchBuy.scss";

const SearchBuy = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(getAllBus());
  }, []);
  const [close, setClose] = useState(false);
  const handleSearch = () => {
    if (input !== "") {
      setClose(true);
      dispatch(getSearchBus(input));
    }
  };
  const handleClose = () => {
    setClose(false);
    dispatch(getAllBus());
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleCloseDr = () => setOpenDr(false);
  const [openDr, setOpenDr] = useState(false);
  const handleHistory = () => {
    toast.success(
      "Đã chuyển vào lịch sử ,vui lòng chọn mục xem lịch sử mua để kiểm tra"
    );
    dispatch(moveToHistory(user.totalBuy));
  };
  return (
    <div className="searchBuy">
      <Badge
        badgeContent={user.totalBuy.length}
        color="error"
        className="iconStore"
      >
        <LocalGroceryStore onClick={() => setOpenDr(true)} />
      </Badge>
      <div className="search">
        <input
          type="text"
          placeholder="Tìm theo tên tuyến..."
          onChange={handleInput}
        />
        {close ? (
          <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
        ) : (
          <Search className="icon" onClick={handleSearch} />
        )}
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          position: "relative",
          overflow: "auto",
          maxHeight: 1000,
          "& ul": { padding: 0 },
        }}
      >
        {user.loading ? (
          <LoadingOutlined />
        ) : (
          <>
            {user.currentBus.map((d) => (
              <ListItem key={d.name}>
                <div className="top">
                  <DirectionsBus />
                  {d.name}
                </div>
                <div className="middle">
                  <p>Xe sẽ đến trong {d.minutes} phút nữa</p>
                  <p>Xe bus số: {d.number}</p>
                  <p>Khoảng cách {d.distance} m</p>
                </div>
                <div className="bottom">
                  <div className="buy">
                    <span className="hs">HS/SV:{d.valueS}</span>
                    <Paid
                      onClick={() =>
                        dispatch(buyTicket({ nameTicket: d.name, value: 3000 }))
                      }
                    />
                  </div>
                  <div className="buy">
                    <span>Người Lớn:{d.valueL}</span>
                    <Paid
                      onClick={() =>
                        dispatch(buyTicket({ nameTicket: d.name, value: 6000 }))
                      }
                    />
                  </div>
                </div>
              </ListItem>
            ))}
          </>
        )}
      </List>
      <Drawer
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            width: {
              xs: "100%",
              sm: 500,
            },
            boxSizing: "border-box",
          },
        }}
        open={openDr}
        onClose={handleCloseDr}
      >
        <Close
          sx={{
            display: {
              sm: "block",
              md: "none",
            },
            position: "absolute",
            right: 0,
          }}
          onClick={() => setOpenDr(false)}
        />
        {user.totalBuy.length === 0 ? (
          <h2
            style={{
              padding: "2rem",
            }}
          >
            Chưa có vé đã mua!
          </h2>
        ) : (
          <List>
            {user.totalBuy.map((b) => (
              <Card sx={{ maxWidth: 345, margin: 5 }}>
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
            <Button
              sx={{
                margin: 5,
              }}
              variant="contained"
              onClick={handleHistory}
            >
              Chuyển vào lịch sử
            </Button>
          </List>
        )}
      </Drawer>
    </div>
  );
};

export default SearchBuy;
