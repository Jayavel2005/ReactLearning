import ProfileImg from "./assets/dp.png"
function Card(){
    return(
        <div className="card">
            <img src={ProfileImg} className="cardImg" alt="" />
            <h2 className="title">Figma</h2>
            <p>UI UX Tool</p>
        </div>
    );
}
export default Card