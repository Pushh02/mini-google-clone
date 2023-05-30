import React from "react";
import {Puff} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <Puff type="puff" color="#00BFFF" height={550} width={80}/>
    </div>
  );
};

export default Loading;
