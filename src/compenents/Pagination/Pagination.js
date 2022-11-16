import css from './style.module.css'

const Pagination = ({ dogsPagine, allDogs, pagine }) => {
  const numbersPagine = [];

  for (
    let index = 1;
    index <= Math.ceil(allDogs.length / dogsPagine);
    index++
  ) {
    numbersPagine.push(index);
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {numbersPagine &&
          numbersPagine.map((number) => (
            <li className={css.list__numbers} key={number}>
              <button className={css.list__button} onClick={() => pagine(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
