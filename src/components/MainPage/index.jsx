import './styles.css'
import {useState} from 'react'
import Header from '../Header'
import List from '../List'
import Formulario from '../Formulario'
import FormFooter from '../FormFooter'

const MainPage = ({setIsLoggedIn}) => {
  const [list, setList] = useState([])
  const [listBackup, setListBackup] = useState([])
  const addList = async ({id, descricao, valor, tipo}) => {
    const newList = await [...listBackup, {'id': id, 'descricao':descricao, 'valor': Number(valor), 'tipo': tipo}]
    setList(newList)
    setListBackup(newList)
  }
  
  const filterList = async (id) => {
    const newList = await listBackup.filter(item => item.id !== Number(id))
    setList(newList)
    setListBackup(newList)
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.todos').classList.add('selected')
  }

  const filterByType = async (type) => {
    if(type === 'Todos'){
      const newList = await listBackup
      setList(newList)
    }else{
      const filtredList = await listBackup.filter(item => item.tipo === type)
      setList(filtredList)
    }
  }

  const valorTotal = () => {
    if(list.length !== 0)
      return list.reduce((acc, item) => acc + (item.tipo === 'Entrada' ? item.valor : item.valor * (-1)), 0)
    else
      return 0
  }

  return(
    <>
    <Header setIsLoggedIn={setIsLoggedIn}/>
    <main>
      <section className='formulario'>
        <Formulario addList={addList} list={list} setListBackup={setListBackup} listBackup={listBackup}/>
        <FormFooter valorTotal={valorTotal} />
      </section>
      <List list={list} filterList={filterList} filterByType={filterByType} />
    </main>
    </>
  )
}

export default MainPage