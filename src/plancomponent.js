function Plan(props){

    return(
        <>
    {/* whatever we write in input we have to get and set through this component
    and send this component to app.js */}
    {/* every time in li new value comes and get printed */}

        <li className="shadow p-2 my-2 col-sm-9">{props.valueprops}</li>
        <button className="btn btn-danger my-2 col-sm-2 offset-1"
         onClick={()=>{
            props.senddata(props.id)
         }}>X</button>

        </>

    )
}

export default Plan
