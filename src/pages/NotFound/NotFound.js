import  css from './style.module.css';

const NotFound = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}> «Guau» «Guau»  Sorry 
we couldnt find dogs  </h1>
            <img className={css.img} src='https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg' alt='not found'/>

            <p className={css.cta}>Henry Dogs</p>
        </div>
    );
}

export default NotFound;
