import './Form.css'


export default function Form(props){
    
    return(
        <>
            <form className="form" type="submit">   
                <input 
                    className="input" 
                    placeholder="Placeholder" 
                    type="text" 
                    onChange={(el)=>{props.setInputData(el.target.value)}}
                />
            </form>
        </>
    )
}
