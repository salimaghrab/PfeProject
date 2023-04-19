import { SetStateAction, useEffect, useRef, useState } from "react";
import { KTSVG } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

export function GestionVehicule() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        setSelectedFiles(files);
    };

    const handleUploadClick = () => {
        if (selectedFiles) {
            // upload the selected files here
            console.log(selectedFiles);
        }
    };
    {/**Alert   */ }

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    {/**color  */ }
    const [color, setColor] = useState('#000000'); // initial color is black
    const [color1, setColor1] = useState('#000000');
    function handleColorChange(event: { target: { value: SetStateAction<string>; }; }) {
        setColor(event.target.value);
    }
    function handleColorChange1(event: { target: { value: SetStateAction<string>; }; }) {
        setColor1(event.target.value);
    }
    {/** View Button  */ }
    const [activeView, setActiveView] = useState('CarteGrise');

    const handleCarteGriseClick = () => {
        setActiveView('CarteGrise');
    };


    const handleDiversClick = () => {
        setActiveView('Divers');
    };

    const handleDocumentClick = () => {
        setActiveView('Document');
    };
    {/**Date input  */ }
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };
    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    const [selectedDate2, setSelectedDate2] = useState("");

    const handleDateChange2 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate2(e.target.value);
    };
    const [selectedDate3, setSelectedDate3] = useState("");

    const handleDateChange3 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate3(e.target.value);
    };
    const [selectedDate4, setSelectedDate4] = useState("");

    const handleDateChange4 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate4(e.target.value);
    };
    const [selectedDate5, setSelectedDate5] = useState("");

    const handleDateChange5 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate5(e.target.value);
    };
    return (
        <>

            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <Link
                            style={{ marginLeft: 1050 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
                        </Link>
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
                                    <th className='ps-4 min-w-150 rounded-start'>Code Interne</th>
                                    <th className='min-w-150'>Immatriculation</th>
                                    <th className='min-w-150'>Client</th>
                                    <th className='min-w-150'>Kilometrage</th>
                                    <th className='min-w-150'>prochaine Intervention</th>
                                    <th className='min-w-150'>Dernier Intervention</th>
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
                                                    jgfdxx
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
                        <div className="card" >
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Informations Vehicule</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Code Interne </label>
                                            <input
                                                readOnly
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                className='form-control bg-transparent'

                                            />

                                        </div>
                                    </div>
                                    <div className='col-xl-3'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Immatriculation </label>
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
                                            <label
                                                style={{ marginTop: 50 }}>
                                                <input
                                                    className=" bg-transparent"
                                                    type="checkbox"


                                                />
                                                En someil
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Code Client </label>
                                            <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>fgj</option>
                                                <option> fjf</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Modele </label>
                                            <input
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
                                            <label className='form-label fw-bolder text-dark fs-6'>Marque </label>
                                            <input
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
                                            <label className='form-label fw-bolder text-dark fs-6'>Version </label>
                                            <input
                                                readOnly
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
                    <div className="card">
                        <div className="card-body">
                            <div >
                                <button className='btn btn-light-primary' onClick={handleCarteGriseClick} >Carte Grise</button>
                                <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDiversClick}>Divers</button>
                                <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDocumentClick}>Document</button>
                            </div>
                            {activeView === 'CarteGrise' && (
                                <div>

                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>N Carte Grise </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Poids a Vide </label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date Carte Grise </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>N chaissis </label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date de M.E.C </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                        className='form-control bg-transparent'
                                                    />

                                                </div>

                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>N Moteur </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Genre/Type </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Kilometrage  </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>N Serie </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Km/An </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Energie</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Puissance reelle </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Puissance Fisc</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Annee Modele</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Place</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Premiere main </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Poids</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Categorie </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Assurance</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Type Assurance </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Duree Assurance</label>

                                                    <input
                                                        readOnly
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
                            )}
                            {activeView === 'Divers' && (
                                <div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Carrosserie</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Type </label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Coleur Exterieur </label>
                                                    <input
                                                        type="color" value={color} onChange={handleColorChange}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Coleur Interieur </label>
                                                    <input
                                                        type="color" value={color1} onChange={handleColorChange1}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Code Peinture </label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                        autoComplete='off'
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div >
                                                <h3 className='card-title align-items-start flex-column'>
                                                    <span className='card-label fw-bold fs-3 mb-1'>Garantier</span>
                                                </h3>
                                            </div>
                                            <br></br>
                                            <div className='col-xl-3'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Garantie de  </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-3'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>a  </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate2} onChange={handleDateChange2}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Ralence le </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate3} onChange={handleDateChange3}
                                                        className='form-control bg-transparent'
                                                    />

                                                </div>

                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Type Garantie </label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>suite garantie</label>
                                                    <input
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Km garantis </label>
                                                    <input
                                                        readOnly
                                                        placeholder=''
                                                        type='text'
                                                        autoComplete='off'
                                                        className='form-control bg-transparent'

                                                    />

                                                </div>
                                            </div>
                                            <div >
                                                <h3 className='card-title align-items-start flex-column'>
                                                    <span className='card-label fw-bold fs-3 mb-1'>Intervention</span>
                                                </h3>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Controle Technique </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate4} onChange={handleDateChange4}
                                                        className='form-control bg-transparent'
                                                    />


                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Revision</label>
                                                    <input
                                                        type="date" id="date" value={selectedDate5} onChange={handleDateChange5}
                                                        className='form-control bg-transparent'
                                                    />


                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Vidange</label>
                                                    <input
                                                        type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                        className='form-control bg-transparent'
                                                    />

                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Date Derniere Intervention </label>
                                                    <input
                                                        readOnly
                                                        type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                        className='form-control bg-transparent'
                                                    />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeView === 'Document' && (
                                <div>
                                    <div className="card-body">
                                        <div>
                                            <input className='btn btn-light-primary' type="file" onChange={handleInputChange} />
                                            <button style={{ marginLeft: 10 }} className='btn btn-light-primary' onClick={handleUploadClick}>Upload</button>
                                        </div>
                                    </div>
                                </div>
                            )}
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