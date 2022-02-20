import './styles.css'
import Button from '../Button'

const Card = ({itemList, filterList, isEmpty = true}) => {
  return (
    isEmpty === false ?
      <div className={itemList.tipo === 'Entrada' ? 'card entrada' : 'card saida'}>
        <div className='card-tipo'>
          <h3 className='card-tipo-titulo'>{itemList.descricao}</h3>
          <span className ='card-tipo-operacao'>{itemList.tipo}</span>
        </div>
        <div className='card-info'>
            <span className='card-info-preco'>R$ {itemList.valor}</span>
            <Button className={'card-button'} isCard={true} id={itemList.id} onClick={filterList}/>
        </div>
      </div>
    :
      <div className={'card'}>
        <div className='card-tipo vazio'>
          <div className='card-tipo-titulo titulo-vazio vazio'></div>
          <span className ='card-tipo-operacao vazio'></span>
        </div>
      </div>
    
    )
}

export default Card