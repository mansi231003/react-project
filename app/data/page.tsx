"use client"
import { useEffect, useState } from "react";
import Loader from "@/componenets/Loader";
export default function ShowData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getData() {
        setLoading(true);
        const response = await fetch(" https://dummyjson.com/products");
        const data = await response.json();
        setLoading(false);
        const dataProducts = data.products;
        setProducts(dataProducts);
        console.log("data", dataProducts);

    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>

            <div>
                {loading ? <Loader /> :
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    {product.price>10?<td className="text-green-500">{product.price}</td>: <td>{product.price}</td>}

                                </tr>
                            ))}

                        </tbody>

                    </table>
                }
            </div>
            {/* https://dummyjson.com/products */}
        </>
    )
}