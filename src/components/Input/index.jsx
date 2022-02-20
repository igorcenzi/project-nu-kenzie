import './styles.css'

const Input = ({type, onChange}) => {
  return (
    //Fragment
    <>
    {type === 'text' ?
      <input
        className='input input-descricao' 
        placeholder='Digite aqui sua descrição' 
        type={type} 
        onChange={(event) => onChange(event.target.value)}>
      </input>
      :
      <input 
        className='input input-valor' 
        placeholder='1' type={type} 
        onChange={(event) => onChange(event.target.value)}>
      </input>
  }
    </>
  )
}

export default Input