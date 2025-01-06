import { ColumnDef } from "@tanstack/react-table";

export type Application = {
  id: string;
  email: string;
  labelName: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Application>[] = [
    {
      accessorKey: "labelName",
      header: "Label Name",
    },
    {
      accessorKey: "email",
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
            badgeColor = "bg-yellow-100 text-yellow-800";
            break;
          case "processing":
            badgeColor = "bg-blue-100 text-blue-800";
            break;
          case "success":
            badgeColor = "bg-green-100 text-green-800";
            break;
          case "failed":
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
