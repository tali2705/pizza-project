import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to, onClick }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; {children}
      </button>
    );

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LinkButton;
