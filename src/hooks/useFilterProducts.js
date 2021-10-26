import {  useEffect, useState } from "react";

const useFilterProducts = (items,nombre) =>{
    const [itemsfilter, setItemsFilter] = useState([]);

    useEffect(() => {
        let filter;
        if(items.length > 0){
            switch (nombre) {
                case "teclados":
                filter = items.filter((item) => item.categoria === nombre);
                setItemsFilter(filter);
                break;
                case "mouse":
                filter = items.filter((item) => item.categoria === nombre);
                setItemsFilter(filter);
                break;
                default:
                setItemsFilter(items);
                break;
            }
        }
    }, [nombre,items])
      
      
    return {itemsfilter}
}

export default useFilterProducts;