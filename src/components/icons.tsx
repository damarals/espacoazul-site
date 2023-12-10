import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  Moon,
  Text,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  spinner: Loader2,
  instagram: Instagram,
  burger: Text,
  login: LogIn,
  moon: Moon,
  normalFont: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="font-normal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0, 0, 24, 24"
      {...props}
    >
      <path
        d="M9.051,13.475 L11.929,5.554 L11.976,5.554 L14.807,13.475 z M10.739,3.509 L4.127,20.491 L6.434,20.491 L8.337,15.377 L15.52,15.377 L17.375,20.491 L19.873,20.491 L13.237,3.509 z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  decreaseFont: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="font-decrease"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0, 0, 24, 24"
      {...props}
    >
      <path
        d="M7.069,13.475 L9.947,5.554 L9.995,5.554 L12.825,13.475 z M8.758,3.509 L2.146,20.491 L4.453,20.491 L6.356,15.377 L13.539,15.377 L15.394,20.491 L17.891,20.491 L11.255,3.509 z"
        fill="currentColor"
      ></path>
      <path
        d="M15.116,7.107 L15.116,9.047 L22.442,9.047 L22.442,7.107 z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  increaseFont: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="font-increase"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0, 0, 24, 24"
      {...props}
    >
      <path
        d="M7.069,13.475 L9.947,5.554 L9.995,5.554 L12.825,13.475 z M8.758,3.509 L2.146,20.491 L4.453,20.491 L6.356,15.377 L13.539,15.377 L15.394,20.491 L17.891,20.491 L11.255,3.509 z"
        fill="currentColor"
      ></path>
      <path
        d="M19.494,7.268 L19.494,4.232 L17.876,4.232 L17.876,7.268 L14.864,7.268 L14.864,8.886 L17.876,8.886 L17.876,11.922 L19.494,11.922 L19.494,8.886 L22.506,8.886 L22.506,7.268 z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  contrast: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="contrast"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0, 0, 24, 24"
      {...props}
    >
      <path
        d="M12,0.781 C18.196,0.781 23.219,5.804 23.219,12 C23.219,18.196 18.196,23.219 12,23.219 C5.804,23.219 0.781,18.196 0.781,12 C0.781,5.804 5.804,0.781 12,0.781 z M12,2.781 L11.995,2.781 L11.995,21.219 L12,21.219 C17.091,21.219 21.219,17.091 21.219,12 C21.219,6.909 17.091,2.781 12,2.781 z"
        fill="currentColor"
      ></path>
    </svg>
  ),
}
