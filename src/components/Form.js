import React from 'react';

const Form = ({ error, value, submit, onChange }) => {
    return (
      <form className='form-todo' onSubmit={submit}>
        <div className='form-group row align-items-center'>
          <div className='col-9 pr-0'>
            <input
              type='text'
              className='form-control-plaintext'
              placeholder='Nhập công việc muốn thực hiện?'
              required
              value={value}
              onChange={onChange}
            />
            {error && <small className='form-text text-danger'>{error}</small>}
          </div>
          <div className='col-3 text-right'>
            <button type='submit' className='btn btn-primary'>
             <i className='fas fa-plus-circle' ></i>
            </button>
          </div>
        </div>
      </form>
    )
  }
export default Form;
