import { useRouter } from "next/router";
import Logo from "../components/Logo";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrepassword] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();
  const id = null; //useSelector((state) => state.register.id);
  const auth = useSelector((state) => state.auth.loggedIn);
  const errors = null; //useSelector((state) => state.register.errors);

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-3.5 px-5 bg-white">
      <Logo />
      <div className="mb-4"></div>
      <div className="a-row">
        <div className="a-row-1">
          <div className="mt-2.5">
            <div className="border-style">
              <div className="px-4 py-5 relative">
                <h1 className="a-h">Create account</h1>
                {errors
                  ? errors.map((error, i) => (
                      <p key={i} className="error-text">
                        {error}
                      </p>
                    ))
                  : ""}
                <form onSubmit={(e) => submitForm(e)}>
                  <div className="w-full  flex flex-col">
                    <label htmlFor="name">Your name</label>
                    <input
                      className="text-black focus:outline-none a-input bg-white px-1.5 py-2"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="w-full  flex flex-col">
                    <label htmlFor="email"> Email</label>
                    <input
                      className="text-black focus:outline-none a-input  bg-white px-1.5 py-2"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="w-full  flex flex-col">
                    <label htmlFor="password">Password </label>
                    <input
                      className="text-black focus:outline-none a-input bg-white px-1.5 py-2"
                      type="password"
                      name="passsword"
                      value={password}
                      placeholder="At least 6 characters"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className="a-p">Passwords must be at least 6 characters</p>
                  <div className="w-full  flex flex-col">
                    <label htmlFor="password">Re-enter password </label>
                    <input
                      className="text-black focus:outline-none a-input bg-white px-1.5 py-2"
                      type="password"
                      value={repassword}
                      name="passsword"
                      onChange={(e) => setrepassword(e.target.value)}
                    />
                    <input
                      className="a-button-input"
                      type="submit"
                      value="Create your Amazon account"
                    />
                  </div>
                  <div className="w-full mt-3 flex flex-col">
                    <p className="text-xs">
                      By continuing, you agree to Amazon's{" "}
                      <span className="blue-links"> Conditions of Us</span>
                      {""} and {""}
                      <span className="blue-links">Privacy {""}</span>
                      Notice.
                    </p>
                  </div>
                </form>
                <div className="mt-3">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <span
                      className="blue-links"
                      onClick={() => history.push("/login")}
                    >
                      Sign-In
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
