'use client'

import { gsapAnimation, handleAddFolderStyles } from '@utils/gsapAnimations'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import styles from './folders.module.css'
import { IBackgroundFolders } from './types'

export const Folders: React.FC<IBackgroundFolders> = ({ children }) => {
  const foldersContainer = useRef<HTMLDivElement | null>(null)
  const folderRefs = useRef<(HTMLImageElement | null)[]>([])
  if (folderRefs.current.length === 0) {
    folderRefs.current = Array.from({ length: 9 }, () => null)
  }

  useEffect(() => {
    const backgroundFolders = foldersContainer.current as HTMLDivElement
    folderRefs.current.forEach((refEl, id) =>
      gsapAnimation({
        refElement: refEl,
        refContainer: foldersContainer,
        containerEnd: backgroundFolders.offsetHeight * 1.5,
        styles: handleAddFolderStyles(refEl, id)
      })
    )
  }, [])

  return (
    <>
      <div className={styles.children}>{children}</div>
      <div ref={foldersContainer} className={styles.backgroundFolders}>
        <div className={styles.container}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Image
              key={index}
              className={styles[`homeBg${index + 1}`]}
              alt={`homeBg${index + 1}`}
              src={`backgroundFolders/homeBg${index + 1}.svg`}
              width={1}
              height={1}
              ref={el => {
                folderRefs.current[index] = el || null
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
