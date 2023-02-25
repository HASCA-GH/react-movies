import React from 'react'
import { Form } from './Form'
// import ReactDOM from 'react-dom'
import {movies} from './data';

export const Movies = () => {
    // const [quantityTicket, setQuantityTicket] = useState(10)
  return (
    <article>
        <form>
            <h1>Películas</h1>
            <ul>
                {movies.map(movie => ( 
                    <Form movie={movie}/>
                ))}
            </ul>
        </form>
    </article>
    
 
  )
}