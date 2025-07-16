import React from 'react';
import PropTypes from 'prop-types';

export const PropsType = (props) => {
    

    const {user,data}=props;
    const {name,old}=data


    console.log(name,old)
    console.log(user)

  return (
    <div>
    </div>
  );
};


// ✅ PropTypes validation
PropsType.propTypes = {
  name: PropTypes.string.isRequired,
};

