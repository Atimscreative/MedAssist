import { useGetProduct } from '../services/hooks/users';

const Home = () => {
  const { data: product, isLoading } = useGetProduct('1');
  console.log(product, isLoading);

  return <div>HomePage</div>;
};

export default Home;
