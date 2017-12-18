import React from 'react';
import {connect} from 'react-redux';

import Title from '../Common/Title';
import SaleInput from '../Common/SaleInput';

const MyTag = props => (
    <div>
        <Title text={props.tittle} />
        <SaleInput />
    </div>
);


function mapStateToProps(state) {
    return  {
        tittle: state.tittle
    };
}

export default connect(mapStateToProps)(MyTag);




