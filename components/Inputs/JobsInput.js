import { useState, useEffect } from 'react';
import Colors from '../Colors';

//Subcomponents

import Dropdown from '../Dropdowns/Dropdown';

const JobsInput = () => {

  const [selectedButton, setSelectedButton] = useState();
  const [input, setInput] = useState();

  //Event handlers

  const handleChange = e => {
    let caller = e.target.value;
    setSelectedButton(caller);
  };

  const handleInputChange = e => {
    let caller = e.target.value;
    setInput(caller);
  }

  //Defaults

  const buttonDefaults = [
    { title: 'Ascending', key: 1, value: 'option1' },
    { title: 'Descending', key: 2, value: 'option2' }
  ];

  const dropDownDefaults = [
    'Ascending',
    'Descending'
  ]

  //Testing block

  console.log('%c Button Selection', 'color: blue')
  console.log(selectedButton);

  console.log('%c Input Value', 'color: red')
  console.log(input);

  return (

    <div style={styles.jobsInputWrapper}>
      <div style={styles.jobsInputRow}>
        <input
          placeholder={'Enter your query here'}
          onChange={(e) => handleInputChange(e)}
          style={styles.jobsInput}
        />
        <button
          style={styles.jobsInputButton}
        >Submit
        </button>
        <Dropdown 
         name='Sorting Options'
         options={dropDownDefaults}
        />
      </div>
      <div style={styles.jobsInputButtons}>
        {
          buttonDefaults.map(({ title, key, value }) =>
            <div
              key={key}
            >
              <label>
                <input
                  type="radio"
                  value={value}
                  onChange={(e) => handleChange(e)}
                  checked={selectedButton === value} />
                {title}
              </label>
            </div>
          )
        }
      </div>
    </div>
  )
};

const styles = {
  jobsInputWrapper: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: 50
  },
  jobsInputRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25
  },
  //Radio Dials
  jobsInputButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  //Input Bar + Button
  jobsInput: {
    width: 150,
    height: 20
  },
  jobsInputButton: {
    backgroundColor: Colors.Secondary,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: `1px solid ${Colors.Primary}`,
    opacity: 0.6,
    height: 25,
    width: 70
  }
};

export default JobsInput;