import request from "./Axios/request";
export const toggleAuthHeader = (type, token) => {
    switch (type) {
        case 'login':
            console.log(token)
            localStorage.setItem('token', JSON.stringify(token))
            const retrivedToken = localStorage.getItem('token')
            request.defaults.headers.common['authorization'] = retrivedToken
            break;
        case 'logout':
            localStorage.removeItem('token')
            request.defaults.headers.common['authorization'] = ''
            break
        case 'set':
            console.log(token)
            if (token) {
                request.defaults.headers.common['authorization'] = token
            }
            break

        default:
            return
    }

}
export const calculateTotal = data => {
    const totalMoney = { income: 0, expense: 0, asset: 0, liability: 0 }
    for (const incomeType in data) {
        for (const income of data[`${incomeType}`]) {
            totalMoney[`${incomeType}`] += income.amount
        }
    }
    return totalMoney
}
export const showOnly = arr => {
    let seeMore = false
    if (arr.length > 5) {
        seeMore = true
        return {
            trans:arr.slice(arr.length - 5, arr.length),
            seeMore
        }
    }
    return {trans:arr,seeMore}
}
