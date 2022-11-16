import Modal from './Modal'
import FormCreate from '../../pages/FormCreate/FormCreate'
import {UseModal} from '../../hooks/UseModal'


const ModalForm = ()=>{

    const [ isOpen, openModal, closeModal ] = UseModal(false)
    
    return (
        <div>
                <button onClick={openModal}>Add dog</button>
                <Modal isOpen = {isOpen } openModal={openModal} closeModal={closeModal}>
                    <FormCreate />
                </Modal>
        </div>
    )



}

export default ModalForm