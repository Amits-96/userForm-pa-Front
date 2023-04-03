import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormTable from "../FormTable";
import BasicModal from "./modal";
import axios from "axios";

function DataForm() {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const [allFormData, setallFormData] = useState([]);
  const getFormData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/form/getUser"
      );
      setallFormData(response.data.data);
    } catch (err) {
      console.log("error while getting the api", err);
    }
  };
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    getFormData()
  }, [openModal, openDialog])


  return (
    <div style={{ minHeight: "100vh", overflow: "auto" }}>
      <AppBar
        position="static"
        color="primary"
        style={{
          justifyContent: 'space-between', alignItems: 'center', color: "#FFF",
          background: "#009EFF",
          padding: "20px"
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            style={{ padding: "15px 15px 15px 30px", color: "#FFF" }}
          >
            User Table
          </Typography>
        </div>
      </AppBar>
      <Box
        className="d-flex"
        sx={{
          flexWrap: "wrap",
          "& > :not(style)": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Container maxWidth="xl" style={{ height: "50vh" }}>
          <Grid>
            <Container maxWidth="xl">
              <Box
                mt={5}
                mb={5}
                // className={classes.buttonsearch}
                style={{
                  display: "flex",
                  flexWrap: "wrap"
                }}
              >
                <Button
                  // className={classes.btncolor}
                  variant="contained"
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  Create User
                </Button>
              </Box>

              <Grid container>
                <FormTable allFormData={allFormData} getFormData={getFormData} openDialog={openDialog} setOpenDialog={setOpenDialog} />
              </Grid>
            </Container>
          </Grid>
        </Container>
        {openModal && <BasicModal openModal={openModal} setOpenModal={setOpenModal} handleClose={handleClose} />}

      </Box>
    </div>
  );
}

export default DataForm;
