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

export default function Index() {
  const router = useRouter();
  const id = router?.query?.id;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  return <div>I EXIST</div>;
}
