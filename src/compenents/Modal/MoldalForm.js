import Modal from './Modal'
import FormCreate from '../../pages/FormCreate/FormCreate'
import {UseModal} from '../../hooks/UseModal'
import css from './style.module.css'

const ModalForm = ()=>{

    const [ isOpen, openModal, closeModal ] = UseModal(false)
    
    return (
        <div>
                <button className={css.button} onClick={openModal}>Add dog</button>
                <Modal isOpen = {isOpen } openModal={openModal} closeModal={closeModal}>
                    <FormCreate />
                </Modal>
        </div>
    )



}

export default ModalForm