import React from 'react';

export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="NewHeaderComponent">
                Validate voice input
            </div>
        );
    }
};

export default HeaderComponent;
