import { connect } from 'react-redux';

import Home from './Home';


function mapStateToProps(state) {
    console.log(state)
    return {
    };
}

export default connect(mapStateToProps, {})(Home);