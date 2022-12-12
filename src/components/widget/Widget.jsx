import {
  ArrowCircleUp,
  Balance,
  Money,
  Person3,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporario
  const amaunt = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Usuário",
        isMoney: false,
        link: "ver todos os usuários",
        icon: <Person3 className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "Pedidos",
        isMoney: false,
        link: "ver todos os Pedidos",
        icon: <ShoppingBagOutlined className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "Ganhos",
        isMoney: true,
        link: "ver todos os ganhos",
        icon: <Money className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "Saldo",
        isMoney: true,
        link: "ver datalhes",
        icon: <Balance className="icon" />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amaunt}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <ArrowCircleUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
