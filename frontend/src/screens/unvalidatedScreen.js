import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UnvalidatedScreen = (props) => {

    const type = props.type;
    const user_state = useSelector(state => state);
    const [text, onChangeText] = useState("");
 
    return (
        <div>
            unvalidated
        </div>
    );
}

export default UnvalidatedScreen;