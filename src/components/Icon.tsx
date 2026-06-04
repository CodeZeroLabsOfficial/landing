import type { IconName } from "@/lib/content";

const paths: Record<IconName, React.ReactNode> = {
  route: (
    <>
      <circle cx="6" cy="19" r="2.4" />
      <circle cx="18" cy="5" r="2.4" />
      <path d="M8.4 19H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.6" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M3 10h18" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
  ),
  phone: (
    <path d="M6.5 3.5h3l1.4 4-2 1.4a12 12 0 0 0 5.2 5.2l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  heart: (
    <path d="M12 19.5l-7-6.7a4.3 4.3 0 0 1 6-6.2l1 .9 1-.9a4.3 4.3 0 0 1 6 6.2l-7 6.7z" />
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16v-3M12 16V8M16 16v-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5 5 0 0 0-2.4-4" />
    </>
  ),
  bell: (
    <path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 2H5l1.5-2zM10 19.5a2 2 0 0 0 4 0" />
  ),
  dumbbell: (
    <>
      <path d="M3 9.5v5M6 7.5v9M18 7.5v9M21 9.5v5M6 12h12" />
    </>
  ),
  flame: (
    <path d="M12 3.5s5 3.7 5 8.5a5 5 0 0 1-10 0c0-1.7.8-3 1.7-4 .2 1 .9 1.8 1.8 1.8 1.3 0 1.5-1.5 1-3.3-.3-1.3-.3-2.3.5-3z" />
  ),
  trophy: (
    <>
      <path d="M7 4.5h10v3a5 5 0 0 1-10 0v-3z" />
      <path d="M7 5.5H4.5V7A2.5 2.5 0 0 0 7 9.5M17 5.5h2.5V7A2.5 2.5 0 0 1 17 9.5M12 12.5v3M9 19.5h6M10 19.5v-1.5h4v1.5" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M14 14h2v2M20 14v2M14 20h6M18 18v2" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
