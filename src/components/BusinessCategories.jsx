import { ArrowUpRight } from 'lucide-react'

const categories = [
  { title: 'Retail', image: '/images/retail.jpg', className: 'category-card--large', note: 'Products / storefronts' },
  { title: 'Technology', image: '/images/technology.jpg', className: 'category-card--wide', note: 'Ideas / products' },
  { title: 'Fashion', image: '/images/fashion.jpg', className: '', note: 'Craft / commerce' },
  { title: 'Professional Services', image: '/images/professional.jpg', className: 'category-card--wide', note: 'Expertise / impact' },
  { title: 'Food & Hospitality', image: '/images/food.jpg', className: '', note: 'Experience / community' },
  { title: 'Creative Businesses', image: '/images/hero-founder.jpg', className: '', note: 'Culture / expression' },
]

export default function BusinessCategories() {
  return (
    <section className="section section--ink categories-section">
      <div className="container">
        <div className="categories-heading reveal reveal--up">
          <div>
            <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> Businesses we support</p>
            <h2>Whatever you’re building, start with the right foundation.</h2>
          </div>
          <p className="section-lede section-lede--light">Different businesses have different questions. SnapBiz helps you find the path that fits.</p>
        </div>
        <div className="categories-grid">
          {categories.map(({ title, image, className, note }) => (
            <a className={`category-card ${className} reveal reveal--up`} href="#get-started" key={title}>
              <img src={image} alt={`${title} business`} />
              <div className="category-shade" />
              <div className="category-meta"><span>{note}</span><ArrowUpRight size={17} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
