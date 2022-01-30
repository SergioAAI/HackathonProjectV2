import { Button, Box, Toaster, useToaster } from '@twilio-paste/core';

const StatusToast = () => {
  const toaster = useToaster();
  const handleClick = () => {
    toaster.push({
      message: 'Selection was successfully saved to your profile',
      variant: 'success',
    });
  };
  return (
    <Box margin="space80">
      <Button variant="primary" onClick={handleClick}>
        Add a toast
      </Button>
      <Toaster {...toaster} />
    </Box>
  );
};

export default StatusToast;
