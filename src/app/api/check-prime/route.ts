
import { type NextRequest } from 'next/server'
import { spawn } from 'child_process';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const number = searchParams.get('number')

  if (!number) {
    return Response.json({ error: 'Number not provided' }, { status: 400 });
  }

  const executablePath = path.join(process.cwd(), 'lib', 'cpp', 'is_prime');

  const child = spawn(executablePath);

  child.stdin.write(number);
  child.stdin.end();

  let stdout = '';
  for await (const chunk of child.stdout) {
    stdout += chunk;
  }

  let stderr = '';
  for await (const chunk of child.stderr) {
    stderr += chunk;
  }

  const exitCode = await new Promise(resolve => {
    child.on('close', resolve);
  });

  if (exitCode !== 0) {
    return Response.json({ error: 'Error executing C++ code', details: stderr }, { status: 500 });
  }

  const isPrime = stdout.trim() === 'YES';

  return Response.json({ number, isPrime });
}
