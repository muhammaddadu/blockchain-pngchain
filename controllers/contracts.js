/**
 * 
 */
module.exports = {
	path: '/contracts.js',
	method: 'get',
	fn: function (req, resp, next) {
        let CurriculumContract = req.models.CurriculumContract;
        let LearnerContract = req.models.LearnerContract;
        let PNGToken = req.models.PNGToken;

		resp.set('Content-Type', 'text/javascript');
        resp.send(`
            window.curriculumContractCompiled = ${JSON.stringify(CurriculumContract.contractCompiled)};
            window.learnerContractCompiled = ${JSON.stringify(LearnerContract.contractCompiled)};
            window.pNGTokenCompiled = ${JSON.stringify(PNGToken.contractCompiled)};

            loadContracts() {
                window.CurriculumContract = web3.eth.contract(JSON.parse(curriculumContractCompiled.interface));
                window.LearnerContract = web3.eth.contract(JSON.parse(learnerContractCompiled.interface));
                window.PNGToken = web3.eth.contract(JSON.parse(pNGTokenCompiled.interface));
            }

            if (window.web3) {
                loadContracts();
            } else {
                setTimeout(loadContracts, 0);
            }
        `);
	}
};
