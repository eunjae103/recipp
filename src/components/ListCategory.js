import { useState } from "react";
import "./ListCategory.scss";
import { RiPlantFill } from "react-icons/ri";

const ListCategory = () => {
  const [categorys, setCategorys] = useState([
    { id: 1, text: "야채" },
    { id: 2, text: "양파" },
    { id: 3, text: "고기" },
  ]);
  return (
    <div className="category">
      <RiPlantFill />
    </div>
  );
};

export default ListCategory;
