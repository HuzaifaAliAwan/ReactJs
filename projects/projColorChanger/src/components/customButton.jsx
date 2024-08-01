function CustomButton({title = "Random", color="#ffffff", updater}){
    function update(){
        updater(color);
    }
    return(
        <button className='p-5 rounded-lg m-3 font-bold' 
            style={{backgroundColor: color}}
            onClick={update}
        > {title}</button>
    )
}

export default CustomButton;