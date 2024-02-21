import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Tutor = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 46, height: 46 }}
            />

            <Typography variant="h6" gutterBottom margin="0px" ml="13px">
                Shuaib Ahamed
            </Typography>
        </Box>
    );
};

export default Tutor;
