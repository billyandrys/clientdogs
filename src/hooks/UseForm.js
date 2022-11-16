import { useState } from "react";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value} = e.target;
    //value = value[0].toUpperCase() + value.substring(1)
    
    setForm({
      ...form,
      [name]: value,
    });

   
  };



  const handleBlur =(e)=>{
    handleChange(e)
    setErrors(validateForm(form))
  }

  const handleKeyDown =(e)=>{
    if(e.keyCode === 13){
        setErrors(validateForm(form))
    }
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setErrors(validateForm(form))
    if(Object.keys(errors).length===0){
      
        return true
    }
  }

  const handleClick = (e)=>{
    setErrors(validateForm(form))
  }
  return {
    form,
    setForm,
    handleSubmit,
    handleBlur,
    handleChange,
    handleKeyDown,
    errors,
    handleClick,
    setErrors


  }

};

export default useForm