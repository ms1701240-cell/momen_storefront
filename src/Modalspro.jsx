

const Modalspro = ({item,onclose}) => {
  return (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item.name}</h5>
            <button type="button" className="btn-close" onClick={onclose}></button>
          </div>
          <div className="modal-body">
            <p>{item.title}</p>
            <p>{item.desc2}</p>
            <img src={item.img} alt={item.name} className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modalspro