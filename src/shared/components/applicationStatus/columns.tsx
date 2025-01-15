import { ColumnDef } from "@tanstack/react-table";

export type Application = {
  id: string;
  email: string;
  labelName: string;
  status: "pending" | "rejected" | "approved" ;
};

export const columns: ColumnDef<Application>[] = [
    {
      accessorKey: "labelId.displayName",
      header: "Label Name",
    },
    {
      accessorKey: "labelId.email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        let badgeColor = "";
  
        switch (status) {
          case "pending":
            badgeColor = "bg-blue-100 text-blue-800";
            break;
          case "approved":
            badgeColor = "bg-green-100 text-green-800";
            break;
          case "rejected":
            badgeColor = "bg-red-100 text-red-800";
            break;
          default:
            badgeColor = "bg-gray-100 text-gray-800";
        }
  
        return (
          <span
            className={`inline-flex items-center px-2 py-1 text-sm font-medium rounded ${badgeColor}`}
          >
            {status}
          </span>
        );
      },
    },
  ];
