import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../state/actions";
import { Cards } from "../compenents/Cards/Cards";
import css from "./style.module.css";
import { Nav } from "../compenents/Nav/Nav";
import Pagination from "../compenents/Pagination/Pagination";
import Loading from "../compenents/Loading/Loading";
import ModalNotFound from "../compenents/Modal/ModalNotFound";
const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const loading = useSelector((state)=>state.laoding)
  const errors = useSelector((state)=>state.errors)
  const dogById = useSelector((state)=>state.dogById)
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPagine, setDogsPagine] = useState(8);
  const indexOfLastRecipe = currentPage * dogsPagine;
  const indexOfFirstRecipe = indexOfLastRecipe - dogsPagine;

  const currentDogs = allDogs?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const pagine = (numberPagine) => {
    setCurrentPage(numberPagine);
  };

  
  return (
    <>
     { loading ? <Loading/> :
     <>
     <Nav setCurrentPage={setCurrentPage} />
      <div className={css.cards}>
        {currentDogs &&
          currentDogs.map(({ id, name, image, weight, temperament, height, life_span, Temperaments} ) => (
            <Cards
              name={name}
              id={id}
              key={id}
              temperament={temperament}
              Temperaments={Temperaments}
              image={image}
              weight={weight}
              height={height}
              life_span={life_span}
              dogById={dogById}

            />
          ))}
      </div>
      <Pagination dogsPagine={dogsPagine} allDogs={allDogs} pagine={pagine} />
      </>
     }
     <ModalNotFound IsopenII={errors}/>
    </>
  );
};

export default Home;
