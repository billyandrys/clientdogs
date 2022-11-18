import css from "./style.module.css";
import {
  filterAllDogs,
  getAllTemperaments,
  getAllWeight,
  filterByTemperaments,
  filterByWeight,
  orderByName,
  getOrderOrigenCreate,
} from "../../state/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Select/Select";
import { valueDefault, originCreate, order } from "../Select/valuesDefault";
const Filtered = ({ setRender, setCurrentPage }) => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const allWeight = useSelector((state) => state.allWeight);

  useEffect(() => {
    dispatch(getAllTemperaments());
    dispatch(getAllWeight());
  }, []);

  const handleClick = ()=>{
    dispatch(filterAllDogs())
  }
  return (
    <>
      <ul className={css.list}>
        <li className={css.list__items}>
          <button className={css.button} onClick ={handleClick}>AllDogs</button>
        </li>
        <li>
          <Select
            add={allTemperaments.temperaments}
            valueDefault={valueDefault.TEMPERAMENTS}
            getAction={filterByTemperaments}
            setCurrentPage={setCurrentPage}
          />
        </li>
        <li>
          <Select
            add={originCreate}
            valueDefault={valueDefault.DATA_ORIGEN}
            getAction={getOrderOrigenCreate}
            setCurrentPage={setCurrentPage}
          />
        </li>
        <li>
          <Select
            add={allWeight.weight_metric}
            valueDefault={valueDefault.WEIGHT}
            getAction={filterByWeight}
            setCurrentPage={setCurrentPage}
          />
        </li>
        <li>
          <Select
            add={order}
            valueDefault={valueDefault.ORDER}
            getAction={orderByName}
            setCurrentPage={setCurrentPage}
          />
        </li>
      </ul>
    </>
  );
};

export default Filtered;
