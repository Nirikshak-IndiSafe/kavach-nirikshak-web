import MainCard from "components/MainCard";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TextField,
  InputAdornment,
  Button,
  Grid,
  MenuItem,
} from "../../../node_modules/@mui/material/index";
import SearchIcon from "@mui/icons-material/Search";

const AllPersonnel = () => {
  const [personnel, setPersonnel] = useState([]);
  const [stations, setStations] = useState([]);
  const [filterStation, setFilterStation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/personnel");
        const data = await res.json();
        setPersonnel(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/stations/all/stations"
        );
        const data = await res.json();
        setStations(data.stations);
        console.log(data.stations);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const personnelList = personnel.filter(
    (p) =>
      p.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.batch?.toString().includes(searchTerm.toLowerCase()) ||
      p.station === searchTerm
  );

  const switchState = () => {
    setFilterStation(!filterStation)
    setSearchTerm("")
  }

  const Row = ({ data, num }) => {
    const stationName = stations.filter((x) => x?._id === data?.station)[0]
      ?.name;

    return (
      <TableRow
        key={data._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {num + 1}
        </TableCell>
        <TableCell align="center">{data?.batch}</TableCell>
        <TableCell align="center">
          {data?.firstName + " " + data?.lastName}
        </TableCell>
        <TableCell align="center">{stationName}</TableCell>
      </TableRow>
    );
  };

  return (
    <MainCard title="All Personnel">
      <Grid container spacing={2}>
        <Grid item>
          {!filterStation ? (
            <TextField
              label="Search"
              helperText="Search by name or badge number"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          ) : (
            <TextField
              select
              label="Select"
              helperText="Please select station"
              onChange={(e) => setSearchTerm(e.target.value)}
            >
              {stations.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Grid>
        <Grid item>
          <Button
            onClick={switchState}
            variant="contained"
          >
            {!filterStation
              ? "Search By Station Instead"
              : "Search by Name or Badge Number"}
          </Button>
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S No.</TableCell>
              <TableCell align="center">Badge Num</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Station</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personnelList.map((row, num) => (
              <Row data={row} num={num} key={num}></Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default AllPersonnel;
