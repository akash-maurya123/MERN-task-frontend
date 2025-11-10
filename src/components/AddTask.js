import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

export default function AddTask() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Personal');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMessage('⚠️ Please enter a task name.');
      return;
    }

    try {
      await axios.post(`${API_BASE}/tasks`, { name, type, description });
      setMessage('✅ Task added successfully!');
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error);
      setMessage('❌ Error adding task.');
    }
  };

  return (
    <div>
      {message && <div className="alert alert-info py-2">{message}</div>}
      <form onSubmit={handleSubmit} className="row g-2 align-items-center">
        {/* Your input fields and button remain same */}
      </form>
    </div>
  );
}


// import React, { useState } from 'react';
// import axios from 'axios';

// const API_BASE = 'http://localhost:4000/api/tasks';

// export default function AddTask() {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('Personal');
//   const [description, setDescription] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       setMessage('⚠️ Please enter a task name.');
//       return;
//     }

//     try {
//       await axios.post(API_BASE, { name, type, description });
//       setMessage('✅ Task added successfully!');
//       setName('');
//       setDescription('');
//     } catch (error) {
//       console.error(error);
//       setMessage('❌ Error adding task.');
//     }
//   };

//   return (
//     <div>
//       {message && <div className="alert alert-info py-2">{message}</div>}
//       <form onSubmit={handleSubmit} className="row g-2 align-items-center">
//         <div className="col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Task name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="Personal">Personal</option>
//             <option value="Work">Work</option>
//             <option value="Study">Study</option>
//           </select>
//         </div>

//         <div className="col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <div className="col-md-1 text-center">
//           <button type="submit" className="btn btn-success w-100">
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
