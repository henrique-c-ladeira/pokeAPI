import { useEffect, useState } from 'react';
import api from '../index';

export const usePokemon = () => {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('pokemon?limit=151')
      .then((response) => {
        const dataList = response.data.results;
        const cardListResponse = dataList.map((data) => {
          const id = data.url.split('/')[6];
          return {
            id,
            name: data.name,
            img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });
        setCardList(cardListResponse);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setCardList([]);
        setError(true);
        setLoading(false);
      });
  }, []);

  return [cardList, loading, error];
};
