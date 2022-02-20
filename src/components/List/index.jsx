import './styles.css'
import Button from '../Button'
import Card from '../Card'

const List = ({list, filterList, filterByType}) => {
  return (
    <section className='list'>
      <div className='list-header'>
        <p className='list-header-text'>Resumo financeiro</p>
        <nav className='list-header-buttons'>
          <Button className={'filter-button selected todos'} onClick={(event) => filterByType('Todos')}>Todos</Button>
          <Button className={'filter-button'} onClick={(event) => filterByType('Entrada')}>Entradas</Button>
          <Button className={'filter-button'} onClick={(event) => filterByType('Saida')}>Despesas</Button>
        </nav>
      </div>
      <ul className='list-main'>
        { list.length !== 0 ?
            list.map(item => <li key={item.id}> <Card itemList={item} filterList={filterList} isEmpty={false}/> </li>)
            :
            <>
              <h2 className='h2-vazio'>Você ainda não possui nenhum lançamento</h2>
              <li key={0}> <Card isEmpty={true}/> </li>
              <li key={-1}> <Card isEmpty={true}/> </li>
              <li key={-2}> <Card isEmpty={true}/> </li>
            </>
            
        }
          </ul>
    </section>
  )
}

export default List