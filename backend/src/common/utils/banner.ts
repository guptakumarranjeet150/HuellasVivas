const y = '\x1b[93m'; // bright yellow
const w = '\x1b[97m'; // bright white
const c = '\x1b[36m'; // cyan
const g = '\x1b[32m'; // green
const d = '\x1b[2m';  // dim
const b = '\x1b[1m';  // bold
const r = '\x1b[0m';  // reset

export function printBanner(): void {
  const env     = process.env.NODE_ENV          ?? 'development';
  const port    = process.env.PORT              ?? '3000';
  const version = process.env.npm_package_version ?? '0.0.1';

  const lines = [
    '',
    `${y}    ██╗  ██╗██╗   ██╗███████╗██╗     ██╗      █████╗ ███████╗`,
    `    ██║  ██║██║   ██║██╔════╝██║     ██║     ██╔══██╗██╔════╝`,
    `    ███████║██║   ██║█████╗  ██║     ██║     ███████║███████╗`,
    `    ██╔══██║██║   ██║██╔══╝  ██║     ██║     ██╔══██║╚════██║`,
    `    ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║███████║`,
    `    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝`,
    `${w}    ██╗   ██╗██╗██╗   ██╗ █████╗ ███████╗`,
    `    ██║   ██║██║██║   ██║██╔══██╗██╔════╝`,
    `    ██║   ██║██║██║   ██║███████║███████╗`,
    `    ╚██╗ ██╔╝██║╚██╗ ██╔╝██╔══██║╚════██║`,
    `     ╚████╔╝ ██║ ╚████╔╝ ██║  ██║███████║`,
    `      ╚═══╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝${r}`,
    '',
    `${b}${c}    🐾  Cada huella cuenta.${r}`,
    '',
    `    ${d}Environment${r}  ${g}${env}${r}`,
    `    ${d}Port       ${r}  ${g}${port}${r}`,
    `    ${d}Version    ${r}  ${g}v${version}${r}`,
    '',
  ];

  process.stdout.write(lines.join('\n'));
}
