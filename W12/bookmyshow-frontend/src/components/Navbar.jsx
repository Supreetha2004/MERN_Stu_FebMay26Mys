// src/components/Navbar.jsx


/*
=========================================================
SPRINT 1 – SHARED INFRASTRUCTURE


TOPICS COVERED:


✓ NavLink
✓ Active Links
✓ SPA Navigation


WHY THIS COMPONENT?


The Navbar appears throughout the
application.


Responsibilities:


✓ Primary Navigation
✓ Active Link Highlighting
✓ Easy Access to Features


Real BookMyShow:


Movies
Events
Sports
Profile


Students immediately understand
why navigation matters.


=========================================================
*/


// import { NavLink } from "react-router-dom";


// export default function Navbar() {


//   return (


//     <nav style={styles.nav}>


//       <h2 style={styles.logo}>
//         BookMyShow
//       </h2>


//       <div style={styles.links}>


//         <NavLink
//           to="/"
//           end
//           style={getNavStyle}
//         >
//           Home
//         </NavLink>


//         <NavLink
//           to="/movies"
//           style={getNavStyle}
//         >
//           Movies
//         </NavLink>


//         <NavLink
        //   to="/bookings"
        //   style={getNavStyle}
        // >
        //   My Bookings
        // </NavLink>


        // <NavLink
        //   to="/login"
        //   style={getNavStyle}
        // >
        //   Login
        // </NavLink>


        // <NavLink
        //   to="/signup"
        //   style={getNavStyle}
        // >
        //   Signup
        // </NavLink>


        // <NavLink
        //   to="/admin"
        //   style={getNavStyle}
        // >
        //   Admin
        // </NavLink>


    //   </div>


    // </nav>


//   );


// }


/*
=========================================================
ACTIVE LINK STYLING


NavLink provides:


isActive


which tells us whether the
current URL matches.


=========================================================
*/


// function getNavStyle({ isActive }) {


//   return {


//     textDecoration: "none",


//     color: isActive
//       ? "#d32f2f"
//       : "#333",


//     fontWeight: isActive
//       ? "bold"
//       : "normal",


//     borderBottom: isActive
//       ? "2px solid #d32f2f"
//       : "none",


//     paddingBottom: "4px"


//   };


// }


// const styles = {


//   nav: {


//     display: "flex",


//     justifyContent: "space-between",


//     alignItems: "center",


//     padding: "15px 25px",


//     background: "#fff",


//     borderBottom: "1px solid #ddd"


//   },


//   logo: {


//     color: "#d32f2f",


//     margin: 0


//   },


//   links: {


//     display: "flex",


//     gap: "20px"


//   }


// };


/*
=========================================================
KEY TAKEAWAYS


1. NavLink enables SPA navigation.


2. Active links improve UX.


3. Navigation should remain simple
   and reusable.


=========================================================
*/

// src/components/Navbar.jsx


/*
=========================================================
SPRINT 2 – AUTH-AWARE NAVBAR


TOPICS COVERED:


✓ Conditional Rendering
✓ useAuth
✓ useNavigate
✓ Logout


WHY THIS COMPONENT?


Real applications adapt their UI
based on authentication state.


Logged Out
↓
Login
Signup


Logged In
↓
Bookings
Logout


Admin
↓
Admin Dashboard


=========================================================
*/


import { NavLink, useNavigate } from "react-router-dom";


import { useAuth } from "../hooks/useAuth";


export default function Navbar() {
  const navigate = useNavigate();


  const {
    isAuthenticated,


    logout,


    user,
  } = useAuth();


  function handleLogout() {
    logout();


    navigate("/login");
  }


  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>BookMyShow</h2>


      <div style={styles.links}>
        <NavLink to="/" end style={getNavStyle}>
          Home
        </NavLink>


        <NavLink to="/movies" style={getNavStyle}>
          Movies
        </NavLink>


        {isAuthenticated && (
          <NavLink to="/bookings" style={getNavStyle}>
            Bookings
          </NavLink>
        )}


        {user?.role === "admin" && (
          <NavLink to="/admin/dashboard" style={getNavStyle}>
            Admin
          </NavLink>
        )}


        {!isAuthenticated ? (
          <>
            <NavLink to="/login" style={getNavStyle}>
              Login
            </NavLink>


            <NavLink to="/signup" style={getNavStyle}>
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <span style={styles.userName}>Hi, {user?.name}</span>


            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}


function getNavStyle({ isActive }) {
  return {
    textDecoration: "none",


    color: isActive ? "#d32f2f" : "#333",


    fontWeight: isActive ? "bold" : "normal",


    borderBottom: isActive ? "2px solid #d32f2f" : "none",


    paddingBottom: "4px",
  };
}


const styles = {
  nav: {
    display: "flex",


    justifyContent: "space-between",


    alignItems: "center",


    padding: "15px 25px",


    borderBottom: "1px solid #ddd",


    marginBottom: "20px",
  },


  logo: {
    margin: 0,


    color: "#d32f2f",
  },


  links: {
    display: "flex",


    gap: "20px",


    alignItems: "center",
  },

  

  userName: {
    fontWeight: "bold",
  },


  logoutButton: {
    cursor: "pointer",


    padding: "6px 12px",
  },
};


/*
=========================================================
NAVBAR STATES


Logged Out


Home
Movies
Login
Signup




Customer


Home
Movies
Bookings
Logout




Admin


Home
Movies
Bookings
Admin
Logout


=========================================================


KEY TAKEAWAYS


1. UI should reflect authentication state.


2. Logout affects the entire app instantly.


3. Role-based navigation improves UX.


=========================================================
*/
