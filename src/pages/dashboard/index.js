import MainCard from "components/MainCard";
import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
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
            {[1, 2, 3, 4, 5].map((x) => {
              return (
                <ListItemButton component="a" key={x} href={`/app/view-bandobast/${x}`}>
                  <ListItemText primary={`Bandobast ${x}`} secondary="Lorem Ipsum" />
                </ListItemButton>
              );
            })}
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
