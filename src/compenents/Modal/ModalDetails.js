import { UseModal } from "../../hooks/UseModal";
import Modal from "./Modal";
import Detail from "../../pages/Details/Detail";
import  './style.css'

const ModalDetails = ({
  id,
  name,
  image,
  weight,
  temperament,
  life_span,
  height,
  Temperaments
}) => {
  const [isOpen, openModal, closeModal] = UseModal(false);

  return (
    <div>
      <button className='button__more'  onClick={openModal}>Mores Details</button>
      <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal}>
        <Detail
          id={id}
          name={name}
          image={image}
          weight={weight}
          temperament={temperament}
          Temperaments={Temperaments}
          life_span={life_span}
          height={height}
        />
      </Modal>
    </div>
  );
};

export default ModalDetails;
