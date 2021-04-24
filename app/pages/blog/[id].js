import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Post from "../../components/Post";

export const GET_POST = gql`
  query Post($id: ID!) {
    Post(where: { id: $id }) {
      title
      author {
        name
      }
      status
      body
    }
  }
`;

export const GET_ALL_POSTS_ID = gql`
  query {
    allPosts {
      id
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const id = router?.query?.id;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (!data) return null;

  return <Post post={data.Post} />;
}
