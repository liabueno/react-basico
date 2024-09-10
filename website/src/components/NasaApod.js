import React, { useEffect, useState } from 'react';
import './NasaApod.css'; 

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const apiKey = 'lgxbCub5Tpsutg6JaMPvRXdyz5SEnuhVHZdxH4hA'; 
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchApodData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!apodData)  return (
    <div className="loading-container">
      <img src='/images/loadingImage.gif' alt="Loading..." className="loading-image" />
    </div>
  );

  return (
    <div className="container">
      <h1>Imagem Astronômica do Dia</h1>
      {apodData.media_type === 'image' ? (
        <img src={apodData.url} alt={apodData.title} />
      ) : (
        <iframe
          title="APOD Video"
          src={apodData.url}
          allowFullScreen
        ></iframe>
      )}
      <h4>{apodData.title}</h4>
    </div>
  );
};

export default NasaApod;
