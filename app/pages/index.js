import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary,
  },
}));

function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Welcome to Next.js!
      <Button variant="contained">Default</Button>
    </div>
  );
}

export default HomePage;
