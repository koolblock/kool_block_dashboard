import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Block from "../components/Block";
import { Box } from "@material-ui/core";
import Introduction from "../sections/Introduction";
import IntroductionTwo from "../sections/IntroductionTwo";
import PostsList from "../sections/PostsList";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function HomePage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Block background="green">
        <Introduction />
      </Block>
      <Block background="black">
        <IntroductionTwo />
      </Block>
      <Block background="green">
        <PostsList />
      </Block>
    </Box>
  );
}

export default HomePage;
