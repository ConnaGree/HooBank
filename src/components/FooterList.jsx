import React from 'react'

const FooterList = ({listItem}) => {
  if (!listItem) {
    console.log(`${listItem} not defined`);
    return null;
  }

  return (
    <div className="footer__list mb-5 lg:mb-0">
      <p className="text-white font-[500] mb-5">{listItem.title}</p>
      <ul className="footer__list-container">
        {listItem.links.map((list, index) => (
          <li key={index}>
            <a className="text-dimWhite text-[12px]" href={list.link}>
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList