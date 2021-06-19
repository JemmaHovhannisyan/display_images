import axios from "axios";

export const information = (e) => {
    return {
        type: 'cats',
        value: e
    }
}
export const categories = (e) => {
    return {
        type: 'categories',
        value: e
    }
}
export const setCatsInfo = (id, limit) => {
    return function(dispatch) {
       if(id === undefined){
           id = ''
       }
       if(limit === undefined){
           limit = 10;
       }
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id}`, ).then(res =>{
            dispatch(information(res.data));
        }).catch(e => {
            console.log(e);
        })
    }
}
export const setCategories = () => {
    return function(dispatch) {
        axios.get('https://api.thecatapi.com/v1/categories').then(res =>{
            const options = res.data.map(function(row) {
                return { value : row.id, label : row.name }
            })
            dispatch(categories(options));
        }).catch(e => {
            console.log(e);
        })
    }
}