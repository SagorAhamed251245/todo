
import ModalComp from "../UI/ModalComp"

const NextSeven= ({showModal,setShowModal}) => {
  return (
    <div>
      <ModalComp showModal={showModal} setShowModal={setShowModal}>
              <div className="modalBox mt-4">
                <div className="text-center">
                  <h3>Add a New Todo</h3>
                </div>
                Add new slide
              </div>
            </ModalComp>
       </div>
  )
}

export default NextSeven