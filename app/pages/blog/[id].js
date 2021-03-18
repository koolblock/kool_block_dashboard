import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import Link from "next/link";

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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { loading, error, data } = useQuery(GET_ALL_POSTS_ID);
  const paths = data.allPosts.map((post) => ({
    params: { id: post.id },
  }));
  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }

export default function Index() {
  // const router = useRouter();
  // const id= router?.query?.id;
  // const { loading, error, data } = useQuery(GET_POST, {
  //   variables: { id },
  // });
  // console.log(data);

  return <div>I EXIST</div>;
}
