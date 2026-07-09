import { SECTIONIDS } from '@constants/data'

export const handleActiveLinkOnScroll = () => {
  const sections = SECTIONIDS.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
  const navItems = [...(document.querySelectorAll('.navItem') as NodeListOf<HTMLAnchorElement>)]
  let currentSectionId = SECTIONIDS[0]

  for (const sectionEl of sections) {
    if (window.scrollY >= sectionEl.offsetTop - 200) {
      currentSectionId = sectionEl.id
    }
  }
  navItems.forEach(navItem => {
    const isActive = navItem.href.includes(currentSectionId)
    navItem.style.color = isActive ? 'black' : 'gray'
    navItem.style.fontWeight = isActive ? '700' : '400'
  })
}
