import React from "react"
import data from './data';
import {Link} from 'react-router-dom';

function Products() {
    const allData = data.map(item => (
        <div key={item.id} className="items">
            <h2>
                <Link to={`/products/${item.id}`}>{item.name} - Price: ${item.price}</Link>
            </h2>
        </div>
    ))

    return (
        <div className="products">
            <h1>Products Page</h1>
            {allData}
        </div>
    )
}

export default Products