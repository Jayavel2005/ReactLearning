import styles from "./Button.module.css"
function Button(){

    const Style = {
        backgroundColor: "gray",
        padding: "20px",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        color: "whitesmoke",
        marginLeft: "10px",
        cursor: "pointer"
    }
    return(

        
        
        <>
            <button className={styles.button}>External Css</button>
            <button className="externalStyle">Module Css</button>
            <button style={Style}>Internal Css</button>
        </>
    );
}

export default Button