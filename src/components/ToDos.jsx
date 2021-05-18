import React from 'react'

const ToDos = (props) => {
    return (
        <div className="todoStyle">
            <li>{props.item}</li>
            <i 
                className="fa fa-times" 
                aria-hidden="true" 
                onClick={()=>{
                    props.onSelect(props.id)}
                }/>
        </div>
    )
}

export default ToDos;