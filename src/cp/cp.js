import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const childProcessPath = path.join(process.cwd(), 'src/cp/files/script.js');
  const childProcess = fork(childProcessPath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
