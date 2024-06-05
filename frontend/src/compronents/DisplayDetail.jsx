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
    const [geoList, setGeoList] = useState([]);

    useEffect(() => {
        console.log(trashId);
        fetch(`/api/items/${trashId}`)
            .then((res) => res.json())
            .then((res) => {
                setGeoList(res.station);
                setInfo(res);
            })
            .catch((err) => console.error(err));
    }, [trashId]);

    return (
        <>
            <div className="display_ditail">
                <h2>品目：{info && info.itemName}</h2>
                <h2>分類：{info && info.typeName}</h2>
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
};

export default DisplayDetail;
