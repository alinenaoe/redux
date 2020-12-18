import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { IProduct } from '../../store/modules/cart/types';

import { AppContainer, PageTitle, ProductContainer, ProductTitle, BuyProduct } from './styles';


const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data)
        })
    }, [])

    return (
        <AppContainer>
            <PageTitle>Catalog</PageTitle>
            {catalog.map(product => (
                <ProductContainer key={product.id}>
                    <ProductTitle>{product.title}</ProductTitle>
                    <span>{product.price}</span>
                    <BuyProduct type="button">Buy</BuyProduct>
                </ProductContainer>
            ))}
        </AppContainer>
    )
}

export default Catalog;