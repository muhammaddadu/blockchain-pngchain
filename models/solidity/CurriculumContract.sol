pragma solidity ^0.4.0;

import 'PNGToken.sol';
import 'LearnerContract.sol';

contract CurriculumContract {
    PNGToken pNGToken;

    string public title;
    string public description;
    
    string public validationMethod;
    
    address public maintainer;
    uint public budget;
    uint public budgetUsed;

    struct Reward {
        uint student;
        uint teacher;
    }

    Reward reward;

    LearnerContract[] learnerContracts;
    address[] certificateAuthorities;
    
    mapping(address=>uint256) public info;
    
    function CurriculumContract(
        PNGToken _pNGToken,
        string _title,
        string _description,
        string _validationMethod,
        uint _teacherReward,
        uint _studentReward
    ) {
        pNGToken = _pNGToken;
        maintainer = msg.sender;
        title = _title;
        description = _description;
        validationMethod = _validationMethod;
        budget = 0;
        reward.teacher = _teacherReward;
        reward.student = _studentReward;
    }

    function receiveApproval(
        address _sender,
        uint256 _value,
        PNGToken _pNGToken,
        bytes _extraData
    ) {
        require(_pNGToken == pNGToken);
        require(pNGToken.transferFrom(_sender, address(this), 1));
        uint256 payloadSize;
        uint256 payload;

        assembly {
            payloadSize := mload(_extraData)
            payload := mload(add(_extraData, 0x20))
        }

        payload = payload >> 8*(32 - payloadSize);
        info[_sender] = payload;
        budget += _value;
    }

    function createLearnerContract(
        address _teacher,
        address _student
    ) {
        LearnerContract newLearnerContract = new LearnerContract(address(this), _teacher, _student);
        learnerContracts.push(newLearnerContract);
        
        budgetUsed += reward.student + reward.teacher;

        //TODO:- send money to LearnerContract
    }
}
