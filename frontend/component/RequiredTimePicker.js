import {
  Label,
  TimePicker,
  DatePicker,
  HelpText,
  Anchor,
  Box,
} from '@twilio-paste/core';

const RequiredTimePicker = (props) => {
  const uidTP = Math.random();
  const uidHT = Math.random();
  return (
    <Box margin="space80">
      <Label htmlFor={uidTP} required>
        What time would you like to send the request?
      </Label>
      <TimePicker required id={uidTP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a time.</HelpText>
    </Box>
  );
};

export default RequiredTimePicker;
