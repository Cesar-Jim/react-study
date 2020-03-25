import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

const MyInput = forwardRef((props, ref) => {
  const [text, setText] = useState('***');
  const entry = useRef();

  useImperativeHandle(ref, () => ({
    dispatchAlert: () => {
      alert('Hola');
    },

    setParagraph: message => {
      setText(message);
    },

    focusInput: () => {
      entry.current.focus();
    }
  }));

  return (
    <div>
      <p>{text}</p>
      <input type='text' ref={entry} />
    </div>
  );
});

const App = () => {
  const myInput = useRef();

  const handleClick = () => {
    myInput.current.setParagraph('Hello from the parent component <App />');
    myInput.current.focusInput();
  };

  return (
    <div>
      <MyInput ref={myInput} />
      <button onClick={handleClick}>Dispatch</button>
    </div>
  );
};

export default App;
