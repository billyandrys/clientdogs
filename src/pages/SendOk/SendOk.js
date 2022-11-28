import React from "react";
import sendOkImg from "../../assets/img/sendOk.jpg";
import css from "./style.module.css";

class SendOk extends React.Component {
  sendOK(props) {
    this.props.setSend(false);
  }

  render() {
    
    return (
      <div className={css.container}>
        <img
          onClick={() => this.sendOK()}
          className={css.imagen}
          src={sendOkImg}
          alt="Send"
        />
        <button className={css.button__cta} onClick={() => this.sendOK()}>
          ok
        </button>
      </div>
    );
  }
}

export default SendOk;
