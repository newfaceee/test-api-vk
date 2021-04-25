import React from "react";

import "./Video.scss";

const Video = ({ previewSrc, id, ownerId, accessKey, onClick, player }) => {
  return (
    <div
      onClick={onClick}
      data-id={id}
      data-owner-id={ownerId}
      data-access-key={accessKey}
      className="video"
    >
      {player && <iframe width="100%" height="400px" src={player}></iframe>}
      {!player && (
        <>
          <img className="video__preview" src={previewSrc} />
          <div className="video__arrow-right"></div>
        </>
      )}
    </div>
  );
};

export default Video;
