// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState } from "react";

// // Using inline styling
// const Card = ({ title }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #4b5362",
//         padding: "20 px",
//         margin: "10px",
//         backgroundColor: "#31363f",
//         borderRadius: "10px",
//         minHeight: "100ppx",
//       }}
//     >
//       <h2>{title}</h2>
//     </div>
//   );
// };

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️‍🔥" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Lion King" />
    </div>
  );
};

export default App;
