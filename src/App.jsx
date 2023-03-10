/* eslint-disable no-unused-vars */
import {
  AdvanceUseEffect,
  AdvanceUseReducer,
  AdvanceUseState,
  CustomHooks,
  FunctionContext,
  ThemeProvider,
  UseCallback,
  UseContext,
  UseDefferedValue,
  UseEffect,
  UseImperativeHandle,
  UseLayoutEffect,
  UseMemo,
  UseReducer,
  UseRef,
  UseState,
  UseTransition,
} from './components';

function App() {
  return (
    <div className='p-6 my-20'>
      <h1 className='text-4xl font-bold tracking-wide text-center uppercase'>
        Hooks Study
      </h1>
      {/* <CustomHooks /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandle /> */}
      {/* <UseTransition /> */}
      <UseDefferedValue />
      {/* <UseContext /> */}
      {/* <AdvanceUseState /> */}
      {/* <AdvanceUseEffect /> */}
      {/* <AdvanceUseReducer /> */}
      {/* <ThemeProvider>
        <FunctionContext />
      </ThemeProvider> */}
    </div>
  );
}

export default App;
