import React from 'react'

function Card({imagen}) {
  return (
    <div className="col-12">
        <div className="gallery-item">
            <img src={imagen} alt="" />
        </div>
    </div>
  )
}

export default Card