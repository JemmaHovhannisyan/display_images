import {images} from './images'

const reducer = (state = images, actoin) => {
    const current = {...state}

    switch (actoin.type){
        case 'cats':
            current.cats = actoin.value;
            break;
        case 'categories':
            current.categories = actoin.value;
        default:
            break;
    }
    return current;
}

export default  reducer;