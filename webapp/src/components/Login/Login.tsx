import { FunctionComponent } from "react";
import "./Login.css";

const LoginBox: FunctionComponent = () => {
  return (
    <div className="frame-div">
      <img className="xade-icon" alt="" src="./images/xade.svg" />
      <div className="group-div">
        <img className="mask-group-icon" alt="" src="./images/mask-group.svg" />
        <div className="secured-by-div">secured by</div>
      </div>
      <div className="group-div1">
        <div className="group-div2">
          <div className="group-div3">
            <div className="group-div4">
              <b className="one-app-to-manage-all-finance">
                One app to manage all finance
              </b>
              <div className="sign-in-and-explore-all-the-fe">
                Sign in and explore all the features
              </div>
            </div>
            <div className="group-div5">
              <b className="or-continue-with">or continue with:</b>
              <div className="your-email-div">Your email...</div>
              <div className="rectangle-div" />
              <img className="group-icon" alt="" src="./images/group-3.svg" />
            </div>
          </div>
          <div className="get-started-button">
            <b className="sign-in-b">Sign in</b>
          </div>
          <div className="get-started-button1">
            <b className="sign-in-b">Connect your wallet</b>
          </div>
        </div>
        <div className="group-div6">
          <div className="group-div7">
            <b className="secured-by">Secured by</b>
            <img
              className="logo-for-dark-navbar-1-1"
              alt=""
              src="./images/logofordarknavbar-1-1.svg"
            />
          </div>
          <div className="group-div8">
            <b className="dont-have-an-account-sign-up">
              Don’t have an account? Sign up
            </b>
            <div className="group-div9">
              <div className="secured-by-div1">Secured by</div>
              <img
                className="logo-for-dark-navbar-2-1"
                alt=""
                src="./images/logofordarknavbar-2-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
