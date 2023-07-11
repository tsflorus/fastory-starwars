import {FieldValues, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../../constants/routes";
import {Loader} from "../../components/Loader";

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
    if (success && userInfo) navigate(routes.search)
  }, [navigate, userInfo, success])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {error && <h2 className="mb-2 text-center">Doucement jeune Padawan ! Il semblerait qu'une erreur soit survenue ! <br /> {error}</h2>}
      <h1 className="text-5xl font-jedi-outlined mb-10 text-yellow text-center">Base de données de l'empire</h1>
      <form className="flex flex-col justify-center md:w-3/12 w-8/12" onSubmit={handleSubmit(submitForm)}>
          <input
            placeholder="Nom d'utilisation"
            type='username'
            className='border-white bg-black p-2 font-starJedi rounded'
            style={{borderWidth: 1}}
            {...register('username')}
            required
          />

          <input
            placeholder='Mot de passe'
            type='password'
            className='border-white bg-black p-2 font-starJedi rounded mt-5'
            style={{borderWidth: 1}}
            {...register('password')}
            required
          />
        <button type='submit' className='button border-2 border-yellow mt-10 w-4/12 rounded-2xl mx-auto font-jedi text-yellow p-2'>
          Entrer
        </button>
      </form>
      {loading && <Loader />}
    </div>
  )
}
export default LoginScreen
