const axios = require('axios');

class Cli {
    constructor(apiHost, bearer) {
        axios.defaults.baseURL = apiHost;

        axios.defaults.headers.common.authorization = `bearer ${bearer}`;
    }

    async getUserApiList() {
        const response = await axios.get('/me/apis');
        return response.data;
    }

    async publishBlueprint(apiSubDomain, stdin) {
        await axios.post(`/blueprint/publish/${apiSubDomain}`, { code: stdin });
    }
}

module.exports = Cli;
