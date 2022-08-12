import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/Logo";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.loggedIn);
  const errors = null; //useSelector((state) => state.auth.errors);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const handleRegister = () => {
    router.push("/register");
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
                <h1 className="a-h">Sign-In </h1>
                {errors
                  ? errors.map((error, i) => (
                      <p key={i} className="error-text">
                        {error}
                      </p>
                    ))
                  : ""}
                <form onSubmit={(e) => submitForm(e)}>
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
                  <div className="w-full  flex flex-col">
                    <input
                      className="a-button-input hover:bg-yellow-600"
                      type="submit"
                      value="login to your Amazon account"
                    />
                  </div>
                  <div className="w-full mt-3 flex flex-col">
                    <p className="text-sm">
                      By continuing, you agree to Amazon's{" "}
                      <span className="blue-links"> Conditions of Us</span>
                      {""} and {""}
                      <span className="blue-links">Privacy {""}</span>
                      Notice.
                    </p>
                    <p className="my-2 blue-links">Need Help ?</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="text-xs text-gray-400 mb-2">New to Amazon?</p>
            <button
              onClick={() => handleRegister()}
              className="a-button-input-primary w-full"
            >
              Create your Amazon account
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
