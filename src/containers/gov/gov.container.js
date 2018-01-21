import React from 'react';

import {connect} from 'react-redux';
import {showForm, govSubmitRequest, showSpinner, govDone, loadCurriculum, loadCurriculumInfo, addPNGTokens} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class GovPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            contractTitle: 'Beginer English',
            contractDescription: 'Teach students how to read english',
            contractValidate: 'exam',
            contractValueStudent: 1,
            contractValueTeacher: 9,
        };
    }

    componentWillMount() {
        this.props.onLoadCurriculum();
    }

    selectRow(evt) {
        let item = JSON.parse(evt.target.getAttribute('item'));
        this.props.onSelectRow(item);
    }

    addPNGTokens(evt) {
        let item = JSON.parse(evt.target.getAttribute('item'));
        this.props.onAddPNGTokens(item);
    }

    handleClick() {
        this.props.onShowForm();
    }
    
    handleSubmitClick() {
        this.props.onSubmitRequest(this.state);
    }

    handleInputChange(type) {
        return (evt) => {
            this.state[type] = evt.target.value;
        }
    }

    render() {
        if (this.props.gov.done) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <div className="w-50 formContainer text-center">
                        Teaching contract created
                    </div>
                </div>
            );
        }
        else if (this.props.gov.spinner) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <div className="w-50 formContainer">
                        <div className="spinner"></div>
                    </div>
                </div>
            );
        }
        else if (this.props.gov.form) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <form className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                <label htmlFor="contractTitle" className="w-150">Title: </label>
                                <input type="text" onChange={this.handleInputChange('contractTitle')} value={this.state.contractTitle} id="contractTitle" placeholder="'Teaching English'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractDescription" className="w-150">Description: </label>
                                <input type="text" onChange={this.handleInputChange('contractDescription')} value={this.state.contractDescription} id="contractDescription" placeholder="'Teaching English so they can pass the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValidate" className="w-150">How to validate: </label>
                                <input type="text" onChange={this.handleInputChange('contractValidate')} value={this.state.contractValidate} id="contractValidate" placeholder="'Passing the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueStudent" className="w-150">Value Student: </label>
                                <input type="number" onChange={this.handleInputChange('contractValueStudent')} value={this.state.contractValueStudent} id="contractValueStudent" placeholder="'Student earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueTeacher" className="w-150">Value Teacher: </label>
                                <input type="number" onChange={this.handleInputChange('contractValueTeacher')} value={this.state.contractValueTeacher} id="contractValueTeacher" placeholder="'Teacher earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Submit" onClick={this.handleSubmitClick.bind(this)}/>
                            </li>
                        </ul>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="list-group">
                                <button className="list-group-item list-group-item-action" onClick={this.handleClick.bind(this)}>Add new curriculum</button>
                                {this.props.gov.curriculum && this.props.gov.curriculum.map((item, key) => (
                                    <button key={key} item={JSON.stringify(item)} onClick={this.selectRow.bind(this)} className="list-group-item list-group-item-action">{item.title}</button>
                                ))}
                                </div>
                            </div>
                            <div className="col-sm-8 formContainer">
                                {this.props.gov.curriculumInfo ? (
                                    <div>
                                        <pre>{JSON.stringify(this.props.gov.curriculumInfo, null, '\t')}</pre>
                                        <button item={JSON.stringify(this.props.gov.curriculumInfo)} onClick={this.addPNGTokens.bind(this)} type="button" className="btn btn-success">+ PNGTokens (Budget)</button>
                                    </div>
                                ) : (
                                    <h4>Please select a curriculum from the left to see more information</h4>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const stateToProps = (state) => {
    return {
        gov: state.gov || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onShowForm: (...args) => dispatch(showForm(...args)),
        onSubmitRequest: (...args) => dispatch(govSubmitRequest(...args)),
        onShowSpinner: (...args) => dispatch(showSpinner(...args)),
        onGovDone: (...args) => dispatch(govDone(...args)),
        onLoadCurriculum: (...args) => dispatch(loadCurriculum(...args)),
        onSelectRow: (...args) => dispatch(loadCurriculumInfo(...args)),
        onAddPNGTokens: (...args) => dispatch(addPNGTokens(...args))
    };
};

export const GovPageContainer = connect(stateToProps, dispatchToProps)(GovPage);

export default GovPageContainer;

