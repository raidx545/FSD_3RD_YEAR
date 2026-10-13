import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Welcome to FSD Class</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/registration'>Registration</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}
