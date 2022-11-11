import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Login.css";
import { Link } from "react-router-dom";
function Register() {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);
  const [confpass, setconfpass] = useState();
  const signUp = async () => {
    console.log("signing..");
    if (pass == confpass) {
      try {
        const { user, session, error } = await supabase.auth.signUp({
          email: mail,
          password: pass,
        });

        console.log(user);
        if (user) {
          alert("signed up!", user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="Register">
      <div className="Login__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(119, 78, 158)"
          class="bi bi-box-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
          />
        </svg>
        Kanban
      </div>
      <div className="Login__credentials">
        <input placeholder="email" onChange={(e) => setMail(e.target.value)} />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setconfpass(e.target.value)}
        />
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/login">
          <a>Already signed in? Login</a>
        </Link>

        <button onClick={() => signUp()}>Register</button>
      </div>
    </div>
  );
}

export default Register;
