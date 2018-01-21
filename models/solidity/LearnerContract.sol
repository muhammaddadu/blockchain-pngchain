contract LearnerContract {
    address public curriculumContract;
    address public teacher;
    address public student;
    bool public passed;
    bool public hasBeenTested;

    function LearnerContract(
        address _curriculumContract,
        address _teacher,
        address _student
    ) {
        curriculumContract = _curriculumContract;
        teacher = _teacher;
        student = _student;
        passed = false;
        hasBeenTested = false;
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
