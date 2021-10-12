import React from 'react';
import Item from '../Item/Item'
import Spinner from '../Stateless/Spinner/Spinner';

const ItemList = ({items}) => {
    return ( 
        <div className="row">
            {items.length === 0
                ? <Spinner />
                :items.map(item => (
                    <Item key={item.id} item={item}/>
                ))
            }
            
        </div>
     );
}
 
export default ItemList;