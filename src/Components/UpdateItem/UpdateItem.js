import React from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';

const UpdateItem = () => {
    const {itemId} = useParams();
    const [item]=useItem(itemId)
    return (
        <div>
            <h2>Update Item</h2>
            <h2> {item.name} </h2>
        </div>
    );
};

export default UpdateItem;