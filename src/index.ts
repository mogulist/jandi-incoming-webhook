import axios from 'axios';

type Response = {
    status?: number;
    statusText?: string;
    errorCode?: string;
}

export default class Jandi {
    webHook: string = '';

    constructor(webHook: string) {
        this.webHook = webHook;
    }

    send(body: string, callback) {
        axios.post(this.webHook, {
            Accept: 'application/vnd.tosslab.jandi-v2+json', 
            'Content-Type': 'application/json',  
            body,
        })
        .then ( (res) => {
            callback(null, res)
        })
        .catch ( (err) => {
            callback(err)
        })
    }

    sendAsync = async (body: string): Promise<Response> => {
        try {
            const response = await axios.post(this.webHook, {
                Accept: 'application/vnd.tosslab.jandi-v2+json', 
                'Content-Type': 'application/json',  
                body,
            })
            return {
                status: response.status,
                statusText: response.statusText,
            }

        } catch (error) {
            return {
                errorCode: error.code ?? '',
            }
        }
    }
}
