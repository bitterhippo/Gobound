import { useState, useEffect } from 'react';
import Colors from '../Colors';

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

  //Button Defaults

  const buttonDefaults = [
    { title: 'Option 1', key: 1, value: 'option1' },
    { title: 'Option 2', key: 2, value: 'option2' }
  ];

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
  },
  jobsInputButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  jobsInputRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25
  },
  jobsInput: {
    width: 150
  },
  jobsInputButton: {
    backgroundColor: Colors.Secondary,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: '1px solid black'
  }
};

export default JobsInput;