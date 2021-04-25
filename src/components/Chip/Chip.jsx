import React from 'react';
import clsx from 'clsx';

import { AttachmentType } from '../../constants';

import './Chip.scss';

const Chip = ({type}) => {
    const classes = clsx('chip', {
        'chip_video': AttachmentType.VIDEO === type,
        'chip_link': AttachmentType.LINK === type,
        'chip_audio': AttachmentType.AUDIO === type,
        'chip_photo': AttachmentType.PHOTO === type,
    });

    return <span className={classes}>{type}</span>
};

export default Chip;
