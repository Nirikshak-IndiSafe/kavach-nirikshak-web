import Pubnub from 'pubnub';
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
    ListItemButton,
    ListItemText,
    TextField,
} from '../../../node_modules/@mui/material/index';

const pubnub = new Pubnub({
    publishKey: 'pub-c-fc2bfb00-7232-4340-82b1-1efc6a1f7d41',
    subscribeKey: 'sub-c-9d7dc568-e522-4355-b3d2-072d63d4c442',
    userId: 'myUniqueUserId',
});

const DetailedBandobast = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const showMessage = (msg) => {
            setMessages((messages) => {
                let newMessages = messages;
                newMessages = newMessages.filter(
                    (message) => message[0] != msg['from']
                );
                newMessages.push([
                    msg['from'],
                    msg['message']['latitude'],
                    msg['message']['longitude'],
                ]);

                // newMessages[msg['from']] = {
                //     lat: msg['message']['latitude'],
                //     lng: msg['message']['longitude'],
                // };
                // console.log(newMessages);
                return newMessages;
            });
        };

        // add listener
        const listener = {
            status: (statusEvent) => {
                if (statusEvent.category === 'PNConnectedCategory') {
                    console.log('Connected');
                }
            },
            message: (messageEvent) => {
                showMessage(messageEvent.message.description);
            },
            presence: (presenceEvent) => {
                // handle presence
            },
        };
        pubnub.addListener(listener);
        // cleanup listener
        return () => {
            pubnub.removeListener(listener);
        };
    }, [pubnub]);

    // publish message
    const publishMessage = async (message) => {
        // With the right payload, you can publish a message, add a reaction to a message,
        // send a push notification, or send a small payload called a signal.
        const publishPayload = {
            channel: id,
            message: {
                title: 'greeting',
                description: {
                    from: 'Admin',
                    message: 'Hello Admin',
                },
            },
        };
        await pubnub.publish(publishPayload);
    };

    useEffect(() => {
        // subscribe to a channel
        // console.log(event);
        // if (event && event._id) {
        // console.log(event._id);
        // console.log(personnel._id);
        pubnub.subscribe({
            channels: [id],
        });
        // cleanup subscription
        return () => {
            pubnub.unsubscribe({
                channels: [id],
            });
        };
        // }
    }, [pubnub, id]);

    useEffect(() => {
        console.log(messages);
    }, [messages]);

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
                    <DetailedMapComponent
                        details={details}
                        positionsArray={messages}
                    />
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
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={() => {
                                publishMessage('');
                            }}
                        >
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
                                    <ListItemButton
                                        key={idx}
                                        component='a'
                                        href={`/app/personnel-profile/${personnel._id}`}
                                    >
                                        <ListItemText
                                            primary={`${personnel.firstName} ${personnel.lastName}`}
                                            secondary={`Batch: ${personnel.batch}ID: ${personnel.id_number}`}
                                        />
                                    </ListItemButton>
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
