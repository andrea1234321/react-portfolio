import React from 'react'
import ProjectList from '../../components/Projects/ProjectList'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.projectListContainer}>
      <ProjectList/>
    </div>
  )
}
