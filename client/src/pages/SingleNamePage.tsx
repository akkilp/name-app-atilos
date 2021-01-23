import React from "react";
import { useHistory, useParams } from "react-router-dom";
import InfoList from "../components/InfoList";

import TopContainer from "../components/InputContainer";
import { useApi } from "../hooks/useApi";

import { ReactComponent as GoBackIcon } from "../assets/arrow.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SingleNamePageProps {}

const mapResults = ({ data }: any) => {
  return data[0];
};

const SingleNamePage: React.FC<SingleNamePageProps> = () => {
  const history = useHistory();
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useApi(
    `http://localhost:5000/names/${name}`,
    mapResults
  );

  function handleReturn() {
    history.push(`/`);
  }

  return (
    <>
      <TopContainer>
        {/* Container that splits icon and name apart */}
        <div className="flex flex-column flex-grow justify-between">
          <h2 className="text-4xl text-center capitalize font-normal">
            {" "}
            {name}{" "}
          </h2>
          <GoBackIcon className="w-10 cursor-pointer" onClick={handleReturn} />
        </div>
      </TopContainer>
      <InfoList data={data} error={error} isLoading={isLoading} />
    </>
  );
};

export default SingleNamePage;
