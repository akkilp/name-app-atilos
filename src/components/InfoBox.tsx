import React from "react";

interface InfoBoxProps {
  top: string | React.ReactNode;
  center: any;
  bottom: string | React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ top, center, bottom }) => {
  return (
    <div className="flex flex-col text-lg  bg-gray-50 p-6 py-10 rounded-3xl m-4 flex-grow shadow-lg">
      <p className="text-center">{top}</p>
      <h3 className="text-gray-800 text-5xl text-center p-4 font-bold text-shadow-lg">
        {center}
      </h3>
      <p className="text-center">{bottom}</p>
    </div>
  );
};

export default InfoBox;
