import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Filtered from "../Filtered/Filtered";
import FormSearch from "../FormSearch/FormSearch";
import ModalForm from "../Modal/MoldalForm";

export const Nav = ({ setRender, setCurrentPage }) => {
  return (
    <nav className={css.nav}>
      <div className={css.nav__img}>
        <h1 className={css.nav__logo}>Henry Dogs</h1>
      </div>

      <div className={css.nav__search}>
        <FormSearch />
      </div>
      <div className={css.nav__select}>
        <Filtered setCurrentPage={setCurrentPage} />
      </div>

      <div className="nav__links">
        <ModalForm/>
      </div>
    </nav>
  );
};
