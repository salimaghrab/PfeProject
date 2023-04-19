/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../_metronic/helpers'
import { Card5 } from '../../../../_metronic/partials/content/cards/Card5'

export function ConfigMultiSociete() {
  return (
    <>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Configuration Multi_Société</span>
          </h3>

        </div>
        <div className="card-body">
          <div className='row g-5 g-xxl-8'>
            <div className='fv-row mb-8'>

              <input
                className=" bg-transparent"
                type="checkbox"
              />
              Activer Option Multi Societe
             
              <Link
                className='btn btn-sm btn-light-primary float-right' to=''   style={{ marginLeft: '500px' }} >
                Valider
              </Link>
              
            </div>
          </div>
          <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Liste de Societe</span>
              </h3>
            </div>
            <div className="card-body">
            <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-200px rounded-start'>Societe</th>
                  <th className='min-w-200px'>Details</th>
                  <th className='min-w-175px text-end rounded-end'> Actions</th>
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
                          axia
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                     bla bla bla
                    </a>
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
            </div>
            </div>
        </div>
      </div>
      <br></br>
    </>
  )
}
