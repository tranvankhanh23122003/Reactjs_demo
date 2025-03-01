function CorConcept({ image, title, description }) {
    return (
        <div className="product-card">
<li>
        <img src={image} style={{ width: "200px" }} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
        </div>
      
    );
  }
  export default CorConcept