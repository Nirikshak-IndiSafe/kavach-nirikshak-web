import DetailedMapComponent from "components/DetailedMapComponent";
import MainCard from "components/MainCard";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "../../../node_modules/@mui/material/index";

const DetailedBandobast = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <MainCard title={`Details of Bandobast ${id}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <DetailedMapComponent />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              padding: "0 10px",
              border: "1px solid lightgrey",
              borderRadius: "10px",
            }}
          >
            <h3>Descripton</h3>
            <Divider />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </Box>
          <br />
          <Box
            sx={{
              padding: "0 10px",
              paddingBottom: "10px",
              border: "1px solid lightgrey",
              borderRadius: "10px",
            }}
          >
            <h3>Notification</h3>
            <TextField
              variant="filled"
              fullWidth
              multiline
              rows={3}
              label="Enter Notification"
                helperText="Broadcast message to all personnel"
              gutterBottom
            ></TextField>
            <br />
            <Button fullWidth variant="contained">
              Notify!
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            sx={{
              border: "1px solid lightgrey",
              borderRadius: "10px",
              height: "70vh",
              padding: "0 10px",
              overflowY: "scroll",
            }}
          >
            <h3>All Personnels</h3>
            <Divider />

            <List dense>
              {[1, 2, 3, 4, 5].map((x) => {
                return (
                  <ListItem key={x}>
                    <ListItemText
                      primary={`Personnel ${x}`}
                      secondary="Lorem Ipsum"
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DetailedBandobast;
