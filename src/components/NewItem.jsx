
const NewItem = ({title, description , src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 p-2 px-2 mx-3" style={{maxWidth:'345px'}}>
            <img src={src? src : './images/news.jpg'} style={{height:'200px', width:'325px'}}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description? description.slice(0,90):'Click on the read more to know more about this topic'}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewItem