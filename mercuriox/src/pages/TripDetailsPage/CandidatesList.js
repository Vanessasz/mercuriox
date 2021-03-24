import React from "react";
import CandidateItem from './CandidateItem';

export default function CandidatesList(props) {
  return (
      <div>
          <div>
            <h5>
              Lista de candidatos
          </h5>
            <p>
              {props.candidates.map(candidate => {
                return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
              })}
            </p>
          </div>
        </div>
  )}
