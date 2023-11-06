import React, { useEffect, useState } from 'react';
import './transaction.css';
import BarPlot from './BarPlot';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Transaction() {
  const [month, setMonth] = useState(3);
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const namemonths = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setMonth(selectedMonth);
  };

  const [transactions, setTransactions] = useState([]);
  const [stat , setStat] = useState({});
  const [barplot , setBarplot] = useState({});
  const [pieplot , setPieplot] = useState({});

  const fetchTransaction = () => {
    fetch(`https://internship-backend-pdqe.onrender.com/list-transactions?month=${month}`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
      });
  };

  const fetchStat = () => {
    fetch(`https://internship-backend-pdqe.onrender.com/statistics?month=${month}`)
      .then((response) => response.json())
      .then((data) => {
        setStat(data);
      });
  };


  const fetchBarplot = () => {
    fetch(`https://internship-backend-pdqe.onrender.com/bar-chart?month=${month}`)
      .then((response) => response.json())
      .then((data) => {
        setBarplot(data);
      });
  };
  const fetchPieplot = () => {
    fetch(`https://internship-backend-pdqe.onrender.com/pie-chart?month=${month}`)
      .then((response) => response.json())
      .then((data) => {
        setPieplot(data);
      });
  };

  useEffect(() => {
    fetchTransaction();
    fetchStat();
    fetchBarplot();
    fetchPieplot();
  }, [month]); // Include 'month' as a dependency to fetch data when the month changes
  
  const newArray = Object.entries(barplot).map(([name, value]) => ({ name, value }));
  const piedata =  Object.entries(pieplot).map(([name, value]) => ({ name, value }));

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  console.log("Data --> ",data01);
  console.log("pie Data --> ",piedata);
 
  

  
  return (
    <div>
      <div className='month'>
      <h2>Select The month</h2>
      <select value={month} onChange={handleMonthChange} className='dropdown'>
        {months.map((m) => (
          <option key={m} value={m} >
            {namemonths[m-1]}
          </option>
        ))}
      </select>
        </div>
        <h2>Transaction table</h2>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>
        </tr>
        {transactions.map((transaction) => (
          <tr key={transaction._id}>
            <td>{transaction.id}</td>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td>{transaction.price}</td>
            <td>{transaction.category}</td>
            <td>{transaction.sold ? 'Sold' : 'Not Sold'}</td>
            <td>
              <img  style={{width:"90px"}} src={transaction.image} alt={transaction.title} />
            </td>
          </tr>
        ))}
      </table>

      <br />
      <br />
      <br />
      <h2>Stat table</h2>
     
      <table id="customers">
        <tr>
          <th>Total Sale</th>
          <th>Total Sold Item</th>
         
        </tr>
        <tr>
            <td>{stat.totalSaleAmount}</td>
            <td>{stat.totalSoldItems}</td>
        </tr>
      </table>



      <h2>Bar Plot</h2>

      {/* <BarPlot month={month}/> */}
      <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={newArray}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  </ResponsiveContainer>

<h2>Pie Chart</h2>

      <div style={{cursor:"pointer"}}>

  <ResponsiveContainer width="100%" height={300} >
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={piedata}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>



      </div>
    </div>
  );
}

export default Transaction;
