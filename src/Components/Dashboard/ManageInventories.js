import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageInventories = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const handleDelete = id => {
        const remove = window.confirm(`Are you Confirm to Delete this item?`)
        if (remove) {
            const url = `https://salty-spire-70121.herokuapp.com/item/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest)
                })
        }
    }

    return (
        <div className='my-4'>
            <h2 className='text-center text-primary'>Manage Inventories</h2>
            <div className="text-center container">
                <table className='table table-bordered table-striped shadow'>
                    <thead>
                        <tr>
                            <th scope="col">Item ID</th>
                            <th scope="col">Car's Name / Model</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stocks</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr
                                key={item._id}
                                item={item}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td><img style={{ height: '35px', width: '70px' }} src={item.img} alt="" /></td>
                                <td>$ {item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplier}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete
                                        <FontAwesomeIcon className='mx-2' icon={faTrashAlt}></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/add')} className='btn btn-success text-white fs-5'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageInventories;