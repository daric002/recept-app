import Api from '@/services/Api'

export default {
    fetchRecepies () {
        return Api().get('recepies')
    }
}
