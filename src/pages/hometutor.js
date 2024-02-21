import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Queues from "../components/HomeComponents/Queues/Queues";

const Hometutor = ({ Status }) => {
    return (
        <Box className="Home-page">
            <Container
                maxWidth="xl"
                sx={{
                    display: ["block", "block", "flex", "flex"],
                    justifyContent: "space-between",
                    gap: "25px",
                    mt: "25px",
                }}
            >
                <Box
                    sx={{
                        width: ["100%", "100%", "50%", "50%"],
                        mt:
                            Status === "student"
                                ? ["60px", "60px", "0px", "0px"]
                                : "0px",
                        mb: "60px",
                    }}
                    className="queues-box"
                >
                    <Queues Status={Status} />
                </Box>
            </Container>
        </Box>
    );
};

export default Hometutor;
