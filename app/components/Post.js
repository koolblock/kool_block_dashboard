import React from "react";
import { makeStyles, Card, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    paddingTop: 30,
    minHeight: "70vh",
  },
  card: {
    maxWidth: 800,
    width: "100%",
    marginBottom: 30,
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.green,
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <Box>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            className={classes.title}
          >
            {post.title}
          </Typography>
        </Box>
        <Box>
          <Typography component="h6" variant="h6" align="center">
            {`Author: ${post.author.name}`}
          </Typography>
        </Box>

        <Box mt={3} dangerouslySetInnerHTML={{ __html: post.body }}></Box>
      </Card>
    </Box>
  );
}
