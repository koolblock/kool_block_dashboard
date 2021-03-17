import React from "react";
import {
  makeStyles,
  List,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  ListItem,
  Box,
} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export const ALL_BASIC_POST_INFO = gql`
  query {
    allPosts(where: { status: PUBLISHED }) {
      id
      title
      status
      subtitle
      author {
        name
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },
  inline: {
    display: "inline",
    marginRight: 8,
  },
  link: {
    cursor: "pointer",
  },
}));

export default function PostsList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(ALL_BASIC_POST_INFO);
  const list_posts = data?.allPosts ?? [];
  return (
    <Box className={classes.container}>
      <Box
        fontWeight="fontWeightBold"
        textAlign="center"
        fontSize="h3.fontSize"
        mt={4}
        mb={2}
      >
        Check our latest posts
      </Box>
      <List component="nav" aria-label="Main published posts">
        {list_posts.map((post) => (
          <React.Fragment key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <ListItem alignItems="flex-start" className={classes.link}>
                <ListItemAvatar>
                  <Avatar>{post.author.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={post.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {post.author.name}
                      </Typography>
                      {post.subtitle}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
