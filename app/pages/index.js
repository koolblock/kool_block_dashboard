import { makeStyles } from "@material-ui/core/styles";
import Block from "../components/Block";
import { Box } from "@material-ui/core";
import Introduction from "../sections/Introduction";
import IntroductionTwo from "../sections/IntroductionTwo";
import PostsList from "../sections/PostsList";
import FAQs from "../sections/FAQs";
import Information from "../sections/Information";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function HomePage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Block background="green" backgroundBlack={true}>
        <Introduction />
      </Block>
      <Block background="black">
        <Information />
      </Block>
      <Block background="green">
        <IntroductionTwo />
      </Block>
      <Block background="black">
        <FAQs />
      </Block>
      <Block background="green">
        <PostsList />
      </Block>
    </Box>
  );
}

export default HomePage;
