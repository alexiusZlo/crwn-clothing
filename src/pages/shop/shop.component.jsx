import React from "react";
import {connect} from 'react-redux';
import SHOP_DATA from "./shop.data";

import './shop.styles.scss';
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => (
    <div className='shop-page'>{
        collections.map(({id, ...otherCollectonProps}) => (
            <CollectionPreview key={id} {...otherCollectonProps} />
        ))
    }</div>
)

const mapStateToProps =createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
