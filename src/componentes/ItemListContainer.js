const Alert = (props) => {
    return(
        <div className="alert alert-primary" role="alert">
            {props.texto}
        </div>
    )
}

export default Alert;