function LoginButton({ type = "button", disabled = false, isLoading = false }) {
  return (
    <button
      type={type} 
      className="btn btn-primary btn-block mt-3" 
      disabled={disabled} 
    >
      {isLoading ? "Logging in..." : "Login"}
    </button>
  );
}

export default LoginButton;