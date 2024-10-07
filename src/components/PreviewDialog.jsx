import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PreviewDialog({ open, onClose, image ,text}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md" // Adjust maximum width here
      fullWidth // Make dialog full width
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {text}
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <img src={image} alt="Certificate Preview" style={{ width: '100%', height: 'auto' }} />
      </DialogContent>
    </Dialog>
  );
}

export default PreviewDialog;
