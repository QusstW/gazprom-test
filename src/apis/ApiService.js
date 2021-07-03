import HISTORY from '../constants'

export default class ApiService {
    static getData = () => {
        return new Promise((resolve) => {
            resolve(HISTORY)
        })
    }
}