import { SetStateAction, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { KTSVG } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { Alert } from "react-bootstrap";
import clsx from "clsx";

const initialValues = { intitule: '', }
const ClientSchema = Yup.object().shape({
    intitule: Yup.string()
        .required('champs obligatoire')
})
export function Client() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ClientSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })



    const [selectedItem, setSelectedItem] = useState("");

    const handleSelectChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedItem(event.target.value);
    };

    const getSelectedItemText = () => {
        if (selectedItem === "client") {
            return {
                readonlyInput1: "4110013",
                readonlyInput2: "client",
                readonlyInput3: "411",
            };
        } else if (selectedItem === "prospect") {
            return {
                readonlyInput1: "PRS0004",
                readonlyInput2: "Prospect",
                readonlyInput3: "PROSPECT",

            };
        } else {
            return {
                readonlyInput1: "",
                readonlyInput2: "",
            };
        }
    };
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Liste Clients</span>
                    </h3>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search ..."
                                style={{ marginLeft: '550px' }}
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
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-150 rounded-start'>Type</th>
                                    <th className='min-w-150'>Code</th>
                                    <th className='min-w-150'>Identifiant Fiscale</th>
                                    <th className='min-w-150'>Nom</th>
                                    <th className='min-w-150'>Prenom</th>
                                    <th className='min-w-150'>Adrese</th>
                                    <th className='min-w-150'>Ville</th>
                                    <th className='min-w-150'>Compte Generale</th>
                                    <th className='min-w-150'>E-mail</th>
                                    <th className='min-w-150'>Interlocuteur</th>
                                    <th className='min-w-150'>Telephone</th>
                                    <th className='min-w-150 text-end rounded-end'> Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    jhgfff
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    ddvhhb
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    hhgfc
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    jgfdxx
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    lkhgffc
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    qsdryh
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    awtjgg
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    fdvvgg
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    vggggv
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    vggggv
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    vggggv
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
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50"
                    style={{ maxHeight: "800px", overflowY: "auto" }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card bg-light">
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-xl-3'>
                                        {/* begin::Form group */}
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                            <select className='form-select bg-transparent' value={selectedItem} onChange={handleSelectChange}>
                                                <option selected disabled hidden value=""></option>
                                                <option value="client">Client</option>
                                                <option value="prospect"> Prospect</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-3'>
                                        {/* begin::Form group */}
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Souche</label>
                                            <select className='form-select bg-transparent'  >

                                                <option value={getSelectedItemText().readonlyInput3} >{getSelectedItemText().readonlyInput3}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>intitule </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('intitule')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.intitule && formik.errors.intitule,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.intitule && !formik.errors.intitule,
                                                    }
                                                )}
                                            />
                                            {formik.touched.intitule && formik.errors.intitule && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.intitule}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Compte Tiers </label>
                                            <input
                                                readOnly value={getSelectedItemText().readonlyInput1}
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>

                                    <div className='col-xl-6'>
                                        {/* begin::Form group */}
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Qualite</label>
                                            <select className='form-select bg-transparent'  >
                                                <option selected disabled hidden value=""></option>
                                                <option selected disabled hidden value=""></option>
                                                <option>Passanger</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>compte Collectif </label>
                                            <input
                                                readOnly value={getSelectedItemText().readonlyInput2}
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Interlocuteur </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Commentaire </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Coordonnes</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Adresse </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Complement d'adresse </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Ville </label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>fgj</option>
                                            <option> fjf</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-3'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Delegation </label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>fgj</option>
                                            <option> fjf</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-3'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Localite </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>code Postal </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Pays </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>
                                {/* end::Form group */}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Telecommunication</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Telephone 1 </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Telephone 2 </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Telephone fixe </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>
                                <div className='col-xl-3'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Poste </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>
                                <div className='col-xl-3'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Telecopie </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>E-mail </label>
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
                                        <label className='form-label fw-bolder text-dark fs-6'>Site internet </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>

                                {/* end::Form group */}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Immatriculation</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Person</label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>Morale</option>
                                            <option> Physique</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Identification fiscale </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>

                                {/* end::Form group */}
                            </div>
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' to='' >

                            Valider
                        </Link>
                        <Link
                            className='btn btn-sm btn-light-danger' to='' style={{ marginLeft: 10 }}
                            onClick={() => setShowAlert(false)}>

                            fermer
                        </Link>
                    </div>
                </Alert>
            </div>
        </>
    )
}