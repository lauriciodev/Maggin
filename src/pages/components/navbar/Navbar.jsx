import {
  ChatBubbleRounded,
  DarkModeSharp,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListAltOutlined,
  NotificationImportant,
  Search,
} from "@mui/icons-material";
import "./navbar.scss";

import avatar from "../navbar/assets/img/lauricio.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="pesquisar.." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            Inglês
          </div>
          <div className="item">
            <DarkModeSharp className="icon" />
          </div>
          <div className="item">
            <ChatBubbleRounded className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationImportant className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListAltOutlined className="icon" />
          </div>
          <div className="item">
            <img className="avatar" src={avatar} alt="lauricio dev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
