export const userColumns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "user",
    headerName: "Usuário",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellwidthImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Idade", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWidthStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// dados temporaios
export const userRows = [
  {
    id: "351 ",
    username: "lauricio",
    img: "https://avatars.githubusercontent.com/u/86666254?v=4",
    status: "ativo",
    email: "lauricio@gmail.com",
    age: 22,
  },
  {
    id: "354 ",
    username: "lauricio",
    img: "https://avatars.githubusercontent.com/u/86666254?v=4",
    status: "inativo",
    email: "lauricio@gmail.com",
    age: 22,
  },
  {
    id: "563",
    username: "lauricio",
    img: "https://avatars.githubusercontent.com/u/86666254?v=4",
    status: "ativo",
    email: "lauricio@gmail.com",
    age: 22,
  },
  {
    id: "975",
    username: "lauricio",
    img: "https://avatars.githubusercontent.com/u/86666254?v=4",
    status: "inativo",
    email: "lauricio@gmail.com",
    age: 22,
  },
  {
    id: "341 ",
    username: "lauricio",
    img: "https://avatars.githubusercontent.com/u/86666254?v=4",
    status: "ativo",
    email: "lauricio@gmail.com",
    age: 22,
  },
];
