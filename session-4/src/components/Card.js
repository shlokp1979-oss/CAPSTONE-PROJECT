function Card({ title, children }) {
    return (
        <div style={{
            border: "1px solid #1f2937",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
        }}>
            <h3>{title}</h3>
            {children}

            <Card title="Resume">
                <p>Content here</p>
            </Card>
        </div>


    );
}

export default Card;