import React from 'react';
import {connect} from 'react-redux';

import Tittle from '../Common/Tittle';
import SaleInput from '../Common/SaleInput';

const MyTag = props => (
    <div>
        <Tittle text={props.tittle.sale} />
        <SaleInput />
    </div>
);


function mapStateToProps(state) {
    return  {
        tittle: {
            sale: '销售录入'
        }
    };
}

export default connect(mapStateToProps)(MyTag);




