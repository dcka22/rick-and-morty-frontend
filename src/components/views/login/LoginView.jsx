import "./loginView.scss";

export default function LoginView(props) {
  const { handleUsername, handlePassword, username, handleSubmit, showError } =
    props;

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            className='login-username'
            type='text'
            value={username}
            onChange={(e) => handleUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className='login-password'
            type='password'
            onChange={(e) => handlePassword(e.target.value)}
          />
        </label>
        <div>
          <button className='login-button btn-states' type='submit'>
            Login
          </button>
        </div>
        {showError && (
          <div className='warningErrorLogin'>
            Sorry, the password or the username is incorrect. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
