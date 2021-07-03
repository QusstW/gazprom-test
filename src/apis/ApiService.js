import { HISTORY } from '../constants'

export default class ApiService {
    static getTable = (name) => {
        if (name === "История")
            return new Promise((resolve) => {
                resolve(HISTORY)
            })
    }
}