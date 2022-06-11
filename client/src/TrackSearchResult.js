import React from "react";

export default function TrackSearchResult({ track, selectTrack }) {
  function handlePlay() {
    selectTrack(track);
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{
        cursor: "pointer",
      }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt=""
        style={{ height: "64px", width: "64px" }}
      />
      <div className="ml-3">{track.title}</div>
      <div className="ml-3 text-muted">{track.artist}</div>
    </div>
  );
}
