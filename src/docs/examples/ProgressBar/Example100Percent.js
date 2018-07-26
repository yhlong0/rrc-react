import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** 100% progress bar and height 15px */
export default function Example100Percent() {
    return <ProgressBar height={15} width={200} percent={100}  />
}