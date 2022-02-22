import { useState, useEffect } from 'react';


const JobsInput = () => {

  const [selectedButton, setSelectedButton] = useState();

  const handleChange = e => {
    let caller = e.target.value;
    setSelectedButton(caller);
  };

  console.log(selectedButton);

  return (
    <div style={styles.jobsInputWrapper}>
      <input placeholder={'Enter your query here'} />
      <div style={styles.jobsInputButtons}>
        <div>
          <label>
          <input 
          type="radio" 
          value="buttonOne" 
          onChange={(e) => handleChange(e)} 
          checked={selectedButton === 'buttonOne'}/>
          Option 1
          </label>
        </div>
        <div>
          <label>
          <input 
          type="radio" 
          value="buttonTwo" 
          onChange={(e) => handleChange(e)} 
          checked={selectedButton === 'buttonTwo'}/>
          Option 2
          </label>
        </div>
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