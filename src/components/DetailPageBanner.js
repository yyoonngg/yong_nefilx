import React from 'react'

const DetailPageBanner = ({detailMovie}) => {
  return (
    <section
        className="breadcrumb-area"
        style={{
          backgroundImage:
            "url(https://img5.goodfon.com/wallpaper/nbig/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg)",
        }}
      >
        <h1>NETFLIX</h1>
        <div className="breadcrumb-info">
          <a href="/" className="breadcrumb-home">
            Home
          </a>
          <div className="breadcrumb-title">{detailMovie.title}</div>
        </div>
      </section>
  )
}

export default DetailPageBanner