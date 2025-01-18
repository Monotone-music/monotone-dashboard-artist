import {  columns } from "./columns";
import { DataTable } from "./data-table";

interface TableDataProps {
  data: any[];
  isLoading: boolean;
}

const TableData:React.FC<TableDataProps> = ({data, isLoading}) => {
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    );
  };

  export default TableData
