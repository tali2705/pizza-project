import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>{!error && `Something went wrong :(`}</h1>
      <h3>{error?.data || error?.message || `Path doesn't exist`}</h3>
      <LinkButton to="-1">Go back</LinkButton>
    </div>
  );
}

export default Error;
