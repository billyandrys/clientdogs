import React, { useState } from "react";
import useForm from "../../hooks/UseForm";
import { useSelector, useDispatch } from "react-redux";
import { createDog } from "../../state/actions";
import css from "./style.module.css";
import SendOk from "../SendOk/SendOk";
const initialForm = {
  name: "",
  weight: "",
  height: "",
  temperament: [],
  life_span: "",
  image: "",
};

const valiateForm = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexWeight = /[0-9\-\ ]/;
  let regexHeight = /[0-9\-\ ]/;
  let regexLife_span = /[a-zA-Z0-9\-\ ]/;

  let errors = {};

  if (!form.name.trim()) {
    errors.name = "Is required";
  } else if (!regexName.test(form.name)) {
    errors.name = "only letter";
  }

  if (!form.weight.trim()) {
    errors.weight = "Is required";
  } else if (!regexWeight.test(form.weight)) {
    errors.weight = "only number o range number example 10 - 12";
  }

  if (!form.height.trim()) {
    errors.height = "Is required";
  } else if (!regexHeight.test(form.height)) {
    errors.height = "only number o range number example 7 - 9";
  }

  if (!form.life_span.trim()) {
    errors.life_span = "Is required";
  } else if (!regexLife_span.test(form.life_span)) {
    errors.life_span = "range number example 7 - 9 years";
  }

  if (!form.image.trim()) {
    errors.image = "is required";
  }
  if (!form.temperament.length) {
    errors.temperament = "is required";
  }

  return errors;
};

function FormCreate() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const [ send, setSend ] = useState(false)



  const {
    form,
    setForm,
    handleSubmit,
    handleBlur,
    handleChange,
    handleKeyDown,
    errors,
    handleClick,
    setErrors,
  } = useForm(initialForm, valiateForm);

  const handleSelect = (e) => {
    setForm({
      ...form,
      temperament: [...new Set([...form.temperament, e.target.value])],
    });
  };

  const handleDeleteSelect = (temperamentDelete) => {
    setForm({
      ...form,
      temperament: form.temperament.filter(
        (temperament) => temperament !== temperamentDelete
      ),
    });
  };

  const save = (e) => {
    e.preventDefault();
    const rs = valiateForm(form);

    setErrors(rs);
    if (!Object.keys(rs).length) {
      dispatch(createDog(form));

      setForm({
        name: "",
        weight: "",
        height: "",
        temperament: [],
        life_span: "",
        image: "",
      });
      setSend(true);
    }
  };


  

  return (
    <>
      {send ? ( <SendOk setSend={setSend}/>): (
        <form className={css.form} onSubmit={save}>
      <h2 className={css.tilte}>Add Dog</h2>
      <div className={css.form__input}>
        <input
          type=""
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="name"
        />
        <span className={css.span__error}>{errors.name} </span>
        <input
          type=""
          name="weight"
          value={form.weight}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="weight example 20 - 25"
        />
        <span className={css.span__error}>{errors.weight}</span>

        <input
          type=""
          name="height"
          value={form.height}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" height example 15 - 17"
        />
        <span className={css.span__error}>{errors.height}</span>
        <input
          type=""
          name="life_span"
          value={form.life_span}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="life span example 15 - 17 years"
        />
        <span className={css.span__error}>{errors.life_span}</span>
        <input
          type=""
          name="image"
          value={form.image}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="image"
        />
        <span className={css.span__error}>{errors.image}</span>
      </div>
      <select className={css.form__select} onChange={handleSelect}>
        <option value="" selected="true" disabled="disabled">
          Choose temperaments
        </option>
        {allTemperaments.temperaments?.map(({ name }) => (
          <option value={name}>{name}</option>
        ))}
      </select>
      <span className={css.span__error}>{errors.temperament}</span>
      {form.temperament.map((temperament) => (
        <ul className={css.list}>
          <ol className={css.list__delete}>
            <button className={css.button_delete} onClick={() => handleDeleteSelect(temperament)}>
              x{temperament}
            </button>
          </ol>
        </ul>
      ))}
      <div className={css.form__button}>
        <button className={css.form__submit} type="submit">
          Save
        </button>
      </div>
    </form>
      )}   
    
    </>
  );
}

export default FormCreate;
