import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import React, { useEffect, useState } from "react";
import EditFormData from "../EditFormData";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AlertDialog from "../DataForm/AlertBox";

function FormTable({ allFormData, getFormData, openDialog, setOpenDialog }) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [id, setId] = React.useState('');

  const editData = (val) => {
    setSelectedUser(val);
    setOpen(true);
  };

  return (
    <>
      <AlertDialog setOpenDialog={setOpenDialog} openDialog={openDialog} id={id} />
      <Box sx={{ width: "100%" }}>
        <TableContainer sx={{ justifyContent: "center", marginLeft: "0px" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: 'orange', color: 'blue' }}>
              <TableRow >
                <TableCell align="center" sx={{ fontWeight: "bold" }}>FirstName</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>MiddleName</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>LastName</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Email ID</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Mobile No</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Address</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!allFormData.length ? (<TableRow >
                <TableCell align='center' colSpan={9}>
                  No Data Found
                </TableCell>
              </TableRow>) : allFormData.map((val) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{val.firstName}</TableCell>
                    <TableCell align="center">{val.middleName}</TableCell>
                    <TableCell align="center">{val.lastName}</TableCell>
                    <TableCell align="center">{val.email}</TableCell>
                    <TableCell align="center">{val.phone}</TableCell>
                    <TableCell align="center">{val.address}</TableCell>
                    <TableCell align="center" sx={{ justifyItems: "center" }}>
                      <ModeEditIcon sx={{ color: "#107E32 " }} onClick={() => { editData(val) }} />
                      <DeleteSweepIcon sx={{ color: "#EE4F0E", marginLeft: "20px" }} onClick={() => {
                        setId(val._id)
                        setOpenDialog(true)
                      }} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <EditFormData
          open={open}
          setOpen={setOpen}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          getFormData={getFormData}
        />
      </Box>
    </>
  );
}

export default FormTable;


