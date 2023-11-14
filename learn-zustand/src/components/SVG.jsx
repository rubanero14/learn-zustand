import "./SVG.css";

// eslint-disable-next-line react/prop-types
function SVG({ className, viewBox, d, fill, height, width }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? "16"}
        height={height ?? "16"}
        fill={fill ?? "currentColor"}
        className={className}
        viewBox={viewBox}
      >
        <path d={d} />
      </svg>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default SVG;
