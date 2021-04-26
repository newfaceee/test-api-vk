import React from "react";
import { useDispatch } from "react-redux";

import ChipList from "../ChipList/ChipList";
import PhotoList from "../PhotoList/PhotoList";
import VideoList from "../VideoList/VideoList";

import {
  convertStoMs,
  getFormattedDate,
  groupAttachmentsByType,
} from "../../utils";
import { getVideo } from '../../store/actions/postsActions';

import "./Post.scss";

const Post = ({ date, text, attachments, postId, likes, reposts }) => {
  const dispatch = useDispatch();
  const dateInMs = convertStoMs(date);
  const formattedDate = getFormattedDate(dateInMs);
  const likesCount = likes?.count ?? "Неизвестно";
  const repostsCount = reposts?.count ?? "Неизвестно";
  const chips = attachments?.map(({ type }) => type) || [];
  const groupedAttachments = groupAttachmentsByType(attachments) || {};

  const handleVideoClick = (event) => {
    const { id, ownerId, accessKey } = event.currentTarget.dataset;
    dispatch(getVideo(postId, id, ownerId, accessKey));
  };

  return (
    <div className="post">
      <div className="post__header">
        <span className="post__info post__date">
          Опубликовано: {formattedDate}
        </span>
        <span className="post__info post__likes">Likes: {likesCount}</span>
        <span className="post_info post__reposts">Reposts: {repostsCount}</span>
      </div>

      <ChipList chips={chips} />
      {groupedAttachments.photo && (
        <PhotoList photos={groupedAttachments.photo} />
      )}
      {groupedAttachments.video && (
        <VideoList
          onClick={handleVideoClick}
          videos={groupedAttachments.video}
        />
      )}
      <div className="post__content">
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
};

export default Post;
