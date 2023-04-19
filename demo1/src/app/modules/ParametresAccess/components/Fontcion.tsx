import { Link } from "react-router-dom";


export function Fonction(){
    return(

        <>
        <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Raccourcis</span>
              </h3>
            </div>
            <div className="card-body">
            <div className='col-xl-6'>
            <input
                className=" bg-transparent"
                type="checkbox"
              />
              F3
              <input
                className=" bg-transparent"
                type="checkbox"
                style={{ marginLeft: '155px' }}
              />
              F4
              </div>
              <br></br>
              <div className='card-toolbar'>
              <Link
                className='btn btn-sm btn-light-primary float-right' to=''    >
                Valider
              </Link>
              
              <Link
                className='btn btn-sm btn-light-primary float-right' to=''   style={{ marginLeft: '100px' }} >
                Annuler
              </Link>
              </div>
            </div>
            </div>
        </>
    )
}