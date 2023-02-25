import React, { useState } from 'react'

export const Form = ({movie}) => {
const [quantityTicket, setQuantityTicket] = useState(0)
  return (
    <div>
        <li key={movie.name}>{movie.name}</li>
        
        <button type="button" disabled={quantityTicket <=0} onClick={()=> setQuantityTicket(quantityTicket-1)}>-</button>
        {quantityTicket}
        <button type="button" disabled={quantityTicket >= movie.available} onClick={()=> setQuantityTicket(quantityTicket+1)}>+</button>
    </div>
  )
}
