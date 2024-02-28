import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import AsideLeft from "../aside/AsideLeft";
import AsideRight from "../aside/AsideRight";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="header-layout">
        <Header />
      </div>
      <main className="main-layout">
        <div className="aside-left-div">
          <AsideLeft />
        </div>
        <div className="outlet-div">
          <Outlet />
        </div>
        <div className="aside-right-div">
          <AsideRight />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
