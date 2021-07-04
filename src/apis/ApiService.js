import { HISTORY } from '../constants'

export default class ApiService {
    static getTable = (name) => {

        return new Promise((resolve) => {
            resolve(HISTORY)
        })
    }
}