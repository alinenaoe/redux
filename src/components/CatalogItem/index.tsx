import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import {ProductContainer, ProductTitle, BuyProduct, NoStockAlert } from './styles';

interface CatalogItemProps {
    product: IProduct;
}
 
const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id);
    })

    const handleAddProductToCart = useCallback(
        () => {
            dispatch(addProductToCartRequest(product))
        },
        [dispatch, product],
    )

    return(
        <ProductContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <span>{product.price}</span>
            <BuyProduct 
                type="button"
                onClick={handleAddProductToCart}
            >
                Buy
            </BuyProduct>
            { hasFailedStockCheck && <NoStockAlert>Sorry, no products available</NoStockAlert> }
        </ProductContainer>
    )
    
}

export default CatalogItem;