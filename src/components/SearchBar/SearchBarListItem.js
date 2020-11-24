import React from "react";

type Props = {
  items: [],
  showItems: boolean
};
const SearchBarListContainer = ({ items, showItems }: Props) => {
  return (
    <div>
      {showItems
        ? items.map((item) => {
            return <div>{item}</div>;
          })
        : "List items hidden"}
    </div>
  );
};

export default SearchBarListContainer;
