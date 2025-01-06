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

const TableData = () => {
    const [data, setData] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await getData();
        setData(result);
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    );
  };

  export default TableData
