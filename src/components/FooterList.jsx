import React from 'react'

const FooterList = ({listItem}) => {
  return (
    <div className='footer__list'>
        <p>{listItem.title}</p>
        <ul className='footer__list-container'>
            {listItem.links.map((list, index) => (
                <li key={index}><a href={list.link}>{list.name}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default FooterList