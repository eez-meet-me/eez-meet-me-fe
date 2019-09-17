import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PinForm({ handleSubmit }) {

  const [pin, setPin] = useState('');
  const [description, setDescription] = useState('');
    
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(pin, description);
  }; 

  return (
        <>
            <form onSubmit={onSubmit}>
                
              <input 
                type="text" 
                value={pin} 
                onChange={({ target }) => setPin(target.value)} 
                placeholder="pin name"></input>
              <input 
                type="text" 
                value={description} 
                onChange={({ target }) => setDescription(target.value)} 
                placeholder="pin description"></input>
              <button>Submit Pin</button>
            </form>
        </>
  );
}

PinForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default PinForm;
