import React from 'react';
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return ( 
        <div className="row d-flex justify-content-center align-items-center">
            {items.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
     );
}
 
export default ItemList;