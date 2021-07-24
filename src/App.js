import React from 'react';
import './App.css';
// eslint-disable-next-line
import ComponentC from './Components/ComponentC';
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line

export const UserContext = React.createContext("")
export const ChannelContext = React.createContext("")

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Spencer'}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
