import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainCard from "components/MainCard";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
} from "../../../node_modules/@mui/material/index";

// name
// dob
// station
// batch number
// history

const PersonnelProfile = ({ details }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`http://localhost:5000/api/personnel/${id}`);
        const d = await res.json();

        res = await fetch(`http://localhost:5000/api/stations/${d.station}`);
        const station = await res.json();
        d.station = station.data.name

        setData(d);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getDOB = () => {
    let objectDate = new Date(data.dob);

    let day = objectDate.getDate();
  
    let month = objectDate.getMonth();
  
    let year = objectDate.getFullYear();
  
    return `${day}/${month + 1}/${year}`;
  }

  return (
    <MainCard>
      <h3>{data?.firstName}{' '}{data?.lastName}</h3>
      <p>
        <b>DOB:</b> {getDOB()}
      </p>
      <p>
        <b>Station:</b> {data.station}
      </p>
      <p>
        <b>Batch Number:</b> {data.batch}
      </p>
      <br />
      <h3>History</h3>
      <Divider />
      <List>
        {[1, 2, 3, 4, 5].map((x) => {
          return (
            <>
            <ListItem>
              <ListItemText
                secondary="12/04/2023"
                primary="Bandobast for Mamta Banerjee"
              ></ListItemText>
            </ListItem>
            <Divider />
            </>
          );
        })}
      </List>
    </MainCard>
  );
};

export default PersonnelProfile;
