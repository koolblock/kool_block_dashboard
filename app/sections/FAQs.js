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
              <ListItemText primary={answer} />
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
          question="May I get a quote on a disinfection process , for Workforce Reintegration at my workspace?"
          answers={[
            "Yes a Koolblock representative will be happy to give you a free risk assessment and can quote you an estimate of what you need to do to make your workspace pathogenically safe and attractive to workers. Contact us at info@koolblock.com  or 1 604 889 2662 .",
          ]}
        />
        <FAQ
          question="Why worry about disinfecting in a post COVID world?"
          answers={[
            "After the recent world pandemic, pathogenic safety is now part of our everyday lives and workspaces.  It is something new that we need to add to our workplace cleaning and safety routine.",
            "Cleaning removes dirt and germs, disinfecting kills pathogens (bacteria and viruses).  The Path-Safe process allows you to use naturopathic safe disinfection materials, and allows you to “see” how effective you are through testing. ",
            "Inquire today at info@koolblock.com for more details. ",
          ]}
        />
        <FAQ
          question="Are naturopathic disinfectants effective versus strong chemical mixtures?"
          answers={[
            "Yes, you can make a natural disinfectant, 50X’s more effective than bleach, from just distilled water, kosher salt and electricity.  Koolblock can help you source or make your own naturopathic disinfectant.",
            "This can be for an individual location, or it can be manufactured and supplied on an enterprise basis.",
            " Inquire at info@koolblock.com for more detail. ",
          ]}
        />
        <FAQ
          question="What is the secret to the Path-Safe disinfection process?"
          answers={[
            "The secret involves using the Path-Safe pathogenic safety standard procedures plus ongoing testing for pathogens, and disinfection using safe procedures and materials. ",
            "Ask for a free risk assessment today, contact info@koolblock.com. ",
          ]}
        />
        <FAQ
          question="How does Path-Safe relate to our Occupational Health and Safety Plan?"
          answers={[
            "Pathogenic safety is a novel and integral part of your overall OHS approach.  Contact us today and advise us which enterprise EHS (environment health and safety) software your enterprise uses.",
            "Koolblock will show you how to integrate Path-Safe into your EHS software and occupational health and safety environment.",
          ]}
        />
        <FAQ
          question="What Can I do about staff that are reluctant to return to our workspace?"
          answers={[
            "The quick answer is to give them easy to understand data about bacteria and viruses in the workspace air and surfaces. A Koolblock representative will be pleased to answer questions about pathogenic health and safety and how risk is tracked and reduced overtime.",
            "Find out more at info@koolblock.com. ",
          ]}
        />
        <FAQ
          question="What is “Pathogenic Sustainability”?"
          answers={[
            "It is the use of an auditable best practice tracking standard, Path-Safe, combined with bacteria and virus testing,  to measure a known level of safety, and to be ready should an outbreak occur. ",
          ]}
        />
        <FAQ
          question="What Does the Path–Safe Standard cover?"
          answers={[
            "- Testing for pathogens",
            "- Use of the Standard, facilities and transportation and planning for emergencies;",
            "- Air quality management, airflow and HVAC, air particle capture and disinfection;",
            "- Sanitizing and disinfecting surfaces, using naturopathic solutions;",
            "- Integration into EHS plans and software (environment health and safety);",
            "- Education and Communication with staff and customers;",
            "- Automation and digitization of processes into Path-Safe EHS software.",
          ]}
        />
        <FAQ
          question="How can I get more information?"
          answers={[
            "You guessed it, contact us at info@koolblock.com and ask us what you need to know.",
          ]}
        />
      </List>
    </Box>
  );
}
