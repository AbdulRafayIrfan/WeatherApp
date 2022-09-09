import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

class Error extends Component {
    errorStyle = {
        width: "360px",
        color: "red",
        textAlign: "center",
        transform: "translateY(37%)"
    }

    render() {
        const { errMsg } = this.props;
        return (
            <div style={this.errorStyle}>
                <FontAwesomeIcon icon={faExclamationTriangle} size="6x" fade fixedWidth />
                <code>{errMsg}</code>
            </div>
        );
    }
}

export default Error;