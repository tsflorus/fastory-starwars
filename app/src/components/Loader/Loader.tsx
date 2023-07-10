import './loader.css';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/bb8.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="loader-container">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
      <h1 className="text-2xl font-starJedi">Chargement en cours</h1>
    </div>
  )
}

export default Loader
