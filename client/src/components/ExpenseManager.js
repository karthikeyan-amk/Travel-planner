import React, { useState } from 'react';

const ExpenseManager = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setTotalAmount(totalAmount + expense.amount);
    setRemainingAmount(remainingAmount - expense.amount);
  };

  return (
    <div className="my-4">
      {/* Add expense form */}
      {/* Expense list */}
      {/* Total and remaining amounts */}
    </div>
  );
};

export default ExpenseManager;
