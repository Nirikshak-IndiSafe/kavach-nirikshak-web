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
    station: "",
    batch: "",
  });

  const [date, onDateChange] = useState(new Date());

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    console.log(date);

    const reqBody = {
      ...details,
      dob: date,
      admin: false,
      station: "64364fc6a192eef970dedf19"
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/personnel/register",
        {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(reqBody)
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }

  console.log(reqBody)
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
                    name="firstName"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    helperText="Enter last name"
                    name="lastName"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    fullWidth
                    helperText="Enter password"
                    name="password"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  DOB:
                  <DatePicker onChange={onDateChange} value={date} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Badge Number"
                    helperText="Please enter Badge Number"
                    fullWidth
                    type="number"
                    name="batch"
                    onChange={onChange}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Station"
                    helperText="Please select station"
                    fullWidth
                    select
                    name="station"
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
