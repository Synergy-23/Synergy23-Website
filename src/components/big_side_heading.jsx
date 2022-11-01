import './big_side_heading.scss';
const Big_side_heading = (props)=>{
    return <div className="big_side_heading container">
        <div className="row">
            <div className="col-12 col-md-3 heading_column">
                {/* for smaller screens */}
                <div className="row d-block d-md-none">
                    <h1 className="small_screen_heading">
                        {props.heading1 + " " + props.heading2}
                        <span className='dot_color'>.</span>
                    </h1>
                </div>
                <div className="row d-none d-md-block sideheadingrow">
                    <div className="row sideheadingrow">
                        <h1 className="bs_heading_1">
                        {props.heading1}
                        </h1>
                    </div>
                    <div className="row sideheadingrow">
                       <h1 className="bs_heading_2">
                        {props.heading2.toUpperCase()}&nbsp;
                       </h1>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 offset-md-2 content_style">
                {props.content}
            </div>
        </div>
    </div>  
}

export default Big_side_heading;