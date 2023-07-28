import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
// import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";


// import React from 'react'

const AddCabin = () => {
  return (
    <div>
    <Modal>
    <Modal.Open opens="cabin-form">
     <Button>Add new Cabin</Button>
    </Modal.Open>
    <Modal.Window name="cabin-form">
    <CreateCabinForm />
    </Modal.Window>
    </Modal>
    </div>
  )
}

export default AddCabin

// const AddCabin = () => {
//     const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//         <Button onClick={() => setIsOpenModal((show) => !show)} >Add new Cabin</Button>
//     {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//             <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//     )}
//     </div>
//   )
// }

