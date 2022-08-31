import { HTMLAttributes, useEffect, useState } from 'react';
import useInterval from '../../../../utils/hooks';
import { Seconds } from '../../../../utils/types';

interface CountDownProps extends HTMLAttributes<HTMLDivElement> {
  totalTime: Seconds;
  tickFrequency: Seconds;
  onTick: (timeLeft: Seconds) => void;
}

const CountDown = ({
  totalTime,
  tickFrequency,
  onTick,
  ...divAttributes
}: CountDownProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useInterval(() => {
    setTimeLeft(timeLeft - tickFrequency);
  }, tickFrequency * 1000);

  useEffect(() => {
    onTick(timeLeft);
  }, [onTick, timeLeft]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={`${divAttributes.className || ''}`}>
      {timeLeft}/{totalTime}
    </div>
  );
};

export default CountDown;
