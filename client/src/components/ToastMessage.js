import React from 'react'
import { Toast, Box } from 'gestalt'

const ToastMessage = ({ show, message }) =>
  show && (
    <Box
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 250,
          left: '50%',
          transform: 'translateX(-50%;)'
        }
      }}
      position='fixed'
    >
      <Toast color='orange' text={message} />
    </Box>
  )
export default ToastMessage
