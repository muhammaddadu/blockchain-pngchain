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
            <div className="text-center">
                <h5>&pound; {this.props.GBP_VALUE}</h5>
                <h5>Q {this.props.QOIN_VALUE}</h5>
                <h4>{this.props.currencyName}</h4>
                {this.props.technologyName?(<small>({this.props.technologyName})</small>): ''}
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
            {
                currencyName: 'Ether',
                GBP_VALUE: '999',
                QOIN_VALUE: '3',
                technologyName: 'Etherium'
            },
            {
                currencyName: 'Bitcoin',
                GBP_VALUE: '999',
                QOIN_VALUE: '3'
            },
            {
                currencyName: 'Litecoin',
                GBP_VALUE: '999',
                QOIN_VALUE: '3'
            },
            {
                currencyName: 'Ada',
                GBP_VALUE: '999',
                QOIN_VALUE: '3',
                technologyName: 'Cardano'
            },
            {
                currencyName: 'Qoin',
                GBP_VALUE: '999',
                QOIN_VALUE: '3',
                technologyName: 'QoinBank'
            }
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
