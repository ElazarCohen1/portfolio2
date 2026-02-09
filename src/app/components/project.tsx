'use client'

import Image, { StaticImageData } from 'next/image'
import github from '@/public/langage/github.png'
import Link from 'next/link'

type ProjectProps = {
  name: string
  imageUrl: StaticImageData
  href?: string
  langages: string[]
  projet?: string
  description: string
}

export default function Project({
  name,
  imageUrl,
  href,
  langages,
  projet,
  description,
}: ProjectProps) {
  return (
    <div id="block_in_project" >
      {/* Image et info du projet cliquables vers href */}
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Image
            id="image_presentation"
            src={imageUrl}
            alt={name}
            style={{ cursor: 'pointer', justifySelf:'center'}}
          />
          <p id="project_name">{name}</p>
          <p id="project_description">{description}</p>
          <p id="project_langage">{langages.join(', ')}</p>
        </Link>
      ) : (
        <>
          <Image id="image_presentation" src={imageUrl} alt={name} />
          <p id="project_name">{name}</p>
          <p id="project_description">{description}</p>
          <p id="project_langage">{langages.join(', ')}</p>
        </>
      )}

      {/* Lien GitHub */}
      {projet && (
        <a
          href={`https://github.com/Elazarcohen1/${projet}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image id="github_logo" src={github} alt="GitHub" width={50} />
        </a>
      )}
    </div>
  )
}
