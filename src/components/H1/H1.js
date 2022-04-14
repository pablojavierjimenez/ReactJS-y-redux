import React, {Component} from "react";
const styles = {
    fontSize: '1.5rem'
};
export default class H1 extends Component {
    render() {
        return (
            <h1 {...this.props} style={styles}/>
        );
    }
}
