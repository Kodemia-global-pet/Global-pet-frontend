import { Box } from '@mui/system';
import React from 'react';

const CustomImage = ({...props}) => {
    return (
        <Box
            component="img"
            sx={{
                width: 1
            }}
            {...props}
        />
    )
}

export default CustomImage