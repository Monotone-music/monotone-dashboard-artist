import { useEffect, useState } from "react";
import { Application, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Application[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      labelName: "Universal Music Group",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "2",
      labelName: "Emi Record",
      status: "failed",
      email: "m@example.com",
    },
    {
      id: "3",
      labelName: "Sony Music Entertainment",
      status: "processing",
      email: "m@example.com",
    },   {
        id: "3",
        labelName: "Capitol Records",
        status: "success",
        email: "m@example.com",
      },
  ];
}

interface TableDataProps {
  data: any[];
  isLoading: boolean;
}

const TableData:React.FC<TableDataProps> = ({data, isLoading}) => {
  console.log(data)
  

  
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    );
  };

  export default TableData
