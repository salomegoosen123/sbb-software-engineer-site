import logo from '../assets/sbb-logo.jpeg';

export function Logo() {
  return <img src={logo} alt="SBB Software Engineer" style={{ height: 56 }} />;
}


type Props = {
  size?: number;
  label?: string;
};

// Simple inline logo mark. Replace with your real SBB logo later.
export function Logo1({ size = 36, label = 'SBB' }: Props) {
  return (
    <div className="logo" aria-label={label} style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.08)" />
        <circle cx="32" cy="32" r="26" fill="url(#g)" opacity="0.92" />
        <text
          x="32"
          y="40"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="22"
          textAnchor="middle"
          fill="#111"
          fontWeight="800"
        >
          SBB
        </text>
      </svg>
    </div>
  );
}
