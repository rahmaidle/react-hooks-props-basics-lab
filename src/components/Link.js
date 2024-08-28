import React from 'react'
import user from '../data/user'

export default function Link() {
  return (
    <div>
      <h3>Links</h3>
      <a href={user.links.github}>{user.links.github}</a>
      <a href={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
  )
}
