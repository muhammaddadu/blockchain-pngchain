/**
 * Jumbotron Component
 */
import React from 'react';

export class CurrencyPriceItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="">
                Hello World
            </div>
        )
    }
}

export class CurrencyPrices extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let items = [
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1}
        ];

        return (
            <div className="row">
            {
                items.map((item, i) => (
                    <div className="col" key={i}>
                        <CurrencyPriceItem {...item}></CurrencyPriceItem>
                    </div>
                ))
            }
            </div>
        );
    }
};

export default CurrencyPrices;
