import React from "react";

import Timeline from "./Timeline";

import { timelineData } from "./TimelineData";

import { TimelineRow } from "./Timeline";

// wasn't working because timelinerow is a named export so i had to wrap it in curly braces when importing

export default {
  title: "Atoms/Timeline",
  component: Timeline,
};

const StoryTemplate = (args) => (
  <Timeline>
    {timelineData.map((data) => {
      const { weekday, date, content } = data; // destructuring
      return <TimelineRow weekday={weekday} date={date} content={content} />;
    })}
  </Timeline>
);

// make it change colour

const StoryTemplate2 = (args) => (
  <Timeline>
    {" "}
    <TimelineRow
      weekday="THU"
      date="21"
      content="Learned about box model from scratch border box vs content box"
    />
    <TimelineRow
      content="Learned about intrinsic sizing vs extrinsic"
      weekday="FRI"
      date="22"
    />
    <TimelineRow
      content="Went over pseudo classes and position abs"
      weekday="SAT"
      date="23"
    />
    <TimelineRow
      content="Refresher on min-width max-width"
      weekday="SAT"
      date="23"
    />
  </Timeline>
);

export const TimeLineDefault = StoryTemplate.bind({});
export const TimeLineDefault2 = StoryTemplate2.bind({});
