import React from 'react';
import useItems from '../../hooks/useItems';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';

const Items = () => {
    const [items] = useItems();
    const { itemId } = useParams()
    const [item]=useItem(itemId)


    return (
        <div>
            {item._id}
            {/* <div>
                {items.map(item => <Item
                    key={item.id}
                    item={item}
                ></Item>)}
            </div> */}

            {/* <div>
                {items.map(item => <ManageInventories
                    key={item.id}
                    item={item}
                ></ManageInventories>)}
            </div> */}

            {
                items.slice(0, 6).map(item => <div
                    key={item._id}
                    item={item}>

                    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                        <div className="col">
                            <div className="card h-100">
                                <img src={item.img} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">{item.name}</h3>
                                    <h4 className="card-text">Price: $ {item.price}</h4>
                                    <p><span className='fw-bold'>Available Quantity: </span> {item.quantity} <br /> <span className='fw-bold'>Supplier: </span> {item.supplier}</p>
                                    <p> {item.description} </p>

                                </div>
                                <div className="card-footer p-0">
                                    <Link to={`/update/${itemId}`}>
                                        <button className='btn w-100 btn-primary'>Update</button>
                                    </Link>
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