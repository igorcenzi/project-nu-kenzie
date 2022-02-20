import './styles.css'
import { FaTrash } from 'react-icons/fa'
import {useState} from 'react'

const Button = ({children, onClick, className, isCard, id = 0}) => {
  const [colorIcon, setColorIcon] = useState('#868E96')
  const colorHover = () => setColorIcon('#F8F9FA')
  const colorOut = () => setColorIcon('#868E96')

  return (
    <button 
    id={id}
    className={className}
      onClick={
        onClick && className !== 'card-button'?
        (event) =>
        { 
          event.preventDefault()
            onClick()
            if(event.target.className.includes('filter-button')){
              document.querySelectorAll('.selected').forEach((element) => element.classList.remove('selected'))
              event.target.classList.add('selected')
            }else if(event.target.className.includes('form-button-add')){
              document.querySelectorAll('.filter-button').forEach(elemento => elemento.classList.remove('selected'))
              const button = document.querySelector('.todos')
              if(button)
              button.classList.add('selected')
            }
        }
          :
          (event) => {
            event.preventDefault()
            onClick(event.target.closest('button').id)
          }
      }
      onMouseOver={colorHover} 
      onMouseLeave={colorOut}
      >
      {isCard ? <FaTrash color={colorIcon} size={12}/> : children}
    </button>
  )
}
export default Button