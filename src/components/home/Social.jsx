import React from 'react'
import { UilInstagram, UilGithubAlt } from '@iconscout/react-unicons'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ghamaw" className="home__social-icon" target="_blank" rel='noreferrer'>
                <UilInstagram />
            </a>

            <a href="https://github.com/ghamaw" className="home__social-icon" target="_blank" rel='noreferrer'>
                <UilGithubAlt />
            </a>
        </div>
    )
}

export default Social