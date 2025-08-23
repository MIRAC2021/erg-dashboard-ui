import React from "react";

/**
 * Component for rendering general scoring information rubric.
 *
 * @returns {GeneralScoringInfo} Component that displays the scoring rubric.
 */
const GeneralScoringInfo = () => {
  return (
    <div className="rounded-2xl bg-white p-4">
      <h1 className="text-xl font-bold">General Scoring Information</h1>
      <p className="mt-2 text-gray-600">
        <strong>Scoring for RULA:</strong>
        <br />
        1-2 = Acceptable posture
        <br />
        3-4 = Further investigation, change may be needed
        <br />
        5-6 = Further investigation, change soon
        <br />
        7 = Immediate change required
        <br />
        <br />
        <strong>Scoring for REBA:</strong>
        <br />
        1 = Negligible risk
        <br />
        2-3 = Low risk
        <br />
        4-7 = Medium risk, further investigate, change soon
        <br />
        8-10 = High risk, investigate and implement change
        <br />
        11+ = Very high risk, immediate change required
        <br />
      </p>
    </div>
  );
};

export default GeneralScoringInfo;
