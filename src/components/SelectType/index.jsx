import './styles.css'

const SelectType = ({onChange}) => {
  return (
    <select className='selectType' onChange={(event) => onChange(event.target.value)}>
      <option value={'none'}>- Selecione -</option>
      <option value={'Entrada'}>Entrada</option>
      <option value={'Saida'}>Saída</option>
    </select>
  )
}

export default SelectType