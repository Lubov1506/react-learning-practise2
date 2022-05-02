import React from 'react';
import styles from '../Input/Input.module.css';
import cx from 'classnames';
import { useField, ErrorMessage } from 'formik';

const Input = ({ name, ...rest }) => {
    const [field, form, meta ] = useField(name)
   
    const classNames = cx(styles.input, {
        [styles.validInput]: meta.touched && !meta.error,
        [styles.invalidInput]: meta.touched && meta.error,
            });
            return (
                <label>
              <input type='text' {...field} className={classNames} {...rest} />
            );
        <ErrorMessage name={name} />
      </label>
    );
  };

  export default Input;