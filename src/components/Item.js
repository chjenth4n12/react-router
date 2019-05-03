import React from 'react';

var Item = ({ match }) => {

    var name = match.params.name;
    
    return (
        <div>
            <h1>Chi Tiết Sản Phẩm: { name }</h1>
        </div>
    );
}

export default Item;