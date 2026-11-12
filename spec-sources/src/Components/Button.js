function Button({label, type, onClick}) {
    return (
        <button className={type} onClick={onClick}>
            <h2 className="button-text">{label}</h2>
        </button>
    );
}

export default Button