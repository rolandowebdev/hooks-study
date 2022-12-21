/* eslint-disable no-unused-vars */
import {
  AdvanceUseEffect,
  AdvanceUseState,
  FunctionContext,
  ThemeProvider,
  UseContext,
  UseEffect,
  UseImperativeHandle,
  UseLayoutEffect,
  UseReducer,
  UseRef,
  UseState,
} from './components';

function App() {
  return (
    <div className='p-6 my-20'>
      <h1 className='text-4xl font-bold tracking-wide text-center uppercase'>
        Hooks Study
      </h1>
      {/* <UseState /> */}
      <UseReducer />
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandle /> */}
      {/* <UseContext /> */}
      {/* <AdvanceUseEffect /> */}
      {/* <AdvanceUseState /> */}
      {/* <ThemeProvider>
        <FunctionContext />
      </ThemeProvider> */}
    </div>
  );
}

export default App;
