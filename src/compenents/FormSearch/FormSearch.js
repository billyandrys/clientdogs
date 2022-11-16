import UseForm from "../../hooks/UseForm";
import css from './style.module.css'
import  { getSearch } from '../../state/actions'
import { useDispatch } from 'react-redux'

const initialForm = {
    name:''
  }
  
  const validateForm = (form)=>{
    let regexName = /^[A-Za-z0-9\s]+$/g
    let errors = {}
    if(!form.name.trim()){
      errors.name = 'required is fielf'
    }else if(!regexName.test(form.name.trim())){
        errors.name = 'fielf only letter and blank space'
    }
  
    return errors 
  }

const FormSearch = () => {
    const dispatch = useDispatch()
    const { form, handleChange, handleClick, handleSubmit, handleBlur,  handleKeyDown, setForm} = UseForm(initialForm, validateForm)
    const handleSearch = (e)=>{
        e.preventDefault();
        if(handleSubmit(e)){
          dispatch(getSearch(form.name))
          
        }
    }
    return (
        <form onSubmit={handleSearch}>
          <input value={form.name} name='name' onChange={handleChange}
            className={css.nav__input}
            type="text"
            placeholder="Search Dog"
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
         
          <button className={css.nav__button} onClick={handleSearch}>Search</button>
        </form>
    );
}

export default FormSearch;



