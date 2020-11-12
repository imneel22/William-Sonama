import React from "react";

import './App.css';
import Modal from './Modal';

const Imageslist = () => {

    const data = require('./data.json');
    return data.groups.map((item, index) => {

        const { name, hero, images } = item
        const price = item.priceRange ?
            `$${item.priceRange.selling.low}` + `-` + `$${item.priceRange.selling.high}`
            : `$${item.price.regular}`

        return (
         

                <Modal
                    images={images}
                    key={index}
                    name={name}
                    hero={hero}
                    price={price}

                />
           
        )
    })
}

export default Imageslist;

