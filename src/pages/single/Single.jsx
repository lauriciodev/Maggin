import "../single/single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informações</h1>
            <div className="item">
              <img
                src="https://avatars.githubusercontent.com/u/86666254?v=4"
                alt="imagem"
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Lauricio De Souza</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">lauricio@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">+55 61 16736712</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemValue">Avenida lt 030 yd - brasil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Movimentação  (Útimos 6 meses)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Útimad transações</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
