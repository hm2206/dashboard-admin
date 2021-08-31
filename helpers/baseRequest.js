import urlJoin from 'url-join'

class BaseRequest {

    apiLib = {
        post: () => null,
        get: () => null,
    }

    root = "/"

    translate = null

    codeErrors = {};

    defaultErrors = {
        ERR_CONNECTION_REFUSED: "errors.ERR_CONNECTION_REFUSED"
    }

    defaultMessage = "errors.DEFAULT";

    constructor(translate = null) {
        this.translate = translate
    }

    requestGet(url = '', config = {}) {
        return new Promise(async (resolver, reject) => {
            await this.apiLib.get(urlJoin(this.root, url), config)
            .then(res => resolver(res))
            .catch(err => reject(this.onError(err))) 
        })
    }

    requestPost(url = '', data = {}, config = {}) {
        return new Promise(async (resolver, reject) => {
            await this.apiLib.post(urlJoin(this.root, url), data, config)
            .then(res => resolver(res))
            .catch(err => reject(this.onError(err))) 
        })
    }

    onError(err) {
        let response = err.response || {};
        let objectError = {};
        let codeErrors = Object.assign(this.defaultErrors, this.codeErrors)
        if (Object.keys(response).length) {
            let tmpMessage = codeErrors[response.data.code] || this.defaultMessage
            let message = typeof this.translate == 'function' ? this.translate(tmpMessage) : tmpMessage
            objectError.message = message;
            objectError.code = response.data.code || 'ERR';
            objectError.errors = response.data.errors || {};
            return objectError;
        }
        
        objectError.errors = {}
        objectError.message = typeof this.translate == 'function' 
            ?   this.translate(this.defaultMessage) 
            :   this.defaultMessage;

        return objectError
    }

}

export default BaseRequest;