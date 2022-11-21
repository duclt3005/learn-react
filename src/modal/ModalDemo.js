import React from 'react'
import Modal from './Modal'

const ModalDemo = () => {
  return (
    <div>
      <div>
        <Modal />
      </div>
        <button className="p-4 bg-green-600 text-white rounded-lg font-semibold">Show modal</button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquid magnam vel, ut asperiores totam porro iusto, non accusamus in velit libero distinctio quam eum, optio iste quos atque quod?
      </div>
    </div>
  )
}

export default ModalDemo