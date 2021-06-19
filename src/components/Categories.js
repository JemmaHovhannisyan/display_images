import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setCategories, setCatsInfo} from "../store/cats/action";
import Select from 'react-select';

export const Categories = () => {
    const categories = useSelector(store => store.data.categories);
    const cats = useSelector(store => store.data.cats)
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null)

    useEffect(() => {
        dispatch(setCategories())
    }, [])

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
        dispatch(setCatsInfo(selectedOption.value))
    };

    const loadMoreCats = () => {
        let category = ''
        if(selectedOption) {
             category = selectedOption.value;
        }
        dispatch(setCatsInfo(category, cats.length + 10))
    }
    return(<div>
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={categories}
        />
        <div className='btn_div'>
            <button onClick={() => loadMoreCats()}>10 more images</button>
        </div>
    </div>)
}