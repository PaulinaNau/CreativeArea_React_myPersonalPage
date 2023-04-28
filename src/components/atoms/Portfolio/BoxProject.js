import React from 'react';
import { Subtitle } from 'assets/styles/fonts';
import { Button } from '../Button/Button';

const BoxProject = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div>
        <Subtitle className='text-center'>DIGITAL & PRINT</Subtitle>
          <a
            target="_blank"
            href="https://www.behance.net/naurecka_design"
            className="text-decoration-none"
          >
            <Button>Zobacz portfolio</Button>
          </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BoxProject;
