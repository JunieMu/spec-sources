function Button({label, type}) {
    return (
        <div className={type}>
            <h2 className="button-text">{label}</h2>
        </div>
    );
}

export default Button