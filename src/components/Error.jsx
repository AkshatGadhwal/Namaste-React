import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops!!! Something went wrong!!</h1>
        <h2>{error.status}:{error.statusText}</h2>
    </div>
  )
}

export default Error