import { MantineProvider } from '@mantine/core';
import { BasicAppShell } from './components/BasicAppShell';
// core styles are required for all packages
import '@mantine/core/styles.css';
import { Profiler } from 'react';

function App() {
  return (
    <Profiler>
      <MantineProvider >
        <BasicAppShell/>
      </MantineProvider>
    </Profiler>
  );
}

export default App;
