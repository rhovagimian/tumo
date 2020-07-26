//@ts-check
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { useParams } from "react-router-dom";
import environment from "../relay/environment";

const query = graphql`
  query SongDetail_Query($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

function renderQuery({ error, props }) {
  if (!error && !props) {
    return <div>Loading...</div>;
  }
  const { song } = props;
  return (
    <div>
      <h3>{song.title}</h3>
    </div>
  );
}

function SongDetail() {
  const { id } = useParams();
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ id }}
      render={renderQuery}
    />
  );
}

export default SongDetail;
