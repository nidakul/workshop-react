import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'

const MUIAccordion = () => {
    const [expanded, setExpanded] = useState('' | false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange("panel1")}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                >
                    <Typography>Bölüm 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange("panel2")}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                >
                    Bölüm 2
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange("panel3")}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                >
                    Bölüm 3
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion 