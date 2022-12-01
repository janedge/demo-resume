/* import { useState, useRef, useEffect} from 'react';
const useCallbackState=(initState: any)=>{
    const stateRef = useRef(null as any);
    const [state, setState] = useState(initState);

    useEffect(() => {
    stateRef.current && stateRef.current(state);
    }, [state]);

    return [
        state,
        (newState:typeof initState):Promise<typeof initState>=>
        new Promise(rel=>{stateRef.current=rel;setState(newState)}) 
    ];
}
export default useCallbackState */
import { useState, useRef, useEffect } from 'react';
const useCallbackState = initState => {
  const stateRef = useRef(null);
  const [state, setState] = useState(initState);

  useEffect(() => {
    stateRef.current && stateRef.current(state);
  }, [state]);

  return [
    state,
    newState =>
      new Promise(rel => {
        stateRef.current = rel;
        setState(newState);
      }),
  ];
};
export default useCallbackState;
