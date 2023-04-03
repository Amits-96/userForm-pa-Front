import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

export default function AlertDialog({ setOpenDialog, openDialog, id }) {

    const handleClose = () => {
        setOpenDialog(false);
    };
    const deleteData = async (id) => {
        try {
            let res = await axios.delete(
                `http://localhost:8000/form/deleteUser/${id}`
            );
            handleClose()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you really want to delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => deleteData(id)}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}