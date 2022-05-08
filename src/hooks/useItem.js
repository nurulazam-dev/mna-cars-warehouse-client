import { useEffect, useState } from 'react';

const useItem = (itemId) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])
    return [item]
};

export default useItem;