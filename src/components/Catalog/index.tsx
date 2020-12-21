import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { addProductToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import { AppContainer, PageTitle, ProductContainer, ProductTitle, BuyProduct } from './styles';


const Catalog: React.FC = () => {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data)
        })
    }, [])

    const handleAddProductToCart = useCallback(
        (product: IProduct) => {
            dispatch(addProductToCart(product))
        },
        [dispatch],
    )

    return (
        <AppContainer>
            <PageTitle>Catalog</PageTitle>
            {catalog.map(product => (
                <ProductContainer key={product.id}>
                    <ProductTitle>{product.title}</ProductTitle>
                    <span>{product.price}</span>
                    <BuyProduct 
                        type="button"
                        onClick={() => handleAddProductToCart(product)}
                    >
                        Buy
                    </BuyProduct>
                </ProductContainer>
            ))}
        </AppContainer>
    )
}

export default Catalog;