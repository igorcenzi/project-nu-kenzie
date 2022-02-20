import './styles.css'

const FormFooter = ({valorTotal}) => {
  return(
    <div className='footer-valor-total'>
      <span className='footer-valor-text'>Valor Total:</span>
      <span className='footer-valor-reais'>$ {valorTotal()}</span>
    </div>
  )
}

export default FormFooter