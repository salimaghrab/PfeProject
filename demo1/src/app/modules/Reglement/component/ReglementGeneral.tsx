import { FaSearch } from "react-icons/fa";
import { KTSVG } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
import { Alert } from "react-bootstrap";

export function ReglementGeneral() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };

    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [montant, setMontant] = useState("");
    const [devise, setDevise] = useState("");
    const [taux, setTaux] = useState(1);
  
    const handleMontantChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setMontant(e.target.value);
    };
  
    const handleDeviseChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setDevise(e.target.value);
      // set the taux based on the selected devise
      if (e.target.value === "euro") {
        setTaux(3.28);
      } else if (e.target.value === "dollar") {
        setTaux(2.75);
      } else {
        setTaux(1);
      }
    };
    const result = Number(montant) * taux;
    return (
        <>
            <div className='card bg-light'>
                <div className="row">
                     {/* begin::Header */}
                     <div className='card-header border-0 pt-5'>
                                <div className='col-xl-4'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Du</label>
                                        <input
                                            type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>a </label>
                                        <input
                                            type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                                <div className='card-toolbar'>
                                    {/* begin::Search */}
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="search ..."
                                            style={{ marginLeft: '20px' }}

                                        />
                                    </div>
                                </div>
                                <div className='card-toolbar'>
                                    {/* begin::Search */}
                                    <div className="input-group mb-3">

                                        <div className="input-group-append">
                                            <button className="btn  btn-light-primary" type="button">
                                                <FaSearch />
                                            </button>
                                        </div>
                                        <div className="input-group-append">

                                            <Link
                                                className='btn  btn-light-primary' to=''
                                                onClick={handleClick}
                                                style={{ marginLeft: '10px' }}>
                                                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* end::Header */}
                            <div className="col-md-4">
                            <div className="card">
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-6 fw-semibold'>Cheque</span>
                                </h3>
                                </div>
                                <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-6 fw-semibold'> Espece</span>
                                </h3>
                                </div>
                                <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-6 fw-semibold'>Virement</span>
                                </h3>
                            </div>
                        </div>
                            </div>
                    <div className="col-md-8">
                        <div className='card'>
                           
                            {/* begin::Body */}
                            <div className='card-body py-3'>
                                {/* begin::Table container */}
                                <div className='table-responsive'>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-150 rounded-start'>N Reglement </th>
                                                <th className='min-w-150'>Date </th>
                                                <th className='min-w-150'>Entree</th>
                                                <th className='min-w-150'>Sortie</th>
                                                <th className='min-w-150'>Libelle</th>
                                                <th className='min-w-150'>Nature Reglement</th>
                                                <th className='min-w-150'>Mode Reglement</th>
                                                <th className='min-w-150 text-end rounded-end'> Actions</th>
                                            </tr>
                                        </thead>
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Avoir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-end'>

                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                        <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                    </a>
                                                </td>
                                            </tr>

                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                    {/* end::Table */}
                                </div>
                                {/* end::Table container */}
                            </div>
                            {/* end::Body */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50"
                    style={{ maxHeight: "800px", overflowY: "auto" }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
 <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Informations</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Client</label>
                                <input
                                    placeholder=''
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />

                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>CIN</label>
                                <input
                                    placeholder=''
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />

                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>N Document</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>Jours</option>
                                    <option> Mois</option>
                                    <option>Annee</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    style={{ marginTop: 27 }}
                                    readOnly
                                    placeholder=''
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />

                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Date</label>
                                <input
                                    type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Libelle</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Devis</label>
                                <select
                                value={devise} onChange={handleDeviseChange}
                                    
                                    className='form-control bg-transparent'
                                >
                                     <option value="tunisien">TND</option>
          <option value="euro">Euro</option>
          <option value="dollar">Dollar</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Cours</label>
                                <input
                                value={taux}
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Montant</label>
                                <input
                                    type="number" value={montant} onChange={handleMontantChange}
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Montant en devise</label>
                                <input
                                type="text" value={result} readOnly 
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Mode Reglement</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Reference</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                <input
                                readOnly
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Commentaire</label>
                                <input
                                style={{height:70}}
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>


                    </div>
                    <a
                                href='#'
                                className='btn btn-sm btn-light-primary'
                            >
                                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                Valider
                            </a>
                            <a
                                href='#'
                                className='btn btn-sm btn-light-danger'
                                style={{ marginLeft: '10px' }}
                                onClick={() => setShowAlert(false)}
                            >
                                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                Anuuler
                            </a>
                </div>
            </div>
                    </Alert>
                    </div>
        </>
    )
}