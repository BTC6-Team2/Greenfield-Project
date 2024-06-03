import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DisplayDetail from "./DisplayDetail";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// !setGeoList追加
const DisplayResult = ({ searchWord }) => {
    const [itemList, setItemList] = useState([]);
    const [trashId, setTrashId] = useState("");
    const [open, setOpen] = React.useState(false);

    //   [
    //     { id: 1, itemName: "アイロン" },
    //     { id: 2, itemName: "アイロン台" },
    //     { id: 3, itemName: "アイロン転写紙" },
    //     { id: 4, itemName: "アコーディオンカーテン" },
    //     { id: 5, itemName: "圧着はがき" },
    //     { id: 6, itemName: "油紙" },
    //     { id: 7, itemName: "油（食用油" },
    //     { id: 8, itemName: "油（その他" },
    //     { id: 9, itemName: "雨戸" },
    //     { id: 10, itemName: "網戸" },
    //   ]

    //fetchする

    //ゴミの捨て場所とかをfetchする
    async function getItems(word) {
        // console.log(word);
        if (word === "") {
            // console.log("null");
        } else {
            const Items = await fetch(`/api/items?word=${word}`);
            const itemArray = await Items.text();
            console.log(itemArray);
            setItemList(JSON.parse(itemArray));
        }
    }
    // !サーチワードが変わるたびにfetchして、ゴミワードを取得している
    useEffect(() => {
        // !itemListを更新している
        getItems(searchWord);
    }, [searchWord]);

    // モーダルのオンとオフ
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    // border: "1px solid red",
                }}
            >
                {/* !itemlistをmapして検索結果としている */}
                <List>
                    {itemList.map((ele, index) => {
                        let idNum = ele.id;
                        return (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    className="item"
                                    onClick={() => {
                                        // !検索結果をクリックするとデータベースから取得し他idがセットされ、
                                        // !モーダルがオープンする
                                        setTrashId(ele.id);
                                        handleClickOpen();
                                    }}
                                >
                                    <ListItemText primary={ele.itemName} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
            {/* モーダル */}
            <Dialog maxWidth={"lg"} open={open} onClose={handleClose}>
                <DialogTitle>詳細</DialogTitle>
                <DialogContent>
                    <DisplayDetail trashId={trashId}></DisplayDetail>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default DisplayResult;
