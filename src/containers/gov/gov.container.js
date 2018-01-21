import React from 'react';

import {connect} from 'react-redux';
import {showForm, govSubmitRequest, showSpinner, govDone, loadCurriculum, loadCurriculumInfo, addPNGTokens, loadLearner} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

const _ = require('lodash');

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
        this.props.onLoadLearner();
    }

    selectRow(evt) {
        let item = JSON.parse(evt.target.getAttribute('item'));
        this.props.onSelectRow(item);
    }

    addPNGTokens(evt) {
        let item = JSON.parse(evt.target.getAttribute('item'));
        let tokenValue = parseInt(document.getElementById('tokenValue').value, 10);

        _.extend(item, {amount: tokenValue});
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
                                <input type="text" onChange={this.handleInputChange('contractTitle')} defaultValue={this.state.contractTitle} id="contractTitle" placeholder="'Teaching English'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractDescription" className="w-150">Description: </label>
                                <input type="text" onChange={this.handleInputChange('contractDescription')} defaultValue={this.state.contractDescription} id="contractDescription" placeholder="'Teaching English so they can pass the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValidate" className="w-150">How to validate: </label>
                                <input type="text" onChange={this.handleInputChange('contractValidate')} defaultValue={this.state.contractValidate} id="contractValidate" placeholder="'Passing the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueStudent" className="w-150">Value Student: </label>
                                <input type="number" onChange={this.handleInputChange('contractValueStudent')} defaultValue={this.state.contractValueStudent} id="contractValueStudent" placeholder="'Student earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueTeacher" className="w-150">Value Teacher: </label>
                                <input type="number" onChange={this.handleInputChange('contractValueTeacher')} defaultValue={this.state.contractValueTeacher} id="contractValueTeacher" placeholder="'Teacher earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Submit" onClick={this.handleSubmitClick.bind(this)}/>
                            </li>
                        </ul>
                    </form>
                </div>
            );
        } else {
            let accountTokens = 200000;

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
                                        <ul className="contratInfoContainer m-b-4">
                                            <li className="contratInfoItem text-center">
                                                <strong>{this.props.gov.curriculumInfo.title}</strong>
                                            </li>
                                            <li className="contratInfoItem">
                                                <strong>Description</strong>: {this.props.gov.curriculumInfo.description}
                                            </li>
                                            <li className="contratInfoItem">
                                                <strong>Validation method</strong>: {this.props.gov.curriculumInfo.validationMethod}
                                            </li>
                                            <li className="contratInfoItem row">
                                                <div className="col-sm-6 p-0">
                                                    <strong>Teacher reward</strong>: {this.props.gov.curriculumInfo.teacherReward}
                                                </div>
                                                <div className="col-sm-6 p-0">
                                                    <strong>Student reward</strong>: {this.props.gov.curriculumInfo.studentReward}
                                                </div>
                                            </li>
                                            <li className="contratInfoItem row">
                                                <div className="col-sm-6 p-0">
                                                    <strong>Budget</strong>: {parseInt(this.props.gov.curriculumInfo.budget, 10)} PNG
                                                </div>
                                                <div className="col-sm-6 p-0">
                                                    <strong>Budget used</strong>: {parseInt(this.props.gov.curriculumInfo.budgetUsed, 10)} PNG
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="row justify-content-between m-0">
                                            <div className="col-sm-6 p-0">
                                                <strong>Account Tokens</strong>
                                            </div>
                                            <div className="col-sm-6 p-0 text-right m-b-2">
                                                {accountTokens}
                                            </div>
                                        </div>
                                        <div className="row justify-content-between m-0">
                                            <input type="number" id="tokenValue" step="1" min="0" className="col-sm-4" defaultValue="1"/>
                                            <button item={JSON.stringify(this.props.gov.curriculumInfo)} onClick={this.addPNGTokens.bind(this)} type="button" className="btn btn-success col-sm-6">+ PNGTokens (Budget)</button>
                                        </div>
                                    </div>
                                ) : (
                                    <h4>Please select a curriculum from the left to see more information</h4>
                                )}
                            </div>
                            <br />
                        </div>
                        <div className="row justify-content-end hidden">
                        {this.props.gov.curriculumInfo && this.props.gov.learner && this.props.gov.learner.filter((item) => item.contractAddress === this.props.gov.curriculumInfo.contractAddress).map((item, key) => (
                            <div key={key} className="col-sm-8 formContainer">
                                <pre>{JSON.stringify(item, null, '\t')}</pre>
                            </div>
                        ))}
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
        onAddPNGTokens: (...args) => dispatch(addPNGTokens(...args)),
        onLoadLearner: (...args) => dispatch(loadLearner(...args))
    };
};

export const GovPageContainer = connect(stateToProps, dispatchToProps)(GovPage);

export default GovPageContainer;

