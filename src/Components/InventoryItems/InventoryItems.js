import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Item from '../Item/Item';
import Items from '../Items/Items';

const InventoryItems = () => {
    const navigate=useNavigate();
    const navigateToManage =()=>{
        navigate('manage')
    }
    
    return (
        <div className='my-4'>
            <h2 className='text-center text-success'>Inventory Items</h2>
            {/* <Item/> */}
            <Items />
            <div className='text-center'>
            <button onClick={()=>navigate('/manage')} className='btn btn-success text-white fs-5'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;