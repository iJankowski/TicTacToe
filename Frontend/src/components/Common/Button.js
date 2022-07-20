import {Component} from "react";

class Button extends Component {
    render() {
        return (
            <div className="navBarItemSpacing buttonHover buttonSchema" onClick={this.props.onClick}>{this.props.text}</div>
        )
    }
}

export default Button;