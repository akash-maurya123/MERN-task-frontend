import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching:', error);
      setMessage('❌ Unable to fetch tasks.');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE}/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
      setMessage('✅ Task deleted successfully.');
    } catch (error) {
      console.error(error);
      setMessage('❌ Error deleting task.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {message && <div className="alert alert-info py-2">{message}</div>}
      {/* Bootstrap table same as before */}
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_BASE = 'http://localhost:4000/api/tasks';

// export default function TaskList() {
//   const [tasks, setTasks] = useState([]);
//   const [message, setMessage] = useState('');

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get(API_BASE);
//       setTasks(res.data);
//     } catch (error) {
//       console.error('Error fetching:', error);
//       setMessage('❌ Unable to fetch tasks.');
//     }
//   };

//   const deleteTask = async (id) => {
//     try {
//       await axios.delete(`${API_BASE}/${id}`);
//       setTasks(tasks.filter((t) => t._id !== id));
//       setMessage('✅ Task deleted successfully.');
//     } catch (error) {
//       console.error(error);
//       setMessage('❌ Error deleting task.');
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       {message && <div className="alert alert-info py-2">{message}</div>}

//       {tasks.length === 0 ? (
//         <p className="text-center text-muted">No tasks available.</p>
//       ) : (
//         <table className="table table-bordered table-striped text-center">
//           <thead className="table-success">
//             <tr>
//               <th>Name</th>
//               <th>Type</th>
//               <th>Description</th>
//               <th>Created</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task._id}>
//                 <td>{task.name}</td>
//                 <td>{task.type}</td>
//                 <td>{task.description || '-'}</td>
//                 <td>{new Date(task.createdAt).toLocaleString()}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => deleteTask(task._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
