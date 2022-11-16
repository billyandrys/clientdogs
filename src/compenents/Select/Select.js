import { useDispatch } from 'react-redux'
import css from './style.module.css'
const Select = ({add, valueDefault, getAction, setCurrentPage}) => {
    const dispatch = useDispatch()
    const handleTypeChange=(e)=>{
        const valueFilterd = e.target.value
        dispatch(getAction(valueFilterd))
        setCurrentPage(1)
       
    }
    
    return (
        <select className= {css.select} onChange={handleTypeChange} valuedefault={valueDefault}>
           
           <option value="" selected='true'  disabled="disabled">Choose {valueDefault}</option>
            {/* <option className={css.select__option } value={valueDefault}  >
                {valueDefault}
            </option> */}

            {add?.map(({name, index})=>(
                <option value={name} key={index}>
                        {name}
                </option>
            ))}
        </select>
    );
}

export default Select;
