// import { useEffect, useState } from "react";

// const UsePreview = () => {
//   function fetchUsers() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//       fetch(`https://jsonplaceholder.typicode.com/users/`)
//         .then((response) => response.json())
//         .then((data) => {
//           setUsers(data);
//         });
//     }, []);
//   }
//   return (
//     <div>
//       <h1></h1>
//       {users.map((user) => {
//         <h2>{user.name}</h2>;
//       })}
//     </div>
//   );
// };

// export default UsePreview;
