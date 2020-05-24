import React from "react";

import './collection.styles.scss'
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";


const CollectionPage = ({callection}) => (
    <div className="collection-page">
        <h2>some</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    callection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
