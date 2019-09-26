import React from 'react';
import { Link } from 'react-router-dom';

function Dictionary (props) {
  const { dictionaryData } = props;

  return (
    <div>
      <ul>
        <li>
          <Link to={`/dictionaries/${dictionaryData._id}`}>
            <h3>{dictionaryData.title}</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dictionary;
