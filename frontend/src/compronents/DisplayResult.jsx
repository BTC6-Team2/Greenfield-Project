import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import DisplayDetail from './DisplayDetail';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// !setGeoList追加
const DisplayResult = ({ searchWord }) => {
    const [itemList, setItemList] = useState([]);
    const [trashId, setTrashId] = useState('');
    const [open, setOpen] = React.useState(false);

    async function getItems(word) {
        if (word === '') {
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
            <Box
                sx={{
                    width: '100%',
                    height: '500px',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <List sx={{ overflow: 'auto', height: '70vh' }}>
                    {itemList.map((ele, index) => {
                        let idNum = ele.id;
                        return (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    className="item"
                                    onClick={() => {
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
            <Dialog maxWidth={'lg'} open={open} onClose={handleClose}>
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
