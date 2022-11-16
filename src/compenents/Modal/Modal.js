import './style.css'

const Modal = ( {children, isOpen, openModal, closeModal} ) => {
    const handleModalContainerClikc = (e)=>e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "is-open"}`}  onClick={openModal}> 
            <div className='modal-container' onClick={handleModalContainerClikc}>
                <button className='modal-close' onClick={closeModal}>x</button>
                {children}
            </div>
            
        </article>
    );
}
//{`modal ${isOpen && "is-open"}`}
export default Modal;