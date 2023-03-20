import react, { useState } from "react"
import './Card.css';

function Card(props) {
    function readmoreHandler (){
        setReadMore(!readmore);
        !readmore ? setDescription(props.info) :setDescription(`${props.info.substring(0,200)}...`)
    }
    
    const [readmore, setReadMore] = useState(false)
    const description = `${props.info.substring(0, 200)}....`
    const [newdescription,setDescription] = useState(description);
    return (

        <div className="card">
            <img src={props.image} className="image" />
            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price">₹ {props.price}</h4>
                    <h4 className="tour-name">{props.name}</h4>
                </div>

                <div className="description">
                    {newdescription}
                    
                    <span className="read-more" onClick={()=>readmoreHandler()} >
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>

            </div>

                <button className="btn-red" onClick={()=>props.removeTour(props.id)}>Not Interested</button>

        </div>
    )
}

export default Card;