import ApiService from '../apis/ApiService'

const initialStore = {
    navBarName: 'Тестовое задание',
    tableData: [],
    categories: null,
    analyticsList: [
        "Журнал останова оборудования",
        "Наработка компрессоров",
        "Наработка газопроводов",
        "Коэффициент эксплуатации",
        "История",],
    tableIsReady: false

}

const menuReducer = (state = initialStore, action) => {

    switch (action.type) {
        case 'SET-TABLE':
            return {
                ...state,
                navBarName: action.name,
                tableData: action.tableData.bodyTable,
                categories: action.tableData.categories,
                tableIsReady: true
            }

        default:
            return state
    }
}



export const setTableData = (tableData, name) => {
    return { type: 'SET-TABLE', tableData, name }
}

export const getTableData = (name) => (dispatch) => {
    ApiService.getTable(name).then((response) => {
        dispatch(setTableData(response, name))
    })
}


export default menuReducer