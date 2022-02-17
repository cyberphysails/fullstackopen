const Notification = ({message}) => {
    let style =  {
        color: "green",
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
    }

    if (message.error) {
        style = { ...style, color: "red"}
    }

    if (message.msg === null){
        return <></>;
    }
    return <div style={style}>{message.msg}</div>
}

export default Notification;