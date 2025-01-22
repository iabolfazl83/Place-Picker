import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

function Modal({open, children}) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.querySelector('#modal')
  );
}

export default Modal;
