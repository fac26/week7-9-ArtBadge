import { Link, useHistory } from 'react-router-dom';

export default function BackLink() {
  const history = useHistory();

  return <Link onClick={history.goBack}>Go Back</Link>;
}
