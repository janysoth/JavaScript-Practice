function Box (box) {
    const styles = {
        backgroundColor: box.on ? "#222222" : "transparent"
    }

    return (
        <div 
            style={styles} 
            className="box"
            onClick={box.toggle}
        >
        </div>
    )
}

export default Box