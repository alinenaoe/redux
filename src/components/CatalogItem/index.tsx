import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import {ProductContainer, ProductTitle, BuyProduct} from './styles';

interface CatalogItemProps {
    product: IProduct;
}
 
const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddProductToCart = useCallback(
        () => {
            dispatch(addProductToCart(product))
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
        </ProductContainer>
    )
    
}

export default CatalogItem;