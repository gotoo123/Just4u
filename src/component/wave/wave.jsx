import './wave.css';
const Wave = () => {
  return (
    <>
      <div className="preview-wave">
        <svg
          className="preview-waves"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="preview-parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="currentColor" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="currentColor" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="currentColor" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="currentColor" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Wave;
