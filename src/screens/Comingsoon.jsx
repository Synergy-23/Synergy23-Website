import './Comingsoon.scss';

function Comingsoon(){
    return <div className="container-fluid title_background1">
        {/*<div className="row title_tex1">
            <div className="col-12">
                <div className="empty_space_title1">
                </div>
                <div className="row synergy_is1">
                    Synergy 2023 is
                </div>
                <div className="row synergy_is1">
                    <h1 className='synergy_is_text1'>COMING SOON</h1>
                </div>
            </div>
            <div className="col d-none d-md-block">
            </div>
        </div> */}
        <div className="row">
            <div className="empty_space_title1"></div>
            <div className="empty_space_title1"></div>
            <div className="col-2"></div>
            <div className="col-4">
                <h1>Synergy 2023 is</h1>
            </div>
            <div className="col"> </div>
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-4">
                <h1 className='synergy_is_text1'>COMING</h1>
            </div>
            <div className="col-4">
                <h1 className='synergy_is_text2'>SOON</h1>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">   
            <div className="col-2"></div>
            <div className="col-4"></div>
            <div className="col-4 desc">2nd iteration of IIITB's</div>
            <div className="col-2"> </div>
        </div>
        <div className="row">   
            <div className="col-2"></div>
            <div className="col-4"></div>
            <div className="col-4 desc">Annual TechFest</div>
            <div className="col-2"> </div>
        </div>
    </div>
}
export default Comingsoon;

