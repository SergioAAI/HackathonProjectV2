import {
  Box,
  Button,
  TextArea,
  Label,
  Text,
  Input,
  Flex,
  Card,
  Grid,
  Column,
} from '@twilio-paste/core';
import RequiredDatePicker from './RequiredDatePicker';
import RequiredTimePicker from './RequiredTimePicker';
import { useForm, Controller } from 'react-hook-form';
import StatusToast from './StatusToast';
import styles from './Delay.module.css';

const Delay = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    console.log(values);
    // fetch('/api/text', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(values), // body data type must match "Content-Type" header
    // });
  }
  return (
    <div>
      <Grid gutter="space30" backgroundColor="colorBackgroundPrimaryDarker">
        <Column span={8} offset={2}>
          <Card padding="space70">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box margin="space80">
                <Label htmlFor="name" required>
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ACGCUKVUK"
                  onChange=""
                  {...register('name')}
                  required
                />
              </Box>

              <Grid gutter="space20">
                <Column>
                  <Box margin="space80">
                    <Label htmlFor="number" required>
                      From Number
                    </Label>
                    <Input
                      id="from-number"
                      name="from-number"
                      type="number"
                      placeholder="1378683631"
                      onChange=""
                      {...register('from-number')}
                      required
                    />
                  </Box>
                </Column>

                <Column>
                  <Box margin="space80">
                    <Label htmlFor="number" required>
                      To Number
                    </Label>
                    <Input
                      id="to-number"
                      name="to-number"
                      type="number"
                      placeholder="1378683631"
                      onChange=""
                      {...register('to-number')}
                      required
                    />
                  </Box>
                </Column>
              </Grid>
              <Controller
                control={control}
                name="DatePicked"
                render={({ field: { onChange, onBlur, value } }) => (
                  <RequiredDatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  />
                )}
              />
              <Controller
                control={control}
                name="TimePicked"
                render={({ field: { onChange, onBlur } }) => (
                  <RequiredTimePicker onChange={onChange} onBlur={onBlur} />
                )}
              />

              <Grid gutter="space10">
                <Column>
                  <Flex hAlignContent="center">
                    <Flex>
                      <Button variant="secondary" size="small">
                        Cancel
                      </Button>
                    </Flex>
                  </Flex>
                </Column>
                <Column>
                  <Flex hAlignContent="center">
                    <Flex>
                      <Button variant="destructive" size="small" type="submit">
                        Submit
                      </Button>
                    </Flex>
                  </Flex>
                </Column>
              </Grid>

              <StatusToast />
            </form>
          </Card>
        </Column>
      </Grid>
    </div>
  );
};

export default Delay;
