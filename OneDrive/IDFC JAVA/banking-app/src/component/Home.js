// import { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";



// const Home = () => {



//   const [username, setUsername] = useState(' ')



//   const navigate = useNavigate(' ')



//   useEffect(() => {

//     setUsername(sessionStorage['username'])

//   }, [])



//   const onLogout = () => {

//     sessionStorage.removeItem('username')

//     sessionStorage.removeItem('password')

//     sessionStorage.removeItem('access_token')



//     navigate('/login')

//   }



//   return (



//     <div>

//       <div>



//         <nav className="navbar navbar-expand-lg bg-dark mb-3">

//           <div className="container-fluid">

//             <a className="navbar-brand " href="#" style={{ color: 'white' }}>EMS-Bank</a><br></br>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

//               <span className="navbar-toggler-icon"></span>

//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">

//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//                 <li className="nav-item">

//                   <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>

//                 </li>

                

//                 <li className="nav-item">

//                   <a className="nav-link " href="/transfer" style={{ color: 'white' }}>Fund Transfer</a>

//                 </li>

//                 <li className="nav-item dropdown">

//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>

//                     Account Type

//                   </a>

//                   <ul className="dropdown-menu">

//                     <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Saving</a></li>

//                     <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Current</a></li>

//                   </ul>

//                 </li>

//                 <li className="nav-item">

//                   <a className="nav-link active" aria-current="page" href="/transaction" style={{ color: 'white' }}>Transaction</a>

//                 </li>

//               </ul>

//               <form className="d-flex" role="search">

//                 {/* <button style={{

//                   position: 'fixed',

//                   right: '10px',

//                 }} className="btn-btn-link" onClick={onLogout}>Logout</button> */}

//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

//                 <button className="btn btn-outline-success" type="submit">Search</button>

//                 &nbsp;&nbsp;

//                 <button className="btn btn-danger mp-10" onClick={onLogout}>Logout</button>



//               </form>

//             </div>

//           </div>

//         </nav>



//         {/* <h2 className="page-title">Home</h2> */}

//         {/* <p>Welcome Back <b>{username}</b></p> */}

//         {/* <marquee behavior=" " direction="">Wel-Come Back <b>{username}</b> </marquee> */}

//         <div style={{ padding: '10px' }} className="alert alert-success" role="alert">

//           <marquee behavior="" direction="">Wel-Come Back <b>{username}</b></marquee>

//         </div>

//       </div>

//       <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

//         <div class="carousel-inner">

//           <div class="carousel-item active">

//             <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=100" class="d-block w-100" alt="..."/>

//           </div>

//           <div class="carousel-item">

//             <img src="https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" class="d-block w-100" alt="..."/>

//           </div>

//           <div class="carousel-item">

//             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" class="d-block w-100" alt="..."/>

//           </div>

//         </div>

//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">

//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>

//           <span class="visually-hidden">Previous</span>

//         </button>

//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">

//           <span class="carousel-control-next-icon" aria-hidden="true"></span>

//           <span class="visually-hidden">Next</span>

//         </button>

//       </div>

//     </div>



//   )

// }



// export default Home;