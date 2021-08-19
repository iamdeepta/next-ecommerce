import {useEffect , useRef, useState} from 'react';
import TodaySale from './carousel';
import useSwr from 'swr';
import { useRouter } from 'next/router';


const TodaySaleCarousel = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);
  // timer code
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer= () =>{
    const countDownDate = new Date('May 30, 2021 00:00:00').getTime();
    interval = setInterval(() =>{
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0){
        // stop 
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // component
  useEffect(() =>{
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const router = useRouter();

  function view_more(slug){

    router.push('/view-more/'+slug);

  }


  return (
    <div className="container">
      <div className="section section-products-featured">
        <header className="section-products-featured__header">
          <h3 className="todays-Sale">Today's Deal
            <span>
              <ul className="timer-Wrap">
                <li>{timerDays}</li>
                <li>{timerHours}</li>
                <li>{timerMinutes}</li>
                <li>{timerSeconds}</li>
              </ul>
            </span>
          </h3>
          <a href="javascript:void(0)" onClick={()=>view_more('todays-deal')} className="btn btn--rounded btn--border">view more</a>
        </header>
        
        <TodaySale products={data} />
      </div>
    </div>
  )
};

export default TodaySaleCarousel
