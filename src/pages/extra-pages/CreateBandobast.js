import MainCard from 'components/MainCard';
import React, { useState } from 'react';
import {
    Button,
    Grid,
    TextField,
    Box,
} from '../../../node_modules/@mui/material/index';

import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const CreateBandobast = () => {
    const [details, setDetails] = useState({
        name: '',
        address: '',
        start: '',
        end: '',
        radius: 0,
    });

    const [date, onDateChange] = useState([new Date(), new Date()]);

    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const reqBody = {
            name: details.name,
            start: date[0],
            end: date[1],
            latitude: 20.208088799492007,
            longitude: 73.09654622090271,
            radius: details.radius
        }

        console.log(reqBody)
        try {
            const res = await fetch(
              "http://localhost:5000/api/events/create",
              {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reqBody)
              }
            );
            console.log(res);
          } catch (error) {
            console.log(error);
          }
    };

    return (
        <MainCard title='Create Bandobast'>
            <div style={{ height: '70vh' }}>
                <Grid container>
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label='Event name'
                                        fullWidth
                                        helperText='Enter event name'
                                        margin='normal'
                                        name='name'
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label='Bandobast Radius'
                                        defaultValue='10'
                                        helperText='Please select Bandobast Radius (in meters)'
                                        fullWidth
                                        margin='normal'
                                        name='radius'
                                        onChange={onChange}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        label='Bandobast Location details'
                                        fullWidth
                                        multiline
                                        rows={2}
                                        helperText='Please Enter Bandobast Address'
                                        margin='normal'
                                        name='address'
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <DateTimeRangePicker
                                        onChange={onDateChange}
                                        value={date}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}></Grid>
                                <Grid item xs={12} sm={4}>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        color='primary'
                                        onClick={onSubmit}
                                    >
                                        Create Event
                                    </Button>
                                </Grid>
                            </Grid>
                            <br />
                        </form>
                    </Grid>
                </Grid>
            </div>
        </MainCard>
    );
};

export default CreateBandobast;
