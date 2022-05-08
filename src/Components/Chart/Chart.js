import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useItems from '../../hooks/useItems';

const Chart = () => {
    const [items]=useItems()
    return (
        <div className='w-50 rounded mx-auto bg-light py-4'>
            <div className='w-50 mx-auto text-center'>
            <h2>Items Stock</h2>
            {<LineChart width={400} height={300} data={items}>
                <Line dataKey={'price'}></Line>
                <XAxis dataKey={'quantity'}></XAxis>
                <Tooltip />
                <YAxis />
            </LineChart>}
                <p className='text-danger'>Available Quantity</p>
        </div>
                <h5 className='mx-5'>The LineChart below shows available quantity or stock and per stock price in MNA Cars Warehouse</h5>
        </div>
    );
};

export default Chart;