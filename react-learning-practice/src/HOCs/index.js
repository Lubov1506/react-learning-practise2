import React from 'react';
import { ThemeContext, UserContext } from '../contexts';

export const withTheme = WrapperComponent => {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <WrapperComponent theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export const withUser = WrapperComponent => {
  return class WrapperComponentWithUser extends React.Component {
    constructor (props) {
      super(props);
    }
    render () {
      return (
        <UserContext.Consumer>
          {([user, userLogOut]) => {
            <WrapperComponent
              user={user}
              userLogOut={userLogOut}
              {...this.props}
            />;
          }}
        </UserContext.Consumer>
      );
    }
  };
};
