//@ts-check
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

function SongDetail(props) {
  const { title } = props.song;
  return <h3>{title}</h3>;
}

export default createFragmentContainer(SongDetail, {
  song: graphql`
    fragment SongDetail_song on SongType {
      id
      title
    }
  `,
});
