import './styles.css'
import logo from '../../img/Nu Kenzie login.svg'
import Button from '../Button'
import ilustracao from '../../img/ilustracao.svg'

const LoginPage = ({setIsLoggedIn}) => {
  return(
    <main className='backGround'>
      <div className='background-container'>
      <section className='backGround-info'>
        <img src={logo} className='background-logo'></img>
        <p>Centralize o</p>
        <p>controle das suas</p>
        <p>finanças</p>
        <span>de forma rápida e segura</span>
        <Button className={'form-button-add'} onClick={() => setIsLoggedIn(true)}>Iniciar</Button>
      </section>
      <section className='background-ilustracao'>
        <img src={ilustracao}></img>
      </section>
      </div>
      
    </main>
  )
}

export default LoginPage