import NavBar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import styles from '@/styles/tool.module.css'

const Layout = (props) => {
  const {children} = props
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        {children}
      </div>
      <Footer styles={styles.footer} />
    </div>
  )
}

export default Layout
