import {Link, useParams} from "react-router-dom";
import {UrlChild} from "../../utils/constants";
import {useEffect, useState} from "react";
import Draw from "../Draw";
import '../style.css'

function Cocktails() {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`${UrlChild}${id}`)
                const result = await resp.json()
                setData(result.drinks)
            } catch (error) {
                throw error
            }
        })()
    }, [id])
    return (
        <>
            <Link to='/' className='back-link'>Back Home</Link>

            <Draw/>
            <div className='cocktails-container'>
                {data.map(({

                               strDrink,
                               strCategory,
                               strAlcoholic,
                               strGlass,
                               strDrinkThumb,
                               strInstructions,
                               strIngredient1,
                               strIngredient2,
                               strIngredient3,
                               strIngredient4
                           }) => (
                    <>
                        <div key={id} className='cocktails-child'>
                            <h3 className='cocktails-title'>{strDrink}</h3>
                            <img  className='img' src={strDrinkThumb} alt='photo'/>
                            <p><span className='info'> Name :</span> {strDrink}</p>
                            <p><span className='info'>Category :</span> {strCategory}</p>
                            <p><span className='info'>Info :</span> {strAlcoholic}</p>
                            <p><span className='info'>Glass :</span> {strGlass}</p>
                            <p><span className='info'>Instructions :</span> {strInstructions}</p>
                            <p><span
                                className='info'>Ingredients : </span> {strIngredient1}{strIngredient2}{strIngredient3}{strIngredient4}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Cocktails;