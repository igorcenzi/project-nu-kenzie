import {useState} from 'react'
import Button from '../Button/'
import SelectType from '../SelectType'
import Input from '../Input'
import './styles.css'

const Formulario = ({addList, list, setListBackup, listBackup}) => {
  const verificaValores = () => {
    if(!descricao || !valor || tipo === 'none'){
      return false
  }else{
    return true
  }
}

  const resetaCampos = () => {
    document.querySelectorAll('input').forEach(input => input.value = '')
    document.querySelector('select').value = 'none'
    setDescricao('')
    setValor(0)
    setTipo('')
  }

  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [tipo, setTipo] = useState('')
  const gerarId = () => {
    let maxId = 0
    listBackup.forEach(item => {
      if(item.id > maxId){
        maxId = item.id
      }
    })
    return maxId
  }
  return (
    <form>
      <div className='form-descricao'>
        <p>Descrição</p>
        <Input type={'text'} onChange={setDescricao}/>
        <span>Ex: Compra de roupas</span>
      </div>
      <div className='form-valor'>
        <div className='form-valor-quantidade'>
          <p>Valor</p>
          <Input type={'number'} onChange={setValor} />
        </div>
        <div className='form-valor-tipo'>
          <p>Tipo de valor</p>
          <SelectType onChange={setTipo}/>
        </div>
      </div>
      <Button className={'form-button-add'}
      onClick={
        verificaValores() ?
        (event) => {
        addList({'id':gerarId() + 1 ,'descricao': descricao, 'valor': valor, 'tipo': tipo})
        setListBackup([...list])
        resetaCampos()
        }
        :
        () => null
      }
      >Inserir valor</Button>
    </form> 
  )
}

export default Formulario