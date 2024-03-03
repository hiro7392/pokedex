type ChangePokemonPageButtonProps={
    count: number, 
    length: number, 
    onClickIncrement:  ()=>void
    onClickDecrement:  ()=>void
} 
export const ChangePokemonPageButton = (props:ChangePokemonPageButtonProps)=> {
    return(
        <>
        {
            props.count > 0 ? 
            <button onClick={props.onClickDecrement}>
            {"<"}
            </button>
            : null
        }
        {
            props.count < props.length
            ?<button onClick={props.onClickIncrement}>
            {">"}
            </button>
            : null
        }
        </>
    )
};