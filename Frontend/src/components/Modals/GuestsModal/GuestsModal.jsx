import React, { useContext, useState } from 'react'
import { GuestsContainer } from './GuestsModal'
import { GuestsContext } from '../../../context/GuestsContext'

const GuestsModal = () => {
  const { guestsModal, setGuests, guests } = useContext(GuestsContext);
  const [ count, setCount ] = useState(0)

  const decrement = () => {
    setCount((prev) => {
      const next = prev > 0 ? prev - 1 : 0;
      setGuests(next);
      return next;
    });
  };

  const increment = () => {
    setCount((prev) => {
      setGuests(prev + 1);
      return prev + 1
    });
  };

  return (
    <GuestsContainer>
      <button type='button' onClick={decrement}>-</button>
      <span>{count}</span>
      <button type='button' onClick={increment}>+</button>
    </GuestsContainer>
  )
}

export default GuestsModal