import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

type Props = {
  backgroundColor: string
};

const baseClass = "c-like-button-heart";

const LikeButtonHeart = ({ backgroundColor }: Props) => {
  const [liked, setLike] = useState(false);

  const onLikeClick = (event) => {
    event.preventDefault();
    setLike(!liked);
  };
  return (
    <div onClick={onLikeClick} className={baseClass}>
      {liked ? (
        <FontAwesomeIcon color={backgroundColor} icon={faHeartSolid} />
      ) : (
        <FontAwesomeIcon icon={faHeart} />
      )}
    </div>
  );
};

export default LikeButtonHeart;

// Component Notes:
// onClick I want the heart to be filled in toggle off and on, use fontawesome?
// onClick I want to set "Liked" to true and then when clicked again turn to false? - we can toggle this in the story
// https://stackoverflow.com/questions/56559772/where-do-i-find-the-object-names-of-icons-in-the-fontawesome-free-packages
// now hooked up using useState not with props
