import MainCard from "components/MainCard";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "../../../node_modules/@mui/material/index";
import MapComponent from "components/MapComponent";

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <MainCard title="View Bandobast">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2}>
          <h3>Active Bandobasts</h3>
          <Divider></Divider>
          <List>
            <ListItemText primary="Bandobast 1" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 2" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 3" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 4" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 5" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 5" secondary="Lorem Ipsum" />
          </List>
          <List>
            <ListItemText primary="Bandobast 6" secondary="Lorem Ipsum" />
          </List>
        </Grid>
        <Grid item xs={12} sm={10}>
          <MapComponent />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DashboardDefault;
