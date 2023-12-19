import { useDispatch, useSelector } from "react-redux";
import { changeSeacrhTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSeacrhTermChange = (event) => {
    dispatch(changeSeacrhTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Seacrh</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSeacrhTermChange}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
