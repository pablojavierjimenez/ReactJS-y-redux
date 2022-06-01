import React, { Component } from 'react';

const styles = {
    container: {
        width: "400px",
        backgroundColor:"#f00"
    }
}
class CustomInput extends Component {
    state = {  } 
    render() {
        // console.log(this.props);
        const {input, meta,label,  ...props} = this.props;
        return (
            <div>
                {label && <label>{label}</label>}
                <input {...input} {...props}/>
                {meta.submitFailed && meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
        );
    }
}
 
export default CustomInput;