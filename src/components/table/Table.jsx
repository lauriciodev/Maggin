import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 133445,
      product: "Playstation 5",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_RyZTeomVihUDwzI41F-PrxJN9UhaP5SOHpodN1i6w1vktyooDUI69W4GK2R40AHbmoiR0t2SzAWSPZ5-5VyzA4FKkC7bN5riR1F",
      customer: "Jhon Smith",
      date: "1 março",
      amount: 783,
      method: "Cartão de credito",
      status: "Aprovado",
    },
    {
      id: 233445,
      product: "Playstation 5",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_RyZTeomVihUDwzI41F-PrxJN9UhaP5SOHpodN1i6w1vktyooDUI69W4GK2R40AHbmoiR0t2SzAWSPZ5-5VyzA4FKkC7bN5riR1F",
      customer: "Jhon Smith",
      date: "1 março",
      amount: 783,
      method: "Cartão de credito",
      status: "Pendente",
    },
    {
      id: 333445,
      product: "Playstation 5",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_RyZTeomVihUDwzI41F-PrxJN9UhaP5SOHpodN1i6w1vktyooDUI69W4GK2R40AHbmoiR0t2SzAWSPZ5-5VyzA4FKkC7bN5riR1F",
      customer: "Jhon Smith",
      date: "1 março",
      amount: 783,
      method: "Cartão de credito",
      status: "Aprovado",
    },
    {
      id: 433445,
      product: "Playstation 5",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_RyZTeomVihUDwzI41F-PrxJN9UhaP5SOHpodN1i6w1vktyooDUI69W4GK2R40AHbmoiR0t2SzAWSPZ5-5VyzA4FKkC7bN5riR1F",
      customer: "Jhon Smith",
      date: "1 março",
      amount: 783,
      method: "Cartão de credito",
      status: "Pendente",
    },
    {
      id: 533445,
      product: "Playstation 5",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_RyZTeomVihUDwzI41F-PrxJN9UhaP5SOHpodN1i6w1vktyooDUI69W4GK2R40AHbmoiR0t2SzAWSPZ5-5VyzA4FKkC7bN5riR1F",
      customer: "Jhon Smith",
      date: "1 março",
      amount: 783,
      method: "Cartão de credito",
      status: "Aprovado",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id do pedido</TableCell>
            <TableCell className="tableCell">Produto</TableCell>
            <TableCell className="tableCell">Comprador</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Valor</TableCell>
            <TableCell className="tableCell">Método de pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="productimage" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.customer}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.date}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.amount}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.method}
              </TableCell>
              <TableCell className="tableCell" align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
