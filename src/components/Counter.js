import React from 'react';
import PropTypes from 'prop-types';
import { Link, routerRedux } from 'dva/router';

const Counter = ({ counter, dispatch }, context) => {
    console.log(dispatch, 'dispatch');
    return (
        <div>
            <h1>{counter.count}</h1>
            <button onClick={ () => dispatch(routerRedux.push('/')) }>routerRedux back home</button>
            <Link to='/'>Home Page</Link>
            <button onClick={ () => { context.router.history.push('/') } }>Context Go Back</button>
            <button onClick={ () => { dispatch({ type: 'counter/add' })} }>add</button>
            <button onClick={ () => { dispatch({ type: 'counter/asyncAdd' })} }>async</button>
        </div>
    );
}

// Counter.propTypes = {
//     // counter: PropTypes.object
// }
Counter.contextTypes = {
    router: PropTypes.object
}

export default Counter;