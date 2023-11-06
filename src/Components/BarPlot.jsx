// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import './Graph.css'
// function BarPlot(props) {

//   const [barplot , setBarplot] = useState({});

//   const fetchBarplot = () => {
//     fetch(`http://localhost:8000/bar-chart?month=${month}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBarplot(data);
//       });
//   };

//   useEffect(()=>{
//     fetchBarplot();
//   },[])
  
//   console.log("Barplot data ==> >" ,barplot);
//   const newArray = Object.entries(barplot).map(([name, value]) => ({ name, value }));
//   console.log(newArray);


//   return (
//     <ResponsiveContainer width="100%" height={300}>
//     <BarChart
//       width={500}
//       height={300}
//       data={newArray} 
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//       barSize={20}
//     >
//       <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <CartesianGrid strokeDasharray="3 3" />
//       <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
//     </BarChart>
//   </ResponsiveContainer>
//   );
// }

// export default BarPlot;
