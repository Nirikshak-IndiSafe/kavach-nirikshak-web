import { useParams } from "react-router-dom";
import React from "react";
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

  let objectDate = new Date("2023-04-12T10:29:05.002Z");

  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();

  let format2 = `${day}/${month + 1}/${year}`;

  return (
    <MainCard>
      <h3>{"Utsav Khatu"}</h3>
      <p>
        <b>DOB:</b> {format2}
      </p>
      <p>
        <b>Station:</b> Naupada, Thane
      </p>
      <p>
        <b>Batch Number:</b> 4
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
