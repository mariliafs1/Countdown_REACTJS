import React, {useState} from 'react';

const CountdownContext = React.createContext(null);

const CountdownProvider = ({children}) =>{ //define quem vai receber o contexto
    
    const [event, setEvent] = useState(null);

    return (
        //obrigado a transmitir um valor
         <CountdownContext.Provider value ={{event, setEvent}} > 
            {children}
        </CountdownContext.Provider>
    );
};


export {CountdownContext, CountdownProvider};
