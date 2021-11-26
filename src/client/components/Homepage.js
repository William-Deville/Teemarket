import React,{useEffect, useState} from "react";
import axios from "axios";

export default function Homepage(setPage){

    const [products, setProducts] = useState([])

    useEffect(() => {
        const axios = require('axios');
        let data = JSON.stringify({
            "email": "coquinou@example.com",
            "password": "test33"
        });

        let config = {
            method: 'get',
            url: 'http://localhost/api/poster/',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then((response) => {
                setProducts(response.data);
                //console.log(response.data.length);
        })
        .catch((error) => {
            console.log(error);
        });
    })
    //console.log(products);
    return(
        <div className="homepage_title">
            <h1>OUR PRODUCTS</h1>
            {Object.values(products).map((product) => {
                return(<p>{product.picture}</p>);
})}
        </div>
    )
}