import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Avatar, Chip, Box, Typography, ThemeProvider } from "@mui/material";
import data from "../data.json";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    Cell: ({ row }) => (
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar
          src={row.original.name.image}
          alt={row.original.name.username}
        />
        <Box>
          <Typography>{row.original.name.username}</Typography>
          <Typography variant="caption" color="gray">
            {row.original.name.handle}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    Cell: ({ row }) => (
      <Chip label={row.original.status} color="primary" size="small" />
    ),
  },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "teams",
    header: "Teams",
    Cell: ({ row }) => (
      <Box display="flex" gap={1}>
        {row.original.teams.map((team, index) => (
          <Chip key={index} label={team} color="info" size="small" />
        ))}
      </Box>
    ),
  },
];

const MUITable = () => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableMultiRowSelection: true,
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  return <MaterialReactTable table={table} />;
};

export default MUITable;
