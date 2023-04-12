import MainCard from "components/MainCard";
import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
} from "../../../node_modules/@mui/material/index";

const CreateBandobast = () => {
  const [details, setDetails] = useState({
    name: "",
    address: "",
    start: "",
    end: "",
    radius: 0,
  });

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <MainCard title="Create Bandobast">
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Event name"
                  fullWidth
                  helperText="Enter event name"
                  margin="normal"
                  name="name"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bandobast Radius"
                  defaultValue="10"
                  helperText="Please select Bandobast Radius (in meters)"
                  fullWidth
                  margin="normal"
                  name="radius"
                  onChange={onChange}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Bandobast Location details"
                  fullWidth
                  multiline
                  rows={2}
                  helperText="Please Enter Bandobast Address"
                  margin="normal"
                  name="address"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={8}></Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                >
                  Create Event
                </Button>
              </Grid>
            </Grid>
            <br />
          </form>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default CreateBandobast;
