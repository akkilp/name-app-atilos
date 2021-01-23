import React from "react";
import { Name } from "../types";
import ListItem from "./ListItem";

import Loading from "../components/Loading";
import Error from "../components/Error";
import NotFound from "./NotFound";

interface NameListProps {
  nameList: Name[];
  isLoading: boolean;
  error: Error | undefined;
}

const NameList: React.FC<NameListProps> = ({ nameList, error, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (nameList.length === 0) {
    return <NotFound />;
  }

  const mapListItems = nameList.map((item: Name, i: number) => {
    return (
      <ListItem
        key={item.name}
        item={item}
        color={i % 2 === 0 ? "secondary" : "primary"}
      />
    );
  });

  const numberOfEmployees = nameList.reduce(
    (total, curr) => total + curr.amount,
    0
  );
  const numberOfNames = nameList.length;

  return (
    <>
      <table className="table-fixed shadow-xl">
        <thead>
          <tr className="text-gray-800">
            <th className="w-1/2 p-2">Name</th>
            <th className="w-1/4 ">Amount</th>
          </tr>
        </thead>
        <tbody>{mapListItems}</tbody>
      </table>
      <p className="p-4 text-sm text-center font-medium">
        {numberOfNames} {numberOfNames === 1 ? "name" : "names"},{" "}
        {numberOfEmployees} employees
      </p>
    </>
  );
};

export default NameList;
