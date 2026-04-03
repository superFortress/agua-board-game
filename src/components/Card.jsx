// E X P O R T

export default function Card({ symbolArray = [] }) {

    // R E T U R N

    return <div className="card">
        {symbolArray.map(({ name, path, rotate, scale, x, y }) => (
            <img
                className="card-symbol"
                alt={`Dibujo de ${name}`}
                key={name}
                src={path}
                style={{
                    width: `${scale * 0.9}%`,
                    height: `${scale * 0.9}%`,

                    position: 'absolute',
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: `
                        translate(-50%, -50%)
                        rotate(${rotate}deg)
                    `
                }}
            />
        ))}
    </div>;

}