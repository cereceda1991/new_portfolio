import './Cardblog.css';
const Cardblog = ({ imagePath, subtitle, content }) => {
  return (
    <section className="blog_card">
      <img src={imagePath} alt="Blog" />
      <div className="blog_card-content">
        <div className="blog_card-date"></div>
        <h4 className="blog_card-subtitle">{subtitle}</h4>
        <p className="blog_card-paragraph">{content}</p>
      </div>
    </section>
  );
};

export default Cardblog;
