import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Items from '../Items/Items';

const InventoryItems = () => {
    
    return (
        <div className='my-4'>
            <h2 className='text-center text-success'>Inventory Items</h2>
            {/* <Item/> */}
            <Items />
            <div className='text-center'>
            <button as={Link} to="" className='btn btn-success text-white fs-5'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;