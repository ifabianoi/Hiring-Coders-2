import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from './Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../assets/images/logo.png')}
            alt="Logo Gama Academy"
            width={200}
            height={153} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;