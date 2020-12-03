import React from "react";

type Props = {
  items: [],
  showItems: boolean,
};
const SearchBarListContainer = ({ items, showItems }: Props) => {
  return (
    <div>
      {showItems
        ? items.map((item) => {
            return (
              <div style={{ fontFamily: "monospace", fontSize: 15 }}>{item}</div>
            );
          })
        : "List items hidden"}
    </div>
  );
};

export default SearchBarListContainer;
