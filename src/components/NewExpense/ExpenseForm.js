import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: e.target.value,
    }));
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: e.target.value,
    }));
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(expenseData);
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
