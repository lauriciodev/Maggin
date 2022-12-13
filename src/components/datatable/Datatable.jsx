import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Ações",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/234" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div className="deleteButton">Deletar</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="datatableTitle">
        <Link className="link" to="/users/new">
          Novo Usuário
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
