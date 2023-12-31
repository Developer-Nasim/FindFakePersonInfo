import Button from "../../../components/Button/Button";
import style from './style.module.css'
import CreateModal from './CreateModal.jsx'
import { useState } from "react";



export default function CreateNewLink() {
  const [showModal,serShowModal] = useState(false)
  
  // Show modal
  const showModalHandle = () => {
    serShowModal(true)
  }
  // hide modal
  const closeHandle = () => {
    serShowModal(false)
  }
  

 

    return (
      <>
        <div className={style.createNewLink}>
          <Button redTheme onClick={showModalHandle}>Create</Button>
        </div>
        {showModal && <CreateModal closeHandle={closeHandle} />}
      </>
    )
    
}

