//@ts-check
import React, { useCallback } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { useParams, Link } from "react-router-dom";
import environment from "../relay/environment";
import LyricCreate from "./LyricCreate";
import SongDetail from "./SongDetail";

const query = graphql`
  query SongDetailPage_Query($id: ID!) {
    song(id: $id) {
      ...SongDetail_song
    }
  }
`;

function SongDetailPage() {
  const { id } = useParams();
  const renderQuery = useCallback(
    ({ error, props }) => {
      if (!error && !props) {
        return <div>Loading...</div>;
      }
      return (
        <div>
          <Link to="/">Back</Link>
          <SongDetail song={props.song} />
          <LyricCreate songId={id} />
        </div>
      );
    },
    [id]
  );
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ id }}
      render={renderQuery}
    />
  );
}

export default SongDetailPage;
