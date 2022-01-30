import { Label, DatePicker, HelpText, Anchor, Box } from '@twilio-paste/core';

const RequiredDatePicker = (props) => {
  let separator = '-';
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let minDate = `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;

  const uidDP = Math.random();
  const uidHT = Math.random();
  return (
    <Box margin="space80">
      <Label htmlFor={uidDP} required>
        What day would you like to send the request?
      </Label>
      <DatePicker
        required
        id={uidDP.toString()}
        min={minDate}
        aria-describedby={uidHT}
        {...props}
      />
      <HelpText id={uidHT}>Enter a date above.</HelpText>
    </Box>
  );
};

export default RequiredDatePicker;
