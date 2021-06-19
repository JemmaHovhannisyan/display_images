import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCatsInfo} from "../store/cats/action";

export const Cats = (props) =>{
    const catsInfo = useSelector(store => store.data.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCatsInfo())
    }, [])

    return(<div>
        <h1>Our Cats</h1>
        <div className='main_div'>
            {
                catsInfo.length !== 0 && catsInfo.map((e, i) => {
                    return(<div key={i}>
                        <img
                            className='img_div'
                            height={e.height/3}
                            src={e.url}
                            width={e.width/3} />
                    </div>)
                })
            }
        </div>
    </div>)
}