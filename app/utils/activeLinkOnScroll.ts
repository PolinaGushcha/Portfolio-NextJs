export const handleScroll = () => {
  const components = [
    document.getElementById('home'),
    document.getElementById('experience'),
    document.getElementById('skills'),
    document.getElementById('works'),
    document.getElementById('contacts')
  ]
  const navItems = [...(document.querySelectorAll('.navItem') as NodeListOf<HTMLAnchorElement>)]
  let currentSection = 'home'

  components.forEach(section => {
    if (section?.offsetTop) {
      if (window.scrollY >= section.offsetTop - 200) {
        currentSection = section.id
      }
    }
  })
  navItems.forEach(navA => {
    if (navA.href.includes(currentSection)) {
      navItems.forEach(el => {
        el.style.color = 'gray'
        el.style.fontWeight = '400'
      })
      navA.style.color = 'black'
      navA.style.fontWeight = '700'
    }
  })
}
