import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filterdCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filterdCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderdCars = cars.map((car) => {
    // dicide wich car
    // state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list fl">
      {renderdCars}
      <hr />
    </div>
  );
}

export default CarList;
