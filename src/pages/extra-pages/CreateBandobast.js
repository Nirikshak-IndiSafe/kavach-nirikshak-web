import MainCard from "components/MainCard";
import React from "react";
import {
  Button,
  Grid,
  MenuItem,
  TextField,
} from "../../../node_modules/@mui/material/index";

const CreateBandobast = () => {
  return (
    <MainCard title="Create Bandobast">
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bandobast Location"
                  fullWidth
                  helperText="Please Enter Bandobast Location"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Bandobast Radius"
                  defaultValue="10m"
                  helperText="Please select Bandobast Radius"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem key={1} value="5m">
                    5m
                  </MenuItem>
                  <MenuItem key={2} value="10m">
                    10m
                  </MenuItem>
                  <MenuItem key={3} value="15m">
                    15m
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Bandobast Details"
                  fullWidth
                  multiline
                  rows={4}
                  helperText="Please Enter Bandobast Details"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Priority"
                  defaultValue="Default"
                  helperText="Please select Priority"
                  margin="normal"
                  fullWidth
                >
                  <MenuItem key={1} value="Default">
                    Default
                  </MenuItem>
                  <MenuItem key={2} value="High">
                    High
                  </MenuItem>
                  <MenuItem key={3} value="Low">
                    Low
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Permission"
                  defaultValue="10m"
                  helperText="Please select Permission"
                  margin="normal"
                  fullWidth
                >
                  <MenuItem key={1} value="5m">
                    5m
                  </MenuItem>
                  <MenuItem key={2} value="10m">
                    10m
                  </MenuItem>
                  <MenuItem key={3} value="15m">
                    15m
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Personnel"
                  defaultValue="10m"
                  helperText="Please Personnel"
                  margin="normal"
                  fullWidth
                >
                  <MenuItem key={1} value="5m">
                    5m
                  </MenuItem>
                  <MenuItem key={2} value="10m">
                    10m
                  </MenuItem>
                  <MenuItem key={3} value="15m">
                    15m
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={8}></Grid>
              <Grid item xs={12} sm={4}><Button fullWidth variant="contained" color="primary">Create Bandobast</Button></Grid>
            </Grid>
            <br />
          </form>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default CreateBandobast;
