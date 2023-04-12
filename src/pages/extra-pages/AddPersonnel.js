import MainCard from "components/MainCard";
import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  MenuItem,
} from "../../../node_modules/@mui/material/index";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const AddPersonnel = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    dob: "",
    station: "",
    batch: "",
  });

  const [date, onDateChange] = useState(new Date());

  const onChange = (e) => {
    // setDetails({
    //   ...details,
    //   [e.target.name]: e.target.value,
    // });
    console.log(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    console.log(date);
  };

  return (
    <MainCard title="Add Personnel">
      <div style={{ height: "70vh" }}>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    helperText="Enter first name"
                    name="name"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    helperText="Enter last name"
                    name="name"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    fullWidth
                    helperText="Enter password"
                    name="name"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  DOB:
                  <DatePicker onChange={onChange} value={date} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Badge Number"
                    helperText="Please enter Badge Number"
                    fullWidth
                    name="badge"
                    onChange={onChange}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Station"
                    helperText="Please select station"
                    fullWidth
                    select
                    name="badge"
                    onChange={onChange}
                  >
                    {[1, 2, 3, 4, 5].map((option) => (
                      <MenuItem key={option} value={option}>
                        {`Station ${option}`}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                  >
                    Add Personnel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="error"
                    onClick={onSubmit}
                  >
                    Bulk Add using CSV
                  </Button>
                </Grid>
              </Grid>
              <br />
            </form>
          </Grid>
        </Grid>
      </div>
    </MainCard>
  );
};

export default AddPersonnel;
