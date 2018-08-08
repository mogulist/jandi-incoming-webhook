const axios = require('axios')

class Jandi {
    constructor(webHook) {
        this.webHook = webHook;
    }

    send(mesg, callback) {
        axios.post(this.webHook, {
            Accept: 'application/vnd.tosslab.jandi-v2+json', 
            'Content-Type': 'application/json',  
            body: mesg
        })
        .then ( (res) => {
            callback(null, res)
        })
        .catch ( (err) => {
            callback(err)
        })
    }
}

module.exports = Jandi;