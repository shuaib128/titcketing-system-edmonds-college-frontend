import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(student, subject, session_time) {
    return { student, subject, session_time };
}

const rows = [
    createData("Sam", "Math", 6.0),
    createData("Cai", "Chemistry", 9.0),
    createData("Abigail", "Bio", 16.0),
    createData("Cupcake", "Computer Science", 3),
    createData("Some Student", "Physics", 16.0),
];

export default function Queues({ Status }) {
    // Initialize with 10 minutes and 0 seconds
    const [timeLeft, setTimeLeft] = React.useState({
        minutes: 10,
        seconds: 0,
    });

    React.useEffect(() => {
        // Update every second
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let minutes = prevTime.minutes;
                let seconds = prevTime.seconds - 1;

                if (seconds < 0) {
                    minutes = minutes - 1;
                    seconds = 59;
                }

                // When countdown reaches 1 minute and 0 seconds, stop
                if (minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return { minutes: 0, seconds: 0 };
                }

                return { minutes, seconds };
            });
        }, 1000); // 1000 milliseconds = 1 second

        // Cleanup function to clear interval if the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Format timeLeft to include leading zeros
    const formatTimeLeft = (time) => {
        return `${time.minutes}:${time.seconds
            .toString()
            .padStart(2, "0")} minute(s)`;
    };

    return (
        <Box className="Queues">
            {Status === "student" ? (
                <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="left"
                    mb="15px"
                >
                    Estimated wait time:{" "}
                    {timeLeft.minutes === 0 && timeLeft.seconds === 0
                        ? "Countdown finished"
                        : formatTimeLeft(timeLeft)}
                </Typography>
            ) : (
                <Box></Box>
            )}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Student</StyledTableCell>
                            <StyledTableCell align="left">
                                Subject
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                Session Time
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell
                                    sx={{
                                        cursor:
                                            Status === "tutor"
                                                ? "pointer"
                                                : "auto",
                                    }}
                                    component="th"
                                    scope="row"
                                >
                                    {row.student}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        cursor:
                                            Status === "tutor"
                                                ? "pointer"
                                                : "auto",
                                    }}
                                    align="left"
                                >
                                    {row.subject}
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        cursor:
                                            Status === "tutor"
                                                ? "pointer"
                                                : "auto",
                                    }}
                                    align="left"
                                >
                                    {row.session_time} minutes
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
