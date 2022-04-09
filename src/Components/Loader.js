import React from 'react';

import { GlobalContext } from '../ContextStore/ContextAPI';

const Loader = () => {
  const { isLoading } = React.useContext(GlobalContext);
  return (
    <>
      {isLoading && (
        <>
          <div className="linear-activity">
            <div className="indeterminate"></div>
          </div>
          <div className="loader_wrap loader"></div>
        </>
      )}
    </>
  );
};

export default Loader;