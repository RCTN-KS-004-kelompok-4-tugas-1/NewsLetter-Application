import { useSelector } from 'react-redux';

function useSaved() {
  const newsList = useSelector((state) => state.saved.value);
  return [newsList];
}

export default useSaved;
