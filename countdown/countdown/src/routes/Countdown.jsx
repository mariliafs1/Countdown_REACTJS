import Counter from '../components/counter';
import Title from '../components/Title';
import { Navigate } from 'react-router-dom';

import useCountdown from '../hooks/useCountdown';

import { useContext } from 'react';

import { CountdownContext } from '../context/CountdownContext';



const Countdown = () => {

  //as chaves servem para desestruturar o objeto e
  //poder acessá-lo só com o event.Title por exemplo 
  const {event} = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title; //acessando o objeto mandado pelo contexto
  const eventColor = event.color;
  const [day, hour, minute, second] = useCountdown(event.date);
  
  return (
    <>
      <Title title = {eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
   </>
  );
};

export default Countdown;