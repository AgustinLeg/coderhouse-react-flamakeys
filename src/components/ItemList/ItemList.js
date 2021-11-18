import React from 'react';
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return ( 
        <div className="row d-flex justify-content-start align-items-center w-100 ">
            {items.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
     );
}
 
export default ItemList;