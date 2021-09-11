import { apiAuth } from '../../services/apis'
import BaseRequest from '../../helpers/baseRequest'

class PeopleRequest extends BaseRequest {

    apiLib = apiAuth

    root = "/people"

    index({ page = 1, query_search = "" }, config = {}) {
        let queryString = `page=${page}&query_search=${query_search}`;
        return this.requestGet(`?${queryString}`, config)
    }

}

export default PeopleRequest;