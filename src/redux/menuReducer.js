const initialStore = {
    navBarName: 'Тестовое задание',
    tableData: [],
    analyticsList: [
        "Журнал останова оборудования",
        "Наработка компрессоров",
        "Наработка газопроводов",
        "Коэффициент эксплуатации",
        "История",]

}

const menuReducer = (state = initialStore, action) => {

    switch (action.type) {
        case 'SET-NAV-NAME':
            return {
                ...state,
                navBarName: action.name
            }

        default:
            return state
    }
}

export const setNavName = (name) => {
    return { type: 'SET-NAV-NAME', name }
}


export default menuReducer