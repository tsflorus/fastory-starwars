import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/dots.json';

const DotSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={30}
      width={70}
      isClickToPauseDisabled={true}
    />
  )
}

export default DotSpinner
