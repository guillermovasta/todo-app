import type { FC } from 'react'

const TodoIcon: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" fill="none">
      <path
        stroke="#2B1887"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M20.11 4.48a3.752 3.752 0 0 0-3.61-2.73h-5a3.752 3.752 0 0 0-3.61 2.73m12.22 0c.091.324.14.666.14 1.02v0c0 .69-.56 1.25-1.25 1.25H9c-.69 0-1.25-.56-1.25-1.25v0c0-.354.049-.696.14-1.02m12.22 0c1.076.081 2.148.184 3.212.307C25.157 5 26.5 6.582 26.5 8.428V30.5a3.75 3.75 0 0 1-3.75 3.75H5.25A3.75 3.75 0 0 1 1.5 30.5V8.428C1.5 6.582 2.843 5 4.678 4.788A80.353 80.353 0 0 1 7.89 4.48"
      />
    </svg>
  )
}

export { TodoIcon }
