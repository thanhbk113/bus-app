import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../navbar/NavBar";
import "./aboutUs.scss";
import { CvGroup } from "./data";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutUs">
        <h1>Bus App</h1>
        <h2 className="group">Nhóm 6</h2>
        <p>Trần Ngọc Thanh</p>
        <p>Lê Đinh Ngọc Thành</p>
        <p>Huỳnh Như Quỳnh</p>
        <p>Kiều Ngọc Thạch</p>
        <p>Kiều Công Tân</p>
        <h2>Bảng phân công công việc</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Họ và tên</TableCell>
                <TableCell align="right">Công việc đã làm</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CvGroup.map((d) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{d.name}</TableCell>
                  <TableCell align="right">{d.nv}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AboutUs;
