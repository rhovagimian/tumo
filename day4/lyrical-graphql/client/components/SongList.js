//@ts-check
import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import { Link } from "react-router-dom";
import environment from "../relay/environment";

const query = graphql`
  query SongList_Query {
    songs {
      id
      title
    }
  }
`;

const renderQuery = ({ error, props }) => {
  if (!error && !props) {
    return <div>Loading...</div>;
  }
  const titles = props.songs.map((song) => (
    <li key={song.id} className="collection-item">
      {song.title}
    </li>
  ));
  return (
    <div>
      <ul className="collection">{titles}</ul>
      <Link to="songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

function SongList() {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={renderQuery}
    />
  );
}

export default SongList;
