import React from 'react';

import { Box, Card, Grid, Stack, Typography } from '@mui/material';

const ColorBox = ({ bgcolor, title, data, dark, main }) => {
    return (
        <>
            <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2.5,
                        bgcolor,
                        color: dark ? 'grey.800' : '#ffffff',
                        border: main ? '1px dashed' : '1px solid transparent'
                    }}
                >
                    {title && (
                        <Grid container justifyContent="space-around" alignItems="center">
                            <Grid item>
                                {data && (
                                    <Stack spacing={0.75} alignItems="center">
                                        <Typography variant="subtitle2">{data.label}</Typography>
                                        <Typography variant="subtitle1">{data.color}</Typography>
                                    </Stack>
                                )}
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    {title}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Card>
        </>
    );
};

export default ColorBox;
