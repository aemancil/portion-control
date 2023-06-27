import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewScreen.css';

const NewScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [originalServingSize, setOriginalServingSize] = useState(1);
  const [desiredServingSize, setDesiredServingSize] = useState(1);
  const navigate = useNavigate();
  const [originalIngredients, setOriginalIngredients] = useState([]);


  const handleEnter = () => {
    setIngredients([...ingredients, { name, quantity, measurement }]);
    setOriginalIngredients([...originalIngredients, { name, quantity, measurement }]);
    setName('');
    setQuantity('');
    setMeasurement('');
  };


  const handleSubmit = () => {
    const factor = desiredServingSize / originalServingSize;
    const updatedIngredients = originalIngredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * factor,
    }));
    setIngredients(updatedIngredients);
  };


  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="center-container">
      <text className="text-header">
        <h1>Please enter your values </h1>
      </text>
      <form>
        <label>
          Ingredient Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-box"
          />
        </label>
        <label>
          Quantity: 
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="q-box"
          />
        </label>
        <label>
          Measurement:
          <select value={measurement} onChange={(e) => setMeasurement(e.target.value)} className='select-box'>
            <option value="">Select</option>
            <option value="cups">Cups</option>
            <option value="tablespoons">Tablespoons</option>
            <option value="teaspoons">Teaspoons</option>
          </select>

        </label>
        <button type="button" onClick={handleEnter} className='a-button'>
          Enter
        </button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity} {ingredient.measurement}
          </li>
        ))}
      </ul>
      <label>
        Original serving size:
        <input
          type="number"
          value={originalServingSize}
          onChange={(e) => setOriginalServingSize(e.target.value)}
          className="input-box"
        />
      </label>
      <label>
        Desired serving size:
        <input
          type="number"
          value={desiredServingSize}
          onChange={(e) => setDesiredServingSize(e.target.value)}
          className="input-box"
        />
      </label>
      <button type="button" onClick={handleSubmit} className='a-button'>
        Submit
      </button>
      <button type="button" onClick={goHome} className='a-button'>
        Go Home
      </button>
    </div>
  );
};

export default NewScreen;
