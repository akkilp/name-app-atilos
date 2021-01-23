import React from "react";
import LoadingSpinner from "../assets/loadingSpinner";

const Loading: React.FC = () => {
  return (
    <div className="relative mx-auto p-20">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
