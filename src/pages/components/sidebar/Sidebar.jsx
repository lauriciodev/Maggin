import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  ChatBubbleOutlined,
  ExitToApp,
  InsertChartRounded,
  LocalShipping,
  Person,
  Person2Sharp,
  RotateLeftOutlined,
  Settings,
  SettingsSystemDaydreamOutlined,
  Store,
  UpcomingSharp,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Maggin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTAS</p>
          <li>
            <Person className="icon" />
            <span>Usuário</span>
          </li>
          <li>
            <Store className="icon" />
            <span>Produtos</span>
          </li>
          <li>
            <UpcomingSharp className="icon" />
            <span>Pedidos</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USABILIDADE</p>
          <li>
            <InsertChartRounded className="icon" />
            <span>Status</span>
          </li>
          <li>
            <ChatBubbleOutlined className="icon" />
            <span>Notificações</span>
          </li>
          <p className="title">SERVIÇOS</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>Systema Ajuda</span>
          </li>
          <li>
            <RotateLeftOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Configurações</span>
          </li>
          <p className="title">USUARIO</p>

          <li>
            <Person2Sharp className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
