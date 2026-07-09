'use client'

import { AI_TOOLS, CLIENT_BENEFITS, MY_BENEFITS } from '@constants/ailover'

import styles from './ailover.module.css'

export const AILover = () => {
  return (
    <section className={styles.section} id='ai'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            I love&nbsp;<span className={styles.titleAccent}>AI</span>&nbsp;— and so do my clients
          </h2>
          <p className={styles.subtitle}>
            AI is not a shortcut — it&#39;s a force multiplier. I integrate AI tools into every stage of my workflow: planning, coding, reviewing, and
            delivering. The result is sharper work, faster timelines, and happier clients.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.columnBadge}>For me</div>
              <h3 className={styles.columnTitle}>What I gain as a developer</h3>
            </div>
            <div className={styles.cardList}>
              {MY_BENEFITS.map(item => (
                <div className={styles.card} key={item.id}>
                  <div className={styles.iconWrap}>{item.icon}</div>
                  <div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.columnBadge}>For clients</div>
              <h3 className={styles.columnTitle}>What you receive in return</h3>
            </div>
            <div className={styles.cardList}>
              {CLIENT_BENEFITS.map(item => (
                <div className={styles.card} key={item.id}>
                  <div className={styles.iconWrap}>{item.icon}</div>
                  <div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.columnTitle}>Tools I use</h3>
          <div className={styles.toolsRow}>
            {AI_TOOLS.map(tool => (
              <div className={styles.toolCard} key={tool.id}>
                <div
                  className={styles.toolIconWrap}
                  style={{ background: `${tool.color}20`, border: `1px solid ${tool.color}40`, color: tool.color }}
                >
                  {tool.icon}
                </div>
                <span className={styles.toolName}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
