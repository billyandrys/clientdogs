import  css  from './style.module.css'
import { Link } from 'react-router-dom'
import ModalDetails from '../Modal/ModalDetails'

export const Cards = ({id, name, image, weight, temperament, Temperaments, life_span, height , dogById}) => {
    console.log(Temperaments)
    return (
    
        <div className={css.card}>
            <img className={css.card__img} src={image} alt={name}/>
            <div className={css.card__texts}>
            <h3 className={css.card__title}> {name}</h3>
            
            <ul className={css.card__list}>
            <li>weight - {weight}</li>
            { 
                Temperaments ? Temperaments.map(({name})=><li>temperament - {name}</li>) : 
                (   
                        
                        <li>temperament - {temperament }</li>
                    
                )
            }
            </ul>
            </div>
            <div className={css.card__cta}>
                <ModalDetails 
                id={id}
                 name={name}
                  image={image}
                   weight={weight}
                   height={height}
                    temperament={temperament}
                    life_span={life_span}
                    Temperaments={Temperaments}
                    />
            </div>
        </div>
    
  )
}
