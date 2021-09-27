import { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkIfLoggedIn } from '../../store/actions';

const AuthLoading = (props) => {
    useEffect(() => {
        props.checkIfLoggedIn();
    }, []);

    return null;
};

export default connect(null, {
    checkIfLoggedIn
})(AuthLoading);
