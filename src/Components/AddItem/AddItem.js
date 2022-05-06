import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const handleOnSubmit = data => {
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        }

    return (
        <div className='w-25 mx-auto border my-5 p-2 rounded bg-white pb-3 shadow'>
            <h2 className='text-primary text-center my-3'>Add new item</h2>
            <form className='d-flex flex-column w-75 mx-auto' onSubmit={handleSubmit(handleOnSubmit)}>
                <input className='mb-3 fs-5' placeholder='Name' {...register("name", { required: true})} />
                <input className='mb-3 fs-5' placeholder='Supplier' {...register("name")} />
                <input className='mb-3 fs-5' placeholder='Price' type="number" {...register("price",{ required: true})} />
                <textarea className='mb-3' placeholder='Description: Engine, Trim, Transmission Type, Transmission' {...register("description")} />
                <input className='mb-3 fs-5' placeholder='Image URL' type="text" {...register("img")} />
                <input className='bg-success text-white border-0 rounded py-1 fs-5 mb-4' type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;