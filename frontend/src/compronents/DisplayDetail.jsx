import React, { useEffect, useState } from "react";

const DisplayDetail = (props) => {
  const { trashId } = props; //itemのid
  const [info, setInfo] = useState("");

  //ゴミの捨て場所とかをfetchする
  // GET api/items/:id

  useEffect(() => {
    fetch(`http://localhost:8080/items/${trashId}`)
      .then((res) => res.json())
      .then((res) => setInfo(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {info.map((itemObj, index) => (
        <section key={index}>
          <h2>品目：{itemObj.item_name}</h2>
          <p>分類: {itemObj.type_name}</p>
          <p>回収施設名: {itemObj.station_name}</p>
          <p>住所: {itemObj.address}</p>
          <p>開設時間: {itemObj.day_time}</p>
        </section>
      ))}
    </div>
  );
};

export default DisplayDetail;
