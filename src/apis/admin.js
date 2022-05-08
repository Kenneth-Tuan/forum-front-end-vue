import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
    restaurants: {
        create({ formData }) {
            return apiHelper.post('/admin/restaurants', formData, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
        },
        get() {
            return apiHelper.get('/admin/restaurants', {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
        },
        delete({ restaurantId }) {
            return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
        },
        getDetail({ restaurantId }) {
            return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
        update({ restaurantId, formData }) {
            return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
    },
    categories: {
        get () {
            return apiHelper.get(`/admin/categories `, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
        create ({ name }) {
            return apiHelper.post(`/admin/categories`, name, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
        update ({ categoriesId, name }) {
            return apiHelper.put(`/admin/categories/${categoriesId}`, name, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
        delete ({ categoriesId }) {
            return apiHelper.delete(`/admin/categories/${categoriesId}`, {
                headers: { Authorization: `Bearer ${getToken()}` }
            })
        },
    }
}