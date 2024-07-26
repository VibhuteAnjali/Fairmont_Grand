import { useState } from "react";
import "../styles/Tabs.css";
import List from "./List";
import { Villas } from "../Data/ImgData";
import { Pools } from "../Data/ImgData";
import { guestRoom } from "../Data/ImgData";
import { Suites } from "../Data/ImgData";
export default function Tabs() {
  const [tab, setTab] = useState("GR");
  return (
    <div className="tabs-container">
      <div className="tabs">
        <div className={`${tab == "GR" && "active"}`}>
          <p onClick={() => setTab("GR")}>Guest Room</p>
        </div>
        <div className={`${tab == "Pools" && "active"}`}>
          <p onClick={() => setTab("Pools")}>Pools</p>
        </div>
        <div className={`${tab == "Suites" && "active"}`}>
          <p onClick={() => setTab("Suites")}>Suites</p>
        </div>
        <div className={`${tab == "Villas" && "active"}`}>
          <p onClick={() => setTab("Villas")}>Villas</p>
        </div>
      </div>
      {tab === "GR" && (
        <div className="content">
          <List list={guestRoom} />
        </div>
      )}
      {tab === "Pools" && (
        <div className="content">
          <List list={Pools} />
        </div>
      )}
      {tab === "Suites" && (
        <div className="content">
          <List list={Suites} />
        </div>
      )}
      {tab === "Villas" && (
        <div className="content">
          <List list={Villas} />
        </div>
      )}
    </div>
  );
}
