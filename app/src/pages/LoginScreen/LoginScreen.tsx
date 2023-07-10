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
          <label htmlFor='username' className="text-yellow font-jedi-outlined">Username</label>
          <input
            type='username'
            className='border-2 border-yellow bg-black'
            {...register('username')}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className="text-yellow font-jedi-outlined">Password</label>
          <input
            type='password'
            className='border-2 border-yellow bg-black'
            {...register('password')}
            required
          />
        </div>
        <button type='submit' className='button border-2 border-yellow'>
          Login
        </button>
      </form>
      {loading && <h1>Loading</h1>}
    </>
  )
}
export default LoginScreen
