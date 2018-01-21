import 'PNGToken.sol';

contract LearnerContract {
    PNGToken pNGToken;
    uint public budget;

    address public curriculumContract;
    address public teacher;
    address public student;
    bool public passed;
    bool public hasBeenTested;
    
    mapping(address=>uint256) public info;

    function LearnerContract(
        PNGToken _pNGToken,
        address _curriculumContract,
        address _teacher,
        address _student
    ) {
        pNGToken = _pNGToken;
        curriculumContract = _curriculumContract;
        teacher = _teacher;
        student = _student;
        passed = false;
        hasBeenTested = false;
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
    
    function approve() {
        // TODO: - Release the moneyz
        passed = true;
        hasBeenTested = true;
    }
    
    function fail() {
        passed = false;
        hasBeenTested = true;
    }
}
