// Lucide-style stroke icons used by the Rahgozar UI kit.
// 1.75 stroke, rounded line caps, currentColor.
const Icon = ({ children, size = 22, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

const IconSearch    = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></Icon>;
const IconClose     = (p) => <Icon {...p}><path d="M18 6 6 18M6 6l12 12"/></Icon>;
const IconChevronL  = (p) => <Icon {...p}><path d="m15 18-6-6 6-6"/></Icon>;
const IconChevronR  = (p) => <Icon {...p}><path d="m9 18 6-6-6-6"/></Icon>;
const IconChevronD  = (p) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>;
const IconMenu      = (p) => <Icon {...p}><path d="M3 12h18M3 6h18M3 18h18"/></Icon>;
const IconUser      = (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></Icon>;
const IconArrowR    = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
const IconArrowL    = (p) => <Icon {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></Icon>;
const IconCheck     = (p) => <Icon {...p}><path d="m5 12 5 5 9-11"/></Icon>;

Object.assign(window, {
  Icon, IconSearch, IconClose, IconChevronL, IconChevronR, IconChevronD,
  IconMenu, IconUser, IconArrowR, IconArrowL, IconCheck,
});
