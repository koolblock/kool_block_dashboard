import { Box, Grid } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    margin: 15,
  },
  image: {
    borderRadius: 2,
  },
  boxList: {
    maxWidth: "95vw",
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.green,
    marginBottom: 15,
  },
}));

const FAQ = ({ question, answers = [] }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className={classes.boxList} id="faq">
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PlayArrowIcon />
        </ListItemIcon>
        <ListItemText primary={question} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {answers.map((answer, index) => (
            <ListItem key={index}>
              <ListItemText primary={answer} key={answer} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default function FAQs() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        className={classes.title}
      >
        Frequent Asked Questions.
      </Typography>
      <List>
        <FAQ
          question="Why worry about Pathogens in a Post COVID World?"
          answers={[
            "Pathogenic safety is now with us for good.   With a significant portion of our population , and the works population unvaccinated,   variants of COVID and new viruses will constantly be with us.",
          ]}
        />
        <FAQ
          question="Water and Salt and Electricity Can help?"
          answers={[
            "The simplest elements in nature can be combined to make the most effective pathogenic disinfectant.",
            "One that is 60X’s more effective than bleach.  And one that is naturopathic and safe.  HOCL also known as oxidized water is the most effective disinfectant available, and it is safe for use with food and health applications, such as dental instrument cleaning.",
          ]}
        />
        <FAQ
          question="What is the Best Disinfectant Solution?"
          answers={[
            "Everyone is aware of the problems associated with COVID 19 and spread of the virus through HVAC or ventilation systems on large cruise ships.",
            "Today there are solutions available that disinfect air as it passes through ventilation systems.  First there are solutions that involve the use of disinfecting wavelengths of ultra-violet lights.  And second there is the use of  ",
          ]}
        />
        <FAQ
          question="Can we create Health Safe Facilities ?:  HVAC and Pathogen Safety"
          answers={[
            "Koolblock staff can work with your OSHA team to integrate pathogenic safety into your Occupational Health and Safety plans, Environment Plans and Sustainability plans.",
          ]}
        />
        <FAQ
          question="Automation and Robotics Have a role in in Health Safety?"
          answers={[
            "There are efficient automated options that allow for broad and effective coverage of industrial facilities.",
          ]}
        />
        <FAQ
          question="A Path-Safe Sustainability Standard"
          answers={[
            "Koolblock researchers have been able to test pathogenic safety procedures in children’s foundations, and have now developed a beta standard for institutions to apply, improve and be tested against.",
            "Testing against a known and trusted standard is the only way to manage and improve pathogenic safety.",
          ]}
        />
      </List>
    </Box>
  );
}
