import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import {isNullOrUndefined} from 'util';

import {getDateInDDMMYYYY} from '../../lib/datetime.js';

export default function FullContentViewDialog({show, handleClose, data}){
  const page = data.content;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body> {
        data.title !== 'Event' ?
        <blockquote className="blockqoute-lay">
          {page.content}
        </blockquote>
        : 
        <div>
          <p className="event-line">{ `${page.title} organized on ${getDateInDDMMYYYY(page.date)} at ${page.time} in ${page.location}.`}</p>
          <blockquote className="blockqoute-lay"> {page.content} </blockquote>
          {(page.contact !== "" && !isNullOrUndefined(page.contact)) && 
            <span className="event-link"> {`Contact : ` + page.contact} </span>
          }
          {(page.link !== "" && !isNullOrUndefined(page.link)) && 
            <p className="event-link"> {`Also visit: `}
              <a target="_blank" href ={page.link}> {page.link}</a>
            </p>
          }
        </div>
      } </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Close </Button>
      </Modal.Footer>
    </Modal>
  )
}