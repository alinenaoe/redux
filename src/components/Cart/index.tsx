import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

const Cart: React.FC = () => {
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

    console.log(cart)

    return(
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map( item => (
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{(item.quantity * item.product.price).toFixed(2)}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Cart;