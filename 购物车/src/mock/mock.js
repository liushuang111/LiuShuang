import MockJson from './mock.json'

let mock = {
    '/api/list'(){
        return MockJson
    }
}

export default mock