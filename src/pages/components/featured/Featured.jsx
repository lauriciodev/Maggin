import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Receita Total </h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={1} />
        </div>
        <p className="title"> Total de vendas hoje</p>
        <p className="amount">$503</p>
        <p className="desc">Últimos pagamentos não processados</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle ">Hoje</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Última Semana</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$116.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Útimo mês</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
