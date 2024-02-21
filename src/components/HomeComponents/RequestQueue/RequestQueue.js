import React from "react";
import { Box } from "@mui/material";
import Subject from "./Subject";
import Typography from "@mui/material/Typography";

const RequestQueue = () => {
    return (
        <Box className="request-queue" sx={{ textAlign: "left" }}>
            <Typography variant="h5" gutterBottom textAlign="left" mb="15px">
                Select a tutor to get in the queue
            </Typography>

            <Subject
                Subject="Math"
            />

            <Subject
                Subject="Computer Science"
            />

            <Subject
                Subject="Physics"
            />

            <Subject
                Subject="Chemistry"
            />
        </Box>
    );
};

export default RequestQueue;
