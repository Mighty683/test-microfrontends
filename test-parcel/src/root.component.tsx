import { useEffect } from 'react';
import { FancyName } from './FancyName';

export default function Root(props) {
  useEffect(() => {
    (function () {
      import('./lazy.helper').then(module => module.lazyAlert())
    })();
  }, []);
  
  return <section><FancyName name={props.parcelName} /> is mounted!</section>;
}
