export const Pokemon=()=>{


    const handleClick=()=>{
        const res=fetch('https://pokeapi.co/api/v2/pokemon/150',{method:'GET'})
        console.log(res);
        res.then((json)=>{
            console.log(json)
        }).catch(

        ).finally(

        )
    }

    return(
        <>
            <button onClick={handleClick}>
                get pokemon
            </button>
        </>
    )
}