import React from "react";
function Forgot() {
  return (
    <div className="flex flex-col items-center justify-center m-5 bg-white">
      <div className="flex flex-col items-center justify-center">
        <h>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </h>
        <label for="email">
          username or email address
          <span className="text-primary-default">*</span>
        </label>
        <input type="email" id="email" className="border-2 border-stone-300" />
        <button className="bg-primary-default">RESET PASSWORD</button>
      </div>
    </div>
  );
}

export default Forgot;
