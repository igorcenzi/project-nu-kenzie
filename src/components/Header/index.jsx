import './styles.css'
import imagem from '../../img/Nu Kenzie.svg'
import Button from '../Button'

const Header = ({setIsLoggedIn}) => {
  return (
    <header>
      <div className='header-container'>
        <img src={imagem} />
        <Button className={'filter-button'} onClick={() => setIsLoggedIn(false)}>Inicio</Button>
      </div>
    </header>
  )
}

export default Header