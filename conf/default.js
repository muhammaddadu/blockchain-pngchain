const Web3 = require('web3');

module.exports = {
    session: {
        secret: 'tyfghi7yuh8yo98u8978uh'
    },
    voiceit: {
        apiKey: '6e2338bb3e714705ba0a6f7de9dfe660'
    },
    twilio: {
        accountSid: 'AC80056c575703641905e5e8ec6b609f8d',
        authToken: 'e11d58ba8df6715347e0087aabdcbc66'
    },
	web3: {
		provider: new Web3.providers.HttpProvider('http://breaktheblock.thisplace.tech:8545'),
		etherbase: {
			address: '25b8e885c968dba4d5d0208879d583f60a5e2ded',
			password: 'password3'
		}
	},
};
