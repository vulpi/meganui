import React, {Component} from 'react';
import './index.scss';

export class Column extends Component {

    render() {
        return (
            <div className="column">
                {this.props.children}
            </div>
        );
    }

}