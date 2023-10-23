import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../Hero/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jade</h1>
            <p className={styles.description}>Full-stack developer with React, Nest, and Node.js expertise. 
            On the verge of completing a BSc in Software Engineering. Crafting digital magic!</p>
            <a className={styles.contactBtn} href='mailto:jade.isimbi.b@gmail.com'>Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("Hero/heroImage.png")} alt='Hero Image of me' />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
