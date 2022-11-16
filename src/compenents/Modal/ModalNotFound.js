
import './styleNotfound.css'

import NotFound from "../../pages/NotFound/NotFound";
import { useSelector, useDispatch } from 'react-redux'
import { closeErrors } from '../../state/actions.js'

const ModalNotFound = () => {
        const isOpen = useSelector((state)=> state.errors)
        const dispatch = useDispatch()

        const closeModal = ()=>{
            dispatch(closeErrors())
        }
    
    return (
        <article className={`modal ${ isOpen && "is-open"}`} > 
            <div className='modal-container' >
                <button className='modal-close' onClick={closeModal} >x</button>
                <NotFound/>
            </div>
            
        </article>
    );
}

export default ModalNotFound;
