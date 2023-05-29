import {Link} from "react-router-dom";
import Header from "./Header";

function Draw({data}) {
    return (
        <>
            <Header/>
            <div className='draw-container'>
                {data?.map(({strDrink, strDrinkThumb, strAlcoholic, strGlass, idDrink}) => (
                    <div key={idDrink} className='container-child'>
                        <div key={idDrink}>
                            <img src={strDrinkThumb} alt='photo' className='draw-photo'/>
                        </div>
                        <h2>{strDrink}</h2>
                        <h3>{strGlass}</h3>
                        <p>{strAlcoholic}</p>
                        <Link className='child-href' to={`cocktails/${idDrink}`}>DETAILS</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Draw;