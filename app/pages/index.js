<<<<<<< HEAD
import Header from "../components/Header";

function HomePage() {
  return (
    <Header
      title="KoolBlock"
      sections={[{ title: "Our Work", url: "/about_us" }]}
    />
=======
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
>>>>>>> 4ae34aadec5915cff35bad7871d4023b3c1004ac
  );
}

export default HomePage;
