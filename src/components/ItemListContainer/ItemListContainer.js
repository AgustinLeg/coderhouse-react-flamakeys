import React,{useState} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titulo}) => {
    const [items, setItems] = useState([])

    
    return (
        <section className="container mt-5">
            <h2 className="text-center my-5">{titulo}</h2>
            <div className="productos">
                <div className="item-list">
                    <ItemList items={items} setItems={setItems}/>
                </div>
            </div>
        </section>
     );
}
 
export default ItemListContainer;