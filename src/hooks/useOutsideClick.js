import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

// const ref = useRef();

// useEffect(
//   function () {
// //detecting a click outside the modal
// function HandleClick(event) {
//   if(ref.current && !ref.current.contains(event.target)) {
//     console.log('clicked outside modal');
//     close();
//   }
// }
// document.addEventListener ('click', HandleClick, true);
// return () =>  document.removeEventListener('click', HandleClick);
// },[close])
