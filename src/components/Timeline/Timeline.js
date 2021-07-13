// @flow
import React from "react";
import bem from "../../bem";

import "./timeline.scss";

type Props = { children: Node };

const baseClass = "c-timeline";

export const Timeline = ({ children }: Props) => {
  return <div className={baseClass}>{children}</div>;
};

type TimelineRowProps = {
  weekday: string,
  date: string,
  content: string,
};

export const TimelineRow = ({ weekday, date, content }: TimelineRowProps) => {
  const baseClassRow = "c-timeline-row";
  return (
    <div className={bem(baseClassRow)}>
      <div className={bem(baseClassRow, "date-time-container")}>
        <div className={bem(baseClass, "date")}>{date}</div>
        <div className={bem(baseClass, "weekday")}>{weekday}</div>
      </div>
      <div className={bem(baseClassRow, "card-content")}>{content}</div>
    </div>
  );
};

export default Timeline;


// date on left of line
// card on right
// timeline is a container which takes children
// the children will be a timeline row - which represents each element in the timeline could be a timeline of achievements so each achievement
// for the circle and the line we will add the circle ::before the timeline row and the timeline line ::after the timeline row and position them accordingly
// timeline row will be position relative
// circle and line will be position absolute which means they won't go outside of their most relative parent container
