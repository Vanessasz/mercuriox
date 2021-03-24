import React from "react";


const CandidateItem = (props) => {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id);
  };

  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id);
  };

  return (
    <div>
      <p> {props.candidate.name} </p>
      <div>
        <button onClick={approveCandidate}>{/* <ThumbUpIcon /> */}</button>
        <button onClick={rejectCandidate}>{/* <ThumbDownIcon /> */}</button>
      </div>
    </div>
  );
};

export default CandidateItem