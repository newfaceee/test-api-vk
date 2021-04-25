import React from "react";

import Video from "../Video/Video";

const VideoList = ({ videos, onClick }) => {

  return (
    <div className="video-list">
      {videos?.map((video) => {
        const { id, owner_id: ownerId, access_key: accessKey } = video;
        const previewSrc = video?.image[video.image.length - 1].url;

        return (
          <Video
            onClick={onClick}
            key={id}
            id={id}
            ownerId={ownerId}
            accessKey={accessKey}
            previewSrc={previewSrc}
            player={video?.player}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
