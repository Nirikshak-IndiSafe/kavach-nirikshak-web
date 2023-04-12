import MainCard from "components/MainCard";
import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "../../../node_modules/@mui/material/index";
import MapComponent from "components/MapComponent";
import { useEffect, useState } from "react";

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/events/active-events"
        );
        const data = await res.json();
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <MainCard title="View Bandobast">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2}>
          <h3>Active Events</h3>
          <Divider></Divider>
          {events.map((event) => {
            return (
              <List>
                <ListItemText primary={event.name} secondary={event.start} />
              </List>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={10}>
          <MapComponent events={events} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DashboardDefault;
