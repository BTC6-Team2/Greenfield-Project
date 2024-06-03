import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Map from './Map';

const DisplayDetail = ({ trashId }) => {
    const [info, setInfo] = useState();
    // ゴミ出しデータ
    const [geoList, setGeoList] = useState([]);
    //ゴミの捨て場所とかをfetchする
    // GET api/items/:id
    // !トラッシュIDが変更されるたびにfetchしてゴミ捨て場の詳細を取得

    useEffect(() => {
        console.log(trashId);
        fetch(`/api/items/${trashId}`)
            .then((res) => res.json())
            // .then((res) => console.log([res]))
            // .then((res) => console.log(res.station))
            .then((res) => {
                setGeoList(res.station);
                setInfo(res);
            })
            .catch((err) => console.error(err));
        // console.log({info})

        // !trashidが更新されるたびに地図上に表示されるマップピンの位置を更新するようにする。(thenの中に。)
        // サンプルデータ
        // setGeoList([
        //     {
        //         id: 1,
        //         lat: 34.964817,
        //         lng: 137.181291,
        //         name: '総合資源ステーション りすた稲熊',
        //     },
        //     {
        //         id: 2,
        //         lat: 34.954608,
        //         lng: 137.172967,
        //         name: '市役所（東立体駐車場・北側駐車場',
        //     },
        // ]);
    }, [trashId]);

    return (
        <>
            <div className="display_ditail">
                <h2>品目：{info && info.itemName}</h2>
                <h2>分類：{info && info.typeName}</h2>
                {/* <h2>{info[0] ? info[0].itemName}</h2>
      <h2>{info[0].typeName}</h2> */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>回収施設名</TableCell>
                                <TableCell align="right">住所</TableCell>
                                <TableCell align="right">開設時間</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {info &&
                                info.station.map((itemObj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {itemObj.stationName}
                                        </TableCell>
                                        <TableCell
                                            // style={{ width: 160 }}
                                            align="right"
                                        >
                                            {itemObj.stationAddress}
                                        </TableCell>
                                        <TableCell
                                            // style={{ width: 160 }}
                                            align="right"
                                        >
                                            {itemObj.stationDayTime}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Map geoList={geoList} />
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
