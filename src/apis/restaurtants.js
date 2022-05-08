// 透過 apiHelper 發出 GET 請求給 /restaurants
// 從 LocalStorage 取出 token，放進 Header
// 攜帶 page 和 categoryId 參數
// 最後包裝成一個 getRestaurants 函式匯出

import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
    getRestaurants ({ page, categoryId  }) {
        const searchParams = new URLSearchParams({ page, categoryId })
        return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getFeeds () {
        return apiHelper.get('/restaurants/feeds', {
            headers: { Authorization: `Bearer ${getToken()}`}
        })
    }
}