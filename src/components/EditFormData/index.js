import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { validateFormData } from "../validation";

function EditFormData({ open, setOpen, selectedUser, getFormData }) {
  // console.log("selected user", selectedUser);
  const addressData = [
    { label: "570026 Bogadi Mysore" },
    { label: "560018 Chamarajapet Banglore" },
    { label: "560100 Electronic City Banglore" },
    { label: "560078 J P Nagar Banglore" },
    { label: "570004 Chamundi Extn Mysore" },
    { label: "560041 Jayanagar Banglore" },
    { label: "560041 Jayanagar Manglore" },
    { label: "572101 Tumkur" },
    { label: "563135 Kolar" },
    { label: "577428 Belgavi" }
  ];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  });
  console.log(formData, "formData");
  const [errorData, setErrorData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setformData({ ...selectedUser });
  }, [selectedUser]);

  const updateChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let errObj = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  };


  let editFormData = async () => {
    try {
      let response = await axios.put(
        `http://localhost:8000/form/updateUser/${selectedUser._id}`,
        formData
      );
      getFormData();
      setOpen(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogActions
          sx={{
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginTop: "20px",
          }}
        >
          Edit Form
        </DialogActions>
        <DialogContent>
          <Grid
            container
            direction="column"
            className="mb-4 justify-content-center align-items-center "
            columns={{ sm: 12, md: 6, lg: 6 }}
          >
            <Grid item sm={12} md={6} className="pt-2 ">
              <TextField
                id="name-input"
                name="firstName"
                label="First Name"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                    justifyContent: "center",
                  },
                }}
                className="d-flex justify-content-center p-2"
                value={formData.firstName}
                onChange={(e) => updateChange(e)}
              />
              {errorData.firstName && (
                <p
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.firstName}
                </p>
              )}
            </Grid>
            <br />
            <Grid item sm={12} md={6} className="pt-2">
              <TextField
                id="name-input"
                name="lastName"
                label="Last Name"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                    justifyContent: "center",
                  },
                }}
                className="d-flex justify-content-center p-2"
                value={formData.lastName}
                onChange={(e) => updateChange(e)}
              />
              {errorData.lastName && (
                <p
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.lastName}
                </p>
              )}
            </Grid>
            <br />

            <Grid item sm={12} md={6} className="pt-2">
              <TextField
                id="name-input"
                name="middleName"
                label="Middle Name"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                className="d-flex justify-content-center p-2"
                value={formData.middleName}
                onChange={(e) => updateChange(e)}
              />
              {/* {errorData.middleName && (
                <p
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.middleName}
                </p>
              )} */}
            </Grid>
            <br />
            <Grid item sm={12} md={6} className="pt-2">
              <TextField
                id="name-input"
                name="email"
                label="Email ID"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                className="d-flex justify-content-center p-2"
                value={formData.email}
                onChange={(e) => updateChange(e)}
              />
              {errorData.email && (
                <p
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.email}
                </p>
              )}
            </Grid>
            <br />
            <Grid item sm={12} md={6} className=" pt-2">
              <TextField
                id="name-input"
                name="phone"
                label="Phone No"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                className=" d-flex justify-content-center p-2"
                value={formData.phone}
                onChange={(e) => updateChange(e)}
              />
              {errorData.phone && (
                <p
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.phone}
                </p>
              )}
            </Grid>
            <br />
            <Grid item sm={12} md={6} className="pt-2">
              <TextField
                id="name-input"
                name="address"
                label="Address"
                type="text"
                sx={{
                  width: { sm: 300, md: 300 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                className=" d-flex justify-content-center"
                value={formData.address}
                onChange={(e) => updateChange(e)}
              />
              {errorData.address && (
                <div
                  error
                  style={{ color: "red", fontSize: 12, marginRight: 50 }}
                >
                  {errorData.address}
                </div>
              )}
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            marginBottom: "10px",
            height: "100%",
          }}
        >
          <Grid item sm={12} md={6}>
            <Button
              variant="contained"
              className="m-1 w-100 d-flex justify-content-center align-item-center "
              onClick={editFormData}
            >
              Save Changes
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditFormData;
