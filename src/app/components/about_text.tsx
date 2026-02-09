'use client'

import { useEffect, useState } from 'react'

const words = [
  'Computer Science Student',
  'Fullstack Developer',
  'Mobile App Developer',
  'Flutter Enthusiast',
  'Passionate about AI',
  'C, Java, Python Lover',
  'Web Developer',
  'Basketball & Tennis Fan',
  'Cooking Enthusiast',
  'Team Player & Collaborator'
]

export default function AboutText() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex]

      if (charIndex < currentWord.length) {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        setTimeout(() => {
          setCharIndex(0)
          setWordIndex((wordIndex + 1) % words.length)
        }, 1500)
      }
    }, 80)

    return () => clearTimeout(timeout)
  }, [charIndex, wordIndex])

  return (
    <div id="text_about" className="fade-in-rotate">
      <h2>Hello, my name is Elazar Cohen.</h2>
      <h3>
        I am{' '}
        <span style={{ color: '#ff9800', fontWeight: 'bold' }}>
          {text}
          <span className="cursor">|</span>
        </span>
      </h3>

      <p style={{ marginTop: '20px' }}>
        I am currently a third-year undergraduate student in Computer Science at Gustave Eiffel University. 
        Passionate about computer science, I love learning new things, and in this field, there is always 
        something new to discover thanks to the multitude of languages and technologies.
        <br /><br />
        I specialize in mobile application development and web development as a fullstack developer. 
        One of my ongoing projects is a Flutter application designed to help users manage their finances 
        and suggest healthy recipes based on their budget.
        <br /><br />
        I enjoy all facets of computer science, whether it's front-end, back-end, artificial intelligence, 
        or even C language for system development. My preferred programming languages are C, Flutter, Java, and Python.
        <br /><br />
        Outside of tech, I am passionate about sports like basketball and tennis, and I also enjoy cooking. 
        I appreciate teamwork and collaboration, and I believe cooperation is key to achieving great results.
      </p>
    </div>
  )
}
