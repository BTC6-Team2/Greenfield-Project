import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import DisplayDetail from "./DisplayDetail";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


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
      {/* <div style={{ height: 600, width: "80%" }}>
        <DataGrid columns={[{ field: "itemName" }]} rows={itemList} />
      </div> */}
  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
<List>
  {itemList.map((ele,index)=>{
    return(
    <ListItem key = {index} disablePadding>
    <ListItemButton className='item' id={ele.id} onClick={() =>{
            setTrashId(document.getElementsByClassName('item'));
            handleClickOpen();
          }}>
      <ListItemText primary={ele.itemName} />
    </ListItemButton>
  </ListItem>
  )})}
          {/* <ListItem disablePadding >
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>*/}
        </List> 
        </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>詳細</DialogTitle>
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
