import "./Card.scss";


const Card = (props) => {
    return (
        <>
            <div className="card-main">
                <div className="cont">
                    <img className="cardimg" src={props.img} alt="" />
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default Card;