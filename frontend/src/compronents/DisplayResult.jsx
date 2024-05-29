import React ,{useState} from "react";
import DisplayDetail from "./DisplayDetail";

const DisplayResult = (props) => {
  const { searchWord } = props;
  const [ trashId , setTrashId] = useState("");
  //fetchする

  return (
    <div>
      {/* DisplayDetail を　消したり出したりする */}
      <DisplayDetail trashId = {trashId}/>
      </div>
  )
};

export default DisplayResult;
