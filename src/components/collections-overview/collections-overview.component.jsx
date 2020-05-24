import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.components";
import {selectCollections} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>{
        collections.map(({id, ...otherCollectonProps}) => (
            <CollectionPreview key={id} {...otherCollectonProps} />
        ))
    }</div>
)


const mapStateToProps =createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);
