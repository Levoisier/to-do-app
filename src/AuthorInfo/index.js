import React from 'react';
import './AuthorInfo.css'

function AuthorInfo() {
  return (
    <>
      <h2 className='author-info'>Made by Cristian Zapata. © All Rights Reserved.</h2>

      <ul className='links'>
        <li>
          <a href="https://www.linkedin.com/in/levoisier/">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Levoisier">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  );
}

export {AuthorInfo};