
import urlJoin from 'url-join'

class BaseRequest {

    apiLib = {
        post: () => null,
        get: () => null,
    }

    root = "/"

    codeErrors = {};

    defaultMessage = "";

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
        if (Object.keys(response).length) {
            let message = this.codeErrors[response.data.code] || this.defaultMessage
            objectError.message = message;
            objectError.code = response.data.code || 'ERR';
            objectError.errors = response.data.errors || {};
            return objectError;
        }
    
        objectError.message = this.defaultMessage;
        objectError.errors = {}
        return err
    }

}

export default BaseRequest;