/* Inline SVG icons — same paths as the original static site. */

function Svg({ children, strokeWidth = 2, viewBox = '0 0 24 24', ...rest }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export function MenuIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CoinIcon(props) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9.5c0-1 .8-1.8 3-1.8s3 .8 3 1.8-1 1.6-3 1.9-3 .9-3 1.9.8 1.8 3 1.8 3-.8 3-1.8" />
      <path d="M12 6v1.7M12 16.3V18" />
    </Svg>
  );
}

export function UsersIcon(props) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="17" cy="10" r="2.6" />
      <path d="M2.8 19c.6-3.2 2.7-5 5.2-5s4.6 1.8 5.2 5" />
      <path d="M15.4 14.6c2-.5 3.7 1 4.3 3.4" />
    </Svg>
  );
}

export function TrendIcon(props) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function PhoneIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Svg>
  );
}

export function PinIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function GlobeIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </Svg>
  );
}

export function ClockIcon(props) {
  return (
    <Svg strokeWidth={2} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </Svg>
  );
}
