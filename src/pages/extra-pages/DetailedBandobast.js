import DetailedMapComponent from 'components/DetailedMapComponent';
import MainCard from 'components/MainCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    TextField,
} from '../../../node_modules/@mui/material/index';

const DetailedBandobast = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/events/${id}`
                );
                const { event } = await res.json();
                setDetails(event);
                console.log(details);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return details === null ? (
        <></>
    ) : (
        <MainCard title={`Details - ${details.name}`}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <DetailedMapComponent details={details} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            padding: '0 10px',
                            border: '1px solid lightgrey',
                            borderRadius: '10px',
                        }}
                    >
                        <h3>Descripton</h3>
                        <Divider />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                        </p>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            padding: '0 10px',
                            paddingBottom: '10px',
                            border: '1px solid lightgrey',
                            borderRadius: '10px',
                        }}
                    >
                        <h3>Notification</h3>
                        <TextField
                            variant='filled'
                            fullWidth
                            multiline
                            rows={3}
                            label='Enter Notification'
                            helperText='Broadcast message to all personnel'
                            gutterBottom
                        ></TextField>
                        <br />
                        <Button fullWidth variant='contained'>
                            Notify!
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box
                        sx={{
                            border: '1px solid lightgrey',
                            borderRadius: '10px',
                            height: '70vh',
                            padding: '0 10px',
                            overflowY: 'scroll',
                        }}
                    >
                        <h3>All Personnels</h3>
                        <Divider />

                        <List dense>
                            {details.personnels.map((personnel, idx) => {
                                return (
                                    <ListItem key={idx}>
                                        <ListItemText
                                            primary={`${personnel.firstName} ${personnel.lastName}`}
                                            secondary={`Batch: ${personnel.batch}ID: ${personnel.id_number}`}
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
