import React from 'react';
import useItems from '../../hooks/useItems';
// import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems();

    return (
        <div>
            {/* <div>
            {items.map(item => <Item
                    key={item.id}
                    item={item}
                ></Item>)} 
            </div> */}
            {
                items.map(item => <div
                    key={item.id}
                    item={item}>

                    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://i.ibb.co/JpJCMQy/2-1-1.png" className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">{item.name}</h3>
                                        <h4 className="card-text">Price: $ {item.price}</h4>
                                        <p><span className='fw-bold'>Available Quantity: </span> {item.quantity} <br /> <span className='fw-bold'>Supplier: </span> {item.supplier}</p>
                                        <p>                                         
                                            <span className='fw-bold'>Engine: </span> {item.engine} .
                                            <span className='fw-bold'>Trim: </span> {item.trim} .
                                            <span className='fw-bold'>Transmission Type: </span> {item.type} .
                                            <span className='fw-bold'>Transmission: </span> {item.transmission}
                                        </p>
                                        
                                    </div>
                                    <div className="card-footer p-0">
                                        <button className='btn w-100 btn-primary'>Update</button>
                                    </div>
                            </div>
                        </div>
                        
                    </div>




                    {/* <h2>Name: {item.name}</h2> */}
                </div>)
            }

        </div>
    );
};

export default Items;