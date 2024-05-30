import React, { useState, useEffect } from "react";
import DisplayDetail from "./DisplayDetail";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const DisplayResult = (props) => {
  const { searchWord } = props;
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
    let Items = await fetch(`/api/items?word=${word}`);
    Items = await Items.text();
    setItemList(JSON.parse(Items));
  }

  useEffect(() => {
    getItems(searchWord);
  }, [searchWord]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ height: 600, width: "80%" }}>
        <DataGrid columns={[{ field: "itemName" }]} rows={itemList} />
      </div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DisplayDetail></DisplayDetail>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DisplayResult;
