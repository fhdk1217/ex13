import { Route, Switch } from 'react-router-dom';
import './App.css';
import ChatsPage from './components/ChatsPage';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import UsersPage from './components/UsersPage';
import { UserContext } from './components/UserContext';
import { useState } from 'react';
import { ColorContext } from './components/ColorContext';
import FooterPage from './components/FooterPage';

function App() {
    const [user, setUser] = useState('');
    const [color, setColor] = useState('primary');
    return (
        <ColorContext.Provider value={{color, setColor}}>
            <UserContext.Provider value={{user, setUser}}>
                <div className="App">
                    <HeaderPage/>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true}/>
                        <Route path="/users" component={UsersPage}/>
                        <Route path="/chats" component={ChatsPage}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </div>
            </UserContext.Provider>
        </ColorContext.Provider>
    );
}

export default App;
