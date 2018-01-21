import React from 'react';

export class VoiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    // handleClick = (e) => {
    //     let productRangeWrapper = document.getElementsByClassName('rangeShowing');
    //     e.preventDefault();

    //     if (productRangeWrapper.length) {
    //         if (parseInt(productRangeWrapper[0].id.split('_')[1], 10) !== props.promo.id) {
    //             let elementToRemove = document.getElementById('itemId_' + productRangeWrapper[0].id.split('_')[1]);
    //             let carouselContainer = document.getElementById('productRange_' + productRangeWrapper[0].id.split('_')[1]);

    //             elementToRemove.style.removeProperty('height');
    //             carouselContainer.classList.add('display-none');
    //             props.onClickProductRange(props.promo);
    //         } else {
    //             props.onReClickProductRange(props.promo);
    //         }
    //     } else {
    //         // let carouselContainer = document.getElementById(productRangeId);            

    //         // if (carouselContainer.classList.contains('display-none')) {
    //         //     carouselContainer.classList.remove('display-none');
    //         // }

    //         props.onClickProductRange(props.promo);
    //     }
    // }
    handleClick() {
        let voiceFormInputValue = document.getElementsByClassName('VoiceFormInput')[0].value;
        let validateInput = false;

        if (voiceFormInputValue) {
            validateInput = true;
        }

        this.props.onReClickProductRange(voiceFormInputValue, validateInput);
    }

    render() {
        return (
            <div className="VoiceFormContainer">
                <div className="VoiceFormArea">
                    <div>
                        <input type="text"
                               className="VoiceFormInput"
                               placeholder="Enter voice hash" />
                    </div>
                    <div>
                        <input type="submit"
                               className="VoiceFormSubmit"
                               value="Validate audio"
                               onClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }
};

export default VoiceForm;
