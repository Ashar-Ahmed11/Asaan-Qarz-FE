import React, { useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import AppContext from './context/appContext'

const ScreenLoader = () => {
  const { homeLoaded, loadingNumber, contentLoadedByPage, postsLoaded, postById } = useContext(AppContext)
  const location = useLocation()

  const slug = useMemo(() => {
    const path = location.pathname
    if (path === '/' || path === '') return null
    if (path.startsWith('/posts')) return 'posts'
    if (path === '/success-story') return 'success'
    if (path === '/akhuwat-loan-service') return 'loan-service'
    if (path === '/akhuwat-bussiness-loan') return 'business'
    if (path === '/akhuwat-house-loan') return 'house-loan'
    if (path === '/about-us') return 'about'
    if (path === '/contact-us') return 'contact'
    if (path === '/privacy-policy') return 'privacy'
    if (path === '/disclaimer') return 'disclaimer'
    if (path === '/terms-and-conditions') return 'terms'
    return null
  }, [location.pathname])

  const allLoaded = useMemo(() => {
    const numbersLoaded = !loadingNumber
    const homeOk = !!homeLoaded
    let pageOk = true
    if (slug) {
      if (slug === 'posts') {
        // If viewing a specific post, consider loaded if it's in cache or list loaded
        const path = location.pathname
        const id = path.startsWith('/posts/') ? path.slice('/posts/'.length) : null
        pageOk = id ? (!!postById?.[id] || !!postsLoaded) : !!postsLoaded
      } else {
        // If no explicit content load flag exists for this slug, treat as loaded
        const flag = contentLoadedByPage?.[slug]
        pageOk = typeof flag === 'undefined' ? true : !!flag
      }
    }
    return numbersLoaded && homeOk && pageOk
  }, [loadingNumber, homeLoaded, contentLoadedByPage, slug, location.pathname, postById, postsLoaded])

  return (
    <div className={`screen-loader position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${allLoaded ? 'hidden' : ''}`}>
      <span className="loader"></span>
    </div>
  )
}

export default ScreenLoader