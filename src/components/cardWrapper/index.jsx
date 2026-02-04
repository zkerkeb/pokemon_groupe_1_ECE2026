

const CardWrapper = ({ children }) => {
    return (
        <div className="card-wrapper">
            <h3>Card Header</h3>
            {children}
        </div>
    );
}

export default CardWrapper;