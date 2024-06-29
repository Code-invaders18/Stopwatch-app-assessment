/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const TimeElapsed = ({ timeElapsed }) => {
  return (
    <div
      className="TimeElapsed"
      style={{ display: timeElapsed.length ? "block" : "none" }}
    >
      {timeElapsed?.map((time, index) => (
        <div key={index} className="TimeElapsed-ladder">
          <h3 className="TimeElapsed-heading">{`Time Elapsed ${
            index + 1
          } : `}</h3>
          <h3 className="TimeElapsed-time">{time}</h3>
        </div>
      ))}
    </div>
  );
};
