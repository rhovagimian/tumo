//@ts-check
import React, { useCallback } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { useParams, Link } from "react-router-dom";
import environment from "../relay/environment";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const query = graphql`
  query SongDetail_Query($id: ID!) {
    song(id: $id) {
      id
      title
      ...LyricList_song
    }
  }
`;

const renderQuery = ({ error, props }) => {
  if (!error && !props) {
    return <div>Loading...</div>;
  }
  const { song } = props;
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList song={song} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

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
