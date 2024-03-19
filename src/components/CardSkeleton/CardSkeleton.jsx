import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="flex flex-col rounded-xl h-[50vh] gap-3" key={i}>
          <Skeleton height={400}/>
      </div>
    ));
};

export default CardSkeleton;
