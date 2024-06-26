import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { fetchData } from '../services/api';
import LinksBar from '../components/LinksBar';

interface DataItem {
  id: number;
  name: string;
  // Add other fields as needed
}

const HomePage = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container bgColor="bg-blue-500">
      <div className="container mx-auto px-4 border-2 border-gray-400 rounded-lg p-4 ">
        <LinksBar />
        <div>
          <h2>Fetched Data:</h2>
          {Array.isArray(data) && data.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              {/* Display other fields as needed */}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
