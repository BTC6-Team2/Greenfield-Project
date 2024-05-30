import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const DisplayDetail = (props) => {
  const { trashId } = props; //itemのid

  const [info, setInfo] = useState([]);

  //ゴミの捨て場所とかをfetchする
  // GET api/items/:id

  useEffect(() => {
    fetch(`/api/items/1`)
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => setInfo([res]))
      .catch((err) => console.error(err));
      // console.log({info})
  }, []);

  return (
    <>
    {/* {console.log(info[0])} */}
    <h2>品目：{info[0].itemName}</h2>
    <h2>分類：{info[0].typeName}</h2>
    {/* <h2>{info[0] ? info[0].itemName}</h2>
    <h2>{info[0].typeName}</h2> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>回収施設名</TableCell>
            <TableCell align="right">住所</TableCell>
            <TableCell align="right">開設時間</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((itemObj, index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {itemObj.stationName}
              </TableCell>
              <TableCell align="right">{itemObj.stationAddress}</TableCell>
              <TableCell align="right">{itemObj.stationDayTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
  

  // return (
  //   <div>
  //     {info.map((itemObj, index) => (
  //       <section key={index}>
  //         <h2>品目：{itemObj.item_name}</h2>
  //         <p>分類: {itemObj.type_name}</p>
  //         <p>回収施設名: {itemObj.station_name}</p>
  //         <p>住所: {itemObj.address}</p>
  //         <p>開設時間: {itemObj.day_time}</p>
  //       </section>
  //     ))}
  //   </div>
  // );
};

export default DisplayDetail;
