import React from 'react';
import Code_recommand from './Code_recommand';

const Welcome = (props) => {
  return (
    <div>
      <div className="welcome">
        <span className="welcome-text">
          {props.name}님 환영해요! 스파키와 함께 성장해나가요 😆{' '}
        </span>
      </div>
      <Code_recommand name={'Sally'} />
    </div>
  );
};

export default Welcome;
