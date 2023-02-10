import "./Styles/ItemListContainer.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <section className="item-list-container header">
            <h2 className="item-list-container-title">{greeting}</h2>
        </section>
    )
}

export default ItemListContainer