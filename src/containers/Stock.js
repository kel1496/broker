import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetStock } from '../actions/stockActions';
import _ from 'lodash';


const Stock = (props) => {
    const pokemonName = props.match.params.stock;
    const dispatch = useDispatch();
    const stock = useSelector(state => state.Stock);
    const stockData = stock.data;
    React.useEffect(() => {
        dispatch(GetStock(pokemonName))
    }, [])

const ShowData = () => {
    console.log("stock",stock);
    if (!_.isEmpty(stock.data)){
        return (
            <div className={"pokemon-wrapper"}>
                <div className={"item"}>
                    <h2>{stockData.symbol} </h2>
                    <h2>{stockData.price} </h2>
                    <h2>{stockData.volume}</h2>
                </div>
            </div>
        )
    }

    else if (stock.loading){
        return <p>Loading....</p>
    }

    else if (stock.errorMsg !== ""){
        return <p>{stockData.errorMsg}</p>
    }

    return <p>error getting pokemon</p>
}

    return(
        <div className={"poke"} >
            <h1>{pokemonName}</h1>
            {ShowData()}
        </div>
    )
};

export default Stock;