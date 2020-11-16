import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./likeButtonHeart.scss";

type Props = {
  onLikeClick: () => void,
  liked: boolean,
};

const baseClass = "c-like-button-heart";
const LikeButtonHeart = ({ onLikeClick, liked }: Props) => {
  const heartIconSolid = <FontAwesomeIcon icon={faHeartSolid} />;
  const heartIconOutline = <FontAwesomeIcon icon={faHeart} />;

  const heart = liked ? heartIconSolid : heartIconOutline;
  return (
    <div onClick={onLikeClick} className={baseClass}>
      {heart}
    </div>
  );
};

export default LikeButtonHeart;

LikeButtonHeart.defaultProps = {
  liked: false,
};

// Component Notes:
// onClick I want the heart to be filled in toggle off and on, use fontawesome?
// onClick I want to set "Liked" to true and then when clicked again turn to false? - we can toggle this in the story
// https://stackoverflow.com/questions/56559772/where-do-i-find-the-object-names-of-icons-in-the-fontawesome-free-packages
