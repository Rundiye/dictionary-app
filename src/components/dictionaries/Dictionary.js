import React from 'react';
import { Link } from 'react-router-dom';

export default function Dictionary (props) {
  const { dictionaryData } = props;

  return (
    <div className="dictionary">
      <Link to={`/dictionaries/${dictionaryData._id}`}>
        <h3>{dictionaryData.title}</h3>
      </Link>
    </div>
  );
}
