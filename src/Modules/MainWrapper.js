import React from 'react';
import Header from '../Components/Header';
import Toast from '../Components/Toast';
import Loader from '../Components/Loader';
import { GlobalContext } from '../ContextStore/ContextAPI';

const MainWrapper = props => {
    const { children } = props;
    const { loginState } = React.useContext(GlobalContext);

    return  <>


     <div id="app" className="container width100">
    <main>
<Toast/><Loader/>
   {loginState.isLoggedIn && <Header/>}

    {children}

    </main>
  </div>
    </>}

    export default MainWrapper