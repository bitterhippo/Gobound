import { useState, useEffect } from 'react';


const JobsInput = () => {

  const [selectedButton, setSelectedButton] = useState();

  const handleChange = e => {
    let caller = e.target.value;
    setSelectedButton(caller);
  };

  //Button Defaults

  const buttonDefaults = [
    { title: 'Option 1', key: 1, value: 'option1' },
    { title: 'Option 2', key: 2, value: 'option2' }
  ];

  console.log(selectedButton);

  return (
    <div style={styles.jobsInputWrapper}>
      <input placeholder={'Enter your query here'} />
      <div style={styles.jobsInputButtons}>
        {
          buttonDefaults.map(({title, key, value}) =>
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
    backgroundColor: 'green'
  },
  jobsInputButtons: {
    display: 'flex',
    flexDirection: 'row',
  }
};

export default JobsInput;