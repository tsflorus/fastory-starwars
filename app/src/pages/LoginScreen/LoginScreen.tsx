import {FieldValues, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../../constants/routes";

const LoginScreen = () => {
  const { loading, userInfo, error, success } = useSelector(
    // @ts-ignore
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const submitForm = (data: FieldValues) => {
    // @ts-ignore
    dispatch(loginUser(data))
  }

  useEffect(() => {
    // redirect user to the main page
    if (success && userInfo) navigate(routes.dashboard)
  }, [navigate, userInfo, success])

  return (
    <>
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined">Login</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='username'
            className='form-input'
            {...register('username')}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-input'
            {...register('password')}
            required
          />
        </div>
        <button type='submit' className='button'>
          Login
        </button>
      </form>
      {loading && <h1>Loading</h1>}
    </>
  )
}
export default LoginScreen
