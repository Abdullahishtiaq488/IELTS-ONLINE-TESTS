// "use client"
// import React, { useEffect, useState } from 'react'

// const MySection = () => {
//     const [userData, setUserData] = useState<any>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             <div>MySection</div>
//             {userData ? (
//                 <ul>
//                     {userData.map(
//                         (user: any) => (
//                             <div key={user.id}>
//                                 <li>{user.name}</li>
//                                 <li>{user.email}</li>
//                             </div>
//                         )
//                     )}
//                 </ul>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </>
//     )
// }

// export default MySection