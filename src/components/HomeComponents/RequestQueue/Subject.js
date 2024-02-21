import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Tutor from "./Tutor";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Subject({ Subject }) {
    const [selectedTutor, setSelectedTutor] = React.useState("");

    const handleChange = (event) => {
        setSelectedTutor(event.target.value);
    };

    //Send queue request to the backend and store in to the DB
    const addToQueueClickHandler = () => {
        console.log(selectedTutor);
        setSelectedTutor("")
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {Subject}
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="tutor"
                        name="tutor1"
                        value={selectedTutor}
                        onChange={handleChange}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        <FormControlLabel
                            value="tutor1"
                            control={<Radio />}
                            label={<Tutor />}
                        />
                        <FormControlLabel
                            value="tutor2"
                            control={<Radio />}
                            label={<Tutor />}
                        />
                        <FormControlLabel
                            value="tutor3"
                            control={<Radio />}
                            label={<Tutor />}
                        />
                        <FormControlLabel
                            value="tutor4"
                            control={<Radio />}
                            label={<Tutor />}
                        />
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>

            <AccordionActions>
                <Button
                    onClick={addToQueueClickHandler}
                    disabled={selectedTutor === ""}
                >
                    Add to queue
                </Button>
            </AccordionActions>
        </Accordion>
    );
}
