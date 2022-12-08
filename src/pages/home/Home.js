import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import data from "../../component/widget/Data"
import Featured from "../../component/featured/Featured";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";

export default function Home() {

  

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        {data.map((Data,index)=>{return <Widget key={index} type={Data}/>})}
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listName">Last Trasanction</div>
          <List/>
        </div>
      </div>
    </div>
  );
}
