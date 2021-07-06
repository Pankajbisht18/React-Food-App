import { useEffect, useState } from "react";

const Recipe = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=eabc8ee8&app_key=4d98b1b0c4340c48bc68b1b84a839892')
        .then(res=>res.json())
        .then(json=>setData(json.hits))
    },[])
    console.log(data)
    return(
        <>
        {
            data.map((xyz)=>{
                return(
                    <p>{xyz.recipe.shareAs}</p>
                )
            })
            
        }
        </>
    );
}
export default Recipe;