import React from 'react'
import { useLocation } from 'react-router-dom'


// Used in a layout component to remain aware of the path taken by the user
export default function Breadcrumbs() {
    const location = useLocation()
    //
    let currentLink = ''
    const crumbs = location.pathname.split('/')
    //we would get [index, page1, page2] for index/page1/page2
    .filter(crumb=> crumb!=='')
    .map(crumb =>{
        currentLink+=`/${crumb}`
        return(
        <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link> {/* page2 would have link "index/page1/page2" */}
        </div>)
        })

  return (
    <div>Breadcrumbs</div>
  )
}
