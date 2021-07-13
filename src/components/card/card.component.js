import React, { useState } from 'react';
import { RadarChart } from '../radar-chart';
import api from '../../utils/api';
import { Container, ContainerFlipped } from './card.styled';
import 'react-svg-radar-chart/build/css/index.css';

export const Card = ({ pokemon }) => {
  const [isSending, setIsSending] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState([]);

  const flipCard = async () => {
    if (isSending) return;
    setIsSending(true);
    const res = await api.get(`pokemon/${pokemon.id}`);
    setStats(res.data.stats);
    setFlipped(!flipped);
    setIsSending(false);
  };
  return (
    <>
      {console.log(stats)}
      {flipped
        ? (
          <ContainerFlipped onClick={flipCard}>
            <div>
              <img alt="" src={pokemon.sprite} />
              {pokemon.name}
            </div>
            <div style={{ display: 'flex' }}>
              <RadarChart
                data={stats
                  .reduce((acc, cur) => ({ ...acc, [cur.stat.name]: cur.base_stat / 150 }), {})}
              />
            </div>
            {/* {stats.map((stat) => (
              <div key={stat.stat.name}>
                {stat.stat.name}
                {' '}
                -
                {stat.base_stat}
              </div>
            ))} */}
          </ContainerFlipped>
        )
        : (
          <Container onClick={flipCard}>
            <img src={pokemon.img} alt="" />
            <div>
              {' '}
              {pokemon.name}
              {' '}
            </div>
          </Container>
        )}
    </>
  );
};

//     const sendRequest = useCallback(async () => {
//       // don't send again while we are sending
//       if (isSending) return
//       // update state
//       setIsSending(true)
//       // send the actual request
//       await API.sendRequest()
//       // once the request is sent, update state again
//       if (isMounted.current) // only update if we are still mounted
//         setIsSending(false)
//     }, [isSending]) // update the callback if the state changes

//     return (
//       <input type="button" disabled={isSending} onClick={sendRequest} />
//     )
//   }

// export default () => {
//     const [isSending, setIsSending] = useState(false)
//     const sendRequest = useCallback(async () => {
//       // don't send again while we are sending
//       if (isSending) return
//       // update state
//       setIsSending(true)
//       // send the actual request
//       await API.sendRequest()
//       // once the request is sent, update state again
//       setIsSending(false)
//     }, [isSending]) // update the callback if the state changes

//     return (
//       <input type="button" disabled={isSending} onClick={sendRequest} />
//     )
//   }

// export default () => {
//     const [isSending, setIsSending] = useState(false)
//     const isMounted = useRef(true)

//     // set isMounted to false when we unmount the component
//     useEffect(() => {
//       return () => {
//         isMounted.current = false
//       }
//     }, [])
