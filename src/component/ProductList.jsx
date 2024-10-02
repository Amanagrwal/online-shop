import React from 'react'
import { useFiltercontext } from '../Context/Filter_context'
import GridView from './Gridview';
import Listview from './Listview';

function ProductList() {
 
  const {filter_product , grid_view } = useFiltercontext();
  
  if( grid_view === true){
    return <GridView  products={filter_product} />
  }

  if(grid_view  === false){
    return <Listview products={filter_product} />
  }
}

export default ProductList