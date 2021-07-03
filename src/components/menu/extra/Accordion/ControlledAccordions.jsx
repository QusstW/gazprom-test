import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(state) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component={"span"} className={classes.heading}>
            Аналитика
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {state.analyticsList.map((e, i) => (
              <ListItem button key={i} onClick={() => state.getTableData(e)}>
                {e}
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component={"span"} className={classes.heading}>
            Каталоги
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <List>
              {[
                "Каталог 1",
                "Каталог 2",
                "Каталог 3",
                "Каталог 4",
                "Каталог 5",
                "Каталог 6",
              ].map((e, i) => (
                <ListItem button key={i}>
                  {e}
                </ListItem>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
