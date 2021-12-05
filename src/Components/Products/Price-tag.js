const PriceTag = ({children}) => {
    return <div style={{ position: "absolute", top: "0", right: "0", backgroundColor: "red", color: "white", padding: "10px" }} >
    {children}
    </div>
}

export default PriceTag;