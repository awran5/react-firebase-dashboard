import React from "react"

export default function Loading() {
  return (
    <div className="loader">
      <svg viewBox="0 0 100 100" className="loader-svg">
        <path
          d="M50,87.5c-20.7,0-37.5-16.8-37.5-37.5h-5c0,23.4,19.1,42.5,42.5,42.5S92.5,73.4,92.5,50h-5
          C87.5,70.7,70.7,87.5,50,87.5z"></path>
      </svg>
    </div>
  )
}
