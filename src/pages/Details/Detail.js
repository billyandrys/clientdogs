import css from './style.module.css'
const Detail = ({
  id,
  name,
  image,
  weight,
  temperament,
  life_span,
  height,
  Temperaments
}) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={image} alt={name} />
      <h1>{name}</h1>
      <p> weight : {weight}</p>
      <p>height :{height}</p>
      <p> life span:{life_span}</p>
      { Temperaments?.length ? Temperaments.map(({name})=><p> temperament : {name}</p>):
        (<p>temperament : {temperament}</p>)
      }
      
    </div>
  );
};

export default Detail;
