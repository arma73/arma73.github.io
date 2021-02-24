import "./StraightLine.scss";

const StraightLine = ({ options = {}, lines = 3 }) => {
    const { fill, short } = options;

    const mapLines = () => (
        <>
            {fill && <div className="straight-line" />}
            {new Array(lines).fill().map((_, index) => (
                <div className="straight-line-full" key={index} />
            ))}
            {short && <div className="shortened straight-line-full" />}
        </>
    );

    return mapLines();
};

export default StraightLine;
