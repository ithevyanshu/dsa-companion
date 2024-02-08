import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import useProblems from "../hooks/useProblems";

const TableComponent = (data: any) => {
  const { problemTrack, setProblemTrack } = useProblems();

  const columns: GridColDef[] = [
    { field: "id", headerName: "S. No", width: 80 },
    { field: "name", headerName: "Problem Name", width: 400 },
    { field: "difficulty", headerName: "Difficulty", width: 150 },
    {
      field: "link",
      headerName: "Link",
      width: 170,
      renderCell: (cellValues) => {
        if (cellValues.value != "")
          return (
            <Link href={`${cellValues.value}`} target={"_blank"}>
              LeetCode
            </Link>
          );
      },
      sortable: false,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
        autoPageSize
        hideFooter
        disableColumnMenu
        selectionModel={problemTrack.Blind75}
        onSelectionModelChange={(newSelection) => {
          setProblemTrack({
            ...problemTrack,
            Blind75: newSelection,
          });
        }}
        sx={{
          color: "black",
          fontSize: "1rem",
          border: "none",
          "& .MuiDataGrid-checkboxInput": {
            color: "#be2535",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "#be2535",
          },
          "& .MuiDataGrid-cellCheckbox": {
            color: "#be2535",
          },
        }}
      />
    </div>
  );
};

export default TableComponent;
