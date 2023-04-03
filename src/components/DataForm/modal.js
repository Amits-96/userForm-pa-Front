import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { validateFormData } from "../validation";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  div: 4,
};

export default function BasicModal({ openModal, setOpenModal, handleClose }) {

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errorData, setErrorData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  });


  let errObj = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
  };



  const updateChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    let errObj = { ...errorData };
    console.log(e.target.name, "cvg");

    if (e.target.name === "firstName") {
      if (e.target.value) {
        let regex = /^[A-Za-z0-9 ]*$/;
        if (regex.test(e.target.value)) {
          errObj.firstName = "";
        } else {
          errObj.firstName = "*Invalid Field";
        }
      } else {
        errObj.firstName = "*This field is required";
      }
    }

    if (e.target.name === "lastName") {
      if (e.target.value) {
        let regex = /^[a-zA-Z ]{1,30}$/;
        if (regex.test(e.target.value)) {
          errObj.lastName = "";
        } else {
          errObj.lastName = "*Invalid Field";
        }
      } else {
        errObj.lastName = "*This field is required";
      }
    }


    if (e.target.name === "email") {
      if (e.target.value) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(e.target.value)) {
          errObj.email = "";
        } else {
          errObj.email = "*Invalid Field";
        }
      } else {
        errObj.email = "This field is required";
      }
    }

    if (e.target.name === "phone") {
      if (e.target.value) {
        let regex = /^[0-9]*\d$/;
        if (regex.test(e.target.value)) {
          errObj.phone = "";
        } else {
          errObj.phone = "*Invalid Field";
        }
      } else {
        errObj.phone = "This field is required";
      }
    }

    setErrorData({ ...errObj });
  };

  let postData = async () => {
    try {
      let res = await axios.post(
        "http://localhost:5000/form/addUser",
        formData
      );
      handleClose()
    } catch (err) {
      console.log(err);
    }
  };

  const Submit = async () => {
    let formDataError = validateFormData(formData, errorData, setErrorData, errObj);
    if (!formDataError) {
      postData();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    bordercolor: "red",
    height: "0.48rem",
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid >
            <form onSubmit={handleSubmit}>
              <Grid>
                <Typography
                  style={{ fontSize: 25, fontWeight: "bold", justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                  className="mt-10"
                >
                  User Form
                </Typography>
              </Grid>
            </form>

            <Grid
              container
              direction="column"
              columns={{ sm: 12, md: 6, lg: 6 }}
              style={{
                justifyContent: 'center', alignItems: 'center'
              }}
            >
              <Grid item sm={12} md={6} className="pt-2">
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
                  className="d-flex justify-content-center"
                  value={formData.firstName}
                  onChange={(e) => updateChange(e)}
                />
                {errorData.firstName && (
                  <div
                    error
                    style={{ color: "red", fontSize: 12, marginRight: 50 }}
                  >
                    {errorData.firstName}
                  </div>
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
                      justifyContent: "center",
                    },
                  }}
                  className="d-flex justify-content-center"
                  value={formData.middleName}
                  onChange={(e) => updateChange(e)}
                />
                {errorData.middleName && (
                  <div
                    error
                    style={{ color: "red", fontSize: 12, marginRight: 50 }}
                  >
                    {errorData.middleName}
                  </div>
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
                  className="d-flex justify-content-center"
                  value={formData.lastName}
                  onChange={(e) => updateChange(e)}
                />
                {errorData.lastName && (
                  <div
                    error
                    style={{ color: "red", fontSize: 12, marginRight: 50 }}
                  >
                    {errorData.lastName}
                  </div>
                )}
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
                  className="d-flex justify-content-center"
                  value={formData.email}
                  onChange={(e) => updateChange(e)}
                />
                {errorData.email && (
                  <div
                    error
                    style={{ color: "red", fontSize: 12, marginRight: 50 }}
                  >
                    {errorData.email}
                  </div>
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
                  className=" d-flex justify-content-center"
                  value={formData.phone}
                  onChange={(e) => updateChange(e)}
                />
                {errorData.phone && (
                  <div
                    error
                    style={{ color: "red", fontSize: 12, marginRight: 50 }}
                  >
                    {errorData.phone}
                  </div>
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
              <br />
              <Grid item sm={12} md={6}>
                <Button
                  variant="contained"
                  className="m-4 w-100 d-flex justify-content-center"
                  onClick={() => Submit()}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            <br />

          </Grid>
        </Box>
      </Modal>
    </div>
  );
}