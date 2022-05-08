import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {itemId} = useParams();
    // const [item]=useItem(itemId)

    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://salty-spire-70121.herokuapp.com/item/update/${itemId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-primary'>Update Item {item.name}</h2>
        </div>
    );
};

export default UpdateItem;